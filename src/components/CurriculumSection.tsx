import React, { useState, useEffect, useRef } from 'react';
import { CURRICULUM_MODULES } from '../constants/courseData';
import { ModuleCard } from './ModuleCard';

const tabTitles: Record<string, string> = {
  'python-basics': '01 Python Basics',
  'oop': '02 OOP',
  'dsa': '03 DSA',
  'sql': '04 SQL & DB',
  'django': '05 Django',
  'fastapi': '06 FastAPI',
  'react': '07 React',
};

interface CurriculumSectionProps {
  onOpenBookingModal: (moduleName?: string) => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({ onOpenBookingModal }) => {
  const [activeModuleId, setActiveModuleId] = useState<string>(CURRICULUM_MODULES[0].id);
  const isClickScrolling = useRef(false);
  const tabButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Auto-scroll the active pill horizontally on mobile as cards stack (without scrolling page!)
  useEffect(() => {
    const activeBtn = tabButtonRefs.current[activeModuleId];
    if (activeBtn && activeBtn.parentElement) {
      const container = activeBtn.parentElement;
      const targetScrollLeft = activeBtn.offsetLeft - (container.clientWidth / 2) + (activeBtn.clientWidth / 2);
      container.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
    }
  }, [activeModuleId]);

  // Scroll-Spy: Detect which sticky card has slid to the top of the stack
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;

      const stickyThreshold = 160; // Offset below the sticky header & tab bar
      let currentActive = CURRICULUM_MODULES[0].id;

      for (let i = 0; i < CURRICULUM_MODULES.length; i++) {
        const mod = CURRICULUM_MODULES[i];
        const el = document.getElementById(`module-${mod.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= stickyThreshold + 20) {
            currentActive = mod.id;
          }
        }
      }

      setActiveModuleId(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click-to-Scroll: Smoothly dock the requested card on top
  const scrollToModule = (moduleId: string) => {
    setActiveModuleId(moduleId);
    isClickScrolling.current = true;

    const el = document.getElementById(`module-${moduleId}`);
    if (el) {
      const yOffset = -180;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 750);
  };

  return (
    <section id="curriculum" className="py-16 sm:py-24 bg-transparent border-t border-brand-forest/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-forest/5 border border-brand-forest/15 text-xs font-bold uppercase tracking-wider text-brand-forest mb-4">
            <span>7 Comprehensive Modules</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-forest tracking-tight">
            Curriculum designed for{' '}
            <span className="italic font-normal text-brand-blue">
              real software engineering.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-brand-text-secondary leading-relaxed">
            From absolute zero in Python to deploying full-stack web applications with FastAPI, Django, PostgreSQL, and React.
          </p>
        </div>

        {/* Sticky Horizontal Tab Pill Bar - Deep Python Navy with High Contrast Tabs */}
        <div className="sticky top-[86px] sm:top-[98px] lg:top-[102px] z-30 mb-10 sm:mb-14 py-2 pointer-events-auto">
          <div className="p-1.5 rounded-full bg-brand-forest border border-white/20 shadow-2xl max-w-3xl mx-auto backdrop-blur-md">
            <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar whitespace-nowrap px-1 py-0.5">
              {CURRICULUM_MODULES.map((mod) => {
                const isActive = mod.id === activeModuleId;
                const raw = tabTitles[mod.id] || mod.title;
                const parts = raw.split(' ');
                const num = parts[0];
                const label = parts.slice(1).join(' ');

                return (
                  <button
                    key={mod.id}
                    ref={(el) => (tabButtonRefs.current[mod.id] = el)}
                    type="button"
                    onClick={() => scrollToModule(mod.id)}
                    className={`px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm transition-all duration-fast shrink-0 select-none flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-brand-accent text-brand-forest shadow-lg font-black'
                        : 'text-white hover:bg-white/10 font-bold'
                    }`}
                  >
                    <span className={isActive ? 'text-brand-forest/70 font-mono text-[11px]' : 'text-brand-accent font-mono text-[11px]'}>
                      {num}
                    </span>
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sticky Stacking Cards Container (Cards stay and overlap as you scroll) */}
        <div className="relative pb-16">
          {CURRICULUM_MODULES.map((module, index) => {
            const isLast = index === CURRICULUM_MODULES.length - 1;

            return (
              <ModuleCard
                key={module.id}
                module={module}
                index={index}
                isLast={isLast}
                idPrefix="module"
                onOpenBookingModal={onOpenBookingModal}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};
