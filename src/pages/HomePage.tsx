import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { MetricsStrip } from '../components/MetricsStrip';
import { TechTicker } from '../components/TechTicker';
import { PillarsSection } from '../components/PillarsSection';
import { CurriculumSection } from '../components/CurriculumSection';
import { HighlightsSection } from '../components/HighlightsSection';
import { InstructorSection } from '../components/InstructorSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { FreeTrialBookingCard } from '../components/FreeTrialBookingCard';
import { FAQSection } from '../components/FAQSection';

interface HomePageProps {
  onOpenBookingModal: (moduleName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBookingModal }) => {
  return (
    <main>
      <HeroSection onOpenBookingModal={() => onOpenBookingModal()} />
      <TechTicker />
      <PillarsSection onOpenBookingModal={() => onOpenBookingModal()} />
      <CurriculumSection onOpenBookingModal={(mod) => onOpenBookingModal(mod)} />
      <HighlightsSection onOpenBookingModal={() => onOpenBookingModal()} />
      <InstructorSection onOpenBookingModal={() => onOpenBookingModal()} />
      <ReviewsSection onOpenBookingModal={() => onOpenBookingModal()} />
      <FreeTrialBookingCard />
      <FAQSection />
    </main>
  );
};
