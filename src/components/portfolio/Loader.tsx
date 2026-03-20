"use client";

import { motion } from "framer-motion";
import { useEffect, Suspense } from "react";
import dynamic from 'next/dynamic';

// Dynamic import for the client-side Spline component to prevent SSR issues in the Loader
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

/**
 * Enhanced splash screen loader using the specific Spline scene requested.
 * Branding is positioned in the bottom-right corner as per user request.
 */
export default function Loader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Display the splash scene for 4.5 seconds before entering the site
    const timer = setTimeout(onComplete, 4500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0f] overflow-hidden"
    >
      <div className="w-full h-full relative">
        <Suspense fallback={<div className="w-full h-full bg-[#0a0a0f] animate-pulse" />}>
          <Spline 
            scene="https://prod.spline.design/vzBa42kPkMlxtJ8G/scene.splinecode" 
          />
        </Suspense>
        
        {/* Visual Overlay for branding - Positioned in the bottom-right corner */}
        <div className="absolute inset-0 flex items-end justify-end p-8 md:p-16 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="flex flex-col items-end space-y-3"
          >
            <h1 className="text-2xl md:text-3xl font-headline font-bold text-gradient tracking-tight">
              Emmanuel G. Momo Portfolio
            </h1>
            <div className="w-32 h-[1px] bg-gradient-to-l from-primary to-transparent opacity-50" />
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.6em] text-muted-foreground/40 animate-pulse">
                Initializing Experience
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}