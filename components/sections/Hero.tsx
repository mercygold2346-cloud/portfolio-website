"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { siteConfig } from "@/lib/site";
import Magnetic from "@/components/home/Magnetic";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-background text-foreground"
    >
      {/* Soft atmosphere — not competing with the welcome message */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(99,102,241,0.14),transparent_55%)] dark:bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(99,102,241,0.22),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2] home-tech-grid"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-28 pb-20">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <motion.div
            variants={container}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            className="text-left"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold tracking-[0.18em] uppercase text-accent mb-5"
            >
              Welcome to {siteConfig.name}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-6"
            >
              Hi, I&apos;m Mercy — I build{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                websites that win clients
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-slate-600 dark:text-white/70 max-w-xl mb-4 leading-relaxed"
            >
              Full-stack developer helping founders and businesses launch
              e-commerce stores, dashboards, and modern web apps — fast, clean,
              and production-ready.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-sm text-slate-500 dark:text-white/50 mb-10"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Magnetic>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white text-sm font-semibold shadow-glow hover:shadow-[0_0_36px_rgba(99,102,241,0.4)] transition-shadow"
                >
                  Start a project
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </Link>
              </Magnetic>
              <Magnetic strength={0.14}>
                <Link
                  href="#featured-work"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-300 text-slate-800 text-sm font-semibold hover:border-accent/40 hover:bg-slate-50 dark:border-white/20 dark:text-white dark:hover:bg-white/5 transition-colors"
                >
                  <Briefcase size={18} />
                  See my work
                </Link>
              </Magnetic>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500 dark:text-white/50"
            >
              <span>6+ live products</span>
              <span className="hidden sm:inline text-slate-300 dark:text-white/20">
                |
              </span>
              <span>Next.js · React · TypeScript</span>
              <span className="hidden sm:inline text-slate-300 dark:text-white/20">
                |
              </span>
              <span>Available for hire</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-gradient-end/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] ring-1 ring-slate-200/80 dark:ring-white/10 shadow-2xl shadow-accent/10 bg-slate-100 dark:bg-white/5 aspect-[4/5]">
              <Image
                src="/images/about.png"
                alt="Mercy Odunola — MercyDev"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 420px"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent">
                <p className="text-white font-semibold text-lg">Mercy Odunola</p>
                <p className="text-white/75 text-sm">
                  Full-Stack Developer · {siteConfig.name}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
