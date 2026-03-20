"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function ProjectsClient() {
  return (
    <div className="max-w-7xl mx-auto relative z-10 pointer-events-none">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pointer-events-auto">
        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-headline text-lg font-medium mb-4 uppercase tracking-widest"
          >
            Portfolio
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-headline font-bold text-white"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="hidden md:block text-muted-foreground max-w-sm text-right"
        >
          A collection of technical solutions across software engineering and data science.
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group glass-card flex flex-col h-full hover:border-primary/20 transition-all duration-500 overflow-hidden pointer-events-auto"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                data-ai-hint="software project screenshot"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                <a href={project.githubUrl} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                  <Github size={20} />
                </a>
                <a href={project.liveUrl} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-primary/80 px-2 py-0.5 rounded-md bg-primary/5 border border-primary/10">
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className="text-white font-headline text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6">
                {project.description}
              </p>
              <div className="mt-auto flex items-center gap-2 text-primary font-medium text-sm">
                View Case Study <ExternalLink size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
