import { BriefcaseBusiness, MapPin, Timer } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Locale, PortfolioData } from "@/types/portfolio";
import { t, tList } from "@/types/portfolio";

interface ExperienceSectionProps {
  locale: Locale;
  data: PortfolioData;
}

export function ExperienceSection({ locale, data }: ExperienceSectionProps) {
  return (
    <section id="experience" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow={t(locale, data.labels.experienceEyebrow)}
            title={t(locale, data.experience.heading)}
          />
        </Reveal>

        <div className="space-y-6">
          {data.experience.items.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.08}>
              <Card className="border-border/60 bg-card/70 py-6 transition-all duration-300 hover:border-primary/30 hover:bg-card/85 hover:shadow-[0_18px_40px_-26px_rgba(0,0,0,0.6)]">
                <CardHeader className="grid gap-4 px-6 sm:px-8 md:grid-cols-[1fr_auto] md:items-start">
                  <div className="space-y-2">
                    <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
                      {item.company}
                    </Badge>
                    <CardTitle className="text-2xl tracking-tight text-foreground md:text-3xl">
                      {t(locale, item.role)}
                    </CardTitle>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {t(locale, item.summary)}
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl border border-border/60 bg-background/50 p-4 text-sm text-muted-foreground">
                    <p className="inline-flex items-center gap-2">
                      <Timer className="size-4" aria-hidden />
                      {t(locale, item.period)}
                    </p>
                    <p className="inline-flex items-center gap-2">
                      <MapPin className="size-4" aria-hidden />
                      {t(locale, item.location)}
                    </p>
                    <p className="inline-flex items-center gap-2">
                      <BriefcaseBusiness className="size-4" aria-hidden />
                      {item.company}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 px-6 sm:px-8">
                  <ul className="grid gap-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {tList(locale, item.bullets).map((bullet) => (
                      <li key={bullet} className="flex gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {t(locale, data.labels.experienceTechLabel)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-secondary/70 text-secondary-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
