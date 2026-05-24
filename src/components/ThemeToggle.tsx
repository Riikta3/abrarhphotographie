"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      // Only switch to light mode if explicitly saved
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      // Default to dark mode
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={toggleTheme}
      data-testid='theme-toggle'
      className='hover-elevate'
      title={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
    >
      {isDark ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
    </Button>
  );
}
