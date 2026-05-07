import { useState } from 'react';
import type { ContactFormData, ContactFormErrors } from '../types/contact';
import { validateContactForm } from '../lib/validators';

const initialFormData: ContactFormData = {
  name: '',
  phone: '',
  email: '',
  serviceType: '',
  message: '',
};

/**
 * Custom hook managing contact form state, validation, and submission.
 * Submits to Netlify Forms.
 */
export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      document.getElementById(`field-${firstErrorField}`)?.focus();
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const body = new URLSearchParams({
        'form-name': 'contact',
        ...formData,
      });

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      setIsSubmitted(true);
    } catch {
      setErrors({ name: 'Villa kom upp við sendingu. Reyndu aftur.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(false);
  };

  return {
    formData,
    errors,
    isSubmitted,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
