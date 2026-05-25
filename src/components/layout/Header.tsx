/* src/components/layout/Header.tsx — White navbar with phone and CTA */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../../data/site';
import { MobileMenu } from './MobileMenu';
import logo from '../../assets/logos_and_icons/ICON/JPEG/2-01.jpg';
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
              className="h-9 w-auto"
              width={156}
              height={36}
            />
          </Link>

          {/* Center: nav links */}
          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className="relative text-sm font-medium text-(--color-text) pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#6abf40] after:transition-all after:duration-300 hover:after:w-full"
            >
              Forsíða
            </Link>
            <Link
              to="/thjonusta"
              className="relative text-sm font-medium text-(--color-text) pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#6abf40] after:transition-all after:duration-300 hover:after:w-full"
            >
              Þjónusta
            </Link>
            <Link
              to="/um-okkur"
              className="relative text-sm font-medium text-(--color-text) pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#6abf40] after:transition-all after:duration-300 hover:after:w-full"
            >
              Um okkur
            </Link>
            <Link
              to="/hafdu-samband"
              className="relative text-sm font-medium text-(--color-text) pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#6abf40] after:transition-all after:duration-300 hover:after:w-full"
            >
              Hafðu samband
            </Link>
          </nav>

          {/* Right: phone + CTA */}
          <div className="flex items-center gap-4">
            <a
              href="tel:764-6868"
              className="flex items-center gap-1.5 text-sm font-medium text-(--color-text)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-(--color-primary)"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              764-6868
            </a>
            <Link
              to="/hafdu-samband"
              className="rounded-lg bg-[#1a3a0a] px-5 py-2.5 text-sm font-semibold text-white uppercase tracking-wide transition-colors hover:bg-[#6abf40]"
            >
              Fá tilboð
            </Link>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex md:hidden items-center justify-between h-14">
          <Link to="/">
            <img src={logo} alt={siteData.companyName} className="h-5 w-auto" />
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="tel:764-6868"
              className="flex items-center gap-1 text-xs font-medium text-(--color-primary)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              764-6868
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
