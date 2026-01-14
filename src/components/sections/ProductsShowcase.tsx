'use client';

import { useState, useEffect } from 'react';
import { LeadForm } from '@/components/forms';
import { products } from '@/config/products';
import { productsGridContent } from '@/config/content';
import { ProductKey, FormType } from '@/types';
import { trackProductCardClick } from '@/lib/analytics';

interface ProductsShowcaseProps {
  onFormSuccess?: () => void;
  onProductChange?: (productKey: ProductKey) => void;
}

export const ProductsShowcase = ({ onFormSuccess, onProductChange }: ProductsShowcaseProps) => {
  const [activeProduct, setActiveProduct] = useState<ProductKey>('subscription');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Sync initial state with parent
  useEffect(() => {
    onProductChange?.('subscription');
  }, []);

  const handleProductSelect = (productKey: ProductKey) => {
    trackProductCardClick(productKey);
    setActiveProduct(productKey);
    setExpandedFaq(null);
    onProductChange?.(productKey);
  };

  const currentProduct = products.find((p) => p.key === activeProduct)!;

  const formTypeMap: Record<ProductKey, FormType> = {
    subscription: 'consultation',
    lms: 'demo',
    custom_courses: 'proposal',
    alfa_track: 'consultation',
  };

  const productIcons: Record<ProductKey, JSX.Element> = {
    subscription: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    lms: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    custom_courses: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    alfa_track: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  };

  return (
    <section id="solutions" className="section-padding bg-alfa-gray-900">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="heading-2 text-white mb-3">
            {productsGridContent.title}
          </h2>
          <p className="text-body-dark max-w-2xl mx-auto">
            {productsGridContent.subtitle}
          </p>
        </div>

        {/* Product Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {products.map((product) => (
            <button
              key={product.key}
              onClick={() => handleProductSelect(product.key)}
              className={`
                flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm
                transition-all duration-200
                ${activeProduct === product.key
                  ? 'bg-alfa-red text-white shadow-lg'
                  : 'bg-alfa-gray-800 text-alfa-gray-300 hover:bg-alfa-gray-700 hover:text-white border border-alfa-gray-700'
                }
              `}
            >
              {productIcons[product.key]}
              <span className="hidden sm:inline">{product.title}</span>
              <span className="sm:hidden">
                {product.key === 'subscription' && 'Подписка'}
                {product.key === 'lms' && 'LMS'}
                {product.key === 'custom_courses' && 'Кастом'}
                {product.key === 'alfa_track' && 'Трек'}
              </span>
            </button>
          ))}
        </div>

        {/* Product Content */}
        <div className="bg-alfa-gray-800 rounded-2xl border border-alfa-gray-700 overflow-hidden">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Left: Product Info (3 cols) */}
            <div className="lg:col-span-3 p-6 lg:p-8">
              {/* Title & Price */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {currentProduct.title}
                  </h3>
                  <p className="text-alfa-gray-400">{currentProduct.shortDesc}</p>
                </div>
                {currentProduct.price && (
                  <span className="px-3 py-1 bg-alfa-red/20 text-alfa-red font-semibold rounded-full text-sm">
                    {currentProduct.price}
                  </span>
                )}
              </div>

              {/* Features Grid */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-alfa-gray-400 uppercase tracking-wide mb-3">
                  Что внутри
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {currentProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 text-alfa-red flex-shrink-0 mt-0.5"
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
                      <span className="text-sm text-alfa-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mini FAQ */}
              <div>
                <h4 className="text-sm font-semibold text-alfa-gray-400 uppercase tracking-wide mb-3">
                  Частые вопросы
                </h4>
                <div className="space-y-2">
                  {currentProduct.miniFaq.map((item, index) => (
                    <div
                      key={index}
                      className="bg-alfa-gray-900/50 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setExpandedFaq(expandedFaq === index ? null : index)
                        }
                        className="w-full px-4 py-2.5 flex items-center justify-between text-left hover:bg-alfa-gray-900/80 transition-colors"
                      >
                        <span className="font-medium text-white text-sm">
                          {item.q}
                        </span>
                        <svg
                          className={`w-4 h-4 text-alfa-gray-400 transition-transform ${
                            expandedFaq === index ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {expandedFaq === index && (
                        <div className="px-4 pb-3 text-sm text-alfa-gray-400">
                          {item.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form (2 cols) */}
            <div className="lg:col-span-2 bg-alfa-gray-850 p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-alfa-gray-700">
              <div className="lg:sticky lg:top-24">
                <h4 className="text-lg font-semibold text-white mb-2">
                  Оставить заявку
                </h4>
                <p className="text-sm text-alfa-gray-400 mb-5">
                  Расскажем подробнее и подберем решение
                </p>
                <LeadForm
                  formType={formTypeMap[activeProduct]}
                  productKey={activeProduct}
                  onSuccess={onFormSuccess}
                  compact
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
