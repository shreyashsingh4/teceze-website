import React from 'react';
import { ShieldCheck, Server, ArrowRight, Activity, Terminal } from 'lucide-react';

export default function Hero() {
  const metrics = [
    { label: "Platform SLA Guarantee", value: "99.99%", desc: "High-availability multi-region fault tolerance" },
    { label: "Average TCO Reduction", value: "40%", desc: "Cost savings via elastic microservices & containerization" },
    { label: "Deployment Cycle Time", value: "< 15m", desc: "Automated canary deployments via DevSecOps CI/CD" },
    { label: "Compliance Security Shield", value: "SOC 2 / HIPAA", desc: "Built-in continuous policy-as-code governance" }
  ];

  return (
    <div className="relative bg-[#0B0F17] overflow-hidden border-b border-gray-800/80 pt-10 pb-16">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-sky-500/10 via-blue-600/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            <Terminal className="w-3.5 h-3.5" /> Next-Gen Enterprise Engineering Platform
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Accelerate Enterprise <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Cloud-Native Engineering
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Eliminate legacy technical debt, decouple monolithic architectures, and orchestrate automated DevSecOps pipelines with Teceze’s proven practice frameworks.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a href="#app-dev" className="w-full sm:w-auto px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-gray-950 font-bold text-sm transition-all shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2">
              Explore Practice Framework <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#metrics" className="w-full sm:w-auto px-6 py-3 rounded-full bg-gray-900 hover:bg-gray-800 border border-gray-700 text-gray-200 font-semibold text-sm transition-all flex items-center justify-center gap-2">
              <Activity className="w-4 h-4 text-sky-400" /> Platform Architecture
            </a>
          </div>
        </div>

        {/* Dynamic Metrics & Trust Bar */}
        <div id="metrics" className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((item, idx) => (
            <div key={idx} className="bg-gray-900/60 border border-gray-800/80 rounded-2xl p-5 hover:border-sky-500/40 transition-all">
              <div className="text-3xl font-extrabold text-white">{item.value}</div>
              <div className="text-sm font-semibold text-sky-400 mt-1">{item.label}</div>
              <p className="text-xs text-gray-400 mt-1 leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}