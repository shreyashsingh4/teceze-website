export const whoWeServeData = {
  "financial-services": {
    id: "financial-services",
    title: "Financial Services & Banking",
    category: "Who We Serve",
    tagline: "Secure, compliant, and resilient digital banking and fintech architectures.",
    description: "Modernize core banking platforms, enforce strict PCI-DSS and SOC 2 regulatory compliance, and deploy real-time fraud detection systems.",
    overview: "Financial institutions face unprecedented pressure to innovate rapidly while maintaining bulletproof security and regulatory compliance. We help banks, fintechs, and investment firms modernize legacy core systems, secure customer transactions, and scale cloud operations seamlessly.",
    keySolutions: [
      "Core Banking Platform Modernization",
      "Real-Time Fraud Triage & Anomaly Detection",
      "PCI-DSS, SOC 2, & FINRA Compliance Frameworks",
      "Low-Latency Algorithmic Trading Infrastructure"
    ],
    outcomes: [
      "99.9% system uptime for critical payment gateways",
      "Zero-trust security alignment across open banking APIs",
      "50% faster feature delivery for digital mobile banking apps"
    ],
    technologies: ["AWS Financial Services", "Kafka", "Kubernetes", "Splunk", "HashiCorp Vault"]
  },

  "healthcare": {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    category: "Who We Serve",
    tagline: "HIPAA-compliant cloud platforms and secure medical data integration.",
    description: "Accelerate digital health solutions with secure EHR/EMR pipelines, HIPAA-compliant cloud storage, and AI-driven diagnostic workflows.",
    overview: "Healthcare organizations must balance patient data privacy with the demand for frictionless digital care. We engineer secure interoperable health systems, streamline medical imaging storage, and protect sensitive Patient Health Information (PHI) across hybrid networks.",
    keySolutions: [
      "HIPAA & HITECH Compliant Cloud Architecture",
      "HL7 / FHIR API Integration for EHR Systems",
      "Secure Telehealth Platform Scaling",
      "AI-Assisted Diagnostic & Medical Imaging Pipelines"
    ],
    outcomes: [
      "100% HIPAA compliance audit readiness",
      "Seamless patient record exchange across hospital networks",
      "Reduced infrastructure overhead for large medical dataset storage"
    ],
    technologies: ["Azure Health Data Services", "AWS HealthLake", "Docker", "Terraform", "Datadog"]
  },

  "manufacturing": {
    id: "manufacturing",
    title: "Manufacturing & Smart Industry",
    category: "Who We Serve",
    tagline: "Smart factory IoT telemetry, predictive maintenance, and supply chain visibility.",
    description: "Connect shop-floor OT with cloud IT, deploy predictive asset maintenance models, and digitize end-to-end logistics tracking.",
    overview: "Industry 4.0 transformation requires bridging the gap between Operational Technology (OT) and enterprise IT. We implement IoT edge analytics, optimize ERP integrations, and build transparent tracking tools across complex global supply chains.",
    keySolutions: [
      "Smart Factory IoT & OT/IT Integration",
      "Predictive Equipment Maintenance Telemetry",
      "Supply Chain Track-and-Trace Analytics",
      "Enterprise ERP & Logistics Pipeline Integration"
    ],
    outcomes: [
      "30% reduction in unplanned factory floor downtime",
      "End-to-end visibility across shipment logistics",
      "Optimized operational efficiency through automated telemetry"
    ],
    technologies: ["AWS IoT Core", "Azure IoT Hub", "Python / ML Pipelines", "PostgreSQL", "Grafana"]
  },

  "it-technology": {
    id: "it-technology",
    title: "IT & Technology Companies",
    category: "Who We Serve",
    tagline: "Scalable SaaS architecture, CI/CD automation, and cloud cost optimization.",
    description: "Empower software providers, SaaS startups, and tech enterprises to scale infrastructure, accelerate releases, and optimize multi-cloud operations.",
    overview: "Technology companies need agile infrastructure that scales with user growth while keeping cloud costs under control. We partner with tech teams to streamline DevOps automation, enforce Zero-Trust cloud security, and re-architect applications for multi-region scale.",
    keySolutions: [
      "Multi-Tenant SaaS Infrastructure Design",
      "Automated CI/CD Pipeline Engineering",
      "FinOps & Cloud Cost Optimization",
      "Zero-Trust Security & Identity Governance"
    ],
    outcomes: [
      "40% reduction in cloud infrastructure spending",
      "10x increase in deployment frequency with zero downtime",
      "Sub-second global latency for SaaS microservices"
    ],
    technologies: ["Kubernetes", "Terraform", "GitHub Actions", "ArgoCD", "AWS / GCP"]
  },

  "education": {
    id: "education",
    title: "Education & EdTech",
    category: "Who We Serve",
    tagline: "Resilient learning management systems and secure digital campus infrastructure.",
    description: "Scale virtual classrooms, protect student data (FERPA/GDPR), and build high-availability learning management tools.",
    overview: "Educational institutions and EdTech startups require high-bandwidth, resilient digital infrastructure to support hybrid learning, massive online exams, and administrative automation without compromising data privacy.",
    keySolutions: [
      "LMS Modernization & Auto-Scaling for Peak Exam Hours",
      "FERPA & GDPR Compliant Student Data Storage",
      "Virtual Classroom & Live Streaming Infrastructure",
      "Campus-Wide Identity & Access Management (IAM)"
    ],
    outcomes: [
      "Zero server crashes during high-volume online exam periods",
      "Seamless single sign-on (SSO) across university systems",
      "Enhanced remote learning access for thousands of concurrent users"
    ],
    technologies: ["AWS Amplify", "Node.js", "Redis", "Okta", "WebRTC"]
  },

  "government-public-sector": {
    id: "government-public-sector",
    title: "Government & Public Sector",
    category: "Who We Serve",
    tagline: "Mission-critical, air-gapped cloud environments and citizen portals.",
    description: "Modernize public service portals with FedRAMP-aligned security, high accessibility, and resilient cloud architectures.",
    overview: "Government bodies require ultra-secure, accessible, and compliant IT infrastructure to deliver reliable digital services to citizens while defending against sovereign cybersecurity threats.",
    keySolutions: [
      "FedRAMP & NIST Compliant Cloud Migration",
      "Citizen-Facing Service Portal Modernization",
      "Air-Gapped & Sovereign Cloud Deployments",
      "Cyber Threat Intelligence & Incident Response"
    ],
    outcomes: [
      "Fully compliant government agency audit ratings",
      "Rapid citizen access to digital public utilities and services",
      "Hardened defense against nation-state cyber attacks"
    ],
    technologies: ["AWS GovCloud", "Azure Government", "Red Hat Enterprise Linux", "Splunk Enterprise"]
  },

  "retail-ecommerce": {
    id: "retail-ecommerce",
    title: "Retail & E-commerce",
    category: "Who We Serve",
    tagline: "High-concurrency digital storefronts and unified omnichannel experiences.",
    description: "Deliver lightning-fast shopping experiences, manage flash-sale traffic spikes, and optimize inventory integration across global supply chains.",
    overview: "Modern retail demands instant response times and absolute uptime during peak sales events. We build headless commerce architectures, optimize edge-CDN delivery, and integrate inventory systems in real time to maximize conversions.",
    keySolutions: [
      "Headless & Serverless E-Commerce Architectures",
      "Auto-Scaling Infrastructure for Flash-Sale Traffic",
      "Real-Time Inventory & ERP Synchronization",
      "Global Edge Caching & Sub-Second Page Loads"
    ],
    outcomes: [
      "Zero downtime during peak shopping events (Black Friday / Cyber Monday)",
      "35% improvement in mobile checkout conversion rates",
      "Real-time visibility across online and physical retail stock"
    ],
    technologies: ["Next.js", "Node.js", "Commercetools", "Shopify Plus APIs", "Cloudflare Edge"]
  },

  "legal-sector": {
    id: "legal-sector",
    title: "Legal Sector & Professional Services",
    category: "Who We Serve",
    tagline: "Encrypted document management, eDiscovery, and strict confidentiality controls.",
    description: "Protect client privilege with end-to-end encrypted document management, secure electronic discovery, and strict compliance automation.",
    overview: "Law firms and legal departments handle highly sensitive, confidential data daily. We deliver encrypted document repository systems, automated compliance workflows, and secure remote access tools for global legal professionals.",
    keySolutions: [
      "End-to-End Encrypted Document Management Systems (DMS)",
      "High-Performance eDiscovery & Search Pipelines",
      "Strict Access Control & Audit Trail Analytics",
      "Secure Client Portals & Digital Signature Workflows"
    ],
    outcomes: [
      "Complete protection of attorney-client privileged communications",
      "Instant, encrypted search across millions of legal documents",
      "Compliance with international data protection and privacy laws"
    ],
    technologies: ["SharePoint Online", "Azure Information Protection", "Elasticsearch", "DocuSign API"]
  }
};