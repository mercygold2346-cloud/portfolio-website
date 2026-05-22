"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Briefcase, Rocket, Shield, Zap } from "lucide-react";
import { siteConfig } from "@/lib/site";
import HeroFloatingTech from "@/components/sections/HeroFloatingTech";
import { useTheme } from "@/components/providers/ThemeProvider";
import HeroTechBackground from "@/components/home/HeroTechBackground";
import TypingHeadline from "@/components/home/TypingHeadline";
import Magnetic from "@/components/home/Magnetic";

const trustItems = [
  { icon: Rocket, label: "3+ live products on Vercel" },
  { icon: Zap, label: "Fast, reliable delivery" },
  { icon: Shield, label: "Production-ready quality" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] },
  },
};

export default function Hero() {
  const { theme } = useTheme();
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground transition-colors duration-300"
    >
      <HeroTechBackground />

      <motion.div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,rgba(99,102,241,0.1),transparent_60%)] dark:bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,rgba(99,102,241,0.18),transparent_60%)]"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <HeroFloatingTech key={theme} />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 z-[2] h-[min(520px,70vw)] w-[min(720px,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12),transparent_68%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(129,140,248,0.16),transparent_68%)]"
        animate={
          reduceMotion
            ? undefined
            : { scale: [1, 1.05, 1], opacity: [0.6, 0.9, 0.6] }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 lg:px-24 text-center pt-28 pb-24"
        variants={containerVariants}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm md:text-base tracking-[0.15em] uppercase text-slate-500 dark:text-white/60 mb-6 font-medium"
        >
          {siteConfig.name} · Full-Stack Developer
        </motion.p>

        <motion.div variants={fadeUp}>
          <TypingHeadline />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-slate-600 dark:text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {siteConfig.tagline} E-commerce stores, dashboards, and modern web
          apps — shipped to production with clean code and polished UI.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Magnetic>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 min-w-[200px] px-8 py-4 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white text-sm font-semibold overflow-hidden shadow-glow transition-shadow hover:shadow-[0_0_40px_rgba(99,102,241,0.45)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Start Your Project</span>
                <ArrowRight
                  size={18}
                  className="relative group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </Magnetic>
          <Magnetic strength={0.16}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 min-w-[200px] px-8 py-4 rounded-xl border border-slate-300 text-slate-800 text-sm font-semibold transition-all hover:border-accent/50 hover:bg-slate-100 hover:shadow-[0_0_24px_rgba(99,102,241,0.15)] dark:border-white/25 dark:text-white dark:hover:bg-white/10 dark:hover:border-accent/40"
              >
                <Briefcase
                  size={18}
                  className="group-hover:rotate-[-8deg] transition-transform"
                />
                See Live Work
              </Link>
            </motion.div>
          </Magnetic>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.08, duration: 0.45 }}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -6, scale: 1.02, transition: { duration: 0.25 } }
              }
              className="glass glass-hover flex items-center justify-center gap-3 px-4 py-4 rounded-2xl border border-transparent hover:border-accent/30 hover:shadow-[0_0_28px_rgba(99,102,241,0.12)] transition-colors"
            >
              <item.icon
                className="text-accent shrink-0"
                size={20}
                strokeWidth={1.75}
              />
              <span className="text-sm font-medium text-slate-700 dark:text-white/85">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
