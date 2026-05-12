/* src/components/sections/ManifestoSection.tsx — Dark green manifesto/mission section */

import { Link } from 'react-router-dom';
import bgImage from '../../assets/project_images/project-03.jpeg';

export function ManifestoSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with dark green overlay */}
      <img
        src={bgImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#1a3a0a]/85" aria-hidden="true" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 items-end">
          {/* Left: large heading */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/40 mb-8"
              aria-hidden="true"
            >
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89-.82 1.31-1.31C9.81 16.45 12 14 17 8z" />
              <path d="M12.18 2.66C10 4 9.12 5.38 8.5 8c1.62-1.12 3.5-2.25 5.68-2.34 2.18-.09 4.32.75 6.32 2.34-2-3.5-4.82-5.84-8.32-5.34z" />
            </svg>

            <h2 className="font-display text-3xl font-normal leading-tight text-white md:text-5xl">
              Við sköpum garða{' '}
              <span className="italic text-[#dbfeb8]">
                sem líta út eins og þeir hafi alltaf verið þar.
              </span>
            </h2>

            <Link
              to="/um-okkur"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-white/70 border-b border-white/30 pb-1 transition-colors hover:text-white hover:border-white"
            >
              Um okkur
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
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* Right: smaller descriptive text */}
          <div className="md:pb-4">
            <p className="text-base leading-relaxed text-white/70 md:text-lg">
              Við nálgumst hvert verkefni af virðingu fyrir umhverfinu og
              náttúrunni. Markmiðið er alltaf það sama — að skapa útisvæði sem
              eru falleg, náttúruleg og endingargóð.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
              Með yfir 20 ára reynslu vitum við hvað virkar á Íslandi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
