import { useState, useEffect } from 'react';
import { Home, User, Folder, Trophy, Mail } from 'lucide-react';

const navItems = [
  { icon: Home, href: '#home', label: 'Home' },
  { icon: User, href: '#about', label: 'About' },
  { icon: Folder, href: '#projects', label: 'Projects' },
  { icon: Trophy, href: '#skills', label: 'Skills' },
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
        className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-card/90 backdrop-blur-md border border-border shadow-lg transition-all duration-300 w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] ${
          isScrolled ? 'shadow-xl' : ''
        }`}
      >
        {/* Logo */}
        <a href="#home" className="text-foreground text-sm sm:text-lg font-medium tracking-wider">
          <span className="text-primary">D</span>AKSH
        </a>

        {/* Navigation - Icons (visible on all screens) */}
        <div className="flex items-center gap-3 sm:gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200"
              title={item.label}
            >
              <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
