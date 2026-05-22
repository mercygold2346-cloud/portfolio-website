"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Terminal, Monitor, Coffee } from "lucide-react";
import { siteConfig } from "@/lib/site";
import HomeSectionHeader from "@/components/home/HomeSectionHeader";
import Reveal from "@/components/home/Reveal";

const codeLines = [
  "const stack = ['Next.js', 'React', 'Tailwind', 'Supabase'];",
  "await deploy({ platform: 'Vercel', status: 'production' });",
  "export default function ShipFast() {",
  "  return <PremiumUI clients={winning} />;",
  "}",
];

export default function DeveloperWorkspace() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Developer workspace"
      className="relative py-20 md:py-24 bg-background overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,rgba(99,102,241,0.1),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <HomeSectionHeader
          eyebrow="Workspace"
          title={
            <>
              Where your product gets{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                built
              </span>
            </>
          }
          subtitle="Focused full-stack development — modern tooling, clean commits, and production discipline."
        />

        <Reveal delay={0.1}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="glass rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-2xl shadow-accent/5"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200/60 dark:border-white/10 bg-slate-100/80 dark:bg-white/5">
                <Terminal size={16} className="text-accent" />
                <span className="text-xs font-mono text-slate-500 dark:text-white/50">
                  {siteConfig.name} — zsh
                </span>
              </div>
              <div className="p-5 md:p-6 font-mono text-sm space-y-2 bg-slate-950/95 dark:bg-black/60 min-h-[200px]">
                {codeLines.map((line, i) => (
                  <motion.p
                    key={line}
                    initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    className="text-emerald-400/90"
                  >
                    <span className="text-slate-500 select-none">{"> "}</span>
                    {line}
                  </motion.p>
                ))}
                <motion.span
                  animate={reduceMotion ? undefined : { opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-accent align-middle ml-1"
                />
              </div>
            </motion.div>

            <div className="space-y-5">
              {[
                {
                  icon: Monitor,
                  title: "Dual-screen workflow",
                  text: "Design reference + IDE side by side for pixel-accurate, fast iteration.",
                },
                {
                  icon: Terminal,
                  title: "CLI-first shipping",
                  text: "Git, Vercel, and Supabase from the terminal — predictable deploys every time.",
                },
                {
                  icon: Coffee,
                  title: "Client-ready output",
                  text: "Documentation, responsive QA, and handoff you can share with stakeholders.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={reduceMotion ? undefined : { x: 4 }}
                  className="flex gap-4 p-4 rounded-xl glass glass-hover border border-transparent hover:border-accent/20 transition-colors"
                >
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-accent/15 flex items-center justify-center">
                    <item.icon className="text-accent" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-white/60 mt-1">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
