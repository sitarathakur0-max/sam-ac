import React from 'react';
import {
  Wrench,
  Settings,
  Sparkles,
  Search,
  ArrowRight,
  Phone,
  Info,
  CheckCircle2,
  FileQuestion
} from 'lucide-react';
import { PageId, BUSINESS_INFO } from '../types.ts';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16">
      {/* Header Banner */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#49B8E8]">
          <span>Service Categories</span>
          <span aria-hidden="true" className="text-slate-400">·</span>
          <span className="text-[#526171]">Lahore</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#14263D] tracking-tight">
          Air Conditioning Services & Inquiries
        </h1>
        <p className="text-base text-[#526171] leading-relaxed">
          Explore the air conditioning service categories offered for inquiry in Lahore. We provide practical guidance on what each service involves, what details to share when contacting us, and when professional diagnosis is needed.
        </p>
      </div>

      {/* Notice Banner */}
      <div className="p-4 rounded-xl bg-[#E6F4FA] border border-[#49B8E8]/30 flex items-start gap-3 text-xs sm:text-sm text-[#14263D]">
        <Info className="w-5 h-5 text-[#49B8E8] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          Please note: Service availability, scheduling, and exact pricing vary based on unit type and diagnostic findings. All arrangements must be confirmed directly by telephone with SAIM AC Service.
        </p>
      </div>

      {/* 4 In-Depth Service Categories */}
      <div className="space-y-12">
        {/* Category 1: AC Repair Inquiries */}
        <div id="repair-category" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E6F4FA] flex items-center justify-center text-[#14263D] shrink-0">
                <Wrench className="w-6 h-6 text-[#14263D]" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#14263D]">
                  AC Repair Inquiries
                </h2>
                <p className="text-xs text-slate-500">Diagnostic evaluation and cooling fault troubleshooting</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('repair')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14263D] hover:text-[#49B8E8] transition-colors"
            >
              <span>View full repair guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-[#526171]">
            <div className="space-y-2">
              <h3 className="font-bold text-[#14263D] text-sm">What It Generally Involves</h3>
              <p className="leading-relaxed">
                Checking why an AC is not cooling, identifying electrical faults, checking the compressor capacitor, inspecting refrigerant operating pressure, and tracing indoor water leaks or drainage obstructions.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-[#14263D] text-sm">Details to Provide</h3>
              <ul className="space-y-1 leading-relaxed list-disc list-inside">
                <li>Whether the indoor or outdoor unit is running</li>
                <li>Any clicking, buzzing, or grinding noises</li>
                <li>Presence of ice on copper pipes or indoor coil</li>
                <li>Approximate age and AC model type</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-[#14263D] text-sm">When Professional Assessment Is Needed</h3>
              <p className="leading-relaxed">
                Whenever there is an electrical burning smell, repeated breaker tripping, or total loss of cooling. Attempting DIY repairs with refrigerants or live wiring is hazardous.
              </p>
            </div>
          </div>
        </div>

        {/* Category 2: AC Installation Inquiries */}
        <div id="installation-category" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E6F4FA] flex items-center justify-center text-[#14263D] shrink-0">
                <Settings className="w-6 h-6 text-[#14263D]" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#14263D]">
                  AC Installation Inquiries
                </h2>
                <p className="text-xs text-slate-500">Mounting, pipe layout, and placement planning</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('installation')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14263D] hover:text-[#49B8E8] transition-colors"
            >
              <span>View installation guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-[#526171]">
            <div className="space-y-2">
              <h3 className="font-bold text-[#14263D] text-sm">What It Generally Involves</h3>
              <p className="leading-relaxed">
                Securely fixing indoor wall plates, drilling wall pass-throughs for copper tubing and wiring, securing outdoor brackets, flaring and connecting copper lines, and verifying proper condensate drainage.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-[#14263D] text-sm">Details to Provide</h3>
              <ul className="space-y-1 leading-relaxed list-disc list-inside">
                <li>Room size and floor level (ground floor vs upper roof)</li>
                <li>Distance between indoor and outdoor unit positions</li>
                <li>Availability of dedicated electrical circuit breaker</li>
                <li>New installation or replacing an existing unit</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-[#14263D] text-sm">When Professional Assessment Is Needed</h3>
              <p className="leading-relaxed">
                Proper mounting prevents structural vibration, refrigerant leaks at flares, and poor drainage that damages walls. Professional installation ensures equipment operates safely.
              </p>
            </div>
          </div>
        </div>

        {/* Category 3: AC Cleaning and Maintenance Inquiries */}
        <div id="maintenance-category" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E6F4FA] flex items-center justify-center text-[#14263D] shrink-0">
                <Sparkles className="w-6 h-6 text-[#14263D]" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#14263D]">
                  AC Cleaning & Maintenance Inquiries
                </h2>
                <p className="text-xs text-slate-500">Seasonal servicing, filter cleaning, and coil washing</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('maintenance')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14263D] hover:text-[#49B8E8] transition-colors"
            >
              <span>View maintenance guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-[#526171]">
            <div className="space-y-2">
              <h3 className="font-bold text-[#14263D] text-sm">What It Generally Involves</h3>
              <p className="leading-relaxed">
                Removal and washing of primary air filters, service wash of aluminum evaporator coils using protective water catch kits, clearing the condensate drain tray, and washing outdoor condenser fins.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-[#14263D] text-sm">Details to Provide</h3>
              <ul className="space-y-1 leading-relaxed list-disc list-inside">
                <li>When the unit was last cleaned or serviced</li>
                <li>Whether there are musty odors or reduced airflow</li>
                <li>Indoor accessibility and outdoor unit position</li>
                <li>Number of units needing routine service</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-[#14263D] text-sm">When Professional Assessment Is Needed</h3>
              <p className="leading-relaxed">
                Deep cleaning with water sprays requires electrical isolation and protective covers to safeguard delicate electronic control boards from moisture short-circuits.
              </p>
            </div>
          </div>
        </div>

        {/* Category 4: AC Inspection & Troubleshooting */}
        <div id="troubleshooting-category" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E6F4FA] flex items-center justify-center text-[#14263D] shrink-0">
                <Search className="w-6 h-6 text-[#14263D]" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#14263D]">
                  AC Inspection & Diagnostics
                </h2>
                <p className="text-xs text-slate-500">Unexplained shut-offs, error codes, and operational testing</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14263D] hover:text-[#49B8E8] transition-colors"
            >
              <span>Inquire about inspection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-[#526171]">
            <div className="space-y-2">
              <h3 className="font-bold text-[#14263D] text-sm">What It Generally Involves</h3>
              <p className="leading-relaxed">
                Running the unit while monitoring temperature drop across supply and return louvers, checking voltage stability, noting error blink codes on front displays, and testing thermostat sensor response.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-[#14263D] text-sm">Details to Provide</h3>
              <ul className="space-y-1 leading-relaxed list-disc list-inside">
                <li>Any alphanumeric error codes displayed on panel</li>
                <li>How long the unit operates before shutting down</li>
                <li>Whether the outdoor unit fan spins when turned on</li>
                <li>Whether breaker trips instantly upon starting</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-[#14263D] text-sm">When Professional Assessment Is Needed</h3>
              <p className="leading-relaxed">
                Intermittent faults and electronic sensor issues require multi-meter continuity and resistance checks to accurately identify the malfunctioning component.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="bg-[#14263D] text-white rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-bold tracking-tight">
            Have a Specific Cooling Requirement?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Call SAIM AC Service directly or fill in our service inquiry form.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-bold text-white bg-[#49B8E8]/20 border border-[#49B8E8] hover:bg-[#49B8E8] hover:text-[#14263D] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors"
          >
            <span>Inquiry Form</span>
          </button>
        </div>
      </div>
    </div>
  );
};
