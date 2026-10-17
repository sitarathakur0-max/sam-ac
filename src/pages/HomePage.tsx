import React, { useState } from 'react';
import {
  Wrench,
  Sparkles,
  Settings,
  Search,
  Droplets,
  Volume2,
  Wind,
  PowerOff,
  AlertTriangle,
  Check,
  ChevronDown,
  Phone,
  ArrowRight,
  MapPin,
  Building2,
  Home as HomeIcon,
  HelpCircle,
  FileText
} from 'lucide-react';
import { PageId, BUSINESS_INFO } from '../types.ts';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const previewFaqs = [
    {
      q: 'What should I do if my AC is running but not cooling?',
      a: 'A lack of cooling can stem from restricted air filters, dirty cooling coils, refrigerant level discrepancies, or fan and compressor issues. Contact us by phone or submit an inquiry with your unit type and symptoms so we can assess the situation.'
    },
    {
      q: 'How do I inquire about scheduling a service visit in Lahore?',
      a: 'You can call us directly at +92 300 9622866 or submit our online inquiry form with your neighborhood in Lahore and a description of your issue. All appointment availability and timing are confirmed directly over the phone.'
    },
    {
      q: 'How are service charges confirmed?',
      a: 'Because cooling problems differ based on unit type, fault complexity, and required parts or labor, inspection charges and final service costs must be confirmed directly with the business when you discuss your service requirement.'
    },
    {
      q: 'Which areas in Lahore do you cover?',
      a: 'Our registered location is in Mian Fazal Haq Colony, Mujhid Road, Ideal Garden Housing Scheme, Lahore. Because coverage depends on distance, route, and current scheduling, please call us to confirm whether we can service your specific locality.'
    },
    {
      q: 'What information should I have ready when calling?',
      a: 'Having your AC type (split unit, inverter, floor standing), brand name if visible, your approximate locality in Lahore, and the exact symptoms (water dripping, strange sounds, blowing room-temperature air) helps us understand your situation faster.'
    }
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 lg:pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#14263D]">
                  <span className="text-[#49B8E8]">Air Conditioning Service</span>
                  <span aria-hidden="true" className="text-slate-400">·</span>
                  <span className="text-[#526171]">Lahore, Pakistan</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14263D] tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
                  AC Problems? Let&apos;s Get Your Cooling Back on Track.
                </h1>
                <p className="text-base sm:text-lg text-[#526171] leading-relaxed max-w-2xl">
                  Explore air-conditioning repair, installation, and maintenance services in Lahore. Contact SAIM AC Service to discuss your cooling problem and arrange the next steps.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-[#14263D] hover:bg-[#1f3757] active:bg-[#0e1b2c] transition-colors shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#49B8E8]" aria-hidden="true" />
                  <span>Call for Service</span>
                </a>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-[#14263D] bg-[#E6F4FA] hover:bg-[#d5edf7] transition-colors"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 text-[#14263D]" aria-hidden="true" />
                </button>
              </div>

              {/* Key Verified Information Strip */}
              <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#526171]">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#49B8E8] shrink-0" />
                  <span>Direct Inquiries: <strong className="text-[#14263D] tabular-nums">{BUSINESS_INFO.phone}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#49B8E8] shrink-0" />
                  <span>Based in Ideal Garden Housing Scheme, Lahore</span>
                </div>
              </div>
            </div>

            {/* Right Visual Carrier: Single dominant 16:9 realistic hero image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-100 aspect-16/9 lg:aspect-4/3">
                <img
                  src="/src/assets/images/split_ac_residential_hero_1792237651882.jpg"
                  alt="Modern split air conditioner installed in a clean residential room"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-[11px] text-[#526171] text-center">
                Residential split air conditioning units require periodic inspection and proper servicing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICE OVERVIEW CARDS (Icon-based) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#49B8E8] mb-2">
            Service Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#14263D] tracking-tight">
            Air Conditioning Services
          </h2>
          <p className="mt-2 text-sm text-[#526171]">
            Select a service category to learn what each service entails, what details to share when contacting us, and when professional inspection is recommended.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: AC Repair */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#49B8E8] transition-colors shadow-2xs">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#E6F4FA] flex items-center justify-center text-[#14263D]">
                <Wrench className="w-6 h-6 text-[#14263D]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#14263D]">AC Repair</h3>
                <p className="mt-1.5 text-xs text-[#526171] leading-relaxed">
                  Inquire about troubleshooting cooling loss, compressor tripping, strange operational noises, or indoor unit water leaks.
                </p>
              </div>
              <ul className="text-xs text-[#526171] space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#49B8E8]" /> Cooling fault diagnostics
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#49B8E8]" /> Leakage and noise inspection
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#49B8E8]" /> Electrical component check
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <button
                type="button"
                onClick={() => onNavigate('repair')}
                className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-[#14263D] bg-[#F7FAFC] hover:bg-[#E6F4FA] border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Repair Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: AC Installation */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#49B8E8] transition-colors shadow-2xs">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#E6F4FA] flex items-center justify-center text-[#14263D]">
                <Settings className="w-6 h-6 text-[#14263D]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#14263D]">AC Installation</h3>
                <p className="mt-1.5 text-xs text-[#526171] leading-relaxed">
                  Discuss wall bracket mounting, indoor and outdoor unit alignment, piping routing, and safe power connections.
                </p>
              </div>
              <ul className="text-xs text-[#526171] space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#49B8E8]" /> Indoor & outdoor positioning
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#49B8E8]" /> Piping & drain line path
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#49B8E8]" /> Electrical safety check
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <button
                type="button"
                onClick={() => onNavigate('installation')}
                className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-[#14263D] bg-[#F7FAFC] hover:bg-[#E6F4FA] border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Installation Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: AC Cleaning and Maintenance */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#49B8E8] transition-colors shadow-2xs">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#E6F4FA] flex items-center justify-center text-[#14263D]">
                <Sparkles className="w-6 h-6 text-[#14263D]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#14263D]">Cleaning & Maintenance</h3>
                <p className="mt-1.5 text-xs text-[#526171] leading-relaxed">
                  Arrange routine service visits to clean dust filters, flush condensate drains, and inspect indoor and outdoor coils.
                </p>
              </div>
              <ul className="text-xs text-[#526171] space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#49B8E8]" /> Filter dust extraction
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#49B8E8]" /> Condensate tray wash
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#49B8E8]" /> Outdoor coil clearance
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <button
                type="button"
                onClick={() => onNavigate('maintenance')}
                className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-[#14263D] bg-[#F7FAFC] hover:bg-[#E6F4FA] border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Maintenance Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Inspection & Troubleshooting */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#49B8E8] transition-colors shadow-2xs">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#E6F4FA] flex items-center justify-center text-[#14263D]">
                <Search className="w-6 h-6 text-[#14263D]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#14263D]">Inspection & Diagnostics</h3>
                <p className="mt-1.5 text-xs text-[#526171] leading-relaxed">
                  Have an on-site evaluation for intermittent faults, sensor anomalies, weak airflow, or pre-season testing.
                </p>
              </div>
              <ul className="text-xs text-[#526171] space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#49B8E8]" /> Operational test runs
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#49B8E8]" /> Air temperature differential
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#49B8E8]" /> General equipment condition
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-[#14263D] bg-[#F7FAFC] hover:bg-[#E6F4FA] border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>All Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMMON AC PROBLEMS */}
      <section className="bg-white py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#49B8E8] mb-2">
              Diagnostic Guide
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#14263D] tracking-tight">
              Common Air Conditioner Symptoms
            </h2>
            <p className="mt-2 text-sm text-[#526171] leading-relaxed">
              When an air conditioner fails to cool or exhibits unusual behavior, the root cause can vary from simple airflow restriction to mechanical or electrical faults. Professional inspection is recommended to avoid safety risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Symptom 1 */}
            <div className="p-5 rounded-xl border border-slate-200 bg-[#F7FAFC] space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#E6F4FA] text-[#14263D]">
                  <Wind className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#14263D]">AC Is Not Cooling Properly</h3>
              </div>
              <p className="text-xs text-[#526171] leading-relaxed">
                The unit blows room-temperature air. Causes can include blocked filters, low refrigerant, dirty coils, or a non-engaging outdoor compressor.
              </p>
            </div>

            {/* Symptom 2 */}
            <div className="p-5 rounded-xl border border-slate-200 bg-[#F7FAFC] space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#E6F4FA] text-[#14263D]">
                  <Droplets className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#14263D]">Water Dripping Indoors</h3>
              </div>
              <p className="text-xs text-[#526171] leading-relaxed">
                Condensation overflows inside the room. Frequently caused by a choked drain pipe, misaligned drain tray, or coil icing thawing rapidly.
              </p>
            </div>

            {/* Symptom 3 */}
            <div className="p-5 rounded-xl border border-slate-200 bg-[#F7FAFC] space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#E6F4FA] text-[#14263D]">
                  <Volume2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#14263D]">Unusual Noise or Vibration</h3>
              </div>
              <p className="text-xs text-[#526171] leading-relaxed">
                Grinding, rattling, or loud vibration often indicates a loose blower wheel, mounting bracket instability, or outdoor fan obstruction.
              </p>
            </div>

            {/* Symptom 4 */}
            <div className="p-5 rounded-xl border border-slate-200 bg-[#F7FAFC] space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#E6F4FA] text-[#14263D]">
                  <Wind className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#14263D]">Airflow Seems Weak</h3>
              </div>
              <p className="text-xs text-[#526171] leading-relaxed">
                Air emerges with very low velocity even on high fan settings. Choked mesh filters, dusty blower cylinders, or failing fan motors are common factors.
              </p>
            </div>

            {/* Symptom 5 */}
            <div className="p-5 rounded-xl border border-slate-200 bg-[#F7FAFC] space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#E6F4FA] text-[#14263D]">
                  <PowerOff className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#14263D]">The AC Will Not Start</h3>
              </div>
              <p className="text-xs text-[#526171] leading-relaxed">
                No lights or response from the remote control. May stem from tripped circuit breakers, voltage supply instability, or fuse and PCB issues.
              </p>
            </div>

            {/* Symptom 6 */}
            <div className="p-5 rounded-xl border border-slate-200 bg-[#F7FAFC] space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#E6F4FA] text-[#14263D]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#14263D]">Unit Needs Routine Cleaning</h3>
              </div>
              <p className="text-xs text-[#526171] leading-relaxed">
                Accumulated dust from Lahore&apos;s dry air can clog vents and reduce cooling transfer. Seasonal cleaning helps preserve consistent airflow.
              </p>
            </div>
          </div>

          <div className="mt-10 p-6 rounded-xl bg-[#E6F4FA]/70 border border-[#49B8E8]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#14263D]">
                Experiencing any of these AC symptoms?
              </h4>
              <p className="text-xs text-[#526171]">
                Electrical and pressurized gas systems require qualified equipment and inspection. Please avoid unsafe DIY disassembly.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#14263D] hover:bg-[#1f3757] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#49B8E8]" />
                <span>Discuss Your AC Problem</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY TIMELY MAINTENANCE MATTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#49B8E8] mb-2">
                Operational Care
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#14263D] tracking-tight">
                Why Timely Maintenance Matters
              </h2>
              <p className="mt-2 text-sm text-[#526171] leading-relaxed">
                Lahore experiences intense summer temperatures and substantial airborne particulate matter. Keeping air conditioners properly maintained ensures steady cooling performance and helps identify faults before they escalate.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="text-sm font-bold text-[#14263D] mb-1">Maintain Airflow</div>
                <p className="text-xs text-[#526171] leading-relaxed">
                  Clean vents and unobstructed blower fans allow conditioned air to circulate freely across the room.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="text-sm font-bold text-[#14263D] mb-1">Keep Filters Clean</div>
                <p className="text-xs text-[#526171] leading-relaxed">
                  Clean filters prevent dust buildup on delicate evaporator aluminum fins and improve indoor air circulation.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="text-sm font-bold text-[#14263D] mb-1">Notice Sounds & Leaks</div>
                <p className="text-xs text-[#526171] leading-relaxed">
                  Early detection of subtle clicks, hums, or small moisture drips prevents secondary water damage to walls.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="text-sm font-bold text-[#14263D] mb-1">Professional Assessment</div>
                <p className="text-xs text-[#526171] leading-relaxed">
                  Technicians inspect electrical connections, capacitors, and coil cleanliness with dedicated tools.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 aspect-4/3">
              <img
                src="/src/assets/images/ac_technician_indoor_inspection_1792237653162.jpg"
                alt="HVAC technician inspecting an indoor split air conditioner unit"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-[11px] text-[#526171] text-center">
              Careful diagnostics on the indoor evaporator unit helps trace cooling and electrical irregularities.
            </p>
          </div>
        </div>
      </section>

      {/* 5. OUR SERVICE PROCESS */}
      <section className="bg-white py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#49B8E8] mb-2">
              How It Works
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#14263D] tracking-tight">
              Our Service Process
            </h2>
            <p className="mt-2 text-sm text-[#526171]">
              A transparent, direct process to arrange air conditioner repairs, installations, and servicing in Lahore.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-xl border border-slate-200 bg-[#F7FAFC] relative">
              <div className="text-2xl font-extrabold text-[#49B8E8] mb-3">01</div>
              <h3 className="text-base font-bold text-[#14263D] mb-1.5">
                Tell Us About the Problem
              </h3>
              <p className="text-xs text-[#526171] leading-relaxed">
                Call our phone number or fill in the online inquiry form describing your AC unit, neighborhood in Lahore, and the symptoms.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-xl border border-slate-200 bg-[#F7FAFC] relative">
              <div className="text-2xl font-extrabold text-[#49B8E8] mb-3">02</div>
              <h3 className="text-base font-bold text-[#14263D] mb-1.5">
                Discuss the Service Required
              </h3>
              <p className="text-xs text-[#526171] leading-relaxed">
                We review the reported fault or installation request and discuss whether an on-site visit is needed to diagnose the equipment.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-xl border border-slate-200 bg-[#F7FAFC] relative">
              <div className="text-2xl font-extrabold text-[#49B8E8] mb-3">03</div>
              <h3 className="text-base font-bold text-[#14263D] mb-1.5">
                Confirm the Visit & Charges
              </h3>
              <p className="text-xs text-[#526171] leading-relaxed">
                Inspection charges, scheduling availability, and service terms are communicated directly so you have clear expectations.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-xl border border-slate-200 bg-[#F7FAFC] relative">
              <div className="text-2xl font-extrabold text-[#49B8E8] mb-3">04</div>
              <h3 className="text-base font-bold text-[#14263D] mb-1.5">
                Arrange the Work
              </h3>
              <p className="text-xs text-[#526171] leading-relaxed">
                Once agreed, the service visit or repair is coordinated for your premises in Lahore according to the confirmed appointment.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-[#526171]">
            * Note: All appointments, timelines, and final service costs must be confirmed directly with the business.
          </div>
        </div>
      </section>

      {/* 6. RESIDENTIAL & COMMERCIAL INQUIRIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#49B8E8] mb-2">
            Service Contexts
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#14263D] tracking-tight">
            Residential & Commercial Inquiries
          </h2>
          <p className="mt-2 text-sm text-[#526171]">
            We accept cooling inquiries for both homes and businesses in Lahore. Share your specific requirements with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Residential Section */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#E6F4FA] flex items-center justify-center text-[#14263D]">
                <HomeIcon className="w-5 h-5 text-[#14263D]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#14263D]">Residential AC Inquiries</h3>
                <span className="text-xs text-slate-500">Houses, apartments, and personal spaces</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#526171] leading-relaxed">
              Living spaces in Lahore rely heavily on dependable air conditioning during the long cooling season. Homeowners and tenants can inquire about:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#526171]">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
                <span>Wall-mounted split AC repair and cooling restoration</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
                <span>New unit installations or room relocation inquiries</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
                <span>Pre-summer filter and coil maintenance wash</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
                <span>Indoor leakage prevention and drainage clearance</span>
              </li>
            </ul>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="text-xs font-semibold text-[#14263D] hover:text-[#49B8E8] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Submit residential inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Commercial Section */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#E6F4FA] flex items-center justify-center text-[#14263D]">
                <Building2 className="w-5 h-5 text-[#14263D]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#14263D]">Commercial AC Inquiries</h3>
                <span className="text-xs text-slate-500">Shops, offices, and small business premises</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#526171] leading-relaxed">
              Offices and commercial facilities require functioning cooling to maintain productivity and customer comfort. Business owners can discuss:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#526171]">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
                <span>Multiple split unit evaluations and maintenance routines</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
                <span>Commercial office and shop unit diagnostics</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
                <span>Ceiling cassette or floor standing unit inquiries</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
                <span>Scheduled maintenance checks prior to heavy summer workloads</span>
              </li>
            </ul>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="text-xs font-semibold text-[#14263D] hover:text-[#49B8E8] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Submit commercial inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SERVICE AREA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#14263D] text-white rounded-2xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#49B8E8]">
                <span>Registered Address & Location</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Serving Inquiries from Lahore
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                SAIM AC Service operates from its registered listing in Lahore. Customers across Lahore are invited to call to confirm whether their particular neighborhood and service requirements can be accommodated.
              </p>
              <div className="pt-2 space-y-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
                  <p>
                    <strong>Registered Address:</strong><br />
                    {BUSINESS_INFO.address},<br />
                    {BUSINESS_INFO.city}, Punjab {BUSINESS_INFO.postalCode}, {BUSINESS_INFO.country}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-xl p-5 text-xs text-slate-300 space-y-3">
              <div className="font-semibold text-white text-sm">Location Coverage Notice:</div>
              <p className="leading-relaxed">
                Because traveling times across Lahore depend on traffic conditions and current technician schedules, please contact us by phone to confirm specific locality coverage prior to booking.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#49B8E8] text-[#14263D] font-bold rounded-lg text-xs hover:bg-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call to Check Area Coverage</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ PREVIEW SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#49B8E8] mb-2">
            Clear Answers
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#14263D] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-[#526171]">
            Common questions regarding AC service inquiries, charges, and scheduling in Lahore.
          </p>
        </div>

        <div className="space-y-3">
          {previewFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#14263D] hover:bg-slate-50 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#49B8E8]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#526171] leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => onNavigate('faqs')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#14263D] hover:text-[#49B8E8] transition-colors"
          >
            <span>View all questions on our FAQs page</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E6F4FA] rounded-2xl border border-[#49B8E8]/40 p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14263D] tracking-tight">
              Need Help With Your AC?
            </h2>
            <p className="text-sm sm:text-base text-[#526171] leading-relaxed">
              Tell us what is happening with your air conditioner and contact SAIM AC Service to discuss your requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg text-sm font-bold text-white bg-[#14263D] hover:bg-[#1f3757] active:bg-[#0e1b2c] transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#49B8E8]" />
              <span>Call SAIM AC Service: {BUSINESS_INFO.phone}</span>
            </a>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-[#14263D] bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
            >
              <span>Submit Inquiry Form</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
