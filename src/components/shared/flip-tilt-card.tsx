"use client";

import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { UnlockGlow } from "@/components/shared/unlock-glow";

/** Number of full extra spins the card does before settling on its unlock face. */
const UNLOCK_SPIN_LAPS = 1;
/** Duration of a single lap (ms), scaled up per lap for a natural spin-down feel. */
const UNLOCK_LAP_MS = 420;

export interface FlipCardHelpers {
  /** Silently flips the card by half a turn to reveal the other face (no light show). */
  flip: () => void;
  isFlipped: boolean;
  /**
   * Plays the "legendary card unlock" sequence: spins the card through
   * several full rotations while flashes of escalating brightness pulse
   * on top, then settles on the back face and calls `onDone`. Used for
   * the primary "open this project" interaction so it feels like
   * revealing a rare pack-opening card rather than a plain click.
   */
  playUnlock: (onDone: () => void) => void;
}

interface FlipTiltCardProps {
  /** Content shown on the front face. Receives flip helpers so the caller can wire its own triggers without any click-target overlap risk. */
  front: (helpers: FlipCardHelpers) => React.ReactNode;
  /** Content shown on the back face (tech stack / extra detail). */
  back: (helpers: FlipCardHelpers) => React.ReactNode;
  className?: string;
  /** Accent color used for the holographic sheen and unlock light show, e.g. "56,189,248". */
  accentRgb?: string;
}

/**
 * A collector-card style component: tilts in 3D toward the cursor
 * (desktop / fine pointers only) and flips to reveal a back face,
 * similar to a physical trading/sports card. On touch devices the
 * tilt is disabled (no hover signal exists) but the flip still works
 * through whatever trigger the caller renders via the `front`/`back`
 * render props.
 *
 * The rotation is tracked as an ever-increasing degree count (not just
 * a 0/180 boolean) so `playUnlock` can spin the card through several
 * full laps before settling — like a pack-opening reveal — while a
 * plain `flip()` just advances by half a turn. Which face is showing
 * is derived from the rotation's parity.
 *
 * The face that isn't currently visible has `pointer-events: none` so
 * clicks never land on the wrong (invisible, backface-hidden) side.
 * Every layer of the 3D chain (perspective root, tilt layer, flip
 * scene, both faces) uses the global CSS classes in globals.css
 * (`.card-perspective`, `.card-tilt-layer`, `.card-3d-scene`,
 * `.card-face`) instead of Tailwind's arbitrary values or inline
 * styles for `perspective` / `transform-style` / `backface-visibility`.
 * Tailwind and plain inline styles only emit the unprefixed CSS
 * property, and iOS Safari needs the `-webkit-` prefix on *every*
 * layer in the chain — missing it on even one layer can make the
 * front face show through mirrored on top of the back face mid-flip.
 */
export function FlipTiltCard({ front, back, className, accentRgb = "56,189,248" }: FlipTiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [showUnlock, setShowUnlock] = useState(false);
  const [spinLaps, setSpinLaps] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  const isFlipped = Math.round(rotation / 180) % 2 !== 0;

  const flip = useCallback(() => {
    setRotation((value) => value + 180);
  }, []);

  const playUnlock = useCallback(
    (onDone: () => void) => {
      const laps = prefersReducedMotion ? 0 : UNLOCK_SPIN_LAPS;
      setSpinLaps(laps);
      setShowUnlock(true);
      setRotation((value) => value + laps * 360 + 180);
      const totalMs = prefersReducedMotion ? 0 : laps * UNLOCK_LAP_MS + 380;
      window.setTimeout(() => {
        onDone();
        setShowUnlock(false);
        setRotation((value) => value - laps * 360);
      }, totalMs);
    },
    [prefersReducedMotion]
  );

  const helpers: FlipCardHelpers = { flip, isFlipped, playUnlock };

  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const springConfig = { stiffness: 220, damping: 22, mass: 0.4 };
  const smoothX = useSpring(pointerX, springConfig);
  const smoothY = useSpring(pointerY, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [10, -10]);
  const rotateY = useTransform(smoothX, [0, 1], [-12, 12]);
  const shineX = useTransform(smoothX, [0, 1], [0, 100]);
  const shineY = useTransform(smoothY, [0, 1], [0, 100]);
  const shineBackground = useTransform([shineX, shineY], ([x, y]: number[]) =>
    `radial-gradient(circle at ${x}% ${y}%, rgba(${accentRgb},0.55), rgba(255,255,255,0.12) 32%, transparent 65%)`
  );

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || event.pointerType === "touch") return;
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    pointerX.set((event.clientX - bounds.left) / bounds.width);
    pointerY.set((event.clientY - bounds.top) / bounds.height);
  };

  const handlePointerLeave = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  const totalDurationSeconds = showUnlock
    ? (spinLaps * UNLOCK_LAP_MS + 380) / 1000
    : prefersReducedMotion
      ? 0
      : 0.6;

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn("card-perspective group/card relative", className)}
    >
      <motion.div
        className="card-tilt-layer relative h-full w-full"
        style={{
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
        }}
      >
        <motion.div
          className="card-3d-scene relative h-full w-full"
          animate={{ rotateY: rotation }}
          transition={{
            duration: totalDurationSeconds,
            ease: showUnlock ? [0.15, 0.85, 0.3, 1] : [0.22, 1, 0.36, 1],
          }}
        >
          {/* Front face */}
          <div
            className="card-face relative h-full w-full"
            style={{ pointerEvents: isFlipped ? "none" : "auto" }}
          >
            {front(helpers)}
            {/* Holographic sheen, follows pointer position */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 mix-blend-soft-light transition-opacity duration-500 group-hover/card:opacity-100"
              style={{ background: shineBackground }}
            />
          </div>

          {/* Back face */}
          <div
            className="card-face absolute inset-0 h-full w-full"
            style={{ transform: "rotateY(180deg)", pointerEvents: isFlipped ? "auto" : "none" }}
          >
            {back(helpers)}
          </div>
        </motion.div>

        {/* Legendary unlock light show, rendered in card-local space so it spins with the card */}
        <AnimatePresence>
          {showUnlock ? <UnlockGlow accentRgb={accentRgb} laps={spinLaps} lapDurationMs={UNLOCK_LAP_MS} /> : null}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
