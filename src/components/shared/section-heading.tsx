import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  /** Editorial index shown as a large "01" style marker, e.g. 1 for the first section. */
  index?: number;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  index,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto flex w-full max-w-3xl flex-col gap-4", className)}>
      <div className="flex items-center gap-3">
        {typeof index === "number" ? (
          <span
            aria-hidden
            className="font-heading text-sm font-semibold tabular-nums text-primary/70"
          >
            {String(index).padStart(2, "0")}
          </span>
        ) : null}
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
          {eyebrow}
        </div>
      </div>
      <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
