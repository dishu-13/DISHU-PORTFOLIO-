import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/profile.png';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto max-w-6xl z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p 
              className="text-primary font-medium text-lg mb-4 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I am
            </motion.p>
            
            <motion.h1 
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-foreground">DISHU</span>
              <br />
              <span className="text-gradient">DAKSH</span>
            </motion.h1>
            
            <motion.div 
              className="flex items-center gap-3 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-accent" />
              <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wider">
                DATA ANALYST
              </p>
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
                href="https://dishu-13.github.io/portfolio/Dishu%20Daksh%20Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </a>
              <a 
                href="#contact"
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-border bg-card/50 backdrop-blur-sm text-foreground font-semibold transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:scale-105"
              >
                Contact Me
              </a>
            </motion.div>
            
            {/* Social links */}
            <motion.div 
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a 
                href="https://github.com/dishu-13" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border bg-card/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border bg-card/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:dishudaksh44@gmail.com"
                className="p-3 rounded-full border border-border bg-card/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
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
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-spin-slow opacity-30 blur-xl" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <img 
                  src={profileImage} 
                  alt="Dishu Daksh - Data Analyst"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <motion.div 
                className="absolute -right-4 top-1/4 px-4 py-2 rounded-full bg-card border border-primary/50 backdrop-blur-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-sm font-medium text-primary">Google Certified</span>
              </motion.div>
              
              <motion.div 
                className="absolute -left-4 bottom-1/4 px-4 py-2 rounded-full bg-card border border-accent/50 backdrop-blur-sm"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <span className="text-sm font-medium text-accent">Microsoft Certified</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}