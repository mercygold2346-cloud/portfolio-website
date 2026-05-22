"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type GalleryImageCardProps = {
  src: string;
  alt: string;
  title: string;
  category: string;
  objectPosition?: string;
  className?: string;
  priority?: boolean;
  overlay?: ReactNode;
};

export default function GalleryImageCard({
  src,
  alt,
  title,
  category,
  objectPosition = "center top",
  className = "",
  priority = false,
  overlay,
}: GalleryImageCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
      transition={{ duration: 0.35 }}
      className={`group relative overflow-hidden rounded-2xl ring-1 ring-slate-200/80 dark:ring-white/10 hover:ring-accent/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.18)] transition-shadow duration-500 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        loading={priority ? undefined : "lazy"}
        priority={priority}
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        style={{ objectPosition }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-[radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.25),transparent_55%)]" />
      {overlay ?? (
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-accent/20 text-accent mb-2">
            {category}
          </span>
          <p className="text-sm md:text-base font-semibold text-slate-900 dark:text-white">
            {title}
          </p>
        </div>
      )}
    </motion.div>
  );
}
