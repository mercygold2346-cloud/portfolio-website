import type { Metadata } from "next";

import Hero from "@/components/sections/Hero";

import TechCarousel from "@/components/sections/TechCarousel";

import CTA from "@/components/sections/CTA";

import HomePageShell from "@/components/home/HomePageShell";

import ProjectProofShowcase from "@/components/home/ProjectProofShowcase";

import TechStackLogos from "@/components/home/TechStackLogos";

import DeviceMockups from "@/components/home/DeviceMockups";

import RecentLaunchesGallery from "@/components/home/RecentLaunchesGallery";

import InteractiveProjectShowcase from "@/components/home/InteractiveProjectShowcase";

import ProcessSection from "@/components/home/ProcessSection";

import DeveloperWorkspace from "@/components/home/DeveloperWorkspace";

import FeaturedWorkGallery from "@/components/home/FeaturedWorkGallery";

import CreativeShowcase from "@/components/home/CreativeShowcase";

import DeviceMockupShowcase from "@/components/home/DeviceMockupShowcase";

import WorkspaceVisuals from "@/components/home/WorkspaceVisuals";

import { siteConfig } from "@/lib/site";



export const metadata: Metadata = {

  title: `Home | ${siteConfig.name}`,

  description: siteConfig.description,

};



export default function HomePage() {

  return (

    <HomePageShell>

      <ProjectProofShowcase />

      <Hero />

      <TechStackLogos />

      <DeviceMockups />

      <RecentLaunchesGallery />

      <InteractiveProjectShowcase />

      <ProcessSection />

      <DeveloperWorkspace />

      <TechCarousel />

      <CTA />

      <FeaturedWorkGallery />

      <CreativeShowcase />

      <DeviceMockupShowcase />

      <WorkspaceVisuals />

    </HomePageShell>

  );

}

