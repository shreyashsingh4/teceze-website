// src/components/ContactAndLocations.jsx
import React, { useState } from 'react';

const officeLocations = [
  {
    region: 'United Kingdom (Global HQ)',
    countryCode: 'UK',
    flag: '🇬🇧',
    address: '100 Bishopsgate, Level 19, London, EC2N 4AG, United Kingdom',
    phone: '+44 20 4551 2020',
    email: 'info@teceze.com',
    hours: 'Mon - Fri: 8:30 AM - 5:30 PM GMT',
    mapsUrl: 'https://maps.google.com/?q=London+EC2N+4AG'
  },
  {
    region: 'United States',
    countryCode: 'USA',
    flag: '🇺🇸',
    address: 'One World Trade Center, Suite 8500, New York, NY 10007, USA',
    phone: '+1 332 282 0555',
    email: 'info@teceze.com',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM EST',
    mapsUrl: 'https://maps.google.com/?q=New+York+NY+10007'
  },
  {
    region: 'India (APAC Tech Hub)',
    countryCode: 'India',
    flag: '🇮🇳',
    address: 'DLF Cyber City, Building 10, Tower B, Gurugram, HR 122002, India',
    phone: '+91 7824827322',
    email: 'info@teceze.com',
    hours: 'Mon - Fri: 9:00 AM - 7:00 PM IST',
    mapsUrl: 'https://maps.google.com/?q=DLF+Cyber+City+Gurugram'
  }
];

export default function ContactAndLocations({ theme, isDark = theme === 'dark', initialTab = 'talk' }) {
  const [activeTab, setActiveTab] = useState(initialTab); // 'talk' or 'locate'
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Managed IT & Cloud Services',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: '', email: '', phone: '', service: 'Managed IT & Cloud Services', message: '' });
    }, 4000);
  };

  return (
    <section 
      id="contact-locations"
      className={`py-16 transition-colors duration-300 ${
        isDark ? 'bg-[#03070E] text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Navigation Switcher Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-12 border-b border-slate-700/50">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-500">
              CONNECT WITH TECEZE
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-1">
              {activeTab === 'talk' ? "Let's Talk Business" : "Locate Our Global Offices"}
            </h2>
          </div>

          <div className={`p-1.5 rounded-full border flex items-center gap-2 ${
            isDark ? 'bg-[#0b1320] border-slate-800' : 'bg-slate-200 border-slate-300'
          }`}>
            <button
              onClick={() => setActiveTab('talk')}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${
                activeTab === 'talk'
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Let's Talk
            </button>
            <button
              onClick={() => setActiveTab('locate')}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${
                activeTab === 'locate'
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Locate Us
            </button>
          </div>
        </div>

        {/* SECTION 1: LET'S TALK */}
        {activeTab === 'talk' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10">
            {/* Left Column: Direct Outreach Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Have a project or inquiry?</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Teceze leverages AI, intelligent automation, and advanced cybersecurity to help businesses innovate, stay secure, and scale with confidence.
                </p>
              </div>

              {/* Direct Quick Contact Cards */}
              <div className="space-y-4">
                <div className={`p-5 rounded-2xl border flex items-center gap-4 ${
                  isDark ? 'bg-[#09111e] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xl font-bold shrink-0">
                    ✉
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">SEND US AN EMAIL</h4>
                    <a href="mailto:info@teceze.com" className="text-base font-bold text-cyan-400 hover:underline">
                      info@teceze.com
                    </a>
                  </div>
                </div>

                <div className={`p-5 rounded-2xl border flex items-center gap-4 ${
                  isDark ? 'bg-[#09111e] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xl font-bold shrink-0">
                    📞
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">GIVE US A CALL</h4>
                    <div className="text-xs font-medium space-y-1">
                      <div>UK: <a href="tel:+442045512020" className="font-mono text-cyan-400 hover:underline">+44 20 4551 2020</a></div>
                      <div>USA: <a href="tel:+13322820555" className="font-mono text-cyan-400 hover:underline">+1 332 282 0555</a></div>
                      <div>India: <a href="tel:+917824827322" className="font-mono text-cyan-400 hover:underline">+91 7824827322</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className={`p-8 rounded-3xl border ${
                isDark ? 'bg-[#09111e] border-slate-800' : 'bg-white border-slate-200 shadow-xl'
              }`}>
                {submitted ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center text-3xl mx-auto font-bold">
                      ✓
                    </div>
                    <h3 className="text-2xl font-bold">Message Sent Successfully!</h3>
                    <p className={`text-sm max-w-md mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Thank you for reaching out to Teceze. One of our technical representatives will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none focus:border-cyan-500 ${
                            isDark ? 'bg-[#040812] border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                          }`}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Work Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none focus:border-cyan-500 ${
                            isDark ? 'bg-[#040812] border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                          }`}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none focus:border-cyan-500 ${
                            isDark ? 'bg-[#040812] border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                          }`}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Inquiry Area</label>
                        <div className="relative">
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className={`w-full px-4 py-3 pr-12 rounded-xl border text-sm appearance-none transition-all outline-none focus:border-cyan-500 ${
                              isDark ? 'bg-[#040812] border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                            }`}
                          >
                            <option>Managed IT & Cloud Services</option>
                            <option>Cybersecurity Solutions</option>
                            <option>AI & Intelligent Automation</option>
                            <option>Global IT Procurement</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                            ▼
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">How can Teceze help you? *</label>
                      <textarea
                        rows="4"
                        required
                        placeholder="Tell us about your requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none focus:border-cyan-500 ${
                          isDark ? 'bg-[#040812] border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-cyan-500 text-slate-950 font-extrabold text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
                    >
                      Send Message &rarr;
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* SECTION 2: LOCATE US */}
        {activeTab === 'locate' && (
          <div className="pt-10 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {officeLocations.map((office, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                    isDark ? 'bg-[#09111e] border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 shadow-lg'
                  }`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">{office.flag}</span>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {office.countryCode}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold">{office.region}</h3>
                      <p className={`text-xs mt-3 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {office.address}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Phone:</span>
                        <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="font-mono font-bold text-cyan-400 hover:underline">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Email:</span>
                        <a href={`mailto:${office.email}`} className="font-medium hover:underline">
                          {office.email}
                        </a>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Hours:</span>
                        <span className="text-slate-300">{office.hours}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <a
                      href={office.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${
                        isDark 
                          ? 'border-slate-700 hover:bg-slate-800 text-cyan-400' 
                          : 'border-slate-300 hover:bg-slate-100 text-slate-800'
                      }`}
                    >
                      <span>📍 Open in Google Maps</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}