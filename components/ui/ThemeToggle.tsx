"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-xl glass glass-hover text-white/80 hover:text-white transition-colors"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
        className="relative w-5 h-5"
      >
        <Sun
          className={`absolute inset-0 w-5 h-5 transition-opacity duration-200 ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        />
        <Moon
          className={`absolute inset-0 w-5 h-5 transition-opacity duration-200 ${
            theme === "light" ? "opacity-100" : "opacity-0"
          }`}
        />
      </motion.div>
    </motion.button>
  );
}
