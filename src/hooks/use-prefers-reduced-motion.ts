"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const query = window.matchMedia(QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Tracks the user's `prefers-reduced-motion` OS/browser setting so
 * decorative motion (3D tilt, cursor-tracking shine, unlock spins,
 * etc.) can be disabled for people who opt out of animations.
 *
 * Uses `useSyncExternalStore` (rather than useState + useEffect) since
 * this is exactly what it's designed for: subscribing to an external
 * browser API and staying in sync with it, without the "setState
 * inside an effect" anti-pattern.
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
