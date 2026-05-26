import { useState, useEffect, useCallback } from 'react';
import { Home, User, Briefcase, Code2, Folder, Mail, Award, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [isDark, setIsDark] = useState(false);
  const activeSection = useActiveSection(navItems.map(item => item.id));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDark]);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 rounded-full w-full max-w-[340px] sm:max-w-[520px] md:max-w-[580px] transition-all duration-500 ${
          isScrolled
            ? 'navbar-glass-scrolled'
            : 'navbar-glass'
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="relative text-white text-sm sm:text-lg font-bold tracking-widest group"
        >
          <span className="relative z-10">
            <span className="text-white/70 group-hover:text-white transition-colors duration-300">D</span>
            <span className="group-hover:text-white/90 transition-colors duration-300">AKSH</span>
          </span>
          <motion.span
            className="absolute -bottom-0.5 left-0 h-[2px] bg-white/40 rounded-full"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        </a>

        {/* Navigation Icons */}
        <div className="flex items-center gap-0.5 sm:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative p-1 sm:p-2 rounded-full transition-all duration-300 group"
                title={item.label}
              >
                {/* Active background pill */}
                {isActive && (
                  <motion.span
                    layoutId="navActiveIndicator"
                    className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <item.icon
                  className={`relative z-10 w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] transition-all duration-300 ${
                    isActive
                      ? 'text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]'
                      : 'text-white/50 group-hover:text-white/90 group-hover:scale-110'
                  }`}
                />
              </a>
            );
          })}

          {/* Divider */}
          <span className="w-px h-4 bg-white/20 mx-1" />

          {/* Dark mode toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="relative p-1.5 sm:p-2 rounded-full text-white/50 hover:text-white transition-all duration-300 group"
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sun className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px]" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Moon className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px]" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>
    </header>
  );
}
