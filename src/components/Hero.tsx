import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import profileImage from '@/assets/profile.png';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] animate-pulse-glow"
           style={{ background: 'hsl(263 70% 58% / 0.15)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] animate-pulse-glow"
           style={{ background: 'hsl(190 80% 50% / 0.1)', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px]"
           style={{ background: 'hsl(220 90% 60% / 0.06)' }} />

      <div className="container mx-auto max-w-6xl z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div {...fadeUp(3.4)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/30 bg-card/30 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-muted-foreground font-mono">Available for opportunities</span>
            </motion.div>

            <motion.h1 {...fadeUp(3.5)} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 tracking-tight">
              <span className="text-foreground">DISHU</span>
              <br />
              <span className="text-gradient glow-text">DAKSH</span>
            </motion.h1>

            <motion.div {...fadeUp(3.6)} className="flex items-center gap-3 justify-center lg:justify-start mb-8">
              <div className="h-[2px] w-12" style={{ background: 'var(--gradient-primary)' }} />
              <p className="text-xl md:text-2xl text-muted-foreground font-display font-light tracking-[0.15em] uppercase">
                Data Analyst
              </p>
            </motion.div>

            <motion.p {...fadeUp(3.7)} className="text-muted-foreground text-lg max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
              Transforming complex data into actionable insights. Certified by Google and Microsoft in data analytics, AI/ML and Power BI.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(3.8)} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a href="/DISHU_DAKSH_Resume.pdf" target="_blank" rel="noopener noreferrer"
                 className="btn-primary group flex items-center gap-2 text-sm font-medium">
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Download CV
              </a>
              <a href="#contact" className="btn-outline flex items-center gap-2 text-sm">
                Contact Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(3.9)} className="flex gap-3 justify-center lg:justify-start">
              {[
                { Icon: Github, href: 'https://github.com/dishu-13', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/dishu-daksh-a52572240/', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:dishudaksh44@gmail.com', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                   className="p-3 rounded-full border border-border/30 bg-card/30 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                   style={{ backdropFilter: 'blur(12px)' }}>
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 3.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-[-8px] rounded-full animate-spin-slow opacity-40"
                   style={{ background: 'conic-gradient(from 0deg, hsl(263 70% 58%), hsl(190 80% 50%), hsl(220 90% 60%), hsl(263 70% 58%))', filter: 'blur(20px)' }} />
              {/* Image */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden glow-border">
                <img src={profileImage} alt="Dishu Daksh - Data Analyst" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-primary transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </motion.a>
    </section>
  );
}