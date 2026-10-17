import React, { useState, useEffect } from 'react';
import { PageId } from './types.ts';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingCallButton } from './components/FloatingCallButton.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { RepairPage } from './pages/RepairPage.tsx';
import { InstallationPage } from './pages/InstallationPage.tsx';
import { MaintenancePage } from './pages/MaintenancePage.tsx';
import { FaqPage } from './pages/FaqPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { PrivacyPage } from './pages/PrivacyPage.tsx';

// Mapping URL paths and hashes to PageId
function getPageFromUrl(): PageId {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  const path = window.location.pathname.replace(/^\//, '').toLowerCase();

  const target = hash || path;

  switch (target) {
    case 'services':
      return 'services';
    case 'repair':
      return 'repair';
    case 'installation':
      return 'installation';
    case 'maintenance':
      return 'maintenance';
    case 'faqs':
    case 'faq':
      return 'faqs';
    case 'about':
      return 'about';
    case 'contact':
      return 'contact';
    case 'privacy':
      return 'privacy';
    default:
      return 'home';
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromUrl());

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromUrl());
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const newHash = page === 'home' ? '' : `#/${page}`;
    if (window.location.hash !== newHash) {
      window.history.pushState(null, '', newHash || window.location.pathname);
    }
  };

  // Dynamic SEO Title and Meta Description update
  useEffect(() => {
    const pageTitles: Record<PageId, string> = {
      home: 'SAIM AC Service — Lahore | AC Repair, Installation & Maintenance',
      services: 'Air Conditioning Services & Inquiries in Lahore | SAIM AC Service',
      repair: 'AC Repair & Diagnostics in Lahore | SAIM AC Service',
      installation: 'AC Installation Considerations & Planning in Lahore | SAIM AC Service',
      maintenance: 'AC Cleaning & Preventive Maintenance in Lahore | SAIM AC Service',
      faqs: 'Frequently Asked Questions — AC Services Lahore | SAIM AC Service',
      about: 'About SAIM AC Service — Lahore Air Conditioning Inquiries',
      contact: 'Contact & Service Inquiry — SAIM AC Service Lahore',
      privacy: 'Privacy Policy | SAIM AC Service Lahore',
    };

    const pageDescriptions: Record<PageId, string> = {
      home: 'Explore air-conditioning repair, installation, and maintenance services in Lahore. Contact SAIM AC Service at +92 300 9622866.',
      services: 'Overview of AC repair, installation, maintenance, and troubleshooting service categories in Lahore by SAIM AC Service.',
      repair: 'Common cooling symptoms, water leakage, strange sounds, weak airflow, and diagnostic checklists for AC repair in Lahore.',
      installation: 'Room sizing, indoor & outdoor unit placement, electrical safety, and piping considerations for AC installation in Lahore.',
      maintenance: 'Filter washing, coil cleaning, and preventive maintenance guidance for air conditioners in Lahore.',
      faqs: 'Answers to common questions about AC repair requests, diagnostic charges, appointments, and coverage areas in Lahore.',
      about: 'Learn about SAIM AC Service, based in Ideal Garden Housing Scheme, Lahore, providing direct cooling service inquiries.',
      contact: 'Submit an online service inquiry or call +92 300 9622866 directly for air conditioning services in Lahore.',
      privacy: 'Privacy policy explaining how customer contact details and service inquiries are handled by SAIM AC Service.',
    };

    document.title = pageTitles[currentPage];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', pageDescriptions[currentPage]);
    }
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage onNavigate={navigateTo} />;
      case 'repair':
        return <RepairPage onNavigate={navigateTo} />;
      case 'installation':
        return <InstallationPage onNavigate={navigateTo} />;
      case 'maintenance':
        return <MaintenancePage onNavigate={navigateTo} />;
      case 'faqs':
        return <FaqPage onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      case 'privacy':
        return <PrivacyPage onNavigate={navigateTo} />;
      case 'home':
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC] text-[#14263D] selection:bg-[#49B8E8]/20 selection:text-[#14263D]">
      {/* Top Bar Header */}
      <Header currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Mandatory Fixed Floating Call Button on the LEFT side */}
      <FloatingCallButton />
    </div>
  );
}
