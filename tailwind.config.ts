import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "rgba(255, 255, 255, 0.03)",
        "card-border": "rgba(255, 255, 255, 0.08)",
        accent: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          dark: "#4f46e5",
        },
        gradient: {
          start: "#6366f1",
          mid: "#8b5cf6",
          end: "#ec4899",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "ai-gradient":
          "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(99, 102, 241, 0.15)",
        "glow-lg": "0 0 60px rgba(99, 102, 241, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
