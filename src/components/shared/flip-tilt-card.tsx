"use client";

import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { UnlockGlow } from "@/components/shared/unlock-glow";

const UNLOCK_ANIMATION_MS = 620;

export interface FlipCardHelpers {
  /** Silently flips the card to reveal the other face (no light show). */
  flip: () => void;
  isFlipped: boolean;
  /**
   * Plays the "legendary card unlock" sequence: flips the card to its
   * back face while a bright flash / energy rings / shine sweep play
   * on top, then calls `onDone` once the animation settles. Used for
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
 * The face that isn't currently visible has `pointer-events: none` so
 * clicks never land on the wrong (invisible, backface-hidden) side —
 * both faces are geometrically coplanar in 3D space, so without this
 * the DOM's paint order could otherwise swallow clicks meant for the
 * visible face.
 */
export function FlipTiltCard({ front, back, className, accentRgb = "56,189,248" }: FlipTiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showUnlock, setShowUnlock] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const flip = useCallback(() => setIsFlipped((value) => !value), []);

  const playUnlock = useCallback(
    (onDone: () => void) => {
      setShowUnlock(true);
      setIsFlipped(true);
      const settleDelay = prefersReducedMotion ? 0 : UNLOCK_ANIMATION_MS;
      window.setTimeout(() => {
        onDone();
        setShowUnlock(false);
        setIsFlipped(false);
      }, settleDelay);
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

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn("group/card relative", className)}
      style={{ perspective: "1400px" }}
    >
      <motion.div
        className="relative h-full w-full"
        style={{
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="relative h-full w-full [transform-style:preserve-3d]"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Front face */}
          <div
            className="relative h-full w-full [backface-visibility:hidden]"
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
            className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]"
            style={{ pointerEvents: isFlipped ? "auto" : "none" }}
          >
            {back(helpers)}
          </div>
        </motion.div>

        {/* Legendary unlock light show, rendered in card-local space so it flips with the card */}
        <AnimatePresence>
          {showUnlock ? <UnlockGlow accentRgb={accentRgb} /> : null}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
