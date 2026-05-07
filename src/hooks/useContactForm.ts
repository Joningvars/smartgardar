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
 *
 * @returns Form state, error messages, submission status, and handler functions
 */
export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      document.getElementById(`field-${firstErrorField}`)?.focus();
      return;
    }

    setErrors({});
    setIsSubmitted(true);
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
    handleChange,
    handleSubmit,
    resetForm,
  };
}
