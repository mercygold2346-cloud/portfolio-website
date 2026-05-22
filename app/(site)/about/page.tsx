import type { Metadata } from "next";
import About from "@/components/sections/About";
import WhyWorkWithMe from "@/components/sections/WhyWorkWithMe";

export const metadata: Metadata = {
  title: "About | Full Stack AI Developer",
  description:
    "Background, approach, and why teams choose to work with this full stack AI developer.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <About />
      <WhyWorkWithMe />
    </main>
  );
}
