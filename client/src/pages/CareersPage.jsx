import React from 'react';

export default function CareersPage({ onBack, theme = 'dark' }) {
  const isDark = theme === 'dark';

  const jobs = [
    { title: 'Senior Cloud DevOps Engineer', location: 'Remote / Global', dept: 'Cloud & DevOps' },
    { title: 'L3 Cyber Security Operations Analyst', location: 'London, UK / Remote', dept: 'Managed Cybersecurity' },
    { title: 'Full Stack Modernization Architect', location: 'New York, US / Remote', dept: 'Application Modernization' },
    { title: 'Enterprise Service Desk Manager', location: 'Bangalore, IN / On-site', dept: 'Digital IT Workplace' }
  ];

  return (
    <div className={`min-h-screen pt-24 md:pt-28 pb-12 transition-colors duration-300 ${
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

        <div className={`p-8 sm:p-12 rounded-3xl border ${
          isDark ? 'bg-[#081324] border-cyan-900/40' : 'bg-white border-slate-200 shadow-md'
        }`}>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 mb-4">
            CAREERS AT TECEZE
          </span>
          <h1 className="text-3xl sm:text-5xl font-black">Join Our Global Engineering Team</h1>
          <p className="text-base sm:text-lg text-slate-400 mt-2 font-medium">
            We are hiring Cloud Architects, Security Analysts, and Full-Stack Engineers globally.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-cyan-400">Open Opportunities</h2>
          {jobs.map((job, idx) => (
            <div key={idx} className={`p-6 rounded-2xl border flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all ${
              isDark ? 'bg-[#081324] border-cyan-900/40 hover:border-cyan-500/50' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
            }`}>
              <div>
                <span className="text-xs font-extrabold text-cyan-500 uppercase tracking-wider">{job.dept}</span>
                <h3 className="text-lg font-bold text-white mt-1">{job.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{job.location}</p>
              </div>
              <button className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors self-start md:self-auto">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}