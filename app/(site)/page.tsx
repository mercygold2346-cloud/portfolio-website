import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TechCarousel from "@/components/sections/TechCarousel";
import CTA from "@/components/sections/CTA";
import HomePageShell from "@/components/home/HomePageShell";
import ProjectProofShowcase from "@/components/home/ProjectProofShowcase";
import TechStackLogos from "@/components/home/TechStackLogos";
import ProcessSection from "@/components/home/ProcessSection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Home | ${siteConfig.name}`,
  description: siteConfig.description,
};

/**
 * Professional home flow:
 * Welcome → Featured work → Stack → Process → Tech strip → CTA
 * (Extra galleries live on /projects so the homepage stays clear.)
 */
export default function HomePage() {
  return (
    <HomePageShell>
      <Hero />
      <ProjectProofShowcase />
      <TechStackLogos />
      <ProcessSection />
      <TechCarousel />
      <CTA />
    </HomePageShell>
  );
}
