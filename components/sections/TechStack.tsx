"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const techGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Supabase", "REST APIs"],
  },
  {
    title: "AI & Automation",
    items: ["OpenAI APIs", "Replit Agent", "Rork", "Base44", "LangChain"],
  },
];

export default function TechStack() {
  return (
    <SectionWrapper id="tech">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Tech <span className="text-accent">Stack</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Modern tools and frameworks I use to build production-ready
          applications.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {techGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-lg font-semibold text-accent mb-6">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item, itemIndex) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: groupIndex * 0.1 + itemIndex * 0.05,
                  }}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80 hover:border-accent/50 hover:text-white transition-colors"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
