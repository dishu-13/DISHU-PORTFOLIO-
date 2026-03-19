import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="font-display text-lg font-bold uppercase tracking-tight">
              Dishu Daksh<span className="text-primary">®</span>
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
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
    </footer>
  );
}
