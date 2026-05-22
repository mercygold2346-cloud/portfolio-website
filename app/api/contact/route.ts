import dns from "node:dns";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import { Resend } from "resend";

// Many home networks break IPv6 to Google; Node may try IPv6 first → "Unexpected socket close"
dns.setDefaultResultOrder("ipv4first");

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Trim + strip wrapping quotes. In .env, values with # must be quoted: GMAIL_APP_PASSWORD="abcd#efgh" */
function normalizeEnv(value: string | undefined) {
  if (!value) return "";
  return value.trim().replace(/^["']|["']$/g, "");
}

/** App passwords are 16 chars; Google often shows them with spaces — strip all whitespace & BOM-like chars */
function normalizeAppPassword(raw: string | undefined) {
  const n = normalizeEnv(raw);
  return n.replace(/[\s\uFEFF\u00A0]+/g, "");
}

type MailPayload = {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
};

type SmtpOptions = SMTPTransport.Options;

function isLikelyGmailAuthRejection(error: unknown): boolean {
  const e = error as {
    responseCode?: number;
    response?: string;
    message?: string;
  };
  const blob = `${e.response ?? ""} ${e.message ?? ""} ${String(error)}`.toLowerCase();
  if (typeof e.responseCode === "number" && e.responseCode >= 535 && e.responseCode < 540) {
    return true;
  }
  return (
    blob.includes("invalid login") ||
    blob.includes("authentication unsuccessful") ||
    blob.includes("535-5.7.8") ||
    blob.includes("534-5.7.9") ||
    blob.includes("username and password not accepted") ||
    blob.includes("bad credentials") ||
    blob.includes("535 incorrect authentication")
  );
}

function smtpLogDetail(error: unknown) {
  const e = error as { responseCode?: number; response?: string; command?: string };
  console.error("SMTP detail:", {
    responseCode: e.responseCode,
    command: e.command,
    response: e.response?.slice(0, 200),
  });
}

async function sendViaResend(mail: MailPayload, to: string, from: string) {
  const apiKey = normalizeEnv(process.env.RESEND_API_KEY);
  if (!apiKey) throw new Error("RESEND_API_KEY missing");

  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from,
    to: [to],
    replyTo: mail.replyTo,
    subject: mail.subject,
    html: mail.html,
    text: mail.text,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }
}

async function sendViaGmail(
  user: string,
  appPassword: string,
  mail: MailPayload
) {
  const auth = { user, pass: appPassword };
  const timeouts = {
    connectionTimeout: 25_000,
    greetingTimeout: 25_000,
    socketTimeout: 45_000,
  };
  const tls = { minVersion: "TLSv1.2" as const };
  const attempts: SmtpOptions[] = [
    {
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth,
      ...timeouts,
      tls,
    },
    {
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth,
      ...timeouts,
      tls,
    },
  ];

  let lastError: unknown;
  for (const options of attempts) {
    const transporter = nodemailer.createTransport(options);
    try {
      await transporter.sendMail(mail);
      return;
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resendKey = normalizeEnv(process.env.RESEND_API_KEY);
    const gmailUserRaw = normalizeEnv(process.env.GMAIL_USER);
    const gmailUser = gmailUserRaw.toLowerCase();
    const gmailAppPassword = normalizeAppPassword(process.env.GMAIL_APP_PASSWORD);
    const contactTo =
      normalizeEnv(process.env.CONTACT_TO).toLowerCase() || gmailUser;

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim());

    const mail: MailPayload = {
      from: gmailUser
        ? `"Portfolio contact" <${gmailUser}>`
        : `"Portfolio contact" <${normalizeEnv(process.env.RESEND_FROM) || "onboarding@resend.dev"}>`,
      to: contactTo,
      replyTo: email.trim(),
      subject: `Portfolio: message from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
      html: `
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${safeMessage}</p>
      `,
    };

    // --- Resend (recommended): avoids Gmail SMTP login issues on many networks ---
    if (resendKey) {
      const to = contactTo || gmailUser;
      if (!to) {
        return NextResponse.json(
          {
            error: "Set CONTACT_TO or GMAIL_USER so Resend knows where to deliver.",
            code: "MISSING_CONTACT_TO",
          },
          { status: 503 }
        );
      }
      const from =
        normalizeEnv(process.env.RESEND_FROM) ||
        "Portfolio <onboarding@resend.dev>";
      const resendMail: MailPayload = {
        ...mail,
        from,
        to,
      };
      await sendViaResend(resendMail, to, from);
      return NextResponse.json(
        { success: true, message: "Message sent" },
        { status: 200 }
      );
    }

    // --- Gmail SMTP ---
    if (!gmailUser || !gmailAppPassword) {
      console.error(
        "Contact API: add RESEND_API_KEY (easiest) or GMAIL_USER + GMAIL_APP_PASSWORD in .env.local"
      );
      return NextResponse.json(
        {
          error:
            "Email is not configured. Add RESEND_API_KEY, or GMAIL_USER + GMAIL_APP_PASSWORD, in .env.local.",
          code: "EMAIL_NOT_CONFIGURED",
        },
        { status: 503 }
      );
    }

    if (!contactTo) {
      return NextResponse.json(
        { error: "Set CONTACT_TO or GMAIL_USER for the inbox address." },
        { status: 503 }
      );
    }

    if (gmailAppPassword.length !== 16) {
      console.warn(
        `[contact] GMAIL_APP_PASSWORD length is ${gmailAppPassword.length} (expected 16 after removing spaces). Check for typos or a line break inside the value in .env.local.`
      );
    }

    const gmailMail: MailPayload = {
      ...mail,
      from: `"Portfolio contact" <${gmailUser}>`,
      to: contactTo,
    };

    await sendViaGmail(gmailUser, gmailAppPassword, gmailMail);

    return NextResponse.json(
      { success: true, message: "Message sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    smtpLogDetail(error);

    const msg = error instanceof Error ? error.message : String(error);
    const lower = msg.toLowerCase();

    let hint =
      "Could not send. Try RESEND_API_KEY (see .env.example), or check firewall / VPN for Gmail SMTP.";

    if (isLikelyGmailAuthRejection(error)) {
      hint =
        "Gmail rejected SMTP login. Checklist: (1) GMAIL_USER is the full same email you used to create the App Password. (2) Use a 16-character App Password from Google Account → Security → App passwords — not your normal Gmail password. (3) No # in the password line unless the whole value is in quotes. (4) Restart npm run dev after saving .env.local. Or set RESEND_API_KEY to skip Gmail SMTP.";
    } else if (lower.includes("invalid") && lower.includes("from")) {
      hint =
        "Resend rejected the From address. Use RESEND_FROM with a verified domain, or the default onboarding@resend.dev for testing.";
    }

    return NextResponse.json(
      { error: "Failed to send email.", hint },
      { status: 500 }
    );
  }
}
