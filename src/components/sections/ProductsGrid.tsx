'use client';

import { Button } from '@/components/ui';
import { products } from '@/config/products';
import { productsGridContent } from '@/config/content';
import { ProductKey } from '@/types';
import { trackProductCardClick } from '@/lib/analytics';

interface ProductsGridProps {
  onProductClick: (productKey: ProductKey) => void;
}

export const ProductsGrid = ({ onProductClick }: ProductsGridProps) => {
  const handleClick = (productKey: ProductKey) => {
    trackProductCardClick(productKey);
    onProductClick(productKey);

    // Scroll to product section
    const element = document.getElementById(`product-${productKey}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="solutions" className="section-padding bg-alfa-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-white mb-4">
            {productsGridContent.title}
          </h2>
          <p className="text-body-dark max-w-2xl mx-auto">
            {productsGridContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.key}
              onClick={() => handleClick(product.key)}
              className={`
                relative p-6 rounded-2xl cursor-pointer transition-all duration-300
                hover:scale-105 hover:shadow-xl group
                ${index === 0
                  ? 'bg-alfa-red text-white'
                  : 'bg-alfa-gray-800 border border-alfa-gray-700 text-white hover:border-alfa-red'
                }
              `}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                index === 0 ? 'bg-white/20' : 'bg-alfa-red/20'
              }`}>
                <ProductIcon productKey={product.key} isAccent={index === 0} />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2">{product.title}</h3>

              {/* Price if exists */}
              {product.price && (
                <span className={`text-sm mb-3 block ${index === 0 ? 'text-white/80' : 'text-alfa-gray-400'}`}>
                  {product.price}
                </span>
              )}

              {/* Bullets */}
              <ul className="space-y-2 mb-4">
                {product.bullets.slice(0, 2).map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className={`flex items-start gap-2 text-sm ${
                    index === 0 ? 'text-white/80' : 'text-alfa-gray-400'
                  }`}>
                    <svg
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${index === 0 ? 'text-white' : 'text-alfa-red'}`}
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
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Arrow */}
              <div className={`flex items-center gap-1 text-sm font-medium ${
                index === 0 ? 'text-white' : 'text-alfa-red'
              } group-hover:gap-2 transition-all`}>
                Подробнее
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Product icons
const ProductIcon = ({ productKey, isAccent }: { productKey: ProductKey; isAccent: boolean }) => {
  const color = isAccent ? 'text-white' : 'text-alfa-red';

  const icons: Record<ProductKey, JSX.Element> = {
    subscription: (
      <svg className={`w-6 h-6 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    lms: (
      <svg className={`w-6 h-6 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    custom_courses: (
      <svg className={`w-6 h-6 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    alfa_track: (
      <svg className={`w-6 h-6 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  };

  return icons[productKey];
};
