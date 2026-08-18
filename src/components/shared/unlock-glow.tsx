"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface UnlockGlowProps {
  /** Accent color driving the burst/rings, e.g. "56,189,248" (r,g,b). */
  accentRgb: string;
}

const sparklePositions = [
  { top: "12%", left: "14%", delay: 0.05, size: 16 },
  { top: "20%", left: "82%", delay: 0.18, size: 12 },
  { top: "78%", left: "70%", delay: 0.12, size: 14 },
  { top: "68%", left: "18%", delay: 0.24, size: 10 },
];

/**
 * A brief "legendary card unlock" light show, modeled after sports-game
 * pack-opening reveals: a bright flash, expanding energy rings, a fast
 * diagonal shine sweep, and a few sparkles — all in the project's own
 * accent color. Meant to be mounted only for the ~700ms of the unlock
 * sequence (see ProjectsSection's `handleUnlock`).
 */
export function UnlockGlow({ accentRgb }: UnlockGlowProps) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-40 overflow-hidden rounded-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
    >
      {/* Core flash burst */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(${accentRgb},0.75), rgba(255,255,255,0.5) 24%, transparent 62%)`,
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.15, 1.5] }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* Expanding energy rings */}
      {[0, 0.15].map((delay) => (
        <motion.div
          key={delay}
          className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
          style={{ borderColor: `rgba(${accentRgb},0.85)` }}
          initial={{ opacity: 0.9, scale: 0.4 }}
          animate={{ opacity: 0, scale: 3.2 }}
          transition={{ duration: 0.75, delay, ease: "easeOut" }}
        />
      ))}

      {/* Fast diagonal shine sweep */}
      <motion.div
        className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-white/70 blur-md"
        initial={{ x: "-40%", opacity: 0 }}
        animate={{ x: "260%", opacity: [0, 0.9, 0] }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Sparkles */}
      {sparklePositions.map((sparkle, i) => (
        <motion.span
          key={i}
          className="absolute"
          style={{ top: sparkle.top, left: sparkle.left, color: `rgb(${accentRgb})` }}
          initial={{ opacity: 0, scale: 0.3, rotate: -20 }}
          animate={{ opacity: [0, 1, 0], scale: [0.3, 1, 0.6], rotate: 20 }}
          transition={{ duration: 0.7, delay: sparkle.delay, ease: "easeOut" }}
        >
          <Sparkles size={sparkle.size} fill="currentColor" />
        </motion.span>
      ))}

      {/* Bright rim glow on the card border */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{ boxShadow: `0 0 0 2px rgba(${accentRgb},0.9), 0 0 40px 8px rgba(${accentRgb},0.55)` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      />
    </motion.div>
  );
}
