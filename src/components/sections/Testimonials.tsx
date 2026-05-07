/* src/components/sections/Testimonials.tsx — Customer testimonials */

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
    <section className="bg-(--color-surface) py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-medium text-center text-[oklch(0.25_0.06_145)] md:text-4xl">
          Hvað segja viðskiptavinir
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl bg-[#f7f5f0] p-6 md:p-8 border border-[#e8e5df]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[oklch(0.25_0.06_145)]/20 mb-4"
                aria-hidden="true"
              >
                <path d="M11.3 2.5c-1.4.7-2.5 1.5-3.4 2.5C6.5 6.5 5.7 8.3 5.7 10.5c0 .4 0 .8.1 1.2.5-.3 1.1-.5 1.7-.5 2 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5c-1.2 0-2.3-.6-3-1.6-.5-.7-.8-1.6-.8-2.6 0-3.1 1.1-5.7 3.2-7.8.9-.9 2-1.7 3.2-2.3l1.2 1.1zm8 0c-1.4.7-2.5 1.5-3.4 2.5-1.4 1.5-2.2 3.3-2.2 5.5 0 .4 0 .8.1 1.2.5-.3 1.1-.5 1.7-.5 2 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5c-1.2 0-2.3-.6-3-1.6-.5-.7-.8-1.6-.8-2.6 0-3.1 1.1-5.7 3.2-7.8.9-.9 2-1.7 3.2-2.3l1.2 1.1z" />
              </svg>

              <p className="text-base leading-relaxed text-(--color-text) md:text-lg">
                {t.quote}
              </p>

              <div className="mt-6">
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
