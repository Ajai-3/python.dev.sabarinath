import React from 'react';
import { COURSE_HIGHLIGHTS } from '../constants/courseData';
import { Video, FolderGit2, UserCheck, Globe2, Sparkles, Languages, Check, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../constants/siteConfig';

const highlightIcons: Record<string, React.ReactNode> = {
  Video: <Video className="w-6 h-6 text-brand-forest" />,
  FolderGit2: <FolderGit2 className="w-6 h-6 text-brand-forest" />,
  UserCheck: <UserCheck className="w-6 h-6 text-brand-forest" />,
  Globe2: <Globe2 className="w-6 h-6 text-brand-forest" />,
  Sparkles: <Sparkles className="w-6 h-6 text-brand-forest" />,
  Languages: <Languages className="w-6 h-6 text-brand-forest" />,
};

interface HighlightsSectionProps {
  onOpenBookingModal: () => void;
}

export const HighlightsSection: React.FC<HighlightsSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="highlights" className="py-16 sm:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-forest/5 border border-brand-forest/15 text-xs font-bold uppercase tracking-wider text-brand-forest mb-4">
            Why Students Choose This Tuition
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-forest tracking-tight">
            Engineered for outcomes,{' '}
            <span className="italic font-normal text-brand-blue block mt-1">
              not just video certificates.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-text-secondary">
            Everything you need to master Python full-stack development with direct 1-on-1 access to your instructor.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSE_HIGHLIGHTS.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-white rounded-[28px] p-7 border border-brand-forest/15 shadow-sm hover:shadow-lg hover:border-brand-accent transition-all duration-normal flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-brand-forest/5 group-hover:bg-brand-accent flex items-center justify-center transition-colors duration-fast">
                    {highlightIcons[highlight.iconName]}
                  </div>
                  {highlight.badge && (
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-forest/5 text-brand-forest">
                      {highlight.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-extrabold text-brand-forest tracking-tight mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-brand-text-secondary leading-relaxed">
                  {highlight.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-forest/10 flex items-center text-xs font-bold text-brand-blue">
                <Check className="w-4 h-4 text-brand-accent mr-1.5" />
                <span>Verified in 1-on-1 Sessions</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner / Free Trial Callout */}
        <div className="mt-12 p-8 sm:p-10 rounded-[32px] bg-brand-forest text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold font-mono">
              <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
              <span>RISK FREE TRIAL</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Try Your First Class With Zero Obligation
            </h3>
            <p className="text-sm text-gray-300 max-w-xl">
              Connect directly with Sabarinath. Discuss your learning goals, explore the Python roadmap, and experience the Malayalam/English bilingual teaching style firsthand.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenBookingModal}
              className="px-7 py-3.5 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-brand-forest font-bold text-sm shadow-lg transition-all duration-fast inline-flex items-center gap-2"
            >
              <span>Schedule Free Trial Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
