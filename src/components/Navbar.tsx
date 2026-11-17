import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, ArrowRight, Phone } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppLink } from '../constants/siteConfig';

interface NavbarProps {
  onOpenBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const navLinks = [
    { label: 'Curriculum', href: isHome ? '#curriculum' : '/curriculum' },
    { label: 'Pillars', href: isHome ? '#pillars' : '/#pillars' },
    { label: 'Highlights', href: isHome ? '#highlights' : '/#highlights' },
    { label: 'About Mentor', href: isHome ? '#about' : '/#about' },
    { label: 'Reviews', href: isHome ? '#reviews' : '/#reviews' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-page/95 backdrop-blur-md border-b border-brand-forest/10 transition-all duration-fast">
      {/* Yellow Top Announcement Bar - First Lesson Free Campaign */}
      <div className="bg-brand-accent text-brand-forest py-1.5 sm:py-2 px-2.5 sm:px-4 text-xs font-bold border-b border-black/10 select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center gap-2 sm:gap-4 text-center">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            {/* Mobile: guaranteed single line */}
            <span className="sm:hidden font-extrabold uppercase tracking-tight text-[11px] whitespace-nowrap">
              First Lesson 100% Free
            </span>
            {/* Tablet & Desktop: full campaign text */}
            <span className="hidden sm:inline font-extrabold uppercase tracking-wide">
              First Lesson 100% Free Campaign
            </span>
            <span className="hidden sm:inline opacity-50">•</span>
            <span className="hidden sm:inline font-semibold">
              Personalized 1-on-1 mentorship with zero upfront payment
            </span>
          </div>
          <button
            onClick={onOpenBookingModal}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-brand-forest text-white hover:bg-brand-forest-light text-[10px] sm:text-[11px] font-bold shrink-0 transition-transform active:scale-95 shadow-sm whitespace-nowrap"
          >
            <span className="sm:inline hidden">Claim Free Lesson</span>
            <span className="sm:hidden">Claim Free</span>
            <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-16">
          
          {/* Logo - Nomni aesthetic */}
          <Link 
            to="/" 
            className="flex items-center gap-2 sm:gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-full p-1"
          >
            {/* Python Graduation Cap Logo */}
            <div className="relative flex items-center justify-center group-hover:scale-105 transition-transform duration-fast">
              <img 
                src="/logo.svg" 
                alt="python.dev Logo" 
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-sm" 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-brand-forest lowercase leading-none">
                python<span className="text-brand-accent">.</span>dev
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-brand-text-tertiary mt-0.5">
                Sabarinath Mentorship
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-brand-forest/80 hover:text-brand-forest hover:font-semibold transition-colors duration-fast"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-brand-forest/80 hover:text-brand-forest hover:font-semibold transition-colors duration-fast"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Action CTAs (Nomni Pill Style) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Direct WhatsApp Pill */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Chat"
              className="px-4 py-2 rounded-full border border-brand-forest/25 text-brand-forest text-sm font-semibold hover:bg-brand-forest hover:text-white transition-all duration-fast inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-brand-blue" />
              <span>WhatsApp</span>
            </a>

            {/* Book Demo Button */}
            <button
              onClick={onOpenBookingModal}
              className="px-5 py-2.5 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-brand-forest text-sm font-bold shadow-sm hover:shadow transition-all duration-fast inline-flex items-center gap-2 group"
            >
              <span>Book Free Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-fast" />
            </button>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
            <button
              onClick={onOpenBookingModal}
              className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-brand-accent text-brand-forest text-[11px] sm:text-xs font-bold"
            >
              Free Class
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-xl text-brand-forest hover:bg-brand-forest/10 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-page border-b border-brand-forest/10 px-4 pt-3 pb-6 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-brand-forest hover:bg-brand-forest/5 rounded-lg"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-brand-forest hover:bg-brand-forest/5 rounded-lg"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          <div className="pt-4 border-t border-brand-forest/10 flex flex-col gap-2.5">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full border border-brand-forest/20 text-brand-forest font-semibold text-center inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-brand-blue" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3 rounded-full bg-brand-accent text-brand-forest font-bold text-center inline-flex items-center justify-center gap-2"
            >
              <span>Book Free First Lesson</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
              className="text-center text-xs text-brand-text-tertiary pt-2"
            >
              Call: {SITE_CONFIG.contact.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
