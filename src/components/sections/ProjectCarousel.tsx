/**
 * ProjectCarousel — Infinite scrolling carousel of past project images.
 * Uses CSS animation for smooth, continuous horizontal scrolling.
 * Images are duplicated to create the seamless loop effect.
 */

const projectImages = [
  { src: '/projects/project-1.jpg', alt: 'Garðverkefni 1' },
  { src: '/projects/project-2.jpg', alt: 'Garðverkefni 2' },
  { src: '/projects/project-3.jpg', alt: 'Garðverkefni 3' },
  { src: '/projects/project-4.jpg', alt: 'Garðverkefni 4' },
  { src: '/projects/project-5.jpg', alt: 'Garðverkefni 5' },
  { src: '/projects/project-6.jpg', alt: 'Garðverkefni 6' },
];

export function ProjectCarousel() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 mb-10 text-center">
        <h2 className="font-display text-3xl font-semibold text-(--color-text) md:text-4xl">
          Verkefnin okkar
        </h2>
        <p className="mt-4 text-lg text-(--color-text-muted)">
          Hér má sjá dæmi um garða sem við höfum unnið að.
        </p>
      </div>

      {/* Carousel track */}
      <div className="relative w-full">
        <div className="flex animate-scroll gap-4">
          {/* First set of images */}
          {projectImages.map((img, i) => (
            <div
              key={`a-${i}`}
              className="flex-shrink-0 w-72 h-52 md:w-80 md:h-60 rounded-lg overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
          {/* Duplicated set for seamless loop */}
          {projectImages.map((img, i) => (
            <div
              key={`b-${i}`}
              aria-hidden="true"
              className="flex-shrink-0 w-72 h-52 md:w-80 md:h-60 rounded-lg overflow-hidden"
            >
              <img
                src={img.src}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
