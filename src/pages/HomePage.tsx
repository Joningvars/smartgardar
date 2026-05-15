/* src/pages/HomePage.tsx — Premium editorial homepage */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/sections/HeroSection';
import { Testimonials } from '../components/sections/Testimonials';
import { CtaBanner } from '../components/sections/CtaBanner';
import { siteData } from '../data/site';
import project19 from '../assets/project_images/project-19.jpeg';
import project22 from '../assets/project_images/project-22.jpeg';
import project01 from '../assets/project_images/project-01.jpeg';
import project03 from '../assets/project_images/project-03.jpeg';

function AboutSection() {
  return (
    <section className="pt-10 pb-20 md:pt-14 md:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-(--color-text-muted) mb-4">
              Um okkur
            </p>
            <h2 className="font-display text-3xl font-normal leading-tight text-(--color-text) md:text-5xl">
              Garðar sem <span className="italic">standa tímans próf.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-(--color-text-muted) md:text-lg">
              Ekki allir hafa tíma eða tæki til að halda garðinum í toppformi.
              Þess vegna erum við til. Smartgarðar og Lóðasláttur sameinuðust og
              saman bjóðum við yfir 20 ára reynslu í öllu sem snýr að garðinum
              þínum.
            </p>
            <p className="mt-4 text-base leading-relaxed text-(--color-text-muted) md:text-lg">
              Hvort sem um er að ræða reglubundna umhirðu eða stærri verkefni.
            </p>
          </div>

          <div className="overflow-hidden rounded-sm">
            <img
              src={project22}
              alt="Garðverkefni Smartgarða"
              className="h-[350px] w-full object-cover md:h-[480px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ManifestoSection() {
  return (
    <section className="relative bg-[#1a3a0a] py-24 md:py-32 overflow-hidden">
      <img
        src={project03}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        aria-hidden="true"
        loading="lazy"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20 items-end">
          <div>
            <h2 className="font-display text-3xl font-normal leading-tight text-white md:text-5xl">
              Garðurinn þinn í{' '}
              <span className="italic text-[#dbfeb8]">traustum höndum</span> —
              frá vori til hausts.
            </h2>
            <Link
              to="/um-okkur"
              className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60 border-b border-white/30 pb-1 hover:text-white transition-colors"
            >
              Um okkur
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
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
          <div>
            <p className="text-base leading-relaxed text-white/60 md:text-lg">
              Við sjáum um garðinn þinn af fagmennsku og metnaði. Reglubundin
              umhirða, trjáklippingar, hellulagnir og allt þar á milli — þú
              getur treyst okkur fyrir verkefninu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { name: 'Garðsláttur', slug: 'grasslattur', image: project01 },
    { name: 'Beðahreinsun', slug: 'bedahreinsun', image: project19 },
    { name: 'Trjáklippingar', slug: 'trjaklippingar', image: project03 },
    { name: 'Garðaúðun', slug: 'gardaudun', image: project22 },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-(--color-text-muted) mb-4">
          Sérfræðiþekking
        </p>
        <h2 className="font-display text-3xl font-normal text-(--color-text) md:text-4xl">
          Þjónusta
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/thjonusta/${service.slug}`}
              className="group relative overflow-hidden rounded-sm aspect-3/4"
            >
              <img
                src={service.image}
                alt={service.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <h3 className="font-display text-base font-normal text-white md:text-lg">
                  {service.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/thjonusta"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-(--color-text) border-b border-(--color-text) pb-1 hover:border-(--color-text-muted) transition-colors"
          >
            Sjá alla þjónustu
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
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

function ProjectsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-(--color-text-muted) mb-4">
          Verkefni
        </p>
        <h2 className="font-display text-3xl font-normal text-(--color-text) md:text-4xl">
          Úr verkefnasafninu
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-sm">
              <img
                src={project19}
                alt="Garðverkefni"
                className="w-full h-[300px] md:h-[400px] object-cover"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.15em] text-(--color-text-muted)">
              Höfuðborgarsvæðið — 2024
            </p>
            <p className="mt-1 font-display text-lg text-(--color-text)">
              Garðhirða og beðahreinsun
            </p>
          </div>
          <div>
            <div className="overflow-hidden rounded-sm">
              <img
                src={project01}
                alt="Garðverkefni"
                className="w-full h-[300px] md:h-[400px] object-cover"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.15em] text-(--color-text-muted)">
              Garðabær — 2023
            </p>
            <p className="mt-1 font-display text-lg text-(--color-text)">
              Grassláttur og trjáklippingar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  useEffect(() => {
    document.title = siteData.pages.home.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', siteData.pages.home.description);
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ManifestoSection />
      <ServicesSection />
      <div className="mx-auto max-w-6xl px-6">
        <hr className="border-(--color-border)" />
      </div>
      <ProjectsSection />
      <div className="mx-auto max-w-6xl px-6">
        <hr className="border-(--color-border)" />
      </div>
      <Testimonials />
      <CtaBanner />
    </>
  );
}
