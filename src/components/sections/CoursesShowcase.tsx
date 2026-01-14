'use client';

import { useState } from 'react';
import { Button, Card, Badge, CourseBadge, Tabs, TabsList, TabTrigger, TabContent } from '@/components/ui';
import { courses, courseCategories, courseTabs, getCoursesByCategory } from '@/config/courses';
import { coursesContent } from '@/config/content';
import { trackCourseFilter } from '@/lib/analytics';

interface CoursesShowcaseProps {
  onCatalogRequest: () => void;
}

export const CoursesShowcase = ({ onCatalogRequest }: CoursesShowcaseProps) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    trackCourseFilter(category);
  };

  const filteredCourses = getCoursesByCategory(activeCategory);

  return (
    <section id="catalog" className="section-padding bg-alfa-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-2 text-white mb-4">
            {coursesContent.title}
          </h2>
          <p className="text-body text-alfa-gray-300 max-w-2xl mx-auto">
            {coursesContent.subtitle}
          </p>
        </div>

        {/* Category tabs */}
        <Tabs defaultValue="business" onChange={handleCategoryChange}>
          <TabsList className="justify-center mb-8 flex-wrap">
            {courseTabs.map((tab) => (
              <TabTrigger key={tab.id} value={tab.id}>
                {tab.label}
              </TabTrigger>
            ))}
          </TabsList>

          {courseTabs.map((tab) => {
            const tabCourses = courses.filter((c) => c.category === tab.id);
            return (
              <TabContent key={tab.id} value={tab.id}>
                {/* Filter chips */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === 'all'
                        ? 'bg-alfa-red text-white'
                        : 'bg-alfa-gray-800 text-alfa-gray-300 hover:bg-alfa-gray-700'
                    }`}
                  >
                    Все
                  </button>
                  {courseCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeCategory === cat.id
                          ? 'bg-alfa-red text-white'
                          : 'bg-alfa-gray-800 text-alfa-gray-300 hover:bg-alfa-gray-700'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Course grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {(activeCategory === 'all' ? tabCourses : tabCourses.filter((c) => c.category === activeCategory))
                    .slice(0, 8)
                    .map((course) => (
                      <Card key={course.id} hover className="flex flex-col h-full">
                        {/* Badge */}
                        {course.badge && (
                          <div className="mb-3">
                            <CourseBadge type={course.badge} />
                          </div>
                        )}

                        {/* Title */}
                        <h3 className="font-semibold text-white mb-2">
                          {course.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-alfa-gray-300 mb-4 flex-1">
                          {course.shortDesc}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {course.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="default">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </Card>
                    ))}
                </div>
              </TabContent>
            );
          })}
        </Tabs>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" onClick={onCatalogRequest}>
            {coursesContent.ctaCatalog}
          </Button>
        </div>
      </div>
    </section>
  );
};
