/**
 * Contact form data representing the fields submitted by a user.
 */
export type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
}

/**
 * Contact form validation errors — partial record of field-level error messages.
 */
export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>
