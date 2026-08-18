import { Compass, Rocket, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { Card, CardContent } from "@/components/ui/card";
import type { Locale, PortfolioData } from "@/types/portfolio";
import { t, tList } from "@/types/portfolio";

interface AboutSectionProps {
  locale: Locale;
  data: PortfolioData;
}

const languageThemes = [
  { match: "Arab", flag: "🇲🇦", color: "#c1272d" },
  { match: "Arabic", flag: "🇲🇦", color: "#c1272d" },
  { match: "Fran", flag: "🇫🇷", color: "#0055a4" },
  { match: "French", flag: "🇫🇷", color: "#0055a4" },
  { match: "Anglais", flag: "🇬🇧", color: "#c8102e" },
  { match: "English", flag: "🇬🇧", color: "#c8102e" },
  { match: "Portug", flag: "🇵🇹", color: "#046a38" },
] as const;

export function AboutSection({ locale, data }: AboutSectionProps) {
  const focusItems =
    locale === "fr"
      ? [
          {
            icon: Rocket,
            title: "Pilotage de projets",
            description:
              "Cadrer, planifier et livrer des projets digitaux en tenant les délais et les objectifs métier.",
          },
          {
            icon: ShieldCheck,
            title: "Coordination d'équipes",
            description:
              "Faire dialoguer équipes techniques, produit et parties prenantes pour fluidifier la delivery.",
          },
          {
            icon: Compass,
            title: "Sens technique",
            description:
              "Un socle d'ingénieur qui facilite les échanges avec les développeurs et la compréhension des enjeux techniques.",
          },
        ]
      : [
          {
            icon: Rocket,
            title: "Project Leadership",
            description:
              "Scoping, planning, and delivering digital projects while meeting deadlines and business goals.",
          },
          {
            icon: ShieldCheck,
            title: "Team Coordination",
            description:
              "Bridging technical, product, and stakeholder teams to keep delivery flowing smoothly.",
          },
          {
            icon: Compass,
            title: "Technical Fluency",
            description:
              "An engineering background that eases communication with developers and technical decision-making.",
          },
        ];

  return (
    <section id="about" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <Reveal>
          <SectionHeading
            index={1}
            eyebrow={t(locale, data.labels.aboutEyebrow)}
            title={t(locale, data.about.heading)}
            className="mx-0 max-w-none"
          />
        </Reveal>

        <Reveal>
          <SpotlightCard className="rounded-xl">
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
                    {tList(locale, data.about.humanLanguages).map((language) => {
                      const theme = languageThemes.find((entry) => language.includes(entry.match));
                      return (
                        <span
                          key={language}
                          className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium"
                          style={{
                            borderColor: `color-mix(in oklab, ${theme?.color ?? "#94a3b8"} 45%, transparent)`,
                            backgroundColor: `color-mix(in oklab, ${theme?.color ?? "#94a3b8"} 14%, transparent)`,
                            color: `color-mix(in oklab, ${theme?.color ?? "#94a3b8"} 75%, white)`,
                          }}
                        >
                          <span aria-hidden>{theme?.flag ?? "🌐"}</span>
                          {language}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </SpotlightCard>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {focusItems.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <SpotlightCard className="h-full rounded-xl">
                <Card className="h-full border-border/60 bg-card/60 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/85 hover:shadow-[0_18px_40px_-26px_rgba(0,0,0,0.6)]">
                  <CardContent className="space-y-3 px-5">
                    <span className="inline-flex size-9 items-center justify-center rounded-lg border border-border/60 bg-background/60 text-primary transition-transform duration-300 group-hover/card:scale-105">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold tracking-tight text-foreground">{title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </CardContent>
                </Card>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
