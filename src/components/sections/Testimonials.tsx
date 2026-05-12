/* src/components/sections/Testimonials.tsx — Clean white testimonials */

const testimonials = [
  {
    id: 'testimonial-1',
    quote:
      'Smartgarðar hafa séð um garðinn okkar í mörg ár. Alltaf áreiðanlegir og vinna vönduð verk.',
    author: 'Helga Jónsdóttir',
    location: 'Garðabær',
  },
  {
    id: 'testimonial-2',
    quote:
      'Frábær þjónusta frá fyrsta degi. Garðurinn hefur aldrei litið betur út en eftir að þau tóku við.',
    author: 'Magnús Sigurðsson',
    location: 'Kópavogur',
  },
  {
    id: 'testimonial-3',
    quote:
      'Einföld samskipti og fagleg vinna. Mæli eindregið með Smartgörðum fyrir alla garðaþjónustu.',
    author: 'Anna Björnsdóttir',
    location: 'Hafnarfjörður',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-bold text-[#1a3a0a] md:text-4xl">
          Umsagnir
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl border border-(--color-border) p-6 md:p-8"
            >
              <p className="text-base leading-relaxed text-(--color-text)">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-5 pt-4 border-t border-(--color-border)">
                <p className="text-sm font-semibold text-(--color-text)">
                  {t.author}
                </p>
                <p className="text-sm text-(--color-text-muted)">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
