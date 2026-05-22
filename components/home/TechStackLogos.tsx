"use client";

import { motion, useReducedMotion } from "framer-motion";
import { techLogoComponents } from "@/components/home/techLogos";
import HomeSectionHeader from "@/components/home/HomeSectionHeader";
import Reveal from "@/components/home/Reveal";

export default function TechStackLogos() {
  const reduceMotion = useReducedMotion();
  const doubled = [...techLogoComponents, ...techLogoComponents];

  return (
    <section
      aria-label="Tech stack logos"
      className="relative py-16 md:py-20 bg-background overflow-hidden border-y border-slate-200/60 dark:border-white/10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_65%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <HomeSectionHeader
          eyebrow="Stack"
          title={
            <>
              Built with a{" "}
              <span className="text-accent">production-grade</span> toolkit
            </>
          }
          subtitle="The same technologies powering live client projects — from UI to deployment."
        />

        <Reveal delay={0.05}>
          <div className="relative overflow-hidden py-4">
            <motion.div
              className="flex w-max gap-5 md:gap-8"
              animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
              transition={{
                x: { repeat: Infinity, duration: 28, ease: "linear" },
              }}
            >
              {doubled.map(({ name, Logo }, i) => (
                <motion.div
                  key={`${name}-${i}`}
                  whileHover={reduceMotion ? undefined : { y: -6, scale: 1.04 }}
                  className="flex flex-col items-center gap-3 px-6 py-5 rounded-2xl glass min-w-[120px] border border-slate-200/80 dark:border-white/10 hover:border-accent/40 hover:shadow-[0_0_32px_rgba(99,102,241,0.15)] transition-shadow"
                >
                  <motion.div
                    animate={
                      reduceMotion
                        ? undefined
                        : { y: [0, -5, 0] }
                    }
                    transition={{
                      duration: 3 + (i % 4) * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-slate-800 dark:text-white"
                  >
                    <Logo className="w-10 h-10" />
                  </motion.div>
                  <span className="text-xs font-semibold text-slate-600 dark:text-white/75 whitespace-nowrap">
                    {name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
