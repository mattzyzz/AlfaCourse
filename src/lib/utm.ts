'use client';

import { useEffect, useState } from 'react';

export interface UTMParams {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  referrer?: string;
  landingUrl?: string;
}

const UTM_STORAGE_KEY = 'alfa_utm_params';

/**
 * Parse UTM parameters from URL
 */
const parseUTMFromURL = (): UTMParams => {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);

  return {
    utmSource: params.get('utm_source') || undefined,
    utmMedium: params.get('utm_medium') || undefined,
    utmCampaign: params.get('utm_campaign') || undefined,
    utmContent: params.get('utm_content') || undefined,
    utmTerm: params.get('utm_term') || undefined,
    referrer: document.referrer || undefined,
    landingUrl: window.location.href,
  };
};

/**
 * Store UTM params in sessionStorage
 */
const storeUTMParams = (params: UTMParams) => {
  if (typeof window === 'undefined') return;

  // Only store if we have at least one UTM param
  const hasUTM = params.utmSource || params.utmMedium || params.utmCampaign;
  if (!hasUTM && !params.referrer) return;

  try {
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(params));
  } catch {
    // sessionStorage might be unavailable
  }
};

/**
 * Retrieve stored UTM params
 */
const getStoredUTMParams = (): UTMParams => {
  if (typeof window === 'undefined') return {};

  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

/**
 * Hook to get UTM parameters
 * Captures on first load and persists for the session
 */
export const useUTM = (): UTMParams => {
  const [params, setParams] = useState<UTMParams>({});

  useEffect(() => {
    // Check for stored params first
    const stored = getStoredUTMParams();

    if (Object.keys(stored).length > 0) {
      setParams(stored);
    } else {
      // Parse from URL on first visit
      const fromURL = parseUTMFromURL();
      storeUTMParams(fromURL);
      setParams(fromURL);
    }
  }, []);

  return params;
};

/**
 * Get UTM params synchronously (for non-React contexts)
 */
export const getUTMParams = (): UTMParams => {
  const stored = getStoredUTMParams();
  if (Object.keys(stored).length > 0) {
    return stored;
  }
  return parseUTMFromURL();
};
