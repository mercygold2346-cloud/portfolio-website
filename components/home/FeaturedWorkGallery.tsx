"use client";

import HomeSectionHeader from "@/components/home/HomeSectionHeader";
import GalleryImageCard from "@/components/home/GalleryImageCard";
import Reveal from "@/components/home/Reveal";
import { featuredGalleryImages } from "@/lib/homeGalleryImages";

export default function FeaturedWorkGallery() {
  return (
    <section
      aria-label="Featured work gallery"
      className="relative py-20 md:py-28 bg-background overflow-hidden border-t border-slate-200/60 dark:border-white/10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(99,102,241,0.08),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <HomeSectionHeader
          eyebrow="Visual library"
          title={
            <>
              Featured work{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                gallery
              </span>
            </>
          }
          subtitle="E-commerce, SaaS dashboards, mobile UI, analytics, landing pages, and AI interfaces — all from shipped builds."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-[minmax(160px,1fr)] md:auto-rows-[minmax(180px,1fr)]">
          {featuredGalleryImages.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.04}
              className={
                item.wide
                  ? "col-span-2 h-full"
                  : item.tall
                    ? "row-span-2 h-full"
                    : "h-full"
              }
            >
              <GalleryImageCard
                src={item.src}
                alt={item.alt}
                title={item.title}
                category={item.category}
                objectPosition={item.objectPosition}
                priority={i < 2}
                className="h-full min-h-[160px] md:min-h-[180px]"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
