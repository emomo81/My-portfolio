
"use client";

import { motion } from "framer-motion";
import { useEffect, Suspense } from "react";
import Spline from "@splinetool/react-spline";

/**
 * Splash screen loader featuring the requested Spline scene.
 * Displays personalized branding in the bottom-right corner.
 */
export default function Loader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Increased duration to 12 seconds to ensure heavy Spline scenes load fully
    const timer = setTimeout(onComplete, 12000);
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
        
        {/* Branding - Bottom Right corner */}
        <div className="absolute inset-0 flex items-end justify-end p-8 md:p-16 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="flex flex-col items-end space-y-3"
          >
            <h1 className="text-2xl md:text-3xl font-headline font-bold text-gradient tracking-tight text-right">
              Emmanuel G. Momo<br />Portfolio
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
