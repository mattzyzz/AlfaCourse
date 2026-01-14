'use client';

import { useState } from 'react';
import { audienceTabs } from '@/config/content';
import { AudienceRole } from '@/types';

export const AudienceTabs = () => {
  const [activeTab, setActiveTab] = useState<AudienceRole>('hr');

  const currentTab = audienceTabs.find((t) => t.role === activeTab) || audienceTabs[0];

  return (
    <section className="section-padding bg-alfa-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-2 text-white mb-4">
            Курс пригодится, если
          </h2>
        </div>

        {/* Tabs as cards like in reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {audienceTabs.map((tab) => {
            const isActive = activeTab === tab.role;
            return (
              <button
                key={tab.role}
                onClick={() => setActiveTab(tab.role)}
                className={`
                  relative p-6 rounded-2xl text-left transition-all duration-300
                  ${isActive
                    ? 'bg-alfa-red text-white scale-105 shadow-xl'
                    : 'bg-alfa-gray-800 text-white hover:bg-alfa-gray-700'
                  }
                `}
              >
                {/* Star icon like in reference */}
                <div className={`w-12 h-12 mb-4 ${isActive ? 'text-white' : 'text-alfa-red'}`}>
                  <svg viewBox="0 0 48 48" fill="currentColor">
                    <path d="M24 0l6 18h18l-14 10 5 18-15-11-15 11 5-18L0 18h18z" />
                  </svg>
                </div>

                <h3 className={`font-semibold text-lg mb-2 ${isActive ? 'text-white' : 'text-white'}`}>
                  {tab.title}
                </h3>

                <p className={`text-sm ${isActive ? 'text-white/80' : 'text-alfa-gray-300'}`}>
                  {tab.bullets[0]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Details section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-alfa-gray-800 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Bullets */}
              <div>
                <ul className="space-y-4">
                  {currentTab.bullets.map((bullet, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-alfa-gray-200"
                    >
                      <span className="w-6 h-6 bg-alfa-red rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fact card */}
              <div className="bg-alfa-gray-700 rounded-2xl p-6 text-center shadow-lg">
                <div className="text-5xl font-bold text-alfa-red mb-2">
                  {currentTab.fact.value}
                </div>
                <div className="text-sm text-alfa-gray-300">
                  {currentTab.fact.label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
