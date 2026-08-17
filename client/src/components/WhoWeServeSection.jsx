import React from 'react';
import { whoWeServeData } from '../data/whoWeServeData';

export default function WhoWeServeSection({ theme = 'dark', onSelectIndustry }) {
  const isDark = theme === 'dark';
  const industries = Object.values(whoWeServeData);

  return (
    <section id="who-we-serve" className={`py-20 border-t transition-colors duration-300 ${
      isDark ? 'bg-[#050A12] text-slate-100 border-cyan-900/30' : 'bg-slate-50 text-slate-900 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest">
            WHO WE SERVE
          </div>
          <h2 className={`text-3xl sm:text-4xl font-black tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Tailored Industry Solutions
          </h2>
          <p className={`text-sm font-medium leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Empowering enterprise verticals with specialized technology frameworks, strict compliance alignment, and battle-tested domain expertise.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item) => (
            <div
              key={item.id}
              id={item.id}
              onClick={() => onSelectIndustry && onSelectIndustry(item.id)}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 ${
                isDark 
                  ? 'bg-[#081324] border-cyan-900/40 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/10' 
                  : 'bg-white border-slate-200 hover:border-cyan-500 hover:shadow-xl'
              }`}
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500 font-black text-sm group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  🏢
                </div>
                <h3 className={`text-lg font-bold transition-colors ${
                  isDark ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-cyan-600'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-xs leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-cyan-500/10 space-y-2">
                <div className="text-[11px] font-bold text-cyan-500 group-hover:underline flex items-center gap-1">
                  Explore solution →
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}