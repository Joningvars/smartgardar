/* src/components/sections/WhyUsSection.tsx — Image/text split section */

import project05 from '../../assets/project_images/project-05.jpeg';

export function WhyUsSection() {
  return (
    <section className="bg-(--color-surface-alt) py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={project05}
              alt="Garður í umsjá Smartgarða"
              className="h-[300px] w-full object-cover md:h-[420px]"
              width={1067}
              height={600}
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="font-display text-2xl font-medium text-[oklch(0.25_0.06_145)] md:text-4xl">
              Af hverju Smartgarðar?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-(--color-text-muted)">
              Lóðasláttur sameinaðist Smartgörðum — með yfir 20 ára reynslu og
              þúsundir verkefna á bak við okkur vitum við hvað virkar. Við komum
              fram við garðinn þinn eins og okkar eigin.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-(--color-primary)" />
                <span className="text-(--color-text)">
                  Áreiðanleg og reglubundin þjónusta
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-(--color-primary)" />
                <span className="text-(--color-text)">
                  Persónuleg samskipti — engin símaver
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-(--color-primary)" />
                <span className="text-(--color-text)">
                  Vönduð vinna og fagleg nálgun
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
