import type { Metadata } from "next";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Services | Full Stack AI Developer",
  description:
    "AI websites, SaaS, Rork apps, Base44 builds, Replit automation, and full stack delivery.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Services />
    </main>
  );
}
