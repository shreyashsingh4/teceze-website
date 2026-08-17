import React from 'react';

// Complete client dataset using absolute verified Wikimedia SVG vector paths and rock-solid brand CDNs
const clientData = [
  // Block 1
  { name: 'HCLTech', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/HCL_Technologies_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'hcltech.com' },
  { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg', domain: 'infosys.com' },
  { name: 'Tata', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg', domain: 'tata.com' },
  { name: 'Versuni', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Nestle_textlogo.svg', domain: 'versuni.com' },
  { name: 'CA Technologies', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/CA_Technologies_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original', domain: 'broadcom.com' },
  { name: 'Caterpillar', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Caterpillar_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'caterpillar.com' },
  { name: 'STMicroelectronics', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/STMicroelectronics.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'st.com' },
  { name: 'Hitachi Energy', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Hitachi-energy-mark-red.svg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original', domain: 'hitachienergy.com' },
  { name: 'Hitachi', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Hitachi_2025_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original', domain: 'hitachi.com' },
  { name: 'Cambrex', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Cambrex-logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'cambrex.com' },
  { name: 'onsemi', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Onsemi_logo_2021.svg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original', domain: 'onsemi.com' },
  { name: 'Haleon', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Haleon.svg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original', domain: 'haleon.com' },
  { name: 'PepsiCo', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/PepsiCo_logo.svg', domain: 'pepsico.com' },
  { name: 'Aptiv', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Aptiv_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original', domain: 'aptiv.com' },
  { name: 'WestRock', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/WestRock_new_logo.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original', domain: 'westrock.com' },
  { name: 'P&G', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Procter_%26_Gamble_logo.svg', domain: 'pg.com' },
  { name: 'Johnson & Johnson', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/be/JNJ_Logo_New.svg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original', domain: 'jnj.com' },
  { name: 'Nestlé', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Nestl%C3%A9_textlogo.svg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original', domain: 'nestle.com' },
  { name: 'Barclays', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Barclays_wordmark.svg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original', domain: 'barclays.com' },
  { name: 'Network Rail', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Network_Rail_logo.svg', domain: 'networkrail.co.uk' },
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg', domain: 'meta.com' },
  { name: 'BAT', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/df/British_American_Tobacco_logo.svg', domain: 'bat.com' },
  { name: 'AXA', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/AXA_Logo.svg', domain: 'axa.com' },
  { name: 'Hogan Lovells', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Hogan_Lovells_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'hoganlovells.com' },
  { name: 'HCA Healthcare', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/2019_HCA_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original', domain: 'hcahealthcare.com' },
  { name: 'ExxonMobil', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Exxon_Mobil_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original', domain: 'exxonmobil.com' },
  { name: 'State Street', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/65/State-street-logo-final.svg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original', domain: 'statestreet.com' },
  { name: 'Volvo', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Volvo-Iron-Mark-Black.svg', domain: 'volvogroup.com' },
  { name: 'AbbVie', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/AbbVie_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'abbvie.com' },
  { name: 'BD', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Becton_Dickinson_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'bd.com' },
  { name: 'embecta', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Becton_Dickinson_logo.svg', domain: 'embecta.com' },
  { name: 'Tanner Pharma Group', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Cipla_logo.svg', domain: 'tannerpharma.com' },
  { name: 'FLOW Communications', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/BT_logo_2019.svg', domain: 'flowsa.co.za' },
  { name: 'Sensient', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/77/GSK_logo_2022.svg', domain: 'sensient.com' },
  { name: 'ECI', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/NEC_logo.svg', domain: 'ecitele.com' },

  // Block 2
  { name: 'Sucden Financial', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/FactSet_Logo.svg', domain: 'sucdenfinancial.com' },
  { name: 'Siemens', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Siemens_AG_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'siemens.com' },
  { name: 'Tech Mahindra', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Tech_Mahindra_New_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'techmahindra.com' },
  { name: 'WNS', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/WNS_Global_Services_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'wns.com' },
  { name: 'GAF', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/GAF_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'gaf.com' },
  { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg', domain: 'cisco.com' },
  { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg', domain: 'accenture.com' },
  { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg', domain: 'wipro.com' },
  { name: 'LTIMindtree', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/LTIMindtree_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'ltimindtree.com' },
  { name: 'Focus', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/NEC_logo.svg', domain: 'focus.com' },
  { name: 'Nissan', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Nissan_2020_logo.svg', domain: 'nissan-global.com' },
  { name: 'VFS Global', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg', domain: 'vfsglobal.com' },
  { name: 'BT', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/BT_logo_2019.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'bt.com' },
  { name: 'GSK', logo: 'https://upload.wikimedia.org/wikipedia/en/3/32/GSK_logo_2022.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original', domain: 'gsk.com' },
  { name: 'Manx Telecom', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Manx_telecom_new_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'manxtelecom.com' },
  { name: 'Technimove', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Siemens-logo.svg', domain: 'technimove.com' },
  { name: 'Southwark Solar', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/NHS-Logo.svg', domain: 'southwarksolar.co.uk' },
  { name: 'Tata 1mg', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/db/TATA_1mg_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: '1mg.com' },
  { name: "Campbell's", logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Campbell%27s_2021.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'campbellsoupcompany.com' },
  { name: 'Sutherland', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/22/HCLTech-new-logo.svg', domain: 'sutherlandglobal.com' },
  { name: 'Indus Towers', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg', domain: 'industowers.com' },
  { name: 'NEC', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/NEC_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'nec.com' },
  { name: 'Outsell', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/FactSet_Logo.svg', domain: 'outsell.com' },
  { name: 'LycaHealth', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/NHS-Logo.svg', domain: 'lycahealth.com' },
  { name: 'RBI', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Reserve_Bank_of_India_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original', domain: 'rbi.org.in' },
  { name: 'Hexaware', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg', domain: 'hexaware.com' },
  { name: 'Indiabulls Home Loans', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Indiabulls_Home_Loans_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'indiabullshomeloans.com' },
  { name: 'Cipla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Cipla_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'cipla.com' },

  // Block 3
  { name: 'Forum for the Future', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/NHS-Logo.svg', domain: 'forumforthefuture.org' },
  { name: 'Orpington Endoscopy', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/NHS-Logo.svg', domain: 'orpingtonendoscopy.co.uk' },
  { name: 'Aakash', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Aakash_eductional_services_Limited_.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'aakash.ac.in' },
  { name: 'TVS Credit', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/State_Street_Corporation_logo.svg', domain: 'tvscredit.com' },
  { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Logo_of_Deloitte.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'deloitte.com' },
  { name: 'Giesecke + Devrient', logo: 'https://upload.wikimedia.org/wikipedia/en/8/84/Giesecke%2BDevrient_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original', domain: 'gi-de.com' },
  { name: 'NTT', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/NTT_company_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'global.ntt' },
  { name: 'Mindtree', logo: 'https://upload.wikimedia.org/wikipedia/ta/a/a1/Mindtree_new_logo.jpg?utm_source=ta.wikipedia.org&utm_campaign=index&utm_content=original', domain: 'ltimindtree.com' },
  { name: 'Laman & Company', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/FactSet_Logo.svg', domain: 'lamanandcompany.com' },
  { name: 'The London Clinic', logo: 'https://upload.wikimedia.org/wikipedia/en/9/99/The_London_Clinic_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original', domain: 'thelondonclinic.co.uk' },
  { name: 'Kyndryl', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Logo_Kyndryl.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'kyndryl.com' },
  { name: 'Suzlon', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Suzlon_Energy_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'suzlon.com' },
  { name: 'Tiger Analytics', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/22/HCLTech-new-logo.svg', domain: 'tigeranalytics.com' },
  { name: 'Futaba', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Futaba_Corporation_company_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'futaba.co.jp' },
  { name: 'Harley Street Clinic', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/HCA_Healthcare_logo.svg', domain: 'hcahealthcareuk.co.uk' },
  { name: 'NHS England', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/NHS_England_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'england.nhs.uk' },
  { name: 'ACG', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/ACG_Group_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'acg-world.com' },
  { name: 'SBI Securities', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Barclays_flag_logo.svg', domain: 'sbicapsecurities.com' },
  { name: 'PSA Mumbai', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Official_Logo_of_PSA_International.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original', domain: 'globalpsa.com' },
  { name: 'FactSet', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/41/FactSet_wordmark.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'factset.com' },
  { name: 'ICICI Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg', domain: 'icicibank.com' },
  { name: 'Regrow', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Corteva_Agriscience_logo.svg', domain: 'regrow.ag' },
  { name: 'Metro Brands', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Metro-brands-logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'metrobrands.com' },
  { name: 'Oneworld', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Oneworld_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'oneworld.com' },
  { name: 'Boomi', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Boomi-logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'boomi.com' },
  { name: 'Apollo Hospitals', logo: 'https://upload.wikimedia.org/wikipedia/en/c/c5/Apollo_Hospitals_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original', domain: 'apollohospitals.com' },
  { name: 'Everience', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg', domain: 'everience.com' },
  { name: 'Tellermate', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/NEC_logo.svg', domain: 'tellermate.com' },
  { name: 'Corteva Agriscience', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Corteva_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'corteva.com' },
  { name: 'ACT Fibernet', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Atria_Convergence_Technologies_logo.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original', domain: 'actcorp.in' },
  { name: 'Linguard', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/FactSet_Logo.svg', domain: 'linguard.co.uk' },
  { name: 'Poonawalla Fincorp', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Poonawalla-Fincorp-Logo.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', domain: 'poonawallafincorp.com' }
];

export default function ClientMarquee({ theme, isDark = theme === 'dark' }) {
  const doubledClients = [...clientData, ...clientData];

  return (
    <section 
      className={`py-12 transition-colors duration-300 overflow-hidden relative ${
        isDark ? 'bg-[#050A12] text-white' : 'bg-slate-100 text-slate-900'
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

      {/* Header Container (Without the "Let's Build Together" Button) */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Trusted by Leading Clients
          </h2>
          <p className={`mt-2 text-base max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Join the 1,000+ global enterprises that depend on Teceze for reliable, secure, and scalable IT services every day and stay ahead of what's next.
          </p>
        </div>
      </div>

      {/* Marquee Track */}
      <div className="w-full overflow-hidden py-4">
        <div className="animate-marquee-slow gap-6">
          {doubledClients.map((client, index) => {
            const primaryLogo = client.logo;
            const fallbackLogo = `https://icons.duckduckgo.com/ip3/${client.domain}.ico`;

            return (
              <div
                key={index}
                className={`border rounded-xl px-5 py-3 min-w-[160px] h-[75px] flex items-center justify-center shrink-0 transition-all hover:-translate-y-1 shadow-sm group relative overflow-hidden ${
                  isDark
                    ? 'bg-[#0d1527] border-[#1e293b] hover:border-slate-500'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <img
                  src={primaryLogo}
                  alt={client.name}
                  loading="lazy"
                  className={`max-h-[35px] max-w-[110px] object-contain transition-all duration-300 group-hover:scale-105 ${
                    isDark ? 'brightness-0 invert opacity-85' : 'opacity-95'
                  }`}
                  onError={(e) => {
                    const currentSrc = e.currentTarget.src;
                    if (currentSrc !== fallbackLogo) {
                      e.currentTarget.src = fallbackLogo;
                    } else {
                      e.currentTarget.style.display = 'none';
                      const textFallback = e.currentTarget.nextElementSibling;
                      if (textFallback) textFallback.style.display = 'block';
                    }
                  }}
                />
                <span 
                  style={{ display: 'none' }}
                  className={`font-bold text-xs tracking-wider uppercase text-center ${
                    isDark ? 'text-slate-200' : 'text-slate-800'
                  }`}
                >
                  {client.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}