/* src/components/ui/PageHeader.tsx — Page header with title and optional subtitle */

type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-(--color-surface-alt) pt-28 pb-12 md:pt-36 md:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-medium text-[oklch(0.25_0.06_145)] md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-(--color-text-muted)">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
