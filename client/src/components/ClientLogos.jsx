import React, { useState } from 'react';

const caseStudies = [
  {
    id: 1,
    title: "Outsell – Managed Security Services Case Study",
    tagline: "Fortifying enterprise endpoints and cutting phishing exposure by 85% across global hybrid teams.",
    description: "How TECEZE helped Outsell strengthen endpoint protection, reduce phishing exposure, and maintain reliable 24×7 support operations without slowing business agility.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
    tag: "Cybersecurity",
    client: "Outsell Inc.",
    duration: "6 Months",
    services: "Managed Detection & Response (MDR), 24x7 SOC, Endpoint Security",
    overview: "Outsell faced escalating threat vectors across distributed remote and office workforces. Legacy security monitoring lacked real-time threat correlation, leaving gaps in rapid incident response.",
    challenge: "High volume of false-positive alerts, vulnerability to sophisticated spear-phishing campaigns, and compliance reporting bottlenecks that drained internal IT resources.",
    solution: "TECEZE deployed an AI-driven Managed Detection and Response (MDR) framework integrated with automated containment protocols and rigorous employee security simulations.",
    metricsTable: [
      { metric: "Phishing Susceptibility Rate", before: "24.5%", after: "3.2%", improvement: "-87%" },
      { metric: "Mean Time to Detect (MTTD)", before: "4 hours", after: "45 seconds", improvement: "99% Faster" },
      { metric: "False Positive Alerts", before: "350/week", after: "12/week", improvement: "-96%" },
      { metric: "Compliance Audit Score", before: "78%", after: "99.4%", improvement: "+21.4%" }
    ]
  },
  {
    id: 2,
    title: "LTIMINDTREE – IT Infrastructure Lift & Shift Operations",
    tagline: "Seamless cloud migration and infrastructure modernization across multi-region enterprise data centers.",
    description: "How Teceze delivered 24×7 security, compliance readiness, and endpoint protection across the US & UK.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
    tag: "Cloud & Infrastructure",
    client: "LTIMindtree Enterprise Partner",
    duration: "12 Months",
    services: "Cloud Migration, Infrastructure Modernization, DevOps Automation",
    overview: "Managing aging physical hardware across UK and US locations created high maintenance costs and scaling friction for LTIMindtree's regional service units.",
    challenge: "Zero-downtime migration requirement for core transactional databases while ensuring strict adherence to cross-border data privacy regulations.",
    solution: "Executed a phased cloud lift-and-shift architecture paired with automated infrastructure-as-code (IaC) templates to guarantee high availability and instant disaster recovery.",
    metricsTable: [
      { metric: "Infrastructure Uptime", before: "99.1%", after: "99.99%", improvement: "+0.89%" },
      { metric: "Operational Hosting Costs", before: "$1.4M/yr", after: "$850K/yr", improvement: "39% Savings" },
      { metric: "Deployment Frequency", before: "Bi-weekly", after: "On-demand (Daily)", improvement: "10x Faster" },
      { metric: "Disaster Recovery RTO", before: "12 Hours", after: "Under 3 Minutes", improvement: "99% Reduction" }
    ]
  },
  {
    id: 3,
    title: "Infosys – Enterprise Cloud Modernization",
    tagline: "Accelerating digital transformation with robust cloud architectures and automated DevOps pipelines.",
    description: "Accelerating digital transformation through resilient cloud architecture, automated DevOps pipelines, and robust threat intelligence.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
    tag: "Digital Transformation",
    client: "Infosys Ecosystem Division",
    duration: "9 Months",
    services: "Cloud Architecture, CI/CD Pipeline Automation, Kubernetes Orchestration",
    overview: "Legacy monolith applications hindered agile feature releases and created bottlenecks during peak user traffic spikes.",
    challenge: "Deconstructing tightly coupled legacy software modules into scalable microservices without interrupting active enterprise client workflows.",
    solution: "Containerized core workloads using Kubernetes and introduced automated CI/CD pipelines to streamline code integration and testing cycles.",
    metricsTable: [
      { metric: "System Latency", before: "450ms", after: "95ms", improvement: "78% Faster" },
      { metric: "Release Failure Rate", before: "14%", after: "0.8%", improvement: "-94%" },
      { metric: "Developer Productivity Index", before: "62/100", after: "91/100", improvement: "+46%" },
      { metric: "Auto-scaling Response Time", before: "25 mins", after: "30 seconds", improvement: "98% Faster" }
    ]
  },
  {
    id: 4,
    title: "HCLTech – Scalable Data Pipelines & Analytics",
    tagline: "Unlocking real-time business insights with high-performance data lakes and visualization engines.",
    description: "Building high-performance data lakes and real-time visualization dashboards to drive data-backed enterprise decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    tag: "Data & AI",
    client: "HCLTech Analytics Wing",
    duration: "8 Months",
    services: "Big Data Engineering, ETL Pipeline Optimization, BI Dashboards",
    overview: "Disjointed data silos prevented cross-departmental analytics, resulting in delayed executive decision-making and manual report generation.",
    challenge: "Ingesting petabytes of structured and unstructured telemetry data from thousands of edge devices into a unified, secure analytical repository.",
    solution: "Designed an optimized cloud data lake architecture with automated ETL pipelines and interactive executive intelligence dashboards.",
    metricsTable: [
      { metric: "Data Processing Speed", before: "24 Hours", after: "Real-time (< 2 mins)", improvement: "Instantaneous" },
      { metric: "Report Generation Time", before: "3 Days", after: "Automated Live", improvement: "100% Automated" },
      { metric: "Data Accuracy & Integrity", before: "84.2%", after: "99.8%", improvement: "+15.6%" },
      { metric: "Storage Efficiency Optimization", before: "100% Baseline", after: "65% Compressed", improvement: "35% Saved" }
    ]
  }
];

export default function ClientLogos({ theme, isDark = theme === 'dark', onLetsBuildTogetherClick }) {
  const [activeStudy, setActiveStudy] = useState(null);

  // If a case study is selected, render the detailed elongated view
  if (activeStudy) {
    return (
      <div className={`min-h-screen py-16 px-6 transition-colors duration-300 ${isDark ? 'bg-[#050A12]/85 backdrop-blur-md text-white' : 'bg-slate-50/85 backdrop-blur-md text-slate-900'}`}>
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <button
            type="button"
            onClick={() => setActiveStudy(null)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold mb-8 transition-all border cursor-pointer ${
              isDark ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
            }`}
          >
            &larr; Back to Success Stories
          </button>

          {/* Header Info */}
          <div className="mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/20 text-blue-400 border border-blue-500/30 mb-4">
              {activeStudy.tag}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              {activeStudy.title}
            </h1>
            <p className={`text-lg md:text-xl font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {activeStudy.tagline}
            </p>
          </div>

          {/* Quick Meta Grid */}
          <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 p-6 rounded-2xl mb-10 border ${
            isDark ? 'bg-[#0b1320] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div>
              <span className={`block text-xs uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Client</span>
              <span className="font-bold text-sm md:text-base">{activeStudy.client}</span>
            </div>
            <div>
              <span className={`block text-xs uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Engagement Duration</span>
              <span className="font-bold text-sm md:text-base">{activeStudy.duration}</span>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className={`block text-xs uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Core Services</span>
              <span className="font-bold text-sm md:text-base">{activeStudy.services}</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden mb-12 shadow-2xl border border-slate-800/50">
            <img src={activeStudy.image} alt={activeStudy.title} className="w-full h-[400px] object-cover" />
          </div>

          {/* Detailed Content Sections */}
          <div className="space-y-10 text-base md:text-lg leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-500">Project Overview</h2>
              <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                {activeStudy.overview}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-500">The Core Challenge</h2>
              <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                {activeStudy.challenge}
              </p>
            </div>

            {/* Secondary Image for Visual Depth */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-8">
              <div className="rounded-xl overflow-hidden border border-slate-800 shadow-lg">
                <img src={activeStudy.secondaryImage} alt="Implementation milestone" className="w-full h-[280px] object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Strategic Execution & Methodology</h3>
                <p className={`text-sm md:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Our enterprise task force worked in tandem with internal leads to deploy iterative testing, modular phased rollouts, and continuous performance telemetry verification, minimizing operational downtime.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-500">Solution Architecture</h2>
              <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                {activeStudy.solution}
              </p>
            </div>

            {/* Performance Metrics Table */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Key Impact & Performance Metrics</h2>
              <div className="overflow-x-auto rounded-xl border border-slate-800 shadow-lg">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className={isDark ? 'bg-[#0d1527] text-slate-300 border-b border-slate-800' : 'bg-slate-100 text-slate-800 border-b border-slate-200'}>
                      <th className="p-4 font-bold text-sm">Metric / KPI</th>
                      <th className="p-4 font-bold text-sm">Before Implementation</th>
                      <th className="p-4 font-bold text-sm">After TECEZE Solution</th>
                      <th className="p-4 font-bold text-sm text-blue-500">Improvement</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${isDark ? 'divide-slate-800/80 bg-slate-900/40' : 'divide-slate-200 bg-white'}`}>
                    {activeStudy.metricsTable.map((row, idx) => (
                      <tr key={idx} className={isDark ? 'hover:bg-slate-800/50' : 'hover:bg-slate-50'}>
                        <td className="p-4 font-semibold text-sm">{row.metric}</td>
                        <td className={`p-4 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{row.before}</td>
                        <td className="p-4 font-medium text-sm text-emerald-400">{row.after}</td>
                        <td className="p-4 font-bold text-sm text-blue-400">{row.improvement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Know More / Contact Us Section */}
            <div className={`mt-16 p-8 rounded-2xl border text-center relative overflow-hidden ${
              isDark ? 'bg-gradient-to-br from-[#0b1320] to-[#0f1d32] border-blue-500/30' : 'bg-gradient-to-br from-blue-50 to-slate-100 border-blue-200 shadow-md'
            }`}>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to transform your enterprise operations?</h3>
              <p className={`max-w-2xl mx-auto mb-6 text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Speak directly with our technical solutions architects to discover a customized implementation roadmap tailored to your organization.
              </p>
              <button
                type="button"
                onClick={onLetsBuildTogetherClick}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Schedule Consultation Now</span>
                <span className="w-5 h-5 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold text-xs">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default Grid View
  return (
    <section 
      className={`py-16 transition-colors duration-300 ${
        isDark ? 'bg-[#050A12]/85 backdrop-blur-md text-white' : 'bg-slate-50/85 backdrop-blur-md text-slate-900'
      }`}
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Real-World Enterprise IT Success Stories
          </h2>
          <p className={`mt-2 text-base max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore how we deliver measurable results through cloud transformation, cybersecurity, managed IT services, and enterprise technology solutions.
          </p>
        </div>
        <button
          type="button"
          onClick={(e) => {
            console.log("Schedule Consultation button clicked");
            if (onLetsBuildTogetherClick) onLetsBuildTogetherClick();
          }}
          className={`inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold transition-all shrink-0 border cursor-pointer shadow-sm ${
            isDark 
              ? 'bg-[#111a2e] hover:bg-[#1a2642] border-slate-800 text-white shadow-blue-950/20' 
              : 'bg-white hover:bg-slate-100 border-slate-300 text-slate-900'
          }`}
        >
          <span className="bg-[#00d2ff] text-[#0b111e] w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-sm">
            &rarr;
          </span>
          <span>Schedule Consultation</span>
        </button>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className={`group relative rounded-2xl overflow-hidden border shadow-xl flex flex-col justify-end min-h-[420px] transition-all duration-300 hover:-translate-y-1 ${
                isDark ? 'border-slate-800/80 bg-slate-900' : 'border-slate-200 bg-white'
              }`}
            >
              {/* Background Image with Zoom on Hover */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90"
                  loading="lazy"
                />
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A12] via-[#050A12]/80 to-transparent opacity-95"></div>
              </div>

              {/* Content Container */}
              <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                {/* Tag */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/30 text-blue-300 border border-blue-500/30 backdrop-blur-md">
                    {study.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                  {study.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm md:text-base mb-6 line-clamp-3 leading-relaxed">
                  {study.description}
                </p>

                {/* Action Button */}
                <div>
                  <button
                    type="button"
                    onClick={() => setActiveStudy(study)}
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold bg-slate-900/80 hover:bg-blue-600 text-white border border-slate-700 hover:border-blue-500 transition-all duration-300 shadow-lg cursor-pointer backdrop-blur-md"
                  >
                    <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs">
                      &rarr;
                    </span>
                    <span>View Case Study</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}