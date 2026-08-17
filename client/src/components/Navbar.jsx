import React, { useState, useRef, useEffect } from 'react';
import SearchBar from './SearchBar.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Navbar({
  currentLang: propLang,
  setLanguage: propSetLanguage,
  theme = 'dark',
  setTheme,
  onSelectService
}) {
  // Try to grab language state from Context if available
  const context = useLanguage();
  const currentLang = context?.language || propLang || 'EN_UK';
  const setLanguage = context?.setLanguage || propSetLanguage;

  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const isDark = theme === 'dark';

  // Language mapping with flags & locales
  const languages = [
    { code: 'EN_UK', label: 'English (UK)', flag: '🇬🇧' },
    { code: 'EN_US', label: 'English (US)', flag: '🇺🇸' },
    { code: 'EN_IN', label: 'English (IN)', flag: '🇮🇳' },
    { code: 'ES', label: 'Español', flag: '🇪🇸' },
    { code: 'NL', label: 'Nederlands', flag: '🇳🇱' },
    { code: 'AR', label: 'العربية (Saudi)', flag: '🇸🇦' },
    { code: 'IT', label: 'Italiano', flag: '🇮🇹' },
    { code: 'FR', label: 'Français', flag: '🇫🇷' },
    { code: 'DE', label: 'Deutsch', flag: '🇩🇪' },
  ];

  // Dynamic Translations Dictionary for Navbar
  const translations = {
    EN_UK: { whatWeDo: 'What We Do', whoWeServe: 'Who We Serve', whoWeAre: 'Who We Are', resources: 'Resources', careers: 'Careers', letstalk: "LET'S TALK" },
    EN_US: { whatWeDo: 'What We Do', whoWeServe: 'Who We Serve', whoWeAre: 'Who We Are', resources: 'Resources', careers: 'Careers', letstalk: "LET'S TALK" },
    EN_IN: { whatWeDo: 'What We Do', whoWeServe: 'Who We Serve', whoWeAre: 'Who We Are', resources: 'Resources', careers: 'Careers', letstalk: "LET'S TALK" },
    ES: { whatWeDo: 'Qué Hacemos', whoWeServe: 'A Quién Servimos', whoWeAre: 'Quiénes Somos', resources: 'Recursos', careers: 'Carreras', letstalk: 'HABLEMOS' },
    NL: { whatWeDo: 'Wat We Doen', whoWeServe: 'Wie We Bedienen', whoWeAre: 'Over Ons', resources: 'Kennisbank', careers: 'Vacatures', letstalk: 'CONTACT' },
    AR: { whatWeDo: 'ماذا نقدم', whoWeServe: 'من نخدم', whoWeAre: 'من نحن', resources: 'الموارد', careers: 'الوظائف', letstalk: 'تواصل معنا' },
    IT: { whatWeDo: 'Cosa Facciamo', whoWeServe: 'Chi Serviamo', whoWeAre: 'Chi Siamo', resources: 'Risorse', careers: 'Lavora Con Noi', letstalk: 'CONTATTACI' },
    FR: { whatWeDo: 'Ce Que Nous Faisons', whoWeServe: 'Nos Clients', whoWeAre: 'Qui Sommes-Nous', resources: 'Ressources', careers: 'Carrières', letstalk: 'CONTACTEZ-NOUS' },
    DE: { whatWeDo: 'Was Wir Tun', whoWeServe: 'Für Wen Wir Arbeiten', whoWeAre: 'Über Uns', resources: 'Ressourcen', careers: 'Karriere', letstalk: 'KONTAKT' },
  };

  const t = translations[currentLang] || translations.EN_UK;

  // Close mega menu on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navigation Subsections
  const navData = [
    {
      id: 'what-we-do',
      label: t.whatWeDo,
      width: 'w-[650px]',
      gridCols: 'grid-cols-2',
      subsections: [
        {
          title: 'DIGITAL IT WORKPLACE',
          items: [
            { id: 'end-user-services', name: 'End User Services' },
            { id: 'service-desk', name: 'Service Desk' },
            { id: 'field-services', name: 'Field Services' },
            { id: 'procurement-lifecycle', name: 'Procurement & Lifecycle Management' }
          ]
        },
        {
          title: 'CLOUD & DEVOPS',
          items: [
            { id: 'cloud-migration', name: 'Cloud Migration & Strategy' },
            { id: 'iac', name: 'Infrastructure as Code (IaC)' },
            { id: 'kubernetes', name: 'Kubernetes & Containerization' },
            { id: 'devsecops', name: 'DevSecOps Pipelines' }
          ]
        },
        {
          title: 'MANAGED CYBERSECURITY',
          items: [
            { id: 'soc-managed-detection', name: 'SOC & Managed Detection' },
            { id: 'vulnerability-management', name: 'Vulnerability Management' },
            { id: 'identity-access', name: 'Identity & Access Management' },
            { id: 'compliance-risk', name: 'Compliance & Risk Governance' }
          ]
        },
        {
          title: 'APPLICATION MODERNIZATION',
          items: [
            { id: 'legacy-transformation', name: 'Legacy System Transformation' },
            { id: 'microservices', name: 'Microservices Architecture' },
            { id: 'api-development', name: 'API Development & Integration' },
            { id: 'cloud-native-app', name: 'Cloud-Native App Development' }
          ]
        }
      ]
    },
    {
      id: 'who-we-serve',
      label: t.whoWeServe,
      width: 'w-[280px]',
      gridCols: 'grid-cols-1',
      subsections: [
        {
          title: 'INDUSTRIES',
          items: [
            { id: 'financial-services', name: 'Financial Services' },
            { id: 'healthcare', name: 'Healthcare' },
            { id: 'manufacturing', name: 'Manufacturing' },
            { id: 'it-technology', name: 'IT & Technology' },
            { id: 'education', name: 'Education' },
            { id: 'government-public-sector', name: 'Government & Public Sector' },
            { id: 'retail-ecommerce', name: 'Retail & E-commerce' },
            { id: 'legal-sector', name: 'Legal Sector' }
          ]
        }
      ]
    },
    {
      id: 'who-we-are',
      label: t.whoWeAre,
      width: 'w-[260px]',
      gridCols: 'grid-cols-1',
      subsections: [
        {
          title: 'COMPANY',
          items: [
            { id: 'about-teceze', name: 'About Teceze' },
            { id: 'leadership', name: 'Leadership' },
            { id: 'locate', name: 'Global Offices' }
          ]
        }
      ]
    },
    {
      id: 'resources',
      label: t.resources,
      width: 'w-[260px]',
      gridCols: 'grid-cols-1',
      subsections: [
        {
          title: 'LEARNING',
          items: [
            { id: 'case-studies', name: 'Case Studies' },
            { id: 'blog-insights', name: 'Blog & Insights' },
            { id: 'whitepapers', name: 'Whitepapers' }
          ]
        }
      ]
    }
  ];

  const handleItemClick = (id) => {
    setActiveMenu(null);
    if (onSelectService) onSelectService(id);
  };

  const selectedFlag = languages.find(l => l.code === currentLang)?.flag || '🌐';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
      isDark ? 'bg-[#030712]/95 border-slate-800/80 text-white' : 'bg-white/95 border-slate-200 text-slate-900'
    }`} ref={menuRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        
        {/* Official TECEZE Logo */}
        <div 
          onClick={() => handleItemClick(null)} 
          className="flex items-center cursor-pointer shrink-0 py-1"
        >
          <div className="bg-white px-2 py-1 rounded-md flex items-center shadow-sm">
            <img 
              src="/teceze-logo.png" 
              alt="TECEZE - Digital Innovation & Excellence" 
              className="h-7 w-auto object-contain"
            />
          </div>
        </div>

        {/* Center Nav Links with Subsections Dropdown */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-semibold">
          {navData.map((menu) => (
            <div key={menu.id} className="relative py-5">
              <button
                onClick={() => setActiveMenu(activeMenu === menu.id ? null : menu.id)}
                className={`flex items-center gap-1.5 transition-colors ${
                  activeMenu === menu.id 
                    ? 'text-cyan-400' 
                    : isDark ? 'text-slate-200 hover:text-cyan-400' : 'text-slate-700 hover:text-cyan-600'
                }`}
              >
                {menu.label}
                <span className="text-[10px]">{activeMenu === menu.id ? '▲' : '▼'}</span>
              </button>

              {/* Mega Menu Dropdown */}
              {activeMenu === menu.id && (
                <div className={`absolute top-full left-0 ${menu.width} p-6 rounded-2xl border shadow-2xl z-50 grid ${menu.gridCols} gap-6 ${
                  isDark ? 'bg-[#070E1B] border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
                }`}>
                  {menu.subsections.map((sub, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="text-xs font-bold tracking-wider uppercase text-cyan-400 border-b border-slate-800/60 pb-2">
                        {sub.title}
                      </div>
                      <ul className="space-y-2">
                        {sub.items.map((item) => (
                          <li key={item.id}>
                            <button
                              onClick={() => handleItemClick(item.id)}
                              className={`text-xs block w-full text-left font-medium transition-colors ${
                                isDark 
                                  ? 'text-slate-300 hover:text-cyan-400' 
                                  : 'text-slate-600 hover:text-cyan-600'
                              }`}
                            >
                              {item.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Careers Link */}
          <button
            onClick={() => handleItemClick('careers')}
            className={`transition-colors ${isDark ? 'text-slate-200 hover:text-cyan-400' : 'text-slate-700 hover:text-cyan-600'}`}
          >
            {t.careers}
          </button>

          {/* Search Bar */}
          <div className="w-36 xl:w-44 ml-1">
            <SearchBar onSelectResult={handleItemClick} theme={theme} />
          </div>
        </nav>

        {/* Right Section Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Language Switcher Dropdown */}
          {setLanguage && (
            <div className={`flex items-center gap-1.5 px-2 py-1 rounded-lg border text-xs font-medium ${
              isDark ? 'border-slate-800 bg-slate-900/80 text-slate-200' : 'border-slate-300 bg-slate-50 text-slate-800'
            }`}>
              <span className="text-sm">{selectedFlag}</span>
              <select
                value={currentLang}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent text-xs font-semibold outline-none cursor-pointer"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className={isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}>
                    {lang.code.replace('_', ' ')}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Theme Switcher Button */}
          <button
            onClick={() => setTheme && setTheme(isDark ? 'light' : 'dark')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              isDark 
                ? 'border-slate-700 bg-slate-900 text-cyan-400 hover:bg-slate-800' 
                : 'border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>

          {/* CTA Button: Triggers "talk" tab and scrolls to section */}
          <button
            onClick={() => handleItemClick('talk')}
            className="hidden sm:inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-colors shadow-md shadow-cyan-500/10 uppercase tracking-wide cursor-pointer"
          >
            {t.letstalk}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-t p-4 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
          <SearchBar onSelectResult={(id) => { setMobileMenuOpen(false); handleItemClick(id); }} theme={theme} />
          {navData.map((menu) => (
            <div key={menu.id} className="space-y-2">
              <div className={`text-xs font-bold uppercase ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>{menu.label}</div>
              {menu.subsections.map((sub, idx) => (
                <div key={idx} className="pl-3 space-y-1">
                  <div className={`text-[11px] font-semibold ${isDark ? 'text-slate-300' : 'text-slate-900'}`}>{sub.title}</div>
                  {sub.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => { setMobileMenuOpen(false); handleItemClick(item.id); }}
                      className={`block text-xs py-0.5 text-left w-full transition-colors ${
                        isDark 
                          ? 'text-slate-400 hover:text-cyan-400' 
                          : 'text-slate-600 hover:text-cyan-600 font-medium'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          ))}
          {/* Mobile Let's Talk CTA */}
          <button
            onClick={() => { setMobileMenuOpen(false); handleItemClick('talk'); }}
            className="w-full py-2.5 rounded-xl text-xs font-bold bg-cyan-400 text-slate-950 uppercase tracking-wide text-center"
          >
            {t.letstalk}
          </button>
        </div>
      )}
    </header>
  );
}