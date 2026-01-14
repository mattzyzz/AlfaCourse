import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Корпоративное обучение | Альфа-Банк',
  description:
    'B2B-решения для корпоративного обучения: подписка на курсы, LMS-система, кастомные программы и Альфа-Трек. Развивайте команду с фокусом на внедрение.',
  keywords: [
    'корпоративное обучение',
    'LMS',
    'бизнес-образование',
    'Альфа-Банк',
    'курсы для бизнеса',
    'обучение сотрудников',
  ],
  authors: [{ name: 'Альфа-Банк' }],
  openGraph: {
    title: 'Корпоративное обучение | Альфа-Банк',
    description:
      'Подписка на курсы, LMS и программы под KPI — с фокусом на внедрение',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Альфа-Курс',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
