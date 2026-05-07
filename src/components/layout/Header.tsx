/* src/components/layout/Header.tsx — Sticky header with navigation and mobile menu */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../../data/site';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = siteData.navigation.slice(0, -1);
  const ctaItem = siteData.navigation[siteData.navigation.length - 1];

  return (
    <header className="sticky top-0 z-50 border-b border-(--color-border) bg-(--color-surface)">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Company name / logo */}
        <Link
          to="/"
          className="font-display text-xl font-bold text-(--color-primary) rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2"
        >
          {siteData.companyName}
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-sm font-medium text-(--color-text) transition-colors hover:text-(--color-primary) rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2"
            >
              {item.label}
            </Link>
          ))}
          <Button variant="primary" size="sm" href={ctaItem.path}>
            {ctaItem.label}
          </Button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-(--color-text) transition-colors hover:bg-(--color-surface-alt) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Loka valmynd' : 'Opna valmynd'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
