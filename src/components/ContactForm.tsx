import React, { useState } from 'react';
import { Phone, CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../types.ts';

interface FormData {
  fullName: string;
  phone: string;
  serviceRequired: string;
  areaLocality: string;
  description: string;
  preferredDate: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  serviceRequired?: string;
  areaLocality?: string;
  description?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    serviceRequired: 'AC Repair',
    areaLocality: '',
    description: '',
    preferredDate: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [successResponse, setSuccessResponse] = useState<{
    inquiryId: string;
    message: string;
  } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const cleanPhone = formData.phone.trim().replace(/[\s-]/g, '');
    if (!cleanPhone || cleanPhone.length < 8) {
      newErrors.phone = 'Please provide a valid contact phone number (e.g., 0300 1234567).';
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please select a service category.';
    }

    if (!formData.areaLocality.trim() || formData.areaLocality.trim().length < 2) {
      newErrors.areaLocality = 'Please state your area or neighborhood in Lahore (e.g., Gulberg, Model Town, Johar Town).';
    }

    if (!formData.description.trim() || formData.description.trim().length < 5) {
      newErrors.description = 'Please provide a brief description of the issue or inquiry (at least 5 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Server could not process your inquiry at this moment.');
      }

      setSuccessResponse({
        inquiryId: data.inquiryId,
        message: data.message,
      });

      // Clear form inputs
      setFormData({
        fullName: '',
        phone: '',
        serviceRequired: 'AC Repair',
        areaLocality: '',
        description: '',
        preferredDate: '',
      });
      setErrors({});
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Unable to submit your inquiry. Please call directly.';
      setServerError(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
      {successResponse ? (
        <div className="py-6 text-center space-y-4" role="status" aria-live="polite">
          <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-[#14263D]">
            Service Inquiry Submitted
          </h3>
          <p className="text-sm text-[#526171] max-w-md mx-auto leading-relaxed">
            {successResponse.message}
          </p>
          <div className="inline-block bg-[#F7FAFC] border border-slate-200 px-4 py-2 rounded-lg text-xs font-mono text-[#14263D]">
            Inquiry Reference: <span className="font-bold">{successResponse.inquiryId}</span>
          </div>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => setSuccessResponse(null)}
              className="text-xs font-semibold text-[#14263D] underline underline-offset-4 hover:text-[#49B8E8]"
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {serverError && (
            <div
              className="p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3"
              role="alert"
            >
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-600" />
              <div>
                <p className="font-semibold">Submission Notice</p>
                <p className="text-xs mt-0.5 text-rose-700">{serverError}</p>
                <p className="text-xs mt-2">
                  You can also call us directly at{' '}
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold underline">
                    {BUSINESS_INFO.phone}
                  </a>
                  .
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-[#14263D] uppercase tracking-wider mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Tariq Mehmood"
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#14263D] placeholder-slate-400 focus:outline-none transition-colors ${
                  errors.fullName
                    ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                    : 'border-slate-300 focus:border-[#49B8E8] bg-white'
                }`}
              />
              {errors.fullName && (
                <p id="fullName-error" className="mt-1 text-xs text-rose-600">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-[#14263D] uppercase tracking-wider mb-1.5">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 0300 9622866"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#14263D] placeholder-slate-400 focus:outline-none transition-colors ${
                  errors.phone
                    ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                    : 'border-slate-300 focus:border-[#49B8E8] bg-white'
                }`}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-xs text-rose-600">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Service Required */}
            <div>
              <label htmlFor="serviceRequired" className="block text-xs font-semibold text-[#14263D] uppercase tracking-wider mb-1.5">
                Service Category <span className="text-rose-500">*</span>
              </label>
              <select
                id="serviceRequired"
                name="serviceRequired"
                value={formData.serviceRequired}
                onChange={handleChange}
                aria-invalid={!!errors.serviceRequired}
                aria-describedby={errors.serviceRequired ? 'service-error' : undefined}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-[#14263D] focus:outline-none focus:border-[#49B8E8] transition-colors"
              >
                <option value="AC Repair">AC Repair</option>
                <option value="AC Installation">AC Installation</option>
                <option value="AC Cleaning and Maintenance">AC Cleaning & Maintenance</option>
                <option value="AC Inspection and Troubleshooting">AC Inspection & Troubleshooting</option>
                <option value="Commercial AC Inquiry">Commercial AC Inquiry</option>
                <option value="Other Service Question">Other Service Question</option>
              </select>
              {errors.serviceRequired && (
                <p id="service-error" className="mt-1 text-xs text-rose-600">
                  {errors.serviceRequired}
                </p>
              )}
            </div>

            {/* Area or Locality */}
            <div>
              <label htmlFor="areaLocality" className="block text-xs font-semibold text-[#14263D] uppercase tracking-wider mb-1.5">
                Lahore Locality / Area <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="areaLocality"
                name="areaLocality"
                value={formData.areaLocality}
                onChange={handleChange}
                placeholder="e.g. Model Town, Mujhid Road, Gulberg"
                aria-invalid={!!errors.areaLocality}
                aria-describedby={errors.areaLocality ? 'area-error' : undefined}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#14263D] placeholder-slate-400 focus:outline-none transition-colors ${
                  errors.areaLocality
                    ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                    : 'border-slate-300 focus:border-[#49B8E8] bg-white'
                }`}
              />
              {errors.areaLocality && (
                <p id="area-error" className="mt-1 text-xs text-rose-600">
                  {errors.areaLocality}
                </p>
              )}
            </div>
          </div>

          {/* Preferred Appointment Date (Optional) */}
          <div>
            <label htmlFor="preferredDate" className="block text-xs font-semibold text-[#14263D] uppercase tracking-wider mb-1.5">
              Preferred Date <span className="text-slate-400 font-normal lowercase">(optional — subject to telephone confirmation)</span>
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full sm:w-1/2 px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-[#14263D] focus:outline-none focus:border-[#49B8E8] transition-colors"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-xs font-semibold text-[#14263D] uppercase tracking-wider mb-1.5">
              Description of Problem or Inquiry <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              placeholder="Please describe the symptoms (e.g. no cooling, water dripping, strange noise, unit type, location)."
              aria-invalid={!!errors.description}
              aria-describedby={errors.description ? 'desc-error' : undefined}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#14263D] placeholder-slate-400 focus:outline-none transition-colors ${
                errors.description
                  ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                  : 'border-slate-300 focus:border-[#49B8E8] bg-white'
              }`}
            />
            {errors.description && (
              <p id="desc-error" className="mt-1 text-xs text-rose-600">
                {errors.description}
              </p>
            )}
          </div>

          {/* Submit button */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#14263D] hover:bg-[#1f3757] active:bg-[#0e1b2c] disabled:opacity-60 transition-colors shadow-xs"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#49B8E8]" />
                  <span>Submitting Inquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#49B8E8]" />
                  <span>Submit Service Inquiry</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2 text-xs text-[#526171]">
              <Phone className="w-3.5 h-3.5 text-[#49B8E8]" />
              <span>Or call directly: </span>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold text-[#14263D] hover:underline tabular-nums">
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
