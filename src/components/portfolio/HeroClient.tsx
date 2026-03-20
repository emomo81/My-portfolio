"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function HeroClient() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pointer-events-none">
      <div className="max-w-2xl pointer-events-auto">
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
  );
}
