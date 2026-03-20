import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code2, Folder, Mail, Award } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav
        className={`flex items-center justify-between px-4 sm:px-6 py-3 rounded-full bg-card/70 backdrop-blur-2xl border border-border/30 transition-all duration-300 w-full max-w-[520px] ${
          isScrolled ? 'shadow-lg shadow-primary/5 bg-card/80' : ''
        }`}
      >
        <a href="#home" className="font-display text-base sm:text-lg font-bold tracking-wider">
          <span className="text-primary">D</span>
          <span className="text-foreground">AKSH</span>
        </a>

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
              <item.icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
