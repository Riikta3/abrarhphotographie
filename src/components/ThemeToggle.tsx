"use client";

import { Button } from "@/components/ui/button";
import {
  readStorage,
  THEME_VARIANT_KEY,
  writeStorage,
} from "@/components/ThemeVariantSelect";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // La variante "nb-clair" impose déjà son propre mode clair :
    // on ne réapplique pas le light/dark pour ne pas l'écraser.
    if (readStorage(THEME_VARIANT_KEY) === "nb-clair") {
      setIsDark(false);
      return;
    }

    // Check for saved theme preference or default to dark mode
    const savedTheme = readStorage("theme");

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
    writeStorage("theme", newTheme ? "dark" : "light");

    const root = document.documentElement;

    if (newTheme) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Une variante N&B redéfinit les tokens APRÈS .dark : sans cela, basculer
    // en clair ne changerait rien à l'écran alors que l'icône, elle, bascule.
    const variant = readStorage(THEME_VARIANT_KEY);
    if (variant && variant !== "actuel" && variant !== "nb-clair" && !newTheme) {
      root.removeAttribute("data-theme-variant");
      writeStorage(THEME_VARIANT_KEY, "actuel");
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
