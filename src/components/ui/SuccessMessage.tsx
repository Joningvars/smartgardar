/**
 * SuccessMessage component — animated confirmation with checkmark.
 * Fades in with a scaling checkmark circle animation.
 */

type SuccessMessageProps = {
  message: string;
};

export function SuccessMessage({ message }: SuccessMessageProps) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center justify-center py-12 animate-[fadeIn_0.4s_ease-out]"
    >
      {/* Animated checkmark circle */}
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-(--color-success)/10 animate-[scaleIn_0.3s_ease-out]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-(--color-success) animate-[drawCheck_0.4s_ease-out_0.2s_both]"
          aria-hidden="true"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>

      <h3 className="mt-6 font-display text-2xl font-medium text-[oklch(0.25_0.06_145)]">
        Takk fyrir!
      </h3>
      <p className="mt-2 text-center text-base text-(--color-text-muted) max-w-sm">
        {message}
      </p>
    </div>
  );
}
