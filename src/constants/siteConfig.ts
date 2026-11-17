/**
 * Site Configuration & Constants
 * Website URL, phone number, and email are configured via .env with fallbacks.
 */

const envUrl = (import.meta.env.VITE_SITE_URL || '').trim();
const envPhone = (import.meta.env.VITE_CONTACT_PHONE || '').trim();
const envEmail = (import.meta.env.VITE_CONTACT_EMAIL || '').trim();

// Automatically clean phone digits for WhatsApp and tel: links
const rawPhoneDigits = envPhone.replace(/\D/g, '');

export interface ContactInfo {
  phone: string;
  phoneRaw: string;
  email: string;
  whatsappNumber: string;
  whatsappDefaultMessage: string;
  location: string;
}

export interface InstructorProfile {
  name: string;
  role: string;
  experience: string;
  languages: string[];
  bio: string;
  tagline: string;
  avatar: string;
  avatarCutout: string;
}

export interface SiteMeta {
  title: string;
  description: string;
  tagline: string;
  badge: string;
  previewImage: string;
  freeTrialHeadline: string;
}

export const SITE_CONFIG: {
  url: string;
  brand: string;
  meta: SiteMeta;
  contact: ContactInfo;
  instructor: InstructorProfile;
  socials: {
    github: string;
    linkedin: string;
    youtube?: string;
  };
} = {
  url: envUrl,
  brand: "python.dev",
  meta: {
    title: "Complete Python Development | 1-on-1 Tuition & Mentorship with Sabarinath",
    description: "Master Python from scratch to production with personalized 1-on-1 mentorship by Sabarinath. Real-world projects with Django, FastAPI, PostgreSQL & React. Bilingual instruction in English & Malayalam. First lesson 100% free.",
    tagline: "From Fundamentals to Real-World Applications",
    badge: "First Lesson 100% Free",
    previewImage: "/preview.png",
    freeTrialHeadline: "Start with a 1-on-1 Free Session. No Commitments.",
  },
  contact: {
    phone: envPhone,
    phoneRaw: rawPhoneDigits.startsWith('+') ? rawPhoneDigits : `+${rawPhoneDigits}`,
    email: envEmail,
    whatsappNumber: rawPhoneDigits,
    whatsappDefaultMessage:
      "Hello! I want to enroll / learn more about the Complete Python Development course and claim my free first lesson.",
    location: "Kerala, India (Online Live Classes)",
  },
  instructor: {
    name: "Sabarinath",
    role: "Python Full-Stack Engineer & Mentor",
    experience: "2+ Years Dedicated Teaching Experience",
    languages: ["English", "Malayalam"],
    bio: "Passionate developer and educator specializing in taking students from absolute beginners to job-ready Python full-stack developers. Known for friendly, patient 1-on-1 mentoring with bilingual explanations in English and Malayalam.",
    tagline: "Practical, code-first mentoring tailored to your individual learning pace.",
    avatar: "/sabarinath_mentor.jpg",
    avatarCutout: "/mentor.png",
  },
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
};

/**
 * WhatsApp link generator with custom message
 */
export const getWhatsAppLink = (customMsg?: string): string => {
  const msg = customMsg || SITE_CONFIG.contact.whatsappDefaultMessage;
  return `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
};

/**
 * Mailto link generator
 */
export const getEmailLink = (subject?: string, body?: string): string => {
  const sub = subject || "Enquiry: Complete Python Development Course";
  const b = body || "Hi Sabari,\n\nI would like to inquire about the Python tuition classes and schedule my free first lesson.\n\nThank you!";
  return `mailto:${SITE_CONFIG.contact.email}?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(b)}`;
};

/**
 * Phone call link generator
 */
export const getPhoneLink = (): string => {
  return `tel:${SITE_CONFIG.contact.phoneRaw}`;
};
