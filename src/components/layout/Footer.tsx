import { footerContent } from '@/config/content';

export const Footer = () => {
  const awards = [
    {
      icon: (
        <svg className="w-6 h-6 text-alfa-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Образовательный проект года',
      subtitle: 'Digital Leaders Awards 2024'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-alfa-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Лучшее решение в бизнес-образовании',
      subtitle: '«Комплаенс 2024», НИУ ВШЭ'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-alfa-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      title: 'Образовательная экосистема',
      subtitle: 'Digital Learning 2024'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-alfa-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: 'Образовательная платформа года',
      subtitle: '«Эффективное образование» 2024'
    },
  ];

  const footerNav = {
    'Теория и практика': [
      { label: 'Курсы', href: '#catalog' },
      { label: 'Подкасты', href: '#' },
      { label: 'Статьи', href: '#' },
    ],
    'О проекте': [
      { label: 'Альфа Курс+', href: '#product-subscription' },
      { label: 'LMS-система', href: '#product-lms' },
      { label: 'Кастомные курсы', href: '#product-custom_courses' },
    ],
    'Может пригодиться': [
      { label: 'Техподдержка', href: '#' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Контакты', href: '#contacts' },
    ],
  };

  return (
    <footer id="contacts" className="bg-alfa-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-alfa-red rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-wide">АЛЬФА-КУРС</span>
              </div>
              <p className="text-alfa-gray-400 text-sm">
                Бизнес-школа Альфа-Банка
              </p>
            </div>
          </div>

          {/* Navigation columns */}
          {Object.entries(footerNav).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-alfa-gray-400 text-sm font-medium mb-4">{title}</h3>
              <nav className="flex flex-col gap-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white hover:text-alfa-red transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-alfa-red text-alfa-red rounded-full hover:bg-alfa-red hover:text-white transition-colors text-sm font-medium"
          >
            У меня вопрос про бизнес
          </a>
        </div>
      </div>

      {/* Awards section */}
      <div className="border-t border-alfa-gray-800">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0">{award.icon}</div>
                <div>
                  <p className="text-white text-sm font-medium">{award.title}</p>
                  <p className="text-alfa-gray-500 text-xs">{award.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legal section */}
      <div className="border-t border-alfa-gray-800">
        <div className="container mx-auto py-6">
          <div className="text-xs text-alfa-gray-500 space-y-4">
            <p>
              {footerContent.copyright} ИНН 5074075200, КПП 507401001, ОГРН 1225000053508.
            </p>
            <p>
              Телефон {footerContent.contacts.phone},{' '}
              <a href={`mailto:${footerContent.contacts.email}`} className="text-alfa-red hover:underline">
                {footerContent.contacts.email}
              </a>
            </p>
            <p>
              Информация об обработке персональных данных и сведения о реализуемых требованиях к защите персональных данных отражены в{' '}
              <a href="/privacy" className="text-alfa-red hover:underline">
                Политике в отношении обработки персональных данных
              </a>.
            </p>
            <p>
              Материалы, размещенные на Платформе, носят исключительно информационно-ознакомительный характер.
            </p>
          </div>

          {/* Bottom links */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-alfa-gray-800">
            {footerContent.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-alfa-gray-500 hover:text-alfa-gray-300 transition-colors text-xs underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
