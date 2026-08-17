import React, { useState } from 'react';

export default function PracticeFrameworkSection({ theme = 'dark' }) {
  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = useState('architecture'); // 'architecture' or 'matrix'

  // Data for 5-Tier Reference Architecture
  const referenceArchitectureTiers = [
    {
      tier: 'Tier 1',
      title: 'User Experience & Edge Tier',
      description: 'API Gateways, Edge Caching, CDN, Web/Mobile Frontends & Micro-frontends.'
    },
    {
      tier: 'Tier 2',
      title: 'Security & Identity Governance',
      description: 'Zero-Trust Architecture, OAuth2/OIDC, WAF, Secret Management & IAM.'
    },
    {
      tier: 'Tier 3',
      title: 'Microservices & Business Logic',
      description: 'Containerized Services (K8s), Domain-Driven Design (DDD), Serverless.'
    },
    {
      tier: 'Tier 4',
      title: 'Event Streaming & Integration',
      description: 'Event-driven Architecture, Kafka, RabbitMQ, Service Mesh (Istio).'
    },
    {
      tier: 'Tier 5',
      title: 'Data & Persistence Tier',
      description: 'Polyglot Persistence, Distributed Databases, Data Lakes & Caching Layers.'
    }
  ];

  // Data for Transformation Matrix
  const transformationMatrixItems = [
    {
      strategy: 'Rehost (Lift & Shift)',
      scope: 'Legacy VM to Cloud IaaS',
      impact: 'Immediate infrastructure cost reduction with minimal code change.',
      timeline: '1 - 3 Months'
    },
    {
      strategy: 'Replatform (Lift & Reshape)',
      scope: 'Database & Middleware Migration',
      impact: 'Adopts managed cloud services (RDS, Managed K8s) without core rewrites.',
      timeline: '3 - 6 Months'
    },
    {
      strategy: 'Refactor / Rearchitect',
      scope: 'Monolith to Microservices',
      impact: 'Decouples business domains for maximum cloud-native scalability.',
      timeline: '6 - 12 Months'
    },
    {
      strategy: 'Rebuild (Cloud Native)',
      scope: 'Serverless & Modern Stack',
      impact: 'Completely reimagines core applications using serverless & event-driven patterns.',
      timeline: '6 - 18 Months'
    }
  ];

  return (
    <section className={`py-16 transition-colors duration-300 ${isDark ? 'bg-[#030712]/75 backdrop-blur-md text-white' : 'bg-slate-50/75 backdrop-blur-md text-slate-900'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Block */}
        <div className={`p-8 md:p-12 rounded-3xl border ${isDark ? 'bg-[#070E1B]/90 border-slate-800' : 'bg-white/90 border-slate-200 shadow-xl'}`}>
          
          <div className="space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              TECEZE 
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Application Modernization <br />
              <span className="text-cyan-400">& Cloud-Native Architecture</span>
            </h2>

            <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              We eliminate technical debt, decouple monolithic codebases, and transform legacy core systems into high-performing, resilient enterprise assets through systematic engineering patterns.
            </p>
          </div>

          {/* Interactive Navigation Toggle Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-6 py-3 rounded-xl text-xs font-extrabold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                activeTab === 'architecture'
                  ? 'bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/25 scale-105'
                  : isDark 
                    ? 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700' 
                    : 'bg-slate-100 text-slate-600 border border-slate-300 hover:text-slate-900'
              }`}
            >
              5-Tier Reference Architecture
            </button>

            <button
              onClick={() => setActiveTab('matrix')}
              className={`px-6 py-3 rounded-xl text-xs font-extrabold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                activeTab === 'matrix'
                  ? 'bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/25 scale-105'
                  : isDark 
                    ? 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700' 
                    : 'bg-slate-100 text-slate-600 border border-slate-300 hover:text-slate-900'
              }`}
            >
              Transformation Matrix
            </button>
          </div>
        </div>

        {/* Dynamic Content Display */}
        <div className="mt-10">
          
          {/* TAB 1: 5-TIER REFERENCE ARCHITECTURE CONTENT */}
          {activeTab === 'architecture' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
              {referenceArchitectureTiers.map((tier, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    isDark 
                      ? 'bg-[#09111e]/90 border-slate-800 hover:border-cyan-500/40' 
                      : 'bg-white/90 border-slate-200 shadow-md hover:border-cyan-500/40'
                  }`}
                >
                  <div className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">
                    {tier.tier}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{tier.title}</h3>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {tier.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: TRANSFORMATION MATRIX CONTENT */}
          {activeTab === 'matrix' && (
            <div className="space-y-6 animate-fadeIn">
              <div className={`p-6 rounded-2xl border ${isDark ? 'bg-[#09111e]/90 border-slate-800' : 'bg-white/90 border-slate-200 shadow-lg'}`}>
                <h3 className="text-xl font-bold mb-2">Application Modernization Matrix</h3>
                <p className={`text-xs mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Strategic pathways for migrating legacy monoliths to modern cloud infrastructure based on technical debt and business risk.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {transformationMatrixItems.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-5 rounded-xl border flex flex-col justify-between space-y-4 ${
                        isDark ? 'bg-[#050B14]/90 border-slate-800/80' : 'bg-slate-50/90 border-slate-200'
                      }`}
                    >
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                          {item.strategy}
                        </span>
                        <h4 className="text-sm font-extrabold pt-2">{item.scope}</h4>
                        <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          {item.impact}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                        <span className="text-slate-500 font-medium">Est. Timeline:</span>
                        <span className="font-mono font-bold text-cyan-400">{item.timeline}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}