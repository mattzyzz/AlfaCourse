'use client';

import { Button } from '@/components/ui';
import { heroContent } from '@/config/content';
import { trackHeroConsultCTA, trackHeroDemoCTA } from '@/lib/analytics';

interface HeroProps {
  onConsultClick: () => void;
  onDemoClick: () => void;
}

export const Hero = ({ onConsultClick, onDemoClick }: HeroProps) => {
  const handleConsultClick = () => {
    trackHeroConsultCTA();
    onConsultClick();
  };

  const handleDemoClick = () => {
    trackHeroDemoCTA();
    onDemoClick();
  };

  return (
    <section id="hero" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-alfa-gray-900">
      {/* Decorative 3D-like elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-alfa-red/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-alfa-red/10 rounded-full blur-3xl" />

      {/* Abstract shapes */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-alfa-red/30 rounded-xl rotate-12 hidden lg:block" />
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-gradient-to-br from-alfa-red/40 to-transparent rounded-lg -rotate-12 hidden lg:block" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-alfa-gray-800 rounded-full mb-6">
            <span className="w-2 h-2 bg-alfa-red rounded-full animate-pulse" />
            <span className="text-sm text-alfa-gray-300">Корпоративные решения</span>
          </div>

          {/* Title */}
          <h1 className="heading-1 text-white mb-6">
            {heroContent.title}
          </h1>

          {/* Subtitle */}
          <p className="text-body-dark text-xl md:text-2xl mb-8 max-w-2xl">
            {heroContent.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" onClick={handleConsultClick}>
              {heroContent.ctaConsult}
            </Button>
            <Button size="lg" variant="outline" onClick={handleDemoClick} className="border-white text-white hover:bg-white hover:text-alfa-black">
              {heroContent.ctaDemo}
            </Button>
          </div>

          {/* Value markers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {heroContent.markers.map((marker, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-alfa-gray-800/50 backdrop-blur rounded-xl border border-alfa-gray-700"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-alfa-red rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
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
                <span className="text-sm font-medium text-alfa-gray-200">
                  {marker}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
