"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import CustomCursor from "@/components/home/CustomCursor";
import MouseGlow from "@/components/home/MouseGlow";
import ScrollProgress from "@/components/home/ScrollProgress";

type HomePageShellProps = {
  children: ReactNode;
};

export default function HomePageShell({ children }: HomePageShellProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="home-cursor-active relative"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <ScrollProgress />
      <MouseGlow />
      <CustomCursor />
      {children}
    </motion.div>
  );
}
