import React from 'react';

const companyData = {
  'about': {
    title: 'About Teceze',
    tagline: 'Architecting Enterprise Digital Excellence Across the Globe',
    overview: 'Teceze is a global technology solutions partner empowering organizations with end-to-end IT workplace management, cloud transformation, devops, cybersecurity, and modern application engineering.',
    values: [
      { name: 'Customer First', desc: 'SLA-driven excellence with tailored enterprise architectures.' },
      { name: 'Innovation at Scale', desc: 'Automating complex cloud & IT operations using intelligent systems.' },
      { name: 'Uncompromised Security', desc: 'Zero Trust principles integrated into every solution layer.' }
    ],
    stats: [
      { label: 'Global Engineers', value: '500+' },
      { label: 'Countries Served', value: '100+' },
      { label: 'Enterprise CSAT', value: '98%' }
    ]
  },
  'leadership': {
    title: 'Leadership Team',
    tagline: 'Visionary Leaders Driving Global Technology Strategy',
    overview: 'Our executive leadership brings decades of experience from Fortune 500 tech enterprises and cloud innovators.',
    values: [
      { name: 'Strategic Vision', desc: 'Navigating complex global IT transformations.' },
      { name: 'Engineering Excellence', desc: 'Prioritizing robust architecture and continuous improvement.' }
    ],
    stats: [
      { label: 'Years Combined Experience', value: '80+' },
      { label: 'Global Delivery Centers', value: '8' }
    ]
  },
  'global-offices': {
    title: 'Global Offices',
    tagline: 'Operating 24/7 Across Key Tech Hubs Worldwide',
    overview: 'With strategic presence across North America, Europe, and Asia-Pacific, our engineers deliver round-the-clock technical operations.',
    values: [
      { name: 'Follow-the-Sun Support', desc: 'Seamless handover between regional operations teams.' },
      { name: 'Local Expertise', desc: 'Native technical teams fluent in regional compliance standards.' }
    ],
    stats: [
      { label: 'Regional Hubs', value: '12' },
      { label: '24/7 Operations Centers', value: '4' }
    ]
  }
};

// Aliases for "About Teceze"
companyData['about-teceze'] = companyData['about'];
companyData['about-us'] = companyData['about'];

export default function CompanyDetailPage({ companyId, onBack, theme = 'dark' }) {
  const isDark = theme === 'dark';
  const cleanId = companyId ? companyId.replace(/^#/, '') : 'about';
  const data = companyData[cleanId] || companyData['about'];

  return (
    <div className={`min-h-screen pt-2 md:pt-3 pb-12 transition-colors duration-300 ${
      isDark ? 'bg-[#050A12] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <button
            onClick={onBack}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border transition-all ${
              isDark 
                ? 'bg-[#081324] text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/10' 
                : 'bg-white text-slate-700 border-slate-300 hover:border-cyan-600 hover:text-cyan-600 shadow-sm'
            }`}
          >
            ← Back to Home
          </button>
        </div>

        {/* Hero */}
        <div className={`p-8 sm:p-12 rounded-3xl border ${
          isDark ? 'bg-[#081324] border-cyan-900/40' : 'bg-white border-slate-200 shadow-md'
        }`}>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 mb-4">
            WHO WE ARE
          </span>
          <h1 className="text-3xl sm:text-5xl font-black">{data.title}</h1>
          <p className="text-base sm:text-lg text-slate-400 mt-2 font-medium">{data.tagline}</p>
          <p className="text-sm text-slate-300 mt-4 leading-relaxed">{data.overview}</p>
        </div>

        {/* Stats */}
        {data.stats && (
          <div className="grid grid-cols-3 gap-4">
            {data.stats.map((stat, i) => (
              <div key={i} className={`p-6 rounded-2xl border text-center ${
                isDark ? 'bg-[#081324] border-cyan-900/40' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="text-2xl sm:text-4xl font-black text-cyan-400">{stat.value}</div>
                <div className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Values / Highlights */}
        {data.values && (
          <div className={`p-8 rounded-2xl border ${
            isDark ? 'bg-[#081324] border-cyan-900/40' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-cyan-500 mb-6">Core Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.values.map((v, i) => (
                <div key={i} className={`p-4 rounded-xl border ${
                  isDark ? 'bg-[#0b1b33] border-cyan-900/30' : 'bg-slate-50 border-slate-200'
                }`}>
                  <h3 className="font-bold text-sm text-cyan-400 mb-1">{v.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}