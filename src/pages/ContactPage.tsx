/* src/pages/ContactPage.tsx — Contact page matching new design */

import { useEffect } from 'react';
import { useContactForm } from '../hooks/useContactForm';
import { FormField } from '../components/ui/FormField';
import { SuccessMessage } from '../components/ui/SuccessMessage';
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
    if (meta) meta.setAttribute('content', siteData.pages.contact.description);
  }, []);

  const {
    formData,
    errors,
    isSubmitted,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <>
      {/* Page header */}
      <section className="bg-[#1a3a0a] pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-display text-3xl font-bold text-white md:text-5xl">
            Hafðu samband
          </h1>
          <p className="mt-3 text-base text-white/70 md:text-lg max-w-2xl">
            Sendu okkur fyrirspurn og við svörum eins fljótt og auðið er.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Left: contact info */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-xl font-bold text-(--color-text) md:text-2xl">
                Hafa samband
              </h2>
              <p className="mt-3 text-(--color-text-muted)">
                Við erum alltaf tilbúin að aðstoða þig með garðinn þinn.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6abf40]/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#6abf40]"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-(--color-text-muted)">Sími</p>
                    <a
                      href="tel:764-6868"
                      className="font-semibold text-(--color-text)"
                    >
                      764-6868
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6abf40]/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#6abf40]"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-(--color-text-muted)">Netfang</p>
                    <a
                      href="mailto:smartgardar@smartgardar.is"
                      className="font-semibold text-(--color-text)"
                    >
                      smartgardar@smartgardar.is
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              {isSubmitted ? (
                <SuccessMessage message="Við munum hafa samband eins fljótt og auðið er." />
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-xl border border-(--color-border) p-6 md:p-8"
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
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-lg bg-[#1a3a0a] px-6 py-3.5 text-sm font-semibold text-white uppercase tracking-wide transition-colors hover:bg-[#6abf40] disabled:opacity-60 md:w-auto"
                    >
                      {isSubmitting ? 'Sendi...' : 'Senda fyrirspurn'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
