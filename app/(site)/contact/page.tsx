import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact | Full Stack AI Developer",
  description:
    "Send a message or reach out via WhatsApp, Fiverr, and email to discuss your project.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Contact />
    </main>
  );
}
