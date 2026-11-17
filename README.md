# PythonDev Academy — Online Python Tuition & Mentorship Platform

A front-end website built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **React Router DOM**, designed according to the **Nomni.ai** design language.

## 🌟 Key Highlights & Features
- **Design System Inspired by Nomni**:
  - Main typography: **Hanken Grotesk**
  - Warm cream background (`#FBF9F4`), deep forest green (`#0f3221`), and vibrant spring green accent (`#2ac864`).
  - Signature Nomni cards: Large rounded geometry (`rounded-[32px]`, `rounded-[48px]`), interactive terminal simulator card, and 4-column metric strip.
  - Floating WhatsApp contact bubble in the bottom right corner.
- **Complete Course Structure**:
  - **The 4 Pillars**: Learn, Build, Practice, Grow.
  - **7 Comprehensive Modules**:
    1. Python Basics & Core Concepts
    2. Object-Oriented Programming (OOP)
    3. Data Structures & Algorithms (DSA)
    4. SQL & Relational Databases
    5. Django Full-Stack Framework
    6. FastAPI Modern Microservices
    7. React Dynamic Frontend
- **Mentorship Details**:
  - **Tutor**: Sabarinath
  - **Teaching Experience**: 1 Year
  - **Instruction Medium**: English & Malayalam
  - **First Lesson 100% Free** guarantee with instant booking modal and WhatsApp integration.
- **Direct Contacts**:
  - **Phone**: `+91 949 643 24 90`
  - **Email**: `sabarin992@gmail.com`
  - **WhatsApp**: Direct 1-click chat with pre-filled enquiry messages.
- **Multi-Route Navigation with React Router DOM**:
  - `/` — Complete interactive Home Page
  - `/curriculum` — Full syllabus explorer with capstone project details
  - `/contact` — Direct communication hub & trial scheduling
  - `*` — Custom 404 Error Page (`KeyError` themed)

---

## 🎨 Centralized Color & Content Control (No Hardcoding)

1. **Theme & Colors Single Source of Truth**:
   - `src/theme/tokens.ts`: Change any color, surface, or font here.
   - `src/index.css`: Defines the corresponding CSS variables.
   - `tailwind.config.js`: Maps Tailwind brand utility classes (`bg-brand-forest`, `bg-brand-accent`, etc.).

2. **Website & Contact Details**:
   - `src/constants/siteConfig.ts`: Contains tutor name, phone number, email, WhatsApp message templates, and social links.
   - `src/constants/courseData.ts`: Contains all 7 curriculum modules, syllabus topics, capstone projects, 4 pillars, course highlights, stats, and FAQs.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```
