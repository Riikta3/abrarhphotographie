"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ReactNode } from "react";

export function UIProviders({ children }: { children: ReactNode }) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
