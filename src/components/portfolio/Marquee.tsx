
"use client";

import { motion } from "framer-motion";

const marqueeText = [
  "DATA SCIENCE",
  "WEB DEVELOPMENT",
  "DATA ANALYSIS",
];

export default function Marquee() {
  return (
    <div className="relative py-12 bg-background overflow-hidden border-y border-white/5 z-20">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-12 items-center"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              {marqueeText.map((text, index) => (
                <div key={`${i}-${index}`} className="flex items-center gap-12">
                  <span className="text-4xl md:text-6xl font-headline font-black text-transparent select-none tracking-tighter" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                    {text}
                  </span>
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative gradients for the marquee edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </div>
  );
}
