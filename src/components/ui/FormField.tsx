/**
 * FormField component — label + input/textarea/select + error message.
 * Provides accessible form controls with proper label association,
 * required field indicators, and error message linking via aria-describedby.
 */
import { cn } from '../../lib/cn';

type FormFieldProps = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required?: boolean;
  value: string;
  error?: string;
  options?: Array<{ value: string; label: string }>;
  onChange: (value: string) => void;
};

const inputStyles =
  'w-full rounded-md border border-(--color-border) px-3 py-2 bg-white text-(--color-text) focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-transparent';

const errorInputStyles = 'border-(--color-error)';

export function FormField({
  name,
  label,
  type,
  required,
  value,
  error,
  options,
  onChange,
}: FormFieldProps) {
  const id = `field-${name}`;
  const errorId = `${name}-error`;

  const sharedProps = {
    id,
    name,
    value,
    'aria-required': required ? ('true' as const) : undefined,
    'aria-describedby': error ? errorId : undefined,
    className: cn(inputStyles, error && errorInputStyles),
    onChange: (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => onChange(e.target.value),
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-(--color-text) mb-1"
      >
        {label}
        {required && (
          <span className="text-(--color-error) ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {type === 'textarea' && <textarea {...sharedProps} rows={4} />}

      {type === 'select' && (
        <select {...sharedProps}>
          <option value="">—</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {type !== 'textarea' && type !== 'select' && (
        <input
          {...sharedProps}
          type={type}
          maxLength={type === 'tel' ? 7 : undefined}
          pattern={type === 'tel' ? '[0-9]*' : undefined}
          inputMode={type === 'tel' ? 'numeric' : undefined}
          placeholder={type === 'tel' ? '0000000' : undefined}
          onInput={
            type === 'tel'
              ? (e: React.FormEvent<HTMLInputElement>) => {
                  const input = e.currentTarget;
                  input.value = input.value.replace(/\D/g, '').slice(0, 7);
                  onChange(input.value);
                }
              : undefined
          }
        />
      )}

      {error && (
        <p
          id={errorId}
          role="alert"
          className="text-sm text-(--color-error) mt-1"
        >
          {error}
        </p>
      )}
    </div>
  );
}
