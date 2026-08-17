import React, { useState } from 'react';
import { MapPin, Globe, ExternalLink, ShieldCheck, Server, Building2 } from 'lucide-react';

export default function GlobalPresenceMap({ theme = 'dark' }) {
  const [activeRegion, setActiveRegion] = useState('apac');
  const [activeCountryIndex, setActiveCountryIndex] = useState(0);

  const isDark = theme === 'dark';

  // Comprehensive Teceze Global Network by Regions (NA, EMEA, APAC)
  const regionData = {
    na: {
      id: 'na',
      regionCode: 'NA',
      tabLabel: 'Americas (NA / LATAM)',
      category: 'AMERICAS REGIONAL HUB',
      countries: [
        {
          name: 'United States',
          flag: '🇺🇸',
          city: 'Charlotte (HQ)',
          address: '4115 Rose Lake Dr, Suite F, Charlotte, NC 28217, USA',
          capabilities: 'Enterprise IT Infrastructure & Cloud Modernization',
          hubs: ['Charlotte', 'New York', 'Austin'],
          coords: { x: '21%', y: '38%' },
          mapsUrl: 'https://maps.google.com/?q=4115+Rose+Lake+Dr,+Suite+F,+Charlotte,+NC+28217'
        },
        {
          name: 'Canada',
          flag: '🇨🇦',
          city: 'Oakville / Toronto',
          address: '71 Speers Road, Unit 20, Oakville, ON L6K 0J2, Canada',
          capabilities: 'Managed IT Operations & Remote Infrastructure Support',
          hubs: ['Oakville', 'Toronto'],
          coords: { x: '20%', y: '26%' },
          mapsUrl: 'https://maps.google.com/?q=71+Speers+Road,+Unit+20,+Oakville,+ON'
        },
        {
          name: 'Mexico',
          flag: '🇲🇽',
          city: 'Playa del Carmen',
          address: 'Plaza Paseo Coba, Playa del Carmen, Quintana Roo 77710, Mexico',
          capabilities: 'LATAM Service Desk & On-site Support',
          hubs: ['Playa del Carmen'],
          coords: { x: '21%', y: '48%' },
          mapsUrl: 'https://maps.google.com/?q=Plaza+Paseo+Coba+Playa+del+Carmen'
        },
        {
          name: 'Brazil',
          flag: '🇧🇷',
          city: 'São Paulo',
          address: 'Av. Paulista, 1106 - Bela Vista, São Paulo - SP, 01310-100, Brazil',
          capabilities: 'South America Operational Support & Cloud Migration',
          hubs: ['São Paulo'],
          coords: { x: '33%', y: '72%' },
          mapsUrl: 'https://maps.google.com/?q=Av.+Paulista,+1106+Sao+Paulo'
        }
      ]
    },
    emea: {
      id: 'emea',
      regionCode: 'EMEA',
      tabLabel: 'Europe, Middle East & Africa (EMEA)',
      category: 'EMEA HEADQUARTERS & REGIONAL HUBS',
      countries: [
        {
          name: 'United Kingdom',
          flag: '🇬🇧',
          city: 'London (HQ) & Manchester',
          address: '14 Dock Street, London, E1 8JP, United Kingdom',
          capabilities: 'Global Corporate HQ, 24/7 Follow-the-Sun IT Ops',
          hubs: ['London (HQ)', 'Manchester'],
          coords: { x: '46%', y: '28%' },
          mapsUrl: 'https://maps.google.com/?q=14+Dock+Street,+London,+E1+8JP'
        },
        {
          name: 'Germany',
          flag: '🇩🇪',
          city: 'Berlin & Frankfurt',
          address: 'Eichborndamm 167 G55, Berlin – 13403, Germany',
          capabilities: 'EU Cloud Modernization & Data Compliance',
          hubs: ['Berlin', 'Frankfurt'],
          coords: { x: '51%', y: '29%' },
          mapsUrl: 'https://maps.google.com/?q=Eichborndamm+167+G55+Berlin'
        },
        {
          name: 'Spain',
          flag: '🇪🇸',
          city: 'Madrid',
          address: 'Calle Julián Romea, 11, Semisótano 1, 28003 Madrid, Spain',
          capabilities: 'Southern European On-Site Support Hub',
          hubs: ['Madrid'],
          coords: { x: '45%', y: '36%' },
          mapsUrl: 'https://maps.google.com/?q=Calle+Julian+Romea+11+Madrid'
        },
        {
          name: 'Sweden',
          flag: '🇸🇪',
          city: 'Stockholm',
          address: 'Kistagången 20, 164 40 Kista, Stockholm, Sweden',
          capabilities: 'Nordic Regional Field Support',
          hubs: ['Stockholm'],
          coords: { x: '53%', y: '18%' },
          mapsUrl: 'https://maps.google.com/?q=Kistagangen+20+Stockholm'
        },
        {
          name: 'Denmark',
          flag: '🇩🇰',
          city: 'Copenhagen',
          address: 'Lautrupsgade 7, 2100 København, Denmark',
          capabilities: 'Managed Infrastructure & Security Operations',
          hubs: ['Copenhagen'],
          coords: { x: '50%', y: '22%' },
          mapsUrl: 'https://maps.google.com/?q=Lautrupsgade+7+Copenhagen'
        },
        {
          name: 'Ireland',
          flag: '🇮🇪',
          city: 'Dublin',
          address: 'Grand Canal Dock, Dublin 2, Ireland',
          capabilities: 'Enterprise Cloud Support Services',
          hubs: ['Dublin'],
          coords: { x: '42%', y: '27%' },
          mapsUrl: 'https://maps.google.com/?q=Grand+Canal+Dock+Dublin'
        },
        {
          name: 'Portugal',
          flag: '🇵🇹',
          city: 'Lisbon',
          address: 'Av. da Liberdade 245, 1250-143 Lisboa, Portugal',
          capabilities: 'Managed IT & Service Desk',
          hubs: ['Lisbon'],
          coords: { x: '43%', y: '38%' },
          mapsUrl: 'https://maps.google.com/?q=Av.+da+Liberdade+Lisboa'
        },
        {
          name: 'Italy',
          flag: '🇮🇹',
          city: 'Milan',
          address: 'Via Giuseppe Mengoni 4, 20121 Milano MI, Italy',
          capabilities: 'Field Support & System Integration',
          hubs: ['Milan'],
          coords: { x: '50%', y: '35%' },
          mapsUrl: 'https://maps.google.com/?q=Via+Giuseppe+Mengoni+Milano'
        },
        {
          name: 'Poland',
          flag: '🇵🇱',
          city: 'Warsaw',
          address: 'Aleje Jerozolimskie 65/79, 00-697 Warszawa, Poland',
          capabilities: 'Central European Support Delivery',
          hubs: ['Warsaw'],
          coords: { x: '54%', y: '27%' },
          mapsUrl: 'https://maps.google.com/?q=Aleje+Jerozolimskie+Warszawa'
        },
        {
          name: 'Greece',
          flag: '🇬🇷',
          city: 'Athens',
          address: 'Leof. Vasilissis Sofias 111, Athina 115 27, Greece',
          capabilities: 'Infrastructure Deployment Services',
          hubs: ['Athens'],
          coords: { x: '54%', y: '40%' },
          mapsUrl: 'https://maps.google.com/?q=Vasilissis+Sofias+Athens'
        },
        {
          name: 'United Arab Emirates',
          flag: '🇦🇪',
          city: 'Dubai',
          address: '43-44, Dubai Municipality Building, Bur Dubai, Al Fahidi, UAE',
          capabilities: 'Middle East IT & Cyber Security Hub',
          hubs: ['Dubai'],
          coords: { x: '60%', y: '46%' },
          mapsUrl: 'https://maps.google.com/?q=Dubai+Municipality+Building+Bur+Dubai'
        },
        {
          name: 'Saudi Arabia',
          flag: '🇸🇦',
          city: 'Riyadh',
          address: 'Muruj, Olaya St 12283, Riyadh, Saudi Arabia',
          capabilities: 'Enterprise Digital Transformation Services',
          hubs: ['Riyadh'],
          coords: { x: '58%', y: '49%' },
          mapsUrl: 'https://maps.google.com/?q=Olaya+St+Riyadh+Saudi+Arabia'
        },
        {
          name: 'Nigeria',
          flag: '🇳🇬',
          city: 'Lagos',
          address: 'Victoria Island, Lagos, Nigeria',
          capabilities: 'West Africa Managed Services Support',
          hubs: ['Lagos'],
          coords: { x: '48%', y: '58%' },
          mapsUrl: 'https://maps.google.com/?q=Victoria+Island+Lagos'
        },
        {
          name: 'South Africa',
          flag: '🇿🇦',
          city: 'Johannesburg',
          address: 'Sandton City, Johannesburg, South Africa',
          capabilities: 'African Continental Operational Hub',
          hubs: ['Johannesburg'],
          coords: { x: '54%', y: '74%' },
          mapsUrl: 'https://maps.google.com/?q=Sandton+City+Johannesburg'
        }
      ]
    },
    apac: {
      id: 'apac',
      regionCode: 'APAC',
      tabLabel: 'Asia-Pacific (APAC)',
      category: 'APAC DELIVERY & INNOVATION CENTERS',
      countries: [
        {
          name: 'India',
          flag: '🇮🇳',
          city: 'Chennai (HQ), Bengaluru, Mumbai, Hyderabad, Pune, Noida, Ahmedabad',
          address: 'SAI Tech Park, 105, Anna Salai, Little Mount, Guindy, Chennai, Tamil Nadu 600032',
          capabilities: 'Global SOC Operations, Software & AI Engineering, 24/7 IT Infrastructure Support',
          hubs: ['Chennai (HQ)', 'Bengaluru', 'Navi Mumbai', 'Hyderabad', 'Pune', 'Noida', 'Ahmedabad'],
          coords: { x: '68%', y: '48%' },
          mapsUrl: 'https://maps.google.com/?q=SAI+Tech+Park+Guindy+Chennai'
        },
        {
          name: 'Singapore',
          flag: '🇸🇬',
          city: 'Singapore',
          address: '32 Pekin Street #05-01, Singapore 048762',
          capabilities: 'SE Asia Regional Headquarters & Cloud Ops',
          hubs: ['Singapore'],
          coords: { x: '75%', y: '56%' },
          mapsUrl: 'https://maps.google.com/?q=32+Pekin+Street+Singapore'
        },
        {
          name: 'Japan',
          flag: '🇯🇵',
          city: 'Tokyo',
          address: '3-3-23-1507 Nishi-Shinjuku, Shinjuku, Tokyo, Japan',
          capabilities: 'East Asia Enterprise Field Engineering',
          hubs: ['Tokyo'],
          coords: { x: '84%', y: '36%' },
          mapsUrl: 'https://maps.google.com/?q=Nishi-Shinjuku+Shinjuku+Tokyo'
        },
        {
          name: 'China',
          flag: '🇨🇳',
          city: 'Shanghai',
          address: 'Pudong New Area, Shanghai, China',
          capabilities: 'Enterprise Regional IT Field Support',
          hubs: ['Shanghai'],
          coords: { x: '78%', y: '40%' },
          mapsUrl: 'https://maps.google.com/?q=Pudong+New+Area+Shanghai'
        },
        {
          name: 'South Korea',
          flag: '🇰🇷',
          city: 'Seoul',
          address: 'Gangnam-gu, Seoul, South Korea',
          capabilities: 'Technical Infrastructure Support',
          hubs: ['Seoul'],
          coords: { x: '81%', y: '37%' },
          mapsUrl: 'https://maps.google.com/?q=Gangnam-gu+Seoul'
        },
        {
          name: 'Taiwan',
          flag: '🇹🇼',
          city: 'Taipei',
          address: 'Xinyi District, Taipei City, Taiwan',
          capabilities: 'Hardware & Network Managed Services',
          hubs: ['Taipei'],
          coords: { x: '80%', y: '46%' },
          mapsUrl: 'https://maps.google.com/?q=Xinyi+District+Taipei'
        },
        {
          name: 'Hong Kong',
          flag: '🇭🇰',
          city: 'Hong Kong',
          address: 'Central, Hong Kong',
          capabilities: 'Financial Infrastructure & SOC Operations',
          hubs: ['Hong Kong'],
          coords: { x: '77%', y: '46%' },
          mapsUrl: 'https://maps.google.com/?q=Central+Hong+Kong'
        },
        {
          name: 'Sri Lanka',
          flag: '🇱🇰',
          city: 'Colombo',
          address: 'World Trade Center, Colombo 01, Sri Lanka',
          capabilities: 'Offshore Technical Development',
          hubs: ['Colombo'],
          coords: { x: '69%', y: '54%' },
          mapsUrl: 'https://maps.google.com/?q=World+Trade+Center+Colombo'
        },
        {
          name: 'Malaysia',
          flag: '🇲🇾',
          city: 'Kuala Lumpur',
          address: 'The MET Corporate Tower, Jalan Dutamas 2, Kuala Lumpur 50480, Malaysia',
          capabilities: 'Managed Infrastructure Support Services',
          hubs: ['Kuala Lumpur'],
          coords: { x: '74%', y: '54%' },
          mapsUrl: 'https://maps.google.com/?q=The+MET+Corporate+Tower+Kuala+Lumpur'
        },
        {
          name: 'Philippines',
          flag: '🇵🇭',
          city: 'Pasig City (Manila)',
          address: '5F-B RCC Center, 104 Shaw Boulevard, Kapitolyo, Pasig City 1603, Philippines',
          capabilities: 'Global Service Desk & Technical Support',
          hubs: ['Pasig City'],
          coords: { x: '81%', y: '50%' },
          mapsUrl: 'https://maps.google.com/?q=RCC+Center+Shaw+Boulevard+Pasig'
        },
        {
          name: 'Australia',
          flag: '🇦🇺',
          city: 'Sydney',
          address: 'Barangaroo Ave, Sydney NSW 2000, Australia',
          capabilities: 'Oceania Regional Cloud & Network Operations',
          hubs: ['Sydney', 'Melbourne'],
          coords: { x: '88%', y: '74%' },
          mapsUrl: 'https://maps.google.com/?q=Barangaroo+Ave+Sydney'
        }
      ]
    }
  };

  const currentRegion = regionData[activeRegion];
  const selectedCountry = currentRegion.countries[activeCountryIndex] || currentRegion.countries[0];

  const handleRegionSwitch = (regionKey) => {
    setActiveRegion(regionKey);
    setActiveCountryIndex(0);
  };

  return (
    <section className={`py-16 transition-colors duration-300 font-sans ${
      isDark ? 'bg-[#050811] text-gray-100' : 'bg-slate-100 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 tracking-wider">
            <Globe className="w-3.5 h-3.5" /> GLOBAL COVERAGE
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Where Teceze Operates
          </h2>
          <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
            Delivering 24/7 follow-the-sun IT infrastructure services, managed security, and cloud modernization across key strategic markets worldwide.
          </p>
        </div>

        {/* Region Selector Tabs (NA, EMEA, APAC) */}
        <div className="flex flex-wrap justify-center gap-3">
          {Object.values(regionData).map((reg) => (
            <button
              key={reg.id}
              onClick={() => handleRegionSwitch(reg.id)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold border transition-all ${
                activeRegion === reg.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 border-cyan-400 text-white shadow-lg shadow-cyan-500/30 scale-105'
                  : isDark
                    ? 'bg-gray-900/90 border-gray-800 text-gray-300 hover:text-white hover:border-gray-700'
                    : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-sm'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{reg.tabLabel}</span>
            </button>
          ))}
        </div>

        {/* Interactive Map & Office Address Container */}
        <div className={`rounded-3xl border p-6 sm:p-8 transition-all ${
          isDark 
            ? 'bg-[#0B0F19] border-gray-800/80 shadow-2xl shadow-cyan-950/20' 
            : 'bg-white border-slate-200 shadow-xl'
        }`}>
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* World Map Box with Dotted Map Background */}
            <div className={`lg:col-span-7 relative min-h-[420px] rounded-2xl border flex flex-col justify-between p-6 overflow-hidden ${
              isDark 
                ? 'bg-[#03060D] border-cyan-900/30' 
                : 'bg-gradient-to-br from-slate-50 to-blue-50/30 border-slate-200'
            }`}>
              
              {/* World Grid Map Outline Graphic */}
              <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center p-4">
                <svg viewBox="0 0 1000 500" className="w-full h-full fill-current text-cyan-400" xmlns="http://www.w3.org/2000/svg">
                  {/* Subtle Global Latitude/Longitude Grid Pattern */}
                  <pattern id="dotGrid" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.2" className={isDark ? "fill-cyan-400/60" : "fill-blue-600/50"} />
                  </pattern>
                  <rect width="1000" height="500" fill="url(#dotGrid)" />
                </svg>
              </div>

              {/* Map Title Tag */}
              <div className="relative z-10 flex justify-between items-center">
                <span className="text-[11px] font-extrabold tracking-widest text-cyan-500 uppercase flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  {currentRegion.regionCode} NETWORK MAP ({currentRegion.countries.length} LOCATIONS)
                </span>
                <span className={`text-[10px] font-medium px-2.5 py-1 rounded-md border ${
                  isDark ? 'bg-gray-900/80 border-gray-800 text-gray-400' : 'bg-slate-100 border-slate-200 text-slate-600'
                }`}>
                  Click flag pin to inspect
                </span>
              </div>

              {/* Flag-Only Pins mapped across World Canvas */}
              <div className="relative w-full h-[300px] z-10 my-4">
                {currentRegion.countries.map((country, idx) => {
                  const isActive = activeCountryIndex === idx;
                  return (
                    <button
                      key={country.name}
                      onClick={() => setActiveCountryIndex(idx)}
                      style={{ left: country.coords.x, top: country.coords.y }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 cursor-pointer focus:outline-none"
                      title={country.name}
                    >
                      {/* Interactive Circular Flag Badge (No Text Overlay) */}
                      <span className="relative flex items-center justify-center">
                        {isActive && (
                          <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-cyan-400 opacity-75" />
                        )}
                        <span className={`relative inline-flex items-center justify-center rounded-full text-sm transition-transform duration-200 group-hover:scale-125 shadow-lg border-2 ${
                          isActive 
                            ? 'w-8 h-8 bg-cyan-500 border-cyan-200 ring-4 ring-cyan-500/40' 
                            : isDark
                              ? 'w-7 h-7 bg-gray-900 border-gray-700 group-hover:border-cyan-400'
                              : 'w-7 h-7 bg-white border-slate-300 group-hover:border-cyan-500'
                        }`}>
                          {country.flag}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Country Selection Chips (Below Map Canvas) */}
              <div className="relative z-10 flex flex-wrap gap-1.5 pt-3 border-t border-gray-800/40 max-h-[90px] overflow-y-auto">
                {currentRegion.countries.map((c, idx) => (
                  <button
                    key={c.name}
                    onClick={() => setActiveCountryIndex(idx)}
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border transition-all flex items-center gap-1.5 ${
                      activeCountryIndex === idx
                        ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/60 shadow-sm'
                        : isDark
                          ? 'bg-gray-900/60 text-gray-400 border-gray-800 hover:text-white'
                          : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900'
                    }`}
                  >
                    <span>{c.flag}</span>
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>

            </div>

            {/* Address & Country Description Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-black tracking-widest text-cyan-500 uppercase">
                    {currentRegion.category}
                  </span>
                  <h3 className={`text-2xl font-black mt-1 flex items-center gap-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    <span className="text-3xl">{selectedCountry.flag}</span>
                    <span>{selectedCountry.name}</span>
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-cyan-400">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{selectedCountry.city}</span>
                  </div>
                </div>

                {/* Official Address Card */}
                <div className={`p-4 rounded-xl border ${
                  isDark ? 'bg-gray-900/60 border-gray-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                    Official Regional Address
                  </span>
                  <p className={`text-xs leading-relaxed font-medium ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                    {selectedCountry.address}
                  </p>
                </div>

                {/* Capabilities & Hubs */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <span className={`font-bold block ${isDark ? 'text-gray-200' : 'text-slate-800'}`}>
                        Support Capabilities
                      </span>
                      <span className={isDark ? 'text-gray-400' : 'text-slate-600'}>
                        {selectedCountry.capabilities}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Server className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <span className={`font-bold block ${isDark ? 'text-gray-200' : 'text-slate-800'}`}>
                        Key Hubs
                      </span>
                      <span className={isDark ? 'text-gray-400' : 'text-slate-600'}>
                        {selectedCountry.hubs.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-gray-800/40">
                <a
                  href={selectedCountry.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-lg shadow-cyan-500/20"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}