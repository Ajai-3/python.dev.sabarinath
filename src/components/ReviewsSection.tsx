import React from 'react';
import { ROW_1_REVIEWS, ROW_2_REVIEWS, StudentReview } from '../constants/reviewsData';
import { Star, MapPin } from 'lucide-react';

interface ReviewsSectionProps {
  onOpenBookingModal?: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = () => {
  // To guarantee an infinite, mathematically seamless loop without jumping:
  // Set A and Set B are identical clones of the data.
  const row1Base = [...ROW_1_REVIEWS, ...ROW_1_REVIEWS];
  const row2Base = [...ROW_2_REVIEWS, ...ROW_2_REVIEWS];

  const renderReviewBox = (rev: StudentReview, keyIdx: string) => (
    <div
      key={keyIdx}
      className="w-[270px] sm:w-[310px] h-[175px] sm:h-[185px] p-4 sm:p-5 bg-white border-r border-brand-forest/15 shrink-0 flex flex-col justify-between select-none hover:bg-brand-forest/[0.02] transition-colors cursor-default"
    >
      <div>
        {/* Top: Neutral Round Avatar + Name/City + Varied Rating */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2.5 min-w-0">
            {/* Non-colorful neutral rounded profile avatar */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brand-forest/10 border border-brand-forest/15 text-brand-forest font-bold text-xs sm:text-sm flex items-center justify-center shrink-0">
              {rev.avatarLetter}
            </div>

            <div className="min-w-0">
              <h4 className="font-bold text-brand-forest text-xs sm:text-sm tracking-tight truncate">
                {rev.name}
              </h4>
              <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-brand-text-tertiary">
                <MapPin className="w-2.5 h-2.5 text-brand-forest/50 shrink-0" />
                <span className="truncate">{rev.location} • {rev.role}</span>
              </div>
            </div>
          </div>

          {/* Varied Rating */}
          <div className="flex items-center gap-1 bg-brand-page px-2 py-0.5 rounded-full border border-brand-forest/10 shrink-0">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="text-xs font-bold text-brand-forest font-mono">
              {rev.rating.toFixed(1)}
            </span>
          </div>
        </div>

        {/* Shortened Review without any quotes "" */}
        <p className="text-xs text-brand-text-secondary leading-relaxed font-normal line-clamp-3">
          {rev.quote}
        </p>
      </div>

      {/* Bottom meta: Just clean highlight tag (NO English/Malayalam badges) */}
      <div className="pt-2 border-t border-brand-forest/5 flex items-center justify-between text-[11px] text-brand-text-tertiary">
        <span className="font-semibold text-brand-forest/80 truncate">
          {rev.highlight}
        </span>
      </div>
    </div>
  );

  return (
    <section id="reviews" className="scroll-mt-24 sm:scroll-mt-28 py-12 sm:py-16 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-forest tracking-tight">
          Trusted by Learners Across{' '}
          <span className="relative inline-block">
            <span className="relative z-10 text-brand-forest">Kerala</span>
            <svg 
              className="absolute left-0 -bottom-1 w-full h-2 text-brand-accent -z-0 pointer-events-none" 
              viewBox="0 0 100 12" 
              preserveAspectRatio="none"
            >
              <path d="M0,7 Q50,0 100,7" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-brand-text-secondary max-w-lg mx-auto">
          Short reviews from engineering students, career switchers, and professionals learning 1-on-1.
        </p>
      </div>

      {/* Marquee Container with Left & Right Vanishing Point Transparency */}
      <div className="relative w-full overflow-hidden">
        
        {/* Left Vanishing Edge Gradient */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-r from-brand-page via-brand-page/90 to-transparent z-20 pointer-events-none" />

        {/* Right Vanishing Edge Gradient */}
        <div className="absolute right-0 inset-y-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-l from-brand-page via-brand-page/90 to-transparent z-20 pointer-events-none" />

        {/* Continuous 2-Row Grid: Row 1 & Row 2 stacked directly with no gap */}
        <div className="border-y border-brand-forest/15 divide-y divide-brand-forest/15 bg-white shadow-2xs overflow-hidden">
          {/* Row 1: Square Boxes moving from Left to Right */}
          <div className="overflow-hidden">
            <div className="animate-marquee-ltr flex items-center gap-0">
              {/* Set A */}
              {row1Base.map((rev, idx) => renderReviewBox(rev, `r1-a-${idx}`))}
              {/* Set B (exact clone for 50% loop) */}
              {row1Base.map((rev, idx) => renderReviewBox(rev, `r1-b-${idx}`))}
            </div>
          </div>

          {/* Row 2: Square Boxes moving from Right to Left (immediately attached below) */}
          <div className="overflow-hidden">
            <div className="animate-marquee-rtl flex items-center gap-0">
              {/* Set A */}
              {row2Base.map((rev, idx) => renderReviewBox(rev, `r2-a-${idx}`))}
              {/* Set B (exact clone for 50% loop) */}
              {row2Base.map((rev, idx) => renderReviewBox(rev, `r2-b-${idx}`))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
