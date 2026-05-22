"use client";

import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";
import Reveal from "@/components/home/Reveal";

type HomeSectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle: string;
};

export default function HomeSectionHeader({
  eyebrow = siteConfig.name,
  title,
  subtitle,
}: HomeSectionHeaderProps) {
  return (
    <Reveal className="text-center mb-12 md:mb-14 max-w-3xl mx-auto">
      <p className="text-sm font-medium text-accent uppercase tracking-[0.18em] mb-3">
        {eyebrow}
      </p>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
        {title}
      </h2>
      <p className="text-slate-600 dark:text-white/60 text-sm md:text-base">
        {subtitle}
      </p>
    </Reveal>
  );
}
