/**
 * HeroSection — Full-screen dark green hero with centered editorial text.
 * Inspired by Signature Paysage style.
 */
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero-garden-tiny.avif';

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Fallegur garður í umsjá Smartgarða"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
        width={1920}
        height={1280}
      />

      {/* Dark green overlay */}
      <div className="absolute inset-0 bg-[#0f2506]/85" aria-hidden="true" />

      {/* Centered content */}
      <div className="relative text-center px-6 py-32 max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-6 md:text-sm">
          Garðaþjónusta síðan 2005
        </p>

        <h1 className="font-display text-4xl font-normal leading-tight text-white md:text-6xl lg:text-7xl">
          Fagleg garðaþjónusta{' '}
          <span className="italic text-[#dbfeb8]">sem þú getur treyst.</span>
        </h1>

        <div className="mt-10">
          <Link
            to="/hafdu-samband"
            className="inline-flex items-center gap-2 border border-white/30 px-8 py-3 text-sm uppercase tracking-wider text-white transition-colors hover:bg-white/10"
          >
            Hafðu samband
          </Link>
        </div>

        {/* Decorative line */}
        <div
          className="mt-12 mx-auto w-px h-12 bg-white/30"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
