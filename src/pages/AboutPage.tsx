/* src/pages/AboutPage.tsx — About page for Smartgarðar */

import { useEffect } from 'react';
import { siteData } from '../data/site';
import { Button } from '../components/ui/Button';
import { PageHeader } from '../components/ui/PageHeader';

const values = [
  {
    id: 'reynsla',
    title: 'Yfir 20 ára reynsla',
    description:
      'Frá árinu 2005 höfum við sinnt þúsundum verkefna og byggt upp traust hjá fjölskyldum og fyrirtækjum.',
  },
  {
    id: 'areidanleiki',
    title: 'Áreiðanleiki',
    description:
      'Við mætum alltaf á réttum tíma og stöndum við okkar loforð. Einfalt og öruggt.',
  },
  {
    id: 'persónuleg',
    title: 'Persónuleg þjónusta',
    description:
      'Þú færð alltaf beint samband við okkur — engin símaver eða flókin kerfi.',
  },
  {
    id: 'gæði',
    title: 'Vönduð vinna',
    description:
      'Við leggjum metnað í hvert verkefni, hvort sem það er lítið eða stórt.',
  },
];

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
    <>
      <PageHeader
        title="Um Smartgarða"
        subtitle="Stofnað 2005 — yfir 20 ára reynsla í garðaþjónustu."
      />

      {/* Intro section */}
      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xl leading-relaxed text-(--color-text) md:text-2xl">
            Við erum lítið og persónulegt fyrirtæki sem elskar garða.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-(--color-text-muted)">
            Smartgarðar var stofnað árið 2005 af fólki sem hafði brennandi áhuga
            á útisvæðum og garðrækt. Síðan þá höfum við vaxið jafnt og þétt og
            þjónað fjölskyldum og fyrirtækjum um allt höfuðborgarsvæðið.
          </p>
        </div>
      </section>

      {/* Values grid */}
      <section className="bg-(--color-surface-alt) px-4 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-medium text-center text-[oklch(0.25_0.06_145)] md:text-3xl">
            Það sem gerir okkur öðruvísi
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.id}
                className="rounded-2xl bg-white p-6 border border-[#e8e5df] md:p-8"
              >
                <h3 className="font-display text-lg font-medium text-[oklch(0.25_0.06_145)]">
                  {value.title}
                </h3>
                <p className="mt-2 text-(--color-text-muted) leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal touch section */}
      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-medium text-[oklch(0.25_0.06_145)] md:text-3xl">
            Garðurinn þinn í góðum höndum
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-(--color-text-muted)">
            Við vitum að garðurinn er mikilvægur hluti af heimilinu þínu. Þess
            vegna komum við fram við hann eins og okkar eigin. Hvort sem þú
            þarft reglubundna umhirðu eða aðstoð við stærra verkefni — við erum
            hér til að hjálpa.
          </p>

          <div className="mt-8">
            <Button variant="primary" size="lg" href="/hafdu-samband">
              Hafðu samband við okkur
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
