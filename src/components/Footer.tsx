import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, getWhatsAppLink, getEmailLink, getPhoneLink } from '../constants/siteConfig';
import { CURRICULUM_MODULES } from '../constants/courseData';
import { MessageCircle, Mail, Phone, Heart, Sparkles, Globe, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-forest text-white border-t border-sky-950 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-sky-900/40">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-2xl bg-white/10 p-1 flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform duration-fast shadow-sm">
                <img 
                  src="/logo.svg" 
                  alt="python.dev Logo" 
                  className="w-8 h-8 object-contain" 
                />
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-tight text-white lowercase">
                  python<span className="text-brand-accent">.</span>dev
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-accent block -mt-1">
                  Sabarinath Mentorship
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-300 max-w-sm leading-relaxed font-light">
              Complete Python Development: From Fundamentals to Real-World Applications. 
              Personal 1-on-1 mentorship, live coding sessions, and bilingual support in English & Malayalam.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/60 text-xs font-semibold text-brand-accent">
                <Sparkles className="w-3.5 h-3.5" />
                <span>First Lesson 100% Free</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/60 text-xs font-semibold text-gray-200">
                <Globe className="w-3.5 h-3.5 text-brand-accent" />
                <span>English | Malayalam</span>
              </span>
            </div>
          </div>

          {/* Curriculum Links Col */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-accent">
              Curriculum Modules
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {CURRICULUM_MODULES.map((m) => (
                <li key={m.id}>
                  <Link
                    to="/curriculum"
                    className="hover:text-brand-accent transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-xs font-mono text-brand-accent">{m.number}</span>
                    <span>{m.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-accent">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-sm">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-gray-200 hover:text-brand-accent transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-brand-accent" />
                <span>WhatsApp: {SITE_CONFIG.contact.phone}</span>
              </a>

              <a
                href={getPhoneLink()}
                className="flex items-center gap-2.5 text-gray-200 hover:text-brand-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-accent" />
                <span>Phone: {SITE_CONFIG.contact.phone}</span>
              </a>

              <a
                href={getEmailLink()}
                className="flex items-center gap-2.5 text-gray-200 hover:text-brand-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-accent" />
                <span className="truncate">{SITE_CONFIG.contact.email}</span>
              </a>
            </div>

            <div className="pt-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-brand-forest font-bold text-xs inline-flex items-center justify-center gap-2 shadow"
              >
                <span>Chat with Sabarinath</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; {new Date().getFullYear()} Complete Python Development. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/curriculum" className="hover:text-white transition-colors">Curriculum</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
