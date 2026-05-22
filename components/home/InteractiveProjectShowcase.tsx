"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/components/sections/projectsData";
import HomeSectionHeader from "@/components/home/HomeSectionHeader";
import Reveal from "@/components/home/Reveal";

export default function InteractiveProjectShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Interactive project showcase"
      className="relative py-20 md:py-24 bg-background overflow-hidden border-y border-slate-200/60 dark:border-white/10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <HomeSectionHeader
          eyebrow="Interactive preview"
          title={
            <>
              Explore builds with{" "}
              <span className="bg-gradient-to-r from-accent to-gradient-end bg-clip-text text-transparent">
                live overlays
              </span>
            </>
          }
          subtitle="Hover each card for stack details, links, and case study — complements the proof section above."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <motion.article
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className="group relative overflow-hidden rounded-2xl glass border border-slate-200/80 dark:border-white/10 hover:border-accent/35 hover:shadow-[0_0_40px_rgba(99,102,241,0.12)] transition-all duration-400"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.overviewTitle}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/75 dark:group-hover:bg-black/80 transition-colors duration-400" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center text-sm font-medium">
                      {project.overviewTitle}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white text-slate-900 text-xs font-semibold hover:bg-accent hover:text-white transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/15 text-white text-xs font-semibold hover:bg-white/25 transition-colors"
                      >
                        <Github size={14} />
                        Code
                      </a>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/30 text-white text-xs font-semibold hover:bg-white/10 transition-colors"
                      >
                        Case study
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-slate-200/60 dark:border-white/10">
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                    {project.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded bg-accent/10 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
