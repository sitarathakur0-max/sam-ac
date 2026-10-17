import React from 'react';
import {
  Settings,
  Phone,
  CheckCircle2,
  AlertCircle,
  Maximize2,
  ShieldCheck,
  Compass,
  ArrowRight
} from 'lucide-react';
import { PageId, BUSINESS_INFO } from '../types.ts';

interface InstallationPageProps {
  onNavigate: (page: PageId) => void;
}

export const InstallationPage: React.FC<InstallationPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16">
      {/* Header Banner */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#49B8E8]">
          <span>Service Category</span>
          <span aria-hidden="true" className="text-slate-400">·</span>
          <span className="text-[#526171]">Lahore</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#14263D] tracking-tight">
          AC Installation Considerations & Planning
        </h1>
        <p className="text-base text-[#526171] leading-relaxed">
          Planning an air-conditioner installation in Lahore requires careful attention to room dimensions, outdoor airflow clearance, structural wall strength, and electrical safety circuits.
        </p>
      </div>

      {/* Visual & Summary Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <h2 className="text-2xl font-bold text-[#14263D] tracking-tight">
            Why Placement Determines Efficiency
          </h2>
          <p className="text-xs sm:text-sm text-[#526171] leading-relaxed">
            Where and how an air conditioning unit is installed directly impacts cooling performance, energy consumption, and equipment lifespan. In Lahore&apos;s climate, outdoor ambient temperatures frequently exceed 40&deg;C. Installing an outdoor condenser in a cramped, unventilated passage creates heat traps that cause compressors to trip repeatedly.
          </p>
          <div className="space-y-3 text-xs sm:text-sm text-[#526171]">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
              <span>Proper indoor elevation allows cold air to circulate evenly throughout the occupied room volume.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
              <span>Correct slope on the condensate drain pipe prevents indoor water back-up and drywall staining.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
              <span>Shorter, well-insulated copper refrigerant line runs preserve cooling capacity and compressor longevity.</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 aspect-4/3">
            <img
              src="/src/assets/images/ac_outdoor_condenser_unit_1792237653973.jpg"
              alt="Outdoor air conditioner condenser unit mounted securely with insulated copper lines"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] text-[#526171] text-center">
            Outdoor condenser bracket mounting requires solid anchor bolts and adequate rear and front air clearance.
          </p>
        </div>
      </div>

      {/* 5 General Installation Considerations */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-[#14263D] tracking-tight">
            Key Installation Factors
          </h2>
          <p className="text-xs sm:text-sm text-[#526171] mt-1">
            Review these general technical considerations prior to finalizing your unit installation location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Factor 1: Room Sizing */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#E6F4FA] flex items-center justify-center text-[#14263D]">
              <Maximize2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#14263D]">Room Sizing & Thermal Load</h3>
            <p className="text-xs text-[#526171] leading-relaxed">
              Ceiling height, floor area, window sunlight exposure, and top-floor roof exposure all influence cooling requirements. Undersized units run constantly without cooling adequately, while oversized units short-cycle without dehumidifying.
            </p>
          </div>

          {/* Factor 2: Indoor Unit Positioning */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#E6F4FA] flex items-center justify-center text-[#14263D]">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#14263D]">Indoor Unit Positioning</h3>
            <p className="text-xs text-[#526171] leading-relaxed">
              The indoor unit requires at least 15 cm of top clearance below the ceiling for unrestricted air intake. It should not be mounted directly over electrical switchboards, television sets, or open heat sources.
            </p>
          </div>

          {/* Factor 3: Outdoor Unit Positioning */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#E6F4FA] flex items-center justify-center text-[#14263D]">
              <Settings className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#14263D]">Outdoor Unit Clearance</h3>
            <p className="text-xs text-[#526171] leading-relaxed">
              The condenser unit must have generous airflow around its intake and discharge faces. Where possible, avoid mounting in direct scorching afternoon sun or tightly enclosed service shafts.
            </p>
          </div>

          {/* Factor 4: Electrical Safety */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#E6F4FA] flex items-center justify-center text-[#14263D]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#14263D]">Electrical Safety Circuits</h3>
            <p className="text-xs text-[#526171] leading-relaxed">
              Air conditioners require properly sized copper wiring (typically 7/29 or equivalent) and an independent circuit breaker or DP switch. Shared power circuits or light gauge wires risk overheating and fire hazards.
            </p>
          </div>

          {/* Factor 5: Piping & Drainage */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#E6F4FA] flex items-center justify-center text-[#14263D]">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#14263D]">Piping & Access Planning</h3>
            <p className="text-xs text-[#526171] leading-relaxed">
              Connecting copper pipes must be flared accurately, vacuumed to eliminate non-condensable air and moisture, and thermally insulated. The outdoor unit must also remain accessible for future maintenance.
            </p>
          </div>

          {/* Discussion Box */}
          <div className="bg-[#14263D] text-white rounded-xl p-6 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="text-base font-bold">Have an Installation in Mind?</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Contact SAIM AC Service to discuss your room layout, unit capacity, and installation requirements in Lahore.
              </p>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#49B8E8] text-[#14263D] text-xs font-bold hover:bg-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call +92 300 9622866</span>
            </a>
          </div>
        </div>
      </div>

      {/* Process & Transparency */}
      <div className="bg-[#F7FAFC] rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-bold text-[#14263D]">
          Installation Requirements & Owner Confirmation
        </h3>
        <p className="text-xs sm:text-sm text-[#526171] leading-relaxed">
          Installation rates, additional copper piping lengths beyond standard factory bundles, outdoor mounting brackets, and specialized masonry drilling differ by site conditions. Please discuss your building layout and requirements with us by phone before scheduling.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14263D] hover:text-[#49B8E8] transition-colors"
          >
            <span>Fill out an installation inquiry form</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
