import React from 'react';
import {
  Sparkles,
  Phone,
  Droplets,
  Volume2,
  Wind,
  AlertTriangle,
  Calendar,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { PageId, BUSINESS_INFO } from '../types.ts';

interface MaintenancePageProps {
  onNavigate: (page: PageId) => void;
}

export const MaintenancePage: React.FC<MaintenancePageProps> = ({ onNavigate }) => {
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
          AC Cleaning & Preventive Maintenance
        </h1>
        <p className="text-base text-[#526171] leading-relaxed">
          Regular cleaning and seasonal maintenance help preserve air quality, airflow, and cooling efficiency in Lahore&apos;s dusty summer environment.
        </p>
      </div>

      {/* Visual & Core Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 aspect-4/3">
            <img
              src="/src/assets/images/ac_coil_filter_cleaning_1792237652347.jpg"
              alt="Air conditioner indoor unit being cleaned with protective catchment bag"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] text-[#526171] text-center">
            Service washing uses protective covers to clean indoor coils safely without water runoff on walls.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-5">
          <h2 className="text-2xl font-bold text-[#14263D] tracking-tight">
            Why Filters & Coils Require Periodic Cleaning
          </h2>
          <p className="text-xs sm:text-sm text-[#526171] leading-relaxed">
            The air conditioner indoor unit recirculates room air continuously across fine aluminum cooling fins. Over weeks of daily operation, airborne dust, fabric fibers, and microscopic particles form an insulating blanket across the evaporator coil.
          </p>
          <div className="space-y-3 text-xs sm:text-sm text-[#526171]">
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
              <span><strong>Restricted Airflow:</strong> Blocked filters starve the blower fan of air, forcing the fan motor to work harder while delivering noticeably less chilled air.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
              <span><strong>Coil Frosting:</strong> When heat cannot transfer through a dirty coil, the surface temperature drops below freezing, forming ice that restricts air even further.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
              <span><strong>Musty Odors:</strong> Damp, dusty coils in humid weather breed unpleasant odors each time the AC starts up.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Signs That Professional Servicing Is Needed */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-[#14263D] tracking-tight">
            Signs Professional Servicing Is Needed
          </h2>
          <p className="text-xs sm:text-sm text-[#526171] mt-1">
            While basic mesh filters can be rinsed by homeowners, deeper maintenance requires professional equipment and safety procedures:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#E6F4FA] flex items-center justify-center text-[#14263D]">
              <Wind className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#14263D]">Persistent Weak Airflow</h3>
            <p className="text-xs text-[#526171] leading-relaxed">
              If washing the front mesh filters does not restore airflow velocity, the internal blower cylinder or deep evaporator coil layers are clogged.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#E6F4FA] flex items-center justify-center text-[#14263D]">
              <Droplets className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#14263D]">Drainage Overflow</h3>
            <p className="text-xs text-[#526171] leading-relaxed">
              Water overflowing from the front or rear tray indicates sludge or algae blocking the drain line, requiring a pressurized flush.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#E6F4FA] flex items-center justify-center text-[#14263D]">
              <Volume2 className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#14263D]">Vibrating Blower Fan</h3>
            <p className="text-xs text-[#526171] leading-relaxed">
              Uneven dust caked onto the blower wheel creates an imbalance, causing humming or rattling sounds when the fan spins at high speed.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#E6F4FA] flex items-center justify-center text-[#14263D]">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#14263D]">Pre-Season Readiness</h3>
            <p className="text-xs text-[#526171] leading-relaxed">
              Having the outdoor and indoor units serviced in early spring prevents unexpected cooling failure when Lahore&apos;s peak heat arrives.
            </p>
          </div>
        </div>
      </div>

      {/* Keeping Units Unobstructed */}
      <div className="bg-[#F7FAFC] rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-[#14263D]">
          Best Practices for Indoor & Outdoor Clearance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#526171]">
          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-[#14263D] text-sm">Indoor Space Maintenance</h3>
            <ul className="space-y-1.5 list-disc list-inside leading-relaxed">
              <li>Keep curtains and tall wardrobes from blocking the front or bottom airflow louvers.</li>
              <li>Ensure the room is reasonably sealed when running to avoid excessive humidity ingress.</li>
              <li>Do not spray household aerosol sprays or harsh bleach directly into the return grill.</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-[#14263D] text-sm">Outdoor Unit Clearance</h3>
            <ul className="space-y-1.5 list-disc list-inside leading-relaxed">
              <li>Keep at least 12–18 inches of clearance around the rear and sides of the condenser unit.</li>
              <li>Do not store boxes, tarpaulins, or laundry items on top of or adjacent to the outdoor unit.</li>
              <li>Keep the area free of climbing plants, dry foliage, and construction dust.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Maintenance Inquiries CTA */}
      <div className="bg-[#14263D] text-white rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-bold tracking-tight">
            Ready to Schedule a Maintenance Service?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Contact SAIM AC Service at +92 300 9622866 or submit our inquiry form.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-bold text-[#14263D] bg-[#49B8E8] hover:bg-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call to Inquire</span>
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
