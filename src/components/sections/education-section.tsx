import { GraduationCap, MapPinHouse } from "lucide-react";
import { HeroMascot } from "@/components/shared/hero-mascot";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import type { Locale, PortfolioData } from "@/types/portfolio";
import { t } from "@/types/portfolio";

interface EducationSectionProps {
  locale: Locale;
  data: PortfolioData;
}

export function EducationSection({ locale, data }: EducationSectionProps) {
  return (
    <section id="education" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <Reveal>
          <SectionHeading
            index={5}
            eyebrow={t(locale, data.labels.educationEyebrow)}
            title={t(locale, data.education.heading)}
            description={t(locale, data.labels.sectionDescriptionEducation)}
            className="mx-0 max-w-none"
          />
        </Reveal>

        <Reveal>
          <Card className="border-border/60 bg-card/70 py-6 transition-all duration-300 hover:border-primary/30 hover:bg-card/85 hover:shadow-[0_18px_40px_-26px_rgba(0,0,0,0.6)]">
            <CardContent className="space-y-8 px-6 sm:px-8 lg:px-10">
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-sm text-muted-foreground">
                <MapPinHouse className="size-4 text-primary" aria-hidden />
                {t(locale, data.education.arrivalNote)}
              </p>

              <div className="relative space-y-4 pl-6 before:absolute before:left-2 before:top-2 before:h-[calc(100%-0.5rem)] before:w-px before:bg-gradient-to-b before:from-primary/60 before:via-primary/30 before:to-transparent">
                {data.education.items.map((item, index) => {
                  const isFinishLine = index === 0;
                  return (
                    <div
                      key={`${item.institution}-${index}`}
                      className="group relative flex items-start gap-3 rounded-xl border border-border/60 bg-background/45 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-background/60"
                    >
                      <span className="absolute -left-[1.2rem] top-5 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_4px_rgba(100,181,246,0.2)]" aria-hidden />
                      <div className="min-w-0 flex-1">
                        <p className="text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                          {item.institution}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-foreground/90">{t(locale, item.degree)}</p>
                        <p className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                          <GraduationCap className="size-3.5" aria-hidden />
                          {t(locale, item.period)}
                        </p>
                      </div>
                      {isFinishLine ? (
                        <HeroMascot className="hidden h-20 w-16 shrink-0 sm:block" />
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
