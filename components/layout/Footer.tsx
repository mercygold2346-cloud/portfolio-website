"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 py-12 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-500 dark:text-white/50">
          © {currentYear} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-accent dark:text-white/50 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-accent dark:text-white/50 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-slate-500 hover:text-accent dark:text-white/50 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
