"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Code2, Rocket, LayoutDashboard } from "lucide-react";
import HomeSectionHeader from "@/components/home/HomeSectionHeader";
import Reveal from "@/components/home/Reveal";
import { workspaceVisuals } from "@/lib/homeGalleryImages";

const icons = [Code2, Rocket, LayoutDashboard];

export default function WorkspaceVisuals() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Developer workspace visuals"
      className="relative py-20 md:py-28 bg-background overflow-hidden border-t border-slate-200/60 dark:border-white/10"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <HomeSectionHeader
          eyebrow="Behind the build"
          title={
            <>
              Workspace &{" "}
              <span className="text-accent">deployment</span> visuals
            </>
          }
          subtitle="Editor previews, deploy targets, and production dashboards — tied to real shipped repos."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {workspaceVisuals.map((item, i) => {
            const Icon = icons[i] ?? Code2;
            return (
              <Reveal key={item.id} delay={i * 0.08}>
                <motion.article
                  whileHover={reduceMotion ? undefined : { y: -6 }}
                  className="group glass rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 hover:border-accent/35 hover:shadow-[0_0_36px_rgba(99,102,241,0.14)] transition-all duration-400"
                >
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200/60 dark:border-white/10 bg-slate-50/80 dark:bg-white/[0.03]">
                    <Icon size={16} className="text-accent" />
                    <span className="text-xs font-mono text-slate-500 dark:text-white/50">
                      {item.label}
                    </span>
                  </div>
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      loading="lazy"
                      className="object-cover object-top transition-transform duration-600 group-hover:scale-105"
                      style={{ objectPosition: item.objectPosition }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_70%_20%,rgba(99,102,241,0.2),transparent_50%)]" />
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
