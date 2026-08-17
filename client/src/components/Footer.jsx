import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../utils/translations';

export default function Footer({ theme, onLocateClick, onContactClick, onSelectService }) {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const isDark = theme === 'dark';

  const handleLocateClick = () => {
    if (onLocateClick) {
      onLocateClick();
    } else if (onSelectService) {
      onSelectService('locate');
    }
  };

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    } else if (onSelectService) {
      onSelectService('talk');
    }
  };

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/tecezeltd/',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/teceze_/',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Twitter (X)',
      url: 'https://x.com/teceze_',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/teceze/',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className={`border-t transition-colors duration-300 ${
      isDark 
        ? 'bg-[#03070E] border-slate-800 text-slate-300' 
        : 'bg-slate-200 border-slate-300 text-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* 1. Brand Info */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/teceze-logo.png" 
                alt="Teceze Logo" 
                className="h-8 w-auto object-contain" 
              />
            </div>
            <p className={`text-xs leading-relaxed max-w-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {t('footerDesc')}
            </p>
            <div>
              <button 
                onClick={handleLocateClick}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold transition-all cursor-pointer ${
                  isDark 
                    ? 'border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10' 
                    : 'border-cyan-600/60 text-cyan-700 hover:bg-cyan-500/10'
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center text-[10px] font-bold">→</span>
                {t('locateUs')}
              </button>
            </div>
          </div>

          {/* 2. Technology Partners */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
              {t('techPartner')}
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              <div className={`px-2.5 py-1.5 rounded border flex items-center justify-center h-8 ${isDark ? 'bg-slate-800/80 border-slate-700/50' : 'bg-white border-slate-300 shadow-sm'}`}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="h-3.5 w-auto object-contain" />
              </div>
              <div className={`px-2.5 py-1.5 rounded border flex items-center justify-center h-8 ${isDark ? 'bg-slate-800/80 border-slate-700/50' : 'bg-white border-slate-300 shadow-sm'}`}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" alt="Lenovo" className="h-3.5 w-auto object-contain" />
              </div>
              <div className={`px-2.5 py-1.5 rounded border flex items-center justify-center h-8 ${isDark ? 'bg-slate-800/80 border-slate-700/50' : 'bg-white border-slate-300 shadow-sm'}`}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" alt="Oracle" className="h-3 w-auto object-contain" />
              </div>
              <div className={`px-2.5 py-1.5 rounded border flex items-center justify-center h-8 ${isDark ? 'bg-slate-800/80 border-slate-700/50' : 'bg-white border-slate-300 shadow-sm'}`}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" alt="Dell" className="h-3.5 w-auto object-contain" />
              </div>
              <div className={`px-2.5 py-1.5 rounded border flex items-center justify-center h-8 ${isDark ? 'bg-slate-800/80 border-slate-700/50' : 'bg-white border-slate-300 shadow-sm'}`}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" alt="HP" className="h-4 w-auto object-contain" />
              </div>
              <div className={`px-2.5 py-1.5 rounded border flex items-center justify-center h-8 ${isDark ? 'bg-slate-800/80 border-slate-700/50' : 'bg-white border-slate-300 shadow-sm'}`}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-3.5 w-auto object-contain" />
              </div>
              <div className={`px-2.5 py-1.5 rounded border flex items-center justify-center h-8 ${isDark ? 'bg-slate-800/80 border-slate-700/50' : 'bg-white border-slate-300 shadow-sm'}`}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="h-3.5 w-auto object-contain" />
              </div>
            </div>
          </div>

          {/* 3. Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-1 ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                {t('sendEmail')}
              </h4>
              <button 
                onClick={handleContactClick}
                className={`text-xs font-medium hover:underline text-left cursor-pointer ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}
              >
                info@teceze.com
              </button>
            </div>

            <div>
              <h4 className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {t('callUs')}
              </h4>
              <div className={`space-y-1 text-xs ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                <div className="flex justify-between max-w-xs">
                  <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>UK</span>
                  <a href="tel:+442045512020" className="font-mono font-medium hover:underline">+44 20 4551 2020</a>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>USA</span>
                  <a href="tel:+13322820555" className="font-mono font-medium hover:underline">+1 332 282 0555</a>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>India</span>
                  <a href="tel:+917824827322" className="font-mono font-medium hover:underline">+91 7824827322</a>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Follow Us Section */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
              {t('followUs')}
            </h4>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {t('followDesc')}
            </p>
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.name}
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all transform hover:-translate-y-0.5 ${
                    isDark
                      ? 'bg-slate-900/80 border-slate-700/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800'
                      : 'bg-white border-slate-300 text-slate-700 hover:text-cyan-600 hover:border-cyan-500 hover:shadow-sm'
                  }`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className={`pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] ${
          isDark ? 'border-slate-800/80 text-slate-500' : 'border-slate-300 text-slate-600'
        }`}>
          <div>
            © {new Date().getFullYear()} MADE WITH TECEZE.COM. {t('copyright')}
          </div>
          <div className="flex items-center gap-6 font-medium">
            <a href="#accessibility" className={`transition-colors ${isDark ? 'hover:text-slate-300' : 'hover:text-slate-900'}`}>ACCESSIBILITY</a>
            <a href="#cookie" className={`transition-colors ${isDark ? 'hover:text-slate-300' : 'hover:text-slate-900'}`}>COOKIE</a>
            <a href="#privacy" className={`transition-colors ${isDark ? 'hover:text-slate-300' : 'hover:text-slate-900'}`}>LEGAL & PRIVACY</a>
          </div>
        </div>
      </div>
    </footer>
  );
}