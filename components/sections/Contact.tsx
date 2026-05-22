"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { MessageCircle, Mail, ExternalLink } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

/** Shown on the Email row and used for mailto — set NEXT_PUBLIC_CONTACT_EMAIL in .env.local */
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "hello@example.com";

const emailSubject = "Portfolio / project inquiry";

/** Gmail in browser for @gmail.com; otherwise mailto (may show Windows “choose an app”) */
function emailContactHref(email: string) {
  const subject = encodeURIComponent(emailSubject);
  if (email.toLowerCase().endsWith("@gmail.com")) {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${subject}`;
  }
  return `mailto:${email}?subject=${subject}`;
}

const emailHref = emailContactHref(contactEmail);

const fieldClassName =
  "w-full px-4 py-3.5 rounded-xl border-2 text-base transition-colors shadow-sm " +
  "border-slate-300 bg-white text-slate-900 placeholder:text-slate-500 " +
  "focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/25 " +
  "dark:border-white/30 dark:bg-white/[0.12] dark:text-white dark:placeholder:text-white/60 " +
  "dark:focus:border-accent dark:focus:ring-accent/30";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const base =
          typeof data.error === "string"
            ? data.error
            : "Could not send your message. Please try again or use WhatsApp or email below.";
        const hint =
          typeof data.hint === "string" ? data.hint : "";
        toast.error(hint ? `${base} ${hint}` : base);
      }
    } catch {
      toast.error(
        "Network error. Check your connection or try WhatsApp / email instead."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "rgba(255,255,255,0.05)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
          },
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-accent">Touch</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Have a project in mind? Let&apos;s build something amazing together.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-8 space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-700 dark:text-white/80 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={fieldClassName}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 dark:text-white/80 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={fieldClassName}
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-700 dark:text-white/80 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={5}
              className={`${fieldClassName} resize-none min-h-[140px]`}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-white mb-4">Other ways to reach me</h3>
            <div className="space-y-4">
              <a
                href="https://wa.link/ilji9c"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <MessageCircle className="text-emerald-400" size={20} />
                </div>
                <div>
                  <p className="font-medium text-white">WhatsApp</p>
                  <p className="text-sm text-white/50">Chat directly</p>
                </div>
                <ExternalLink className="ml-auto text-white/40" size={18} />
              </a>
              <a
                href="https://www.fiverr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <ExternalLink className="text-green-400" size={20} />
                </div>
                <div>
                  <p className="font-medium text-white">Fiverr</p>
                  <p className="text-sm text-white/50">View my profile</p>
                </div>
                <ExternalLink className="ml-auto text-white/40" size={18} />
              </a>
              <a
                href={emailHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                title={
                  contactEmail.toLowerCase().endsWith("@gmail.com")
                    ? `Compose in Gmail to ${contactEmail}`
                    : `Open your email app to write to ${contactEmail}`
                }
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Mail className="text-accent" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-white">Email</p>
                  <p className="text-sm text-white/50 truncate">{contactEmail}</p>
                </div>
                <ExternalLink className="ml-auto shrink-0 text-white/40" size={18} aria-hidden />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
