import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import profileImage from '@/assets/profile.png';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-12 pt-24">
      {/* Subtle green glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto max-w-7xl z-10">
        {/* Top line */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Available for new projects
          </p>
        </motion.div>

        {/* Main heading */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-16">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="font-display text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight uppercase">
              <span className="text-foreground">Data</span>
              <span className="text-primary">.</span>
              <br />
              <span className="text-foreground">Analyst</span>
            </h1>
          </motion.div>

          {/* Right side info */}
          <motion.div
            className="lg:max-w-sm lg:pb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 uppercase tracking-wide">
              Transforming complex data into actionable insights. Certified by Google and Microsoft in data analytics.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              <a href="https://github.com/dishu-13" target="_blank" rel="noopener noreferrer"
                className="p-3 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/dishu-daksh-a52572240/" target="_blank" rel="noopener noreferrer"
                className="p-3 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:dishudaksh44@gmail.com"
                className="p-3 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Profile image banner */}
        <motion.div
          className="mt-12 relative w-full h-[50vh] min-h-[300px] max-h-[500px] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img
            src={profileImage}
            alt="Dishu Daksh - Data Analyst"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          
          {/* Overlay info */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <p className="text-foreground font-display text-xl font-bold">Dishu Daksh</p>
              <p className="text-muted-foreground text-sm">Rudrapur, India</p>
            </div>
            <a
              href="/DISHU_DAKSH_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
