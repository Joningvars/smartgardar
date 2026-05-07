/**
 * SuccessMessage component — displays a confirmation message
 * with a checkmark icon. Uses role="alert" for immediate
 * screen reader announcement.
 */
import { cn } from '../../lib/cn';

type SuccessMessageProps = {
  message: string;
};

export function SuccessMessage({ message }: SuccessMessageProps) {
  return (
    <div
      role="alert"
      className={cn(
        'flex items-center gap-3 rounded-md border border-(--color-success)/30 bg-(--color-success)/5 p-4',
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0 text-(--color-success)"
        aria-hidden="true"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
      <p className="text-sm font-medium text-(--color-success)">{message}</p>
    </div>
  );
}
