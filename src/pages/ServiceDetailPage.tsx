/* src/pages/ServiceDetailPage.tsx — Individual service detail page */

import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { services } from '../data/services';
import { siteData } from '../data/site';

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
    <>
      {/* Page header */}
      <section className="bg-[#1a3a0a] pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            to="/thjonusta"
            className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white mb-4"
          >
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
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Til baka
          </Link>
          <h1 className="font-display text-3xl font-bold text-white md:text-5xl">
            {service.name}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left: description and highlights */}
            <div>
              <p className="text-lg leading-relaxed text-(--color-text-muted)">
                {service.longDescription}
              </p>

              {service.highlights && service.highlights.length > 0 && (
                <ul className="mt-8 space-y-4">
                  {service.highlights.map((highlight) => (
                    <li key={highlight.title} className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6abf40]/10 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#6abf40]"
                          aria-hidden="true"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
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

              <Link
                to="/hafdu-samband"
                className="mt-10 inline-flex items-center rounded-lg bg-[#6abf40] px-6 py-3 text-sm font-semibold text-white uppercase tracking-wide transition-colors hover:bg-[#5aaf30]"
              >
                Fá tilboð
              </Link>
            </div>

            {/* Right: image grid */}
            <div className="grid grid-cols-2 gap-3">
              {placeholderImages.map((src, i) => (
                <div
                  key={i}
                  className="aspect-square overflow-hidden rounded-lg"
                >
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

      {/* CTA */}
      <section className="bg-(--color-surface-alt) py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-2xl font-bold text-(--color-text) md:text-3xl">
            Langar þig að vita meira um {service.name.toLowerCase()}?
          </h2>
          <p className="mt-3 text-(--color-text-muted)">
            Hafðu samband og fáðu ókeypis tilboð.
          </p>
          <Link
            to="/hafdu-samband"
            className="mt-6 inline-flex items-center rounded-lg bg-[#6abf40] px-6 py-3 text-sm font-semibold text-white uppercase tracking-wide transition-colors hover:bg-[#5aaf30]"
          >
            Hafðu samband
          </Link>
        </div>
      </section>
    </>
  );
}
