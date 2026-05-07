/**
 * TrustSection — Displays three trust pillars communicating reliability,
 * professionalism, and ease of communication. Used on the home page to
 * build confidence with potential customers. All content in Icelandic.
 */

const trustPillars = [
  {
    id: 'areidanleiki',
    title: 'Áreiðanleiki',
    description: 'Við stöndum við okkar loforð og mætum alltaf á réttum tíma.',
  },
  {
    id: 'fagmennska',
    title: 'Fagmennska',
    description: 'Vönduð vinna og fagleg nálgun í hverju verkefni.',
  },
  {
    id: 'einfoeld-samskipti',
    title: 'Einföld samskipti',
    description: 'Auðvelt að ná í okkur og fá skjót svör við fyrirspurnum.',
  },
];

export function TrustSection() {
  return (
    <section className="bg-(--color-surface-alt) py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-semibold text-center text-(--color-text) md:text-4xl">
          Af hverju Smartgarðar?
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {trustPillars.map((pillar) => (
            <div key={pillar.id} className="text-center">
              <h3 className="text-lg font-semibold text-(--color-text)">
                {pillar.title}
              </h3>
              <p className="mt-2 text-(--color-text-muted) leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
