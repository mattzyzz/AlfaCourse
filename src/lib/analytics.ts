import { AnalyticsEvent, AnalyticsEventData, ProductKey, FormType } from '@/types';

// GTM dataLayer type
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Push event to GTM dataLayer
 */
const pushToDataLayer = (data: AnalyticsEventData) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    const { event, ...rest } = data;
    window.dataLayer.push({
      event,
      ...rest,
    });

    // Debug log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics]', data);
    }
  }
};

/**
 * Track generic event
 */
export const trackEvent = (event: AnalyticsEvent, data?: Partial<AnalyticsEventData>) => {
  pushToDataLayer({ event, ...data });
};

/**
 * Track header CTA click
 */
export const trackHeaderCTA = () => {
  trackEvent('click_header_cta');
};

/**
 * Track hero consultation CTA click
 */
export const trackHeroConsultCTA = () => {
  trackEvent('click_hero_cta_consult');
};

/**
 * Track hero demo CTA click
 */
export const trackHeroDemoCTA = () => {
  trackEvent('click_hero_cta_demo');
};

/**
 * Track product card click
 */
export const trackProductCardClick = (productKey: ProductKey) => {
  trackEvent('click_product_card', { productKey });
};

/**
 * Track form open
 */
export const trackFormOpen = (formType: FormType, productKey?: ProductKey) => {
  trackEvent('open_form', { formType, productKey });
};

/**
 * Track successful lead submission
 */
export const trackLeadSuccess = (formType: FormType, productKey?: ProductKey) => {
  trackEvent('submit_lead_success', { formType, productKey });
};

/**
 * Track failed lead submission
 */
export const trackLeadError = (formType: FormType, productKey?: ProductKey) => {
  trackEvent('submit_lead_error', { formType, productKey });
};

/**
 * Track course filter
 */
export const trackCourseFilter = (category: string) => {
  trackEvent('filter_courses', { category });
};

/**
 * Track FAQ item open
 */
export const trackFaqOpen = (faqId: string) => {
  trackEvent('open_faq_item', { faqId });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (depth: 25 | 50 | 75) => {
  const event: AnalyticsEvent = `scroll_depth_${depth}` as AnalyticsEvent;
  trackEvent(event);
};

/**
 * Initialize scroll depth tracking
 */
export const initScrollTracking = () => {
  if (typeof window === 'undefined') return;

  const tracked = { 25: false, 50: false, 75: false };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;

    if (scrolled >= 25 && !tracked[25]) {
      tracked[25] = true;
      trackScrollDepth(25);
    }
    if (scrolled >= 50 && !tracked[50]) {
      tracked[50] = true;
      trackScrollDepth(50);
    }
    if (scrolled >= 75 && !tracked[75]) {
      tracked[75] = true;
      trackScrollDepth(75);
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => window.removeEventListener('scroll', handleScroll);
};
