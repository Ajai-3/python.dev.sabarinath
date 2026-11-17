import React from 'react';
import { SITE_CONFIG, getWhatsAppLink, getEmailLink, getPhoneLink } from '../constants/siteConfig';
import { MessageCircle, Mail, Phone, Award, Globe, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface InstructorSectionProps {
  onOpenBookingModal: () => void;
}

export const InstructorSection: React.FC<InstructorSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white/60 border-t border-brand-forest/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Instructor Story & Badges */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-4 sm:gap-5">
              <img
                src={SITE_CONFIG.instructor.avatar}
                alt={SITE_CONFIG.instructor.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl object-cover object-top ring-4 ring-brand-accent shadow-xl shrink-0"
              />
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-forest/5 border border-brand-forest/15 text-xs font-bold uppercase tracking-wider text-brand-forest mb-1.5">
                  Your Personal Instructor
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-forest tracking-tight">
                  Meet {SITE_CONFIG.instructor.name}
                </h2>
                <div className="text-sm font-semibold text-brand-blue">
                  {SITE_CONFIG.instructor.role}
                </div>
              </div>
            </div>

            <p className="text-xl sm:text-2xl font-serif italic text-brand-forest leading-snug">
              Patient mentorship that meets you where you are.
            </p>

            <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed font-normal">
              {SITE_CONFIG.instructor.bio}
            </p>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-brand-page border border-brand-forest/15 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-forest text-brand-accent flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-text-tertiary">
                    Teaching Experience
                  </div>
                  <div className="text-base font-extrabold text-brand-forest">
                    {SITE_CONFIG.instructor.experience}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-page border border-brand-forest/15 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-forest text-brand-accent flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-text-tertiary">
                    Instruction Medium
                  </div>
                  <div className="text-base font-extrabold text-brand-forest">
                    English & Malayalam
                  </div>
                </div>
              </div>
            </div>

            {/* Teaching philosophy points */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-start gap-2.5 text-sm text-brand-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span>Paced strictly around your comprehension, never rushed or overwhelmed.</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-brand-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span>Line-by-line code explanation in Malayalam and English for clarity.</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-brand-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span>Direct WhatsApp accessibility for doubt clearance throughout the week.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Hub Card */}
          <div className="lg:col-span-5">
            <div className="bg-brand-forest rounded-[30px] sm:rounded-[36px] p-4 sm:p-8 md:p-9 text-white shadow-xl border border-sky-950/60 relative overflow-hidden">
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-brand-accent/15 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-brand-accent/20 text-brand-accent flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-brand-accent uppercase tracking-wider block">
                    Direct Contact
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white">Get in Touch Directly</h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-200 mb-5 sm:mb-6 leading-relaxed">
                Reach out to discuss your background, schedule your free trial session, or ask any question about the curriculum.
              </p>

              <div className="space-y-2.5 sm:space-y-3">
                {/* WhatsApp Button */}
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 sm:py-3.5 px-3.5 sm:px-5 rounded-2xl bg-brand-accent hover:bg-brand-accent-hover text-brand-forest font-bold text-xs sm:text-sm transition-all duration-fast flex items-center justify-between gap-2 group shadow-md"
                >
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 shrink-0">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0" />
                    <span className="whitespace-nowrap font-bold">WhatsApp Me Now</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono font-bold bg-brand-forest/15 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full group-hover:bg-brand-forest/25 shrink-0 whitespace-nowrap">
                    Fastest Reply
                  </span>
                </a>

                {/* Phone Call */}
                <a
                  href={getPhoneLink()}
                  className="w-full py-3 sm:py-3.5 px-3.5 sm:px-5 rounded-2xl bg-sky-950/80 hover:bg-sky-900 text-white font-semibold text-xs sm:text-sm transition-all duration-fast flex items-center justify-between gap-2 border border-sky-800/60"
                >
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brand-accent shrink-0" />
                    <span className="text-xs sm:text-sm truncate font-medium">{SITE_CONFIG.contact.phone}</span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-300 shrink-0 whitespace-nowrap">Call Direct</span>
                </a>

                {/* Email */}
                <a
                  href={getEmailLink()}
                  className="w-full py-3 sm:py-3.5 px-3.5 sm:px-5 rounded-2xl bg-sky-950/80 hover:bg-sky-900 text-white font-semibold text-xs sm:text-sm transition-all duration-fast flex items-center justify-between gap-2 border border-sky-800/60"
                >
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-brand-accent shrink-0" />
                    <span className="text-xs sm:text-sm truncate font-medium">{SITE_CONFIG.contact.email}</span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-300 shrink-0 whitespace-nowrap">Send Email</span>
                </a>
              </div>

              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/10 text-center">
                <button
                  onClick={onOpenBookingModal}
                  className="text-xs text-brand-accent hover:underline font-semibold"
                >
                  Or click here to request a free trial callback &rarr;
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
