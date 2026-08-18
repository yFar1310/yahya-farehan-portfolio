"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowUpRight, ChevronRight, Layers3, RotateCcw, Sparkles } from "lucide-react";
import { GitHubIcon } from "@/components/shared/brand-icons";
import { FlipTiltCard } from "@/components/shared/flip-tilt-card";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { TechBadge } from "@/components/shared/tech-badge";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { assetPath } from "@/lib/asset-path";
import { cn } from "@/lib/utils";
import type { Locale, PortfolioData } from "@/types/portfolio";
import { t, tList } from "@/types/portfolio";

interface ProjectsSectionProps {
  locale: Locale;
  data: PortfolioData;
}

const projectThemes = [
  {
    cardGradient: "from-cyan-500/30 via-blue-500/20 to-primary/10",
    modalGradient: "from-cyan-500/34 via-blue-500/24 to-background",
    glow: "bg-cyan-400/24",
    glowSoft: "bg-blue-400/18",
    cardShadow: "group-hover:shadow-[0_24px_54px_-28px_rgba(34,211,238,0.55)]",
    focusRing: "group-focus-visible:ring-cyan-300/35",
    modalShadow: "shadow-[0_35px_90px_-44px_rgba(34,211,238,0.45)]",
    accentRgb: "34,211,238",
  },
  {
    cardGradient: "from-emerald-500/30 via-teal-500/20 to-primary/10",
    modalGradient: "from-emerald-500/34 via-teal-500/22 to-background",
    glow: "bg-emerald-400/24",
    glowSoft: "bg-teal-400/18",
    cardShadow: "group-hover:shadow-[0_24px_54px_-28px_rgba(52,211,153,0.5)]",
    focusRing: "group-focus-visible:ring-emerald-300/35",
    modalShadow: "shadow-[0_35px_90px_-44px_rgba(52,211,153,0.42)]",
    accentRgb: "52,211,153",
  },
  {
    cardGradient: "from-sky-500/30 via-indigo-500/20 to-primary/10",
    modalGradient: "from-sky-500/34 via-indigo-500/24 to-background",
    glow: "bg-sky-400/24",
    glowSoft: "bg-indigo-400/18",
    cardShadow: "group-hover:shadow-[0_24px_54px_-28px_rgba(96,165,250,0.5)]",
    focusRing: "group-focus-visible:ring-sky-300/35",
    modalShadow: "shadow-[0_35px_90px_-44px_rgba(96,165,250,0.42)]",
    accentRgb: "96,165,250",
  },
  {
    cardGradient: "from-orange-500/25 via-amber-500/20 to-primary/10",
    modalGradient: "from-orange-500/30 via-amber-500/20 to-background",
    glow: "bg-orange-400/24",
    glowSoft: "bg-amber-400/18",
    cardShadow: "group-hover:shadow-[0_24px_54px_-28px_rgba(251,146,60,0.45)]",
    focusRing: "group-focus-visible:ring-orange-300/35",
    modalShadow: "shadow-[0_35px_90px_-44px_rgba(251,146,60,0.38)]",
    accentRgb: "251,146,60",
  },
  {
    cardGradient: "from-fuchsia-500/25 via-rose-500/20 to-primary/10",
    modalGradient: "from-fuchsia-500/30 via-rose-500/22 to-background",
    glow: "bg-fuchsia-400/24",
    glowSoft: "bg-rose-400/18",
    cardShadow: "group-hover:shadow-[0_24px_54px_-28px_rgba(244,114,182,0.45)]",
    focusRing: "group-focus-visible:ring-fuchsia-300/35",
    modalShadow: "shadow-[0_35px_90px_-44px_rgba(244,114,182,0.38)]",
    accentRgb: "244,114,182",
  },
] as const;

const projectLogos: Record<string, { src: string; alt: string }> = {
  "Derichebourg Website Migration": {
    src: "/logos/derichebourg.png",
    alt: "Derichebourg logo",
  },
};

const projectVisualSignals: Record<string, { fr: string[]; en: string[] }> = {
  "Derichebourg Website Migration": {
    fr: ["Migration CMS", "Navigation multilingue", "Rendu SSG/SSR"],
    en: ["CMS migration", "Multilingual navigation", "SSG/SSR delivery"],
  },
  TestPilot: {
    fr: ["Playwright E2E", "Suites de régression", "Fiabilité release"],
    en: ["Playwright E2E", "Regression suites", "Release reliability"],
  },
  "DAM Platform": {
    fr: ["Flux d'assets sécurisés", "Cloud workflows", "Microservices"],
    en: ["Secure asset flows", "Cloud workflows", "Microservices"],
  },
  PlanWatch: {
    fr: ["Produit full-stack", "Visualisation PERT", "Architecture monorepo"],
    en: ["Full-stack product", "PERT visualization", "Monorepo architecture"],
  },
  "Insurance Claims E2E": {
    fr: ["Orchestration BPMN", "Intégration multi-protocoles", "Scénarios démo"],
    en: ["BPMN orchestration", "Multi-protocol integration", "Demo scenarios"],
  },
};

export function ProjectsSection({ locale, data }: ProjectsSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeProject = useMemo(() => {
    if (activeIndex === null) {
      return null;
    }

    return data.projects.items[activeIndex] ?? null;
  }, [activeIndex, data.projects.items]);

  const closePanel = () => setActiveIndex(null);
  const activeProjectLogo = activeProject ? projectLogos[activeProject.title] : undefined;
  const activeTheme =
    activeIndex !== null
      ? projectThemes[activeIndex % projectThemes.length]
      : projectThemes[0];

  return (
    <section id="projects" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <Reveal>
          <div className="space-y-3">
            <SectionHeading
              index={3}
              eyebrow={t(locale, data.labels.projectsEyebrow)}
              title={t(locale, data.projects.heading)}
              description={t(locale, data.labels.sectionDescriptionProjects)}
              className="mx-0 max-w-none"
            />
            <p className="text-sm text-muted-foreground">{t(locale, data.labels.projectsOpenHintLabel)}</p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {data.projects.items.map((project, index) => {
            const logo = projectLogos[project.title];
            const theme = projectThemes[index % projectThemes.length];
            const focusSignals =
              projectVisualSignals[project.title]?.[locale] ??
              (locale === "fr"
                ? ["Architecture", "Delivery", "Qualité logicielle"]
                : ["Architecture", "Delivery", "Software quality"]);

            return (
              <Reveal key={project.title} delay={index * 0.06}>
                <FlipTiltCard
                  className="h-full"
                  accentRgb={theme.accentRgb}
                  front={({ playUnlock, flip }) => (
                    <div className="relative h-full w-full">
                      <button
                        type="button"
                        onClick={() => playUnlock(() => setActiveIndex(index))}
                        className="group block h-full w-full text-left outline-none"
                        aria-label={`${project.title} - ${t(locale, data.labels.projectsOpenDetailsLabel)}`}
                      >
                        <Card
                          className={cn(
                            "h-full border-border/60 bg-card/70 py-0 transition-all duration-300 group-hover:border-primary/35 group-hover:bg-card/85 group-focus-visible:border-primary/35 group-focus-visible:ring-2",
                            theme.cardShadow,
                            theme.focusRing
                          )}
                        >
                          <CardHeader className="gap-0 px-0">
                            <div
                              className={cn(
                                "relative flex h-36 items-end overflow-hidden rounded-t-xl border-b border-border/60 bg-gradient-to-br p-5",
                                theme.cardGradient
                              )}
                              aria-hidden
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-background/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                              <div
                                className={cn("absolute -right-16 -top-14 h-28 w-28 rounded-full blur-2xl", theme.glowSoft)}
                              />
                              <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-white/20 opacity-0 blur-2xl transition-all duration-700 ease-out group-hover:left-[125%] group-hover:opacity-70" />
                              <div className="absolute right-12 top-4 inline-flex items-center gap-1 rounded-full border border-white/25 bg-black/15 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white/85 backdrop-blur-sm">
                                {logo ? (
                                  <Image
                                    src={assetPath(logo.src)}
                                    alt={logo.alt}
                                    width={132}
                                    height={30}
                                    className="h-5 w-auto rounded-sm bg-white px-1 py-0.5"
                                  />
                                ) : (
                                  <>
                                    <Layers3 className="size-3" />
                                    {project.title}
                                  </>
                                )}
                              </div>

                              <div className="w-full space-y-2.5">
                                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/75">
                                  {locale === "fr" ? "Axes projet" : "Project focus"}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                  {focusSignals.map((signal) => (
                                    <span
                                      key={`${project.title}-${signal}`}
                                      className="rounded-full border border-white/25 bg-black/15 px-2 py-1 text-[11px] leading-none text-white/90 backdrop-blur-sm transition-all duration-300 group-hover:border-white/35 group-hover:bg-black/25"
                                    >
                                      {signal}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div className="space-y-3 px-6 pt-5">
                              <Badge variant="outline" className="w-fit border-primary/35 bg-primary/10 text-primary">
                                {t(locale, project.status)}
                              </Badge>
                              <CardTitle className="font-heading text-xl leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary">
                                {project.title}
                              </CardTitle>
                              <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                                {t(locale, project.summary)}
                              </CardDescription>
                            </div>
                          </CardHeader>

                          <CardContent className="space-y-6 px-6 py-5">
                            <div className="space-y-3">
                              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                                {t(locale, data.labels.projectsHighlightsLabel)}
                              </p>
                              <ul className="grid gap-2 text-sm leading-relaxed text-muted-foreground">
                                {tList(locale, project.bullets).map((point) => (
                                  <li key={point} className="flex gap-2.5">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>

                          <CardFooter className="justify-between gap-3 border-border/60 px-6">
                            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                              <Sparkles className="size-3.5" aria-hidden />
                              {locale === "fr" ? "Retourner pour la stack" : "Flip for the stack"}
                            </span>
                            <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                              {t(locale, data.labels.projectsOpenDetailsLabel)}
                              <ChevronRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </span>
                          </CardFooter>
                        </Card>
                      </button>
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          flip();
                        }}
                        aria-label={locale === "fr" ? "Voir la stack technique" : "View tech stack"}
                        className="absolute right-3 top-3 z-30 inline-flex size-8 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white/90 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/45"
                      >
                        <RotateCcw className="size-4" aria-hidden />
                      </button>
                    </div>
                  )}
                  back={({ flip }) => (
                    <div className="relative h-full w-full">
                      <Card
                        className={cn(
                          "flex h-full flex-col border-border/60 bg-gradient-to-br py-0",
                          theme.cardGradient
                        )}
                      >
                        <CardHeader className="gap-1 px-6 pt-6">
                          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/70">
                            {t(locale, data.labels.projectsStackLabel)}
                          </p>
                          <CardTitle className="font-heading text-lg tracking-tight text-white">
                            {project.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-4 px-6 py-5">
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <TechBadge key={tech} name={tech} className="bg-black/25 backdrop-blur-sm" />
                            ))}
                          </div>
                          <p className="text-xs leading-relaxed text-white/75">
                            {t(locale, data.labels.projectsGithubLabel)}:{" "}
                            {project.github
                              ? t(locale, data.labels.projectsAvailableLabel)
                              : t(locale, data.labels.projectsPrivateLabel)}
                          </p>
                        </CardContent>
                        <CardFooter className="gap-2 border-white/15 px-6 pb-6">
                          <button
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "flex-1 justify-center")}
                          >
                            {t(locale, data.labels.projectsOpenDetailsLabel)}
                          </button>
                          {project.github ? (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(event) => event.stopPropagation()}
                              className={cn(buttonVariants({ variant: "outline", size: "icon-sm" }), "border-white/30 text-white")}
                              aria-label="GitHub"
                            >
                              <GitHubIcon className="size-4" />
                            </a>
                          ) : null}
                        </CardFooter>
                      </Card>
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          flip();
                        }}
                        aria-label={locale === "fr" ? "Voir le resume" : "View summary"}
                        className="absolute right-3 top-3 z-30 inline-flex size-8 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white/90 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/45"
                      >
                        <RotateCcw className="size-4" aria-hidden />
                      </button>
                    </div>
                  )}
                />
              </Reveal>
            );
          })}
        </div>
      </div>

      <Dialog open={activeProject !== null} onOpenChange={(isOpen) => !isOpen && closePanel()}>
        <DialogContent
          className={cn(
            "max-h-[90vh] w-[min(96vw,74rem)] max-w-none overflow-y-auto border-border/70 bg-background/95 p-0 backdrop-blur-xl sm:max-w-[min(96vw,74rem)] lg:max-w-[min(92vw,82rem)]",
            activeTheme.modalShadow
          )}
        >
          {activeProject ? (
            <div className="flex flex-col">
              <div
                className={cn(
                  "relative h-40 overflow-hidden border-b border-border/60 bg-gradient-to-br p-6",
                  activeTheme.modalGradient
                )}
              >
                <div className={cn("absolute -top-12 left-8 h-28 w-28 rounded-full blur-3xl", activeTheme.glowSoft)} />
                <div className="absolute right-6 top-6 rounded-full border border-border/50 bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  {t(locale, data.labels.projectsDetailsTitleLabel)}
                </div>
                <div className={cn("absolute -bottom-16 -right-16 h-44 w-44 rounded-full blur-3xl", activeTheme.glow)} />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
              </div>

              <DialogHeader className="space-y-4 border-b border-border/60 px-6 pb-6 pt-5 sm:px-8">
                <Badge variant="outline" className="w-fit border-primary/35 bg-primary/10 text-primary">
                  {t(locale, activeProject.status)}
                </Badge>
                {activeProjectLogo ? (
                  <span className="inline-flex w-fit rounded-xl border border-border/60 bg-white p-1.5">
                    <Image
                      src={assetPath(activeProjectLogo.src)}
                      alt={activeProjectLogo.alt}
                      width={160}
                      height={36}
                      className="h-7 w-auto rounded-sm"
                    />
                  </span>
                ) : null}
                <DialogTitle className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {activeProject.title}
                </DialogTitle>
                <DialogDescription className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {t(locale, activeProject.summary)}
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-8 px-6 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1fr_0.95fr]">
                <div className="space-y-8">
                  <section className="space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {t(locale, data.labels.projectsContextLabel)}
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">
                      {t(locale, activeProject.details.context)}
                    </p>
                  </section>

                  <section className="space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {t(locale, data.labels.projectsContributionsLabel)}
                    </h3>
                    <ul className="grid gap-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {tList(locale, activeProject.details.contributions).map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                <div className="space-y-8">
                  <section className="space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {t(locale, data.labels.projectsArchitectureLabel)}
                    </h3>
                    <ul className="grid gap-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {tList(locale, activeProject.details.architecture).map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {t(locale, data.labels.projectsEngineeringLabel)}
                    </h3>
                    <ul className="grid gap-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {tList(locale, activeProject.details.engineeringFocus).map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {t(locale, data.labels.projectsStackLabel)}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tech.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                    </div>
                  </section>

                  <section className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border/60 bg-card/65 p-4">
                    <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      {t(locale, data.labels.projectsGithubLabel)}
                    </span>
                    {activeProject.github ? (
                      <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                      >
                        <GitHubIcon className="size-4" />
                        GitHub
                        <ArrowUpRight />
                      </a>
                    ) : (
                      <span className="text-sm text-muted-foreground">{t(locale, data.labels.projectsPrivateLabel)}</span>
                    )}
                  </section>
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
