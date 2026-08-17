import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

// Comprehensive Multilingual Translation Data
const translations = {
  EN_UK: {
    badge: "WHAT WE DO",
    heading: "Comprehensive Technology & Managed Services",
    subheading: "From modernizing legacy applications to securing digital infrastructure, explore our end-to-end enterprise service offerings.",
    allOfferings: "All Offerings",
    viewDetails: "View details →",
    categories: {
      "digital-it-workplace": "Digital IT Workplace",
      "managed-cybersecurity": "Managed Cybersecurity",
      "cloud-devops": "Cloud & DevOps",
      "application-modernization": "Application Modernization"
    },
    items: {
      "end-user-services": {
        title: "End User Services",
        description: "Empower your hybrid workforce with seamless device management, customized digital workspaces, and continuous IT support tailored for modern enterprise productivity.",
        features: ["Workspace Provisioning", "Virtual Desktop Infrastructure (VDI)", "Endpoint Health Monitoring"]
      },
      "service-desk": {
        title: "Service Desk",
        description: "24/7 multi-lingual IT helpdesk delivering rapid issue resolution, automated ticket routing, and high first-contact resolution (FCR) rates across all time zones.",
        features: ["AI-Powered Incident Response", "24/7 SLA Guarantees", "Omnichannel User Support"]
      },
      "field-services": {
        title: "Field Services",
        description: "On-site technical support for office hubs, data centers, and remote locations with rapid dispatch engineers for hardware fixes, network setups, and rack-and-stack services.",
        features: ["On-Demand Technician Dispatch", "Hardware Break/Fix", "Data Center Maintenance"]
      },
      "procurement-lifecycle": {
        title: "Procurement & Lifecycle Management",
        description: "End-to-end hardware and software asset management, from strategic global sourcing and deployment to eco-friendly asset disposition (ITAD).",
        features: ["Global Hardware Sourcing", "Asset Tracking & Audit", "Secure IT Asset Disposal (ITAD)"]
      },
      "soc-detection": {
        title: "SOC & Managed Detection",
        description: "Proactive, round-the-clock threat monitoring using SIEM/SOAR technology to detect, analyze, and neutralize advanced cyber threats before business impact.",
        features: ["24/7 Security Operations Center", "Threat Hunting & XDR", "Automated Incident Containment"]
      },
      "vulnerability-management": {
        title: "Vulnerability Management",
        description: "Continuous automated scanning, prioritized patch management, and deep pen-testing to eliminate security flaws across internal and external attack surfaces.",
        features: ["Automated Asset Discovery", "Risk-Based Patch Prioritization", "Penetration Testing"]
      },
      "iam": {
        title: "Identity & Access Management",
        description: "Implement Zero-Trust access control with Multi-Factor Authentication (MFA), Single Sign-On (SSO), and Privileged Access Management (PAM).",
        features: ["Zero-Trust Access Control", "MFA & SSO Deployment", "Privileged Account Security"]
      },
      "compliance-risk": {
        title: "Compliance & Risk Governance",
        description: "Navigating regulatory landscapes (ISO 27001, GDPR, HIPAA, SOC 2) with continuous compliance auditing and enterprise risk frameworks.",
        features: ["Regulatory Audits & Gap Analysis", "GDPR & HIPAA Compliance", "Third-Party Risk Management"]
      },
      "cloud-migration": {
        title: "Cloud Migration & Strategy",
        description: "Seamless workload migration to AWS, Azure, or GCP with zero downtime, optimized cloud spend, and aligned multi-cloud architecture.",
        features: ["Re-hosting & Re-platforming", "Cost & FinOps Optimization", "Multi-Cloud Strategy"]
      },
      "iac": {
        title: "Infrastructure as Code (IaC)",
        description: "Automate server provisioning and configuration management using Terraform, Ansible, and CloudFormation for predictable environments.",
        features: ["Terraform & Ansible Pipelines", "Automated Environment Drift Control", "Immutable Infrastructure"]
      },
      "kubernetes": {
        title: "Kubernetes & Containerization",
        description: "Design, deploy, and scale containerized applications on EKS, AKS, or OpenShift for high availability and elastic auto-scaling.",
        features: ["Docker & Kubernetes Orchestration", "Auto-Scaling Policies", "Service Mesh Architecture"]
      },
      "devsecops": {
        title: "DevSecOps Pipelines",
        description: "Integrate security checks directly into CI/CD pipelines to catch vulnerabilities early without sacrificing deployment speed.",
        features: ["Automated SAST & DAST Scanning", "CI/CD Pipeline Security", "Continuous Integration Pipelines"]
      },
      "legacy-transformation": {
        title: "Legacy System Transformation",
        description: "Refactor or re-architect aging monolithic enterprise codebases into agile, maintainable, high-performance digital systems.",
        features: ["Monolith-to-Microservices", "Codebase Refactoring", "Database Migration & Tuning"]
      },
      "microservices": {
        title: "Microservices Architecture",
        description: "Decouple complex application logic into independent, resilient microservices communicating via secure lightweight protocols.",
        features: ["Domain-Driven Design (DDD)", "Event-Driven Architecture", "Fault-Tolerant Resilience Patterns"]
      },
      "api-integration": {
        title: "API Development & Integration",
        description: "Build scalable RESTful and GraphQL APIs to streamline communication between internal enterprise systems and third-party services.",
        features: ["API Gateway Architecture", "GraphQL & RESTful Standards", "OAuth2 & JWT Security"]
      },
      "cloud-native": {
        title: "Cloud-Native App Development",
        description: "Engineer resilient, web-scale cloud applications built ground-up to leverage serverless computing, micro-frameworks, and auto-scaling.",
        features: ["Serverless Architectures", "High Concurrency Systems", "Edge Computing Optimization"]
      }
    }
  },
  ES: {
    badge: "QUÉ HACEMOS",
    heading: "Servicios Gestionados y Tecnología Integral",
    subheading: "Desde la modernización de aplicaciones heredadas hasta la protección de la infraestructura digital, explore nuestras soluciones empresariales.",
    allOfferings: "Todas las Ofertas",
    viewDetails: "Ver detalles →",
    categories: {
      "digital-it-workplace": "Lugar de Trabajo TI Digital",
      "managed-cybersecurity": "Ciberseguridad Gestionada",
      "cloud-devops": "Nube y DevOps",
      "application-modernization": "Modernización de Aplicaciones"
    },
    items: {
      "end-user-services": {
        title: "Servicios de Usuario Final",
        description: "Potencie su fuerza de trabajo híbrida con gestión fluida de dispositivos y entornos digitales personalizados.",
        features: ["Aprovisionamiento de Trabajo", "Infraestructura VDI", "Monitoreo de Endpoints"]
      },
      "service-desk": {
        title: "Mesa de Ayuda (Service Desk)",
        description: "Soporte TI multilingüe 24/7 con resolución rápida de incidentes y enrutamiento automatizado.",
        features: ["Respuesta a Incidentes IA", "Garantía de SLA 24/7", "Soporte Omnicanal"]
      },
      "field-services": {
        title: "Servicios de Campo",
        description: "Soporte técnico in situ para centros de datos y oficinas con ingenieros de despacho rápido.",
        features: ["Despacho de Técnicos", "Mantenimiento de Hardware", "Mantenimiento Data Center"]
      },
      "procurement-lifecycle": {
        title: "Gestión de Compras y Ciclo de Vida",
        description: "Gestión integral de activos de hardware y software, desde compras globales hasta la disposición de activos.",
        features: ["Suministro Global", "Auditoría de Activos", "Disposición Segura de TI"]
      },
      "soc-detection": {
        title: "SOC y Detección Gestionada",
        description: "Monitoreo proactivo de amenazas las 24 horas usando tecnología SIEM/SOAR para neutralizar ataques.",
        features: ["Centro de Operaciones 24/7", "Caza de Amenazas y XDR", "Contención Automatizada"]
      },
      "vulnerability-management": {
        title: "Gestión de Vulnerabilidades",
        description: "Escaneo automatizado continuo y pruebas de penetración para eliminar fallos de seguridad.",
        features: ["Descubrimiento de Activos", "Priorización de Parches", "Pruebas de Penetración"]
      },
      "iam": {
        title: "Gestión de Identidad y Acceso",
        description: "Implemente control de acceso Zero-Trust con autenticación de múltiples factores y gestión de privilegios.",
        features: ["Control Zero-Trust", "Despliegue MFA y SSO", "Seguridad de Cuentas"]
      },
      "compliance-risk": {
        title: "Cumplimiento y Gobernanza de Riesgos",
        description: "Navegue por marcos normativos (ISO 27001, GDPR, HIPAA) con auditorías continuas.",
        features: ["Auditorías Normativas", "Cumplimiento GDPR/HIPAA", "Gestión de Riesgos"]
      },
      "cloud-migration": {
        title: "Estrategia y Migración a la Nube",
        description: "Migración de cargas de trabajo a AWS, Azure o GCP sin interrupciones y optimizando costos.",
        features: ["Re-hospedaje y Re-plataforma", "Optimización FinOps", "Estrategia Multi-Nube"]
      },
      "iac": {
        title: "Infraestructura como Código (IaC)",
        description: "Automatice el aprovisionamiento de servidores mediante Terraform, Ansible y CloudFormation.",
        features: ["Pipelines Terraform/Ansible", "Control de Desviación", "Infraestructura Inmutable"]
      },
      "kubernetes": {
        title: "Kubernetes y Contenedores",
        description: "Diseño, despliegue y escalado de aplicaciones en EKS, AKS u OpenShift para alta disponibilidad.",
        features: ["Orquestación Kubernetes", "Escalado Automático", "Arquitectura Service Mesh"]
      },
      "devsecops": {
        title: "Pipelines DevSecOps",
        description: "Integre controles de seguridad directamente en sus pipelines CI/CD sin perder velocidad.",
        features: ["Escaneo SAST y DAST", "Seguridad CI/CD", "Integración Continua"]
      },
      "legacy-transformation": {
        title: "Transformación de Sistemas Heredados",
        description: "Refactorice código monolítico antiguo en sistemas digitales ágiles, mantenibles y de alto rendimiento.",
        features: ["Monolito a Microservicios", "Refactorización de Código", "Migración de Bases de Datos"]
      },
      "microservices": {
        title: "Arquitectura de Microservicios",
        description: "Desacople la lógica de sus aplicaciones en microservicios independientes y resilientes.",
        features: ["Diseño Guiado por Dominio", "Arquitectura Basada en Eventos", "Patrones de Resiliencia"]
      },
      "api-integration": {
        title: "Desarrollo e Integración de APIs",
        description: "Construya APIs RESTful y GraphQL escalables para conectar sus sistemas empresariales.",
        features: ["Arquitectura API Gateway", "Estándares RESTful/GraphQL", "Seguridad OAuth2 y JWT"]
      },
      "cloud-native": {
        title: "Desarrollo Nativo en la Nube",
        description: "Cree aplicaciones en la nube diseñadas desde cero para aprovechar computación serverless.",
        features: ["Arquitectura Serverless", "Sistemas de Alta Concurrencia", "Optimización Edge"]
      }
    }
  },
  FR: {
    badge: "CE QUE NOUS FAISONS",
    heading: "Services Informatiques et Technologies Intégrées",
    subheading: "De la modernisation des applications à la sécurisation de votre infrastructure numérique, découvrez nos solutions d'entreprise.",
    allOfferings: "Toutes les Offres",
    viewDetails: "Voir les détails →",
    categories: {
      "digital-it-workplace": "Environnement de Travail Numérique",
      "managed-cybersecurity": "Cybersécurité Gérée",
      "cloud-devops": "Cloud et DevOps",
      "application-modernization": "Modernisation des Applications"
    },
    items: {
      "end-user-services": {
        title: "Services Utilisateurs",
        description: "Gérez efficacement vos équipements et espaces de travail virtuels pour une productivité optimale.",
        features: ["Gestion des Postes", "Infrastructure VDI", "Surveillance des Équipements"]
      },
      "service-desk": {
        title: "Centre de Support (Service Desk)",
        description: "Centre d'assistance informatique multilingue disponible 24/7 pour une résolution rapide des incidents.",
        features: ["Support IA", "Garantie SLA 24/7", "Assistance Omnicanale"]
      },
      "field-services": {
        title: "Services sur Site",
        description: "Support technique sur site et intervention rapide pour vos infrastructures et réseaux.",
        features: ["Intervention Rapide", "Maintenance Matérielle", "Gestion des Data Centers"]
      },
      "procurement-lifecycle": {
        title: "Gestion des Achats et Cycle de Vie",
        description: "Gestion complète de vos actifs informatiques, de l'approvisionnement au recyclage écologique.",
        features: ["Achats Mondiaux", "Audits d'Actifs", "Recyclage Sécurisé (ITAD)"]
      },
      "soc-detection": {
        title: "SOC et Détection des Menaces",
        description: "Surveillance proactive 24/7 pour détecter et neutraliser les cybermenaces avant tout impact.",
        features: ["Centre de Sécurité 24/7", "Chasse aux Menaces", "Reconnaissance et Réponse Auto"]
      },
      "vulnerability-management": {
        title: "Gestion des Vulnérabilités",
        description: "Analyse continue et tests de pénétration pour éliminer les failles de sécurité.",
        features: ["Inventaire Automatisé", "Gestion des Correctifs", "Tests de Pénétration"]
      },
      "iam": {
        title: "Gestion des Identités et des Accès",
        description: "Mise en œuvre d'un contrôle d'accès Zero-Trust avec authentification multifacteur.",
        features: ["Contrôle Zero-Trust", "Déploiement MFA & SSO", "Sécurité des Comptes Privilégiés"]
      },
      "compliance-risk": {
        title: "Conformité et Gestion des Risques",
        description: "Accompagnement sur les normes (ISO 27001, RGPD, HIPAA) et audits de conformité.",
        features: ["Audits de Conformité", "Conformité RGPD / HIPAA", "Gestion des Risques Tiers"]
      },
      "cloud-migration": {
        title: "Migration et Stratégie Cloud",
        description: "Migration fluide de vos données vers AWS, Azure ou GCP sans interruption de service.",
        features: ["Migration et Modernisation", "Optimisation FinOps", "Stratégie Multi-Cloud"]
      },
      "iac": {
        title: "Infrastructure en tant que Code (IaC)",
        description: "Automatisation du déploiement de vos serveurs avec Terraform, Ansible et CloudFormation.",
        features: ["Pipelines Terraform & Ansible", "Contrôle de Conformité", "Infrastructure Inmuable"]
      },
      "kubernetes": {
        title: "Kubernetes et Conteneurs",
        description: "Conception et déploiement d'applications conteneurisées sur EKS, AKS ou OpenShift.",
        features: ["Orchestration Kubernetes", "Scalabilité Automatique", "Architecture Service Mesh"]
      },
      "devsecops": {
        title: "Pipelines DevSecOps",
        description: "Intégration de la sécurité directement dans vos pipelines CI/CD dès la phase de développement.",
        features: ["Analyses SAST & DAST", "Sécurité CI/CD", "Intégration Continue"]
      },
      "legacy-transformation": {
        title: "Modernisation des Systèmes Existants",
        description: "Refonte de vos applications monolithiques vers des architectures modernes et performantes.",
        features: ["Migration vers Microservices", "Refactorisation du Code", "Optimisation Base de Données"]
      },
      "microservices": {
        title: "Architecture Microservices",
        description: "Découpage de votre logique applicative en microservices indépendants et résilients.",
        features: ["Conception Pilotée par el Domaine", "Architecture Événementielle", "Résilience et Tolérance"]
      },
      "api-integration": {
        title: "Développement et Intégration d'APIs",
        description: "Création d'APIs RESTful et GraphQL sécurisées pour interconnecter vos systèmes.",
        features: ["Passerelle API Gateway", "Normes RESTful & GraphQL", "Sécurité OAuth2 & JWT"]
      },
      "cloud-native": {
        title: "Développement d'Applications Cloud-Native",
        description: "Conception d'applications sur-mesure exploitant le calcul serverless et la haute disponibilité.",
        features: ["Architectures Serverless", "Systèmes Haute Performance", "Optimisation Edge"]
      }
    }
  }
};

// Internal Structure Map
const rawCategories = [
  {
    categoryId: "digital-it-workplace",
    items: ["end-user-services", "service-desk", "field-services", "procurement-lifecycle"]
  },
  {
    categoryId: "managed-cybersecurity",
    items: ["soc-detection", "vulnerability-management", "iam", "compliance-risk"]
  },
  {
    categoryId: "cloud-devops",
    items: ["cloud-migration", "iac", "kubernetes", "devsecops"]
  },
  {
    categoryId: "application-modernization",
    items: ["legacy-transformation", "microservices", "api-integration", "cloud-native"]
  }
];

export default function WhatWeDoServices({ theme = 'dark', onSelectService }) {
  // Pull language from Context
  const { language } = useLanguage();
  
  // Local state for tabs
  const [activeTab, setActiveTab] = useState("all");
  const isDark = theme === 'dark';

  // Get localized content based on language selected or default to EN_UK
  const currentLangCode = translations[language] ? language : 'EN_UK';
  const t = translations[currentLangCode] || translations.EN_UK;

  // Build structure using active translations
  const servicesData = rawCategories.map(cat => ({
    category: t.categories[cat.categoryId] || cat.categoryId,
    categoryId: cat.categoryId,
    items: cat.items.map(itemId => {
      const itemText = t.items[itemId] || translations.EN_UK.items[itemId];
      return {
        id: itemId,
        title: itemText.title,
        description: itemText.description,
        features: itemText.features
      };
    })
  }));

  const filteredData = activeTab === "all" 
    ? servicesData 
    : servicesData.filter(group => group.categoryId === activeTab);

  return (
    <section id="what-we-do" className={`py-20 border-t transition-colors duration-300 ${
      isDark ? 'bg-[#050A12]/75 backdrop-blur-md text-slate-100 border-cyan-900/30' : 'bg-slate-50/75 backdrop-blur-md text-slate-900 border-slate-200'
    }`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest">
            {t.badge}
          </div>
          <h2 className={`text-3xl sm:text-4xl font-black tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {t.heading}
          </h2>
          <p className={`text-sm font-medium leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {t.subheading}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === "all"
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : isDark ? 'bg-[#081528]/90 text-slate-300 border border-cyan-900/40 hover:border-cyan-500/50' : 'bg-white/90 text-slate-700 border border-slate-300 hover:border-cyan-500'
            }`}
          >
            {t.allOfferings}
          </button>
          {servicesData.map((cat) => (
            <button
              key={cat.categoryId}
              onClick={() => setActiveTab(cat.categoryId)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === cat.categoryId
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                  : isDark ? 'bg-[#081528]/90 text-slate-300 border border-cyan-900/40 hover:border-cyan-500/50' : 'bg-white/90 text-slate-700 border border-slate-300 hover:border-cyan-500'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="space-y-16">
          {filteredData.map((group) => (
            <div key={group.categoryId} className="space-y-8">
              
              {/* Category Group Header */}
              <div className="flex items-center gap-4 border-b border-cyan-500/20 pb-3">
                <h3 className="text-xl font-extrabold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                  {group.category}
                </h3>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500/30 to-transparent"></div>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.items.map((item) => (
                  <div
                    key={item.id}
                    id={item.id}
                    onClick={() => onSelectService && onSelectService(item.id)}
                    className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 ${
                      isDark 
                        ? 'bg-[#081324]/90 border-cyan-900/40 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/10' 
                        : 'bg-white/90 border-slate-200 hover:border-cyan-500 hover:shadow-xl'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500 font-bold text-xs group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                        ✓
                      </div>
                      <h4 className={`text-base font-bold transition-colors ${
                        isDark ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-cyan-600'
                      }`}>
                        {item.title}
                      </h4>
                      <p className={`text-xs leading-relaxed ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-cyan-500/10 space-y-2">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className={`flex items-center gap-2 text-[11px] font-medium ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}>
                          <span className="text-cyan-500 text-xs">•</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                      <div className="pt-2 text-[11px] font-bold text-cyan-500 group-hover:underline flex items-center gap-1">
                        {t.viewDetails}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}