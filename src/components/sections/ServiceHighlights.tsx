/**
 * ServiceHighlights — Grid of service cards on the homepage.
 */
import { services } from '../../data/services';
import { Link } from 'react-router-dom';

export function ServiceHighlights() {
  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-medium text-[oklch(0.25_0.06_145)] md:text-4xl">
          Þjónustan okkar
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/thjonusta/${service.slug}`}
              className="block rounded-xl border border-(--color-border) bg-white p-4 md:p-6 transition hover:shadow-md hover:border-(--color-primary)/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2"
            >
              <h3 className="font-display text-base font-semibold text-(--color-text) md:text-lg">
                {service.name}
              </h3>
              <p className="mt-1.5 text-sm text-(--color-text-muted) md:mt-2 md:text-base">
                {service.shortDescription}
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-(--color-primary) md:mt-3 md:text-sm">
                Sjá nánar
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
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
