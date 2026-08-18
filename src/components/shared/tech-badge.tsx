import type { IconType } from "react-icons";
import {
  SiApollographql,
  SiAstro,
  SiClerk,
  SiCloudflare,
  SiCss3,
  SiDocker,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHono,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNodedotjs,
  SiOcaml,
  SiOpenapiinitiative,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiSqlite,
  SiSwagger,
  SiSymfony,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * Brand-accurate icon + color per technology. Every entry uses the
 * technology's real brand color so the skill/tech grids read like an
 * actual toolbelt instead of a flat monochrome tag list.
 */
interface TechVisual {
  icon: IconType;
  color: string;
  glow: string;
}

const techVisuals: Record<string, TechVisual> = {
  JavaScript: { icon: SiJavascript, color: "#F7DF1E", glow: "rgba(247,223,30,0.35)" },
  TypeScript: { icon: SiTypescript, color: "#3178C6", glow: "rgba(49,120,198,0.4)" },
  Python: { icon: SiPython, color: "#3776AB", glow: "rgba(55,118,171,0.4)" },
  Java: { icon: SiOpenjdk, color: "#EA2D2E", glow: "rgba(234,45,46,0.35)" },
  PHP: { icon: SiPhp, color: "#777BB4", glow: "rgba(119,123,180,0.4)" },
  OCaml: { icon: SiOcaml, color: "#EC6813", glow: "rgba(236,104,19,0.35)" },
  HTML: { icon: SiHtml5, color: "#E34F26", glow: "rgba(227,79,38,0.35)" },
  CSS: { icon: SiCss3, color: "#1572B6", glow: "rgba(21,114,182,0.4)" },
  SQL: { icon: SiPostgresql, color: "#4169E1", glow: "rgba(65,105,225,0.4)" },
  Astro: { icon: SiAstro, color: "#FF5D01", glow: "rgba(255,93,1,0.4)" },
  "Vue.js": { icon: SiVuedotjs, color: "#4FC08D", glow: "rgba(79,192,141,0.4)" },
  "Vue 3": { icon: SiVuedotjs, color: "#4FC08D", glow: "rgba(79,192,141,0.4)" },
  React: { icon: SiReact, color: "#61DAFB", glow: "rgba(97,218,251,0.4)" },
  Tailwind: { icon: SiTailwindcss, color: "#38BDF8", glow: "rgba(56,189,248,0.4)" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E", glow: "rgba(95,160,78,0.4)" },
  Hono: { icon: SiHono, color: "#E36002", glow: "rgba(227,96,2,0.4)" },
  "Spring Boot": { icon: SiSpringboot, color: "#6DB33F", glow: "rgba(109,179,63,0.4)" },
  Symfony: { icon: SiSymfony, color: "#1a1a2e", glow: "rgba(140,140,160,0.35)" },
  "Cloudflare Workers": { icon: SiCloudflare, color: "#F38020", glow: "rgba(243,128,32,0.4)" },
  "Cloudflare Pages": { icon: SiCloudflare, color: "#F38020", glow: "rgba(243,128,32,0.4)" },
  R2: { icon: SiCloudflare, color: "#F38020", glow: "rgba(243,128,32,0.4)" },
  SQLite: { icon: SiSqlite, color: "#003B57", glow: "rgba(0,59,87,0.4)" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1", glow: "rgba(65,105,225,0.4)" },
  MongoDB: { icon: SiMongodb, color: "#47A248", glow: "rgba(71,162,72,0.4)" },
  Docker: { icon: SiDocker, color: "#2496ED", glow: "rgba(36,150,237,0.4)" },
  GraphQL: { icon: SiGraphql, color: "#E10098", glow: "rgba(225,0,152,0.35)" },
  "Apollo Gateway": { icon: SiApollographql, color: "#311C87", glow: "rgba(49,28,135,0.4)" },
  gRPC: { icon: SiGraphql, color: "#4285F4", glow: "rgba(66,133,244,0.4)" },
  REST: { icon: SiSwagger, color: "#85EA2D", glow: "rgba(133,234,45,0.4)" },
  SOAP: { icon: SiOpenapiinitiative, color: "#6BA539", glow: "rgba(107,165,57,0.4)" },
  OpenAPI: { icon: SiOpenapiinitiative, color: "#6BA539", glow: "rgba(107,165,57,0.4)" },
  Git: { icon: SiGit, color: "#F05032", glow: "rgba(240,80,50,0.4)" },
  GitHub: { icon: SiGithub, color: "#8b8b8b", glow: "rgba(180,180,180,0.3)" },
  Clerk: { icon: SiClerk, color: "#6C47FF", glow: "rgba(108,71,255,0.4)" },
  Vite: { icon: SiVite, color: "#646CFF", glow: "rgba(100,108,255,0.4)" },
  "JWT authentication": { icon: SiJsonwebtokens, color: "#7a7a7a", glow: "rgba(180,180,180,0.3)" },
};

interface TechBadgeProps {
  name: string;
  className?: string;
}

/**
 * A skill/tech badge that renders the technology's real brand icon and
 * color when known, and falls back to the default neutral badge style
 * otherwise (for non-technical labels like "Stakeholder Management").
 */
export function TechBadge({ name, className }: TechBadgeProps) {
  const visual = techVisuals[name];

  if (!visual) {
    return (
      <Badge variant="secondary" className={cn("bg-secondary/75 text-secondary-foreground", className)}>
        {name}
      </Badge>
    );
  }

  const Icon = visual.icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5",
        className
      )}
      style={{
        borderColor: `color-mix(in oklab, ${visual.color} 45%, transparent)`,
        backgroundColor: `color-mix(in oklab, ${visual.color} 14%, transparent)`,
        color: `color-mix(in oklab, ${visual.color} 72%, white)`,
        boxShadow: `0 0 0 0 transparent`,
      }}
      onMouseEnter={(event) => {
        event.currentTarget.style.boxShadow = `0 6px 16px -6px ${visual.glow}`;
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.boxShadow = "0 0 0 0 transparent";
      }}
    >
      <Icon className="size-3.5" style={{ color: visual.color }} aria-hidden />
      {name}
    </span>
  );
}
