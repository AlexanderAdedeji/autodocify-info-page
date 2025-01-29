import React, { useEffect, useState, createContext, useContext } from "react";
interface ThemeContextType {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  primaryColor: string;
  setPrimaryColor: (value: string) => void;
  radius: string;
  setRadius: (value: string) => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [primaryColor, setPrimaryColor] = useState("#3b82f6"); // Default blue
  const [radius, setRadius] = useState("0.75");
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
    }
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.setProperty("--primary-color", primaryColor);
    document.documentElement.style.setProperty("--radius", `${radius}rem`);
  }, [isDark, primaryColor, radius]);
  return (
    <ThemeContext.Provider
      value={{
        isDark,
        setIsDark,
        primaryColor,
        setPrimaryColor,
        radius,
        setRadius,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
