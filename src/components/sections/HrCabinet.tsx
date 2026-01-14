'use client';

import { Button, Card } from '@/components/ui';
import { hrCabinetContent, hrCabinetColumns } from '@/config/content';

interface HrCabinetProps {
  onDemoClick: () => void;
}

export const HrCabinet = ({ onDemoClick }: HrCabinetProps) => {
  return (
    <section id="hr-cabinet" className="section-padding bg-alfa-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-white mb-4">
            {hrCabinetContent.title}
          </h2>
          <p className="text-body text-alfa-gray-300 max-w-2xl mx-auto">
            {hrCabinetContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {hrCabinetColumns.map((column, columnIndex) => (
            <Card key={columnIndex} variant="elevated" padding="lg">
              <h3 className="text-xl font-semibold text-white mb-6 pb-4 border-b border-alfa-gray-700">
                {column.title}
              </h3>
              <div className="space-y-5">
                {column.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-alfa-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-alfa-red"
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
                    <div>
                      <h4 className="font-medium text-white">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-alfa-gray-300">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={onDemoClick}>
            {hrCabinetContent.ctaDemo}
          </Button>
        </div>
      </div>
    </section>
  );
};
