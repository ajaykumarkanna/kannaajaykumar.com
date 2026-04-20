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
      // Fetch from public/portfolio-content.json
      try {
        const response = await fetch(`/portfolio-content.json?t=${Date.now()}`);
        if (response.ok) {
          const content = await response.json();
          if (content && Object.keys(content).length > 0) {
            setRawData(content);
            console.log('Portfolio data loaded from JSON');
          }
        }
      } catch (error) {
        console.error('Error fetching portfolio-content.json:', error);
        setRawData(defaultData);
      }
    };

    loadData();

    // Listen for custom update events (from admin panel saves)
    const handleUpdate = () => {
      console.log('Update event received, reloading data...');
      loadData();
    };
    window.addEventListener('portfolio-data-update', handleUpdate);

    return () => {
      window.removeEventListener('portfolio-data-update', handleUpdate);
    };
  }, []);

  // Use useMemo to avoid re-hydrating on every render unless rawData changes
  const hydratedData = useMemo(() => hydratePortfolioData(rawData), [rawData]);

  return hydratedData;
}
