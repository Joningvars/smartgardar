/**
 * HeroSection — Full-width hero image with a floating card overlay
 * on the bottom-left containing headline, description, and CTA buttons.
 * Matches the Yardzen-style layout on both desktop and mobile.
 */
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero-garden.avif';

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero image — taller */}
      <div className="relative h-[60vh] min-h-[420px] md:h-[80vh]">
        <img
          src={heroImage}
          alt="Fallegur garður í umsjá Smartgarða"
          className="h-full w-full object-cover"
        />

        {/* Dark shader overlay */}
        <div aria-hidden="true" className="absolute inset-0 bg-black/25" />

        {/* Floating card on bottom-left — aligned with navbar edges */}
        <div className="absolute bottom-6 left-4 right-4 md:bottom-10 md:left-6 md:right-auto md:max-w-md">
          <div className="rounded-2xl bg-[#f7f5f0]/95 backdrop-blur-sm p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-[#e8e5df]">
            <h1 className="font-display text-2xl font-medium leading-tight tracking-tight text-[oklch(0.25_0.06_145)] md:text-4xl">
              Fagleg garðaþjónusta sem þú getur treyst
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-(--color-text-muted) md:mt-4 md:text-base">
              Smartgarðar sér um almenna umhirðu garða og grasflata.
              Grassláttur, beðahreinsun, trjáklippingar og almenna garðhirðu.
            </p>

            <div className="mt-5 flex flex-col gap-3 md:mt-6 md:flex-row">
              <Link
                to="/thjonusta"
                className="flex items-center justify-center gap-2 rounded-full bg-(--color-primary) px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-(--color-primary-light) md:px-6 md:py-3 md:text-base"
              >
                Skoða þjónustu
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
              <Link
                to="/hafdu-samband"
                className="flex items-center justify-center rounded-full border border-[#d4d1cb] px-5 py-3 text-sm font-medium text-(--color-text) transition-colors hover:border-(--color-primary) md:px-6 md:py-3 md:text-base"
              >
                Hafðu samband
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
