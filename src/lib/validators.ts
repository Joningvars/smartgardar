import type { ContactFormData, ContactFormErrors } from '../types/contact';

/**
 * Validates that a value is not empty or whitespace-only.
 *
 * @param value - The string to validate
 * @returns Error message in Icelandic or null if valid
 */
export function validateRequired(value: string): string | null {
  if (!value.trim()) {
    return 'Þessi reitur er nauðsynlegur';
  }
  return null;
}

/**
 * Validates that a string is a valid email format.
 *
 * @param email - The email string to validate
 * @returns Error message in Icelandic or null if valid
 */
export function validateEmail(email: string): string | null {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Vinsamlegast sláðu inn gilt netfang';
  }
  return null;
}

/**
 * Validates that a phone number is exactly 7 digits (Icelandic format).
 * Strips spaces and dashes before checking.
 */
export function validatePhone(phone: string): string | null {
  const digits = phone.replace(/[\s\-]/g, '');
  if (digits.length === 0) return null; // phone is optional
  if (!/^\d{7}$/.test(digits)) {
    return 'Símanúmer þarf að vera 7 tölustafir';
  }
  return null;
}

/**
 * Validates the entire contact form. Name, email, and message are required.
 * Phone and serviceType are optional.
 *
 * @param data - The contact form data to validate
 * @returns Object with error messages for invalid fields
 */
export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const nameError = validateRequired(data.name);
  if (nameError) {
    errors.name = nameError;
  }

  if (data.phone) {
    const phoneError = validatePhone(data.phone);
    if (phoneError) {
      errors.phone = phoneError;
    }
  }

  const emailRequiredError = validateRequired(data.email);
  if (emailRequiredError) {
    errors.email = emailRequiredError;
  } else {
    const emailFormatError = validateEmail(data.email);
    if (emailFormatError) {
      errors.email = emailFormatError;
    }
  }

  const messageError = validateRequired(data.message);
  if (messageError) {
    errors.message = messageError;
  }

  return errors;
}
