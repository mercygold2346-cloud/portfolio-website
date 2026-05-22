"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseGlow() {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const springX = useSpring(x, { stiffness: 120, damping: 28 });
  const springY = useSpring(y, { stiffness: 120, damping: 28 });

  useEffect(() => {
    if (reduceMotion) return;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduceMotion, x, y]);

  if (reduceMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
      aria-hidden
    >
      <motion.div
        className="absolute w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.14),transparent_65%)] dark:bg-[radial-gradient(circle,rgba(129,140,248,0.18),transparent_65%)] blur-3xl"
        style={{ left: springX, top: springY }}
      />
    </motion.div>
  );
}
