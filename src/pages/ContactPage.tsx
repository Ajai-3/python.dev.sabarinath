import React, { useState } from 'react';
import { SITE_CONFIG, getWhatsAppLink, getEmailLink, getPhoneLink } from '../constants/siteConfig';
import { MessageCircle, Mail, Phone, MapPin, Sparkles, Send, CheckCircle2, Clock, Languages, AlertCircle } from 'lucide-react';
import { CustomSelect, SelectOption } from '../components/CustomSelect';

const contactLangOptions: SelectOption[] = [
  { value: 'English & Malayalam', label: 'English & Malayalam', description: 'Bilingual - Recommended for 100% clarity' },
  { value: 'Malayalam Only', label: 'Malayalam Only', description: 'Classes conducted fully in Malayalam' },
  { value: 'English Only', label: 'English Only', description: 'Classes conducted fully in English' },
];

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    phoneOrEmail: '',
    language: 'English & Malayalam',
    message: '',
  });
  const [nameError, setNameError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const validateName = (val: string): boolean => {
    if (!val.trim()) {
      setNameError('Please enter your full name.');
      return false;
    }
    if (val.trim().length < 2) {
      setNameError('Name must be at least 2 characters.');
      return false;
    }
    setNameError(null);
    return true;
  };

  const validateContact = (val: string): boolean => {
    const trimmed = val.trim();
    if (!trimmed) {
      setPhoneError('Contact number or email is required.');
      return false;
    }
    if (!trimmed.includes('@')) {
      if (/[a-zA-Z]/.test(trimmed)) {
        setPhoneError('Please enter a valid phone number (digits only) or email address.');
        return false;
      }
      const digits = trimmed.replace(/\D/g, '');
      if (digits.length < 10) {
        setPhoneError('Phone number must have at least 10 digits (e.g. +91 98765 43210).');
        return false;
      }
    }
    setPhoneError(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isNameValid = validateName(form.name);
    const isContactValid = validateContact(form.phoneOrEmail);

    if (!isNameValid || !isContactValid) {
      return;
    }

    setSubmitted(true);

    const fullMsg = `Hi Sabari,\n\nName: ${form.name.trim()}\nContact: ${form.phoneOrEmail.trim()}\nPreferred Language: ${form.language}\nMessage: ${form.message.trim() || 'I would like to enquire about the Python tuition classes and book my free first lesson.'}`;

    setTimeout(() => {
      window.open(getWhatsAppLink(fullMsg), '_blank');
      setSubmitted(false);
    }, 800);
  };

  return (
    <main className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-forest/5 border border-brand-forest/15 text-xs font-bold uppercase tracking-wider text-brand-forest mb-4">
            Direct Communication Hub
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-brand-forest tracking-tight">
            Let's discuss your{' '}
            <span className="italic font-normal text-brand-blue">
              Python learning goals.
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brand-text-secondary leading-relaxed">
            Have questions about timings, syllabus, or Malayalam language sessions? 
            Connect directly with Sabarinath via WhatsApp, Phone, or Email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Methods */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* WhatsApp Highlight Box */}
            <div className="p-6 rounded-2xl bg-brand-forest text-white border border-sky-950/60 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-accent uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant Messaging</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white">WhatsApp Chat</h2>
              <p className="text-xs sm:text-sm text-gray-200 mt-2 mb-5">
                The fastest way to reach Sabarinath. Ask anything about the curriculum, fees, and trial schedule.
              </p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-lg bg-brand-accent hover:bg-brand-accent-hover text-brand-forest font-bold text-sm inline-flex items-center justify-center gap-2 shadow"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>

            {/* Phone & Email Cards */}
            <div className="space-y-3.5">
              <div className="p-5 rounded-xl bg-white border border-brand-forest/15 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg bg-brand-forest/5 text-brand-forest flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-text-tertiary">
                      Direct Phone
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-brand-forest">
                      {SITE_CONFIG.contact.phone}
                    </div>
                  </div>
                </div>
                <a
                  href={getPhoneLink()}
                  className="px-3.5 py-1.5 rounded-lg border border-brand-forest/20 text-xs font-bold text-brand-forest hover:bg-brand-forest hover:text-white transition-colors"
                >
                  Call Now
                </a>
              </div>

              <div className="p-5 rounded-xl bg-white border border-brand-forest/15 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg bg-brand-forest/5 text-brand-forest flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="max-w-[170px] sm:max-w-none truncate">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-text-tertiary">
                      Email Address
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-brand-forest truncate">
                      {SITE_CONFIG.contact.email}
                    </div>
                  </div>
                </div>
                <a
                  href={getEmailLink()}
                  className="px-3.5 py-1.5 rounded-lg border border-brand-forest/20 text-xs font-bold text-brand-forest hover:bg-brand-forest hover:text-white transition-colors shrink-0"
                >
                  Email
                </a>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="p-5 rounded-xl bg-brand-page border border-brand-forest/15 space-y-2.5 text-xs text-brand-text-secondary">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Session Timings: Flexible (Morning, Evening & Weekend batches)</span>
              </div>
              <div className="flex items-center gap-2">
                <Languages className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Languages: English & Malayalam bilingual instruction</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Location: Live 1-on-1 Online video calls</span>
              </div>
            </div>

          </div>

          {/* Right Column: Send Inquiry / Free Lesson Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-forest/15 shadow-sm">
              
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-forest text-xs font-bold w-fit mb-3">
                <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                <span>First Lesson 100% Free</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-forest">
                Schedule Your Free Intro Session
              </h2>
              <p className="mt-1.5 text-sm text-brand-text-secondary">
                Submit this form to discuss your goals and lock in a convenient free trial session.
              </p>

              <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-forest mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ananya Menon"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      if (nameError) setNameError(null);
                    }}
                    onBlur={() => form.name && validateName(form.name)}
                    className={`w-full px-3.5 py-2.5 sm:py-3 rounded-lg border transition-all text-sm font-medium focus:outline-none ${
                      nameError
                        ? 'border-red-500 bg-red-50/20 text-red-900 focus:ring-2 focus:ring-red-300'
                        : 'border-brand-forest/20 text-brand-forest focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20'
                    }`}
                  />
                  {nameError && (
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600 font-semibold animate-fadeIn">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{nameError}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-forest mb-1.5">
                    WhatsApp Number or Email
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. +91 98765 43210 or your@email.com"
                    value={form.phoneOrEmail}
                    onChange={(e) => {
                      setForm({ ...form, phoneOrEmail: e.target.value });
                      if (phoneError) setPhoneError(null);
                    }}
                    onBlur={() => form.phoneOrEmail && validateContact(form.phoneOrEmail)}
                    className={`w-full px-3.5 py-2.5 sm:py-3 rounded-lg border transition-all text-sm font-medium focus:outline-none ${
                      phoneError
                        ? 'border-red-500 bg-red-50/20 text-red-900 focus:ring-2 focus:ring-red-300'
                        : 'border-brand-forest/20 text-brand-forest focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20'
                    }`}
                  />
                  {phoneError && (
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600 font-semibold animate-fadeIn">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{phoneError}</span>
                    </div>
                  )}
                </div>

                <div>
                  <CustomSelect
                    label="Preferred Instruction Medium"
                    icon={<Languages className="w-3.5 h-3.5" />}
                    options={contactLangOptions}
                    value={form.language}
                    onChange={(val) => setForm({ ...form, language: val })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-forest mb-1.5">
                    Your Goals / Any Questions (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your background, college year, or specific modules you want to focus on..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-lg border border-brand-forest/20 text-brand-forest placeholder:text-gray-400 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 text-sm font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-brand-accent hover:bg-brand-accent-hover text-brand-forest font-bold text-sm shadow-md transition-all duration-fast inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send & Connect via WhatsApp</span>
                </button>

                {submitted && (
                  <p className="text-center text-xs text-brand-accent font-semibold inline-flex items-center justify-center gap-1.5 w-full">
                    <CheckCircle2 className="w-4 h-4" /> Redirecting to WhatsApp chat...
                  </p>
                )}
              </form>

            </div>
          </div>

        </div>

      </div>
    </main>
  );
};
