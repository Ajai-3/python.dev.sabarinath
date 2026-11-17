import React from 'react';
import { TECH_STACK } from '../constants/courseData';

export const TechTicker: React.FC = () => {
  // To ensure a mathematically seamless, gap-free infinite loop:
  // Set A and Set B are identical clones of the data.
  const baseItems = [...TECH_STACK, ...TECH_STACK];

  return (
    <div className="py-7 overflow-hidden bg-transparent border-b border-brand-forest/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-widest text-brand-text-tertiary">
          Master the complete industry-standard tech stack
        </span>
      </div>

      {/* Infinite Moving Marquee - Pure Editorial Typography Style (No Badge/Pill boxes) */}
      <div className="relative w-full overflow-hidden select-none">
        {/* Soft fading edges for smooth vanishing entrance/exit */}
        <div className="absolute left-0 inset-y-0 w-20 sm:w-36 lg:w-48 bg-gradient-to-r from-brand-page via-brand-page/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-20 sm:w-36 lg:w-48 bg-gradient-to-l from-brand-page via-brand-page/90 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track moving continuously from Left to Right */}
        <div className="animate-marquee-ltr py-2 flex items-center">
          {/* Set A */}
          {baseItems.map((tech, idx) => (
            <div key={`ta-${tech.name}-${idx}`} className="flex items-center shrink-0">
              <span className="font-extrabold text-base sm:text-lg text-brand-forest tracking-tight hover:text-brand-blue transition-colors">
                {tech.name}
              </span>
              <span className="text-xs sm:text-sm font-medium text-brand-text-tertiary ml-1.5 opacity-75">
                ({tech.category})
              </span>
              <span className="text-brand-accent mx-5 sm:mx-7 text-sm font-bold select-none">
                ✦
              </span>
            </div>
          ))}

          {/* Set B (exact clone for seamless 50% loop) */}
          {baseItems.map((tech, idx) => (
            <div key={`tb-${tech.name}-${idx}`} className="flex items-center shrink-0">
              <span className="font-extrabold text-base sm:text-lg text-brand-forest tracking-tight hover:text-brand-blue transition-colors">
                {tech.name}
              </span>
              <span className="text-xs sm:text-sm font-medium text-brand-text-tertiary ml-1.5 opacity-75">
                ({tech.category})
              </span>
              <span className="text-brand-accent mx-5 sm:mx-7 text-sm font-bold select-none">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
