/* src/pages/AboutPage.tsx — About page for Smartgarðar */

import { useEffect } from 'react';
import { siteData } from '../data/site';
import { Button } from '../components/ui/Button';

export function AboutPage() {
  useEffect(() => {
    const { title, description } = siteData.pages.about;
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, []);

  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold tracking-tight text-(--color-text) sm:text-4xl">
          Um Smartgarða
        </h1>

        <div className="mt-8 space-y-6 text-lg leading-relaxed text-(--color-text-muted)">
          <p>
            Smartgarðar er staðbundið garðyrkjufyrirtæki sem sérhæfir sig í
            umhirðu garða og útisvæða. Við leggjum áherslu á vandaða vinnu, skýr
            samskipti og áreiðanlega þjónustu.
          </p>

          <p>
            Markmið okkar er einfalt: að halda garðinum þínum í toppstandi svo
            þú getir notið hans án áhyggna. Hvort sem um er að ræða reglubundinn
            grasslátt, beðahreinsun eða trjáklippingar — við sjáum um allt.
          </p>

          <p>
            Við erum stolt af því að veita persónulega þjónustu þar sem
            viðskiptavinir okkar fá alltaf skjót svör og heiðarlegt mat á
            verkefnum.
          </p>
        </div>

        <div className="mt-12">
          <Button variant="primary" size="lg" href="/hafdu-samband">
            Hafðu samband
          </Button>
        </div>
      </div>
    </section>
  );
}
