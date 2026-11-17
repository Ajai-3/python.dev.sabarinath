import React, { useState } from 'react';
import { X, CheckCircle, Send, Sparkles, AlertCircle, Languages, Target } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppLink } from '../constants/siteConfig';
import { CustomSelect, SelectOption } from './CustomSelect';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedModule?: string;
}

const languageOptions: SelectOption[] = [
  { value: 'Both', label: 'English + Malayalam', description: 'Bilingual - Recommended for 100% clarity' },
  { value: 'Malayalam', label: 'Malayalam Only', description: 'Classes conducted fully in Malayalam' },
  { value: 'English', label: 'English Only', description: 'Classes conducted fully in English' },
];

const goalOptions: SelectOption[] = [
  { value: 'Python Basics & Core Concepts', label: 'Python Basics & Core', description: 'Syntax, data types & logic' },
  { value: 'Full-Stack Web (Django & FastAPI)', label: 'Full-Stack Web & APIs', description: 'Django, FastAPI, SQL & backends' },
  { value: 'DSA & Problem Solving', label: 'DSA & Coding Practice', description: 'Arrays, trees, stacks, LeetCode' },
  { value: 'React Frontend Development', label: 'React Frontend', description: 'Interactive UIs & API integration' },
  { value: 'Complete 7-Module Course', label: 'Complete 7-Module Journey', description: 'Zero to full-stack engineer' },
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedModule,
}) => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState<string | null>(null);

  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const [language, setLanguage] = useState<string>('Both');
  const [goal, setGoal] = useState<string>(preselectedModule || 'Python Basics & Core Concepts');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

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

  const validatePhone = (val: string): boolean => {
    const trimmed = val.trim();
    if (!trimmed) {
      setPhoneError('WhatsApp or Phone number is required.');
      return false;
    }
    if (/[a-zA-Z]/.test(trimmed)) {
      setPhoneError('Phone number cannot contain letters.');
      return false;
    }
    const digitsOnly = trimmed.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      setPhoneError('Please enter at least 10 digits (e.g. +91 98765 43210).');
      return false;
    }
    if (digitsOnly.length > 15) {
      setPhoneError('Phone number cannot exceed 15 digits.');
      return false;
    }
    setPhoneError(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isNameValid = validateName(name);
    const isPhoneValid = validatePhone(phone);

    if (!isNameValid || !isPhoneValid) {
      return;
    }

    const selectedLangLabel = languageOptions.find((l) => l.value === language)?.label || language;
    const selectedGoalLabel = goalOptions.find((g) => g.value === goal)?.label || goal;

    setIsSubmitted(true);

    const message = `Hi Sabari, I would like to book my Free First Lesson!\n\nName: ${name.trim()}\nPhone/WhatsApp: ${phone.trim()}\nPreferred Language: ${selectedLangLabel}\nFocus Area: ${selectedGoalLabel}`;

    setTimeout(() => {
      window.open(getWhatsAppLink(message), '_blank');
      setIsSubmitted(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div
        className="relative w-full max-w-lg bg-brand-page text-brand-text-primary rounded-2xl p-5 sm:p-7 shadow-2xl border border-brand-forest/15 my-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-brand-forest hover:bg-black/5 transition-colors focus-visible:ring-2 focus-visible:ring-brand-accent"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-forest text-white text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
              <span>100% Free • No Payment Required</span>
            </div>

            <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-forest">
              Claim Your Free 1-on-1 Class
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-brand-text-secondary leading-relaxed">
              Experience Sabarinath's live mentorship with zero obligation. We will connect with you to pick a time slot.
            </p>

            <form noValidate onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-brand-forest uppercase tracking-wider mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Nair"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (nameError) setNameError(null);
                  }}
                  onBlur={() => name && validateName(name)}
                  className={`w-full px-3.5 py-2.5 sm:py-3 bg-white rounded-lg border transition-all text-sm font-medium focus:outline-none ${
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
                <label className="block text-xs font-bold text-brand-forest uppercase tracking-wider mb-1.5">
                  WhatsApp Number / Phone
                </label>
                <input
                  type="tel"
                  inputMode="tel"
                  placeholder="e.g. +91 98765 43210"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (phoneError) setPhoneError(null);
                  }}
                  onBlur={() => phone && validatePhone(phone)}
                  className={`w-full px-3.5 py-2.5 sm:py-3 bg-white rounded-lg border transition-all text-sm font-medium focus:outline-none ${
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

              {/* Custom Selects - Stack on small screens, 2 cols on wider screens */}
              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3.5">
                <CustomSelect
                  label="Teaching Language"
                  icon={<Languages className="w-3.5 h-3.5" />}
                  options={languageOptions}
                  value={language}
                  onChange={(val) => setLanguage(val)}
                />

                <CustomSelect
                  label="Your Goal / Focus"
                  icon={<Target className="w-3.5 h-3.5" />}
                  options={goalOptions}
                  value={goal}
                  onChange={(val) => setGoal(val)}
                />
              </div>

              <button
                type="submit"
                className="w-full mt-3 inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-accent hover:bg-brand-accent-hover text-brand-forest font-bold rounded-lg transition-all duration-fast shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-brand-forest text-sm"
              >
                <span>Confirm & Connect on WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>

              <p className="text-center text-xs text-brand-text-tertiary pt-1">
                Direct tutor contact:{' '}
                <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} className="underline font-semibold text-brand-forest">
                  {SITE_CONFIG.contact.phone}
                </a>
              </p>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-brand-accent/20 text-brand-accent rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-brand-forest">Redirecting to WhatsApp...</h4>
            <p className="text-sm text-brand-text-secondary">
              Connecting you directly with Sabarinath to confirm your free first class timing!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
