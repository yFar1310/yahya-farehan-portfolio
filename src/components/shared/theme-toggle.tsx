"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

interface ThemeToggleProps {
  ariaLabel: string;
}

export function ThemeToggle({ ariaLabel }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const isDark = mounted ? resolvedTheme !== "light" : true;

  return (
    <Button
      variant="outline"
      size="icon-sm"
      aria-label={ariaLabel}
      className="border-border/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-secondary/80"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}
