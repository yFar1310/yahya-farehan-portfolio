import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { TechBadge } from "@/components/shared/tech-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Locale, PortfolioData } from "@/types/portfolio";
import { t } from "@/types/portfolio";

interface SkillsSectionProps {
  locale: Locale;
  data: PortfolioData;
}

const accentThemes = [
  {
    glow: "bg-cyan-400/20",
    ring: "hover:border-cyan-300/30",
    title: "group-hover:text-cyan-100",
  },
  {
    glow: "bg-blue-400/20",
    ring: "hover:border-blue-300/30",
    title: "group-hover:text-blue-100",
  },
  {
    glow: "bg-indigo-400/20",
    ring: "hover:border-indigo-300/30",
    title: "group-hover:text-indigo-100",
  },
  {
    glow: "bg-sky-400/18",
    ring: "hover:border-sky-300/30",
    title: "group-hover:text-sky-100",
  },
  {
    glow: "bg-teal-400/18",
    ring: "hover:border-teal-300/30",
    title: "group-hover:text-teal-100",
  },
  {
    glow: "bg-violet-400/18",
    ring: "hover:border-violet-300/30",
    title: "group-hover:text-violet-100",
  },
] as const;

export function SkillsSection({ locale, data }: SkillsSectionProps) {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <Reveal>
          <SectionHeading
            index={4}
            eyebrow={t(locale, data.labels.skillsEyebrow)}
            title={t(locale, data.skills.heading)}
            description={t(locale, data.labels.sectionDescriptionSkills)}
            className="mx-0 max-w-none"
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.skills.groups.map((group, index) => (
            <Reveal key={group.category.en} delay={index * 0.05}>
              <SpotlightCard className="h-full rounded-xl">
                <Card
                  className={`group relative h-full overflow-hidden border-border/60 bg-card/70 py-5 transition-all duration-300 hover:-translate-y-1 hover:bg-card/85 hover:shadow-[0_18px_40px_-26px_rgba(0,0,0,0.62)] ${accentThemes[index % accentThemes.length].ring}`}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/55 to-transparent" />
                  <div
                    className={`absolute -right-10 -top-10 h-24 w-24 rounded-full blur-2xl transition-opacity duration-300 ${accentThemes[index % accentThemes.length].glow} opacity-70 group-hover:opacity-100`}
                  />
                  <CardHeader className="px-5 pb-2">
                    <CardTitle
                      className={`text-lg tracking-tight text-foreground transition-colors duration-300 ${accentThemes[index % accentThemes.length].title}`}
                    >
                      {t(locale, group.category)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 px-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {t(locale, data.labels.skillsCoreLabel)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <TechBadge key={`${group.category.en}-${item}`} name={item} />
                      ))}
                    </div>
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
