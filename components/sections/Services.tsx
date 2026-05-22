"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import {
  Globe,
  Layers,
  Box,
  Wrench,
  Bot,
  Code2,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    slug: "ai-website-development",
    title: "AI Website Development",
    description:
      "Intelligent, responsive websites powered by AI that adapt to user behavior and deliver personalized experiences.",
  },
  {
    icon: Layers,
    slug: "saas-application-development",
    title: "SaaS Application Development",
    description:
      "Full-featured SaaS platforms with subscription management, analytics, and scalable infrastructure.",
  },
  {
    icon: Box,
    slug: "rork-app-development",
    title: "Rork App Development",
    description:
      "Custom applications built on Rork for rapid deployment and seamless AI integration.",
  },
  {
    icon: Wrench,
    slug: "base44-platform-builds",
    title: "Base44 Platform Builds",
    description:
      "Robust platform development using Base44 for enterprise-grade applications.",
  },
  {
    icon: Bot,
    slug: "replit-agent-automation",
    title: "Replit Agent Automation",
    description:
      "Automate workflows, deployments, and development tasks with Replit Agent for maximum efficiency.",
  },
  {
    icon: Code2,
    slug: "full-stack-web-apps",
    title: "Full Stack Web Apps",
    description:
      "End-to-end web applications with modern architecture, clean code, and production-ready deployment.",
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What I <span className="text-accent">Build</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          From AI-powered websites to enterprise SaaS—I deliver solutions that
          scale and convert.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <Link key={service.title} href={`/services/${service.slug}`} className="block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass glass-hover p-8 rounded-2xl group cursor-pointer h-full"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <service.icon className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
