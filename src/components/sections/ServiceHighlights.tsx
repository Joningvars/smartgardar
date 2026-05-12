/* src/components/sections/ServiceHighlights.tsx — Popular services with image cards */

import { Link } from 'react-router-dom';
import img01 from '../../assets/project_images/project-01.jpeg';
import img02 from '../../assets/project_images/project-02.jpeg';
import img03 from '../../assets/project_images/project-03.jpeg';
import img04 from '../../assets/project_images/project-04.jpeg';
import img06 from '../../assets/project_images/project-06.jpeg';
import img07 from '../../assets/project_images/project-07.jpeg';

const popularServices = [
  { name: 'Garðsláttur', slug: 'grasslattur', image: img01 },
  { name: 'Beðahreinsun', slug: 'bedahreinsun', image: img02 },
  { name: 'Trjáklippingar', slug: 'trjaklippingar', image: img03 },
  { name: 'Garðaúðun', slug: 'gardaudun', image: img04 },
  { name: 'Hellulagnir', slug: 'thokulagnir', image: img06 },
  { name: 'Trjáfellingar', slug: 'trjafellingar', image: img07 },
];

export function ServiceHighlights() {
  return (
    <section className="bg-[#1a3a0a] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
          Vinsælasta þjónustan
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {popularServices.map((service) => (
            <Link
              key={service.slug}
              to={`/thjonusta/${service.slug}`}
              className="group relative overflow-hidden rounded-xl aspect-4/3"
            >
              <img
                src={service.image}
                alt={service.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <h3 className="font-display text-base font-semibold text-white md:text-lg">
                  {service.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/thjonusta"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#dbfeb8] hover:underline"
          >
            Sjá alla þjónustu
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
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
