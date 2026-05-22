"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/components/sections/projectsData";
import { siteConfig } from "@/lib/site";
import Reveal from "@/components/home/Reveal";

export default function ProjectProofShowcase() {
  const reduceMotion = useReducedMotion();

  const scrollToPortfolio = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="proof"
      aria-label="Live project proof before portfolio"
      className="relative min-h-screen flex flex-col justify-center bg-background pt-24 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(99,102,241,0.12),transparent_55%)] dark:bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(99,102,241,0.2),transparent_55%)]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <Reveal className="text-center mb-10 md:mb-14">
          <p className="text-sm font-medium text-accent uppercase tracking-[0.2em] mb-3">
            {siteConfig.name} · Live proof
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Shipped products{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              you can open today
            </span>
          </h2>
          <p className="text-slate-600 dark:text-white/65 max-w-2xl mx-auto text-sm md:text-base">
            Real interfaces from production deployments on Vercel — review the
            work before exploring the full portfolio.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <motion.article
                whileHover={reduceMotion ? undefined : { y: -8 }}
                transition={{ duration: 0.3 }}
                className="group glass rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 hover:border-accent/35 hover:shadow-[0_0_40px_rgba(99,102,241,0.12)] transition-all duration-400"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-white/5">
                  <Image
                    src={project.image}
                    alt={`${project.overviewTitle} — live project screenshot`}
                fill
                loading={i < 3 ? undefined : "lazy"}
                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={i < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-90" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-emerald-500/90 text-[10px] font-bold uppercase tracking-wider text-white">
                    Live on Vercel
                  </span>
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {project.overviewTitle}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-white/60 line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-white/75"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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

        <Reveal delay={0.25} className="mt-12 flex flex-col items-center gap-4">
          <motion.button
            type="button"
            onClick={scrollToPortfolio}
            whileHover={reduceMotion ? undefined : { scale: 1.03 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white text-sm font-semibold shadow-glow hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-shadow"
          >
            Enter portfolio
            <ArrowRight size={18} />
          </motion.button>
          <p className="text-xs text-slate-500 dark:text-white/45">
            Scroll to meet {siteConfig.name} and explore services
          </p>
        </Reveal>
      </div>
    </section>
  );
}
