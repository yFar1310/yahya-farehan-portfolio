"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/brand-icons";
import { OrganizationModal } from "@/components/shared/organization-modal";
import { ProfileModal } from "@/components/shared/profile-modal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale, PortfolioData } from "@/types/portfolio";
import { t, tList } from "@/types/portfolio";

interface HeroSectionProps {
  locale: Locale;
  data: PortfolioData;
}

export function HeroSection({ locale, data }: HeroSectionProps) {
  const { profile, hero, labels } = data;
  const partnerOrganizations = [
    {
      name: "ENSIIE",
      logoSrc: "/logos/ensiie.png",
      logoAlt: "ENSIIE logo",
      logoWidth: 180,
      logoHeight: 52,
      summary: {
        fr: "Ecole Nationale Superieure d'Informatique pour l'Industrie et l'Entreprise, avec un cursus d'ingenierie oriente production logicielle et systemes.",
        en: "Ecole Nationale Superieure d'Informatique pour l'Industrie et l'Entreprise with an engineering curriculum focused on software production and systems.",
      },
      bullets: {
        fr: [
          "Cycle ingenieur en informatique en apprentissage (2024-2027).",
          "Formation en architecture logicielle, algorithmique, data et systemes.",
          "Double parcours academique avec Universite d'Evry Paris-Saclay (IMSD).",
        ],
        en: [
          "Engineering degree in computer science on an apprenticeship track (2024-2027).",
          "Training across software architecture, algorithms, data, and systems.",
          "Double academic track with Universite d'Evry Paris-Saclay (IMSD).",
        ],
      },
      link: "https://www.ensiie.fr/",
    },
    {
      name: "WebTales",
      logoSrc: "/logos/webtales.png",
      logoAlt: "WebTales logo",
      logoWidth: 168,
      logoHeight: 52,
      summary: {
        fr: "Equipe produit et ingenierie orientee plateformes web modernes, migration de stacks legacy et architectures cloud robustes.",
        en: "Product and engineering team focused on modern web platforms, legacy stack migration, and robust cloud architectures.",
      },
      bullets: {
        fr: [
          "Apprentissage en ingenierie logicielle depuis septembre 2024.",
          "Contribution a des plateformes multi-pages, APIs securisees et workflows medias.",
          "Mobilite internationale prevue au Portugal en juillet-aout 2026.",
        ],
        en: [
          "Software engineering apprenticeship since September 2024.",
          "Contributions to multi-page platforms, secure APIs, and media workflows.",
          "International mobility planned in Portugal in July-August 2026.",
        ],
      },
      link: "https://www.webtales.io/",
    },
  ];
  const collaborationPriorities =
    locale === "fr"
      ? [
          "Modernisation de plateformes web en production",
          "Cloud media workflows et securisation des APIs",
          "Automatisation QA et fiabilite de delivery",
          "Collaboration internationale (Portugal 2026)",
        ]
      : [
          "Production web platform modernization",
          "Cloud media workflows and secure APIs",
          "QA automation and delivery reliability",
          "International collaboration track (Portugal 2026)",
        ];

  return (
    <section id="hero" className="relative scroll-mt-24 px-4 pb-20 pt-16 sm:px-6 md:pt-20 lg:px-8 lg:pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="hero-glow absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
              {t(locale, labels.heroEyebrow)}
            </Badge>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {t(locale, hero.badge)}
            </p>
            <h1 className="font-heading text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <h2 className="max-w-3xl text-xl leading-snug text-foreground/90 sm:text-2xl">
              {t(locale, hero.title)}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t(locale, hero.intro)}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/70 px-3 py-1">
              <MapPin className="size-3.5" aria-hidden />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/70 px-3 py-1">
              <Sparkles className="size-3.5" aria-hidden />
              {locale === "fr" ? "Ecosysteme d'apprentissage" : "Learning Ecosystem"}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {partnerOrganizations.map((organization) => (
              <OrganizationModal
                key={organization.name}
                locale={locale}
                name={organization.name}
                logoSrc={organization.logoSrc}
                logoAlt={organization.logoAlt}
                logoWidth={organization.logoWidth}
                logoHeight={organization.logoHeight}
                summary={organization.summary}
                bullets={organization.bullets}
                link={organization.link}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#projects" className={cn(buttonVariants({ size: "lg" }), "group")}>
              {t(locale, hero.primaryCta)}
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-border/70"
              )}
            >
              <Mail />
              {t(locale, hero.secondaryCta)}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
            >
              <GitHubIcon className="size-4" />
              {t(locale, hero.githubCta)}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
            >
              <LinkedInIcon className="size-4" />
              {t(locale, hero.linkedInCta)}
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.98, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/75 p-7 backdrop-blur-sm">
            <div className="absolute -right-16 -top-20 h-44 w-44 rounded-full bg-primary/20 blur-2xl" />
            <div className="absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-cyan-500/15 blur-2xl" />

            <div className="relative space-y-6">
              <ProfileModal locale={locale} profile={profile} />

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {t(locale, hero.visualTitle)}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(locale, hero.visualSubtitle)}
                </p>
              </div>

              <div className="grid gap-2">
                {tList(locale, hero.visualBullets).map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-background/60 px-3 py-2 text-sm text-foreground/90"
                  >
                    <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
                    {item}
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-border/60 bg-background/70 p-4">
                <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  <span>{locale === "fr" ? "Priorites 2026" : "2026 Priorities"}</span>
                  <span>2026</span>
                </div>
                <ul className="grid gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  {collaborationPriorities.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
