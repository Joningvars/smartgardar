/**
 * HeroSection — Home page hero with headline, supporting paragraph,
 * and primary CTA linking to the contact page.
 * All content in Icelandic communicating Smartgarðar's value proposition.
 */
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-(--color-surface-alt) py-20 md:py-32">
      {/* Subtle decorative gradient for visual depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,oklch(0.55_0.12_145/0.08),transparent)]"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-(--color-text) md:text-5xl lg:text-6xl">
          Fagleg garðaþjónusta sem þú getur treyst
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-(--color-text-muted) md:text-xl">
          Smartgarðar sér um almenna umhirðu garða og grasflata. Við bjóðum upp
          á grasslátt, beðahreinsun, trjáklippingar og almenna garðhirðu — allt
          til að halda garðinum þínum í toppstandi.
        </p>

        <div className="mt-10">
          <Button variant="primary" size="lg" href="/hafdu-samband">
            Hafðu samband
          </Button>
        </div>
      </div>
    </section>
  );
}
