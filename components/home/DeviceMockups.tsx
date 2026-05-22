"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/components/sections/projectsData";
import HomeSectionHeader from "@/components/home/HomeSectionHeader";
import Reveal from "@/components/home/Reveal";

export default function DeviceMockups() {
  const reduceMotion = useReducedMotion();
  const [desktop, tablet, mobile] = projects;

  return (
    <section
      aria-label="Projects on device mockups"
      className="relative py-20 md:py-28 bg-background overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(99,102,241,0.1),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <HomeSectionHeader
          eyebrow="Responsive delivery"
          title={
            <>
              Your product, on every{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                screen
              </span>
            </>
          }
          subtitle="Real shipped interfaces — optimized for desktop, tablet, and mobile."
        />

        <Reveal delay={0.1}>
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-6 min-h-[420px] md:min-h-[480px]">
            {/* Desktop */}
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[640px] lg:max-w-[58%]"
            >
              <div className="rounded-xl border border-slate-300/80 dark:border-white/15 bg-slate-200/80 dark:bg-slate-900/80 p-2 shadow-2xl shadow-black/20 ring-1 ring-accent/10">
                <div className="flex gap-1.5 px-2 py-2 border-b border-slate-300/50 dark:border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-slate-100 dark:bg-black/40">
                  <Image
                    src={desktop.image}
                    alt={desktop.overviewTitle}
                    fill
                    loading="lazy"
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 640px"
                  />
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-slate-500 dark:text-white/50">
                Desktop · {desktop.overviewTitle}
              </p>
            </motion.div>

            {/* Tablet */}
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="relative z-20 w-[220px] sm:w-[260px] lg:absolute lg:right-[8%] lg:top-[12%]"
            >
              <div className="rounded-2xl border-[6px] border-slate-800 dark:border-slate-700 bg-slate-800 p-1 shadow-xl shadow-accent/10">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-black">
                  <Image
                    src={tablet.image}
                    alt={tablet.overviewTitle}
                    fill
                    loading="lazy"
                    className="object-cover object-top"
                    sizes="260px"
                  />
                </div>
              </div>
              <p className="mt-2 text-center text-[10px] text-slate-500 dark:text-white/50">
                Tablet
              </p>
            </motion.div>

            {/* Mobile */}
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="relative z-30 w-[120px] sm:w-[140px] lg:absolute lg:left-[6%] lg:bottom-[8%]"
            >
              <div className="rounded-[1.75rem] border-[5px] border-slate-800 dark:border-slate-600 bg-slate-900 p-1 shadow-2xl">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-white/20 z-10" />
                <div className="relative aspect-[9/19] overflow-hidden rounded-[1.25rem] bg-black mt-3">
                  <Image
                    src={mobile.image}
                    alt={mobile.overviewTitle}
                    fill
                    loading="lazy"
                    className="object-cover object-top"
                    sizes="140px"
                  />
                </div>
              </div>
              <p className="mt-2 text-center text-[10px] text-slate-500 dark:text-white/50">
                Mobile
              </p>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
