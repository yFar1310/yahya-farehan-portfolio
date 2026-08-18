"use client";

import { motion } from "framer-motion";

interface HeroMascotProps {
  className?: string;
}

/**
 * A small hand-drawn "stick-figure hero" flexing his biceps, meant to
 * sit at the finish line of the education timeline (the 2027 dual
 * degree). It's a playful, personal touch rather than another card or
 * badge — a tiny illustrated victory pose instead of a plain icon.
 * Built as inline SVG (no external assets, no extra JS bundle) with a
 * couple of subtle looping animations (breathing glow, muscle flex).
 */
export function HeroMascot({ className }: HeroMascotProps) {
  return (
    <div className={className} role="img" aria-label="Illustration d'un aventurier victorieux">
      <svg
        viewBox="0 0 120 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full overflow-visible"
      >
        {/* Ground glow, breathing */}
        <motion.ellipse
          cx="60"
          cy="126"
          rx="34"
          ry="7"
          fill="var(--color-primary)"
          initial={{ opacity: 0.25 }}
          animate={{ opacity: [0.25, 0.45, 0.25], rx: [34, 38, 34] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Cape */}
        <motion.path
          d="M46 46 C 30 58, 26 82, 34 100 C 40 90, 46 84, 52 80 Z"
          fill="var(--color-primary)"
          fillOpacity={0.35}
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -4, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "46px 46px" }}
        />

        {/* Head */}
        <circle cx="60" cy="34" r="10" fill="var(--color-foreground)" />
        {/* Mini mask/headband, hero style */}
        <rect x="51" y="30" width="18" height="4" rx="2" fill="var(--color-primary)" />

        {/* Torso */}
        <line x1="60" y1="44" x2="60" y2="78" stroke="var(--color-foreground)" strokeWidth="4" strokeLinecap="round" />

        {/* Left arm relaxed on hip */}
        <line x1="60" y1="52" x2="44" y2="64" stroke="var(--color-foreground)" strokeWidth="4" strokeLinecap="round" />

        {/* Right arm flexing bicep, animated pump */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "60px 52px" }}
        >
          <line x1="60" y1="52" x2="78" y2="46" stroke="var(--color-foreground)" strokeWidth="4" strokeLinecap="round" />
          <line x1="78" y1="46" x2="74" y2="30" stroke="var(--color-foreground)" strokeWidth="4" strokeLinecap="round" />
          {/* Bicep bulge */}
          <motion.circle
            cx="72"
            cy="42"
            r="6"
            fill="var(--color-primary)"
            initial={{ scale: 0.85 }}
            animate={{ scale: [0.85, 1.15, 0.85] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>

        {/* Legs, victorious stance */}
        <line x1="60" y1="78" x2="48" y2="112" stroke="var(--color-foreground)" strokeWidth="4" strokeLinecap="round" />
        <line x1="60" y1="78" x2="74" y2="112" stroke="var(--color-foreground)" strokeWidth="4" strokeLinecap="round" />

        {/* Little victory sparkles */}
        {[
          { x: 92, y: 24, delay: 0 },
          { x: 30, y: 20, delay: 0.5 },
          { x: 96, y: 50, delay: 1 },
        ].map((sparkle) => (
          <motion.path
            key={`${sparkle.x}-${sparkle.y}`}
            d={`M${sparkle.x} ${sparkle.y - 4} L${sparkle.x} ${sparkle.y + 4} M${sparkle.x - 4} ${sparkle.y} L${sparkle.x + 4} ${sparkle.y}`}
            stroke="var(--color-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 1, 0], scale: [0.6, 1.1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: sparkle.delay, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}
