// Product types
export type ProductKey = 'subscription' | 'lms' | 'custom_courses' | 'alfa_track';

export interface ProductStep {
  title: string;
  desc: string;
}

export interface ProductFaqItem {
  q: string;
  a: string;
}

export interface Product {
  key: ProductKey;
  title: string;
  shortDesc: string;
  bullets: string[];
  forWhom: string[];
  features: string[];
  steps: ProductStep[];
  miniFaq: ProductFaqItem[];
  price?: string;
}

// Course types
export type CourseBadge = 'subscription' | 'new' | 'popular';

export interface Course {
  id: string;
  title: string;
  shortDesc: string;
  tags: string[];
  category: string;
  badge?: CourseBadge;
}

// FAQ types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  productKey?: ProductKey | 'general';
}

// Case Study types
export interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  result: string;
  quote?: string;
  logo?: string;
}

// Form types
export type FormType = 'consultation' | 'demo' | 'proposal' | 'pick_solution' | 'catalog_request';

export type CompanySize = '1-50' | '51-200' | '201-500' | '501-1000' | '1000+';

export interface LeadPayload {
  fullName: string;
  company: string;
  position?: string;
  email: string;
  phone: string;
  companySize?: CompanySize;
  message?: string;
  consent: boolean;
  productKey?: ProductKey;
  formType: FormType;
  // UTM params
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  referrer?: string;
  landingUrl?: string;
  // Antispam
  honeypot?: string;
}

// Navigation types
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

// Audience tabs types
export type AudienceRole = 'hr' | 'manager' | 'employee';

export interface AudienceTab {
  role: AudienceRole;
  title: string;
  bullets: string[];
  fact: {
    value: string;
    label: string;
  };
}

// Trust section types
export interface TrustMetric {
  value: string;
  label: string;
}

// Implementation benefit types
export interface ImplementationBenefit {
  title: string;
  desc: string;
  icon?: string;
}

// Analytics event types
export type AnalyticsEvent =
  | 'click_header_cta'
  | 'click_hero_cta_consult'
  | 'click_hero_cta_demo'
  | 'click_product_card'
  | 'open_form'
  | 'submit_lead_success'
  | 'submit_lead_error'
  | 'filter_courses'
  | 'open_faq_item'
  | 'scroll_depth_25'
  | 'scroll_depth_50'
  | 'scroll_depth_75';

export interface AnalyticsEventData {
  event: AnalyticsEvent;
  productKey?: ProductKey;
  formType?: FormType;
  category?: string;
  faqId?: string;
}

// Form state types
export type FormState = 'idle' | 'loading' | 'success' | 'error';

export interface FormStatus {
  state: FormState;
  message?: string;
}

// HR Cabinet types
export interface HrCabinetFeature {
  title: string;
  desc: string;
}

export interface HrCabinetColumn {
  title: string;
  features: HrCabinetFeature[];
}
