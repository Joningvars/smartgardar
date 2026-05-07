/* src/pages/NotFoundPage.tsx — Friendly 404 page with Icelandic copy */

import { useEffect } from 'react';
import { Button } from '../components/ui/Button';

export function NotFoundPage() {
  useEffect(() => {
    document.title = 'Síða finnst ekki — Smartgarðar';
  }, []);

  return (
    <section className="flex flex-col items-center justify-center text-center py-24 md:py-32 px-4">
      <p className="text-7xl md:text-8xl font-bold text-(--color-text-muted) opacity-40">
        404
      </p>
      <h1 className="mt-4 text-3xl md:text-4xl font-display text-(--color-text)">
        Síða finnst ekki
      </h1>
      <p className="mt-4 max-w-md text-lg text-(--color-text-muted)">
        Því miður finnst þessi síða ekki. Hún gæti hafa verið fjarlægð eða
        slóðin er röng.
      </p>
      <Button variant="primary" href="/" className="mt-8">
        Fara á forsíðu
      </Button>
    </section>
  );
}
