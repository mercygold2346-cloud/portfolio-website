"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

function readStoredTheme(): Theme {
  const saved = localStorage.getItem("theme");
  return saved === "light" ? "light" : "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    return readStoredTheme();
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
