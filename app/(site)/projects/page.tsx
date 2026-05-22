import type { Metadata } from "next";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects | Full Stack AI Developer",
  description:
    "Featured AI-powered SaaS, automation, and platform work with demos and repositories.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Projects />
    </main>
  );
}
