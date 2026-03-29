import { Compass, Rocket, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Locale, PortfolioData } from "@/types/portfolio";
import { t, tList } from "@/types/portfolio";

interface AboutSectionProps {
  locale: Locale;
  data: PortfolioData;
}

export function AboutSection({ locale, data }: AboutSectionProps) {
  const focusItems =
    locale === "fr"
      ? [
          {
            icon: Rocket,
            title: "Construction produit",
            description:
              "Concevoir des experiences fiables, maintenables et orientees impact metier.",
          },
          {
            icon: ShieldCheck,
            title: "Qualite et testabilite",
            description:
              "Automatisation QA, verification de comportements critiques et reduction du risque de regression.",
          },
          {
            icon: Compass,
            title: "Architecture moderne",
            description:
              "Full-stack, APIs, cloud patterns et decisions techniques adaptees a l'echelle du produit.",
          },
        ]
      : [
          {
            icon: Rocket,
            title: "Product Engineering",
            description:
              "Building reliable, maintainable experiences with clear business impact.",
          },
          {
            icon: ShieldCheck,
            title: "Quality & Testability",
            description:
              "QA automation, critical-flow validation, and reduced regression risk.",
          },
          {
            icon: Compass,
            title: "Modern Architecture",
            description:
              "Full-stack, API, and cloud decisions aligned with product scale.",
          },
        ];

  return (
    <section id="about" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow={t(locale, data.labels.aboutEyebrow)}
            title={t(locale, data.about.heading)}
            className="mx-0 max-w-none"
          />
        </Reveal>

        <Reveal>
          <Card className="border-border/60 bg-card/70 py-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/85 hover:shadow-[0_18px_40px_-26px_rgba(0,0,0,0.6)]">
            <CardContent className="grid gap-8 px-6 sm:px-8 lg:px-10">
              <p className="max-w-[72ch] text-lg leading-relaxed text-foreground/95 text-pretty">
                {t(locale, data.about.lead)}
              </p>
              <p className="max-w-[74ch] text-base leading-relaxed text-muted-foreground text-pretty">
                {t(locale, data.about.paragraphOne)}
              </p>
              <p className="max-w-[74ch] text-base leading-relaxed text-muted-foreground text-pretty">
                {t(locale, data.about.paragraphTwo)}
              </p>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {t(locale, data.labels.aboutLanguagesLabel)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tList(locale, data.about.humanLanguages).map((language) => (
                    <Badge key={language} variant="secondary" className="bg-secondary/75 text-secondary-foreground">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {focusItems.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <Card className="h-full border-border/60 bg-card/60 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/85 hover:shadow-[0_18px_40px_-26px_rgba(0,0,0,0.6)]">
                <CardContent className="space-y-3 px-5">
                  <span className="inline-flex size-9 items-center justify-center rounded-lg border border-border/60 bg-background/60 text-primary transition-transform duration-300 group-hover/card:scale-105">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold tracking-tight text-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
