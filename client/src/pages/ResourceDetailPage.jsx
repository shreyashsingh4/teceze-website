import React from 'react';

const resourcesData = {
  'case-studies': {
    title: 'Case Studies',
    tagline: 'Real-World Client Transformation & Enterprise Success Stories',
    description: 'Explore how Teceze helps enterprise clients scale cloud infrastructure, streamline operations, and secure critical assets.',
    items: [
      {
        title: 'Global Financial Institution Cloud Modernization',
        category: 'Cloud & Infrastructure',
        summary: 'Migrated 400+ legacy workloads to AWS with zero unplanned downtime while lowering cloud cost by 32%.'
      },
      {
        title: '24/7 SOC Implementation for Healthcare Network',
        category: 'Cybersecurity',
        summary: 'Deployed managed threat detection and automated incident response across 12,000+ medical devices.'
      }
    ]
  },
  'blog': {
    title: 'Blog & Insights',
    tagline: 'Latest Tech Trends, Engineering Best Practices & Industry Thought Leadership',
    description: 'Deep dives into modern cloud architectures, DevSecOps pipelines, identity governance, and enterprise IT management.',
    items: [
      {
        title: 'Building Zero Trust Security in Hybrid Cloud Environments',
        category: 'Cybersecurity',
        summary: 'How modern enterprises enforce least-privilege access control without slowing down engineering momentum.'
      },
      {
        title: 'The Real Cost of Cloud Misconfigurations in 2026',
        category: 'Cloud & DevOps',
        summary: 'Top 5 infrastructure-as-code security flaws and automated methods to catch them inside CI/CD pipelines.'
      },
      {
        title: 'Scaling Kubernetes Microservices for Peak Traffic',
        category: 'App Modernization',
        summary: 'Practical tactics for cluster auto-scaling, ingress optimization, and service mesh telemetry.'
      }
    ]
  },
  'whitepapers': {
    title: 'Whitepapers & Reports',
    tagline: 'In-Depth Technical Research & Enterprise IT Benchmarks',
    description: 'Comprehensive guides, architectural frameworks, and compliance research papers for technical leaders.',
    items: [
      {
        title: 'The Enterprise Guide to DevSecOps Automation',
        category: 'DevOps & Security',
        summary: 'A step-by-step framework for embedding security gates into continuous integration workflows.'
      },
      {
        title: 'ISO 27001 & SOC 2 Compliance Playbook',
        category: 'Governance & Compliance',
        summary: 'Best practices for continuous audit readiness in cloud-native environments.'
      }
    ]
  }
};

// Aliases
resourcesData['blog-and-insights'] = resourcesData['blog'];
resourcesData['blog-insights'] = resourcesData['blog'];

export default function ResourceDetailPage({ resourceId, onBack, theme = 'dark' }) {
  const isDark = theme === 'dark';
  const cleanId = resourceId ? resourceId.replace(/^#/, '') : 'blog';
  const data = resourcesData[cleanId] || resourcesData['blog'];

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
            RESOURCES
          </span>
          <h1 className="text-3xl sm:text-5xl font-black">{data.title}</h1>
          <p className="text-base sm:text-lg text-slate-400 mt-2 font-medium">{data.tagline}</p>
          <p className="text-sm text-slate-300 mt-4 leading-relaxed">{data.description}</p>
        </div>

        {/* Resource Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.items.map((item, idx) => (
            <div key={idx} className={`p-6 rounded-2xl border transition-all ${
              isDark ? 'bg-[#081324] border-cyan-900/40 hover:border-cyan-500/50' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
            }`}>
              <span className="text-xs font-extrabold text-cyan-400 uppercase tracking-wider">{item.category}</span>
              <h3 className={`text-lg font-bold mt-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
              <p className={`text-xs mt-2 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}