/* src/pages/ContactPage.tsx — Contact page with form */

import { useEffect } from 'react';
import { useContactForm } from '../hooks/useContactForm';
import { FormField } from '../components/ui/FormField';
import { SuccessMessage } from '../components/ui/SuccessMessage';
import { Button } from '../components/ui/Button';
import { services } from '../data/services';
import { siteData } from '../data/site';

const serviceOptions = services.map((service) => ({
  value: service.id,
  label: service.name,
}));

export function ContactPage() {
  useEffect(() => {
    document.title = siteData.pages.contact.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', siteData.pages.contact.description);
    }
  }, []);

  const { formData, errors, isSubmitted, handleChange, handleSubmit } =
    useContactForm();

  return (
    <section className="px-4 pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-(--color-text) md:text-4xl">
          Hafðu samband
        </h1>
        <p className="mt-4 text-lg text-(--color-text-muted)">
          Sendu okkur fyrirspurn og við svörum eins fljótt og auðið er. Við erum
          alltaf tilbúin að aðstoða þig með garðinn þinn.
        </p>

        <div className="mt-8 flex flex-col gap-2 text-(--color-text)">
          <p>
            <span className="font-medium">Sími:</span> {siteData.phone}
          </p>
          <p>
            <span className="font-medium">Netfang:</span> {siteData.email}
          </p>
        </div>

        {isSubmitted ? (
          <div className="mt-10">
            <SuccessMessage message="Takk fyrir fyrirspurnina! Við munum hafa samband eins fljótt og auðið er." />
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="mt-10"
            noValidate
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <input
              type="hidden"
              name="subject"
              value="Ný fyrirspurn frá smartgardar.is"
            />
            <FormField
              name="name"
              label="Nafn"
              type="text"
              required
              value={formData.name}
              error={errors.name}
              onChange={(value) => handleChange('name', value)}
            />
            <FormField
              name="phone"
              label="Símanúmer"
              type="tel"
              value={formData.phone}
              error={errors.phone}
              onChange={(value) => handleChange('phone', value)}
            />
            <FormField
              name="email"
              label="Netfang"
              type="email"
              required
              value={formData.email}
              error={errors.email}
              onChange={(value) => handleChange('email', value)}
            />
            <FormField
              name="serviceType"
              label="Þjónusta"
              type="select"
              options={serviceOptions}
              value={formData.serviceType}
              error={errors.serviceType}
              onChange={(value) => handleChange('serviceType', value)}
            />
            <FormField
              name="message"
              label="Skilaboð"
              type="textarea"
              required
              value={formData.message}
              error={errors.message}
              onChange={(value) => handleChange('message', value)}
            />
            <div className="mt-6">
              <Button type="submit" variant="primary" size="lg">
                Senda fyrirspurn
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
