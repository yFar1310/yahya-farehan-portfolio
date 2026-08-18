"use client";

import Image from "next/image";
import { Dumbbell, PencilLine, Volleyball } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/brand-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { assetPath } from "@/lib/asset-path";
import { cn } from "@/lib/utils";
import type { Locale, PortfolioData } from "@/types/portfolio";

interface ProfileModalProps {
  locale: Locale;
  profile: PortfolioData["profile"];
  triggerVariant?: "panel" | "avatar";
  triggerClassName?: string;
}

interface FactItem {
  icon: typeof Volleyball;
  label: string;
  text: string;
  tone: string;
  iconTone: string;
}

export function ProfileModal({
  locale,
  profile,
  triggerVariant = "panel",
  triggerClassName,
}: ProfileModalProps) {
  const content =
    locale === "fr"
      ? {
          title: "Profil personnel",
          subtitle:
            "Project Manager orienté delivery, j'aime coordonner des équipes et des parties prenantes pour livrer des projets digitaux fiables.",
          openLabel: "Ouvrir le profil",
          quickLinks: "Liens rapides",
          funFacts: "Fun Facts",
          facts: [
            {
              icon: Volleyball,
              label: "Basketball",
              text: "J'aime le basketball pour l'esprit d'équipe, la discipline et la prise de décision rapide.",
              tone: "border-orange-400/25 bg-gradient-to-br from-orange-500/18 to-amber-500/10",
              iconTone: "text-orange-300",
            },
            {
              icon: Dumbbell,
              label: "Musculation",
              text: "La musculation m'aide à garder un rythme de progression régulier et de la constance.",
              tone: "border-emerald-400/25 bg-gradient-to-br from-emerald-500/16 to-cyan-500/8",
              iconTone: "text-emerald-300",
            },
            {
              icon: PencilLine,
              label: "Peinture / dessin",
              text: "Je peins et je dessine ; cela renforce mon sens du détail et de la composition.",
              tone: "border-violet-400/25 bg-gradient-to-br from-violet-500/18 to-fuchsia-500/10",
              iconTone: "text-violet-300",
            },
          ] as FactItem[],
        }
      : {
          title: "Personal Profile",
          subtitle:
            "Delivery-minded Project Manager who enjoys coordinating teams and stakeholders to ship reliable digital projects.",
          openLabel: "Open Profile",
          quickLinks: "Quick Links",
          funFacts: "Fun Facts",
          facts: [
            {
              icon: Volleyball,
              label: "Basketball",
              text: "I enjoy basketball for teamwork, discipline, and fast decision making.",
              tone: "border-orange-400/25 bg-gradient-to-br from-orange-500/18 to-amber-500/10",
              iconTone: "text-orange-300",
            },
            {
              icon: Dumbbell,
              label: "Strength training",
              text: "Strength training helps me stay consistent and progress with discipline.",
              tone: "border-emerald-400/25 bg-gradient-to-br from-emerald-500/16 to-cyan-500/8",
              iconTone: "text-emerald-300",
            },
            {
              icon: PencilLine,
              label: "Painting / drawing",
              text: "I paint and draw, which sharpens my eye for detail and composition.",
              tone: "border-violet-400/25 bg-gradient-to-br from-violet-500/18 to-fuchsia-500/10",
              iconTone: "text-violet-300",
            },
          ] as FactItem[],
        };

  return (
    <Dialog>
      {triggerVariant === "avatar" ? (
        <DialogTrigger
          render={
            <button
              type="button"
              aria-label={content.openLabel}
              className={cn(
                "relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-border/70 bg-card/80 ring-1 ring-background/65 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_0_0_4px_rgba(56,189,248,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45",
                triggerClassName
              )}
            />
          }
        >
          <Image
            src={assetPath("/profile/yahya-profile.jpeg")}
            alt="Yahya Farehan profile picture"
            width={40}
            height={40}
            className="h-full w-full object-cover object-top"
          />
        </DialogTrigger>
      ) : (
        <DialogTrigger
          render={
            <Button
              variant="outline"
              className={cn(
                "h-auto w-full justify-start gap-3 border-border/60 bg-card/75 p-3 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-card",
                triggerClassName
              )}
            />
          }
        >
          <Image
            src={assetPath("/profile/yahya-profile.jpeg")}
            alt="Yahya Farehan profile picture"
            width={64}
            height={64}
            className="h-14 w-14 rounded-full object-cover object-top ring-2 ring-primary/25"
          />
          <span className="flex min-w-0 flex-col">
            <span className="text-base font-semibold text-foreground">Yahya Farehan</span>
            <span className="truncate text-xs text-muted-foreground">{content.openLabel}</span>
          </span>
        </DialogTrigger>
      )}

      <DialogContent className="max-h-[92vh] w-[min(96vw,72rem)] max-w-none overflow-y-auto border-border/70 bg-background/95 p-0 backdrop-blur-xl sm:max-w-[min(96vw,72rem)]">
        <div className="relative h-24 border-b border-border/60 bg-gradient-to-br from-primary/22 via-cyan-500/16 to-violet-500/12">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        <DialogHeader className="space-y-4 px-6 pb-5 pt-5 sm:px-8">
          <div className="inline-flex w-fit items-center rounded-2xl border border-border/60 bg-card p-1.5 shadow-sm shadow-black/25">
            <Image
              src={assetPath("/profile/yahya-profile.jpeg")}
              alt="Yahya Farehan profile portrait"
              width={132}
              height={132}
              className="h-28 w-28 rounded-xl object-cover object-top"
            />
          </div>
          <DialogTitle className="text-3xl font-semibold tracking-tight text-foreground">
            {content.title}
          </DialogTitle>
          <DialogDescription className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {content.subtitle}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-7 px-6 pb-7 sm:px-8 sm:pb-8 xl:grid-cols-[0.9fr_1.1fr]">
          <section className="min-w-0 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {content.quickLinks}
            </h3>
            <div className="grid gap-2.5">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline" }), "justify-start")}
              >
                <LinkedInIcon className="size-4" />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline" }), "justify-start")}
              >
                <GitHubIcon className="size-4" />
                GitHub
              </a>
            </div>
          </section>

          <section className="min-w-0 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {content.funFacts}
            </h3>
            <div className="grid gap-2.5">
              {content.facts.map(({ icon: Icon, label, text, tone, iconTone }) => (
                <div
                  key={label}
                  className={cn(
                    "rounded-xl border p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-16px_rgba(0,0,0,0.7)]",
                    tone
                  )}
                >
                  <p className="mb-1 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                    <Icon className={cn("size-4", iconTone)} aria-hidden />
                    {label}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground break-words">{text}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="border border-orange-400/25 bg-orange-500/15 text-orange-200">
                Teamwork
              </Badge>
              <Badge variant="secondary" className="border border-emerald-400/25 bg-emerald-500/15 text-emerald-200">
                Creativity
              </Badge>
              <Badge variant="secondary" className="border border-violet-400/25 bg-violet-500/15 text-violet-200">
                Consistency
              </Badge>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
