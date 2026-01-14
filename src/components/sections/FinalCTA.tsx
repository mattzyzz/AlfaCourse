'use client';

import { Button } from '@/components/ui';
import { finalCtaContent } from '@/config/content';

interface FinalCTAProps {
  onCtaClick: () => void;
}

export const FinalCTA = ({ onCtaClick }: FinalCTAProps) => {
  return (
    <section className="section-padding bg-alfa-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-alfa-red/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-alfa-red/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 text-white mb-4">{finalCtaContent.title}</h2>
          <p className="text-xl text-alfa-gray-300 mb-8">{finalCtaContent.subtitle}</p>
          <Button
            size="lg"
            onClick={onCtaClick}
          >
            {finalCtaContent.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};
