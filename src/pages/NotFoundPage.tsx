import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../constants/siteConfig';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="min-h-[75vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-2xl w-full text-center bg-white rounded-[36px] p-8 sm:p-12 border border-brand-forest/15 shadow-xl">
        
        {/* 404 Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-forest text-brand-accent text-xs font-mono font-bold uppercase tracking-wider mb-6">
          Error 404 • Page Not Found
        </div>

        <h1 className="text-6xl sm:text-8xl font-black text-brand-forest tracking-tighter">
          404<span className="text-brand-accent">.</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-forest mt-4 tracking-tight">
          Looks like this script returned a <code className="font-mono text-brand-blue bg-brand-page px-2 py-0.5 rounded-md text-xl">KeyError</code>
        </h2>

        <p className="mt-4 text-sm sm:text-base text-brand-text-secondary leading-relaxed max-w-md mx-auto">
          The page or route you are looking for doesn't exist in our directory. Let's get you back on track to mastering Python.
        </p>

        {/* Action Links - Single-line horizontal buttons on large screens */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5">
          <Link
            to="/"
            className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-full bg-brand-forest hover:bg-brand-forest/90 text-white font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all shadow whitespace-nowrap shrink-0"
          >
            <Home className="w-4 h-4 text-brand-accent shrink-0" />
            <span className="whitespace-nowrap">Back to Home</span>
          </Link>

          <Link
            to="/curriculum"
            className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-full bg-white hover:bg-brand-page border border-brand-forest/20 text-brand-forest font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all whitespace-nowrap shrink-0"
          >
            <BookOpen className="w-4 h-4 text-brand-blue shrink-0" />
            <span className="whitespace-nowrap">Explore Curriculum</span>
          </Link>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-brand-forest font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all shadow-sm whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span className="whitespace-nowrap">WhatsApp Us</span>
          </a>
        </div>

      </div>
    </main>
  );
};
