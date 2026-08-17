import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import PracticeFrameworkSection from './components/PracticeFrameworkSection.jsx';
import WhatWeDoServices from './components/WhatWeDoServices.jsx';
import ServiceDetailPage from './pages/ServiceDetailPage.jsx';
import WhoWeServeSection from './components/WhoWeServeSection.jsx';
import IndustryDetailPage from './pages/IndustryDetailPage.jsx';
import CompanyDetailPage from './pages/CompanyDetailPage.jsx';
import ResourceDetailPage from './pages/ResourceDetailPage.jsx';
import CareersPage from './pages/CareersPage.jsx';
import EcosystemPartnersPage from './pages/EcosystemPartnersPage.jsx';
import GlobalPresenceMap from './components/GlobalPresenceMap.jsx';
import Footer from './components/Footer.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import ClientMarquee from './components/ClientMarquee.jsx';
import PartnerMarquee from './components/PartnerMarquee.jsx';
import ClientLogos from './components/ClientLogos.jsx';
import ContactAndLocations from './components/ContactAndLocations.jsx';
import TechBackground from './components/TechBackground.jsx';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [activeServiceId, setActiveServiceId] = useState(null);
  const [activeIndustryId, setActiveIndustryId] = useState(null);
  const [activeCompanyId, setActiveCompanyId] = useState(null);
  const [activeResourceId, setActiveResourceId] = useState(null);
  const [isCareersActive, setIsCareersActive] = useState(false);
  const [isEcosystemActive, setIsEcosystemActive] = useState(false);

  const [contactTab, setContactTab] = useState('talk');

  const resetAllViews = () => {
    setActiveServiceId(null);
    setActiveIndustryId(null);
    setActiveCompanyId(null);
    setActiveResourceId(null);
    setIsCareersActive(false);
    setIsEcosystemActive(false);
  };

  const scrollToContact = (tab = 'talk') => {
    resetAllViews();
    setContactTab(tab);
    setTimeout(() => {
      const el = document.getElementById('contact-locations');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSelectNav = (rawId) => {
    if (!rawId) {
      resetAllViews();
      return;
    }

    const cleanStr = String(rawId).toLowerCase().trim().replace(/^#/, '');

    if (cleanStr === 'talk' || cleanStr === 'contact' || cleanStr === 'lets-talk') {
      scrollToContact('talk');
      return;
    }

    if (cleanStr === 'locate' || cleanStr === 'locations' || cleanStr === 'locate-us') {
      scrollToContact('locate');
      return;
    }

    if (cleanStr === 'careers' || cleanStr === 'career') {
      resetAllViews();
      setIsCareersActive(true);
      return;
    }

    if (cleanStr.includes('blog') || cleanStr.includes('case-studies') || cleanStr.includes('whitepaper')) {
      resetAllViews();
      setActiveResourceId(cleanStr);
      return;
    }

    if (cleanStr.includes('about') || cleanStr.includes('leadership')) {
      resetAllViews();
      setActiveCompanyId(cleanStr);
      return;
    }

    const industryKeywords = ['financial', 'healthcare', 'manufacturing', 'technology', 'education', 'government', 'retail', 'legal'];
    if (industryKeywords.some(kw => cleanStr.includes(kw))) {
      resetAllViews();
      setActiveIndustryId(cleanStr);
      return;
    }

    resetAllViews();
    setActiveServiceId(cleanStr);
  };

  return (
    <LanguageProvider>
      <div className={`min-h-screen flex flex-col transition-colors duration-300 font-sans relative ${
        theme === 'dark' ? 'text-gray-100' : 'text-slate-900'
      }`}>
        {/* Pass active theme to TechBackground so it adapts between dark & light modes */}
        <TechBackground theme={theme} />

        <div className="relative z-10 flex flex-col min-h-screen pointer-events-auto">
          <Navbar
            theme={theme}
            setTheme={setTheme}
            onSelectService={handleSelectNav}
            onLetsTalkClick={() => scrollToContact('talk')}
          />

          <main className="pt-12 md:pt-18 flex-grow">
            {isEcosystemActive ? (
              <EcosystemPartnersPage 
                onBack={() => {
                  setIsEcosystemActive(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                theme={theme} 
              />
            ) : isCareersActive ? (
              <CareersPage onBack={() => setIsCareersActive(false)} theme={theme} />
            ) : activeResourceId ? (
              <ResourceDetailPage resourceId={activeResourceId} onBack={() => setActiveResourceId(null)} theme={theme} />
            ) : activeCompanyId ? (
              <CompanyDetailPage companyId={activeCompanyId} onBack={() => setActiveCompanyId(null)} theme={theme} />
            ) : activeServiceId ? (
              <ServiceDetailPage serviceId={activeServiceId} onBack={() => setActiveServiceId(null)} theme={theme} />
            ) : activeIndustryId ? (
              <IndustryDetailPage 
                industryId={activeIndustryId} 
                onBack={() => setActiveIndustryId(null)} 
                theme={theme} 
                onScheduleClick={() => scrollToContact('talk')}
              />
            ) : (
              <>
                <PracticeFrameworkSection theme={theme} />
                <ClientMarquee theme={theme} isDark={theme === 'dark'} />
                <PartnerMarquee theme={theme} onScheduleClick={() => scrollToContact('talk')} />
                <WhatWeDoServices theme={theme} onSelectService={handleSelectNav} />
                
                <ClientLogos 
                  theme={theme} 
                  isDark={theme === 'dark'} 
                  onLetsBuildTogetherClick={() => {
                    console.log("Switching view to EcosystemPartnersPage");
                    resetAllViews();
                    setIsEcosystemActive(true);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                />

                <WhoWeServeSection theme={theme} onSelectIndustry={handleSelectNav} />
                <GlobalPresenceMap theme={theme} />

                <ContactAndLocations 
                  theme={theme} 
                  isDark={theme === 'dark'} 
                  initialTab={contactTab} 
                />
              </>
            )}
          </main>

          <Footer 
            theme={theme} 
            onLocateClick={() => scrollToContact('locate')} 
            onContactClick={() => scrollToContact('talk')} 
          />
        </div>
      </div>
    </LanguageProvider>
  );
}