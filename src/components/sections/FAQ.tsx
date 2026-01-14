'use client';

import { useState } from 'react';
import { faqContent, faqItems } from '@/config/content';
import { products } from '@/config/products';
import { ProductKey } from '@/types';
import { trackFaqOpen } from '@/lib/analytics';

export const FAQ = () => {
  const [activeFilter, setActiveFilter] = useState<ProductKey | 'general' | 'all'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filters = [
    { key: 'all', label: faqContent.filterAll },
    { key: 'general', label: 'Общие' },
    ...products.map((p) => ({ key: p.key, label: p.title })),
  ];

  const filteredFaq =
    activeFilter === 'all'
      ? faqItems
      : faqItems.filter((item) => item.productKey === activeFilter);

  const handleToggle = (id: string) => {
    if (expandedId !== id) {
      trackFaqOpen(id);
    }
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding bg-alfa-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-2 text-white mb-4">{faqContent.title}</h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key as typeof activeFilter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.key
                  ? 'bg-alfa-red text-white'
                  : 'bg-alfa-gray-800 text-alfa-gray-300 hover:bg-alfa-gray-700 border border-alfa-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaq.map((item) => (
            <div
              key={item.id}
              className="bg-alfa-gray-800 rounded-xl border border-alfa-gray-700 overflow-hidden"
            >
              <button
                onClick={() => handleToggle(item.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-alfa-gray-700 transition-colors"
              >
                <span className="font-medium text-white pr-4">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-alfa-gray-400 flex-shrink-0 transition-transform ${
                    expandedId === item.id ? 'rotate-180' : ''
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
              {expandedId === item.id && (
                <div className="px-6 pb-5 text-alfa-gray-300 animate-in fade-in slide-in-from-top-2 duration-200">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
