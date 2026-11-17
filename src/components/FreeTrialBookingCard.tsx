import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { getWhatsAppLink } from '../constants/siteConfig';

export const FreeTrialBookingCard: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputValue.trim();

    if (!trimmed) {
      setInputError('Please enter your WhatsApp number or email.');
      return;
    }

    if (!trimmed.includes('@')) {
      if (/[a-zA-Z]/.test(trimmed)) {
        setInputError('Please enter a valid phone number (digits only) or email address.');
        return;
      }
      const digits = trimmed.replace(/\D/g, '');
      if (digits.length < 10) {
        setInputError('Phone number must have at least 10 digits.');
        return;
      }
    }

    setInputError(null);
    setStatus('success');
    const msg = `Hi Sabari, I would like to book my Free First Lesson! My contact info is: ${trimmed}`;
    setTimeout(() => {
      window.open(getWhatsAppLink(msg), '_blank');
      setStatus('idle');
      setInputValue('');
    }, 700);
  };

  return (
    <section id="trial" className="py-16 sm:py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Signature Nomni Card with Inward Notches & Deep Curved Bottom */}
        <div className="relative bg-brand-forest text-white rounded-t-[28px] sm:rounded-t-[36px] rounded-b-[70px] sm:rounded-b-[110px] md:rounded-b-[130px] p-7 sm:p-12 md:p-14 shadow-2xl overflow-hidden border border-sky-950/60">
          
          {/* Left Inward Triangular Notch (matches screenshot) */}
          <div 
            className="absolute -left-[1px] top-1/2 -translate-y-1/2 w-3 sm:w-4 h-6 sm:h-8 bg-brand-page z-20 pointer-events-none"
            style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
          />

          {/* Right Inward Triangular Notch (matches screenshot) */}
          <div 
            className="absolute -right-[1px] top-1/2 -translate-y-1/2 w-3 sm:w-4 h-6 sm:h-8 bg-brand-page z-20 pointer-events-none"
            style={{ clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}
          />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 relative z-10">
            
            {/* Left Graphic: Stylized Python Snake Illustration (Not logo, actual snake) */}
            <div className="shrink-0 flex items-center justify-center p-2">
              <svg
                className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Stylized Python Snake"
              >
                <defs>
                  <linearGradient id="pythonGoldGradient" x1="10%" y1="0%" x2="90%" y2="100%">
                    <stop offset="0%" stopColor="#FFE885" />
                    <stop offset="45%" stopColor="#FFD43B" />
                    <stop offset="100%" stopColor="#E5A700" />
                  </linearGradient>
                </defs>

                {/* Base Coil (Outer Grounding Loop) */}
                <path
                  d="M 40 152 C 22 142 22 118 52 108 C 88 96 142 106 168 128 C 188 145 174 168 140 174 C 95 180 48 168 38 142 C 28 116 58 88 105 84 C 145 82 168 102 165 125 C 160 144 140 152 118 148 C 96 144 88 132 92 120 C 95 110 106 106 114 110"
                  stroke="url(#pythonGoldGradient)"
                  strokeWidth="18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Graceful Muscular Neck rising up and curving forward */}
                <path
                  d="M 105 84 C 102 62 114 42 138 34 C 154 28 170 32 180 42"
                  stroke="url(#pythonGoldGradient)"
                  strokeWidth="16"
                  strokeLinecap="round"
                />

                {/* Tapered Tail Tip tucking inside coil */}
                <path
                  d="M 114 110 C 120 114 120 120 116 124"
                  stroke="url(#pythonGoldGradient)"
                  strokeWidth="10"
                  strokeLinecap="round"
                />

                {/* Sleek Python Head (Streamlined constrictor profile) */}
                <path
                  d="M 166 33 C 178 31 192 35 200 41 C 203 43 203 46 199 49 C 190 55 176 56 166 49 C 162 46 162 38 166 33 Z"
                  fill="url(#pythonGoldGradient)"
                />

                {/* Alert Eye (Python amber slit with white highlight) */}
                <ellipse cx="183" cy="40.5" rx="2.5" ry="3.5" fill="#081622" />
                <ellipse cx="183.2" cy="40.5" rx="1.2" ry="2.8" fill="#FFD43B" />
                <circle cx="182.5" cy="39.2" r="0.8" fill="#FFFFFF" />

                {/* Forked Tongue flicking forward */}
                <path
                  d="M 201 44 L 211 44 M 211 44 L 216 40 M 211 44 L 216 48"
                  stroke="#FFD43B"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Python Dorsal Saddle Markings (Navy accent spots along spine) */}
                <g fill="#081622" opacity="0.32">
                  <ellipse cx="60" cy="112" rx="4" ry="7" transform="rotate(-30 60 112)" />
                  <ellipse cx="110" cy="104" rx="4" ry="7" transform="rotate(10 110 104)" />
                  <ellipse cx="152" cy="122" rx="4" ry="8" transform="rotate(40 152 122)" />
                  <ellipse cx="160" cy="148" rx="8" ry="4" transform="rotate(-15 160 148)" />
                  <ellipse cx="112" cy="172" rx="8" ry="4" />
                  <ellipse cx="58" cy="158" rx="7" ry="4" transform="rotate(-20 58 158)" />
                  <ellipse cx="130" cy="50" rx="3.5" ry="6" transform="rotate(45 130 50)" />
                </g>
              </svg>
            </div>

            {/* Right Side: Label, Headline, and Input Bar */}
            <div className="w-full text-center md:text-left space-y-3">
              <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-brand-accent">
                FIRST LESSON FOR FREE
              </span>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-[1.18]">
                Experience the live 1-on-1 teaching style, completely free.
              </h3>

              {/* Form Input Bar (matching screenshot: white box with yellow right arrow button) */}
              <form noValidate onSubmit={handleSubmit} className="pt-2 max-w-lg mx-auto md:mx-0">
                <div className="relative flex items-center bg-white rounded-lg p-1 sm:p-1.5 shadow-lg border border-white/20 focus-within:ring-2 focus-within:ring-brand-accent">
                  <input
                    type="text"
                    placeholder="name@email.com or WhatsApp number"
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      if (inputError) setInputError(null);
                    }}
                    className="w-full bg-transparent px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-brand-forest placeholder:text-gray-400 focus:outline-none font-medium"
                  />
                  <button
                    type="submit"
                    aria-label="Claim Free Class"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-brand-accent hover:bg-brand-accent-hover text-brand-forest flex items-center justify-center shrink-0 transition-transform active:scale-95 shadow font-bold"
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-brand-forest" />
                  </button>
                </div>

                {inputError && (
                  <div className="mt-2 text-xs text-red-300 font-semibold inline-flex items-center gap-1.5 animate-fadeIn">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{inputError}</span>
                  </div>
                )}

                {status === 'success' && (
                  <p className="mt-2 text-xs text-brand-accent font-semibold inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Connecting directly on WhatsApp...
                  </p>
                )}
              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
