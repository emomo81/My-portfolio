
"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0a0a0f] relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-headline text-lg font-medium mb-4 uppercase tracking-widest"
          >
            Journey
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-headline font-bold text-white"
          >
            Work & <span className="text-gradient">Education</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Connector Dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-[#0a0a0f] z-10" />

                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-12">
                  <div className={`glass-card p-8 hover:border-primary/30 transition-all duration-500 ${idx % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                    <span className="text-primary font-mono text-sm font-bold mb-2 block">{exp.period}</span>
                    <h4 className="text-white font-headline text-xl font-bold mb-1">{exp.role}</h4>
                    <p className="text-muted-foreground font-medium mb-4">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
