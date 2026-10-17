import React, { useState } from 'react';
import { ChevronDown, Phone, HelpCircle, ArrowRight } from 'lucide-react';
import { PageId, BUSINESS_INFO } from '../types.ts';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      category: 'Inquiries & Booking',
      question: 'How can I request AC repair or servicing?',
      answer:
        'You can request service by calling SAIM AC Service directly at +92 300 9622866, or by filling out our online service inquiry form. When calling, please mention your area in Lahore and the specific symptoms your air conditioner is exhibiting.'
    },
    {
      id: 'faq-2',
      category: 'Inquiries & Booking',
      question: 'What information should I provide when calling?',
      answer:
        'To help us assess your requirement efficiently, please share: (1) The type of AC (split unit, inverter, floor standing, or window AC), (2) The observed problem (e.g., blowing room temperature air, water dripping, loud humming, not powering on), and (3) Your general neighborhood or landmark in Lahore.'
    },
    {
      id: 'faq-3',
      category: 'Pricing & Charges',
      question: 'How do I confirm service charges and diagnostic fees?',
      answer:
        'Because air conditioning faults vary widely—from a simple clogged filter to electrical component failures or refrigerant leaks—service charges and diagnostic inspection fees must be confirmed directly with the business. We discuss charges transparently before proceeding with work.'
    },
    {
      id: 'faq-4',
      category: 'Coverage & Location',
      question: 'Can I check whether my specific location in Lahore is covered?',
      answer:
        'Yes. Our listed business location is in Ideal Garden Housing Scheme, Mian Fazal Haq Colony, Mujhid Road, Lahore. Because coverage depends on distance, travel time, and daily technician scheduling, please call us directly to check if we can service your specific neighborhood.'
    },
    {
      id: 'faq-5',
      category: 'Installation',
      question: 'How can I ask about AC installation or relocation?',
      answer:
        'For installation or relocation inquiries, contact us with details about your room size, floor level, whether copper piping and electrical wiring are already in place, and where the indoor and outdoor units will be located. We will discuss the required work and arrange an inspection or installation time.'
    },
    {
      id: 'faq-6',
      category: 'Appointments',
      question: 'How do I arrange an appointment?',
      answer:
        'All appointments are confirmed verbally by phone. You may suggest a preferred date through our website inquiry form, but final scheduling depends on technician availability and route coordination on that day.'
    },
    {
      id: 'faq-7',
      category: 'Safety & Troubleshooting',
      question: 'What should I do if the AC appears to have an electrical fault or burning smell?',
      answer:
        'If you notice a burning odor, sparking, buzzing from the breaker box, or if your circuit breaker trips repeatedly, turn off the dedicated AC power switch immediately. Do not attempt to reset the breaker repeatedly or open electrical panels. Call a professional technician or qualified electrician to inspect the circuit.'
    },
    {
      id: 'faq-8',
      category: 'Maintenance',
      question: 'How frequently should AC filters and coils be cleaned?',
      answer:
        'Due to ambient dust and summer heat in Lahore, basic indoor nylon mesh filters should typically be inspected and rinsed every 2 to 4 weeks during heavy summer use. Deep coil washing and outdoor condenser servicing are generally arranged at the start of the summer cooling season.'
    },
    {
      id: 'faq-9',
      category: 'Equipment',
      question: 'Do you service commercial or multi-unit premises?',
      answer:
        'Yes, we accept commercial cooling inquiries for offices, shops, and small commercial spaces in Lahore. Please call +92 300 9622866 with your premises details and number of units to discuss how we can assist.'
    }
  ];

  const categories = Array.from(new Set(faqs.map((f) => f.category)));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-14">
      {/* Page Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#49B8E8]">
          <span>Help & Clarity</span>
          <span aria-hidden="true" className="text-slate-400">·</span>
          <span className="text-[#526171]">Direct Answers</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#14263D] tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-base text-[#526171] leading-relaxed">
          Find clear, direct answers regarding AC repair inquiries, installation planning, service charges, and scheduling with SAIM AC Service in Lahore.
        </p>
      </div>

      {/* Accordion Categories */}
      <div className="space-y-10">
        {categories.map((category) => {
          const categoryFaqs = faqs.filter((f) => f.category === category);
          return (
            <div key={category} className="space-y-4">
              <h2 className="text-lg font-bold text-[#14263D] pb-2 border-b border-slate-200">
                {category}
              </h2>
              <div className="space-y-3">
                {categoryFaqs.map((faq) => {
                  const isOpen = openIds.includes(faq.id);
                  return (
                    <div
                      key={faq.id}
                      className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#14263D] hover:bg-slate-50 focus:outline-none"
                        aria-expanded={isOpen}
                        aria-controls={`${faq.id}-answer`}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#49B8E8]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div
                          id={`${faq.id}-answer`}
                          className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#526171] leading-relaxed border-t border-slate-100"
                        >
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact Prompt */}
      <div className="bg-[#E6F4FA] rounded-2xl border border-[#49B8E8]/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-base sm:text-lg font-bold text-[#14263D]">
            Have a question that isn&apos;t covered here?
          </h3>
          <p className="text-xs sm:text-sm text-[#526171]">
            Speak directly with us by phone or submit an inquiry through our contact page.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#14263D] hover:bg-[#1f3757] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#49B8E8]" />
            <span>Call +92 300 9622866</span>
          </a>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#14263D] bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
          >
            <span>Contact Form</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
