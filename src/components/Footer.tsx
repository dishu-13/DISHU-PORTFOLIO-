import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com/dishu-13', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/dishu-daksh-a52572240/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/dishu_daksh18/', label: 'Instagram' },
  { icon: Mail, href: 'mailto:dishudaksh44@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 px-4 overflow-hidden border-t border-border/20 backdrop-blur-xl bg-card/20">
      {/* Decorative gradient orbs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative">
        <div className="grid md:grid-cols-2 gap-10 mb-12 items-start">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <h3 className="font-display text-2xl font-medium">
              <span className="text-gradient">Dishu Daksh</span>
            </h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Data Analyst turning raw numbers into clear, actionable stories.
            </p>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:justify-self-end"
          >
            <h4 className="font-display text-sm uppercase tracking-widest text-foreground/80 mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="p-3 rounded-full border border-border/40 bg-card/40 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

        {/* Bottom row */}
        <div className="flex justify-center">
          <p className="text-muted-foreground text-xs font-light">
            © {new Date().getFullYear()} Dishu Daksh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
