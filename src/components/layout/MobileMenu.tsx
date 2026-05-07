/* src/components/layout/MobileMenu.tsx — Full-screen menu with all pages and services */

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
    <div
      ref={menuRef}
      className={cn(
        'fixed inset-0 top-[60px] z-40 overflow-y-auto bg-(--color-surface) transition-transform duration-200 ease-in-out',
        isOpen ? 'translate-x-0' : 'translate-x-full',
      )}
      aria-hidden={!isOpen}
    >
      <nav className="px-6 py-8">
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
  );
}
