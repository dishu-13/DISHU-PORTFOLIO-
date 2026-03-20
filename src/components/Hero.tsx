import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Sparkles, Zap } from 'lucide-react';
import profileImage from '@/assets/profile.png';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto max-w-6xl z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Welcome badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 badge-glow mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>WELCOME</span>
            </motion.div>

            <motion.h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-foreground">DISHU</span>
            </motion.h1>
            <motion.h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="text-gradient">DAKSH</span>
            </motion.h1>

            {/* Role badges */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="badge-glow flex items-center gap-2">
                <Zap className="w-3.5 h-3.5" />
                Data Analysis
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-medium border bg-accent/8 border-accent/30 text-accent">
                Visualization Expert
              </span>
            </motion.div>

            <motion.p
              className="text-muted-foreground text-lg max-w-xl mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Transforming complex data into actionable insights. Certified by Google and Microsoft in data analytics.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="/DISHU_DAKSH_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Download CV
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-border bg-card/50 backdrop-blur-sm text-foreground font-semibold text-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { icon: Github, href: 'https://github.com/dishu-13', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/dishu-daksh-a52572240/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:dishudaksh44@gmail.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border bg-card/40 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 animate-spin-slow opacity-40 blur-2xl" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-primary/20 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Dishu Daksh - Data Analyst"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
