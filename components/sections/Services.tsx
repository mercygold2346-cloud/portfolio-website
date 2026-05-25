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

function serviceVisual({
  eyebrow,
  line1,
  line2,
  accent,
  glow,
  chips,
  variant,
}: {
  eyebrow: string;
  line1: string;
  line2: string;
  accent: string;
  glow: string;
  chips: string[];
  variant:
    | "browser"
    | "dashboard"
    | "app"
    | "platform"
    | "automation"
    | "stack";
}) {
  const chipMarkup = chips
    .map(
      (chip, index) => `
        <rect x="${44 + index * 126}" y="456" width="112" height="28" rx="14" fill="${accent}18" stroke="${accent}55" />
        <text x="${100 + index * 126}" y="474" text-anchor="middle" fill="#E2E8F0" font-size="12" font-family="Arial, sans-serif">${chip}</text>
      `
    )
    .join("");

  const visualMarkup = {
    browser: `
      <rect x="42" y="92" width="716" height="316" rx="28" fill="#0F172A" stroke="#FFFFFF18" />
      <rect x="42" y="92" width="716" height="54" rx="28" fill="#111827" />
      <circle cx="82" cy="119" r="7" fill="#FB7185" />
      <circle cx="106" cy="119" r="7" fill="#FBBF24" />
      <circle cx="130" cy="119" r="7" fill="#34D399" />
      <rect x="166" y="108" width="212" height="22" rx="11" fill="#FFFFFF10" />
      <rect x="74" y="176" width="240" height="186" rx="24" fill="url(#panelGlow)" />
      <rect x="340" y="176" width="386" height="86" rx="22" fill="#FFFFFF08" />
      <rect x="340" y="276" width="186" height="86" rx="22" fill="#FFFFFF08" />
      <rect x="540" y="276" width="186" height="86" rx="22" fill="#FFFFFF08" />
      <rect x="374" y="204" width="194" height="12" rx="6" fill="#FFFFFF" fill-opacity="0.16" />
      <rect x="374" y="228" width="150" height="12" rx="6" fill="#FFFFFF" fill-opacity="0.10" />
    `,
    dashboard: `
      <rect x="42" y="92" width="716" height="316" rx="28" fill="#0B1120" stroke="#FFFFFF18" />
      <rect x="74" y="126" width="188" height="118" rx="20" fill="#FFFFFF08" />
      <rect x="278" y="126" width="188" height="118" rx="20" fill="#FFFFFF08" />
      <rect x="482" y="126" width="244" height="118" rx="20" fill="url(#panelGlow)" />
      <rect x="74" y="260" width="652" height="116" rx="24" fill="#FFFFFF08" />
      <path d="M114 334 C164 282, 214 324, 264 270 S364 338, 414 288 S514 250, 564 306 S664 280, 704 232" stroke="${accent}" stroke-width="8" fill="none" stroke-linecap="round" />
      <rect x="104" y="154" width="70" height="12" rx="6" fill="#FFFFFF14" />
      <rect x="104" y="180" width="118" height="12" rx="6" fill="#FFFFFF0F" />
      <rect x="308" y="154" width="70" height="12" rx="6" fill="#FFFFFF14" />
      <rect x="308" y="180" width="118" height="12" rx="6" fill="#FFFFFF0F" />
    `,
    app: `
      <rect x="42" y="92" width="716" height="316" rx="28" fill="#0F172A" stroke="#FFFFFF18" />
      <rect x="80" y="128" width="204" height="244" rx="26" fill="#FFFFFF08" />
      <rect x="320" y="128" width="180" height="110" rx="22" fill="url(#panelGlow)" />
      <rect x="320" y="262" width="180" height="110" rx="22" fill="#FFFFFF08" />
      <rect x="536" y="128" width="180" height="244" rx="26" fill="#FFFFFF08" />
      <rect x="108" y="158" width="148" height="18" rx="9" fill="#FFFFFF12" />
      <rect x="108" y="192" width="104" height="18" rx="9" fill="#FFFFFF0E" />
      <path d="M558 208 L626 158 L694 208 L626 258 Z" fill="${accent}" fill-opacity="0.22" stroke="${accent}" stroke-opacity="0.55" />
      <circle cx="626" cy="208" r="20" fill="${accent}" fill-opacity="0.35" />
    `,
    platform: `
      <rect x="42" y="92" width="716" height="316" rx="28" fill="#0B1220" stroke="#FFFFFF18" />
      <rect x="112" y="150" width="576" height="68" rx="22" fill="url(#panelGlow)" />
      <rect x="88" y="246" width="624" height="58" rx="20" fill="#FFFFFF08" />
      <rect x="128" y="328" width="544" height="44" rx="18" fill="#FFFFFF08" />
      <circle cx="160" cy="184" r="10" fill="${accent}" />
      <circle cx="194" cy="184" r="10" fill="${accent}" fill-opacity="0.65" />
      <circle cx="228" cy="184" r="10" fill="${accent}" fill-opacity="0.38" />
      <path d="M146 276 H654" stroke="#FFFFFF24" stroke-width="6" stroke-linecap="round" />
      <path d="M182 350 H618" stroke="#FFFFFF18" stroke-width="6" stroke-linecap="round" />
    `,
    automation: `
      <rect x="42" y="92" width="716" height="316" rx="28" fill="#0B1120" stroke="#FFFFFF18" />
      <rect x="78" y="136" width="170" height="90" rx="22" fill="#FFFFFF08" />
      <rect x="294" y="136" width="210" height="90" rx="22" fill="url(#panelGlow)" />
      <rect x="550" y="136" width="170" height="90" rx="22" fill="#FFFFFF08" />
      <rect x="186" y="290" width="428" height="82" rx="24" fill="#FFFFFF08" />
      <path d="M248 181 H294" stroke="${accent}" stroke-width="8" stroke-linecap="round" />
      <path d="M504 181 H550" stroke="${accent}" stroke-width="8" stroke-linecap="round" />
      <path d="M400 226 V290" stroke="${accent}" stroke-width="8" stroke-linecap="round" />
      <circle cx="400" cy="181" r="16" fill="${accent}" fill-opacity="0.3" stroke="${accent}" />
      <rect x="226" y="318" width="350" height="12" rx="6" fill="#FFFFFF14" />
      <rect x="226" y="342" width="234" height="12" rx="6" fill="#FFFFFF0E" />
    `,
    stack: `
      <rect x="42" y="92" width="716" height="316" rx="28" fill="#0B1120" stroke="#FFFFFF18" />
      <rect x="94" y="122" width="612" height="78" rx="24" fill="url(#panelGlow)" />
      <rect x="94" y="222" width="292" height="150" rx="24" fill="#FFFFFF08" />
      <rect x="414" y="222" width="292" height="150" rx="24" fill="#FFFFFF08" />
      <rect x="126" y="152" width="104" height="16" rx="8" fill="#FFFFFF14" />
      <rect x="250" y="152" width="104" height="16" rx="8" fill="#FFFFFF14" />
      <rect x="374" y="152" width="104" height="16" rx="8" fill="#FFFFFF14" />
      <rect x="498" y="152" width="104" height="16" rx="8" fill="#FFFFFF14" />
      <path d="M130 274 H350" stroke="${accent}" stroke-width="10" stroke-linecap="round" />
      <path d="M450 274 H670" stroke="${accent}" stroke-width="10" stroke-linecap="round" />
      <path d="M130 316 H294" stroke="#FFFFFF18" stroke-width="8" stroke-linecap="round" />
      <path d="M450 316 H614" stroke="#FFFFFF18" stroke-width="8" stroke-linecap="round" />
    `,
  }[variant];

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" fill="none">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="800" y2="520" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#020617" />
          <stop offset="0.55" stop-color="#0F172A" />
          <stop offset="1" stop-color="#111827" />
        </linearGradient>
        <linearGradient id="panelGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${accent}" stop-opacity="0.38" />
          <stop offset="1" stop-color="${glow}" stop-opacity="0.18" />
        </linearGradient>
        <radialGradient id="orb" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(612 118) rotate(132) scale(260 260)">
          <stop stop-color="${glow}" stop-opacity="0.28" />
          <stop offset="1" stop-color="${glow}" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="520" rx="32" fill="url(#bg)" />
      <rect x="22" y="22" width="756" height="476" rx="28" fill="#FFFFFF03" stroke="#FFFFFF0F" />
      <circle cx="640" cy="114" r="150" fill="url(#orb)" />
      <circle cx="158" cy="390" r="110" fill="${accent}" fill-opacity="0.10" />
      <text x="46" y="58" fill="${accent}" font-size="15" letter-spacing="4" font-family="Arial, sans-serif">${eyebrow}</text>
      <text x="46" y="394" fill="#F8FAFC" font-size="34" font-weight="700" font-family="Arial, sans-serif">${line1}</text>
      <text x="46" y="430" fill="#CBD5E1" font-size="24" font-family="Arial, sans-serif">${line2}</text>
      ${visualMarkup}
      ${chipMarkup}
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const services = [
  {
    icon: Globe,
    slug: "ai-website-development",
    title: "AI Website Development",
    description:
      "Intelligent, responsive websites powered by AI that adapt to user behavior and deliver personalized experiences.",
    image: serviceVisual({
      eyebrow: "AI WEBSITES",
      line1: "Adaptive interfaces",
      line2: "Built for conversion",
      accent: "#6366F1",
      glow: "#22D3EE",
      chips: ["Personalized UI", "Smart Content", "Fast Pages"],
      variant: "browser",
    }),
    imageAlt: "AI website development service preview",
  },
  {
    icon: Layers,
    slug: "saas-application-development",
    title: "SaaS Application Development",
    description:
      "Full-featured SaaS platforms with subscription management, analytics, and scalable infrastructure.",
    image: serviceVisual({
      eyebrow: "SAAS APPS",
      line1: "Dashboards and billing",
      line2: "Ready to scale",
      accent: "#8B5CF6",
      glow: "#38BDF8",
      chips: ["Subscriptions", "Analytics", "Teams"],
      variant: "dashboard",
    }),
    imageAlt: "SaaS application development service preview",
  },
  {
    icon: Box,
    slug: "rork-app-development",
    title: "Rork App Development",
    description:
      "Custom applications built on Rork for rapid deployment and seamless AI integration.",
    image: serviceVisual({
      eyebrow: "RORK APPS",
      line1: "Rapid product builds",
      line2: "With AI workflows",
      accent: "#14B8A6",
      glow: "#6366F1",
      chips: ["Rapid Launch", "App Logic", "AI Native"],
      variant: "app",
    }),
    imageAlt: "Rork app development service preview",
  },
  {
    icon: Wrench,
    slug: "base44-platform-builds",
    title: "Base44 Platform Builds",
    description:
      "Robust platform development using Base44 for enterprise-grade applications.",
    image: serviceVisual({
      eyebrow: "BASE44",
      line1: "Platform architecture",
      line2: "Enterprise foundations",
      accent: "#F59E0B",
      glow: "#F97316",
      chips: ["Core Platform", "Security", "Integrations"],
      variant: "platform",
    }),
    imageAlt: "Base44 platform build service preview",
  },
  {
    icon: Bot,
    slug: "replit-agent-automation",
    title: "Replit Agent Automation",
    description:
      "Automate workflows, deployments, and development tasks with Replit Agent for maximum efficiency.",
    image: serviceVisual({
      eyebrow: "AUTOMATION",
      line1: "Agents and pipelines",
      line2: "Less manual work",
      accent: "#10B981",
      glow: "#22C55E",
      chips: ["Workflow Bots", "CI Steps", "Ops Automation"],
      variant: "automation",
    }),
    imageAlt: "Replit agent automation service preview",
  },
  {
    icon: Code2,
    slug: "full-stack-web-apps",
    title: "Full Stack Web Apps",
    description:
      "End-to-end web applications with modern architecture, clean code, and production-ready deployment.",
    image: serviceVisual({
      eyebrow: "FULL STACK",
      line1: "Frontend to backend",
      line2: "One production system",
      accent: "#EC4899",
      glow: "#8B5CF6",
      chips: ["UI", "API", "Deployment"],
      variant: "stack",
    }),
    imageAlt: "Full stack web app development service preview",
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
              className="glass glass-hover p-8 rounded-2xl group cursor-pointer h-full flex flex-col"
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
              <div className="mt-6 overflow-hidden rounded-xl ring-1 ring-white/10 bg-slate-950/40">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
