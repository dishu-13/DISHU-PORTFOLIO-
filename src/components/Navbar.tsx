import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code2, Folder, Mail, Award, Moon, Sun } from 'lucide-react';
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav
        className={`flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-card/90 backdrop-blur-md border border-border shadow-lg transition-all duration-300 w-full max-w-[360px] sm:max-w-[520px] md:max-w-[600px] ${
          isScrolled ? 'shadow-xl' : ''
        }`}
      >
        {/* Logo */}
        <a href="#home" className="text-foreground text-base sm:text-xl font-medium tracking-wider">
          <span className="text-primary">D</span>AKSH
        </a>

        {/* Navigation - Icons (visible on all screens) */}
        <div className="flex items-center gap-3 sm:gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative transition-all duration-200 ${
                activeSection === item.id
                  ? 'text-primary scale-110'
                  : 'text-muted-foreground hover:text-primary hover:scale-110'
              }`}
              title={item.label}
            >
              <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          ))}
          
          {/* Dark mode toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200 ml-2"
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
