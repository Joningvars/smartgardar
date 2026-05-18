/* src/components/layout/Header.tsx — White navbar with phone and CTA */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../../data/site';
import { MobileMenu } from './MobileMenu';
import logo from '../../assets/smartgardar-logo-new.png';
import { cn } from '../../lib/cn';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-between h-16">
          {/* Left: logo */}
          <Link to="/" className="shrink-0">
            <img
              src={logo}
              alt={siteData.companyName}
              className="h-10 w-auto"
            />
          </Link>

          {/* Center: nav links */}
          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-(--color-text) hover:text-(--color-primary)"
            >
              Forsíða
            </Link>
            <Link
              to="/thjonusta"
              className="text-sm font-medium text-(--color-text) hover:text-(--color-primary)"
            >
              Þjónusta
            </Link>
            <Link
              to="/um-okkur"
              className="text-sm font-medium text-(--color-text) hover:text-(--color-primary)"
            >
              Um okkur
            </Link>
            <Link
              to="/hafdu-samband"
              className="text-sm font-medium text-(--color-text) hover:text-(--color-primary)"
            >
              Hafðu samband
            </Link>
          </nav>

          {/* Right: phone + CTA */}
          <div className="flex items-center gap-4">
            <a
              href="tel:764-6868"
              className="text-sm font-medium text-(--color-text)"
            >
              📞 764-6868
            </a>
            <Link
              to="/hafdu-samband"
              className="rounded-lg bg-[#1a3a0a] px-5 py-2.5 text-sm font-semibold text-white uppercase tracking-wide transition-colors hover:bg-[#2a5a1a]"
            >
              Fá tilboð
            </Link>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex md:hidden items-center justify-between h-14">
          <Link to="/">
            <img src={logo} alt={siteData.companyName} className="h-8 w-auto" />
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="tel:764-6868"
              className="text-xs font-medium text-(--color-primary)"
            >
              📞 764-6868
            </a>
            <button
              type="button"
              className="relative inline-flex items-center justify-center w-7 h-7 text-(--color-text)"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Loka valmynd' : 'Opna valmynd'}
              aria-expanded={isMenuOpen}
            >
              <span
                className={cn(
                  'absolute h-0.5 w-5 bg-current transition-all duration-200',
                  isMenuOpen ? 'rotate-45' : '-translate-y-1.5',
                )}
              />
              <span
                className={cn(
                  'absolute h-0.5 w-5 bg-current transition-opacity duration-200',
                  isMenuOpen ? 'opacity-0' : 'opacity-100',
                )}
              />
              <span
                className={cn(
                  'absolute h-0.5 w-5 bg-current transition-all duration-200',
                  isMenuOpen ? '-rotate-45' : 'translate-y-1.5',
                )}
              />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
