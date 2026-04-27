import { useState, useEffect } from 'react';
import { portfolioData as defaultData, type PortfolioData } from '../data/portfolio-data';

/**
 * Custom hook to manage portfolio data
 * Fetches from /portfolio-content.json (public folder) as the primary source
 */
export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData>(defaultData);

  useEffect(() => {
    const loadData = async () => {
      // Fetch from public/portfolio-content.json
      try {
        const response = await fetch(`/portfolio-content.json?t=${Date.now()}`);
        if (response.ok) {
          const content = await response.json();
          if (content && Object.keys(content).length > 0) {
            setData(content as PortfolioData);
            console.log('Portfolio data loaded from JSON');
          }
        }
      } catch (error) {
        console.error('Error fetching portfolio-content.json:', error);
        setData(defaultData);
      }
    };

    loadData();
  }, []);

  return data;
}
