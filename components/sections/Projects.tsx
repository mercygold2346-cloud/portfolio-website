"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/components/sections/projectsData";

const GITHUB_PROFILE_URL =
  process.env.NEXT_PUBLIC_GITHUB_URL?.trim() ||
  "https://github.com/mercygold2346-cloud";

export default function Projects() {
  const router = useRouter();

  return (
    <SectionWrapper id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="text-accent">Projects</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Live products I&apos;ve designed and shipped — e-commerce, tools, and
          fashion experiences.
        </p>
        <div className="mt-8 flex flex-col items-center gap-2">
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass glass-hover text-white text-sm font-medium transition-colors"
          >
            <Github size={18} className="text-white/80" />
            <span>My GitHub profile</span>
            <ExternalLink size={14} className="text-white/40" />
          </a>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass glass-hover rounded-2xl overflow-hidden group cursor-pointer"
            onClick={() => router.push(`/projects/${project.slug}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                router.push(`/projects/${project.slug}`);
              }
            }}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-white/10 backdrop-blur-sm text-xs text-white/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-white/60 text-sm mb-4">{project.description}</p>
              <div className="flex gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/20 text-accent text-sm font-medium hover:bg-accent/30 transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-white/80 text-sm font-medium hover:text-white transition-colors"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
