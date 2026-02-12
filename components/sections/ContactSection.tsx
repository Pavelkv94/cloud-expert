'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import Button from '@/components/ui/Button';

interface FormErrors {
  email?: string;
  consent?: string;
}

export default function ContactSection() {
  const t = useTranslations('contact');
  const tf = useTranslations('contact.form');
  const ti = useTranslations('contact.info');

  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [consent1, setConsent1] = useState(false);
  const [consent2, setConsent2] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = tf('emailRequired');
    }
    if (!consent1 || !consent2) {
      newErrors.consent = tf('consentRequired');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t('heading')}</h2>
          <p className="text-lg text-gray-600">{t('subheading')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {submitted ? (
              <div className="flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{tf('success')}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    {tf('email')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={tf('emailPlaceholder')}
                    className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="contact-comment" className="block text-sm font-medium text-gray-700 mb-1.5">
                    {tf('comment')}
                  </label>
                  <textarea
                    id="contact-comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder={tf('commentPlaceholder')}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  />
                </div>

                <div className="space-y-3 pt-1">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent1}
                      onChange={(e) => setConsent1(e.target.checked)}
                      className="mt-0.5 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 flex-shrink-0 cursor-pointer"
                    />
                    <span className="text-xs text-gray-600 leading-relaxed">
                      {tf('consent1')}{' '}
                      <a href="/docs/privacy-policy.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        {tf('privacyPolicy')}
                      </a>
                      {' '}и{' '}
                      <a href="/docs/data-processing.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        {tf('dataProcessing')}
                      </a>.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent2}
                      onChange={(e) => setConsent2(e.target.checked)}
                      className="mt-0.5 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 flex-shrink-0 cursor-pointer"
                    />
                    <span className="text-xs text-gray-600 leading-relaxed">{tf('consent2')}</span>
                  </label>

                  {errors.consent && <p className="text-red-500 text-xs">{errors.consent}</p>}
                </div>

                <Button type="submit" variant="primary" className="w-full justify-center">
                  {tf('submit')}
                </Button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-8 lg:pl-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MessageSquare size={18} className="text-blue-600 flex-shrink-0" />
                {ti('consultationLabel')}
              </h3>
              <div className="space-y-3">
                <a href={`mailto:${ti('email1')}`} className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 transition-colors group">
                  <Mail size={16} className="text-gray-400 group-hover:text-blue-500 flex-shrink-0" />
                  {ti('email1')}
                </a>
                <a href={`tel:${ti('phone1').replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 transition-colors group">
                  <Phone size={16} className="text-gray-400 group-hover:text-blue-500 flex-shrink-0" />
                  {ti('phone1')}
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MessageSquare size={18} className="text-blue-600 flex-shrink-0" />
                {ti('supportLabel')}
              </h3>
              <div className="space-y-3">
                <a href={`mailto:${ti('email2')}`} className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 transition-colors group">
                  <Mail size={16} className="text-gray-400 group-hover:text-blue-500 flex-shrink-0" />
                  {ti('email2')}
                </a>
                <a href={`tel:${ti('phone2').replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 transition-colors group">
                  <Phone size={16} className="text-gray-400 group-hover:text-blue-500 flex-shrink-0" />
                  {ti('phone2')}
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">{ti('socialLabel')}</h3>
              <div className="flex gap-3">
                <a href="#" aria-label="Telegram" className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-150">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.16 14.22l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.656.366z" />
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors duration-150">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
