/* src/components/layout/Footer.tsx — Site footer with services, navigation, and contact */

import { Link } from 'react-router-dom';
import { siteData } from '../../data/site';
import { services } from '../../data/services';
import { Button } from '../ui/Button';

export function Footer() {
  return (
    <footer className="border-t border-(--color-border) bg-(--color-surface-alt)">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Three-column grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Column 1: Services */}
          <div>
            <h3 className="font-display text-lg font-semibold text-(--color-text)">
              Þjónusta
            </h3>
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/thjonusta"
                    className="text-sm text-(--color-text-muted) transition-colors hover:text-(--color-primary) rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-display text-lg font-semibold text-(--color-text)">
              Flýtileiðir
            </h3>
            <nav aria-label="Flýtileiðir">
              <ul className="mt-4 space-y-2">
                {siteData.navigation.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-sm text-(--color-text-muted) transition-colors hover:text-(--color-primary) rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold text-(--color-text)">
              Hafðu samband
            </h3>
            <div className="mt-4 space-y-3">
              <p className="text-sm text-(--color-text-muted)">
                <a
                  href={`tel:${siteData.phone.replace(/\s/g, '')}`}
                  className="transition-colors hover:text-(--color-primary) rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2"
                >
                  {siteData.phone}
                </a>
              </p>
              <p className="text-sm text-(--color-text-muted)">
                <a
                  href={`mailto:${siteData.email}`}
                  className="transition-colors hover:text-(--color-primary) rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2"
                >
                  {siteData.email}
                </a>
              </p>
              <Button variant="primary" size="sm" href="/hafdu-samband">
                Senda fyrirspurn
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-(--color-border) pt-6 text-center">
          <p className="text-sm text-(--color-text-muted)">
            &copy; 2026 {siteData.companyName}
          </p>
        </div>
      </div>
    </footer>
  );
}
