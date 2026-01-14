'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui';
import { navigation } from '@/config/navigation';
import { trackHeaderCTA } from '@/lib/analytics';

interface HeaderProps {
  onCtaClick: () => void;
}

export const Header = ({ onCtaClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCtaClick = () => {
    trackHeaderCTA();
    onCtaClick();
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-40
        transition-all duration-300
        ${isScrolled ? 'bg-alfa-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-alfa-red rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-white tracking-wide">Альфа Курс+</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-alfa-gray-300 hover:text-white transition-colors rounded-lg hover:bg-alfa-gray-800"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button size="sm" onClick={handleCtaClick}>
              Подключить
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-alfa-gray-300 hover:text-white"
            aria-label="Меню"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-alfa-gray-900 border-t border-alfa-gray-800 py-4 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={handleNavClick}
                  className="px-3 py-3 text-base font-medium text-alfa-gray-300 hover:text-white transition-colors rounded-lg hover:bg-alfa-gray-800"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 px-3">
              <Button fullWidth onClick={handleCtaClick}>
                Подключить
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
