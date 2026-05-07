/* src/components/layout/MobileMenu.tsx — Side drawer menu for all screen sizes */

import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { siteData } from '../../data/site';
import { services } from '../../data/services';
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

  const ctaItem = siteData.navigation[siteData.navigation.length - 1];

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-200',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        ref={menuRef}
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-full max-w-sm overflow-y-auto bg-(--color-surface) shadow-2xl transition-transform duration-200 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
        aria-hidden={!isOpen}
      >
        {/* Close button */}
        <div className="flex items-center justify-end px-6 pt-5">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-(--color-text) hover:bg-(--color-surface-alt) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary)"
            aria-label="Loka valmynd"
          >
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
          </button>
        </div>

        <nav className="px-6 pb-8 pt-4">
          {/* Main navigation links */}
          <div className="space-y-1">
            {siteData.navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-lg font-medium text-(--color-text) transition-colors hover:bg-(--color-surface-alt) hover:text-(--color-primary)"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Services section */}
          <div className="mt-8 border-t border-(--color-border) pt-6">
            <p className="px-4 text-sm font-semibold uppercase tracking-wide text-(--color-text-muted)">
              Þjónusta
            </p>
            <div className="mt-3 space-y-1">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/thjonusta/${service.slug}`}
                  onClick={onClose}
                  className="block rounded-lg px-4 py-3 text-base text-(--color-text) transition-colors hover:bg-(--color-surface-alt) hover:text-(--color-primary)"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA button */}
          <div className="mt-8 px-4">
            <Link
              to={ctaItem.path}
              onClick={onClose}
              className="flex items-center justify-center rounded-full bg-(--color-primary) px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-(--color-primary-light)"
            >
              {ctaItem.label}
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
