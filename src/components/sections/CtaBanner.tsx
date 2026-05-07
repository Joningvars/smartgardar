/* src/components/sections/CtaBanner.tsx — CTA strip with image background and dark overlay */

import { Link } from 'react-router-dom';
import bgImage from '../../assets/project_images/project-14.jpeg';

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background image */}
      <img
        src={bgImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
        width={1920}
        height={600}
        loading="lazy"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-2xl font-medium text-white md:text-4xl">
          Tilbúinn að fá garðinn í toppform?
        </h2>
        <p className="mt-3 text-white/80 md:text-lg">
          Hafðu samband í dag og fáðu ókeypis áætlun fyrir garðinn þinn.
        </p>
        <Link
          to="/hafdu-samband"
          className="mt-6 inline-flex items-center rounded-full bg-white px-7 py-3 text-base font-medium text-(--color-primary) transition-colors hover:bg-white/90"
        >
          Hafðu samband
        </Link>
      </div>
    </section>
  );
}
