"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const LINE =
  "I build websites that ";
const HIGHLIGHT = "win clients";

export default function TypingHeadline() {
  const reduceMotion = useReducedMotion();
  const [typed, setTyped] = useState(reduceMotion ? LINE : "");
  const [showHighlight, setShowHighlight] = useState(!!reduceMotion);
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    if (reduceMotion) return;

    let i = 0;
    const typeTimer = setInterval(() => {
      i += 1;
      setTyped(LINE.slice(0, i));
      if (i >= LINE.length) {
        clearInterval(typeTimer);
        setTimeout(() => setShowHighlight(true), 180);
      }
    }, 42);

    return () => clearInterval(typeTimer);
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;
    const blink = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(blink);
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.25rem] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-6">
        {LINE}
        <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
          {HIGHLIGHT}
        </span>
      </h1>
    );
  }

  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.25rem] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-6 min-h-[2.6em] sm:min-h-[2.2em]">
      {typed}
      {!showHighlight && (
        <span
          className={`inline-block w-[3px] h-[0.85em] align-middle ml-0.5 bg-accent ${
            cursorOn ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden
        />
      )}
      {showHighlight && (
        <motion.span
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.45 }}
          className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent"
        >
          {HIGHLIGHT}
        </motion.span>
      )}
    </h1>
  );
}
