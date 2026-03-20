import Spline from '@splinetool/react-spline/next';
import { Suspense } from "react";

/**
 * Projects section background component.
 * Uses the Next.js optimized Spline component for the background 3D scene.
 * Set to capture events to support cursor-based motion.
 */
export default function ProjectsBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-96 opacity-40 z-0 pointer-events-auto">
      <Suspense fallback={<div className="w-full h-full bg-background animate-pulse" />}>
        <Spline 
          scene="https://prod.spline.design/TMQq1r9Hw5iBrZSf/scene.splinecode" 
        />
      </Suspense>
    </div>
  );
}