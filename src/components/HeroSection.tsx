import React from 'react';
import { ArrowRight, Play, GraduationCap, Zap, Users, Rocket, Star, ShieldCheck, Trophy, Sparkles, User, Languages } from 'lucide-react';
import { SITE_CONFIG } from '../constants/siteConfig';

interface HeroSectionProps {
  onOpenBookingModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="hero" className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 overflow-hidden">
      {/* Decorative Dot Matrix on left and right */}
      <div 
        className="absolute left-2 sm:left-6 top-16 w-32 sm:w-44 h-48 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(14, 39, 60, 0.25) 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px'
        }}
      />
      <div 
        className="absolute right-2 sm:right-6 top-20 w-32 sm:w-44 h-48 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(14, 39, 60, 0.25) 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px'
        }}
      />

      {/* Bottom-left corner decorative concentric arcs */}
      <div className="absolute -left-12 -bottom-12 w-48 h-48 pointer-events-none opacity-80 z-0">
        <svg viewBox="0 0 160 160" fill="none">
          <circle cx="20" cy="140" r="110" className="stroke-brand-accent" strokeWidth="20" opacity="0.9" />
          <circle cx="20" cy="140" r="70" className="stroke-brand-forest" strokeWidth="30" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Clean Editorial Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Headline with 'from fundamentals to' in brand-gold and yellow handdrawn underline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-brand-forest tracking-tight leading-[1.14]">
              Complete Python<br />Development,<br />
              <span className="italic font-serif font-normal text-brand-gold">from fundamentals to</span><br />
              <span className="relative inline-block mt-1 sm:mt-1.5">
                <span className="relative z-10">real-world applications.</span>
                <svg
                  className="absolute -bottom-1.5 sm:-bottom-2.5 left-0 w-full h-3 sm:h-4 text-brand-accent pointer-events-none"
                  viewBox="0 0 340 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 11C75 3.5 210 2.5 337 9.5"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18 14C90 7 240 6 320 12"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.9"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-brand-text-secondary max-w-xl font-normal leading-relaxed">
              Learn to build real software with Python, OOP, DSA, SQL, Django, FastAPI & React. Tailored 1-on-1 mentorship with bilingual instruction in English & Malayalam.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onOpenBookingModal}
                className="px-7 py-3.5 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-brand-forest font-black text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-fast inline-flex items-center gap-2 group"
              >
                <span>Book Your Free First Lesson</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenBookingModal}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-gray-50 border border-brand-forest/15 text-brand-forest font-bold text-sm sm:text-base shadow-sm inline-flex items-center gap-2 transition-colors"
              >
                <Play className="w-4 h-4 text-brand-forest fill-current" />
                <span>Watch Intro Video</span>
              </button>
            </div>

            {/* 3 Feature Highlights: 1-on-1 Mentorship, Flexible Timings, Beginner to Advanced */}
            <div className="pt-4 flex flex-wrap items-center gap-6 sm:gap-8 border-t border-brand-forest/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-forest/5 text-brand-blue flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-brand-forest">1-on-1</div>
                  <div className="text-[11px] text-brand-text-tertiary font-medium">Mentorship</div>
                </div>
              </div>

              <div className="w-[1px] h-8 bg-brand-forest/10 hidden sm:block" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/25 text-brand-forest flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-brand-gold fill-current" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-brand-forest">Flexible</div>
                  <div className="text-[11px] text-brand-text-tertiary font-medium">Timings</div>
                </div>
              </div>

              <div className="w-[1px] h-8 bg-brand-forest/10 hidden sm:block" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-forest/5 text-brand-blue flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-brand-forest">Beginner to</div>
                  <div className="text-[11px] text-brand-text-tertiary font-medium">Advanced</div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sabarinath Hero Mentor Visual matching Screenshot 1 */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-6 sm:py-10 select-none">
            
            {/* 1. Inner Warm Yellow Radial Disc */}
            <div className="absolute inset-0 m-auto w-[270px] sm:w-[330px] h-[270px] sm:h-[330px] rounded-full bg-gradient-to-tr from-brand-accent/40 via-brand-accent/25 to-brand-accent/10 border border-brand-accent/30 z-0 pointer-events-none" />
            
            {/* 2. Middle Warm Yellow Disc (Extra Circle Requested by User) */}
            <div className="absolute inset-0 m-auto w-[330px] sm:w-[410px] h-[330px] sm:h-[410px] rounded-full bg-gradient-to-br from-brand-accent/25 via-brand-accent/15 to-transparent border border-brand-accent/25 z-0 pointer-events-none" />

            {/* 3. Outer Ambient Halo */}
            <div className="absolute inset-0 m-auto w-[390px] sm:w-[470px] h-[390px] sm:h-[470px] rounded-full bg-brand-accent/5 border border-brand-accent/20 z-0 pointer-events-none" />

            {/* 4. Outer Concentric Dashed Ring */}
            <div className="absolute inset-0 m-auto w-[420px] sm:w-[500px] h-[420px] sm:h-[500px] rounded-full border border-dashed border-brand-accent/35 z-0 pointer-events-none" />

            {/* 5. Playful Top-Right Sunburst Rays */}
            <div className="absolute top-1 right-10 sm:right-14 flex items-center gap-1.5 pointer-events-none z-0">
              <span className="w-1.5 h-5 rounded-full bg-brand-accent rotate-12" />
              <span className="w-1.5 h-6 rounded-full bg-brand-accent -rotate-6" />
              <span className="w-1.5 h-4 rounded-full bg-brand-accent -rotate-45" />
            </div>

            {/* 6. Left Floating Element: Official Python Emblem Disk */}
            <div className="absolute top-10 sm:top-12 -left-4 sm:-left-7 lg:-left-9 z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center p-3.5 -rotate-6 transition-transform hover:scale-105 duration-300">
              <svg className="w-full h-full drop-shadow-md" viewBox="0 0 110 110" fill="none">
                <path
                  d="M 54.8 5 C 28.5 5 30.1 16.4 30.1 16.4 L 30.2 28.2 L 55.4 28.2 L 55.4 31.8 L 19.3 31.8 C 19.3 31.8 5 30.2 5 56.6 C 5 83 15.9 81.9 15.9 81.9 L 22.4 81.9 L 22.4 72.8 C 22.4 72.8 21.8 61.9 32.8 61.9 L 57.9 61.9 C 57.9 61.9 67.8 62.5 67.8 52.8 L 67.8 19.8 C 67.8 19.8 69.4 5 54.8 5 Z"
                  className="fill-brand-blue"
                />
                <circle cx="41" cy="18" r="4" fill="white" />
                <path
                  d="M 55.2 105 C 81.5 105 79.9 93.6 79.9 93.6 L 79.8 81.8 L 54.6 81.8 L 54.6 78.2 L 90.7 78.2 C 90.7 78.2 105 79.8 105 53.4 C 105 27 94.1 28.1 94.1 28.1 L 87.6 28.1 L 87.6 37.2 C 87.6 37.2 88.2 48.1 77.2 48.1 L 52.1 48.1 C 52.1 48.1 42.2 47.5 42.2 57.2 L 42.2 90.2 C 42.2 90.2 40.6 105 55.2 105 Z"
                  className="fill-brand-accent"
                />
                <circle cx="69" cy="92" r="4" fill="white" />
              </svg>
            </div>

            {/* 7. Right Floating Element: Dark Code Terminal Snippet */}
            <div className="absolute top-14 sm:top-18 -right-5 sm:-right-8 lg:-right-10 z-10 rounded-2xl bg-[#0f172a] text-white p-3.5 sm:p-4 shadow-2xl border border-white/10 w-48 sm:w-56 font-mono rotate-3 transition-transform hover:scale-105 duration-300">
              {/* Window control dots */}
              <div className="flex items-center gap-1.5 mb-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="text-[11px] sm:text-xs leading-relaxed select-none">
                <div>
                  <span className="text-purple-400 font-semibold">def</span>{' '}
                  <span className="text-sky-300 font-semibold">learn</span>():
                </div>
                <div className="pl-4 text-gray-200">
                  <span>build_better</span>()
                </div>
              </div>
            </div>

            {/* 6. Center Main Cutout: Sabarinath (/mentor.png) */}
            <div className="relative z-20 flex items-center justify-center">
              <img
                src={SITE_CONFIG.instructor.avatarCutout}
                alt={`${SITE_CONFIG.instructor.name} - Python Full-Stack Mentor`}
                className="w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[420px] h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_35px_rgba(14,39,60,0.22)]"
              />
            </div>

            {/* 7. Bottom-Right Overlay Card: Sabarinath Identity */}
            <div className="absolute bottom-6 sm:bottom-8 right-2 sm:right-4 z-30 bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 px-3.5 py-2.5 sm:px-4 sm:py-3 flex items-center gap-3 backdrop-blur-md transition-transform hover:scale-105 duration-300">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-accent flex items-center justify-center text-brand-forest shrink-0 shadow-sm">
                <User className="w-5 h-5 text-brand-forest" strokeWidth={2.2} />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-extrabold text-brand-forest flex items-center gap-1.5 leading-tight">
                  <span>{SITE_CONFIG.instructor.name}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-emerald-200" title="Active Mentor" />
                </div>
                <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium leading-tight mt-0.5">
                  Python Full-stack Engineer & Mentor
                </div>
              </div>
            </div>

            {/* 8. Below Identity Card: Bilingual Pill with Handdrawn Curved Arrow */}
            <div className="absolute -bottom-4 right-6 sm:right-10 z-30 flex items-center gap-2">
              <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-gray-100 flex items-center gap-1.5 text-[11px] font-bold text-brand-forest select-none">
                <Languages className="w-3.5 h-3.5 text-brand-blue" />
                <span>English & Malayalam</span>
              </div>
              
              {/* Playful Handdrawn Yellow Curved Arrow */}
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 text-brand-gold -rotate-12 pointer-events-none shrink-0">
                <svg className="w-full h-full" viewBox="0 0 40 40" fill="none">
                  <path d="M 10 5 C 25 10, 32 20, 25 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 18 28 L 25 33 L 30 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM FLOATING METRICS STRIP CARD */}
        <div className="mt-8 sm:mt-8 bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-brand-forest/10 shadow-xl p-4 sm:p-6 grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-200/70">
          
          {/* Metric 1: 100+ Students Trained */}
          <div className="flex items-center gap-4 pt-2 sm:pt-0">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
              <Rocket className="w-6 h-6 text-brand-blue" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-brand-forest tracking-tight">100+</div>
              <div className="text-xs font-semibold text-gray-500">Students Trained</div>
            </div>
          </div>

          {/* Metric 2: 4.5/5 Student Rating */}
          <div className="flex items-center gap-4 pt-2 sm:pt-0 sm:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-accent/20 text-brand-gold flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 fill-current text-brand-accent" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-brand-forest tracking-tight">4.5/5</div>
              <div className="text-xs font-semibold text-gray-500">Student Rating</div>
            </div>
          </div>

          {/* Metric 3: 100% Satisfaction Guarantee */}
          <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-brand-blue" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-brand-forest tracking-tight">100%</div>
              <div className="text-xs font-semibold text-gray-500">Satisfaction Guarantee</div>
            </div>
          </div>

          {/* Metric 4: 2+ Years Mentorship Experience */}
          <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/15 text-brand-gold flex items-center justify-center shrink-0">
              <Trophy className="w-6 h-6 text-brand-gold" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-brand-forest tracking-tight">2+ Years</div>
              <div className="text-xs font-semibold text-gray-500">Mentorship Experience</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
