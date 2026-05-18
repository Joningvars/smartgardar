/* src/pages/HomePage.tsx — Direct, conversion-focused homepage */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/sections/HeroSection';
import { ServiceHighlights } from '../components/sections/ServiceHighlights';
import { Testimonials } from '../components/sections/Testimonials';
import { CtaBanner } from '../components/sections/CtaBanner';
import { siteData } from '../data/site';
import project19 from '../assets/project_images/project-19.jpeg';
import project22 from '../assets/project_images/project-22.jpeg';

function QuoteForm() {
  return (
    <section className="relative z-10 -mt-10 md:-mt-14 px-4 md:px-6">
      <div className="mx-auto max-w-5xl bg-white rounded-xl shadow-xl p-8 md:p-10">
        <h2 className="text-center font-display text-2xl font-bold text-(--color-text) md:text-3xl">
          Fáðu <span className="text-[#6abf40]">ókeypis</span> tilboð
        </h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="relative">
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
              className="absolute left-4 top-1/2 -translate-y-1/2 text-(--color-text-muted)"
              aria-hidden="true"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <input
              type="text"
              name="name"
              placeholder="Nafn"
              required
              className="w-full rounded-lg border border-(--color-border) pl-10 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#6abf40]"
            />
          </div>
          <div className="relative">
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
              className="absolute left-4 top-1/2 -translate-y-1/2 text-(--color-text-muted)"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <input
              type="tel"
              name="phone"
              placeholder="Símanúmer"
              maxLength={7}
              inputMode="numeric"
              className="w-full rounded-lg border border-(--color-border) pl-10 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#6abf40]"
            />
          </div>
          <div className="relative">
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
              className="absolute left-4 top-1/2 -translate-y-1/2 text-(--color-text-muted)"
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <input
              type="email"
              name="email"
              placeholder="Netfang"
              required
              className="w-full rounded-lg border border-(--color-border) pl-10 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#6abf40]"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-[#1a3a0a] px-6 py-3.5 text-sm font-semibold text-white uppercase tracking-wide transition-colors hover:bg-[#6abf40]"
          >
            Senda
          </button>
        </form>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-(--color-text) md:text-4xl">
              Af hverju Smartgarðar?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-(--color-text-muted) md:text-lg">
              Ekki allir hafa tíma eða tæki til að halda garðinum í toppformi.
              Þess vegna erum við til. Smartgarðar og Lóðasláttur sameinuðust og
              saman bjóðum við yfir 20 ára reynslu.
            </p>
            <div className="mt-6 flex gap-8">
              <div>
                <p className="text-3xl font-bold text-[#1a3a0a]">20+</p>
                <p className="text-sm text-(--color-text-muted)">ára reynsla</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1a3a0a]">1000+</p>
                <p className="text-sm text-(--color-text-muted)">verkefni</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1a3a0a]">10+</p>
                <p className="text-sm text-(--color-text-muted)">þjónustur</p>
              </div>
            </div>
            <Link
              to="/um-okkur"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1a3a0a] hover:underline"
            >
              Lesa meira um okkur →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <img
              src={project22}
              alt="Garðverkefni"
              className="rounded-lg h-48 w-full object-cover md:h-64"
              loading="lazy"
            />
            <img
              src={project19}
              alt="Garðverkefni"
              className="rounded-lg h-48 w-full object-cover md:h-64 mt-6"
              loading="lazy"
            />
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
      <QuoteForm />
      <AboutSection />
      <ServiceHighlights />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
