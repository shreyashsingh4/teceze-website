import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const searchDatabase = [
  { id: 1, title: 'Application Modernization Framework', category: 'App Dev', summary: 'Strangler Fig pattern, microservices extraction, 5-tier architecture, and API orchestration.' },
  { id: 2, title: 'API Gateway & Traffic Orchestration', category: 'Architecture', summary: 'Edge routing, reverse proxies, mTLS decryption, rate-limiting, and JWT authentication.' },
  { id: 3, title: 'Cloud-Optimized Data & Polyglot Persistence', category: 'Data', summary: 'PostgreSQL, Aurora, NoSQL, Redis cache, and separating OLTP from OLAP workloads.' },
  { id: 4, title: 'DevSecOps & Automated CI/CD Pipelines', category: 'DevOps', summary: 'Policy-as-code, static SAST security analysis, declarative Helm charts, and canary deployments.' },
  { id: 5, title: 'Regulatory Compliance Shield', category: 'Security', summary: 'Continuous governance for SOC 2 Type II, HIPAA, and PCI-DSS compliance guardrails.' }
];

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Teceze Enterprise API' });
});

app.get('/api/search', (req, res) => {
  const query = (req.query.q || '').toLowerCase();
  if (!query) return res.json({ results: [] });

  const results = searchDatabase.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.summary.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  );

  res.json({ results });
});

app.listen(PORT, () => {
  console.log(`🚀 Teceze Server running on http://localhost:${PORT}`);
});