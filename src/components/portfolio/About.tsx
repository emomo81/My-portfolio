
"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import Image from "next/image";

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Technologies Used", value: "10+" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden glass-card p-2">
              <div className="aspect-square relative rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                 <Image 
                    src="https://picsum.photos/seed/momo-profile/800/800" 
                    alt="Emmanuel G. Momo" 
                    fill 
                    className="object-cover"
                    data-ai-hint="professional portrait"
                 />
              </div>
            </div>
            {/* Decorative background circles */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-[80px]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-primary font-headline text-lg font-medium mb-4 uppercase tracking-widest">About Me</h3>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-8">
              Blending Data Insights with <span className="text-gradient">Creative Design</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>{personalInfo.summary}</p>
              <p>
                My journey in tech is driven by curiosity and a commitment to precision. Whether I'm building Python-based desktop applications or analyzing complex datasets in R, I focus on delivering solutions that are both functional and elegant.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-headline font-bold text-white">{stat.value}</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
