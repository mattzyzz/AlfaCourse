'use client';

import { Button } from '@/components/ui';

interface AlfaTrackDetailsProps {
  onCtaClick: () => void;
}

export const AlfaTrackDetails = ({ onCtaClick }: AlfaTrackDetailsProps) => {
  const stages = [
    {
      num: 1,
      title: 'Подготовка',
      items: ['Сбор данных о компании', 'Формирование рабочей группы', 'Определение метрик успеха'],
      color: 'bg-blue-500/20 text-blue-400',
    },
    {
      num: 2,
      title: 'Аудит',
      items: ['Интервью с ключевыми сотрудниками', 'SWOT-анализ подразделений', 'Анализ воронки и процессов'],
      color: 'bg-yellow-500/20 text-yellow-400',
    },
    {
      num: 3,
      title: 'Внедрение',
      items: ['Тренинги очно/онлайн', 'Мастер-классы и воркшопы', 'Q&A-сессии с экспертами'],
      color: 'bg-green-500/20 text-green-400',
    },
    {
      num: 4,
      title: 'Результат',
      items: ['Оценка изменений по KPI', 'Финальный отчет', 'Рекомендации по развитию'],
      color: 'bg-alfa-red/20 text-alfa-red',
    },
  ];

  const metrics = [
    {
      name: 'Портфель',
      icon: (
        <svg className="w-4 h-4 text-alfa-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      name: 'Доходность',
      icon: (
        <svg className="w-4 h-4 text-alfa-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: 'Продажи',
      icon: (
        <svg className="w-4 h-4 text-alfa-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      name: 'Эффективность',
      icon: (
        <svg className="w-4 h-4 text-alfa-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      name: 'Доля рынка',
      icon: (
        <svg className="w-4 h-4 text-alfa-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
    },
    {
      name: 'Проникновение продуктов',
      icon: (
        <svg className="w-4 h-4 text-alfa-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  const formats = [
    { title: 'Экспресс Check-Up', duration: '1,5–3 месяца', desc: 'Быстрая диагностика и план изменений' },
    { title: 'Точечная задача', duration: 'Индивидуально', desc: 'Решение конкретной проблемы под ключ' },
    { title: 'Полный трек', duration: '6–12 месяцев', desc: 'Комплексная трансформация с сопровождением' },
  ];

  return (
    <section className="section-padding bg-alfa-gray-900 border-t border-alfa-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-2 text-white mb-3">
            Этапы трансформации
          </h2>
          <p className="text-body-dark max-w-2xl mx-auto">
            От аудита до измеримых результатов с менторами из Альфа-Банка
          </p>
        </div>

        {/* Stages */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {stages.map((stage) => (
            <div
              key={stage.num}
              className="bg-alfa-gray-800 rounded-xl p-5 border border-alfa-gray-700"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${stage.color}`}>
                  {stage.num}
                </span>
                <h3 className="font-semibold text-white">{stage.title}</h3>
              </div>

              {/* Items */}
              <ul className="space-y-2">
                {stage.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-alfa-gray-400">
                    <span className="text-alfa-red mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="bg-alfa-gray-800 rounded-2xl p-6 lg:p-8 border border-alfa-gray-700 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">На какие метрики влияем</h3>
          <div className="flex flex-wrap gap-3">
            {metrics.map((metric, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-2 bg-alfa-gray-900 rounded-full text-sm"
              >
                <span>{metric.icon}</span>
                <span className="text-white">{metric.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Formats */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {formats.map((format, idx) => (
            <div
              key={idx}
              className="bg-alfa-gray-800 rounded-xl p-5 border border-alfa-gray-700 hover:border-alfa-red transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-white">{format.title}</h4>
                <span className="text-xs bg-alfa-red/20 text-alfa-red px-2 py-1 rounded-full">
                  {format.duration}
                </span>
              </div>
              <p className="text-sm text-alfa-gray-400">{format.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={onCtaClick}>
            Обсудить трансформацию
          </Button>
        </div>
      </div>
    </section>
  );
};
