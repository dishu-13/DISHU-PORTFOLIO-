import { useState, useEffect } from 'react';
import { useActiveSection } from '@/hooks/useActiveSection';

const navItems = [
  { href: '#home', label: 'Home', id: 'home' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#achievements', label: 'Certificates', id: 'achievements' },
  { href: '#contact', label: 'Contact', id: 'contact' },
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
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12">
      <nav
        className={`flex items-center justify-between py-5 border-b transition-all duration-300 ${
          isScrolled ? 'border-border/50 bg-background/80 backdrop-blur-xl' : 'border-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#home" className="font-display text-lg font-bold tracking-tight text-foreground uppercase">
          Dishu Daksh<span className="text-primary">®</span>
        </a>

        {/* Navigation Links - hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-xs font-medium uppercase tracking-widest transition-colors duration-200 ${
                activeSection === item.id
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              ( {item.label} )
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block px-5 py-2.5 text-xs font-bold uppercase tracking-widest border border-foreground text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
        >
          Contact Now
        </a>

        {/* Mobile menu button */}
        <button className="md:hidden text-foreground" onClick={() => {
          const el = document.getElementById('mobile-nav');
          el?.classList.toggle('hidden');
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div id="mobile-nav" className="hidden md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
        <div className="flex flex-col py-4 gap-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => document.getElementById('mobile-nav')?.classList.add('hidden')}
              className={`px-6 py-2 text-sm uppercase tracking-widest transition-colors ${
                activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
