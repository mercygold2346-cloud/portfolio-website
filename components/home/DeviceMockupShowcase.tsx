"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/components/sections/projectsData";
import HomeSectionHeader from "@/components/home/HomeSectionHeader";
import Reveal from "@/components/home/Reveal";

export default function DeviceMockupShowcase() {
  const reduceMotion = useReducedMotion();
  const [laptop, phone, tablet] = projects;

  return (
    <section
      aria-label="Device mockup showcase"
      className="relative py-20 md:py-28 bg-background overflow-hidden border-y border-slate-200/60 dark:border-white/10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.08),transparent_55%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <HomeSectionHeader
          eyebrow="Devices"
          title={
            <>
              Laptop, tablet &{" "}
              <span className="bg-gradient-to-r from-accent to-gradient-end bg-clip-text text-transparent">
                mobile
              </span>{" "}
              previews
            </>
          }
          subtitle="The same shipped products — framed the way clients and buyers evaluate your work."
        />

        <Reveal delay={0.08}>
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-8 items-end">
            {/* Laptop */}
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="lg:col-span-1"
            >
              <div className="rounded-xl border border-slate-300 dark:border-white/15 bg-slate-200/90 dark:bg-slate-900/90 p-2 shadow-2xl">
                <div className="flex gap-1 px-2 py-2 border-b border-slate-300/50 dark:border-white/10">
                  <span className="w-2 h-2 rounded-full bg-red-400/90" />
                  <span className="w-2 h-2 rounded-full bg-amber-400/90" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400/90" />
                </div>
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-black/5">
                  <Image
                    src={laptop.image}
                    alt={`${laptop.overviewTitle} on laptop`}
                    fill
                    loading="lazy"
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                </div>
              </div>
              <p className="mt-3 text-center text-xs font-medium text-slate-600 dark:text-white/55">
                Laptop · {laptop.overviewTitle}
              </p>
              <Link
                href={laptop.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex justify-center items-center gap-1 text-xs text-accent hover:underline"
              >
                <ExternalLink size={12} /> Live demo
              </Link>
            </motion.div>

            {/* Tablet */}
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            >
              <div className="mx-auto max-w-[280px] rounded-2xl border-[8px] border-slate-800 dark:border-slate-600 p-1 shadow-xl">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                  <Image
                    src={tablet.image}
                    alt={`${tablet.overviewTitle} on tablet`}
                    fill
                    loading="lazy"
                    className="object-cover object-top"
                    sizes="280px"
                  />
                </div>
              </div>
              <p className="mt-3 text-center text-xs font-medium text-slate-600 dark:text-white/55">
                Tablet · {tablet.overviewTitle}
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
              <div className="relative mx-auto max-w-[160px] rounded-[2rem] border-[6px] border-slate-800 dark:border-slate-700 p-1.5 shadow-2xl">
                <div className="absolute left-1/2 top-3 -translate-x-1/2 w-12 h-1 rounded-full bg-white/25 z-10 pointer-events-none" />
                <div className="relative aspect-[9/19] rounded-[1.5rem] overflow-hidden mt-2">
                  <Image
                    src={phone.image}
                    alt={`${phone.overviewTitle} on phone`}
                    fill
                    loading="lazy"
                    className="object-cover object-top"
                    sizes="160px"
                  />
                </div>
              </div>
              <p className="mt-3 text-center text-xs font-medium text-slate-600 dark:text-white/55">
                Mobile · {phone.overviewTitle}
              </p>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
