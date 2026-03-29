"use client";

import { useEffect, useMemo, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "hero");
  const idsKey = useMemo(() => sectionIds.join("|"), [sectionIds]);

  useEffect(() => {
    const ids = idsKey.split("|").filter(Boolean);
    let rafId = 0;

    const getSections = () =>
      ids
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => section instanceof HTMLElement);

    const updateActiveSection = () => {
      rafId = 0;
      const sections = getSections();
      if (!sections.length) {
        return;
      }

      const headerOffset = 92;
      const probeY = headerOffset + window.innerHeight * 0.24;
      let current = sections[0].id;
      let foundProbeMatch = false;

      for (const section of sections) {
        const bounds = section.getBoundingClientRect();
        if (bounds.top <= probeY && bounds.bottom > probeY) {
          current = section.id;
          foundProbeMatch = true;
          break;
        }
      }

      if (!foundProbeMatch) {
        const passedSections = sections.filter((section) => section.getBoundingClientRect().top <= probeY);
        current = passedSections.at(-1)?.id ?? sections[0].id;
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = sections.at(-1)?.id ?? current;
      }

      setActiveSection((previous) => (previous === current ? previous : current));
    };

    const onScrollOrResize = () => {
      if (rafId) {
        return;
      }

      rafId = window.requestAnimationFrame(updateActiveSection);
    };

    onScrollOrResize();
    const settleTimeout = window.setTimeout(onScrollOrResize, 240);
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("load", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("load", onScrollOrResize);
      window.clearTimeout(settleTimeout);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [idsKey]);

  return activeSection;
}
