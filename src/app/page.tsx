'use client';

import { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/layout';
import { LeadFormModal } from '@/components/forms';
import {
  Hero,
  AudienceTabs,
  TrustSection,
  ProductsShowcase,
  CoursesShowcase,
  HrCabinet,
  CustomCoursesDetails,
  AlfaTrackDetails,
  FAQ,
  FinalCTA,
} from '@/components/sections';
import { FormType, ProductKey } from '@/types';
import { initScrollTracking } from '@/lib/analytics';

export default function HomePage() {
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFormType, setModalFormType] = useState<FormType>('consultation');
  const [modalProductKey, setModalProductKey] = useState<ProductKey | undefined>();

  // Selected product for showing relevant detail section
  const [selectedProduct, setSelectedProduct] = useState<ProductKey>('subscription');

  // Initialize scroll tracking
  useEffect(() => {
    const cleanup = initScrollTracking();
    return cleanup;
  }, []);

  // Open modal with specific form type and optional product
  const openModal = (formType: FormType, productKey?: ProductKey) => {
    setModalFormType(formType);
    setModalProductKey(productKey);
    setIsModalOpen(true);
  };

  // Handlers for different CTAs
  const handleConsultClick = () => openModal('consultation');
  const handleDemoClick = () => openModal('demo', 'lms');
  const handleCatalogRequest = () => openModal('catalog_request');
  const handleProposalClick = () => openModal('proposal', 'custom_courses');

  return (
    <>
      <Header onCtaClick={handleConsultClick} />

      <main className="flex-1">
        {/* Hero */}
        <Hero
          onConsultClick={handleConsultClick}
          onDemoClick={handleDemoClick}
        />

        {/* Audience Tabs - кому подходит */}
        <AudienceTabs />

        {/* Trust Section - доверие */}
        <TrustSection />

        {/* Products Showcase - выбор продукта */}
        <ProductsShowcase onProductChange={setSelectedProduct} />

        {/* Product-specific detail sections - показываем только для выбранного продукта */}
        {selectedProduct === 'subscription' && (
          <CoursesShowcase onCatalogRequest={handleCatalogRequest} />
        )}

        {selectedProduct === 'lms' && (
          <HrCabinet onDemoClick={handleDemoClick} />
        )}

        {selectedProduct === 'custom_courses' && (
          <CustomCoursesDetails onCtaClick={handleProposalClick} />
        )}

        {selectedProduct === 'alfa_track' && (
          <AlfaTrackDetails onCtaClick={handleConsultClick} />
        )}

        {/* FAQ */}
        <FAQ />

        {/* Final CTA */}
        <FinalCTA onCtaClick={handleConsultClick} />
      </main>

      <Footer />

      {/* Lead Form Modal */}
      <LeadFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formType={modalFormType}
        productKey={modalProductKey}
      />
    </>
  );
}
