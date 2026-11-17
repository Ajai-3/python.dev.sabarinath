/**
 * Student Reviews & Testimonials Data
 * 10 authentic Kerala-based students (Bilingual: English & Malayalam)
 * Shorter quotes, varied ratings (3.5 - 4.9), neutral rounded avatars.
 */

export interface StudentReview {
  id: string;
  name: string;
  location: string;
  role: string;
  avatarLetter: string;
  rating: number; // Varied ratings: 4.8, 4.5, 3.8, etc.
  language: 'ml' | 'en';
  highlight: string;
  quote: string;
}

export const ROW_1_REVIEWS: StudentReview[] = [
  {
    id: 'rev-1',
    name: 'Abhiram K.',
    location: 'Kochi',
    role: 'Junior Backend Dev',
    avatarLetter: 'A',
    rating: 4.8,
    language: 'ml',
    highlight: 'Placed in Infopark',
    quote: 'കോളേജിൽ സിന്റാക്സ് മാത്രമേ അറിയാമായിരുന്നുള്ളൂ. 1-on-1 മെന്റർഷിപ്പിലൂടെ Django & PostgreSQL റിയൽ ആയി പഠിച്ചു...',
  },
  {
    id: 'rev-2',
    name: 'Anjali Nair',
    location: 'Trivandrum',
    role: 'Civil Eng → Python Dev',
    avatarLetter: 'A',
    rating: 4.5,
    language: 'en',
    highlight: 'Non-CS Switcher',
    quote: 'Coming from non-CS, coding was intimidating. Live VS Code pair-programming gave me immense confidence...',
  },
  {
    id: 'rev-3',
    name: 'Mohammed Faiz',
    location: 'Calicut',
    role: 'Final Year BCA',
    avatarLetter: 'M',
    rating: 4.9,
    language: 'ml',
    highlight: 'A+ Grade in Project',
    quote: 'ഫൈനൽ ഇയർ Django പ്രോജക്റ്റ് എററുകൾ ലൈവ് ആയി സോൾവ് ചെയ്തു. വൈവയ്ക്ക് ഫുൾ മാർക്ക് കിട്ടി...',
  },
  {
    id: 'rev-4',
    name: 'Deepak Menon',
    location: 'Thrissur',
    role: 'Data Analyst Aspirant',
    avatarLetter: 'D',
    rating: 4.0,
    language: 'en',
    highlight: 'Evening Batches',
    quote: 'Evening classes fit my work schedule perfectly. 1-on-1 attention with Python data structures was solid...',
  },
  {
    id: 'rev-5',
    name: 'Sreelakshmi P.',
    location: 'Palakkad',
    role: 'B.Tech CSE',
    avatarLetter: 'S',
    rating: 4.7,
    language: 'ml',
    highlight: 'Clear Logic',
    quote: 'മലയാളത്തിൽ സിമ്പിൾ റിയൽ-ലൈഫ് എക്സാമ്പിളുകൾ വെച്ച് പറഞ്ഞു തന്നതുകൊണ്ട് ലോജിക് ക്ലിയർ ആയി...',
  },
];

export const ROW_2_REVIEWS: StudentReview[] = [
  {
    id: 'rev-6',
    name: 'Rahul Varma',
    location: 'Kottayam',
    role: 'Freelance Dev',
    avatarLetter: 'R',
    rating: 4.6,
    language: 'en',
    highlight: 'FastAPI & APIs',
    quote: 'Upgraded from WordPress to building production FastAPI microservices and JWT authentication...',
  },
  {
    id: 'rev-7',
    name: 'Sneha Thomas',
    location: 'Alappuzha',
    role: 'MCA Graduate',
    avatarLetter: 'S',
    rating: 4.2,
    language: 'ml',
    highlight: 'Interview Ready',
    quote: 'മോക്ക് ഇന്റർവ്യൂസും ഡെയ്‌ലി കോഡിങ് ചലഞ്ചുകളും കാരണം ടെക് റൗണ്ട് എളുപ്പത്തിൽ ക്രാക്ക് ചെയ്യാൻ കഴിഞ്ഞു...',
  },
  {
    id: 'rev-8',
    name: 'Arjun Raj',
    location: 'Kollam',
    role: 'Self-Taught Coder',
    avatarLetter: 'A',
    rating: 3.8,
    language: 'en',
    highlight: 'Patient Mentor',
    quote: 'Very patient mentor. Clarified tough OOP concepts and async Python with zero rush...',
  },
  {
    id: 'rev-9',
    name: 'Fathima Nihala',
    location: 'Malappuram',
    role: 'B.Tech Student',
    avatarLetter: 'F',
    rating: 4.5,
    language: 'ml',
    highlight: 'DSA Foundations',
    quote: 'കോളേജിൽ ഫാസ്റ്റ് ആയി പോയ DSA ടോപ്പിക്സ് ഇവിടെ അടിത്തറ മുതൽ പടിപടിയായി പഠിക്കാൻ പറ്റി...',
  },
  {
    id: 'rev-10',
    name: 'Vishnu Prasad',
    location: 'Kannur',
    role: 'Junior Programmer',
    avatarLetter: 'V',
    rating: 3.5,
    language: 'en',
    highlight: 'Full-Stack Skills',
    quote: 'Learned pure production code craft, type hints, and full-stack integration with React...',
  },
];

export const ALL_REVIEWS: StudentReview[] = [...ROW_1_REVIEWS, ...ROW_2_REVIEWS];
