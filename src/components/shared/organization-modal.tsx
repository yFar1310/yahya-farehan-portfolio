"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale, LocalizedString, LocalizedStringArray } from "@/types/portfolio";
import { t, tList } from "@/types/portfolio";

interface OrganizationModalProps {
  locale: Locale;
  name: string;
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  summary: LocalizedString;
  bullets: LocalizedStringArray;
  link?: string;
  linkLabel?: LocalizedString;
}

const defaultLinkLabel: LocalizedString = {
  fr: "Site officiel",
  en: "Official website",
};

export function OrganizationModal({
  locale,
  name,
  logoSrc,
  logoAlt,
  logoWidth,
  logoHeight,
  summary,
  bullets,
  link,
  linkLabel = defaultLinkLabel,
}: OrganizationModalProps) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            type="button"
            className="inline-flex min-h-12 items-center rounded-xl border border-border/60 bg-white/95 px-2 py-1.5 shadow-sm shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_10px_24px_-16px_rgba(58,119,214,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45"
          />
        }
      >
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={logoWidth}
          height={logoHeight}
          className="h-8 w-auto object-contain md:h-9"
        />
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] w-[min(94vw,40rem)] max-w-none overflow-y-auto border-border/70 bg-background/95 p-0 backdrop-blur-xl sm:max-w-[min(94vw,40rem)]">
        <div className="relative h-24 border-b border-border/60 bg-gradient-to-br from-primary/18 via-cyan-500/12 to-violet-500/10" />

        <DialogHeader className="space-y-4 px-6 pb-4 pt-5 sm:px-8">
          <Badge variant="outline" className="w-fit border-primary/35 bg-primary/10 text-primary">
            {locale === "fr" ? "Partenaire" : "Partner"}
          </Badge>
          <span className="inline-flex w-fit rounded-xl border border-border/60 bg-white p-2">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={logoWidth}
              height={logoHeight}
              className="h-9 w-auto object-contain"
            />
          </span>
          <DialogTitle className="text-3xl font-semibold tracking-tight text-foreground">{name}</DialogTitle>
          <DialogDescription className="text-base leading-relaxed text-muted-foreground">
            {t(locale, summary)}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 px-6 pb-7 sm:px-8 sm:pb-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {locale === "fr" ? "Informations" : "Highlights"}
            </p>
            <ul className="grid gap-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {tList(locale, bullets).map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "w-fit")}
            >
              {t(locale, linkLabel)}
              <ArrowUpRight />
            </a>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
