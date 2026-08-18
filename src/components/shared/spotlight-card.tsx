"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wraps its children with a cursor-tracking radial glow. This is the
 * portfolio's visual signature: instead of a generic static hover
 * state, every card reacts to exactly where the pointer is, giving the
 * whole site a distinct, tactile feel.
 */
export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const bounds = node.getBoundingClientRect();
    node.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    node.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn("group/spotlight relative isolate", className)}
      style={{
        "--spotlight-x": "50%",
        "--spotlight-y": "50%",
      } as React.CSSProperties}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spotlight:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--spotlight-x) var(--spotlight-y), color-mix(in oklab, var(--color-primary) 16%, transparent), transparent 68%)",
        }}
      />
      {children}
    </div>
  );
}
