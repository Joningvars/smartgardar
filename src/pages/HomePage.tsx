/* src/pages/HomePage.tsx — Assembles the home page from section components */

import { useEffect } from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { ServiceHighlights } from '../components/sections/ServiceHighlights';
import { WhyUsSection } from '../components/sections/WhyUsSection';
import { ProjectCarousel } from '../components/sections/ProjectCarousel';
import { CtaBanner } from '../components/sections/CtaBanner';
import { Testimonials } from '../components/sections/Testimonials';
import { siteData } from '../data/site';

export function HomePage() {
  useEffect(() => {
    document.title = siteData.pages.home.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', siteData.pages.home.description);
  }, []);

  return (
    <>
      <HeroSection />
      <ServiceHighlights />
      <WhyUsSection />
      <ProjectCarousel />
      <CtaBanner />
      <Testimonials />
    </>
  );
}
