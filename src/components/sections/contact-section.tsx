import { ArrowRight, Globe, Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/brand-icons";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Locale, PortfolioData } from "@/types/portfolio";
import { t } from "@/types/portfolio";

interface ContactSectionProps {
  locale: Locale;
  data: PortfolioData;
}

export function ContactSection({ locale, data }: ContactSectionProps) {
  const { profile, contact, labels } = data;

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow={t(locale, labels.contactEyebrow)}
            title={t(locale, contact.heading)}
            description={t(locale, contact.lead)}
            className="mx-0 max-w-none"
          />
        </Reveal>

        <Reveal>
          <Card className="border-border/60 bg-card/75 py-6 transition-all duration-300 hover:border-primary/30 hover:bg-card/85 hover:shadow-[0_18px_40px_-26px_rgba(0,0,0,0.6)]">
            <CardContent className="grid gap-8 px-6 sm:px-8 md:grid-cols-[minmax(0,1fr)_minmax(260px,340px)] md:items-start lg:gap-10">
              <div className="space-y-4">
                <p className="max-w-[72ch] text-base leading-relaxed text-muted-foreground text-pretty">
                  {t(locale, contact.availability)}
                </p>

                <div className="grid max-w-[72ch] gap-2 text-sm text-muted-foreground">
                  <p className="inline-flex items-center gap-2">
                    <Mail className="size-4 text-primary" aria-hidden />
                    <a href={`mailto:${profile.email}`} className="hover:text-foreground transition-colors">
                      {profile.email}
                    </a>
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <Phone className="size-4 text-primary" aria-hidden />
                    <a href={`tel:${profile.phone}`} className="hover:text-foreground transition-colors">
                      {profile.phone}
                    </a>
                  </p>
                </div>

                <p className="pt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {t(locale, labels.contactQuickLabel)}
                </p>
              </div>

              <div className="grid w-full gap-2 md:justify-self-end sm:w-auto sm:min-w-72">
                <a
                  href={`mailto:${profile.email}`}
                  className={cn(buttonVariants({ size: "lg" }), "w-full justify-between")}
                >
                  {t(locale, contact.emailCta)}
                  <ArrowRight />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full justify-between")}
                >
                  {t(locale, contact.githubCta)}
                  <GitHubIcon className="size-4" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full justify-between")}
                >
                  {t(locale, contact.linkedInCta)}
                  <LinkedInIcon className="size-4" />
                </a>
                <a
                  href={profile.portfolio}
                  aria-disabled="true"
                  onClick={(event) => event.preventDefault()}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }),
                    "w-full cursor-not-allowed justify-between opacity-70"
                  )}
                >
                  {t(locale, contact.portfolioCta)}
                  <Globe />
                </a>
                <p className="text-xs text-muted-foreground">{t(locale, contact.portfolioPlaceholder)}</p>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
