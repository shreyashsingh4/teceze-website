import React from 'react';
import { whatWeDoData } from '../data/whatWeDoData.js';

export default function ServiceContent({ activeSubSection }) {
  // Normalize key (e.g., handles lowercase / hyphenated formats)
  const normalizedKey = activeSubSection ? activeSubSection.trim().toLowerCase() : '';

  // Get matching data or default to the first available service if missing
  const data = whatWeDoData[normalizedKey] || whatWeDoData['end-user-services'];

  return (
    <div className="space-y-8 p-6 bg-[#081324] rounded-2xl border border-cyan-900/40 text-slate-100">
      <div className="border-b border-cyan-900/50 pb-4">
        <span className="text-xs font-bold uppercase text-cyan-400 tracking-wider">
          Service Details
        </span>
        <h2 className="text-3xl font-black mt-1 text-white">{data.title}</h2>
        <p className="text-slate-300 mt-2 text-base font-medium">
          {data.subtitle || data.description}
        </p>
      </div>

      <div>
        <h3 className="text-xs font-extrabold uppercase tracking-widest text-cyan-500 mb-3">
          Overview
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed">
          {data.description}
        </p>
      </div>

      {data.capabilities && (
        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-cyan-500 mb-4">
            Key Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.capabilities.map((cap, i) => (
              <div key={i} className="p-3 bg-[#0b1b33] rounded-lg border border-cyan-900/30 flex items-center gap-2">
                <span className="text-cyan-400 font-bold">✓</span>
                <span className="text-xs text-slate-200">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.tools && (
        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-cyan-500 mb-3">
            Technologies & Tools 
          </h3>
          <div className="flex flex-wrap gap-2">
            {data.tools.map((tool, i) => (
              <span key={i} className="px-3 py-1 bg-[#0b1b33] text-cyan-300 text-xs font-bold border border-cyan-500/30 rounded-lg">
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}