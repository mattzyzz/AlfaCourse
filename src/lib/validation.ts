import { z } from 'zod';

// Phone regex for Russian numbers
const phoneRegex = /^(\+7|8)?[\s-]?\(?[0-9]{3}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/;

// Email regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Lead form validation schema
 */
export const leadSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Минимум 2 символа')
    .max(100, 'Максимум 100 символов'),

  company: z
    .string()
    .min(2, 'Минимум 2 символа')
    .max(200, 'Максимум 200 символов'),

  position: z
    .string()
    .max(100, 'Максимум 100 символов')
    .optional(),

  email: z
    .string()
    .regex(emailRegex, 'Некорректный email'),

  phone: z
    .string()
    .regex(phoneRegex, 'Некорректный номер телефона'),

  companySize: z
    .enum(['1-50', '51-200', '201-500', '501-1000', '1000+'])
    .optional(),

  message: z
    .string()
    .max(1000, 'Максимум 1000 символов')
    .optional(),

  consent: z
    .literal(true, {
      errorMap: () => ({ message: 'Необходимо согласие на обработку данных' }),
    }),

  productKey: z
    .enum(['subscription', 'lms', 'custom_courses', 'alfa_track'])
    .optional(),

  formType: z.enum(['consultation', 'demo', 'proposal', 'pick_solution', 'catalog_request']),

  // UTM params
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmContent: z.string().optional(),
  utmTerm: z.string().optional(),
  referrer: z.string().optional(),
  landingUrl: z.string().optional(),

  // Honeypot (should be empty)
  honeypot: z.string().max(0, 'Bot detected').optional(),
});

export type LeadFormData = z.infer<typeof leadSchema>;

/**
 * Validate lead form data
 */
export const validateLead = (data: unknown) => {
  return leadSchema.safeParse(data);
};

/**
 * Client-side field validation helpers
 */
export const validateEmail = (email: string): string | null => {
  if (!email) return 'Email обязателен';
  if (!emailRegex.test(email)) return 'Некорректный email';
  return null;
};

export const validatePhone = (phone: string): string | null => {
  if (!phone) return 'Телефон обязателен';
  if (!phoneRegex.test(phone)) return 'Некорректный номер телефона';
  return null;
};

export const validateRequired = (value: string, fieldName: string): string | null => {
  if (!value || value.trim().length === 0) return `${fieldName} обязателен`;
  return null;
};

/**
 * Format phone number for display
 */
export const formatPhone = (phone: string): string => {
  // Remove all non-digits
  const digits = phone.replace(/\D/g, '');

  // Format as +7 (XXX) XXX-XX-XX
  if (digits.length === 11) {
    const country = digits[0] === '8' ? '+7' : `+${digits[0]}`;
    return `${country} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9)}`;
  }

  return phone;
};
