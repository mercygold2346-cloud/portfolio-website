"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/components/sections/projectsData";
import Reveal from "@/components/home/Reveal";

/** Featured work after the welcome hero — not a gate in front of the homepage */
export default function ProjectProofShowcase() {
  const reduceMotion = useReducedMotion();
  const featured = projects.slice(0, 3);

  return (
    <section
      id="featured-work"
      aria-label="Featured live projects"
      className="relative py-20 md:py-28 bg-background px-6 md:px-12 lg:px-24 overflow-hidden border-t border-slate-200/70 dark:border-white/10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(99,102,241,0.08),transparent_55%)]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <Reveal className="text-center mb-12 md:mb-14">
          <p className="text-sm font-medium text-accent uppercase tracking-[0.2em] mb-3">
            Featured work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Live products{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              you can open today
            </span>
          </h2>
          <p className="text-slate-600 dark:text-white/65 max-w-2xl mx-auto text-sm md:text-base">
            Real deployments on Vercel — e-commerce, dashboards, and branded
            web experiences built for clients and conversion.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <motion.article
                whileHover={reduceMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.3 }}
                className="group h-full glass rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 hover:border-accent/35 hover:shadow-[0_0_36px_rgba(99,102,241,0.12)] transition-all duration-400 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-white/5">
                  <Image
                    src={project.image}
                    alt={`${project.overviewTitle} — live project screenshot`}
                    fill
                    loading={i < 3 ? undefined : "lazy"}
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={i < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-emerald-500/90 text-[10px] font-bold uppercase tracking-wider text-white">
                    Live
                  </span>
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {project.overviewTitle}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-white/60 line-clamp-2 mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-accent/15 text-accent text-xs font-semibold hover:bg-accent/25 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live site
                    </a>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg glass text-xs font-semibold text-slate-700 dark:text-white/80 hover:text-accent transition-colors"
                    >
                      Case study
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            View all projects
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
