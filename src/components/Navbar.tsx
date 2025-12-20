import { useState, useEffect } from 'react';
import { Home, User, Folder, Trophy, Mail, Menu, X } from 'lucide-react';

const navItems = [
  { icon: Home, href: '#home', label: 'Home' },
  { icon: User, href: '#about', label: 'About' },
  { icon: Folder, href: '#projects', label: 'Projects' },
  { icon: Trophy, href: '#skills', label: 'Skills' },
  { icon: Mail, href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        className={`flex items-center justify-between px-6 py-3 rounded-full bg-card/90 backdrop-blur-md border border-border shadow-lg transition-all duration-300 ${
          isScrolled ? 'shadow-xl' : ''
        }`}
        style={{ minWidth: '320px', maxWidth: '500px', width: '100%' }}
      >
        {/* Logo */}
        <a href="#home" className="text-foreground text-lg font-medium tracking-wider">
          <span className="text-primary">D</span>AKSH
        </a>

        {/* Desktop Navigation - Icons */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200"
              title={item.label}
            >
              <item.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-1 text-foreground"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 bg-card/95 backdrop-blur-md border border-border rounded-2xl shadow-xl p-4">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors font-light py-2 flex items-center gap-3"
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}