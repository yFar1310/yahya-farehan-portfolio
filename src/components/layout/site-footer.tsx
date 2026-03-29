import { Dumbbell, PencilLine, Volleyball } from "lucide-react";

interface SiteFooterProps {
  locale: "fr" | "en";
  name: string;
  rights: string;
  builtWith: string;
  humanLabel: string;
  interests: string[];
}

export function SiteFooter({
  locale,
  name,
  rights,
  builtWith,
  humanLabel,
  interests,
}: SiteFooterProps) {
  const interestIcons = [Dumbbell, Volleyball, PencilLine];

  return (
    <footer className="border-t border-border/50 bg-background/90 py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{builtWith}</p>
          <p className="text-sm text-muted-foreground">
            {name} (c) {new Date().getFullYear()} - {rights}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {humanLabel}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {interests.map((interest, index) => {
              const Icon = interestIcons[index];
              return (
                <span
                  key={interest}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/70 px-3 py-1 text-xs text-muted-foreground"
                >
                  {Icon ? <Icon className="size-3.5" aria-hidden /> : null}
                  {interest}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <span className="sr-only">{locale === "fr" ? "Pied de page" : "Footer"}</span>
    </footer>
  );
}
