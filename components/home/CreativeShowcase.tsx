"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/components/sections/projectsData";
import { featuredGalleryImages } from "@/lib/homeGalleryImages";
import HomeSectionHeader from "@/components/home/HomeSectionHeader";
import Reveal from "@/components/home/Reveal";

/** Masonry-style creative grid with hover zoom, glow, and overlay */
export default function CreativeShowcase() {
  const reduceMotion = useReducedMotion();
  const masonryItems = featuredGalleryImages.slice(0, 6);

  return (
    <section
      aria-label="Creative showcase masonry gallery"
      className="relative py-20 md:py-28 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 home-tech-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <HomeSectionHeader
          eyebrow="Creative showcase"
          title={
            <>
              Interfaces with{" "}
              <span className="text-accent">depth</span>
            </>
          }
          subtitle="Masonry gallery — hover for zoom, glow, and project context. Your three live products remain featured above."
        />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5">
          {masonryItems.map((item, i) => (
            <Reveal key={`masonry-${item.id}`} delay={i * 0.06}>
              <motion.div
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl ring-1 ring-slate-200/80 dark:ring-white/10 hover:ring-accent/50 hover:shadow-[0_0_48px_rgba(99,102,241,0.22)] transition-all duration-500"
              >
                <div
                  className={`relative w-full ${item.tall ? "aspect-[3/5]" : "aspect-[4/3]"}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                    style={{ objectPosition: item.objectPosition ?? "center top" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/70 transition-colors duration-400" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent-light mb-1">
                    {item.category}
                  </span>
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                  <p className="text-white/70 text-xs mt-2 line-clamp-2">
                    Shipped interface — part of a live Vercel deployment.
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 flex flex-wrap justify-center gap-4">
          {projects.map((p) => (
            <a
              key={p.slug}
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-slate-700 dark:text-white/80 hover:text-accent transition-colors"
            >
              <ExternalLink size={14} />
              {p.overviewTitle}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
