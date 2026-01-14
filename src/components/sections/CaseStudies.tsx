import { Card } from '@/components/ui';
import { caseStudiesContent, caseStudies } from '@/config/content';

export const CaseStudies = () => {
  return (
    <section id="cases" className="section-padding bg-alfa-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-white mb-4">
            {caseStudiesContent.title}
          </h2>
          <p className="text-body text-alfa-gray-300 max-w-2xl mx-auto">
            {caseStudiesContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((caseItem) => (
            <Card key={caseItem.id} variant="elevated" padding="lg" className="flex flex-col">
              {/* Industry badge */}
              <span className="inline-block px-3 py-1 bg-alfa-red/10 text-alfa-red text-xs font-medium rounded-full mb-4 self-start">
                {caseItem.industry}
              </span>

              {/* Company */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {caseItem.company}
              </h3>

              {/* Result */}
              <p className="text-alfa-gray-300 mb-4 flex-1">
                {caseItem.result}
              </p>

              {/* Quote */}
              {caseItem.quote && (
                <div className="pt-4 border-t border-alfa-gray-700">
                  <blockquote className="text-sm text-alfa-gray-400 italic">
                    &ldquo;{caseItem.quote}&rdquo;
                  </blockquote>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
