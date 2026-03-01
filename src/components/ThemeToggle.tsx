"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant='ghost'
        size='icon'
        className='opacity-0'
      >
        <Sun className='h-5 w-5' />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => setTheme(isDark ? "light" : "dark")}
      data-testid='theme-toggle'
      className='hover-elevate'
      title={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
    >
      {isDark ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
    </Button>
  );
}
