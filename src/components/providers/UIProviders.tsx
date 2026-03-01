"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function UIProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      enableSystem={true}
    >
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
