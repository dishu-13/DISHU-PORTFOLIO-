import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code2, Folder, Mail } from 'lucide-react';

const navItems = [
  { icon: Home, href: '#home', label: 'Home' },
  { icon: User, href: '#about', label: 'About' },
  { icon: Briefcase, href: '#experience', label: 'Experience' },
  { icon: Code2, href: '#skills', label: 'Skills' },
  { icon: Folder, href: '#projects', label: 'Projects' },
  { icon: Mail, href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav
        className={`flex items-center justify-between px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-card/90 backdrop-blur-md border border-border shadow-lg transition-all duration-300 w-full max-w-[320px] sm:max-w-[480px] md:max-w-[560px] ${
          isScrolled ? 'shadow-xl' : ''
        }`}
      >
        {/* Logo */}
        <a href="#home" className="text-foreground text-base sm:text-xl font-medium tracking-wider">
          <span className="text-primary">D</span>AKSH
        </a>

        {/* Navigation - Icons (visible on all screens) */}
        <div className="flex items-center gap-4 sm:gap-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200"
              title={item.label}
            >
              <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
