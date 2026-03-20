import Spline from '@splinetool/react-spline/next';
import { Suspense } from "react";
import HeroClient from "./HeroClient";

/**
 * Hero section component.
 * Uses the Next.js optimized Spline component (Server Component) for high performance.
 * UI is layered using pointer-events-none to ensure cursor interaction reaches the 3D scene.
 */
export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-background">
      {/* 3D Scene Container */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-[#0a0a0f] animate-pulse" />}>
          <Spline 
            scene="https://prod.spline.design/5QT65szjxPzPxi-K/scene.splinecode" 
          />
        </Suspense>
      </div>

      {/* Visual Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background z-[1] pointer-events-none" />

      {/* Main Content - Interactive elements enabled, container transparent to events */}
      <div className="relative z-10 w-full h-full flex items-center pointer-events-none">
        <HeroClient />
      </div>

      {/* Decoration */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 pointer-events-none">
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
