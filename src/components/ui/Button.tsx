/**
 * Reusable Button component with variant and size support.
 * Renders as a React Router <Link> when `href` is provided,
 * otherwise renders as a native <button> element.
 */
import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const variantStyles: Record<ButtonProps['variant'], string> = {
  primary:
    'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)]',
  secondary:
    'bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border)] hover:bg-[var(--color-surface-alt)]',
  outline:
    'bg-transparent text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]',
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-7 py-3.5 text-lg',
};

const baseStyles =
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2';

export function Button({
  variant,
  size = 'md',
  href,
  type = 'button',
  children,
  className,
  onClick,
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    return (
      <Link to={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
