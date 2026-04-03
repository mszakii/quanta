import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Research', href: '#research' },
    { name: 'SDGs', href: '#sdgs' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-quanta-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className={`font-logo font-bold text-2xl tracking-tight ${isScrolled ? 'text-quanta-navy' : 'text-quanta-white'}`}>
            Quanta
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-quanta-gray hover:text-quanta-navy' : 'text-quanta-white/80 hover:text-quanta-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:quanta.nano.research@gmail.com"
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              isScrolled
                ? 'bg-quanta-navy text-quanta-white hover:bg-quanta-navy/90'
                : 'bg-quanta-white text-quanta-navy hover:bg-quanta-white/90'
            }`}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-quanta-navy' : 'text-quanta-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-quanta-navy' : 'text-quanta-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-quanta-white shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-quanta-navy font-medium py-2 border-b border-quanta-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:quanta.nano.research@gmail.com"
            className="mt-2 text-center bg-quanta-navy text-quanta-white px-5 py-3 rounded-full font-medium"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
