import { Course } from '@/types';

export const courseCategories = [
  { id: 'business', label: 'Для бизнеса' },
  { id: 'skills', label: 'Быстрые навыки' },
  { id: 'management', label: 'Для руководителей' },
  { id: 'digital', label: 'Digital' },
  { id: 'finance', label: 'Финансы' },
  { id: 'sales', label: 'Продажи' },
];

export const courseTabs = [
  { id: 'business', label: 'Для бизнеса и предпринимателей' },
  { id: 'skills', label: 'Быстрые навыки' },
  { id: 'management', label: 'Для руководителей' },
];

export const courses: Course[] = [
  // Для бизнеса и предпринимателей
  {
    id: 'c1',
    title: 'Основы предпринимательства',
    shortDesc: 'От идеи до первых продаж за 8 недель',
    tags: ['стартап', 'MVP', 'продажи'],
    category: 'business',
    badge: 'popular',
  },
  {
    id: 'c2',
    title: 'Финансовое планирование для бизнеса',
    shortDesc: 'Бюджетирование, cash flow и unit-экономика',
    tags: ['финансы', 'планирование', 'P&L'],
    category: 'business',
    badge: 'subscription',
  },
  {
    id: 'c3',
    title: 'Построение продаж B2B',
    shortDesc: 'Как продавать корпоративным клиентам',
    tags: ['продажи', 'B2B', 'переговоры'],
    category: 'business',
    badge: 'subscription',
  },
  {
    id: 'c4',
    title: 'Маркетинг для предпринимателей',
    shortDesc: 'Digital-каналы и контент-стратегия',
    tags: ['маркетинг', 'digital', 'контент'],
    category: 'business',
  },
  {
    id: 'c5',
    title: 'Юридические основы бизнеса',
    shortDesc: 'Регистрация, договоры, налоги',
    tags: ['право', 'налоги', 'договоры'],
    category: 'business',
    badge: 'subscription',
  },
  {
    id: 'c6',
    title: 'Масштабирование бизнеса',
    shortDesc: 'Как вырасти x10 и не сломать процессы',
    tags: ['рост', 'процессы', 'команда'],
    category: 'business',
    badge: 'new',
  },
  // Быстрые навыки
  {
    id: 'c7',
    title: 'Эффективные презентации',
    shortDesc: 'Структура, визуализация, подача',
    tags: ['презентации', 'публичные выступления'],
    category: 'skills',
    badge: 'subscription',
  },
  {
    id: 'c8',
    title: 'Деловая переписка',
    shortDesc: 'Email-этикет и структура писем',
    tags: ['коммуникация', 'email', 'письмо'],
    category: 'skills',
    badge: 'subscription',
  },
  {
    id: 'c9',
    title: 'Тайм-менеджмент',
    shortDesc: 'Техники управления временем и приоритизации',
    tags: ['продуктивность', 'GTD', 'планирование'],
    category: 'skills',
    badge: 'popular',
  },
  {
    id: 'c10',
    title: 'Excel для бизнеса',
    shortDesc: 'От базовых функций до сводных таблиц',
    tags: ['Excel', 'аналитика', 'данные'],
    category: 'skills',
    badge: 'subscription',
  },
  {
    id: 'c11',
    title: 'Критическое мышление',
    shortDesc: 'Анализ информации и принятие решений',
    tags: ['мышление', 'анализ', 'решения'],
    category: 'skills',
  },
  {
    id: 'c12',
    title: 'Эмоциональный интеллект',
    shortDesc: 'Управление эмоциями и эмпатия',
    tags: ['EQ', 'эмоции', 'коммуникация'],
    category: 'skills',
    badge: 'new',
  },
  // Для руководителей
  {
    id: 'c13',
    title: 'Основы менеджмента',
    shortDesc: 'Планирование, делегирование, контроль',
    tags: ['менеджмент', 'управление', 'команда'],
    category: 'management',
    badge: 'subscription',
  },
  {
    id: 'c14',
    title: 'Управление командой',
    shortDesc: 'Мотивация, развитие, обратная связь',
    tags: ['команда', 'мотивация', 'HR'],
    category: 'management',
    badge: 'popular',
  },
  {
    id: 'c15',
    title: 'Стратегическое мышление',
    shortDesc: 'Видение, планирование, реализация',
    tags: ['стратегия', 'планирование', 'vision'],
    category: 'management',
  },
  {
    id: 'c16',
    title: 'Финансы для руководителей',
    shortDesc: 'Чтение отчетности и бюджетирование',
    tags: ['финансы', 'отчетность', 'бюджет'],
    category: 'management',
    badge: 'subscription',
  },
  {
    id: 'c17',
    title: 'Управление изменениями',
    shortDesc: 'Как внедрять изменения без сопротивления',
    tags: ['change management', 'трансформация'],
    category: 'management',
    badge: 'new',
  },
  {
    id: 'c18',
    title: 'Лидерство в кризис',
    shortDesc: 'Антикризисное управление и коммуникация',
    tags: ['кризис', 'лидерство', 'решения'],
    category: 'management',
  },
  // Digital
  {
    id: 'c19',
    title: 'Data-driven подход',
    shortDesc: 'Принятие решений на основе данных',
    tags: ['data', 'аналитика', 'метрики'],
    category: 'digital',
    badge: 'subscription',
  },
  {
    id: 'c20',
    title: 'Основы Product Management',
    shortDesc: 'От discovery до delivery',
    tags: ['product', 'agile', 'roadmap'],
    category: 'digital',
    badge: 'popular',
  },
  {
    id: 'c21',
    title: 'Digital-маркетинг',
    shortDesc: 'Каналы, воронки, аналитика',
    tags: ['маркетинг', 'digital', 'performance'],
    category: 'digital',
    badge: 'subscription',
  },
  {
    id: 'c22',
    title: 'UX для бизнеса',
    shortDesc: 'Как улучшить клиентский опыт',
    tags: ['UX', 'CX', 'дизайн'],
    category: 'digital',
  },
  // Финансы
  {
    id: 'c23',
    title: 'Финансовая грамотность',
    shortDesc: 'Основы финансов для нефинансистов',
    tags: ['финансы', 'грамотность', 'основы'],
    category: 'finance',
    badge: 'subscription',
  },
  {
    id: 'c24',
    title: 'Инвестиции для бизнеса',
    shortDesc: 'Привлечение и оценка инвестиций',
    tags: ['инвестиции', 'оценка', 'fundraising'],
    category: 'finance',
  },
];

export const getCoursesByCategory = (category: string): Course[] => {
  if (category === 'all') return courses;
  return courses.filter((c) => c.category === category);
};
