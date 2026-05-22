"use client";

import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px" }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.section>
  );
}
