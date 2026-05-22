"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="h-16 w-16 rounded-2xl border-2 border-accent/30 border-t-accent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          className="text-sm font-medium text-white/60"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
}
