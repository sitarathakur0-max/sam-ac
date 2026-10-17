import React from 'react';
import { Phone, MapPin, Facebook, ArrowUpRight } from 'lucide-react';
import { PageId, BUSINESS_INFO } from '../types.ts';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#14263D] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Business Identity & Overview */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Air-conditioning repair, installation, and maintenance service inquiries in Lahore, Pakistan. Speak directly with us to discuss your cooling concerns.
            </p>
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#49B8E8] hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span>Visit Facebook Page</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Service Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Service Categories
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('repair')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  AC Repair Inquiries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('installation')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  AC Installation Inquiries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('maintenance')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Cleaning & Maintenance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  All Service Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Site Information */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Information & Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('faqs')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  About SAIM AC Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Contact & Inquiry Form
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact & Address */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3.5 text-sm">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-start gap-2.5 text-slate-300 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">Direct Telephone</span>
                  <span className="font-semibold text-white group-hover:text-[#49B8E8] transition-colors tabular-nums">
                    {BUSINESS_INFO.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#49B8E8] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">Registered Address</span>
                  <address className="not-italic text-xs leading-relaxed text-slate-400">
                    {BUSINESS_INFO.address},<br />
                    {BUSINESS_INFO.city}, Punjab {BUSINESS_INFO.postalCode}, {BUSINESS_INFO.country}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Service Notice */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. Lahore, Pakistan. All rights reserved.
          </p>
          <p className="text-center sm:text-right text-slate-400">
            Appointments, service area coverage, and final charges are confirmed directly by phone.
          </p>
        </div>
      </div>
    </footer>
  );
};
