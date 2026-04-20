import { useState, useEffect, useMemo } from 'react';
import { portfolioData as defaultData, type PortfolioData } from '../data/portfolio-data';
import portfolioContent from '../data/portfolio-content.json';
import { resolveAsset } from '../utils/assetUtils';

/**
 * Hydrates portfolio data by resolving string asset keys to actual paths
 */
function hydratePortfolioData(data: any): PortfolioData {
  if (!data) return defaultData;

  const hydrated = { ...data };

  // Hydrate contact assets
  if (hydrated.contact) {
    hydrated.contact.profileImage = resolveAsset(hydrated.contact.profileImage) || hydrated.contact.profileImage;
    hydrated.contact.resumePDF = resolveAsset(hydrated.contact.resumePDF) || hydrated.contact.resumePDF;
  }

  // Hydrate project images
  if (Array.isArray(hydrated.projects)) {
    hydrated.projects = hydrated.projects.map((p: any) => ({
      ...p,
      image: resolveAsset(p.image) || p.image
    }));
  }

  // Hydrate client logos
  if (Array.isArray(hydrated.clients)) {
    hydrated.clients = hydrated.clients.map((c: any) => ({
      ...c,
      logo: resolveAsset(c.logo) || c.logo
    }));
  }

  // Hydrate testimonial images
  if (Array.isArray(hydrated.testimonials)) {
    hydrated.testimonials = hydrated.testimonials.map((t: any) => ({
      ...t,
      image: resolveAsset(t.image) || t.image
    }));
  }

  return hydrated as PortfolioData;
}

/**
 * Custom hook to manage portfolio data
 * Syncs with localStorage and local filesystem (via server) to persist admin panel changes
 */
export function usePortfolioData() {
  const [rawData, setRawData] = useState<any>(() => {
    // 1. Try to use portfolio content from file
    if (portfolioContent && Object.keys(portfolioContent).length > 0) {
      return portfolioContent;
    }
    // 2. Fallback to default data
    return defaultData;
  });

  useEffect(() => {
    const loadData = () => {
      const stored = localStorage.getItem('portfolioData_v4');
      
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setRawData(parsed);
        } catch (error) {
          console.error('Error loading portfolio data from localStorage:', error);
          localStorage.removeItem('portfolioData_v4');
          setRawData(portfolioContent && Object.keys(portfolioContent).length > 0 ? portfolioContent : defaultData);
        }
      } else if (portfolioContent && Object.keys(portfolioContent).length > 0) {
         setRawData(portfolioContent);
      } else {
        setRawData(defaultData);
      }
    };

    // Initial load
    loadData();

    // Listen for changes
    window.addEventListener('storage', loadData);
    window.addEventListener('portfolio-data-update', loadData);

    return () => {
      window.removeEventListener('storage', loadData);
      window.removeEventListener('portfolio-data-update', loadData);
    };
  }, []);

  // Use useMemo to avoid re-hydrating on every render unless rawData changes
  const hydratedData = useMemo(() => hydratePortfolioData(rawData), [rawData]);

  return hydratedData;
}
