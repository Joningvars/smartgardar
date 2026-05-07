/**
 * ProjectCarousel — Infinite scrolling carousel of past project images.
 * Uses CSS animation for smooth, continuous horizontal scrolling.
 * Images are duplicated to create the seamless loop effect.
 */

import project01 from '../../assets/project_images/project-01.jpeg';
import project02 from '../../assets/project_images/project-02.jpeg';
import project03 from '../../assets/project_images/project-03.jpeg';
import project04 from '../../assets/project_images/project-04.jpeg';
import project05 from '../../assets/project_images/project-05.jpeg';
import project06 from '../../assets/project_images/project-06.jpeg';
import project07 from '../../assets/project_images/project-07.jpeg';
import project08 from '../../assets/project_images/project-08.jpeg';
import project09 from '../../assets/project_images/project-09.jpeg';
import project10 from '../../assets/project_images/project-10.jpeg';
import project11 from '../../assets/project_images/project-11.jpeg';
import project12 from '../../assets/project_images/project-12.jpeg';
import project13 from '../../assets/project_images/project-13.jpeg';

const projectImages = [
  { src: project01, alt: 'Garðverkefni 1' },
  { src: project02, alt: 'Garðverkefni 2' },
  { src: project03, alt: 'Garðverkefni 3' },
  { src: project04, alt: 'Garðverkefni 4' },
  { src: project05, alt: 'Garðverkefni 5' },
  { src: project06, alt: 'Garðverkefni 6' },
  { src: project07, alt: 'Garðverkefni 7' },
  { src: project08, alt: 'Garðverkefni 8' },
  { src: project09, alt: 'Garðverkefni 9' },
  { src: project10, alt: 'Garðverkefni 10' },
  { src: project11, alt: 'Garðverkefni 11' },
  { src: project12, alt: 'Garðverkefni 12' },
  { src: project13, alt: 'Garðverkefni 13' },
];

export function ProjectCarousel() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 mb-10 text-center">
        <h2 className="font-display text-3xl font-medium text-[oklch(0.25_0.06_145)] md:text-4xl">
          Verkefnin okkar
        </h2>
        <p className="mt-4 text-lg text-(--color-text-muted)">
          Hér má sjá dæmi um garða sem við höfum unnið að.
        </p>
      </div>

      {/* Carousel track */}
      <div className="relative w-full">
        <div className="flex animate-scroll gap-4 w-max">
          {/* First set of images */}
          {projectImages.map((img, i) => (
            <div
              key={`a-${i}`}
              className="shrink-0 w-72 h-52 md:w-[400px] md:h-[280px] rounded-xl overflow-hidden"
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
              className="shrink-0 w-72 h-52 md:w-[400px] md:h-[280px] rounded-xl overflow-hidden"
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
