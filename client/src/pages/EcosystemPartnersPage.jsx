import React, { useState } from 'react';
import ContactAndLocations from '../components/ContactAndLocations.jsx';

export default function EcosystemPartnersPage({ onBack, theme = 'dark' }) {
  const isDark = theme === 'dark';
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const partnerDepartments = [
    {
      id: 'cloud',
      name: 'Cloud & Infrastructure',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
      description: 'Scaling core computing resources and migrating monolithic infrastructure to secure, low-latency cloud ecosystems.',
      partners: [
        { name: 'Microsoft Azure & Enterprise', role: 'Cloud Platform Partner', detail: 'Teceze deploys hybrid cloud environments, optimizing enterprise application performance across global regions.' },
        { name: 'AWS Ecosystem', role: 'Infrastructure Integration', detail: 'Automating continuous delivery pipelines, serverless compute configurations, and multi-region failovers.' },
        { name: 'Oracle Cloud Infrastructure', role: 'Database Modernization', detail: 'Migrating legacy high-transaction enterprise databases onto autonomous high-performance storage structures.' },
        { name: 'Dell & Lenovo Hardware', role: 'Hardware & Edge Partner', detail: 'Provisioning enterprise-grade secure hardware solutions for hybrid workforce operations.' }
      ]
    },
    {
      id: 'finance',
      name: 'Fintech & Banking',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      description: 'Delivering ultra-secure, compliant financial data pipelines and high-frequency trading infrastructure.',
      partners: [
        { name: 'State Street', role: 'Institutional Financial Client', detail: 'Teceze engineers secure transaction gateways and automated auditing frameworks to maintain absolute regulatory compliance.' },
        { name: 'SBI Securities', role: 'Investment Tech Partner', detail: 'Providing low-latency market data processing engines and robust real-time trading dashboards.' },
        { name: 'FactSet', role: 'Financial Data Analytics', detail: 'Integrating large-scale market data feeds into unified enterprise analytics dashboards.' }
      ]
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Life Sciences',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      description: 'Ensuring HIPAA-compliant patient management platforms, medical records encryption, and clinical analytics.',
      partners: [
        { name: 'HCA Healthcare', role: 'Clinical Network Client', detail: 'Teceze modernizes patient record systems and implements Zero-Trust network segmentation across regional hospitals.' },
        { name: 'NHS England Partners', role: 'Public Health Infrastructure', detail: 'Deploying secure remote diagnostics transmission channels and encrypted administrative databases.' },
        { name: 'Apollo Hospitals', role: 'Healthcare Provider', detail: 'Upgrading emergency response dispatch systems and medical imaging retrieval pipelines.' },
        { name: 'Tanner Pharma Group', role: 'Global Pharmaceutical Logistics', detail: 'Managing secure supply chain tracking networks for temperature-sensitive global medication delivery.' }
      ]
    },
    {
      id: 'enterprise',
      name: 'Global Enterprise & Conglomerates',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      description: 'Providing comprehensive digital transformation, legacy codebase decoupling, and automated enterprise workflows.',
      partners: [
        { name: 'Volvo Group', role: 'Automotive & Logistics Leader', detail: 'Teceze implements IoT telemetry streaming frameworks for fleet monitoring and predictive maintenance analytics.' },
        { name: 'Tata Group Entities', role: 'Strategic Enterprise Partner', detail: 'Building cross-platform API integration layers to streamline supply chain transparency.' },
        { name: 'Nestlé', role: 'FMCG Global Enterprise', detail: 'Optimizing warehouse management databases and automated global inventory distribution software.' },
        { name: 'ExxonMobil', role: 'Energy Sector Partner', detail: 'Deploying advanced cybersecurity intrusion detection systems for critical operational infrastructure.' }
      ]
    }
  ];

  const filteredDepartments = selectedDepartment === 'All' 
    ? partnerDepartments 
    : partnerDepartments.filter(d => d.name === selectedDepartment);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#050A12] text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Back button strip placed right underneath the fixed navbar */}
      <div className={`border-b ${isDark ? 'bg-[#03070E] border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-xl border transition-all cursor-pointer ${
              isDark 
                ? 'border-slate-800 text-cyan-400 hover:bg-slate-900' 
                : 'border-slate-300 text-cyan-700 hover:bg-slate-100'
            }`}
          >
            &larr; Back to Homepage
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Enterprise Collaboration Network
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Ecosystem Partners & <br />
            <span className="text-cyan-400">Client Divisions</span>
          </h1>
          <p className={`text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore how Teceze collaborates across specialized industrial sectors—delivering high-performance cloud architectures, rigorous cybersecurity, and scalable software solutions.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
          {['All', 'Cloud & Infrastructure', 'Fintech & Banking', 'Healthcare & Life Sciences', 'Global Enterprise & Conglomerates'].map((dept) => (
            <button
              key={dept}
              type="button"
              onClick={() => setSelectedDepartment(dept)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer ${
                selectedDepartment === dept
                  ? 'bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20'
                  : isDark 
                    ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white' 
                    : 'bg-white border border-slate-300 text-slate-600 hover:text-slate-900'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        <div className="mt-16 space-y-20">
          {filteredDepartments.map((dept, idx) => (
            <div 
              key={dept.id} 
              className={`p-8 md:p-12 rounded-3xl border ${
                isDark ? 'bg-[#080E1A] border-slate-800/80' : 'bg-white border-slate-200 shadow-xl'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                    Department 0{idx + 1}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-extrabold">{dept.name}</h2>
                  <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {dept.description}
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl h-64">
                    <img 
                      src={dept.image} 
                      alt={dept.name} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-800/60">
                {dept.partners.map((partner, pIdx) => (
                  <div 
                    key={pIdx}
                    className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                      isDark 
                        ? 'bg-[#040810] border-slate-800 hover:border-cyan-500/40 text-white' 
                        : 'bg-slate-50 border-slate-200 hover:border-cyan-500/40 shadow-sm text-slate-900'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{partner.name}</h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                        {partner.role}
                      </span>
                    </div>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      <strong className={isDark ? 'text-slate-200' : 'text-slate-800'}>How Teceze Helps:</strong> {partner.detail}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>

      <div id="ecosystem-contact" className="mt-20">
        <ContactAndLocations theme={theme} isDark={isDark} initialTab="talk" />
      </div>

    </div>
  );
}