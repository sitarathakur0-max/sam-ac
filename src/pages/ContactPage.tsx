import React from 'react';
import {
  Phone,
  MapPin,
  Facebook,
  Clock,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';
import { PageId, BUSINESS_INFO } from '../types.ts';
import { ContactForm } from '../components/ContactForm.tsx';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16">
      {/* Header Banner */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#49B8E8]">
          <span>Direct Contact</span>
          <span aria-hidden="true" className="text-slate-400">·</span>
          <span className="text-[#526171]">Lahore</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#14263D] tracking-tight">
          Contact & Service Inquiry
        </h1>
        <p className="text-base text-[#526171] leading-relaxed">
          Reach out to SAIM AC Service to discuss cooling faults, split unit installations, seasonal cleaning, or to inquire about location coverage across Lahore.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Form Section */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-[#14263D]">
              Send an Online Service Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-[#526171]">
              Submit your AC problem details below. Your inquiry is recorded directly in our system.
            </p>
          </div>

          <ContactForm />
        </div>

        {/* Right Column: Verified Contact Details & Operational Notes */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Call Card */}
          <div className="bg-[#14263D] text-white rounded-2xl p-6 sm:p-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#49B8E8] flex items-center justify-center text-[#14263D]">
                <Phone className="w-5 h-5 fill-[#14263D]" />
              </div>
              <div>
                <span className="text-xs text-[#49B8E8] uppercase font-semibold tracking-wider">
                  Direct Phone Call
                </span>
                <h3 className="text-lg font-bold">Call For Inquiries</h3>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              For rapid assistance or to check today&apos;s technician availability in your neighborhood, telephone is the direct channel:
            </p>
            <div className="pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center w-full py-3 px-4 rounded-lg bg-[#49B8E8] hover:bg-white text-[#14263D] font-bold text-sm tracking-wide transition-colors tabular-nums"
              >
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>

          {/* Business Listing Details */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-5">
            <h3 className="text-base font-bold text-[#14263D] pb-3 border-b border-slate-100">
              Listing Information
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-[#526171]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#14263D] block mb-0.5">Physical Address</strong>
                  <address className="not-italic leading-relaxed text-slate-600">
                    {BUSINESS_INFO.address},<br />
                    {BUSINESS_INFO.city}, Punjab {BUSINESS_INFO.postalCode},<br />
                    {BUSINESS_INFO.country}
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Facebook className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#14263D] block mb-0.5">Social Media</strong>
                  <a
                    href={BUSINESS_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#14263D] hover:text-[#49B8E8] font-medium transition-colors"
                  >
                    <span>facebook.com/SaimACService</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#14263D] block mb-0.5">Coverage & Scheduling</strong>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    Please call before traveling to the address. Technicians operate on-site throughout Lahore and appointments are coordinated by phone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick FAQ Link */}
          <div className="p-5 rounded-2xl bg-[#E6F4FA] border border-[#49B8E8]/30 flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <h4 className="text-xs sm:text-sm font-bold text-[#14263D]">
                Questions about charges or scheduling?
              </h4>
              <p className="text-[11px] text-[#526171]">
                Check our clear answers on our FAQs page.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('faqs')}
              className="text-xs font-semibold text-[#14263D] hover:text-[#49B8E8] whitespace-nowrap shrink-0 transition-colors"
            >
              View FAQs &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
