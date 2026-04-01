import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { Icon: Github, href: 'https://github.com/dishu-13', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/dishu-daksh-a52572240/', label: 'LinkedIn' },
  { Icon: Mail, href: 'mailto:dishudaksh44@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t border-border/20">
      {/* Gradient top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
           style={{ background: 'linear-gradient(90deg, transparent, hsl(263 70% 58% / 0.5), transparent)' }} />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
        >
          {/* Brand */}
          <div>
            <a href="#home" className="font-display text-2xl font-bold tracking-wider mb-4 block">
              <span className="text-gradient">D</span>AKSH
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Data Analyst transforming complex data into actionable insights. Certified by Google & Microsoft.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4 text-sm tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2">
              {links.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4 text-sm tracking-wider uppercase">Connect</h4>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                   className="p-3 rounded-xl border border-border/30 bg-card/30 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="section-divider mt-12 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-mono">
            © {new Date().getFullYear()} Dishu Daksh. All rights reserved.
          </p>
          <p className="text-muted-foreground/40 text-xs font-mono">
            Built with React + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}