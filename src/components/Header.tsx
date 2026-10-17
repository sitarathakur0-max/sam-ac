import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { PageId, BUSINESS_INFO } from '../types.ts';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'repair', label: 'AC Repair' },
    { id: 'installation', label: 'Installation' },
    { id: 'maintenance', label: 'Maintenance' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand wordmark (single text element as per Top Bar Contract) */}
          <button
            onClick={() => handleLinkClick('home')}
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#14263D] whitespace-nowrap shrink-0 text-left hover:text-[#49B8E8] transition-colors focus:outline-none"
          >
            SAIM AC Service
          </button>

          {/* Zone 2: Navigation Links (single-line text) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#526171]">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 whitespace-nowrap transition-colors duration-150 focus:outline-none ${
                    isActive
                      ? 'text-[#14263D] font-semibold'
                      : 'hover:text-[#14263D]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#49B8E8] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#14263D] hover:bg-[#1f3757] active:bg-[#0e1b2c] rounded-lg transition-colors shadow-xs whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#49B8E8]" aria-hidden="true" />
              <span>Call for Service</span>
            </a>

            {/* Mobile menu hamburger toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#526171] hover:text-[#14263D] hover:bg-slate-100 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#E6F4FA] text-[#14263D] font-semibold'
                      : 'text-[#526171] hover:bg-slate-50 hover:text-[#14263D]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#49B8E8]" />}
                </button>
              );
            })}
            <div className="pt-2">
              <button
                onClick={() => handleLinkClick('about')}
                className="w-full text-left px-3 py-2 text-sm text-[#526171] hover:text-[#14263D]"
              >
                About SAIM AC Service
              </button>
              <button
                onClick={() => handleLinkClick('privacy')}
                className="w-full text-left px-3 py-2 text-sm text-[#526171] hover:text-[#14263D]"
              >
                Privacy Policy
              </button>
            </div>
            <div className="pt-3 border-t border-slate-100">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#14263D] text-white rounded-lg font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-[#49B8E8]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
