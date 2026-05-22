"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import Reveal from "@/components/home/Reveal";
import Magnetic from "@/components/home/Magnetic";

export default function CTA() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionWrapper>
      <Reveal>
        <motion.div
          whileHover={reduceMotion ? undefined : { y: -4 }}
          transition={{ duration: 0.35 }}
          className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/15 via-accent-dark/10 to-gradient-end/15 border border-slate-200 dark:border-white/10 p-12 md:p-16 text-center hover:border-accent/30 hover:shadow-[0_0_48px_rgba(99,102,241,0.15)] transition-all duration-500"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_70%)]" />
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(105deg,transparent,rgba(129,140,248,0.08),transparent)]"
            animate={reduceMotion ? undefined : { x: ["-120%", "120%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            aria-hidden
          />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Ready to work with{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                {siteConfig.name}?
              </span>
            </h2>
            <p className="text-slate-600 dark:text-white/70 max-w-2xl mx-auto mb-8">
              Tell me about your store, app, or idea — I&apos;ll reply with a clear
              plan, timeline, and how we can launch something you&apos;re proud to
              show clients.
            </p>
            <Magnetic>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="group/btn relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white font-semibold overflow-hidden hover:shadow-[0_0_40px_rgba(99,102,241,0.45)] transition-shadow duration-300"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  <span className="relative">Start Your Project</span>
                  <ArrowRight
                    size={20}
                    className="relative group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>
              </motion.div>
            </Magnetic>
          </div>
        </motion.div>
      </Reveal>
    </SectionWrapper>
  );
}
