import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../types.ts';

export const FloatingCallButton: React.FC = () => {
  return (
    <aside
      aria-label="Direct Phone Contact"
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 pointer-events-auto"
    >
      <a
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        className="group flex items-center gap-3 bg-[#14263D] text-white pl-3.5 pr-4 py-2.5 sm:py-3 rounded-full shadow-lg shadow-[#14263D]/25 border border-[#49B8E8]/40 hover:border-[#49B8E8] hover:bg-[#0E1B2C] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#49B8E8] focus-visible:ring-offset-2 focus:outline-none"
        aria-label={`Call SAIM AC Service at ${BUSINESS_INFO.phone}`}
      >
        <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#49B8E8] text-[#14263D] shrink-0 group-hover:bg-white transition-colors duration-200">
          <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#14263D]" aria-hidden="true" />
        </span>
        <div className="flex flex-col text-left">
          <span className="text-[11px] sm:text-xs font-semibold text-[#49B8E8] uppercase tracking-wider leading-none">
            Call Us
          </span>
          <span className="text-xs sm:text-sm font-bold tracking-tight text-white whitespace-nowrap mt-0.5 tabular-nums">
            {BUSINESS_INFO.phone}
          </span>
        </div>
      </a>
    </aside>
  );
};
