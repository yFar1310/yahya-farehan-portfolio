"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface UnlockGlowProps {
  /** Accent color driving the burst/rings, e.g. "56,189,248" (r,g,b). */
  accentRgb: string;
  /** Number of full spin laps the card does before settling. */
  laps: number;
  /** Duration of one lap in ms, used to time the per-lap brightness pulses. */
  lapDurationMs: number;
}

const sparklePositions = [
  { top: "12%", left: "14%", delay: 0.05, size: 16 },
  { top: "20%", left: "82%", delay: 0.18, size: 12 },
  { top: "78%", left: "70%", delay: 0.12, size: 14 },
  { top: "68%", left: "18%", delay: 0.24, size: 10 },
  { top: "45%", left: "8%", delay: 0.32, size: 11 },
  { top: "38%", left: "90%", delay: 0.4, size: 13 },
];

/**
 * A "legendary card unlock" light show, modeled after sports-game
 * pack-opening reveals: a bright flash on every spin lap (each one
 * brighter than the last), expanding energy rings, a fast diagonal
 * shine sweep, and sparkles — all in the project's own accent color.
 * Mounted for the full duration of the FlipTiltCard's spin sequence.
 */
export function UnlockGlow({ accentRgb, laps, lapDurationMs }: UnlockGlowProps) {
  const lapSeconds = lapDurationMs / 1000;
  const totalSeconds = laps * lapSeconds + 0.38;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-40 overflow-hidden rounded-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
    >
      {/* One flash burst per lap, each brighter than the last */}
      {Array.from({ length: Math.max(laps, 1) }).map((_, lap) => {
        const intensity = 0.35 + (lap / Math.max(laps - 1, 1)) * 0.65;
        return (
          <motion.div
            key={lap}
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(${accentRgb},${intensity}), rgba(255,255,255,${intensity * 0.7}) 22%, transparent 60%)`,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1 + lap * 0.08, 1.4 + lap * 0.1] }}
            transition={{ duration: lapSeconds, delay: lap * lapSeconds, ease: "easeOut" }}
          />
        );
      })}

      {/* Final brightest core flash right as the card settles */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(${accentRgb},0.95), rgba(255,255,255,0.9) 26%, transparent 66%)`,
        }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: [0, 1, 0], scale: [0.6, 1.3, 1.7] }}
        transition={{ duration: 0.4, delay: Math.max(totalSeconds - 0.4, 0), ease: "easeOut" }}
      />

      {/* Expanding energy rings, one per lap plus a final pair */}
      {Array.from({ length: laps + 2 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
          style={{ borderColor: `rgba(${accentRgb},0.85)` }}
          initial={{ opacity: 0.9, scale: 0.4 }}
          animate={{ opacity: 0, scale: 3.2 }}
          transition={{ duration: 0.75, delay: i * (lapSeconds * 0.6), ease: "easeOut" }}
        />
      ))}

      {/* Fast diagonal shine sweep, repeats per lap */}
      {Array.from({ length: Math.max(laps, 1) }).map((_, lap) => (
        <motion.div
          key={lap}
          className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-white/70 blur-md"
          initial={{ x: "-40%", opacity: 0 }}
          animate={{ x: "260%", opacity: [0, 0.9, 0] }}
          transition={{ duration: lapSeconds * 0.85, delay: lap * lapSeconds, ease: "easeInOut" }}
        />
      ))}

      {/* Sparkles, appearing in a first then a second wave across the sequence */}
      {sparklePositions.map((sparkle, i) => (
        <motion.span
          key={`sparkle-${i}`}
          className="absolute"
          style={{ top: sparkle.top, left: sparkle.left, color: `rgb(${accentRgb})` }}
          initial={{ opacity: 0, scale: 0.3, rotate: -20 }}
          animate={{ opacity: [0, 1, 0], scale: [0.3, 1, 0.6], rotate: 20 }}
          transition={{
            duration: Math.min(0.7, totalSeconds * 0.5),
            delay: sparkle.delay + (i % 2 === 1 ? totalSeconds * 0.45 : 0),
            ease: "easeOut",
          }}
        >
          <Sparkles size={sparkle.size} fill="currentColor" />
        </motion.span>
      ))}

      {/* Bright rim glow on the card border, pulsing once per lap then holding bright at the end */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{ boxShadow: `0 0 0 2px rgba(${accentRgb},0.95), 0 0 48px 10px rgba(${accentRgb},0.65)` }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [
            ...Array.from({ length: Math.max(laps, 1) }).flatMap(() => [0.75, 0.15]),
            1,
            0,
          ],
        }}
        transition={{ duration: totalSeconds, ease: "easeOut" }}
      />
    </motion.div>
  );
}
