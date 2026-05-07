/* src/components/layout/Header.tsx — Floating navbar */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../../data/site';
import { MobileMenu } from './MobileMenu';
import logo from '../../assets/smartgardar-logo-new.png';
import { cn } from '../../lib/cn';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = siteData.navigation.filter(
    (item) => item.path !== '/hafdu-samband',
  );
  const ctaItem = siteData.navigation[siteData.navigation.length - 1];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mx-4 mt-2 md:mx-6">
      <div className="mx-auto rounded-lg bg-white/80 backdrop-blur-3xl shadow-md px-4 py-2.5 md:px-8 md:py-4">
        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-between relative">
          {/* Left: hamburger + nav links */}
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="relative inline-flex items-center justify-center w-6 h-6 cursor-pointer text-(--color-text) hover:text-(--color-primary) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary)"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Loka valmynd' : 'Opna valmynd'}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">
                {isMenuOpen ? 'Loka' : 'Opna'} valmynd
              </span>
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
            <nav className="flex items-center gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative cursor-pointer text-base font-medium text-(--color-text) transition-colors hover:text-(--color-primary) after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[oklch(0.25_0.06_145)] after:transition-all after:duration-200 hover:after:w-full"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center: logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <img
              src={logo}
              alt={siteData.companyName}
              className="h-11 w-auto"
            />
          </Link>

          {/* Right: CTA button */}
          <div className="flex items-center">
            <Link
              to={ctaItem.path}
              className="cursor-pointer rounded-full bg-[oklch(0.82_0.12_140)] px-5 py-2 text-base font-medium text-(--color-text) transition-colors hover:bg-[oklch(0.77_0.12_140)]"
            >
              {ctaItem.label}
            </Link>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex md:hidden items-center justify-between">
          {/* Left: logo */}
          <Link to="/">
            <img src={logo} alt={siteData.companyName} className="h-6 w-auto" />
          </Link>

          {/* Right: hamburger only */}
          <button
            type="button"
            className="relative inline-flex items-center justify-center w-7 h-7 cursor-pointer text-(--color-text) hover:text-(--color-primary) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary)"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Loka valmynd' : 'Opna valmynd'}
            aria-expanded={isMenuOpen}
          >
            <span
              className={cn(
                'absolute h-0.5 w-6 bg-current transition-all duration-200',
                isMenuOpen ? 'rotate-45' : '-translate-y-2',
              )}
            />
            <span
              className={cn(
                'absolute h-0.5 w-6 bg-current transition-opacity duration-200',
                isMenuOpen ? 'opacity-0' : 'opacity-100',
              )}
            />
            <span
              className={cn(
                'absolute h-0.5 w-6 bg-current transition-all duration-200',
                isMenuOpen ? '-rotate-45' : 'translate-y-2',
              )}
            />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
