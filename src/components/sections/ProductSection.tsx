'use client';

import { useState } from 'react';
import { LeadForm } from '@/components/forms';
import { Product, ProductKey } from '@/types';

interface ProductSectionProps {
  product: Product;
  onFormSubmit?: () => void;
}

export const ProductSection = ({ product, onFormSubmit }: ProductSectionProps) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const formTypeMap: Record<ProductKey, 'consultation' | 'demo' | 'proposal'> = {
    subscription: 'consultation',
    lms: 'demo',
    custom_courses: 'proposal',
    alfa_track: 'consultation',
  };

  return (
    <section
      id={`product-${product.key}`}
      className="section-padding bg-alfa-gray-900 border-t border-alfa-gray-800"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-alfa-red/20 rounded-full mb-4">
              <span className="text-sm text-alfa-red font-medium">
                {product.key === 'subscription' ? 'Курс доступен по подписке Курс+' : product.title}
              </span>
            </div>

            {/* Title & Description */}
            <h2 className="heading-2 text-white mb-4">{product.title}</h2>

            {/* Price section like in reference */}
            {product.price && (
              <div className="flex items-baseline gap-3 mb-6">
                <span className="price-current">{product.price}</span>
              </div>
            )}

            <p className="text-body-dark mb-8">{product.shortDesc}</p>

            {/* Features list with checkmarks like in reference */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Одни сплошные плюсы
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-alfa-gray-300">
                    <svg
                      className="w-5 h-5 text-alfa-red flex-shrink-0 mt-0.5"
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
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Steps */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Как запускаем
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {product.steps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="number-circle mx-auto mb-3">
                      {index + 1}
                    </div>
                    <h4 className="font-medium text-white text-sm mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-alfa-gray-400">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini FAQ */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Частые вопросы
              </h3>
              <div className="space-y-3">
                {product.miniFaq.map((item, index) => (
                  <div
                    key={index}
                    className="bg-alfa-gray-800 border border-alfa-gray-700 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setExpandedFaq(expandedFaq === index ? null : index)
                      }
                      className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-alfa-gray-750 transition-colors"
                    >
                      <span className="font-medium text-white text-sm">
                        {item.q}
                      </span>
                      <svg
                        className={`w-5 h-5 text-alfa-gray-400 transition-transform ${
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
                      <div className="px-4 pb-4 text-sm text-alfa-gray-400">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form - like in reference */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="bg-alfa-gray-800 rounded-2xl p-6 shadow-xl border border-alfa-gray-700">
              <h3 className="text-xl font-semibold text-white mb-2">
                Укажите контакты
              </h3>
              <p className="text-sm text-alfa-gray-400 mb-6">
                К ним будет привязан личный кабинет с доступом к подписке
              </p>
              <LeadForm
                formType={formTypeMap[product.key]}
                productKey={product.key}
                onSuccess={onFormSubmit}
                compact
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
