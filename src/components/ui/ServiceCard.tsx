/**
 * Reusable ServiceCard component with compact and detailed variants.
 * Displays a gardening service with name and appropriate description.
 */
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

  return (
    <article
      className={cn(
        'rounded-lg border border-(--color-border) bg-white transition hover:shadow-md hover:border-(--color-primary)/30',
        isDetailed ? 'p-8' : 'p-6',
      )}
    >
      <Heading className="font-display font-semibold text-lg">
        {service.name}
      </Heading>
      <p className="mt-2 text-(--color-text-muted)">
        {isDetailed ? service.longDescription : service.shortDescription}
      </p>
    </article>
  );
}
