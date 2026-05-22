import type { Metadata } from "next";
import TechStack from "@/components/sections/TechStack";

export const metadata: Metadata = {
  title: "Tech Stack | Full Stack AI Developer",
  description:
    "Frontend, backend, and AI tooling used to ship production-grade applications.",
};

export default function TechStackPage() {
  return (
    <main className="min-h-screen">
      <TechStack />
    </main>
  );
}
