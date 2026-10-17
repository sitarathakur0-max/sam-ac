import React from 'react';
import {
  MapPin,
  Phone,
  Facebook,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { PageId, BUSINESS_INFO } from '../types.ts';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16">
      {/* Header Banner */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#49B8E8]">
          <span>Business Overview</span>
          <span aria-hidden="true" className="text-slate-400">·</span>
          <span className="text-[#526171]">Lahore</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#14263D] tracking-tight">
          About SAIM AC Service
        </h1>
        <p className="text-base text-[#526171] leading-relaxed">
          Providing air-conditioning repair, installation, and routine maintenance service inquiries to residents and businesses in Lahore, Pakistan.
        </p>
      </div>

      {/* Main Narrative Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <h2 className="text-2xl font-bold text-[#14263D] tracking-tight">
            Direct & Practical Air Conditioning Services
          </h2>
          <p className="text-xs sm:text-sm text-[#526171] leading-relaxed">
            SAIM AC Service operates as a local air conditioning service provider based in Lahore. During the harsh summer season, functional air conditioning is essential for homes, workplaces, and retail locations across the city.
          </p>
          <p className="text-xs sm:text-sm text-[#526171] leading-relaxed">
            Our approach emphasizes direct communication: customers speak directly with us about their cooling difficulties, describe observed symptoms, and coordinate service visits transparently.
          </p>
          <div className="pt-2 space-y-3 text-xs sm:text-sm text-[#526171]">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
              <span><strong>Focused Service Scope:</strong> Dedicated to cooling repair, split AC installation, seasonal filter washing, and cooling performance diagnostics.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
              <span><strong>Direct Discussion:</strong> Clear telephone communication regarding symptoms, potential diagnostic steps, and scheduling availability.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
              <span><strong>Lahore Base:</strong> Centrally operating from Mian Fazal Haq Colony, Mujhid Road, Ideal Garden Housing Scheme.</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 aspect-4/3">
            <img
              src="/src/assets/images/ac_workshop_tools_equipment_1792237654397.jpg"
              alt="Air conditioning technical diagnostic tools and equipment"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] text-[#526171] text-center">
            Standard HVAC equipment: manifold pressure gauges, vacuum pumps, flaring tools, and digital testing meters.
          </p>
        </div>
      </div>

      {/* Verified Business Profile Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-[#14263D]">
            Official Business Listing Details
          </h2>
          <p className="text-xs sm:text-sm text-[#526171] mt-1">
            Confirmed contact and location information for SAIM AC Service:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-sm text-[#526171]">
          <div className="p-4 rounded-xl bg-[#F7FAFC] border border-slate-200 space-y-2">
            <span className="text-xs font-semibold text-[#14263D] uppercase tracking-wider block">
              Business Entity
            </span>
            <p className="font-bold text-[#14263D] text-base">{BUSINESS_INFO.name}</p>
            <p className="text-xs text-slate-500">Air conditioning repair, installation, and maintenance</p>
          </div>

          <div className="p-4 rounded-xl bg-[#F7FAFC] border border-slate-200 space-y-2">
            <span className="text-xs font-semibold text-[#14263D] uppercase tracking-wider block">
              Direct Phone
            </span>
            <p className="font-bold text-[#14263D] text-base tabular-nums">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-[#49B8E8] transition-colors">
                {BUSINESS_INFO.phone}
              </a>
            </p>
            <p className="text-xs text-slate-500">Call to discuss problems, charges, and appointments</p>
          </div>

          <div className="p-4 rounded-xl bg-[#F7FAFC] border border-slate-200 space-y-2">
            <span className="text-xs font-semibold text-[#14263D] uppercase tracking-wider block">
              Social Presence
            </span>
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-[#14263D] hover:text-[#49B8E8] transition-colors text-base"
            >
              <Facebook className="w-4 h-4 text-[#49B8E8]" />
              <span>Facebook Page</span>
            </a>
            <p className="text-xs text-slate-500">Official Facebook page for SAIM AC Service</p>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100 flex items-start gap-3 text-xs sm:text-sm text-[#526171]">
          <MapPin className="w-5 h-5 text-[#49B8E8] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#14263D]">Registered Premises Address:</strong>
            <p className="mt-0.5 text-slate-600 leading-relaxed">
              {BUSINESS_INFO.address}, {BUSINESS_INFO.city}, Punjab {BUSINESS_INFO.postalCode}, {BUSINESS_INFO.country}.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#14263D] text-white rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-bold tracking-tight">
            Discuss Your AC Requirements
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Reach out by phone or submit an inquiry to arrange an assessment.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold text-[#14263D] bg-[#49B8E8] hover:bg-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call +92 300 9622866</span>
          </a>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors"
          >
            <span>Inquiry Form</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
