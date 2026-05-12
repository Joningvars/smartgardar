/* src/components/sections/WhyUsSection.tsx — Friendly "why us" section */

import project26 from '../../assets/project_images/project-26.png';
import { Link } from 'react-router-dom';

const highlights = [
  { number: '20+', label: 'ára reynsla' },
  { number: '1000+', label: 'ánægðir viðskiptavinir' },
  { number: '7', label: 'daga í viku' },
];

export function WhyUsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Stats row */}
        <div className="flex justify-center gap-8 md:gap-16 mb-12 md:mb-16">
          {highlights.map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-display text-3xl font-medium text-[oklch(0.25_0.06_145)] md:text-4xl">
                {item.number}
              </p>
              <p className="mt-1 text-sm text-(--color-text-muted) md:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Image + text split */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
          {/* Image with rounded corners */}
          <div className="overflow-hidden rounded-3xl">
            <img
              src={project26}
              alt="Garður í umsjá Smartgarða"
              className="h-[280px] w-full object-cover md:h-[400px]"
              width={1067}
              height={600}
              loading="lazy"
            />
          </div>

          {/* Text content */}
          <div>
            <h2 className="font-display text-2xl font-medium text-[oklch(0.25_0.06_145)] md:text-3xl">
              Garðurinn þinn í góðum höndum
            </h2>
            <p className="mt-4 text-base leading-relaxed text-(--color-text-muted) md:text-lg">
              Lóðasláttur sameinaðist Smartgörðum og saman erum við með yfir 20
              ára reynslu. Við komum fram við garðinn þinn eins og okkar eigin —
              persónuleg þjónusta, áreiðanleiki og vönduð vinna.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dbfeb8]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[oklch(0.25_0.06_145)]"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="text-(--color-text)">
                  Persónuleg samskipti — engin símaver
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dbfeb8]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[oklch(0.25_0.06_145)]"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="text-(--color-text)">
                  Áreiðanleg og reglubundin þjónusta
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dbfeb8]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[oklch(0.25_0.06_145)]"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="text-(--color-text)">
                  Vönduð vinna og fagleg nálgun
                </span>
              </div>
            </div>

            <Link
              to="/hafdu-samband"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-(--color-primary) px-6 py-3 text-base font-medium text-white transition-colors hover:bg-(--color-primary-light)"
            >
              Hafðu samband
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
