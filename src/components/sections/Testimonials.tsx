/* src/components/sections/Testimonials.tsx — Asymmetric customer testimonials */

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
        <h2 className="font-display text-2xl font-medium text-[oklch(0.25_0.06_145)] md:text-4xl">
          Hvað segja viðskiptavinir
        </h2>

        {/* Asymmetric layout: one large + two stacked */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-5">
          {/* Featured testimonial — takes 3 cols */}
          <div className="rounded-2xl bg-[#f7f5f0] p-8 md:col-span-3 md:p-10">
            <p className="font-display text-xl leading-relaxed text-(--color-text) md:text-2xl">
              &ldquo;{testimonials[0].quote}&rdquo;
            </p>
            <div className="mt-6">
              <p className="font-semibold text-(--color-text)">
                {testimonials[0].author}
              </p>
              <p className="text-sm text-(--color-text-muted)">
                {testimonials[0].location}
              </p>
            </div>
          </div>

          {/* Two smaller testimonials stacked — takes 2 cols */}
          <div className="flex flex-col gap-6 md:col-span-2">
            {testimonials.slice(1).map((t) => (
              <div
                key={t.id}
                className="flex-1 rounded-2xl bg-[#f7f5f0] p-6 md:p-8"
              >
                <p className="text-base leading-relaxed text-(--color-text)">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4">
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
      </div>
    </section>
  );
}
