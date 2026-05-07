/* src/components/layout/MobileMenu.tsx — Collapsible mobile navigation */

import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { siteData } from '../../data/site';
import { Button } from '../ui/Button';
import { cn } from '../../lib/cn';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = siteData.navigation.slice(0, -1);
  const ctaItem = siteData.navigation[siteData.navigation.length - 1];

  return (
    <div
      ref={menuRef}
      className={cn(
        'fixed inset-0 top-16 z-40 bg-(--color-surface) transition-transform duration-200 ease-in-out md:hidden',
        isOpen ? 'translate-x-0' : 'translate-x-full',
      )}
      aria-hidden={!isOpen}
    >
      <nav className="flex flex-col items-center gap-6 px-6 pt-12">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={onClose}
            className="text-lg font-medium text-(--color-text) transition-colors hover:text-(--color-primary) rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2"
          >
            {item.label}
          </Link>
        ))}
        <Button
          variant="primary"
          size="md"
          href={ctaItem.path}
          onClick={onClose}
        >
          {ctaItem.label}
        </Button>
      </nav>
    </div>
  );
}
