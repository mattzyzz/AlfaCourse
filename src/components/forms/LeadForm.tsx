'use client';

import { useState, FormEvent } from 'react';
import { Button, Input, Textarea, Select } from '@/components/ui';
import { FormType, ProductKey, FormState, LeadPayload } from '@/types';
import { formLabels } from '@/config/content';
import { useUTM } from '@/lib/utm';
import { trackLeadSuccess, trackLeadError } from '@/lib/analytics';
import { validateEmail, validatePhone, validateRequired } from '@/lib/validation';

interface LeadFormProps {
  formType: FormType;
  productKey?: ProductKey;
  onSuccess?: () => void;
  compact?: boolean;
}

interface FormErrors {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  consent?: string;
}

export const LeadForm = ({
  formType,
  productKey,
  onSuccess,
  compact = false,
}: LeadFormProps) => {
  const utmParams = useUTM();

  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<FormErrors>({});

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    companySize: '',
    message: '',
    consent: false,
    honeypot: '', // Anti-spam field
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const fullNameError = validateRequired(formData.fullName, 'ФИО');
    if (fullNameError) newErrors.fullName = fullNameError;

    const companyError = validateRequired(formData.company, 'Компания');
    if (companyError) newErrors.company = companyError;

    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    const phoneError = validatePhone(formData.phone);
    if (phoneError) newErrors.phone = phoneError;

    if (!formData.consent) {
      newErrors.consent = 'Необходимо согласие на обработку данных';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Check honeypot
    if (formData.honeypot) {
      console.log('Bot detected');
      return;
    }

    setFormState('loading');

    const payload: LeadPayload = {
      fullName: formData.fullName,
      company: formData.company,
      position: formData.position || undefined,
      email: formData.email,
      phone: formData.phone,
      companySize: formData.companySize as LeadPayload['companySize'] || undefined,
      message: formData.message || undefined,
      consent: formData.consent,
      productKey,
      formType,
      ...utmParams,
    };

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setFormState('success');
      trackLeadSuccess(formType, productKey);
      onSuccess?.();
    } catch {
      setFormState('error');
      trackLeadError(formType, productKey);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({ ...prev, [name]: newValue }));

    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (formState === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-900/20 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="text-lg font-medium text-white">{formLabels.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot - hidden from users */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        className="absolute -left-[9999px]"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className={compact ? 'space-y-4' : 'grid grid-cols-1 md:grid-cols-2 gap-4'}>
        <Input
          name="fullName"
          label={formLabels.fullName}
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
          required
          placeholder="Иван Иванов"
        />

        <Input
          name="company"
          label={formLabels.company}
          value={formData.company}
          onChange={handleChange}
          error={errors.company}
          required
          placeholder="ООО Компания"
        />
      </div>

      {!compact && (
        <Input
          name="position"
          label={formLabels.position}
          value={formData.position}
          onChange={handleChange}
          placeholder="HR-директор"
        />
      )}

      <div className={compact ? 'space-y-4' : 'grid grid-cols-1 md:grid-cols-2 gap-4'}>
        <Input
          name="email"
          type="email"
          label={formLabels.email}
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
          placeholder="email@company.ru"
        />

        <Input
          name="phone"
          type="tel"
          label={formLabels.phone}
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          required
          placeholder="+7 (999) 123-45-67"
        />
      </div>

      {!compact && (
        <>
          <Select
            name="companySize"
            label={formLabels.companySize}
            value={formData.companySize}
            onChange={handleChange}
            options={formLabels.companySizeOptions}
            placeholder="Выберите размер компании"
          />

          <Textarea
            name="message"
            label={formLabels.message}
            value={formData.message}
            onChange={handleChange}
            placeholder="Расскажите о ваших задачах..."
            rows={3}
          />
        </>
      )}

      {/* Consent checkbox */}
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1 w-4 h-4 rounded border-alfa-gray-600 text-alfa-red focus:ring-alfa-red"
        />
        <span className="text-sm text-alfa-gray-300 group-hover:text-white">
          {formLabels.consent}
          <span className="text-alfa-red ml-1">*</span>
        </span>
      </label>
      {errors.consent && (
        <p className="text-sm text-red-500 -mt-2">{errors.consent}</p>
      )}

      {/* Error message */}
      {formState === 'error' && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{formLabels.error}</p>
        </div>
      )}

      {/* Submit button */}
      <Button
        type="submit"
        fullWidth
        size="lg"
        isLoading={formState === 'loading'}
      >
        {formState === 'loading' ? formLabels.submitting : formLabels.submit}
      </Button>
    </form>
  );
};
