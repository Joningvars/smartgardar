/**
 * HeroSection — Full-width image with layered diagonal green stripes.
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

      {/* Layered diagonal green stripes */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="mainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f2506" />
              <stop offset="100%" stopColor="#1a3a0a" />
            </linearGradient>
            <linearGradient id="accentGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8dd35f" />
              <stop offset="100%" stopColor="#4a9a20" />
            </linearGradient>
          </defs>

          {/* Main dark shape with gradient — no texture */}
          <polygon
            points="0,0 520,0 700,900 0,900"
            fill="url(#mainGrad)"
            fillOpacity="0.92"
          />

          {/* Thick bright green accent stripe */}
          <polygon
            points="510,0 555,0 735,900 690,900"
            fill="url(#accentGrad)"
            fillOpacity="0.85"
          />

          {/* Second thinner accent stripe */}
          <polygon
            points="560,0 572,0 752,900 740,900"
            fill="#6abf40"
            fillOpacity="0.4"
          />
        </svg>
      </div>

      {/* Left-aligned content */}
      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-lg">
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
              Grassláttur • Beðahreinsun • Trjáklippingar
            </p>
            <Link
              to="/hafdu-samband"
              className="mt-6 inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#1a3a0a] uppercase tracking-wide transition-all hover:bg-[#6abf40] hover:text-white md:px-8 md:py-4 md:text-base"
            >
              Fáðu ókeypis tilboð
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
