"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  amount = 0.2,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      transition={{ duration: 0.55, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
