/**
 * HeroSection — Full-width hero image with content card.
 * Mobile: card sits below image with slight overlap, centered text, full-width buttons.
 * Desktop: floating card overlay on bottom-left of the image.
 */
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero-garden.avif';

export function HeroSection() {
  return (
    <section className="relative w-full">
      {/* Hero image */}
      <div className="relative h-[45vh] min-h-[280px] md:h-[82vh] md:min-h-[550px]">
        <img
          src={heroImage}
          alt="Fallegur garður í umsjá Smartgarða"
          className="h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div aria-hidden="true" className="absolute inset-0 bg-black/20" />

        {/* Desktop only: floating card */}
        <div className="hidden md:block absolute bottom-10 left-6 max-w-md">
          <div className="rounded-2xl bg-white/80 backdrop-blur-3xl shadow-md p-8">
            <h1 className="font-display text-4xl font-medium leading-tight tracking-tight text-[oklch(0.25_0.06_145)]">
              Fagleg garðaþjónusta sem þú getur treyst
            </h1>

            <p className="mt-4 text-base leading-relaxed text-(--color-text-muted)">
              Smartgarðar sér um almenna umhirðu garða og grasflata.
              Grassláttur, beðahreinsun, trjáklippingar og almenn garðhirða.
            </p>

            <div className="mt-6 flex flex-row gap-3">
              <Link
                to="/thjonusta"
                className="flex items-center justify-center gap-2 rounded-full bg-(--color-primary) px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-(--color-primary-light)"
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
                className="flex items-center justify-center rounded-full border border-[#8a8578] px-6 py-3 text-base font-medium text-(--color-text) transition-colors hover:border-(--color-primary)"
              >
                Hafðu samband
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile only: card below image with overlap */}
      <div className="md:hidden -mt-20 relative z-10">
        <div className="rounded-2xl bg-white/80 backdrop-blur-3xl shadow-[inset_0_4px_12px_rgba(0,0,0,0.06)] px-6 py-8 text-center">
          <h1 className="font-display text-3xl font-medium leading-tight tracking-tight text-[oklch(0.25_0.06_145)]">
            Fagleg garðaþjónusta sem þú getur treyst
          </h1>

          <p className="mt-4 text-base leading-relaxed text-(--color-text)">
            Smartgarðar sér um almenna umhirðu garða og grasflata. Grassláttur,
            beðahreinsun, trjáklippingar og almenn garðhirða.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              to="/thjonusta"
              className="flex items-center justify-center gap-2 rounded-full bg-(--color-primary) px-5 py-3.5 text-base font-semibold text-white transition-colors hover:bg-(--color-primary-light)"
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
              className="flex items-center justify-center rounded-full border border-[#8a8578] px-5 py-3.5 text-base font-medium text-(--color-text) transition-colors hover:border-(--color-primary)"
            >
              Hafðu samband
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
