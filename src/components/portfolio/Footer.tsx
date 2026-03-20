
"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-xl font-headline font-bold text-gradient mb-2">E. MOMO</h2>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Emmanuel G. Momo. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-8">
          <a href={personalInfo.linkedin} className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
          <a href={personalInfo.github} className="text-sm text-muted-foreground hover:text-primary transition-colors">GitHub</a>
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-primary hover:bg-primary/10 transition-all"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
