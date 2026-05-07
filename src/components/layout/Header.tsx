/* src/components/layout/Header.tsx — Floating navbar */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../../data/site';
import { MobileMenu } from './MobileMenu';
import logo from '../../assets/smartgardar-logo-new.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = siteData.navigation.slice(0, -1);
  const ctaItem = siteData.navigation[siteData.navigation.length - 1];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 md:px-6 md:pt-4">
      <div className="mx-auto rounded-lg bg-[#f7f5f0]/95 backdrop-blur-sm shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-[#e8e5df] px-5 py-3.5 md:px-8 md:py-4">
        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-between relative">
          {/* Left: hamburger + nav links */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="inline-flex items-center justify-center p-1 text-(--color-text) hover:text-(--color-primary) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary)"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Loka valmynd' : 'Opna valmynd'}
              aria-expanded={isMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <nav className="flex items-center gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-base font-medium text-(--color-text) transition-colors hover:text-(--color-primary)"
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

          {/* Right: buttons */}
          <div className="flex items-center gap-3">
            <Link
              to="/um-okkur"
              className="rounded-full border border-[#d4d1cb] px-5 py-2 text-base text-(--color-text) transition-colors hover:border-(--color-primary) hover:text-(--color-primary)"
            >
              Um okkur
            </Link>
            <Link
              to={ctaItem.path}
              className="rounded-full bg-[oklch(0.82_0.12_140)] px-5 py-2 text-base font-medium text-(--color-text) transition-colors hover:bg-[oklch(0.77_0.12_140)]"
            >
              {ctaItem.label}
            </Link>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex md:hidden items-center justify-between">
          {/* Left: logo */}
          <Link to="/">
            <img src={logo} alt={siteData.companyName} className="h-9 w-auto" />
          </Link>

          {/* Right: CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to={ctaItem.path}
              className="rounded-full bg-[oklch(0.82_0.12_140)] px-4 py-2 text-sm font-medium text-(--color-text)"
            >
              {ctaItem.label}
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center p-1.5 text-(--color-text) hover:text-(--color-primary) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary)"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Loka valmynd' : 'Opna valmynd'}
              aria-expanded={isMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
