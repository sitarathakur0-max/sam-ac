import React from 'react';
import { ShieldCheck, Phone, MapPin } from 'lucide-react';
import { PageId, BUSINESS_INFO } from '../types.ts';

interface PrivacyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#49B8E8]">
          <span>Legal & Transparency</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#14263D] tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#526171]">
          Last updated: October 2026. This policy explains how SAIM AC Service handles customer information received through this website and telephone inquiries.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-[#526171] leading-relaxed">
        {/* Section 1 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#14263D]">
            1. Information We Collect
          </h2>
          <p>
            When you contact SAIM AC Service or submit our online service inquiry form, we collect the details you voluntarily provide:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Your full name</li>
            <li>Contact telephone number</li>
            <li>Your area, neighborhood, or address in Lahore</li>
            <li>The category of service requested and description of your air conditioning issue</li>
            <li>Optional preferred date for appointment coordination</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#14263D]">
            2. How We Use Your Information
          </h2>
          <p>
            The information you submit is used solely to facilitate the provision of air conditioning services:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>To review your cooling problem and communicate with you by phone</li>
            <li>To confirm service appointment timing, technician arrival, and charges</li>
            <li>To navigate to your premises in Lahore for approved on-site diagnostic or repair work</li>
          </ul>
          <p>
            We do not use your contact information for automated unsolicited marketing calls or mass promotional broadcasts.
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#14263D]">
            3. Information Sharing and Disclosure
          </h2>
          <p>
            We do not sell, rent, trade, or distribute customer contact details to third-party marketing companies, advertisers, or lead brokers. Customer details are accessible solely for the purpose of fulfilling the requested service visit.
          </p>
        </div>

        {/* Section 4 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#14263D]">
            4. Data Security & Storage
          </h2>
          <p>
            Inquiries submitted through this site are processed securely through our verified server backend. We implement reasonable precautions to prevent unauthorized access or disclosure of submitted customer information.
          </p>
        </div>

        {/* Section 5 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#14263D]">
            5. Contacting Us About Your Data
          </h2>
          <p>
            If you have questions regarding this privacy policy or wish to update or remove previously submitted contact records, you may reach out to:
          </p>
          <div className="p-4 rounded-xl bg-[#F7FAFC] border border-slate-200 text-[#14263D] space-y-1 mt-2">
            <p className="font-bold">{BUSINESS_INFO.name}</p>
            <p className="text-xs text-[#526171]">{BUSINESS_INFO.address}, {BUSINESS_INFO.city}, Punjab {BUSINESS_INFO.postalCode}, {BUSINESS_INFO.country}</p>
            <p className="text-xs text-[#526171]">Phone: <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold text-[#14263D] hover:underline tabular-nums">{BUSINESS_INFO.phone}</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};
