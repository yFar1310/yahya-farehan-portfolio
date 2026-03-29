export type Locale = "fr" | "en";

export type LocalizedString = Record<Locale, string>;
export type LocalizedStringArray = Record<Locale, string[]>;

export interface NavItem {
  id: string;
  label: LocalizedString;
}

export interface LinkItem {
  label: LocalizedString;
  href: string;
  external?: boolean;
}

export interface HeroContent {
  title: LocalizedString;
  intro: LocalizedString;
  badge: LocalizedString;
  primaryCta: LocalizedString;
  secondaryCta: LocalizedString;
  githubCta: LocalizedString;
  linkedInCta: LocalizedString;
  visualTitle: LocalizedString;
  visualSubtitle: LocalizedString;
  visualBullets: LocalizedStringArray;
}

export interface AboutContent {
  heading: LocalizedString;
  lead: LocalizedString;
  paragraphOne: LocalizedString;
  paragraphTwo: LocalizedString;
  humanLanguages: LocalizedStringArray;
}

export interface ExperienceItem {
  company: string;
  role: LocalizedString;
  period: LocalizedString;
  location: LocalizedString;
  summary: LocalizedString;
  bullets: LocalizedStringArray;
  tech: string[];
}

export interface ProjectItem {
  title: string;
  status: LocalizedString;
  summary: LocalizedString;
  bullets: LocalizedStringArray;
  tech: string[];
  details: {
    context: LocalizedString;
    contributions: LocalizedStringArray;
    architecture: LocalizedStringArray;
    engineeringFocus: LocalizedStringArray;
  };
  github?: string;
}

export interface SkillGroup {
  category: LocalizedString;
  items: string[];
}

export interface EducationItem {
  institution: string;
  degree: LocalizedString;
  period: LocalizedString;
}

export interface ContactContent {
  heading: LocalizedString;
  lead: LocalizedString;
  availability: LocalizedString;
  emailCta: LocalizedString;
  githubCta: LocalizedString;
  linkedInCta: LocalizedString;
  portfolioCta: LocalizedString;
  portfolioPlaceholder: LocalizedString;
}

export interface SectionLabels {
  heroEyebrow: LocalizedString;
  aboutEyebrow: LocalizedString;
  experienceEyebrow: LocalizedString;
  projectsEyebrow: LocalizedString;
  skillsEyebrow: LocalizedString;
  educationEyebrow: LocalizedString;
  contactEyebrow: LocalizedString;
  sectionDescriptionProjects: LocalizedString;
  sectionDescriptionSkills: LocalizedString;
  sectionDescriptionEducation: LocalizedString;
  experienceTechLabel: LocalizedString;
  projectsHighlightsLabel: LocalizedString;
  projectsGithubLabel: LocalizedString;
  projectsOpenDetailsLabel: LocalizedString;
  projectsOpenHintLabel: LocalizedString;
  projectsDetailsTitleLabel: LocalizedString;
  projectsContextLabel: LocalizedString;
  projectsContributionsLabel: LocalizedString;
  projectsArchitectureLabel: LocalizedString;
  projectsEngineeringLabel: LocalizedString;
  projectsStackLabel: LocalizedString;
  projectsAvailableLabel: LocalizedString;
  projectsPrivateLabel: LocalizedString;
  skillsCoreLabel: LocalizedString;
  aboutLanguagesLabel: LocalizedString;
  contactQuickLabel: LocalizedString;
  footerHumanLabel: LocalizedString;
  footerBuiltWith: LocalizedString;
  languageSwitchLabel: LocalizedString;
  themeSwitchLabel: LocalizedString;
  menuLabel: LocalizedString;
  closeLabel: LocalizedString;
}

export interface PortfolioData {
  profile: {
    name: string;
    location: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    portfolio: string;
  };
  navItems: NavItem[];
  hero: HeroContent;
  about: AboutContent;
  experience: {
    heading: LocalizedString;
    items: ExperienceItem[];
  };
  projects: {
    heading: LocalizedString;
    items: ProjectItem[];
  };
  skills: {
    heading: LocalizedString;
    groups: SkillGroup[];
  };
  education: {
    heading: LocalizedString;
    arrivalNote: LocalizedString;
    items: EducationItem[];
  };
  contact: ContactContent;
  footer: {
    rights: LocalizedString;
    interests: LocalizedStringArray;
  };
  labels: SectionLabels;
}

export const t = (locale: Locale, text: LocalizedString): string => text[locale];
export const tList = (locale: Locale, text: LocalizedStringArray): string[] =>
  text[locale];
