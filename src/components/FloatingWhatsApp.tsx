import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Mail, Phone, X, Sparkles, CheckCheck } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppLink, getEmailLink, getPhoneLink } from '../constants/siteConfig';

interface FloatingWhatsAppProps {
  onOpenBookingModal?: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBookingModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollPopup, setShowScrollPopup] = useState(false);
  
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef<boolean>(false);

  useEffect(() => {
    // 1. If user previously dismissed with 'X' in this browser session, never trigger again
    if (typeof window !== 'undefined' && sessionStorage.getItem('wa_popup_dismissed') === 'true') {
      return;
    }

    // 2. Minimal, non-intrusive trigger: ONLY observe the curriculum section
    // Never trigger in the hero section or spam across all sections
    const curriculumEl = document.getElementById('curriculum');
    if (!curriculumEl) return;

    let hasTriggeredOnce = false;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting && !hasTriggeredOnce) {
          if (sessionStorage.getItem('wa_popup_dismissed') === 'true') return;

          hasTriggeredOnce = true;
          setShowScrollPopup(true);

          // Automatically pop down after 5.5 seconds so it never stays open permanently
          if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          hideTimerRef.current = setTimeout(() => {
            if (!isHoveredRef.current) {
              setShowScrollPopup(false);
            }
          }, 5500);
        }
      },
      {
        threshold: 0.25,
        rootMargin: '-5% 0px -20% 0px',
      }
    );

    observer.observe(curriculumEl);

    return () => {
      observer.disconnect();
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Mark as permanently dismissed for this browser session/window
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('wa_popup_dismissed', 'true');
    }
    setShowScrollPopup(false);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    // Resume auto-popdown after 3 seconds when cursor leaves
    hideTimerRef.current = setTimeout(() => {
      setShowScrollPopup(false);
    }, 3000);
  };

  const handleTriggerClick = () => {
    // Clicking main WhatsApp button closes the auto popup and opens full drawer
    setShowScrollPopup(false);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
      
      {/* 1. MINIMAL SECTION POP-UP / AUTO POP-DOWN */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`mb-3 relative transition-all duration-300 ease-out select-none ${
          showScrollPopup && !isOpen
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-y-3 scale-95 pointer-events-none'
        }`}
      >
        {/* DESKTOP VIEWPORT: Rich Speech Bubble Card */}
        <div className="hidden sm:block max-w-[320px] bg-white rounded-2xl shadow-2xl border border-brand-forest/15 p-3.5 relative group">
          {/* Header: Sabarinath profile info + close button */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="relative">
                <img
                  src={SITE_CONFIG.instructor.avatar}
                  alt={SITE_CONFIG.instructor.name}
                  className="w-8 h-8 rounded-full object-cover object-top ring-2 ring-emerald-500"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                </span>
              </div>
              <div className="leading-tight">
                <div className="text-xs font-bold text-brand-forest flex items-center gap-1">
                  <span>{SITE_CONFIG.instructor.name}</span>
                  <span className="text-[10px] font-semibold text-emerald-600 font-mono">• Online</span>
                </div>
                <div className="text-[10px] text-gray-500 font-medium">Python Mentor</div>
              </div>
            </div>

            <button
              onClick={handleDismiss}
              className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Dismiss message"
              title="Close"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Interactive message body styled like WhatsApp chat bubble */}
          <div className="bg-[#E7F8E8] rounded-xl rounded-tl-sm p-2.5 text-xs text-brand-forest relative leading-relaxed shadow-sm">
            <p className="font-medium text-gray-800 text-[12px]">
              📚 Not sure which Python module matches your experience level? Let's discuss your custom roadmap!
            </p>
            <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-gray-500 font-mono">
              <span>Just now</span>
              <CheckCheck className="w-3 h-3 text-sky-600" />
            </div>
          </div>

          {/* Action CTAs inside speech bubble */}
          <div className="mt-2.5 flex items-center gap-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowScrollPopup(false)}
              className="flex-1 py-1.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-[11px] flex items-center justify-center gap-1.5 shadow-sm transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Reply on WhatsApp</span>
            </a>

            {onOpenBookingModal && (
              <button
                onClick={() => {
                  setShowScrollPopup(false);
                  onOpenBookingModal();
                }}
                className="py-1.5 px-2.5 rounded-xl bg-brand-forest text-white hover:bg-brand-forest-light active:scale-95 text-[10px] font-bold transition-all shrink-0"
              >
                Free Trial
              </button>
            )}
          </div>

          {/* Pointer tail pointing down towards WhatsApp circular trigger */}
          <div className="absolute -bottom-1.5 right-6 w-3.5 h-3.5 bg-white border-r border-b border-brand-forest/15 rotate-45" />
        </div>

        {/* MOBILE VIEWPORT: Sleek Compact Single-Line Notification Pill */}
        <div className="sm:hidden flex items-center gap-2 bg-white/95 backdrop-blur-md rounded-full shadow-2xl border border-brand-forest/15 pl-1.5 pr-2 py-1.5 max-w-[270px] relative">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShowScrollPopup(false)}
            className="flex items-center gap-2 min-w-0 flex-1"
          >
            <div className="relative shrink-0">
              <img
                src={SITE_CONFIG.instructor.avatar}
                alt={SITE_CONFIG.instructor.name}
                className="w-6 h-6 rounded-full object-cover object-top ring-1.5 ring-emerald-500"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full ring-1 ring-white" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[11px] font-bold text-brand-forest truncate block">
                📚 Need help picking a module?
              </span>
            </div>
            <MessageCircle className="w-4 h-4 text-[#25D366] fill-current shrink-0" />
          </a>

          {/* Mobile Dismiss X */}
          <button
            onClick={handleDismiss}
            className="p-1 rounded-full text-gray-400 hover:text-gray-700 active:bg-gray-100 shrink-0"
            aria-label="Dismiss"
          >
            <X className="w-3 h-3" />
          </button>

          {/* Tiny pointer tail for mobile */}
          <div className="absolute -bottom-1 right-5 w-2.5 h-2.5 bg-white border-r border-b border-brand-forest/15 rotate-45" />
        </div>
      </div>

      {/* 2. FULL QUICK CONTACT DRAWER (When user manually clicks WhatsApp button) */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-brand-forest text-white rounded-3xl p-5 shadow-2xl border border-sky-950/60 animate-in fade-in slide-in-from-bottom-4 duration-200 relative">
          
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-1 rounded-full text-gray-300 hover:text-white hover:bg-sky-900/60 transition-colors"
            aria-label="Close contact popup"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2.5 mb-2">
            <img
              src={SITE_CONFIG.instructor.avatar}
              alt={SITE_CONFIG.instructor.name}
              className="w-9 h-9 rounded-full object-cover object-top ring-2 ring-brand-accent"
            />
            <div>
              <div className="text-xs font-mono font-bold text-brand-accent uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Sabarinath • Online Now
              </div>
              <div className="text-[11px] text-gray-300">1-on-1 Python Mentor</div>
            </div>
          </div>

          <h4 className="text-sm font-extrabold text-white mt-2">Have a question or ready to begin?</h4>
          <p className="text-xs text-gray-300 mt-1 mb-4 leading-relaxed">
            Message directly on WhatsApp for instant replies regarding customized timings, curriculum, or syllabus questions.
          </p>

          <div className="space-y-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-brand-forest font-bold text-xs flex items-center justify-between transition-colors shadow"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </div>
              <span className="text-[10px] bg-brand-forest/20 px-2 py-0.5 rounded-full font-bold">Fast</span>
            </a>

            {onOpenBookingModal && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full py-2.5 px-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center justify-between transition-colors border border-white/15"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-accent" />
                  <span>Book Free 1-on-1 Trial</span>
                </div>
                <span className="text-[10px] text-brand-accent font-bold">100% Free</span>
              </button>
            )}

            <a
              href={getEmailLink()}
              className="w-full py-2 px-3.5 rounded-xl bg-sky-950/80 hover:bg-sky-900 text-white font-medium text-xs flex items-center gap-2 transition-colors border border-sky-800/60"
            >
              <Mail className="w-4 h-4 text-brand-accent shrink-0" />
              <span className="truncate">{SITE_CONFIG.contact.email}</span>
            </a>

            <a
              href={getPhoneLink()}
              className="w-full py-1.5 px-3.5 rounded-xl bg-transparent hover:bg-sky-950 text-gray-300 hover:text-white text-xs flex items-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-accent shrink-0" />
              <span>{SITE_CONFIG.contact.phone}</span>
            </a>
          </div>

          <div className="mt-3 pt-3 border-t border-sky-900/60 text-[11px] text-center text-sky-200 flex items-center justify-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            <span>Zero upfront payment • First class free</span>
          </div>
        </div>
      )}

      {/* 3. MAIN FLOATING TRIGGER BUTTON (Clean: No red badge) */}
      <button
        onClick={handleTriggerClick}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-brand-forest flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-fast relative group"
        aria-label="Contact Sabarinath via WhatsApp"
        title="Chat on WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-brand-forest" />
        ) : (
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-brand-forest fill-current" />
        )}
      </button>

    </div>
  );
};
