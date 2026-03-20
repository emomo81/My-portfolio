
"use client";

import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Suspense } from "react";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex items-center bg-background">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-[#0a0a0f] animate-pulse" />}>
          <Spline scene="https://prod.spline.design/5QT65szjxPzPxi-K/scene.splinecode" />
        </Suspense>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-primary font-headline text-lg md:text-xl font-medium mb-4 tracking-wider">
              HELLO, I'M
            </h2>
            <h1 className="text-5xl md:text-7xl font-headline font-bold text-white mb-6 leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              {personalInfo.title}. Passionate about building seamless digital experiences and analyzing data for impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white gap-2 h-14 px-8 text-base shadow-lg shadow-primary/20" asChild>
                <a href="#projects">
                  View My Work <ArrowRight size={18} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/10 hover:bg-white/5 text-white gap-2 h-14 px-8 text-base backdrop-blur-sm" asChild>
                <a href="/resume.pdf" download>
                  Download CV <Download size={18} />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
