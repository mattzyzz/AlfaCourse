'use client';

import { useEffect } from 'react';
import { Modal } from '@/components/ui';
import { LeadForm } from './LeadForm';
import { FormType, ProductKey } from '@/types';
import { formTitles } from '@/config/content';
import { trackFormOpen } from '@/lib/analytics';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  formType: FormType;
  productKey?: ProductKey;
}

export const LeadFormModal = ({
  isOpen,
  onClose,
  formType,
  productKey,
}: LeadFormModalProps) => {
  // Track form open
  useEffect(() => {
    if (isOpen) {
      trackFormOpen(formType, productKey);
    }
  }, [isOpen, formType, productKey]);

  const title = formTitles[formType] || 'Оставить заявку';

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="md">
      <LeadForm
        formType={formType}
        productKey={productKey}
        onSuccess={() => {
          // Keep modal open to show success message
          // Could close after delay if preferred
          setTimeout(onClose, 2000);
        }}
      />
    </Modal>
  );
};
