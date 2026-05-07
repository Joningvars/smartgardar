/* src/pages/ServicesPage.tsx — Detailed services page for Smartgarðar */

import { useEffect } from 'react';
import { services } from '../data/services';
import { siteData } from '../data/site';
import { ServiceCard } from '../components/ui/ServiceCard';
import { Button } from '../components/ui/Button';

export function ServicesPage() {
  useEffect(() => {
    document.title = siteData.pages.services.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        siteData.pages.services.description,
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = siteData.pages.services.description;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display text-3xl font-bold text-center sm:text-4xl">
          Þjónusta
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-(--color-text-muted)">
          Við bjóðum upp á fjölbreytta garðaþjónustu fyrir einstaklinga og
          fyrirtæki. Hér má sjá yfirlit yfir þá þjónustu sem við veitum.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              variant="detailed"
              headingLevel="h2"
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-(--color-text-muted)">
            Hefur þú áhuga á þjónustu okkar? Hafðu samband og við svörum eins
            fljótt og auðið er.
          </p>
          <Button
            variant="primary"
            size="lg"
            href="/hafdu-samband"
            className="mt-6"
          >
            Hafðu samband
          </Button>
        </div>
      </div>
    </section>
  );
}
