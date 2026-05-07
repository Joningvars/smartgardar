/**
 * Reusable ServiceCard component with compact and detailed variants.
 * Compact variant links to the dedicated service detail page.
 * Detailed variant shows all content inline (used on services overview page).
 */
import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';
import type { Service } from '../../types/service';

type ServiceCardProps = {
  service: Service;
  variant?: 'compact' | 'detailed';
  headingLevel?: 'h2' | 'h3';
};

export function ServiceCard({
  service,
  variant = 'compact',
  headingLevel = 'h3',
}: ServiceCardProps) {
  const isDetailed = variant === 'detailed';
  const Heading = headingLevel;

  if (isDetailed) {
    return (
      <Link
        to={`/thjonusta/${service.slug}`}
        className="block rounded-lg border border-(--color-border) bg-white p-8 transition hover:shadow-md hover:border-(--color-primary)/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2"
      >
        <Heading className="font-display font-semibold text-lg">
          {service.name}
        </Heading>
        <p className="mt-2 text-(--color-text-muted)">
          {service.longDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-(--color-primary)">
          Sjá nánar
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
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </span>
      </Link>
    );
  }

  return (
    <Link
      to={`/thjonusta/${service.slug}`}
      className={cn(
        'block rounded-lg border border-(--color-border) bg-white p-6 transition hover:shadow-md hover:border-(--color-primary)/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2',
      )}
    >
      <Heading className="font-display font-semibold text-lg">
        {service.name}
      </Heading>
      <p className="mt-2 text-(--color-text-muted)">
        {service.shortDescription}
      </p>
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-(--color-primary)">
        Sjá nánar
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
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </span>
    </Link>
  );
}
