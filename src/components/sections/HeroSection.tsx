/**
 * HeroSection — Image carousel with text overlay card.
 * Auto-slides between project images with a floating card.
 */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero-garden-tiny.avif';
import project19 from '../../assets/project_images/project-19.jpeg';
import project22 from '../../assets/project_images/project-22.jpeg';

const slides = [heroImage, project19, project22];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] md:h-[85vh] overflow-hidden">
      {/* Sliding images */}
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={i === 0 ? 'Fallegur garður í umsjá Smartgarða' : ''}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={i !== current}
          fetchPriority={i === 0 ? 'high' : undefined}
        />
      ))}

      {/* Light overlay for text readability */}
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

      {/* Floating card — bottom left */}
      <div className="absolute bottom-8 left-6 right-6 md:bottom-12 md:left-12 md:right-auto md:max-w-lg">
        <div className="bg-white/90 backdrop-blur-sm rounded-sm p-6 md:p-10 shadow-lg">
          <h1 className="font-display text-2xl font-normal leading-tight text-[#1a3a0a] md:text-4xl">
            Fagleg garðaþjónusta{' '}
            <span className="italic">sem þú getur treyst.</span>
          </h1>

          <p className="mt-4 text-sm text-(--color-text-muted) md:text-base">
            Yfir 20 ára reynsla í garðhirðu fyrir einstaklinga og fyrirtæki.
          </p>

          <div className="mt-6 flex flex-col gap-3 md:flex-row">
            <Link
              to="/thjonusta"
              className="inline-flex items-center justify-center gap-2 bg-[#1a3a0a] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2a5a1a]"
            >
              Skoða þjónustu
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
            <Link
              to="/hafdu-samband"
              className="inline-flex items-center justify-center border border-[#1a3a0a]/30 px-6 py-3 text-sm font-medium text-[#1a3a0a] transition-colors hover:border-[#1a3a0a]"
            >
              Hafðu samband
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 right-6 md:bottom-6 md:right-12 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`}
            aria-label={`Mynd ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
