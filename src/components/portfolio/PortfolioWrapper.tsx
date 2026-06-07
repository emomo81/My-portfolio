"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/portfolio/Loader";

function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: none), (pointer: coarse)").matches;
}

export default function PortfolioWrapper({ children }: { children: React.ReactNode }) {
  // On mobile skip the Spline loader entirely — start with loading:false
  const [loading, setLoading] = useState(true);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Immediately show content on touch devices — no Spline loader needed
    if (isTouchDevice()) {
      setLoading(false);
      return;
    }

    // Desktop: move cursor glow via direct DOM manipulation (no setState → no re-renders)
    const el = glowRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" onComplete={() => setLoading(false)} />
      ) : (
        <div key="content" className="relative">
          {/* Cursor glow — desktop only, moved via direct DOM, never triggers re-render */}
          <div
            ref={glowRef}
            className="custom-cursor-glow hidden lg:block"
          />
          {children}
        </div>
      )}
    </AnimatePresence>
  );
}
