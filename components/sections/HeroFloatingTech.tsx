"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Smartphone,
  Laptop,
  Code2,
  Database,
  Cloud,
  Cpu,
} from "lucide-react";

function FloatingCard({
  children,
  className,
  delay = 0,
  duration = 5,
}: {
  children: React.ReactNode;
  className: string;
  delay?: number;
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={
        reduceMotion
          ? { opacity: 1, scale: 1 }
          : {
              opacity: 1,
              scale: 1,
              y: [0, -18, 0],
              x: [0, 6, 0],
              rotate: [0, 3, 0],
            }
      }
      transition={
        reduceMotion
          ? { duration: 0.6, delay: delay * 0.15 }
          : {
              opacity: { duration: 0.6, delay: delay * 0.15 },
              scale: { duration: 0.6, delay: delay * 0.15 },
              y: {
                duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              },
              x: {
                duration: duration * 1.1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay + 0.2,
              },
              rotate: {
                duration: duration * 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}

function PhoneMockup() {
  return (
    <motion.div
      className="relative w-[88px] sm:w-[100px] h-[180px] sm:h-[200px] rounded-[1.75rem] border-[3px] border-slate-300 dark:border-white/30 bg-slate-800 dark:bg-slate-900 shadow-2xl shadow-black/20 dark:shadow-black/40 overflow-hidden"
      animate={{
        y: [0, -22, 0],
        rotate: [-6, -2, -6],
      }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-white/20" />
      <motion.div className="absolute inset-3 top-5 rounded-2xl bg-gradient-to-b from-accent/40 to-slate-950 p-2 overflow-hidden">
        <div className="space-y-1.5">
          {[72, 48, 64, 40].map((w, i) => (
            <motion.div
              key={i}
              className="h-1.5 rounded-full bg-white/25"
              style={{ width: `${w}%` }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
        <motion.div
          className="mt-3 flex gap-1"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="w-2 h-2 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

const cardGlass =
  "backdrop-blur-md border shadow-xl " +
  "bg-white/90 border-slate-200 dark:bg-white/10 dark:border-white/20";

export default function HeroFloatingTech() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden hidden md:block">
      <FloatingCard
        className="absolute top-[18%] right-[8%] lg:right-[12%]"
        delay={0}
        duration={6}
      >
        <PhoneMockup />
      </FloatingCard>

      <FloatingCard
        className={`absolute top-[22%] left-[6%] lg:left-[10%] p-4 rounded-2xl ${cardGlass}`}
        delay={0.3}
        duration={5.5}
      >
        <Laptop
          className="text-accent w-10 h-10 mb-2 dark:text-white"
          strokeWidth={1.5}
        />
        <p className="text-xs font-semibold text-slate-900 dark:text-white">
          Full-Stack Dev
        </p>
        <p className="text-[10px] text-slate-500 dark:text-white/60">
          Next.js · React
        </p>
      </FloatingCard>

      <FloatingCard
        className={`absolute bottom-[28%] right-[14%] p-3 rounded-xl ${cardGlass}`}
        delay={0.6}
        duration={4.8}
      >
        <Code2 className="text-emerald-500 dark:text-emerald-400 w-8 h-8" />
      </FloatingCard>

      <FloatingCard
        className={`absolute bottom-[32%] left-[12%] p-3 rounded-xl ${cardGlass}`}
        delay={0.9}
        duration={5.2}
      >
        <Database className="text-accent w-7 h-7" />
      </FloatingCard>

      <FloatingCard
        className="absolute top-[42%] right-[22%] px-3 py-2 rounded-lg bg-accent/20 backdrop-blur border border-accent/40 dark:bg-accent/30 text-xs font-mono text-accent-dark dark:text-white"
        delay={1.1}
        duration={4.5}
      >
        <motion.span
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          npm run build ✓
        </motion.span>
      </FloatingCard>

      <FloatingCard
        className={`absolute top-[38%] left-[22%] p-2.5 rounded-full ${cardGlass}`}
        delay={0.5}
        duration={6.5}
      >
        <Cloud className="text-sky-500 dark:text-sky-300 w-6 h-6" />
      </FloatingCard>

      <FloatingCard
        className="absolute bottom-[22%] right-[6%] px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-900 text-xs font-bold shadow-lg dark:border-white/20 dark:bg-white/95"
        delay={0.2}
        duration={5.8}
      >
        <span className="flex items-center gap-1.5">
          <Cpu size={14} className="text-accent" />
          TypeScript
        </span>
      </FloatingCard>

      <FloatingCard
        className="absolute bottom-[20%] left-[6%]"
        delay={0.7}
        duration={6.2}
      >
        <motion.div
          className={`p-3 rounded-2xl ${cardGlass}`}
          animate={{ rotate: [8, 12, 8] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <Smartphone className="text-slate-600 dark:text-white/80 w-6 h-6" />
        </motion.div>
      </FloatingCard>
    </div>
  );
}
