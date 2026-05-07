/**
 * ServiceHighlights — Displays all four Smartgarðar services in a responsive
 * grid of compact ServiceCards. Used on the home page to give visitors a
 * quick overview of available services.
 */
import { services } from '../../data/services';
import { ServiceCard } from '../ui/ServiceCard';

export function ServiceHighlights() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-semibold text-center text-(--color-text) md:text-4xl">
          Þjónustan okkar
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
}
