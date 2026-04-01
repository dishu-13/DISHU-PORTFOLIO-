import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code2, Folder, Award, Mail } from 'lucide-react';
import { useActiveSection } from '@/hooks/useActiveSection';

const navItems = [
  { icon: Home, href: '#home', label: 'Home', id: 'home' },
  { icon: User, href: '#about', label: 'About', id: 'about' },
  { icon: Briefcase, href: '#experience', label: 'Experience', id: 'experience' },
  { icon: Code2, href: '#skills', label: 'Skills', id: 'skills' },
  { icon: Folder, href: '#projects', label: 'Projects', id: 'projects' },
  { icon: Award, href: '#achievements', label: 'Achievements', id: 'achievements' },
  { icon: Mail, href: '#contact', label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(navItems.map(item => item.id));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 3.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <nav
        className={`flex items-center justify-between px-4 sm:px-6 py-3 rounded-full backdrop-blur-2xl border transition-all duration-500 w-full max-w-[520px] md:max-w-[600px] ${
          isScrolled
            ? 'bg-card/60 border-border/30 shadow-lg'
            : 'bg-card/20 border-border/10'
        }`}
        style={{
          boxShadow: isScrolled
            ? '0 8px 32px hsl(0 0% 0% / 0.4), inset 0 1px 0 hsl(0 0% 100% / 0.05)'
            : 'none',
        }}
      >
        {/* Logo */}
        <a href="#home" className="text-foreground text-base sm:text-lg font-display font-bold tracking-wider">
          <span className="text-gradient">D</span>AKSH
        </a>

        {/* Nav Icons */}
        <div className="flex items-center gap-3 sm:gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-primary scale-110'
                  : 'text-muted-foreground hover:text-primary hover:scale-110'
              }`}
              title={item.label}
            >
              <item.icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              {activeSection === item.id && (
                <motion.div
                  className="absolute -bottom-1 left-1/2 w-1 h-1 rounded-full bg-primary"
                  layoutId="nav-dot"
                  style={{ x: '-50%', boxShadow: '0 0 8px hsl(263 70% 58%)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}