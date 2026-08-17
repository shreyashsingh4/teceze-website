import React from 'react';

// Single self-contained multi-language registry (No external file dependencies that break render)
const serviceData = {
  // DIGITAL IT WORKPLACE
  'end-user-services': {
    title: { 'en-GB': 'End User Services', 'es': 'Servicios para El Usuario Final' },
    tagline: { 'en-GB': 'Empowering modern workforces with device management and continuous technical support.', 'es': 'Potenciando la fuerza laboral moderna con gestión de dispositivos y soporte continuo.' },
    overview: { 'en-GB': 'Comprehensive end-to-end technical support, automated device provisioning, and workplace engineering.', 'es': 'Soporte técnico integral, aprovisionamiento automatizado de dispositivos e ingeniería de lugares de trabajo.' },
    capabilities: {
      'en-GB': ['Digital Experience Monitoring', 'Unified Endpoint Management', 'VIP Support Desk', 'Zero-Touch Deployment'],
      'es': ['Monitoreo de Experiencia Digital', 'Gestión Unificada de Puntos Finales', 'Mesa de Soporte VIP', 'Despliegue Cero Toque']
    },
    technologies: ['Microsoft Intune', 'Jamf', 'ServiceNow', 'Tanium']
  },
  'service-desk': {
    title: { 'en-GB': 'Service Desk', 'es': 'Mesa de Ayuda y Servicios' },
    tagline: { 'en-GB': '24/7 multi-channel enterprise IT support driven by intelligent automation.', 'es': 'Soporte TI empresarial multicanal 24/7 impulsado por automatización inteligente.' },
    overview: { 'en-GB': 'A 24/7 multi-channel IT service desk leveraging AI routing and Level 1–3 support engineers.', 'es': 'Mesa de servicio de TI multicanal 24/7 que aprovecha el enrutamiento de IA y soporte de Niveles 1 a 3.' },
    capabilities: {
      'en-GB': ['24/7 Technical Support', 'AI Ticket Automation', 'ITIL v4 Incident Management', 'Self-Service Portals'],
      'es': ['Soporte Técnico 24/7', 'Automatización de Tickets por IA', 'Gestión de Incidentes ITIL v4', 'Portales de Autoservicio']
    },
    technologies: ['ServiceNow', 'Jira Service Management', 'Zendesk', 'Freshservice']
  },
  'field-services': {
    title: { 'en-GB': 'Field Services', 'es': 'Servicios de Campo' },
    tagline: { 'en-GB': 'Global on-site engineering and hardware infrastructure support.', 'es': 'Soporte de infraestructura de hardware e ingeniería global en el sitio.' },
    overview: { 'en-GB': 'Global on-site technical assistance, hardware repair, network patch management, and data center smart-hands dispatch.', 'es': 'Asistencia técnica en el sitio, reparación de hardware, gestión de parches de red y soporte en centro de datos.' },
    capabilities: {
      'en-GB': ['Hardware Repair & Maintenance', 'Data Center Cabling', 'Smart Hands Technical Ops', 'On-Site Equipment Swaps'],
      'es': ['Mantenimiento y Reparación de Hardware', 'Cableado de Centro de Datos', 'Operaciones Técnicas Smart Hands', 'Reemplazo de Equipos en Sitio']
    },
    technologies: ['Field Nation', 'ServiceMax', 'Cisco Systems', 'Dell Technologies']
  },
  'procurement-and-lifecycle-management': {
    title: { 'en-GB': 'Procurement & Lifecycle Management', 'es': 'Gestión de Compras y Ciclo de Vida' },
    tagline: { 'en-GB': 'End-to-end hardware sourcing, asset tracking, and eco-conscious disposition.', 'es': 'Aprovisionamiento de hardware, seguimiento de activos y disposición ecológica.' },
    overview: { 'en-GB': 'Complete IT asset management (ITAM), hardware procurement, vendor relationship governance, and compliant e-waste disposition.', 'es': 'Gestión completa de activos de TI (ITAM), adquisición de hardware y eliminación segura de residuos electrónicos.' },
    capabilities: {
      'en-GB': ['OEM Vendor Procurement', 'Hardware Asset Tracking', 'Secure Data Destruction', 'Lifecycle Refresh Planning'],
      'es': ['Adquisición con Proveedores OEM', 'Seguimiento de Activos de Hardware', 'Destrucción Segura de Datos', 'Planificación de Renovación']
    },
    technologies: ['Flexera', 'Snow Software', 'Device42', 'Blancco']
  },

  // CLOUD & DEVOPS
  'cloud-migration-and-strategy': {
    title: { 'en-GB': 'Cloud Migration & Strategy', 'es': 'Estrategia y Migración a la Nube' },
    tagline: { 'en-GB': 'Seamless, risk-free cloud transformation designed for agility, scale, and performance.', 'es': 'Transformación a la nube fluida y sin riesgos diseñada para agilidad y escala.' },
    overview: { 'en-GB': 'Structured cloud adoption, workload assessment, and zero-downtime migration strategies across AWS, Azure, and GCP.', 'es': 'Adopción estructurada de la nube, evaluación de cargas de trabajo y migración sin tiempo de inactividad.' },
    capabilities: {
      'en-GB': ['Application Discovery & Mapping', 'Re-hosting & Re-platforming', 'Multi-Cloud Architecture', 'Cloud FinOps Optimization'],
      'es': ['Mapeo y Descubrimiento de Aplicaciones', 'Re-alojamiento y Re-plataformado', 'Arquitectura Multi-Nube', 'Optimización Cloud FinOps']
    },
    technologies: ['AWS Migration Hub', 'Azure Migrate', 'CloudHealth', 'Terraform']
  },
  'infrastructure-as-code-iac': {
    title: { 'en-GB': 'Infrastructure as Code (IaC)', 'es': 'Infraestructura como Código (IaC)' },
    tagline: { 'en-GB': 'Automate, standardize, and scale cloud environments effortlessly using code.', 'es': 'Automatice, estandarice y escale entornos de nube mediante código.' },
    overview: { 'en-GB': 'Automated, declarative infrastructure provisioning using modern configuration tools to guarantee consistency across multi-cloud deployments.', 'es': 'Aprovisionamiento automatizado e infraestructura declarativa para garantizar consistencia en entornos multi-nube.' },
    capabilities: {
      'en-GB': ['Terraform & Ansible Automation', 'Automated Testing & Drift Detection', 'Modular Infrastructure Repositories', 'Policy-as-Code Enforcement'],
      'es': ['Automatización con Terraform y Ansible', 'Pruebas Automatizadas', 'Repositorios de Infraestructura Modular', 'Políticas como Código']
    },
    technologies: ['Terraform', 'Ansible', 'AWS CloudFormation', 'Pulumi']
  },
  'kubernetes-and-containerization': {
    title: { 'en-GB': 'Kubernetes & Containerization', 'es': 'Kubernetes y Contenedores' },
    tagline: { 'en-GB': 'Orchestrate microservices seamlessly at enterprise scale.', 'es': 'Orqueste microservicios sin problemas a escala empresarial.' },
    overview: { 'en-GB': 'Enterprise container management and orchestration solutions to build, scale, and maintain resilient microservices environments.', 'es': 'Soluciones empresariales de gestión y orquestación de contenedores para construir y escalar microservicios.' },
    capabilities: {
      'en-GB': ['Managed Kubernetes (EKS, AKS, GKE)', 'Container Security & Scanning', 'Service Mesh Integration (Istio)', 'Cluster Auto-Scaling'],
      'es': ['Kubernetes Administrado (EKS, AKS, GKE)', 'Seguridad y Escaneo de Contenedores', 'Integración de Malla de Servicios (Istio)', 'Auto-escalado de Clústeres']
    },
    technologies: ['Kubernetes', 'Docker', 'Istio', 'Helm', 'Prometheus']
  },
  'devsecops-pipelines': {
    title: { 'en-GB': 'DevSecOps Pipelines', 'es': 'Pipelines de DevSecOps' },
    tagline: { 'en-GB': 'Embed security into every phase of your software delivery pipeline.', 'es': 'Integre la seguridad en cada fase del ciclo de entrega de software.' },
    overview: { 'en-GB': 'Integrate automated security scanners, secret detection, policy enforcement, and compliance gates directly into CI/CD delivery workflows.', 'es': 'Integración de escáneres de seguridad automatizados, detección de credenciales y cumplimiento en flujos CI/CD.' },
    capabilities: {
      'en-GB': ['Automated SAST/DAST Scanning', 'CI/CD Pipeline Engineering', 'Secrets & Credential Management', 'Compliance Gate Automation'],
      'es': ['Escaneo Automatizado SAST/DAST', 'Ingeniería de Pipelines CI/CD', 'Gestión de Secretos y Credenciales', 'Automatización de Barreras de Cumplimiento']
    },
    technologies: ['SonarQube', 'HashiCorp Vault', 'Snyk', 'GitHub Actions', 'GitLab CI']
  },

  // MANAGED CYBERSECURITY
  'soc-and-managed-detection': {
    title: { 'en-GB': 'SOC & Managed Detection', 'es': 'SOC y Detección Gestionada' },
    tagline: { 'en-GB': 'Round-the-clock threat detection, proactive hunting, and immediate containment.', 'es': 'Detección de amenazas 24/7, búsqueda proactiva y contención inmediata.' },
    overview: { 'en-GB': '24/7 Security Operations Center (SOC) delivering continuous SIEM and XDR threat monitoring, automated response, and rapid containment.', 'es': 'Centro de Operaciones de Seguridad (SOC) 24/7 con monitoreo continuo SIEM y XDR y respuesta automatizada.' },
    capabilities: {
      'en-GB': ['24/7 Continuous Threat Monitoring', 'AI Behavior Analysis', 'Proactive Threat Hunting', 'Incident Containment & Forensics'],
      'es': ['Monitoreo Continuo de Amenazas 24/7', 'Análisis de Comportamiento con IA', 'Búsqueda Proactiva de Amenazas', 'Análisis Forense de Incidentes']
    },
    technologies: ['Splunk', 'Microsoft Sentinel', 'CrowdStrike Falcon', 'Palo Alto XSOAR']
  },
  'vulnerability-management': {
    title: { 'en-GB': 'Vulnerability Management', 'es': 'Gestión de Vulnerabilidades' },
    tagline: { 'en-GB': 'Proactive scanning, risk prioritization, and automated remediation.', 'es': 'Escaneo proactivo, priorización de riesgos y remediación automatizada.' },
    overview: { 'en-GB': 'Continuous automated vulnerability identification, risk-based vulnerability prioritization, and managed security patch deployment.', 'es': 'Identificación continua de vulnerabilidades, priorización basada en riesgo y parcheo de seguridad administrado.' },
    capabilities: {
      'en-GB': ['Continuous Infrastructure Scanning', 'Risk-Based Prioritization Engine', 'Automated Patch Management', 'Asset Discovery & Inventory'],
      'es': ['Escaneo Continuo de Infraestructura', 'Priorización Basada en Riesgo', 'Gestión Automatizada de Parches', 'Inventario y Descubrimiento de Activos']
    },
    technologies: ['Tenable.io', 'Qualys', 'Rapid7 InsightVM', 'Automox']
  },
  'identity-and-access-management': {
    title: { 'en-GB': 'Identity & Access Management', 'es': 'Gestión de Identidad y Acceso' },
    tagline: { 'en-GB': 'Enforce Zero Trust access control across users, systems, and endpoints.', 'es': 'Aplique control de acceso Zero Trust en usuarios, sistemas y puntos finales.' },
    overview: { 'en-GB': 'Zero Trust identity governance, centralized Single Sign-On (SSO), Multi-Factor Authentication (MFA), and Privileged Access Management (PAM).', 'es': 'Gobernanza de identidad Zero Trust, inicio de sesión único (SSO), autenticación multifactor (MFA) y gestión de acceso privilegiado.' },
    capabilities: {
      'en-GB': ['SSO & MFA Enforcement', 'Privileged Access Management (PAM)', 'Role-Based Access Control (RBAC)', 'Identity Lifecycle Management'],
      'es': ['Aplicación de SSO y MFA', 'Gestión de Acceso Privilegiado (PAM)', 'Control de Acceso Basado en Roles', 'Ciclo de Vida de Identidad']
    },
    technologies: ['Okta', 'Microsoft Entra ID', 'CyberArk', 'Ping Identity']
  },
  'compliance-and-risk-governance': {
    title: { 'en-GB': 'Compliance & Risk Governance', 'es': 'Cumplimiento y Gobernanza de Riesgos' },
    tagline: { 'en-GB': 'Continuous regulatory monitoring and enterprise risk management.', 'es': 'Monitoreo regulatorio continuo y gestión de riesgos empresariales.' },
    overview: { 'en-GB': 'Comprehensive audit readiness, framework mapping, and continuous compliance enforcement for ISO 27001, SOC 2, GDPR, and HIPAA.', 'es': 'Preparación para auditorías, mapeo de marcos normativos y cumplimiento continuo para ISO 27001, SOC 2, GDPR y HIPAA.' },
    capabilities: {
      'en-GB': ['Compliance Gap Analysis', 'Automated GRC Monitoring', 'Third-Party Risk Assessment', 'Audit Policy Enforcement'],
      'es': ['Análisis de Brechas de Cumplimiento', 'Monitoreo Automatizado de GRC', 'Evaluación de Riesgos de Terceros', 'Aplicación de Políticas de Auditoría']
    },
    technologies: ['Vanta', 'Drata', 'OneTrust', 'ServiceNow GRC']
  },

  // APPLICATION MODERNIZATION
  'legacy-system-transformation': {
    title: { 'en-GB': 'Legacy System Transformation', 'es': 'Transformación de Sistemas Heredados' },
    tagline: { 'en-GB': 'Modernize legacy codebases into scalable, cloud-ready applications.', 'es': 'Modernice sistemas antiguos en aplicaciones escalables en la nube.' },
    overview: { 'en-GB': 'Transform monolithic legacy applications into modern, cloud-native architectures while preserving vital underlying business logic.', 'es': 'Transforme aplicaciones monolíticas en arquitecturas modernas basadas en la nube preservando la lógica del negocio.' },
    capabilities: {
      'en-GB': ['Monolith-to-Cloud Refactoring', 'Database Migration & Modernization', 'Automated Parity Testing', 'Codebase Optimization'],
      'es': ['Refactorización de Monolito a la Nube', 'Migración y Modernización de Bases de Datos', 'Pruebas de Paridad Automatizadas', 'Optimización de Código']
    },
    technologies: ['Node.js', 'Java Spring Boot', 'Python', 'PostgreSQL', 'AWS Lambda']
  },
  'microservices-architecture': {
    title: { 'en-GB': 'Microservices Architecture', 'es': 'Arquitectura de Microservicios' },
    tagline: { 'en-GB': 'Break down monolithic systems into resilient, independently deployable services.', 'es': 'Divida sistemas monolíticos en servicios independientes y resilientes.' },
    overview: { 'en-GB': 'Decouple tightly bound applications into independent, event-driven microservices for faster deployments and isolated failure domains.', 'es': 'Desacople aplicaciones monolíticas en microservicios independientes orientados a eventos para mayor rapidez de despliegue.' },
    capabilities: {
      'en-GB': ['Domain-Driven Design (DDD)', 'Event-Driven Architecture', 'Circuit Breaker & Resilience Patterns', 'API Inter-Service Routing'],
      'es': ['Diseño Guiado por el Dominio (DDD)', 'Arquitectura Orientada a Eventos', 'Patrones de Resiliencia', 'Enrutamiento entre Servicios API']
    },
    technologies: ['Apache Kafka', 'RabbitMQ', 'gRPC', 'Docker', 'Kubernetes']
  },
  'api-development-and-integration': {
    title: { 'en-GB': 'API Development & Integration', 'es': 'Desarrollo e Integración de APIs' },
    tagline: { 'en-GB': 'Connect disparate software systems with secure, high-performance APIs.', 'es': 'Conecte sistemas de software con APIs seguras y de alto rendimiento.' },
    overview: { 'en-GB': 'Design, develop, and manage enterprise-grade RESTful and GraphQL APIs backed by robust gateway rate limiting and security protocols.', 'es': 'Diseño, desarrollo y gestión de APIs RESTful y GraphQL con protocolos de seguridad y limitación de tasa.' },
    capabilities: {
      'en-GB': ['REST & GraphQL API Design', 'API Gateway Management', 'OAuth2 & JWT Security', 'Third-Party Webhook Integration'],
      'es': ['Diseño de APIs REST y GraphQL', 'Gestión de API Gateways', 'Seguridad OAuth2 y JWT', 'Integración de Webhooks de Terceros']
    },
    technologies: ['Kong Gateway', 'Google Apigee', 'Postman', 'Swagger/OpenAPI']
  },
  'cloud-native-app-development': {
    title: { 'en-GB': 'Cloud-Native App Development', 'es': 'Desarrollo de Apps Nativas de la Nube' },
    tagline: { 'en-GB': 'Build resilient, auto-scaling applications built specifically for the cloud.', 'es': 'Construya aplicaciones auto-escalables diseñadas para la nube.' },
    overview: { 'en-GB': 'Custom web and mobile application engineering built natively for cloud environments, utilizing serverless computing and modern frontend frameworks.', 'es': 'Desarrollo a medida de aplicaciones web y móviles para entornos de nube utilizando arquitectura serverless.' },
    capabilities: {
      'en-GB': ['Full-Stack Cloud Development', 'Serverless Architecture Design', 'Real-Time Telemetry & Logging', 'Progressive Web App (PWA) Build'],
      'es': ['Desarrollo Cloud Full-Stack', 'Diseño de Arquitectura Serverless', 'Telemetría y Registros en Tiempo Real', 'Desarrollo de PWA']
    },
    technologies: ['React', 'Node.js', 'Go', 'AWS Lambda', 'DynamoDB', 'TailwindCSS']
  }
};

const UI_TEXT = {
  backToHome: { 'en-GB': '← Back to Home', 'es': '← Volver al Inicio' },
  whatWeDo: { 'en-GB': 'WHAT WE DO', 'es': 'LO QUE HACEMOS' },
  coreCapabilities: { 'en-GB': 'Core Capabilities', 'es': 'Capacidades Principales' },
  techAndTooling: { 'en-GB': 'Technologies & Tooling', 'es': 'Tecnologías y Herramientas' }
};

export default function ServiceDetailPage({ serviceId, onBack, theme = 'dark', language, currentLang }) {
  const isDark = theme === 'dark';
  const langKey = currentLang || language || 'en-GB';

  const formatSlug = (str) => {
    if (!str) return '';
    return String(str)
      .toLowerCase()
      .trim()
      .replace(/^#/, '')
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const cleanKey = formatSlug(serviceId);

  // 1. Direct key match
  let rawData = serviceData[cleanKey];

  // 2. Fuzzy match
  if (!rawData && cleanKey) {
    const keys = Object.keys(serviceData);
    const foundKey = keys.find((key) => key.includes(cleanKey) || cleanKey.includes(key));
    if (foundKey) {
      rawData = serviceData[foundKey];
    }
  }

  // Fallback default safety
  if (!rawData) {
    rawData = serviceData['cloud-migration-and-strategy'];
  }

  // Extract translation text safely based on current active language
  const getText = (field) => {
    if (!field) return '';
    if (typeof field === 'string') return field;
    return field[langKey] || field['en-GB'] || field['es'] || '';
  };

  const getArrayText = (field) => {
    if (!field) return [];
    if (Array.isArray(field)) return field;
    return field[langKey] || field['en-GB'] || field['es'] || [];
  };

  const title = getText(rawData.title);
  const tagline = getText(rawData.tagline);
  const overview = getText(rawData.overview);
  const capabilities = getArrayText(rawData.capabilities);
  const technologies = rawData.technologies || [];

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
            {getText(UI_TEXT.backToHome)}
          </button>
        </div>

        {/* Hero Banner */}
        <div className={`p-8 sm:p-12 rounded-3xl border ${
          isDark ? 'bg-[#081324] border-cyan-900/40' : 'bg-white border-slate-200 shadow-md'
        }`}>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 mb-4">
            {getText(UI_TEXT.whatWeDo)}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black">{title}</h1>
          <p className="text-base sm:text-lg text-cyan-400 mt-2 font-medium">{tagline}</p>
          <p className="text-sm text-slate-300 mt-4 leading-relaxed max-w-3xl">{overview}</p>
        </div>

        {/* Core Capabilities */}
        <div className={`p-8 rounded-2xl border ${
          isDark ? 'bg-[#081324] border-cyan-900/40' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-cyan-500 mb-6">
            {getText(UI_TEXT.coreCapabilities)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <div key={i} className={`p-4 rounded-xl border flex items-center gap-3 ${
                isDark ? 'bg-[#0b1b33] border-cyan-900/30 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
              }`}>
                <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                <span className="text-sm font-semibold">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className={`p-8 rounded-2xl border ${
          isDark ? 'bg-[#081324] border-cyan-900/40' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-cyan-500 mb-4">
            {getText(UI_TEXT.techAndTooling)}
          </h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span key={i} className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}