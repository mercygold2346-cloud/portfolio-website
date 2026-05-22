"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/components/sections/projectsData";
import HomeSectionHeader from "@/components/home/HomeSectionHeader";
import Reveal from "@/components/home/Reveal";

export default function RecentLaunchesGallery() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Recent launches gallery"
      className="relative py-20 md:py-24 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 home-tech-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <HomeSectionHeader
          eyebrow="Recent launches"
          title={
            <>
              Production-ready{" "}
              <span className="text-accent">deployments</span>
            </>
          }
          subtitle="Hover to preview — each build is live and client-ready on Vercel."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.07}>
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduceMotion ? undefined : { y: -8 }}
                className="group relative block overflow-hidden rounded-2xl aspect-[4/5] sm:aspect-[3/4] ring-1 ring-slate-200/80 dark:ring-white/10 hover:ring-accent/40 hover:shadow-[0_0_48px_rgba(99,102,241,0.2)] transition-all duration-500"
              >
                <Image
                  src={project.image}
                  alt={project.overviewTitle}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-5 md:p-6"
                  initial={false}
                >
                  <span className="inline-flex w-fit items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/90 text-white mb-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Live
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {project.overviewTitle}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-white/60 mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Open live site
                    <ExternalLink size={14} />
                  </span>
                </motion.div>
              </motion.a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="text-center mt-10">
          <Link
            href="/projects"
            className="text-sm font-medium text-accent hover:underline"
          >
            View all projects →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
