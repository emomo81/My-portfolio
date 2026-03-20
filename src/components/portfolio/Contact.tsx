
"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin, Mail, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out, Emmanuel will get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-primary font-headline text-lg font-medium mb-4 uppercase tracking-widest">Connect</h3>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-8">
              Let's <span className="text-gradient">Work Together</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-md">
              Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to new opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email Me</h4>
                  <p className="text-muted-foreground">{personalInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-muted-foreground">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href={personalInfo.github} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary transition-all">
                <Github size={20} />
              </a>
              <a href={personalInfo.linkedin} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground px-1">Full Name</label>
                  <Input 
                    placeholder="John Doe" 
                    className="bg-white/5 border-white/10 focus:border-primary rounded-xl h-12"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground px-1">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-white/5 border-white/10 focus:border-primary rounded-xl h-12"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground px-1">Subject</label>
                <Input 
                  placeholder="How can I help you?" 
                  className="bg-white/5 border-white/10 focus:border-primary rounded-xl h-12"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground px-1">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..." 
                  className="bg-white/5 border-white/10 focus:border-primary rounded-xl min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full h-14 bg-primary hover:bg-primary/90 rounded-xl text-base font-bold gap-2">
                Send Message <Send size={18} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
