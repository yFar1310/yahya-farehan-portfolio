import { Dumbbell, PencilLine, Volleyball, type LucideIcon } from "lucide-react";

interface InterestTheme {
  icon: LucideIcon;
  color: string;
}

/**
 * Matches an interest label (in either locale) to an icon + brand-ish
 * color, so the "outside of code" footer/profile section reads as
 * colorful and personal rather than a flat gray tag list.
 */
const interestThemes: Record<string, InterestTheme> = {
  Musculation: { icon: Dumbbell, color: "#34d399" },
  "Strength Training": { icon: Dumbbell, color: "#34d399" },
  Basketball: { icon: Volleyball, color: "#fb923c" },
  Dessin: { icon: PencilLine, color: "#c084fc" },
  Drawing: { icon: PencilLine, color: "#c084fc" },
};

interface InterestBadgeProps {
  label: string;
  className?: string;
}

export function InterestBadge({ label, className }: InterestBadgeProps) {
  const theme = interestThemes[label];
  const Icon = theme?.icon;
  const color = theme?.color ?? "#94a3b8";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-transform duration-300 hover:-translate-y-0.5 ${className ?? ""}`}
      style={{
        borderColor: `color-mix(in oklab, ${color} 45%, transparent)`,
        backgroundColor: `color-mix(in oklab, ${color} 14%, transparent)`,
        color: `color-mix(in oklab, ${color} 78%, white)`,
      }}
    >
      {Icon ? <Icon className="size-3.5" style={{ color }} aria-hidden /> : null}
      {label}
    </span>
  );
}
