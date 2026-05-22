"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Cpu, Zap, Layers } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function About() {
  const highlights = [
    {
      icon: Cpu,
      title: "AI-First Mindset",
      desc: "I architect systems with intelligence at the core.",
    },
    {
      icon: Zap,
      title: "Automation Expert",
      desc: "I eliminate repetitive work through smart automation.",
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      desc: "I build for growth from day one.",
    },
  ];

  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-sm mx-auto lg:max-w-md lg:mx-0"
        >
          <div
            className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/30 via-transparent to-gradient-end/20 opacity-60 blur-sm"
            aria-hidden
          />
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl shadow-black/50">
            <Image
              src="/images/about.png"
              alt="Professional portrait in business attire"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 384px, 448px"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"
              aria-hidden
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              I solve business problems with{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                AI and automation
              </span>
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                I&apos;m <span className="text-white font-medium">{siteConfig.name}</span>
                — a full-stack developer and automation specialist who builds
                systems that scale. My focus isn&apos;t just writing code—it&apos;s
                understanding your business logic and translating it into
                production-ready solutions that deliver real results.
              </p>
              <p>
                I specialize in architecting scalable systems using modern tools
                like Rork, Base44, and Replit Agent. Whether you need an
                AI-powered SaaS platform, automation workflows, or a full-stack
                application, I deliver clean, maintainable code that performs
                under pressure.
              </p>
              <p>
                I don&apos;t just build features—I build foundations. Every project
                I take on is designed for growth, performance, and long-term
                success.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass glass-hover p-6 rounded-2xl flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <item.icon className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
