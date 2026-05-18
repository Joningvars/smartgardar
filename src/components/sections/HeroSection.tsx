/**
 * HeroSection — Full-width image with bold left-aligned text overlay.
 * Direct, conversion-focused style.
 */
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero-garden-tiny.avif';

export function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] min-h-[450px] md:h-[75vh] overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Fallegur garður í umsjá Smartgarða"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Left-aligned content */}
      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-xl">
            <p className="text-sm text-white/80 md:text-base">
              Alhliða garðaþjónusta á höfuðborgarsvæðinu
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-white md:text-6xl">
              Fagleg
              <br />
              garðaþjónusta
              <br />
              <span className="text-[#6abf40]">sem skilar árangri.</span>
            </h1>
            <p className="mt-4 text-base text-white/70 md:text-lg">
              Grassláttur • Beðahreinsun • Trjáklippingar • Yfir 20 ára reynsla
            </p>
            <Link
              to="/hafdu-samband"
              className="mt-6 inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#1a3a0a] uppercase tracking-wide transition-colors hover:bg-[#6abf40] hover:text-white md:px-8 md:py-4 md:text-base"
            >
              Fáðu ókeypis tilboð
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
