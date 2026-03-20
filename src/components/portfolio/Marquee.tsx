"use client";

import { motion } from "framer-motion";

const marqueeText = [
  "DATA SCIENCE",
  "WEB DEVELOPMENT",
  "MACHINE LEARNING",
  "UI/UX DESIGN",
  "PYTHON",
  "NEXT.JS",
  "STRATEGIC ANALYSIS",
  "CREATIVE SOLUTIONS",
];

export default function Marquee() {
  return (
    <div className="relative py-12 bg-background overflow-hidden border-y border-white/5">
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
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              {marqueeText.map((text, index) => (
                <div key={index} className="flex items-center gap-12">
                  <span className="text-4xl md:text-6xl font-headline font-black text-transparent stroke-white/20 select-none tracking-tighter" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                    {text}
                  </span>
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Absolute positioning to cover potential branding areas if needed */}
      <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
