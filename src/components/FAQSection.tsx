import React, { useState } from 'react';
import { COURSE_FAQS } from '../constants/courseData';
import { Plus, X, MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '../constants/siteConfig';

export const FAQSection: React.FC = () => {
  // All questions closed by default
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-transparent border-t border-brand-forest/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Exactly matching Nomni Screenshot 1 */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-forest tracking-tight mb-10 sm:mb-12">
          Got a question?
        </h2>

        {/* Clean Line Accordion List - Exactly matching Nomni Screenshot 1 (No cards, no radius boxes) */}
        <div className="divide-y divide-brand-forest/15 border-t border-b border-brand-forest/15">
          {COURSE_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="py-5 sm:py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left flex items-start gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  {/* Left Indicator (+ or ×) matching Screenshot 1 */}
                  <span className="shrink-0 text-brand-forest mt-0.5 text-lg font-light select-none">
                    {isOpen ? (
                      <X className="w-5 h-5 text-brand-forest" strokeWidth={2} />
                    ) : (
                      <Plus className="w-5 h-5 text-brand-forest" strokeWidth={2} />
                    )}
                  </span>

                  {/* Question Text */}
                  <span className="font-extrabold text-base sm:text-lg text-brand-forest group-hover:text-brand-blue transition-colors leading-snug">
                    {faq.question}
                  </span>
                </button>

                {/* Answer Content directly below question */}
                {isOpen && (
                  <div className="mt-3 pl-9 sm:pl-9 pr-2 text-sm sm:text-base text-brand-text-secondary leading-relaxed animate-fadeIn max-w-3xl">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Subtle WhatsApp contact hint */}
        <div className="mt-8 flex items-center justify-between flex-wrap gap-4 pt-2">
          <p className="text-xs sm:text-sm text-brand-text-tertiary">
            Have a different question? Connect directly with Sabarinath.
          </p>
          <a
            href={getWhatsAppLink("Hi Sabari, I have a quick question about the Python tuition classes.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-forest hover:text-brand-blue transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-brand-accent" />
            <span className="underline">Ask on WhatsApp &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
