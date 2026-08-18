"use client";

import { useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/brand-icons";
import { ProfileModal } from "@/components/shared/profile-modal";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LanguageToggle } from "@/components/shared/language-toggle";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import type { Locale, NavItem, PortfolioData } from "@/types/portfolio";

interface SiteHeaderProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  navItems: NavItem[];
  profile: PortfolioData["profile"];
  githubUrl: string;
  linkedinUrl: string;
  labels: {
    languageSwitchLabel: string;
    themeSwitchLabel: string;
    menuLabel: string;
    closeLabel: string;
  };
}

export function SiteHeader({
  locale,
  onLocaleChange,
  navItems,
  profile,
  githubUrl,
  linkedinUrl,
  labels,
}: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNavId, setHoveredNavId] = useState<string | null>(null);
  const navAccent: Record<string, string> = {
    hero: "bg-sky-400",
    about: "bg-violet-400",
    experience: "bg-cyan-400",
    projects: "bg-emerald-400",
    skills: "bg-amber-400",
    education: "bg-indigo-400",
    contact: "bg-orange-400",
  };
  const sectionIds = useMemo(() => navItems.map((item) => item.id), [navItems]);
  const activeSection = useActiveSection(sectionIds);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl transition-colors duration-300 hover:border-primary/25">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <ProfileModal locale={locale} profile={profile} triggerVariant="avatar" />
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="group inline-flex items-center rounded-md px-1 text-sm font-semibold tracking-tight text-foreground transition-all duration-200 hover:text-primary"
          >
            <span className="hidden transition-transform duration-200 group-hover:translate-x-0.5 sm:inline">
              Yahya Farehan
            </span>
          </button>
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const isHovered = hoveredNavId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredNavId(item.id)}
                onMouseLeave={() => setHoveredNavId(null)}
                className={cn(
                  "relative overflow-hidden rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive ? (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-md border border-primary/25 bg-secondary/85"
                  />
                ) : null}
                {isHovered && !isActive ? (
                  <motion.span
                    layoutId="hoverNavPill"
                    className="absolute inset-0 rounded-md border border-border/70 bg-secondary/60"
                  />
                ) : null}
                <span className="relative z-10 inline-flex items-center gap-2">
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition-all duration-200",
                      navAccent[item.id] ?? "bg-primary",
                      isActive || isHovered ? "opacity-100" : "opacity-65"
                    )}
                    aria-hidden
                  />
                  {item.label[locale]}
                </span>
                {isActive ? (
                  <motion.span
                    layoutId="activeSectionIndicator"
                    className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-primary"
                  />
                ) : null}
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon-sm" }),
              "text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-primary"
            )}
            aria-label="GitHub"
          >
            <GitHubIcon className="size-4" />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon-sm" }),
              "text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-primary"
            )}
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="size-4" />
          </a>
          <LanguageToggle
            locale={locale}
            onChange={onLocaleChange}
            ariaLabel={labels.languageSwitchLabel}
          />
          <ThemeToggle ariaLabel={labels.themeSwitchLabel} />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle ariaLabel={labels.themeSwitchLabel} />
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon-sm"
                  className="border-border/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-secondary/80"
                  aria-label={labels.menuLabel}
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" showCloseButton={false} className="w-[88%] max-w-xs">
              <div className="flex items-center justify-between px-4 pt-5">
                <SheetTitle className="text-base">Yahya Farehan</SheetTitle>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label={labels.closeLabel}
                >
                  <X />
                </Button>
              </div>

              <div className="px-4">
                <LanguageToggle
                  locale={locale}
                  onChange={onLocaleChange}
                  ariaLabel={labels.languageSwitchLabel}
                  compact
                />
              </div>

              <Separator />

              <nav className="grid gap-1 px-3 pb-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "flex items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium transition-all duration-200 hover:translate-x-0.5",
                        isActive
                          ? "border border-primary/20 bg-secondary text-foreground"
                          : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                      )}
                    >
                      <span className="inline-flex items-center gap-2">
                        <span
                          className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            navAccent[item.id] ?? "bg-primary"
                          )}
                          aria-hidden
                        />
                        {item.label[locale]}
                      </span>
                    </button>
                  );
                })}
              </nav>

              <Separator />

              <div className="grid gap-2 p-4">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline" }), "w-full justify-start")}
                >
                  <LinkedInIcon className="size-4" />
                  LinkedIn
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "ghost" }), "w-full justify-start")}
                >
                  <GitHubIcon className="size-4" />
                  GitHub
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
