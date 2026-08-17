export const servicesDetailData = {
  // DIGITAL IT WORKPLACE
  'end-user-services': {
    title: 'End User Services',
    tagline: 'Empowering modern workforces with device management and continuous technical support.',
    overview: 'Comprehensive end-to-end technical support, automated device provisioning, and workplace engineering.',
    keyCapabilities: ['Digital Experience Monitoring', 'Unified Endpoint Management', 'VIP Support Desk', 'Zero-Touch Deployment'],
    outcomes: ['Increases productivity', 'Minimizes downtime'],
    technologies: ['Microsoft Intune', 'Jamf', 'ServiceNow', 'Tanium']
  },
  'service-desk': {
    title: 'Service Desk',
    tagline: '24/7 multi-channel enterprise IT support driven by intelligent automation.',
    overview: 'A 24/7 multi-channel IT service desk leveraging AI routing and Level 1–3 engineers.',
    keyCapabilities: ['24/7 Technical Support', 'AI Ticket Automation', 'ITIL v4 Incident Management'],
    outcomes: ['Reduces MTTR', 'Improves CSAT'],
    technologies: ['ServiceNow', 'Jira Service Management', 'Zendesk']
  },
  'field-services': {
    title: 'Field Services',
    tagline: 'Global on-site engineering and hardware infrastructure support.',
    overview: 'Global on-site technical assistance, hardware repair, network patch management, and data center dispatch.',
    keyCapabilities: ['Hardware Repair', 'Data Center Cabling', 'Smart Hands Technical Ops'],
    outcomes: ['Rapid-response field support', 'Reduced local IT overhead'],
    technologies: ['Field Nation', 'ServiceMax', 'Cisco Systems']
  },
  'procurement-lifecycle': {
    title: 'Procurement & Lifecycle Management',
    tagline: 'End-to-end hardware sourcing, asset tracking, and eco-conscious disposition.',
    overview: 'Complete IT asset management (ITAM), hardware procurement, vendor relationship governance, and e-waste disposition.',
    keyCapabilities: ['OEM Vendor Procurement', 'Hardware Asset Tracking', 'Secure Data Destruction'],
    outcomes: ['Optimizes hardware spend', 'Ensures compliant sanitization'],
    technologies: ['Flexera', 'Snow Software', 'Device42']
  },

  // CLOUD & DEVOPS
  'cloud-migration-strategy': {
    title: 'Cloud Migration & Strategy',
    tagline: 'Seamless, risk-free cloud transformation designed for agility, scale, and performance.',
    overview: 'Structured cloud adoption, workload assessment, and zero-downtime migration strategies across AWS, Azure, and GCP.',
    keyCapabilities: ['Application Discovery', 'Re-hosting & Re-platforming', 'Multi-Cloud Architecture', 'Cloud FinOps'],
    outcomes: ['Accelerates time-to-market', 'Optimizes cloud costs'],
    technologies: ['AWS Migration Hub', 'Azure Migrate', 'CloudHealth', 'Terraform']
  },
  'infrastructure-as-code': {
    title: 'Infrastructure as Code (IaC)',
    tagline: 'Automate, standardize, and scale cloud environments effortlessly using code.',
    overview: 'Automated, declarative infrastructure provisioning using modern tools to create repeatable cloud configurations.',
    keyCapabilities: ['Terraform & Ansible', 'Automated Testing & Drift Detection', 'Modular Code Repositories'],
    outcomes: ['Fast environment spin-up', 'Eliminates configuration drift'],
    technologies: ['Terraform', 'Ansible', 'AWS CloudFormation', 'Pulumi']
  },
  'kubernetes-containerization': {
    title: 'Kubernetes & Containerization',
    tagline: 'Orchestrate microservices seamlessly at enterprise scale.',
    overview: 'Enterprise container management and orchestration solutions to build, scale, and manage microservices environments.',
    keyCapabilities: ['Managed Kubernetes (EKS, AKS, GKE)', 'Dockerization', 'Service Mesh Integration (Istio)'],
    outcomes: ['Maximizes server utilization', 'Automatic autoscaling'],
    technologies: ['Kubernetes', 'Docker', 'Istio', 'Helm', 'Prometheus']
  },
  'devsecops-pipelines': {
    title: 'DevSecOps Pipelines',
    tagline: 'Embed security into every phase of your software delivery pipeline.',
    overview: 'Integrate automated security scanners, policy enforcement, and compliance gates directly into CI/CD pipelines.',
    keyCapabilities: ['Automated SAST/DAST Scanning', 'CI/CD Pipeline Engineering', 'Secrets Management'],
    outcomes: ['Early vulnerability detection', 'Accelerated deployment frequency'],
    technologies: ['SonarQube', 'HashiCorp Vault', 'Snyk', 'GitHub Actions']
  },

  // MANAGED CYBERSECURITY
  'soc-managed-detection': {
    title: 'SOC & Managed Detection',
    tagline: 'Round-the-clock threat detection, proactive hunting, and immediate containment.',
    overview: '24/7 Security Operations Center (SOC) delivering continuous SIEM/XDR threat monitoring and incident containment.',
    keyCapabilities: ['24/7 Continuous Threat Monitoring', 'AI Behavior Analysis', 'Proactive Threat Hunting'],
    outcomes: ['Neutralizes ransomware in real-time', 'Reduces MTTD and MTTR'],
    technologies: ['Splunk', 'Microsoft Sentinel', 'CrowdStrike Falcon', 'Palo Alto XSOAR']
  },
  'vulnerability-management': {
    title: 'Vulnerability Management',
    tagline: 'Proactive scanning, risk prioritization, and automated remediation.',
    overview: 'Continuous automated vulnerability identification, risk-based prioritization, and managed patch deployment.',
    keyCapabilities: ['Continuous Network Scanning', 'Risk-Based Prioritization Engine', 'Automated Patch Deployment'],
    outcomes: ['Reduces attack surface', 'Prioritizes high-risk threats'],
    technologies: ['Tenable.io', 'Qualys', 'Rapid7 InsightVM', 'Automox']
  },
  'identity-access-management': {
    title: 'Identity & Access Management',
    tagline: 'Enforce Zero Trust access control across users, systems, and endpoints.',
    overview: 'Zero Trust identity governance, centralized SSO, MFA, and Privileged Access Management (PAM).',
    keyCapabilities: ['SSO & MFA Enforcement', 'Privileged Access Management (PAM)', 'Role-Based Access Control'],
    outcomes: ['Prevents unauthorized access', 'Simplifies user onboarding'],
    technologies: ['Okta', 'Microsoft Entra ID', 'CyberArk', 'Ping Identity']
  },
  'compliance-risk-governance': {
    title: 'Compliance & Risk Governance',
    tagline: 'Continuous regulatory monitoring and enterprise risk management.',
    overview: 'Audit readiness, framework mapping, and continuous compliance enforcement for ISO 27001, SOC 2, GDPR, and HIPAA.',
    keyCapabilities: ['Compliance Gap Analysis', 'Automated GRC Monitoring', 'Third-Party Risk Assessment'],
    outcomes: ['Guarantees audit readiness', 'Mitigates supply chain risk'],
    technologies: ['Vanta', 'Drata', 'OneTrust', 'ServiceNow GRC']
  },

  // APPLICATION MODERNIZATION
  'legacy-system-transformation': {
    title: 'Legacy System Transformation',
    tagline: 'Modernize legacy codebases into scalable, cloud-ready applications.',
    overview: 'Transform legacy monolithic applications into modern, scalable cloud software while preserving business logic.',
    keyCapabilities: ['Monolith-to-Cloud Refactoring', 'Database Migration to Distributed Systems', 'Automated Parity Testing'],
    outcomes: ['Reduces maintenance costs', 'Unlocks performance bottlenecks'],
    technologies: ['Node.js', 'Java Spring Boot', 'Python', 'PostgreSQL', 'AWS Lambda']
  },
  'microservices-architecture': {
    title: 'Microservices Architecture',
    tagline: 'Break down monolithic systems into resilient, independently deployable services.',
    overview: 'Decouple large applications into independent microservices for increased deployment speed and fault isolation.',
    keyCapabilities: ['Domain-Driven Design (DDD)', 'Event-Driven Architecture', 'Circuit Breaker Pattern'],
    outcomes: ['Independent deployments', 'Isolated application failures'],
    technologies: ['Apache Kafka', 'RabbitMQ', 'gRPC', 'Docker', 'Kubernetes']
  },
  'api-development-integration': {
    title: 'API Development & Integration',
    tagline: 'Connect disparate software systems with secure, high-performance APIs.',
    overview: 'Design, develop, and manage enterprise-grade RESTful and GraphQL APIs equipped with secure gateway management.',
    keyCapabilities: ['REST & GraphQL API Design', 'API Gateway Management', 'OAuth2 & JWT Security'],
    outcomes: ['Seamless data exchange', 'Secured API endpoints'],
    technologies: ['Kong Gateway', 'Google Apigee', 'Postman', 'Swagger/OpenAPI']
  },
  'cloud-native-app-development': {
    title: 'Cloud-Native App Development',
    tagline: 'Build resilient, auto-scaling applications built specifically for the cloud.',
    overview: 'Custom web and mobile application engineering built natively for cloud platforms utilizing serverless technology.',
    keyCapabilities: ['Full-Stack Development', 'Serverless Architectures', 'Real-Time Telemetry'],
    outcomes: ['High-performance user experience', 'Lowers operational overhead via serverless'],
    technologies: ['React', 'Node.js', 'Go', 'AWS Lambda', 'DynamoDB', 'TailwindCSS']
  }
};

// Aliases mapping alternative slug variations
servicesDetailData['procurement-and-lifecycle-management'] = servicesDetailData['procurement-lifecycle'];
servicesDetailData['cloud-migration'] = servicesDetailData['cloud-migration-strategy'];
servicesDetailData['cloud-migration-and-strategy'] = servicesDetailData['cloud-migration-strategy'];
servicesDetailData['infrastructure-as-code-iac'] = servicesDetailData['infrastructure-as-code'];
servicesDetailData['iac'] = servicesDetailData['infrastructure-as-code'];
servicesDetailData['kubernetes-and-containerization'] = servicesDetailData['kubernetes-containerization'];
servicesDetailData['soc-and-managed-detection'] = servicesDetailData['soc-managed-detection'];
servicesDetailData['identity-access'] = servicesDetailData['identity-access-management'];
servicesDetailData['identity-and-access-management'] = servicesDetailData['identity-access-management'];
servicesDetailData['compliance-and-risk-governance'] = servicesDetailData['compliance-risk-governance'];
servicesDetailData['api-development-and-integration'] = servicesDetailData['api-development-integration'];