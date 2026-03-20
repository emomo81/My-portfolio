
"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  const Icon = (LucideIcons as any)[name] || LucideIcons.Code2;
  return <Icon className={className} />;
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0a0f] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-headline text-lg font-medium mb-4 uppercase tracking-widest"
          >
            My Expertise
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-headline font-bold text-white"
          >
            Technical <span className="text-gradient">Skill Set</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-500"
            >
              <h4 className="text-white font-headline font-semibold text-xl mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <DynamicIcon name="Box" className="w-4 h-4" />
                </div>
                {category.category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-sm text-muted-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-white transition-all cursor-default"
                  >
                    <DynamicIcon name={skill.icon} className="w-3.5 h-3.5" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
