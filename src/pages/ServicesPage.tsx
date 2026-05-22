/* src/pages/ServicesPage.tsx — Services overview matching new design */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { siteData } from '../data/site';

export function ServicesPage() {
  useEffect(() => {
    document.title = siteData.pages.services.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', siteData.pages.services.description);
  }, []);

  return (
    <>
      {/* Page header */}
      <section className="bg-[#1a3a0a] pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-display text-3xl font-bold text-white md:text-5xl">
            Þjónustan okkar
          </h1>
          <p className="mt-3 text-base text-white/70 md:text-lg max-w-2xl">
            Við tökum að okkur fjölbreytt verkefni fyrir einstaklinga, húsfélög
            og fyrirtæki.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/thjonusta/${service.slug}`}
                className="group rounded-lg border border-(--color-border) p-6 transition-all hover:shadow-md hover:border-[#6abf40]/40"
              >
                <h2 className="font-display text-lg font-bold text-(--color-text) group-hover:text-[#1a3a0a] md:text-xl">
                  {service.name}
                </h2>
                <p className="mt-2 text-sm text-(--color-text-muted) leading-relaxed">
                  {service.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#6abf40]">
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

      {/* CTA */}
      <section className="bg-(--color-surface-alt) py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-2xl font-bold text-(--color-text) md:text-3xl">
            Vantar þig aðstoð við garðinn?
          </h2>
          <p className="mt-3 text-(--color-text-muted)">
            Hafðu samband og við svörum eins fljótt og auðið er.
          </p>
          <Link
            to="/hafdu-samband"
            className="mt-6 inline-flex items-center rounded-lg bg-[#1a3a0a] px-6 py-3 text-sm font-semibold text-white uppercase tracking-wide transition-colors hover:bg-[#6abf40]"
          >
            Hafðu samband
          </Link>
        </div>
      </section>
    </>
  );
}
