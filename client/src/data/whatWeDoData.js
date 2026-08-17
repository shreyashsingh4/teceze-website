import { whatWeDoData } from './data/whatWeDoData';

export const whatWeDoData = {
  // ==========================================
  // 1. DIGITAL IT WORKPLACE
  // ==========================================
  'end-user-services': {
    title: 'End User Services',
    subtitle: 'Empowering modern workforces with seamless device management.',
    description: 'Comprehensive end-to-end technical support, automated device provisioning, and workplace engineering designed to keep your enterprise workforce productive from anywhere.',
    capabilities: [
      'Digital Experience Monitoring (DEM) & Telemetry',
      'Unified Endpoint Management (UEM)',
      'VIP & Executive Technical Support Desk',
      'Zero-Touch Device Deployment'
    ],
    outcomes: ['Increases workforce productivity', 'Minimizes endpoint downtime'],
    tools: ['Microsoft Intune', 'Jamf', 'ServiceNow', 'Tanium']
  },
  'service-desk': {
    title: 'Service Desk',
    subtitle: '24/7 multi-channel enterprise IT support.',
    description: 'A 24/7 multi-channel IT service desk leveraging AI routing, self-service portals, and expert Level 1–3 engineers for rapid incident resolution.',
    capabilities: [
      '24/7 Multi-Lingual Level 1-3 Support',
      'AI-Powered Self-Service & Ticket Automation',
      'ITIL v4 Compliant Incident Management'
    ],
    outcomes: ['Reduces MTTR', 'Improves CSAT scores'],
    tools: ['ServiceNow', 'Jira Service Management', 'Zendesk']
  },
  'field-services': {
    title: 'Field Services',
    subtitle: 'Global on-site engineering and hardware support.',
    description: 'Global on-site technical assistance, hardware repair, network patch management, and data center dispatch services.',
    capabilities: [
      'On-Site Hardware Repair & Dispatch',
      'Data Center Cabling & Rack/Stack Maintenance',
      'Smart Hands & Remote Hands Technical Ops'
    ],
    outcomes: ['Global field coverage', 'Reduced IT overhead'],
    tools: ['Field Nation', 'ServiceMax', 'Cisco Systems']
  },
  'procurement-lifecycle': {
    title: 'Procurement & Lifecycle Management',
    subtitle: 'End-to-end hardware sourcing and asset tracking.',
    description: 'Complete IT asset management (ITAM), hardware procurement, vendor relationship governance, and eco-friendly e-waste disposition.',
    capabilities: [
      'Global OEM Vendor Procurement',
      'Hardware Asset Tracking & Auditing',
      'Certified Secure Data Destruction'
    ],
    outcomes: ['Optimizes hardware spend', 'Ensures compliant data sanitization'],
    tools: ['Flexera', 'Snow Software', 'Device42']
  },

  // ==========================================
  // 2. CLOUD & DEVOPS
  // ==========================================
  'cloud-migration-strategy': {
    title: 'Cloud Migration & Strategy',
    subtitle: 'Seamless, risk-free cloud transformation.',
    description: 'Structured cloud adoption, workload assessment, and zero-downtime migration strategies across AWS, Azure, and GCP.',
    capabilities: [
      'Application Discovery & Cloud Readiness',
      'Re-hosting & Re-platforming Execution',
      'Multi-Cloud Architecture Design'
    ],
    outcomes: ['Faster time-to-market', 'Optimized cloud costs'],
    tools: ['AWS Migration Hub', 'Azure Migrate', 'Terraform']
  },
  'infrastructure-as-code': {
    title: 'Infrastructure as Code (IaC)',
    subtitle: 'Automate and scale cloud environments using code.',
    description: 'Automated, declarative infrastructure provisioning using modern tools to create repeatable, version-controlled cloud environments.',
    capabilities: [
      'Terraform & Ansible Engineering',
      'Automated Testing & Drift Detection',
      'Multi-Region Deployment Modules'
    ],
    outcomes: ['Spins up environments in minutes', 'Eliminates configuration drift'],
    tools: ['Terraform', 'Ansible', 'Pulumi', 'CloudFormation']
  },
  'kubernetes-containerization': {
    title: 'Kubernetes & Containerization',
    subtitle: 'Orchestrate microservices seamlessly at enterprise scale.',
    description: 'Enterprise container management and orchestration solutions to build, scale, and manage microservices environments.',
    capabilities: [
      'Managed Kubernetes (EKS, AKS, GKE) Setup',
      'Dockerization of Legacy Apps',
      'Service Mesh Integration (Istio)'
    ],
    outcomes: ['Maximizes server efficiency', 'Automatic scaling during surges'],
    tools: ['Kubernetes', 'Docker', 'Istio', 'Helm']
  },
  'devsecops-pipelines': {
    title: 'DevSecOps Pipelines',
    subtitle: 'Embed security into every phase of your CI/CD delivery.',
    description: 'Integrate automated security scanners, policy enforcement, and compliance gates directly into continuous delivery pipelines.',
    capabilities: [
      'Automated SAST & DAST Scanning',
      'CI/CD Pipeline Engineering',
      'Secrets Management & Vault Setup'
    ],
    outcomes: ['Early vulnerability detection', 'Faster release cycles'],
    tools: ['SonarQube', 'HashiCorp Vault', 'GitHub Actions']
  },

  // ==========================================
  // 3. MANAGED CYBERSECURITY
  // ==========================================
  'soc-managed-detection': {
    title: 'SOC & Managed Detection',
    tagline: 'Round-the-clock threat detection and containment.',
    description: '24/7 Security Operations Center (SOC) delivering continuous SIEM/XDR threat monitoring, automated threat hunting, and immediate incident containment.',
    capabilities: [
      '24/7 Continuous Threat Monitoring',
      'AI & Heuristic Behavior Analysis',
      'Incident Response & Forensic Remediation'
    ],
    outcomes: ['Real-time threat neutralization', 'Reduced MTTD/MTTR'],
    tools: ['Splunk', 'Microsoft Sentinel', 'CrowdStrike Falcon']
  },
  'vulnerability-management': {
    title: 'Vulnerability Management',
    tagline: 'Proactive scanning and automated remediation.',
    description: 'Continuous automated vulnerability identification, risk-based prioritization, and managed patch deployment across network and cloud endpoints.',
    capabilities: [
      'Continuous Network & Endpoint Scanning',
      'Risk-Based Prioritization Engine',
      'Automated Patch Deployment'
    ],
    outcomes: ['Reduces attack surface', 'Prioritizes high-risk flaws'],
    tools: ['Tenable.io', 'Qualys', 'Rapid7 InsightVM']
  },
  'identity-access-management': {
    title: 'Identity & Access Management',
    tagline: 'Enforce Zero Trust access control across users and systems.',
    description: 'Zero Trust identity governance, centralized Single Sign-On (SSO), Multi-Factor Authentication (MFA), and Privileged Access Management (PAM).',
    capabilities: [
      'Single Sign-On (SSO) & MFA Enforcement',
      'Privileged Access Management (PAM)',
      'Role-Based Access Control (RBAC)'
    ],
    outcomes: ['Prevents unauthorized access', 'Simplifies user onboarding'],
    tools: ['Okta', 'Microsoft Entra ID', 'CyberArk']
  },
  'compliance-risk-governance': {
    title: 'Compliance & Risk Governance',
    tagline: 'Continuous regulatory monitoring and enterprise risk management.',
    description: 'Audit readiness, framework mapping, and continuous compliance enforcement for ISO 27001, SOC 2, GDPR, HIPAA, and PCI-DSS.',
    capabilities: [
      'Compliance Gap Analysis & Audit Prep',
      'Automated GRC Monitoring',
      'Third-Party Vendor Risk Assessment'
    ],
    outcomes: ['Audit readiness for SOC 2 & ISO 27001', 'Mitigates supply chain risk'],
    tools: ['Vanta', 'Drata', 'OneTrust']
  },

  // ==========================================
  // 4. APPLICATION MODERNIZATION
  // ==========================================
  'legacy-system-transformation': {
    title: 'Legacy System Transformation',
    tagline: 'Modernize legacy codebases into scalable applications.',
    description: 'Transform legacy monolithic applications into modern, scalable cloud software while preserving critical business logic and database integrity.',
    capabilities: [
      'Monolith-to-Cloud Refactoring',
      'Database Migration to Distributed Systems',
      'Automated Parity Testing'
    ],
    outcomes: ['Lower maintenance costs', 'Eliminates performance bottlenecks'],
    tools: ['Node.js', 'Spring Boot', 'Python', 'AWS Lambda']
  },
  'microservices-architecture': {
    title: 'Microservices Architecture',
    tagline: 'Break down monolithic systems into resilient services.',
    description: 'Decouple large applications into independent, loosely coupled microservices for increased deployment speed, fault isolation, and scalability.',
    capabilities: [
      'Domain-Driven Design (DDD)',
      'Event-Driven Architecture',
      'Fault Tolerance & Circuit Breakers'
    ],
    outcomes: ['Independent deployments without downtime', 'Isolated fault boundaries'],
    tools: ['Apache Kafka', 'RabbitMQ', 'Docker', 'Kubernetes']
  },
  'api-development-integration': {
    title: 'API Development & Integration',
    tagline: 'Connect disparate systems with secure APIs.',
    description: 'Design, develop, and manage enterprise-grade RESTful and GraphQL APIs equipped with secure gateway management and developer portals.',
    capabilities: [
      'REST & GraphQL API Engineering',
      'API Gateway Management & Security',
      'OAuth2 & Rate Limiting Enforcement'
    ],
    outcomes: ['Seamless data integration', 'Secured API endpoints'],
    tools: ['Kong Gateway', 'Apigee', 'Postman', 'Swagger']
  },
  'cloud-native-app-development': {
    title: 'Cloud-Native App Development',
    tagline: 'Build resilient applications built specifically for cloud.',
    description: 'Custom web and mobile application engineering built natively for cloud platforms utilizing serverless technology and modern web frameworks.',
    capabilities: [
      'Full-Stack Cloud Development',
      'Serverless Architectures',
      'Real-Time Telemetry & Observability'
    ],
    outcomes: ['High performance under load', 'Reduced operational overhead'],
    tools: ['React', 'Node.js', 'Go', 'AWS Lambda', 'DynamoDB']
  }
};