"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin gradient progress bar pinned to the very top of the viewport,
 * tracking how far the visitor has scrolled through the page. It's a
 * small signature touch that reinforces the "editorial dossier" feel
 * of the portfolio rather than a generic template look.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.2,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary via-cyan-400 to-violet-400"
      style={{ scaleX: progress }}
    />
  );
}
