
"use client";

import dynamic from 'next/dynamic';
import { useInView } from "framer-motion";
import { useRef, Suspense } from "react";

// Use dynamic import for the client-side Spline component to enable lazy loading
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

/**
 * Projects section background component.
 * Uses client-side lazy loading to prevent WebGL context loss.
 * Only initializes the scene when the section is near the viewport.
 */
export default function ProjectsBackground() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "400px" });

  return (
    <div ref={ref} className="absolute top-0 left-0 w-full h-[600px] opacity-30 z-0 pointer-events-none">
      {isInView && (
        <Suspense fallback={<div className="w-full h-full bg-background animate-pulse" />}>
          <Spline 
            scene="https://prod.spline.design/TMQq1r9Hw5iBrZSf/scene.splinecode" 
          />
        </Suspense>
      )}
      {/* Visual fade-out to blend the bottom of the Spline scene */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
