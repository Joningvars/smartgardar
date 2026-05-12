/* src/components/ui/LeafDecor.tsx — Decorative botanical SVG elements */

import { cn } from '../../lib/cn';

type LeafDecorProps = {
  variant?: 'leaf-1' | 'leaf-2' | 'branch';
  className?: string;
};

export function LeafDecor({ variant = 'leaf-1', className }: LeafDecorProps) {
  if (variant === 'leaf-1') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 180"
        fill="none"
        className={cn('text-[#1a3a0a]/8', className)}
        aria-hidden="true"
      >
        <path
          d="M60 10c-20 30-50 60-45 100 5 40 35 60 45 60s40-20 45-60c5-40-25-70-45-100z"
          fill="currentColor"
        />
        <path
          d="M60 30v140M60 60c-15 10-25 25-30 40M60 80c15 10 25 25 30 40M60 100c-10 8-18 18-22 30M60 120c10 8 18 18 22 30"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />
      </svg>
    );
  }

  if (variant === 'leaf-2') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 160"
        fill="none"
        className={cn('text-[#1a3a0a]/6', className)}
        aria-hidden="true"
      >
        <path
          d="M50 5c-30 20-45 50-40 90 3 25 20 45 40 55 20-10 37-30 40-55 5-40-10-70-40-90z"
          fill="currentColor"
        />
        <path
          d="M50 20v130M50 50c-12 8-20 20-25 35M50 70c12 8 20 20 25 35"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeOpacity="0.3"
        />
      </svg>
    );
  }

  // branch variant
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 80"
      fill="none"
      className={cn('text-[#1a3a0a]/6', className)}
      aria-hidden="true"
    >
      <path
        d="M10 40c30-5 60 0 90-10s50-20 90-15"
        stroke="currentColor"
        strokeWidth="2"
      />
      <ellipse
        cx="50"
        cy="30"
        rx="12"
        ry="18"
        fill="currentColor"
        transform="rotate(-20 50 30)"
      />
      <ellipse
        cx="90"
        cy="22"
        rx="10"
        ry="15"
        fill="currentColor"
        transform="rotate(10 90 22)"
      />
      <ellipse
        cx="130"
        cy="28"
        rx="11"
        ry="16"
        fill="currentColor"
        transform="rotate(-10 130 28)"
      />
      <ellipse
        cx="170"
        cy="20"
        rx="9"
        ry="14"
        fill="currentColor"
        transform="rotate(15 170 20)"
      />
    </svg>
  );
}
