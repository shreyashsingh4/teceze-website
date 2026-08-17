import { servicesData } from './servicesData.js';
import { industriesData } from './industriesData.js';
import { companyData } from './companyData.js';
import { resourcesData } from './resourcesData.js';
import { careersData } from './careersData.js';

export function getSearchIndex() {
  const index = [];

  // 1. Services & Sub-services (What We Do)
  Object.keys(servicesData).forEach((key) => {
    const s = servicesData[key];
    index.push({
      id: key,
      title: s.title,
      category: 'Services',
      keywords: `${s.subtitle || ''} ${s.overview || ''}`,
    });

    if (s.subServices) {
      s.subServices.forEach((sub) => {
        index.push({
          id: key, // Route to parent service page
          title: sub.name,
          category: 'Service Feature',
          keywords: sub.desc || '',
        });
      });
    }
  });

  // 2. Industries (Who We Serve)
  Object.keys(industriesData).forEach((key) => {
    const ind = industriesData[key];
    index.push({
      id: key,
      title: ind.title,
      category: 'Industries',
      keywords: `${ind.subtitle || ''} ${ind.overview || ''}`,
    });
  });

  // 3. Company Pages (Who We Are)
  Object.keys(companyData).forEach((key) => {
    const comp = companyData[key];
    index.push({
      id: key,
      title: comp.title,
      category: 'Who We Are',
      keywords: `${comp.subtitle || ''} ${comp.overview || ''}`,
    });
  });

  // 4. Resources (Case Studies, Blog, Whitepapers)
  Object.keys(resourcesData).forEach((key) => {
    const res = resourcesData[key];
    index.push({
      id: key,
      title: res.title,
      category: 'Resources',
      keywords: `${res.subtitle || ''} ${res.overview || ''}`,
    });
  });

  // 5. Careers
  index.push({
    id: 'careers',
    title: 'Careers & Job Openings',
    category: 'Careers',
    keywords: careersData.overview || '',
  });

  careersData.openings.forEach((job) => {
    index.push({
      id: 'careers',
      title: job.title,
      category: 'Job Opening',
      keywords: `${job.department} ${job.location} ${job.description}`,
    });
  });

  return index;
}