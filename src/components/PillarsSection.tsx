import React from 'react';
import { COURSE_PILLARS } from '../constants/courseData';
import { BookOpen, Code2, Terminal, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-6 h-6 text-brand-forest" />,
  Code2: <Code2 className="w-6 h-6 text-brand-forest" />,
  Terminal: <Terminal className="w-6 h-6 text-brand-forest" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-brand-forest" />,
};

interface PillarsSectionProps {
  onOpenBookingModal: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="pillars" className="py-16 sm:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-forest/5 border border-brand-forest/15 text-xs font-bold uppercase tracking-wider text-brand-forest mb-4">
            Educational Blueprint
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-forest tracking-tight">
            Four pillars to engineer your career:{' '}
            <span className="italic font-normal text-brand-blue block mt-1">
              Learn. Build. Practice. Grow.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-text-secondary">
            A structured path designed to transform absolute beginners into autonomous developers who write production-grade code.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="group bg-white rounded-[28px] p-6 sm:p-7 border border-brand-forest/15 shadow-sm hover:shadow-xl hover:border-brand-accent transition-all duration-normal flex flex-col justify-between"
            >
              <div>
                {/* Step Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-forest/5 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-forest transition-colors duration-fast">
                    {iconMap[pillar.iconName]}
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-brand-forest/5 text-brand-forest">
                    {pillar.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-extrabold text-brand-forest tracking-tight">
                  {pillar.title}
                </h3>
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue mt-1 mb-3">
                  {pillar.subtitle}
                </h4>

                {/* Description */}
                <p className="text-sm text-brand-text-tertiary leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 pt-2 border-t border-brand-forest/10">
                  {pillar.bulletPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-brand-text-secondary leading-snug">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer action */}
              <div className="mt-8 pt-4">
                <button
                  onClick={onOpenBookingModal}
                  className="w-full py-2.5 px-4 rounded-full bg-brand-forest/5 hover:bg-brand-accent hover:text-brand-forest text-brand-forest text-xs font-bold transition-all duration-fast flex items-center justify-center gap-1.5"
                >
                  <span>Explore this pillar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
