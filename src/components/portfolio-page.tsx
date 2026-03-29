"use client";

import { useState } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { portfolioData } from "@/data/portfolio";
import type { Locale } from "@/types/portfolio";
import { t, tList } from "@/types/portfolio";

export function PortfolioPage() {
  const [locale, setLocale] = useState<Locale>("fr");

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        {locale === "fr" ? "Aller au contenu" : "Skip to content"}
      </a>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="deep-space-vignette absolute inset-0" />
        <div className="subtle-tech-grid absolute inset-0 opacity-[0.16]" />
        <div className="noise-mask absolute inset-0 opacity-[0.13]" />
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/28 blur-3xl" />
        <div className="absolute -right-16 top-[26rem] h-[26rem] w-[26rem] rounded-full bg-cyan-400/14 blur-3xl" />
        <div className="absolute -left-20 top-[58rem] h-[24rem] w-[24rem] rounded-full bg-blue-500/14 blur-3xl" />
        <div className="absolute right-[24%] top-[82rem] h-[20rem] w-[20rem] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <SiteHeader
        locale={locale}
        onLocaleChange={setLocale}
        navItems={portfolioData.navItems}
        profile={portfolioData.profile}
        githubUrl={portfolioData.profile.github}
        linkedinUrl={portfolioData.profile.linkedin}
        email={portfolioData.profile.email}
        labels={{
          languageSwitchLabel: t(locale, portfolioData.labels.languageSwitchLabel),
          themeSwitchLabel: t(locale, portfolioData.labels.themeSwitchLabel),
          menuLabel: t(locale, portfolioData.labels.menuLabel),
          closeLabel: t(locale, portfolioData.labels.closeLabel),
        }}
      />

      <main className="relative z-10 pb-10">
        <HeroSection locale={locale} data={portfolioData} />
        <AboutSection locale={locale} data={portfolioData} />
        <ExperienceSection locale={locale} data={portfolioData} />
        <ProjectsSection locale={locale} data={portfolioData} />
        <SkillsSection locale={locale} data={portfolioData} />
        <EducationSection locale={locale} data={portfolioData} />
        <ContactSection locale={locale} data={portfolioData} />
      </main>

      <SiteFooter
        locale={locale}
        name={portfolioData.profile.name}
        rights={t(locale, portfolioData.footer.rights)}
        builtWith={t(locale, portfolioData.labels.footerBuiltWith)}
        humanLabel={t(locale, portfolioData.labels.footerHumanLabel)}
        interests={tList(locale, portfolioData.footer.interests)}
      />
    </div>
  );
}
