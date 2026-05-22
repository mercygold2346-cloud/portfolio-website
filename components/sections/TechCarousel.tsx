"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig, techCarouselItems } from "@/lib/site";
import { useTheme } from "@/components/providers/ThemeProvider";
import Reveal from "@/components/home/Reveal";

const pillClassName =
  "shrink-0 px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 " +
  "bg-white border border-slate-200 text-slate-800 shadow-sm " +
  "hover:border-accent/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.12)] hover:-translate-y-0.5 " +
  "dark:bg-white/10 dark:border-white/15 dark:text-white/90 dark:shadow-none dark:hover:border-accent/35 dark:hover:shadow-[0_0_24px_rgba(99,102,241,0.2)]";

export default function TechCarousel() {
  const { theme } = useTheme();
  const reduceMotion = useReducedMotion();
  const rowA = [...techCarouselItems, ...techCarouselItems];
  const rowB = [...techCarouselItems].reverse();
  const rowBLoop = [...rowB, ...rowB];

  return (
    <section
      aria-label="Technologies MercyDev works with"
      className="relative py-16 md:py-20 overflow-hidden border-y border-slate-200/80 bg-background dark:border-white/10"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.08), transparent)",
        }}
        animate={reduceMotion ? undefined : { opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 8, repeat: Infinity }}
        aria-hidden
      />

      <Reveal className="text-center px-6 mb-10">
        <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
          {siteConfig.name}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
          Built with a <span className="text-accent">modern tech stack</span>
        </h2>
        <p className="mt-3 text-slate-600 dark:text-white/60 text-sm md:text-base max-w-xl mx-auto">
          The same tools trusted by startups and product teams — chosen for
          speed, reliability, and clean handoff to production.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="space-y-4">
        <motion.div
          key={`tech-row-a-${theme}`}
          className="flex w-max gap-4"
          animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 32,
              ease: "linear",
            },
          }}
        >
          {rowA.map((item, i) => (
            <span key={`a-${item}-${i}`} className={pillClassName}>
              {item}
            </span>
          ))}
        </motion.div>
        <motion.div
          key={`tech-row-b-${theme}`}
          className="flex w-max gap-4"
          animate={reduceMotion ? undefined : { x: ["-50%", "0%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 38,
              ease: "linear",
            },
          }}
        >
          {rowBLoop.map((item, i) => (
            <span key={`b-${item}-${i}`} className={pillClassName}>
              {item}
            </span>
          ))}
        </motion.div>
      </Reveal>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-background via-background/80 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-background via-background/80 to-transparent"
        aria-hidden
      />
    </section>
  );
}
