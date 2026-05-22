"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/tech-stack", label: "Tech Stack" },
  { href: "/projects", label: "Projects" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

function isNavActive(href: string, pathname: string | null) {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function linkClassName(href: string, pathname: string | null) {
  const active = isNavActive(href, pathname);
  return `text-sm font-medium transition-colors ${
    active ? "text-white" : "text-white/70 hover:text-white"
  }`;
}

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "py-6 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent"
        >
          {siteConfig.name}
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClassName(link.href, pathname)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-accent to-accent-light text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Hire Me
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 text-white/80 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-4 mx-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 px-4 rounded-lg transition-colors ${
                    isNavActive(link.href, pathname)
                      ? "text-white bg-white/10"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 py-3 px-4 rounded-lg bg-gradient-to-r from-accent to-accent-light text-center font-semibold text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
