'use client';

import { Button, Card } from '@/components/ui';
import { implementationContent, implementationBenefits } from '@/config/content';

interface ImplementationBenefitsProps {
  onCtaClick: () => void;
}

export const ImplementationBenefits = ({ onCtaClick }: ImplementationBenefitsProps) => {
  return (
    <section id="implementation" className="section-padding bg-alfa-gray-900 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">
            {implementationContent.title}
          </h2>
          <p className="text-xl text-alfa-gray-300 max-w-2xl mx-auto">
            {implementationContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {implementationBenefits.map((benefit, index) => (
            <Card
              key={index}
              variant="default"
              className="bg-alfa-gray-800 border-alfa-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-alfa-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-alfa-red font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-alfa-gray-400 text-sm">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={onCtaClick}>
            {implementationContent.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};
