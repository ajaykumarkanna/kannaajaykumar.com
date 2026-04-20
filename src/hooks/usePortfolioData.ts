import { useState, useEffect, useMemo } from 'react';
import { portfolioData as defaultData, type PortfolioData } from '../data/portfolio-data';
import { resolveAsset } from '../utils/assetUtils';

/**
 * Hydrates portfolio data by resolving string asset keys to actual paths
 */
function hydratePortfolioData(data: any): PortfolioData {
  if (!data || Object.keys(data).length === 0) return defaultData;

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
 * Fetches from /portfolio-content.json (public folder) as the primary source
 */
export function usePortfolioData() {
  const [rawData, setRawData] = useState<any>(defaultData);

  useEffect(() => {
    const loadData = async () => {
      // 1. Try localStorage first (for unsaved session changes)
      const stored = localStorage.getItem('portfolioData_v4');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setRawData(parsed);
          return;
        } catch (error) {
          console.error('Error loading from localStorage:', error);
          localStorage.removeItem('portfolioData_v4');
        }
      }

      // 2. Fetch from public/portfolio-content.json
      try {
        const response = await fetch(`/portfolio-content.json?t=${Date.now()}`);
        if (response.ok) {
          const content = await response.json();
          if (content && Object.keys(content).length > 0) {
            setRawData(content);
          }
        }
      } catch (error) {
        console.error('Error fetching portfolio-content.json:', error);
        setRawData(defaultData);
      }
    };

    loadData();

    // Listen for custom update events (from admin panel saves)
    const handleUpdate = () => loadData();
    window.addEventListener('portfolio-data-update', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('portfolio-data-update', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  // Use useMemo to avoid re-hydrating on every render unless rawData changes
  const hydratedData = useMemo(() => hydratePortfolioData(rawData), [rawData]);

  return hydratedData;
}
