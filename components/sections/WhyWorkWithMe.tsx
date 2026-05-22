"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import {
  Scale,
  Gauge,
  CheckCircle2,
  Lightbulb,
  Cpu,
} from "lucide-react";

const reasons = [
  {
    icon: Scale,
    title: "Scalable Architecture",
    description:
      "I design systems that grow with your business. Every component is built to handle increased load without rewriting.",
  },
  {
    icon: Gauge,
    title: "Performance Focus",
    description:
      "Fast load times, optimized queries, and efficient code. Performance isn&apos;t an afterthought—it&apos;s built in from day one.",
  },
  {
    icon: CheckCircle2,
    title: "Production-Ready Code",
    description:
      "Clean, maintainable, and well-documented. No shortcuts—code you can deploy with confidence.",
  },
  {
    icon: Lightbulb,
    title: "Business Logic Understanding",
    description:
      "I don&apos;t just write code. I understand your goals, your users, and how to translate requirements into solutions.",
  },
  {
    icon: Cpu,
    title: "AI-Driven Automation",
    description:
      "I build intelligent automation systems that reduce manual work and scale your operations.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <SectionWrapper id="why-me">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Work <span className="text-accent">With Me</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          I deliver more than code—I deliver solutions that drive results.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass glass-hover p-6 rounded-2xl"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
              <reason.icon className="text-accent" size={24} />
            </div>
            <h3 className="font-semibold text-white mb-2">{reason.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
