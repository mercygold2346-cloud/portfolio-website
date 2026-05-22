"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

const NODES = [
  { x: 12, y: 18 },
  { x: 28, y: 42 },
  { x: 45, y: 22 },
  { x: 62, y: 38 },
  { x: 78, y: 16 },
  { x: 88, y: 52 },
  { x: 35, y: 68 },
  { x: 55, y: 78 },
  { x: 72, y: 62 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 6],
  [6, 7],
  [7, 8],
  [3, 8],
  [4, 8],
  [2, 6],
];

function Particles() {
  const reduceMotion = useReducedMotion();
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: `${(i * 17 + 7) % 100}%`,
        top: `${(i * 23 + 11) % 100}%`,
        size: 2 + (i % 3),
        duration: 4 + (i % 5),
        delay: (i % 7) * 0.35,
      })),
    []
  );

  if (reduceMotion) return null;

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-accent/40 dark:bg-accent-light/50"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -22, 0],
            opacity: [0.15, 0.55, 0.15],
            scale: [1, 1.35, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

function NeuralMesh() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.14] dark:opacity-[0.22]"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      {EDGES.map(([a, b], i) => {
        const n1 = NODES[a];
        const n2 = NODES[b];
        return (
          <motion.line
            key={i}
            x1={n1.x}
            y1={n1.y}
            x2={n2.x}
            y2={n2.y}
            stroke="url(#neural-line)"
            strokeWidth="0.15"
            animate={{ opacity: [0.12, 0.42, 0.12] }}
            transition={{
              duration: 5 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25,
            }}
          />
        );
      })}
      {NODES.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="0.45"
          fill="rgba(129,140,248,0.7)"
          animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.4, 1] }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
      <defs>
        <linearGradient id="neural-line" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function HeroTechBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 home-tech-grid opacity-[0.35] dark:opacity-[0.2]" />

      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[55%] h-[55%] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.2),transparent_70%)] blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 40, 0], y: [0, 24, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.12),transparent_70%)] blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 w-[40%] h-[30%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.15),transparent_70%)] blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <NeuralMesh />
      <Particles />

      <motion.div
        className="absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(99,102,241,0.06)_50%,transparent_60%)] dark:bg-[linear-gradient(105deg,transparent_40%,rgba(129,140,248,0.1)_50%,transparent_60%)]"
        animate={reduceMotion ? undefined : { x: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
