import React from 'react';
import { COURSE_METRICS } from '../constants/courseData';

export const MetricsStrip: React.FC = () => {
  return (
    <section className="py-10 border-y border-brand-forest/10 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-brand-forest/10">
          {COURSE_METRICS.map((metric, idx) => (
            <div 
              key={metric.label} 
              className={`flex flex-col ${idx !== 0 ? 'md:pl-8 pt-4 md:pt-0' : ''} ${idx !== COURSE_METRICS.length - 1 ? 'md:pr-8' : ''}`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-forest tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm font-bold text-brand-blue uppercase tracking-wider mt-1">
                {metric.label}
              </div>
              <p className="text-xs sm:text-sm text-brand-text-tertiary mt-1.5 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
