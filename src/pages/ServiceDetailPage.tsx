/* src/pages/ServiceDetailPage.tsx — Individual service detail page */

import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { siteData } from '../data/site';
import { Button } from '../components/ui/Button';

import img14 from '../assets/project_images/project-14.jpeg';
import img15 from '../assets/project_images/project-15.jpeg';
import img16 from '../assets/project_images/project-16.jpeg';
import img17 from '../assets/project_images/project-17.jpeg';
import img18 from '../assets/project_images/project-18.jpeg';
import img19 from '../assets/project_images/project-19.jpeg';

const placeholderImages = [img14, img15, img16, img17, img18, img19];

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.name} — ${siteData.companyName}`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', service.longDescription);
    }
  }, [service]);

  if (!service) {
    return <Navigate to="/thjonusta" replace />;
  }

  return (
    <section className="px-4 pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto max-w-6xl">
        {/* Two-column layout: text left, images right */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left column: description and highlights */}
          <div>
            <h1 className="font-display text-3xl font-bold text-(--color-text) md:text-4xl">
              {service.name}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-(--color-text-muted)">
              {service.longDescription}
            </p>

            {service.highlights && service.highlights.length > 0 && (
              <ul className="mt-8 space-y-4">
                {service.highlights.map((highlight) => (
                  <li key={highlight.title} className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0 text-(--color-primary)"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <div>
                      <span className="font-semibold text-(--color-text)">
                        {highlight.title}:
                      </span>{' '}
                      <span className="text-(--color-text-muted)">
                        {highlight.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-10">
              <Button variant="primary" size="lg" href="/hafdu-samband">
                Fá tilboð
              </Button>
            </div>
          </div>

          {/* Right column: image grid */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {placeholderImages.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={src}
                  alt={`${service.name} verkefni ${i + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
