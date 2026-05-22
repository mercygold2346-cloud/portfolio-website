"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket } from "lucide-react";
import HomeSectionHeader from "@/components/home/HomeSectionHeader";
import Reveal from "@/components/home/Reveal";

const steps = [
  {
    icon: Lightbulb,
    label: "Idea",
    desc: "Clarify goals, users, and success metrics before a single line of code.",
  },
  {
    icon: PenTool,
    label: "Design",
    desc: "Wireframes, UI direction, and conversion-focused layouts clients understand.",
  },
  {
    icon: Code2,
    label: "Development",
    desc: "Clean React/Next.js builds, APIs, auth, and performance-minded implementation.",
  },
  {
    icon: Rocket,
    label: "Launch",
    desc: "Vercel deployment, QA, handoff docs, and a product you are proud to show.",
  },
];

export default function ProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Development process"
      className="relative py-20 md:py-24 bg-background overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <HomeSectionHeader
          eyebrow="How I work"
          title={
            <>
              From <span className="text-accent">idea</span> to launch
            </>
          }
          subtitle="A clear, repeatable process — built for founders who need speed without sacrificing quality."
        />

        <Reveal delay={0.08}>
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className="relative glass glass-hover rounded-2xl p-6 text-center border border-slate-200/80 dark:border-white/10 hover:border-accent/30 hover:shadow-[0_0_28px_rgba(99,102,241,0.1)] transition-all"
              >
                <motion.div
                  animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                  className="mx-auto w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center mb-4 ring-1 ring-accent/25"
                >
                  <step.icon className="text-accent" size={26} />
                </motion.div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {step.label}
                </h3>
                <p className="text-sm text-slate-600 dark:text-white/60 leading-relaxed">
                  {step.desc}
                </p>
                {i < steps.length - 1 && (
                  <span className="hidden lg:inline absolute -right-3 top-12 text-accent/40 text-lg">
                    →
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
