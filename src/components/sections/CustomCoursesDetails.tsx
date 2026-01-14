'use client';

import { Button } from '@/components/ui';

interface CustomCoursesDetailsProps {
  onCtaClick: () => void;
}

export const CustomCoursesDetails = ({ onCtaClick }: CustomCoursesDetailsProps) => {
  const processSteps = [
    {
      num: 1,
      title: 'Брифинг',
      desc: 'Погружаемся в вашу специфику, продукт и терминологию',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      num: 2,
      title: 'Концепция',
      desc: 'Разрабатываем структуру и сценарий курса',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      num: 3,
      title: 'Продакшен',
      desc: 'Создаем контент, видео, интерактивы',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      num: 4,
      title: 'Запуск',
      desc: 'Интегрируем в вашу LMS и обучаем админов',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const formats = [
    { title: 'Адаптация программы', desc: 'Берем готовый курс и адаптируем под ваши процессы' },
    { title: 'Разработка с нуля', desc: 'Создаем уникальный курс под вашу задачу' },
    { title: 'Обучение отделов', desc: 'Профильные курсы для конкретных подразделений' },
    { title: 'Видеопродакшен', desc: 'Съемка и монтаж студийного качества' },
  ];

  return (
    <section className="section-padding bg-alfa-gray-900 border-t border-alfa-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-2 text-white mb-3">
            Как мы создаем курсы
          </h2>
          <p className="text-body-dark max-w-2xl mx-auto">
            Полный цикл разработки — от идеи до готового продукта
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {processSteps.map((step) => (
            <div
              key={step.num}
              className="relative bg-alfa-gray-800 rounded-xl p-6 border border-alfa-gray-700"
            >
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-alfa-red rounded-full flex items-center justify-center text-white font-bold text-sm">
                {step.num}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-alfa-red/10 rounded-lg flex items-center justify-center text-alfa-red mb-4">
                {step.icon}
              </div>

              <h3 className="font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-alfa-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Formats */}
        <div className="bg-alfa-gray-800 rounded-2xl p-6 lg:p-8 border border-alfa-gray-700 mb-8">
          <h3 className="text-lg font-semibold text-white mb-6">Форматы разработки</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {formats.map((format, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-alfa-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-alfa-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm">{format.title}</h4>
                  <p className="text-xs text-alfa-gray-400">{format.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" onClick={onCtaClick}>
            Запросить КП на разработку
          </Button>
        </div>
      </div>
    </section>
  );
};
