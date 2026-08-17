import React from 'react';
import { Zap, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { Translations } from '../translations'; // Adjust path if needed (e.g., '../utils/translations')

export default function AppModernization({ theme }) {
  // Pull language directly from Context
  const { language } = useLanguage();

  // Normalize language keys (handles EN_UK, en-GB, ES, FR)
  const normalizedLang = (language || 'EN_UK').replace('_', '-');
  
  // Find matching translation object or fallback gracefully
  const langObj = 
    Translations[language] || 
    Translations[normalizedLang] || 
    Translations['EN_UK'] || 
    Translations['en-GB'] || 
    Translations['en'];

  // Default fallback strings in case keys in translations.js are structured differently
  const hero = langObj?.hero || {
    badge: "TECEZE PRACTICE FRAMEWORK",
    title: "Application Modernization",
    subtitle: "& Cloud-Native Architecture",
    description: "We eliminate technical debt, decouple monolithic codebases, and transform legacy core systems into high-performing, resilient enterprise assets through systematic engineering patterns.",
    btn1: "5-Tier Reference Architecture",
    btn2: "Transformation Matrix"
  };

  const sections = langObj?.sections || {
    execOverview: "1. Executive Overview",
    execDesc1: "Legacy application architectures represent the single largest inhibitor to enterprise agility. Monolithic codebases, tightly coupled data layers, and manual deployment models cripple an organization's capacity to innovate.",
    execDesc2: "Modernization is an architectural evolution—demanding systematic decoupling, API orchestration, and containerized elasticity to unlock sustainable long-term business value.",
    bottlenecksTitle: "2. Core Legacy Bottlenecks",
    frictionCount: "4 Operational Frictions"
  };

  const bottlenecks = langObj?.bottlenecks || [
    { title: "Monolithic Monopolization", desc: "Single-point-of-failure deployments delaying feature velocity." },
    { title: "Brittle Data Schemas", desc: "Tightly-coupled relational databases bottlenecking throughput." },
    { title: "Manual Ops Overhead", desc: "Lack of automated CI/CD pipelines increasing error rates." },
    { title: "Technical Debt Accumulation", desc: "Outdated dependencies restricting cloud scalability." }
  ];

  const isDark = theme === 'dark';

  return (
    <section className={`py-16 transition-colors duration-300 ${isDark ? 'bg-[#0B0F17] text-gray-200' : 'bg-slate-50 text-slate-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section */}
        <div className={`relative rounded-3xl border p-8 sm:p-12 overflow-hidden shadow-2xl transition-all ${
          isDark 
            ? 'bg-gradient-to-b from-gray-900 via-gray-900/90 to-[#0B0F17] border-gray-800' 
            : 'bg-white border-slate-200 shadow-slate-200/50'
        }`}>
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold">
              <Zap className="w-3.5 h-3.5" /> {hero.badge}
            </div>
            
            <h1 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {hero.title} <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                {hero.subtitle}
              </span>
            </h1>

            <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{hero.description}</p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button className="px-5 py-2.5 rounded-xl text-xs font-bold bg-cyan-500 text-white shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition-colors">
                {hero.btn1}
              </button>
              <button className={`px-5 py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                isDark ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}>
                {hero.btn2}
              </button>
            </div>
          </div>
        </div>

        {/* Executive Overview & Bottlenecks */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className={`lg:col-span-5 border rounded-2xl p-8 space-y-4 ${
            isDark ? 'bg-gray-900/60 border-gray-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{sections.execOverview}</h2>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{sections.execDesc1}</p>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{sections.execDesc2}</p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <h2 className={`text-xl font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <ShieldAlert className="w-5 h-5 text-cyan-500" /> {sections.bottlenecksTitle}
              </h2>
              <span className="text-xs text-slate-500">{sections.frictionCount}</span>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {bottlenecks && bottlenecks.map((item, idx) => (
                <div key={idx} className={`border rounded-xl p-5 transition-all ${
                  isDark 
                    ? 'bg-gray-900/40 border-gray-800 hover:border-cyan-500/30' 
                    : 'bg-white border-slate-200 hover:border-cyan-500/50 shadow-sm'
                }`}>
                  <h3 className={`text-sm font-bold mb-2 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    <span className="w-2 h-2 rounded-full bg-cyan-500" /> {item.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}