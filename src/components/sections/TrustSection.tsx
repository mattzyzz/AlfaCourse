import { trustContent, trustMetrics } from '@/config/content';

export const TrustSection = () => {
  return (
    <section className="section-padding bg-alfa-gray-900">
      <div className="container mx-auto">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="heading-2 text-white mb-4">Результаты обучения</h2>
        </div>

        {/* Metrics with numbered circles like in reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {trustMetrics.map((metric, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="number-circle flex-shrink-0">
                {index + 1}
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">
                  {metric.value}
                </div>
                <div className="text-alfa-gray-400 text-sm">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Logos */}
        <div className="text-center">
          <h3 className="text-sm font-medium text-alfa-gray-500 mb-8 uppercase tracking-wider">
            {trustContent.title}
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-4">
            {/* Placeholder logos */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-24 h-12 bg-alfa-gray-800 rounded-lg flex items-center justify-center border border-alfa-gray-700"
              >
                <span className="text-alfa-gray-500 text-xs">Logo {i}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-alfa-gray-500 italic">
            {trustContent.ndaNote}
          </p>
        </div>
      </div>
    </section>
  );
};
