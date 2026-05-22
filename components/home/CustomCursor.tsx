"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 35 });
  const springY = useSpring(y, { stiffness: 400, damping: 35 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest("a, button, [role='button'], input, textarea, select")
      );
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [reduceMotion, x, y]);

  if (reduceMotion || !enabled) return null;

  return (
      <motion.div
        className="pointer-events-none fixed z-[70] hidden md:block"
        style={{ left: springX, top: springY }}
        aria-hidden
      >
        <motion.div
          animate={{
            width: hovering ? 44 : 28,
            height: hovering ? 44 : 28,
            opacity: hovering ? 0.9 : 0.55,
          }}
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent/80 dark:border-accent-light shadow-[0_0_16px_rgba(99,102,241,0.5)]"
        />
        <motion.div
          animate={{ scale: hovering ? 0.4 : 1 }}
          className="absolute -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent"
        />
      </motion.div>
  );
}
