import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-border/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <a href="#home" className="font-display text-lg font-bold">
            <span className="text-primary">D</span>
            <span className="text-foreground">AKSH</span>
          </a>

          <div className="flex gap-3">
            {[
              { icon: Github, href: 'https://github.com/dishu-13' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/dishu-daksh-a52572240/' },
              { icon: Mail, href: 'mailto:dishudaksh44@gmail.com' },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <p className="text-muted-foreground text-sm">
            © 2024 Dishu Daksh. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
