"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/portfolio";

interface LanguageToggleProps {
  locale: Locale;
  onChange: (locale: Locale) => void;
  ariaLabel: string;
  compact?: boolean;
}

export function LanguageToggle({
  locale,
  onChange,
  ariaLabel,
  compact = false,
}: LanguageToggleProps) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center rounded-lg border border-border/60 bg-card/60 p-1",
        compact ? "gap-1" : "gap-1.5"
      )}
    >
      {!compact ? (
        <Languages className="size-3.5 text-muted-foreground" aria-hidden />
      ) : null}
      <Button
        size="sm"
        variant={locale === "fr" ? "secondary" : "ghost"}
        className="h-7 px-2 text-xs"
        onClick={() => onChange("fr")}
        aria-pressed={locale === "fr"}
      >
        FR
      </Button>
      <Button
        size="sm"
        variant={locale === "en" ? "secondary" : "ghost"}
        className="h-7 px-2 text-xs"
        onClick={() => onChange("en")}
        aria-pressed={locale === "en"}
      >
        EN
      </Button>
    </div>
  );
}
