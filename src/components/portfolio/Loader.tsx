"use client";

import { motion } from "framer-motion";
import { useEffect, Suspense } from "react";
import Spline from '@splinetool/react-spline';

/**
 * Enhanced splash screen loader using a custom Spline scene.
 * Automatically transitions to the main content after a short duration.
 */
export default function Loader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Display the splash scene for 4 seconds before entering the site
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
        
        {/* Visual Overlay for branding */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col items-center space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-gradient">
              MOMOSPHERE
            </h1>
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground animate-pulse">
              Initializing Experience
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
