import React from 'react';
import { whoWeServeData } from '../data/whoWeServeData.js';

export default function IndustryDetailPage({ industryId, onBack, theme = 'dark', onScheduleClick }) {
  const isDark = theme === 'dark';
  
  // Find matching industry data or default to financial-services
  const industry = whoWeServeData[industryId] || whoWeServeData["financial-services"];

  const handleScheduleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof onScheduleClick === 'function') {
      onScheduleClick();
    } else {
      const contactSection = document.getElementById('contact') || document.querySelector('footer');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`min-h-screen pt-2 md:pt-3 pb-12 transition-colors duration-300 ${
      isDark ? 'bg-[#050A12] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Back Button */}
        <div>
          <button
            onClick={onBack}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all border ${
              isDark 
                ? 'bg-[#081324] text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/10' 
                : 'bg-white text-slate-700 border-slate-300 hover:border-cyan-600 hover:text-cyan-600 shadow-sm'
            }`}
          >
            ← Back to Overview
          </button>
        </div>

        {/* Hero Section */}
        <div className={`p-8 sm:p-12 rounded-3xl border transition-colors ${
          isDark ? 'bg-[#081324] border-cyan-900/40' : 'bg-white border-slate-200 shadow-md'
        }`}>
          <div className="space-y-4 max-w-3xl">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
              {industry.category}
            </span>
            <h1 className={`text-3xl sm:text-5xl font-black tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {industry.title}
            </h1>
            <p className={`text-base sm:text-lg font-medium leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {industry.tagline}
            </p>
          </div>
        </div>

        {/* Industry Overview */}
        <div className={`p-8 rounded-2xl border ${
          isDark ? 'bg-[#081324] border-cyan-900/40' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-cyan-500 mb-3">
            Industry Challenges & Focus
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            {industry.overview}
          </p>
        </div>

        {/* Key Tailored Solutions */}
        <div className={`p-8 rounded-2xl border ${
          isDark ? 'bg-[#081324] border-cyan-900/40' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-cyan-500 mb-6">
            Key Tailored Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industry.keySolutions.map((sol, idx) => (
              <div key={idx} className={`p-4 rounded-xl border flex items-start gap-3 ${
                isDark ? 'bg-[#0b1b33] border-cyan-900/30' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className="text-cyan-500 font-bold text-sm">✓</span>
                <p className={`text-xs sm:text-sm font-medium ${
                  isDark ? 'text-slate-200' : 'text-slate-800'
                }`}>
                  {sol}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Outcomes & Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Measured Outcomes */}
          <div className={`p-8 rounded-2xl border ${
            isDark ? 'bg-[#081324] border-cyan-900/40' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-cyan-500 mb-6">
              Proven Business Outcomes
            </h2>
            <ul className="space-y-4">
              {industry.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0"></span>
                  <span className={`text-xs sm:text-sm font-medium ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className={`p-8 rounded-2xl border ${
            isDark ? 'bg-[#081324] border-cyan-900/40' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-cyan-500 mb-6">
              Industry Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {industry.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold border ${
                    isDark 
                      ? 'bg-[#0b1b33] text-cyan-300 border-cyan-500/30' 
                      : 'bg-slate-100 text-slate-800 border-slate-300'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* CTA Banner with Fixed Click Handling */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8 md:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-black/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center md:text-left space-y-1.5 pointer-events-none">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Need custom engineering solutions for {industry.title}?
            </h2>
            <p className="text-blue-100 text-sm md:text-base font-medium">
              Partner with our elite {industry.title} domain specialists.
            </p>
          </div>

          <div className="relative z-50 shrink-0">
            <button
              type="button"
              onClick={handleScheduleClick}
              className="px-7 py-3.5 rounded-full bg-[#050A12] text-white hover:bg-slate-900 font-bold text-xs uppercase tracking-widest shadow-2xl border border-white/25 transition-all duration-300 hover:scale-105 cursor-pointer pointer-events-auto flex items-center gap-2"
            >
              <span>Start Your Project</span>
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}