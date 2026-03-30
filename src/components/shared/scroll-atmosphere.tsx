"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollAtmosphere() {
  const { scrollY, scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 48,
    damping: 20,
    mass: 0.35,
  });

  const centerAuraY = useTransform(scrollY, [0, 2600], [0, -220]);
  const centerAuraScale = useTransform(smoothProgress, [0, 1], [1, 1.24]);
  const centerAuraOpacity = useTransform(smoothProgress, [0, 0.2, 1], [0.34, 0.56, 0.4]);

  const leftOrbY = useTransform(scrollY, [0, 2400], [0, 180]);
  const rightOrbY = useTransform(scrollY, [0, 2400], [0, -160]);
  const gridY = useTransform(scrollY, [0, 3000], [0, 140]);
  const gridOpacity = useTransform(smoothProgress, [0, 0.4, 1], [0.14, 0.24, 0.16]);

  const beamOpacity = useTransform(smoothProgress, [0, 0.25, 0.75, 1], [0.08, 0.24, 0.18, 0.12]);
  const haloRotate = useTransform(scrollY, [0, 3400], [0, 22]);
  const haloScale = useTransform(smoothProgress, [0, 1], [0.92, 1.12]);
  const haloOpacity = useTransform(smoothProgress, [0, 0.3, 1], [0.14, 0.24, 0.16]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="deep-space-vignette absolute inset-0" />

      <motion.div className="subtle-tech-grid absolute inset-0" style={{ y: gridY, opacity: gridOpacity }} />
      <div className="noise-mask absolute inset-0 opacity-[0.13]" />

      <motion.div
        className="absolute -top-[18%] left-[50%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/30 blur-3xl"
        style={{ y: centerAuraY, scale: centerAuraScale, opacity: centerAuraOpacity }}
      />
      <motion.div
        className="absolute -left-24 top-[46%] h-[22rem] w-[22rem] rounded-full bg-blue-500/16 blur-3xl"
        style={{ y: leftOrbY }}
      />
      <motion.div
        className="absolute -right-24 top-[24%] h-[24rem] w-[24rem] rounded-full bg-cyan-400/14 blur-3xl"
        style={{ y: rightOrbY }}
      />

      <motion.div
        className="absolute -top-[30%] left-[8%] h-[170%] w-[20rem] rotate-[15deg] bg-gradient-to-b from-cyan-300/30 via-blue-500/12 to-transparent blur-3xl"
        style={{ opacity: beamOpacity, y: rightOrbY }}
      />
      <motion.div
        className="absolute -top-[26%] right-[6%] h-[170%] w-[20rem] -rotate-[13deg] bg-gradient-to-b from-blue-300/25 via-indigo-500/10 to-transparent blur-3xl"
        style={{ opacity: beamOpacity, y: leftOrbY }}
      />

      <motion.div
        className="absolute left-1/2 top-[22%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[conic-gradient(from_140deg_at_50%_50%,rgba(56,189,248,0.18),rgba(99,102,241,0.08),rgba(56,189,248,0.18))] blur-3xl"
        style={{ rotate: haloRotate, scale: haloScale, opacity: haloOpacity }}
      />
    </div>
  );
}
