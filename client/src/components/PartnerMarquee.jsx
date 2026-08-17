import React from "react";

const partners = [
  { id: 1, name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 2, name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 3, name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 4, name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/HP_logo_2025.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 5, name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/Lenovo_Global_Corporate_Logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 6, name: "VMware", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 7, name: "Palo Alto Networks", logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/PaloAltoNetworks_2020_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 8, name: "Fortinet", logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 9, name: "Check Point", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Check_Point_logo_2022.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 10, name: "Sophos", logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Sophos_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 11, name: "Veeam", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Veeam_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 12, name: "Mimecast", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Mimecast_Logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 13, name: "Qualys", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Qualys_logo.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 14, name: "Rapid7", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Rapid7_logo.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 15, name: "Tenable", logo: "https://upload.wikimedia.org/wikipedia/commons/6/66/Tenable%2C_Inc._logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 16, name: "AlienVault", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Logo_AlienVault.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 17, name: "Yealink", logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/Yealink_logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 18, name: "Logitech", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Logitech_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 19, name: "Poly", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Poly_Inc._Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 20, name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 21, name: "Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 22, name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 23, name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 24, name: "Micro Focus", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Micro_Focus_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 25, name: "CrowdStrike", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/CrowdStrike_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 26, name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 27, name: "Atlassian", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Atlassian-logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 28, name: "Aruba", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Aruba_Networks_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 29, name: "ASUS", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 30, name: "Acronis", logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/Acronis-logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 31, name: "Barracuda", logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Barracuda_Networks_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 32, name: "CyberArk", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Cyberark-logo-dark.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 33, name: "Forcepoint", logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/Forcepoint_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 34, name: "Avaya", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Avaya_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 35, name: "CommScope", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Commscope-logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 36, name: "CyberSecurity", logo: null },
  { id: 37, name: "Darktrace", logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/Darktrace_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 38, name: "Elastic", logo: "https://upload.wikimedia.org/wikipedia/en/9/97/Elastic_NV_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original" },
  { id: 39, name: "Acer", logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/Acer_2011.svg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original" },
  { id: 40, name: "ManageEngine", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Manageengine-logo-black.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 41, name: "Equinix", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Equinix_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 42, name: "Extreme Networks", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Extreme_Networks_logo_-_new.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 43, name: "HPE", logo: "https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 44, name: "Dynatrace", logo: "https://upload.wikimedia.org/wikipedia/fr/5/59/Dynatrace_company_logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=original" },
  { id: 45, name: "Juniper Networks", logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/Juniper_Networks_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 46, name: "Kaspersky", logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Kaspersky_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 47, name: "LogRhythm", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Logrhythm-main-logo-r.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 48, name: "McAfee", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/McAfee_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 49, name: "NetApp", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9f/NetApp_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 50, name: "openSUSE", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/OpenSUSE_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 51, name: "Quest", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Quest_Software_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 52, name: "Red Hat", logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Red_Hat_Logo_2019.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 53, name: "Riverbed", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Riverbed-logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 54, name: "ServiceNow", logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 55, name: "Skybox Security", logo: "https://itcurated.com/infosecindex/wp-content/uploads/sites/35/2017/01/skybox-security-cybersecurity.png" },
  { id: 56, name: "SolarWinds", logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Official_SolarWinds_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 57, name: "SonicWall", logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/SonicWall_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 58, name: "Splunk", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Splunk_logo.svg?utm_source=de.wikipedia.org&utm_campaign=index&utm_content=original" },
  { id: 59, name: "Symantec", logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/Symantec_logo10.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 60, name: "NetScout", logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/NetScout_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 61, name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 62, name: "Arista", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Arista-networks-logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 63, name: "AT&T", logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/AT%26T_logo_2016.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 64, name: "Bitdefender", logo: "https://upload.wikimedia.org/wikipedia/commons/3/35/Bitdefender_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { id: 65, name: "Citrix", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Citrix-logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" }
];

export default function PartnerMarquee({ theme, isDark = theme === 'dark', onScheduleClick }) {
  const marqueeItems = [...partners, ...partners];

  return (
    <section 
      className={`py-12 transition-colors duration-300 overflow-hidden relative ${
        isDark ? 'bg-[#050A12] text-white border-b border-slate-900' : 'bg-slate-100 text-slate-900 border-b border-slate-200'
      }`}
    >
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          display: flex;
          width: max-content;
          animation: marqueeScroll 220s linear infinite;
        }
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Technology Partners
          </h2>
          <p className={`mt-2 text-base max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            We collaborate with the world&apos;s leading technology innovators to deliver robust, scalable, and secure enterprise solutions.
          </p>
        </div>
        
      </div>

      {/* Marquee Track */}
      <div className="w-full overflow-hidden py-4">
        <div className="animate-marquee-slow gap-6">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className={`border rounded-xl px-5 py-3 min-w-[170px] h-[75px] flex items-center justify-center shrink-0 transition-all hover:-translate-y-1 shadow-sm group relative overflow-hidden ${
                isDark
                  ? 'bg-[#0d1527] border-[#1e293b] hover:border-slate-500'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className={`max-h-[35px] max-w-[110px] object-contain transition-all duration-300 group-hover:scale-105 ${
                    isDark ? 'brightness-0 invert opacity-85' : 'opacity-95'
                  }`}
                />
              ) : (
                <span className={`font-bold text-xs uppercase tracking-wider text-center ${
                  isDark ? 'text-slate-200' : 'text-slate-800'
                }`}>
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}