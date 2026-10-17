import React from 'react';
import {
  Wrench,
  AlertTriangle,
  Phone,
  CheckCircle,
  HelpCircle,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { PageId, BUSINESS_INFO } from '../types.ts';

interface RepairPageProps {
  onNavigate: (page: PageId) => void;
}

export const RepairPage: React.FC<RepairPageProps> = ({ onNavigate }) => {
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
          AC Repair & Diagnostics
        </h1>
        <p className="text-base text-[#526171] leading-relaxed">
          Understanding the symptoms of air-conditioning failures in Lahore. Contact SAIM AC Service to discuss your unit&apos;s behavior and arrange an assessment.
        </p>
      </div>

      {/* Safety Warning Box */}
      <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3.5">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm space-y-1">
          <p className="font-bold">Important Safety Notice Regarding AC Repairs</p>
          <p className="text-amber-800 leading-relaxed">
            Air conditioning systems operate with high-voltage mains power, high-pressure refrigerants, and rotating fan blades. Never attempt to open electrical cover boxes, probe capacitors, or puncture refrigerant piping. Always disconnect power at the main isolator if you detect electrical sparks or smoke.
          </p>
        </div>
      </div>

      {/* 4 Core Fault Symptom Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Symptom Section 1: Cooling Loss */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-[#14263D]">
            1. Loss of Cooling or Ineffective Air
          </h2>
          <p className="text-xs sm:text-sm text-[#526171] leading-relaxed">
            When the air conditioner blows ambient room-temperature air rather than chilled air, typical culprits include:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-[#526171]">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#49B8E8] mt-2 shrink-0" />
              <span>Severely choked air filters restricting evaporator heat exchange.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#49B8E8] mt-2 shrink-0" />
              <span>Outdoor condenser coil coated in dust, preventing heat expulsion into the outside air.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#49B8E8] mt-2 shrink-0" />
              <span>Refrigerant pressure imbalance due to slow micro-leaks in connecting copper flares.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#49B8E8] mt-2 shrink-0" />
              <span>Failed run capacitor preventing the compressor from starting while the fan continues spinning.</span>
            </li>
          </ul>
        </div>

        {/* Symptom Section 2: Water Leakage & Unwanted Sounds */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-[#14263D]">
            2. Water Dripping & Strange Operational Sounds
          </h2>
          <p className="text-xs sm:text-sm text-[#526171] leading-relaxed">
            Water dripping indoors or metallic noises should be addressed promptly to prevent interior water damage:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-[#526171]">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#49B8E8] mt-2 shrink-0" />
              <span><strong>Drain Blockage:</strong> Algae or dust sludge collecting in the internal condensate tray and flexible drain pipe.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#49B8E8] mt-2 shrink-0" />
              <span><strong>Coil Icing:</strong> Low refrigerant or blocked airflow causes the evaporator to freeze; when the ice melts, water overflows the drain pan.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#49B8E8] mt-2 shrink-0" />
              <span><strong>Vibration / Clanking:</strong> Unbalanced indoor blower wheel, loose bracket fasteners, or debris in the outdoor fan cage.</span>
            </li>
          </ul>
        </div>

        {/* Symptom Section 3: Weak Airflow */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-[#14263D]">
            3. Weak Air Flow From Louvers
          </h2>
          <p className="text-xs sm:text-sm text-[#526171] leading-relaxed">
            If cold air only trickles out despite maximum fan speed selection on the remote:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-[#526171]">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#49B8E8] mt-2 shrink-0" />
              <span>Heavy lint and dust accumulation adhering directly to the cylindrical blower fan blades.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#49B8E8] mt-2 shrink-0" />
              <span>Deteriorating fan motor bearings or a degraded fan motor capacitor reducing rotation RPM.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#49B8E8] mt-2 shrink-0" />
              <span>Indoor evaporator coil fins bent or clogged with dirt cakes.</span>
            </li>
          </ul>
        </div>

        {/* Symptom Section 4: Startup Failures */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-[#14263D]">
            4. Startup & Power Failures
          </h2>
          <p className="text-xs sm:text-sm text-[#526171] leading-relaxed">
            When the air conditioner does not power on or trips the circuit breaker immediately:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-[#526171]">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#49B8E8] mt-2 shrink-0" />
              <span>Supply voltage drop or faulty isolator switch connections common during peak Lahore summer loads.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#49B8E8] mt-2 shrink-0" />
              <span>Blown internal fuse on the indoor printed circuit board (PCB) following a power spike.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#49B8E8] mt-2 shrink-0" />
              <span>Short-circuit or grounded compressor winding causing the main breaker to trip instantly.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Checklist: Information to Share Before Calling */}
      <div className="bg-[#F7FAFC] rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-[#14263D]">
            What Information to Share When You Call
          </h2>
          <p className="text-xs sm:text-sm text-[#526171] mt-1">
            Having these simple details ready helps us understand the situation before dispatching an on-site visit:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-[#526171]">
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <span className="font-bold text-[#14263D] block mb-1">1. Unit Type</span>
            Wall-mounted split AC, DC inverter, floor standing, or window unit.
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <span className="font-bold text-[#14263D] block mb-1">2. Core Symptom</span>
            No cooling, water leaking inside, noise, or unit won&apos;t turn on.
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <span className="font-bold text-[#14263D] block mb-1">3. Error Indicators</span>
            Any flashing LED lights, beeping, or digital display error codes (e.g. E1, F3).
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <span className="font-bold text-[#14263D] block mb-1">4. Locality</span>
            Your neighborhood in Lahore to check technician travel and availability.
          </div>
        </div>
      </div>

      {/* Why Professional Inspection Is Necessary */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold text-[#14263D]">
          Why On-Site Inspection Is Usually Necessary
        </h2>
        <p className="text-xs sm:text-sm text-[#526171] leading-relaxed">
          Air conditioners are closed thermodynamic circuits. A symptom such as &ldquo;poor cooling&rdquo; can be caused by seven different faults—from an electrical capacitor losing rating capacitance to clogged condenser fins or refrigerant charge loss. Accurate diagnosis requires physically attaching pressure manifold gauges, measuring electrical current draw with clamp meters, and testing coil temperature differentials.
        </p>
        <p className="text-xs text-slate-500 italic">
          * Note: Service capabilities, replacement parts, and specific brand diagnostics must be discussed directly with the business.
        </p>
      </div>

      {/* CTA Box */}
      <div className="bg-[#14263D] text-white rounded-2xl p-8 text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
          Discuss Your AC Repair Requirement
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          Contact SAIM AC Service to describe your equipment problem and inquire about repair assessment in Lahore.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-bold text-[#14263D] bg-[#49B8E8] hover:bg-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors"
          >
            <span>Inquiry Form</span>
          </button>
        </div>
      </div>
    </div>
  );
};
