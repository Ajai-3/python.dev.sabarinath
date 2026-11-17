/**
 * Course Data & Curriculum Details
 * Centralized content repository for all educational details, curriculum modules,
 * learning pillars, highlights, stats, and FAQs.
 */

export interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge: string;
  bulletPoints: string[];
}

export interface CurriculumModule {
  id: string;
  number: string;
  title: string;
  summary: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  topics: string[];
  keyProject: string;
  iconName: string;
  skills: string[];
}

export interface Highlight {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface Metric {
  value: string;
  label: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Classes" | "Prerequisites" | "Payment";
}

// 1. Four Core Pillars
export const COURSE_PILLARS: Pillar[] = [
  {
    id: "learn",
    title: "Learn",
    subtitle: "Crystal-Clear Fundamentals",
    description:
      "Grasp computer science concepts and Python fundamentals from ground zero. No prior programming experience required.",
    iconName: "BookOpen",
    badge: "Step 01",
    bulletPoints: [
      "Intuitive mental models with bilingual clarity (English & Malayalam)",
      "Zero memorization — learn by interactive visualization",
      "Core Python 3.12+ syntax and computational logic",
    ],
  },
  {
    id: "build",
    title: "Build",
    subtitle: "Real-World Projects",
    description:
      "Say goodbye to toy scripts. Build full-stack web applications, REST APIs, and database-backed services from scratch.",
    iconName: "Code2",
    badge: "Step 02",
    bulletPoints: [
      "Django and FastAPI enterprise web architectures",
      "Dynamic interactive frontends using modern React",
      "Production-ready SQL database designs and queries",
    ],
  },
  {
    id: "practice",
    title: "Practice",
    subtitle: "Hands-on Problem Solving",
    description:
      "Sharpen problem-solving muscle with Data Structures & Algorithms. Get comfortable cracking coding challenges.",
    iconName: "Terminal",
    badge: "Step 03",
    bulletPoints: [
      "Hands-on DSA: Lists, Stacks, Queues, Trees, and Sorting",
      "Weekly live coding walkthroughs with your mentor",
      "Code review with personalized feedback on every commit",
    ],
  },
  {
    id: "grow",
    title: "Grow",
    subtitle: "Career & Mentorship",
    description:
      "Build a standout GitHub portfolio, master Git & deployment, and gain the confidence to land jobs or freelance gigs.",
    iconName: "TrendingUp",
    badge: "Step 04",
    bulletPoints: [
      "1-on-1 personalized mentoring with tailored pace",
      "GitHub portfolio curation with deployable live projects",
      "Interview preparation and mock technical reviews",
    ],
  },
];

// 2. The 7 Comprehensive Curriculum Modules
export const CURRICULUM_MODULES: CurriculumModule[] = [
  {
    id: "python-basics",
    number: "01",
    title: "Python Basics & Core Concepts",
    summary: "Syntax, data types, control flow, functions, modular architecture, and file operations.",
    duration: "Weeks 1 - 2",
    level: "Beginner",
    topics: [
      "Python environment setup & modern development tooling",
      "Variables, memory model, and primitive types",
      "Control flow (if/else, loops, match-case)",
      "Functions, *args, **kwargs, lambda & scope",
      "Built-in collections: Lists, Tuples, Dictionaries, Sets",
      "File I/O, error handling & custom exceptions",
      "Modules, packages & virtual environments (venv)",
    ],
    keyProject: "Automated Expense Tracker & CLI Financial Reporter",
    iconName: "Binary",
    skills: ["Python 3", "Functions", "Data Types", "Exception Handling"],
  },
  {
    id: "oop",
    number: "02",
    title: "Object-Oriented Programming (OOP)",
    summary: "Classes, objects, inheritance, encapsulation, polymorphism, and modular architecture.",
    duration: "Weeks 3 - 4",
    level: "Beginner",
    topics: [
      "Classes, instances, self, and __init__ constructors",
      "Instance vs class attributes & classmethods / staticmethods",
      "Inheritance, method overriding & super()",
      "Encapsulation, property decorators & private variables",
      "Polymorphism, abstract base classes & duck typing",
      "Dunder methods (__str__, __repr__, __len__, __iter__)",
      "Design principles & clean code practices",
    ],
    keyProject: "Banking & Account Management System with OOP Patterns",
    iconName: "Boxes",
    skills: ["OOP", "Inheritance", "Polymorphism", "Encapsulation"],
  },
  {
    id: "dsa",
    number: "03",
    title: "Data Structures & Algorithms (DSA)",
    summary: "Arrays, lists, stacks, queues, trees, searching, sorting, and systematic problem solving.",
    duration: "Weeks 5 - 6",
    level: "Intermediate",
    topics: [
      "Time & space complexity analysis (Big-O notation)",
      "Dynamic arrays, linked lists (singly & doubly)",
      "Stacks and queues: implementation & practical applications",
      "Recursion, backtracking & divide-and-conquer",
      "Trees & Binary Search Trees (BST), traversals",
      "Searching (Binary Search) and Sorting algorithms",
      "Solving LeetCode-style algorithmic challenges systematically",
    ],
    keyProject: "In-Memory Search Engine & File System Tree Navigator",
    iconName: "Network",
    skills: ["Big-O", "Trees", "Stacks & Queues", "Algorithmic Thinking"],
  },
  {
    id: "sql",
    number: "04",
    title: "SQL & Relational Databases",
    summary: "Relational database design, table relationships, advanced SQL queries, and data handling.",
    duration: "Weeks 7 - 8",
    level: "Intermediate",
    topics: [
      "Relational database architecture & PostgreSQL / SQLite",
      "DDL & DML: CREATE, INSERT, UPDATE, DELETE",
      "Primary keys, foreign keys & relational schema design",
      "Complex Queries: INNER, LEFT, RIGHT & FULL JOINs",
      "Aggregations: GROUP BY, HAVING, subqueries & window functions",
      "Indexing, transaction management (ACID) & query optimization",
      "Python database connectivity with psycopg & sqlite3",
    ],
    keyProject: "E-Commerce Database Architecture with Multi-Table Analytics",
    iconName: "Database",
    skills: ["PostgreSQL", "SQL Queries", "Schema Design", "Transactions"],
  },
  {
    id: "django",
    number: "05",
    title: "Django Full-Stack Framework",
    summary: "Enterprise web development, MVT architecture, Django ORM, authentication, and admin engine.",
    duration: "Weeks 9 - 11",
    level: "Intermediate",
    topics: [
      "Django project structure & MVT (Model-View-Template)",
      "Django ORM: migrations, querysets & relationships (1:1, 1:N, M:N)",
      "User authentication, sessions, permissions & security",
      "Form handling, file uploads & CSRF protection",
      "Django Templates with styling & context processors",
      "Django REST Framework (DRF) serializers & ViewSets",
      "Deploying Django apps on production cloud servers",
    ],
    keyProject: "Hospitality / Restaurant Management & Online Booking Portal",
    iconName: "Server",
    skills: ["Django", "Django ORM", "Auth & Security", "DRF"],
  },
  {
    id: "fastapi",
    number: "06",
    title: "FastAPI & Modern Microservices",
    summary: "Build high-performance, asynchronous REST APIs with auto-generated documentation and Pydantic validation.",
    duration: "Weeks 12 - 13",
    level: "Advanced",
    topics: [
      "Async Python: asyncio, async/await event loop fundamentals",
      "FastAPI architecture, routing & dependency injection",
      "Data validation & schema enforcement with Pydantic v2",
      "Database integration with SQLAlchemy 2.0 & Alembic",
      "JWT token authentication & role-based route security",
      "Interactive OpenAPI / Swagger docs generation",
      "Background tasks, WebSockets & API performance benchmarking",
    ],
    keyProject: "Real-time Order Processing & Notification Microservice API",
    iconName: "Zap",
    skills: ["FastAPI", "Asyncio", "Pydantic", "JWT Auth", "Swagger"],
  },
  {
    id: "react",
    number: "07",
    title: "React Frontend Development",
    summary: "Build responsive, dynamic, and state-of-the-art user interfaces that seamlessly connect to your Python backends.",
    duration: "Weeks 14 - 16",
    level: "Advanced",
    topics: [
      "Modern React 18: JSX, component anatomy & props",
      "State management with useState, useEffect, and custom hooks",
      "Responsive styling with Tailwind CSS & token-driven design",
      "API consumption: Axios / Fetch, loading & error states",
      "Client-side routing with React Router DOM",
      "Connecting React frontends to Django and FastAPI backends",
      "Full-stack end-to-end integration and cloud deployment",
    ],
    keyProject: "Full-Stack Dashboard Web App connected to FastAPI & PostgreSQL",
    iconName: "Layout",
    skills: ["React", "Tailwind CSS", "REST APIs", "State Management"],
  },
];

// 3. Course Highlights
export const COURSE_HIGHLIGHTS: Highlight[] = [
  {
    id: "live-classes",
    title: "Live Interactive Classes",
    description:
      "Direct 1-on-1 and small interactive sessions. Ask questions in real-time without getting lost in pre-recorded videos.",
    iconName: "Video",
    badge: "100% Live",
  },
  {
    id: "hands-on-projects",
    title: "Hands-on Projects",
    description:
      "Every module culminates in a real software application built on your machine, committed to Git, and ready to show employers.",
    iconName: "FolderGit2",
    badge: "Portfolio Ready",
  },
  {
    id: "personal-mentorship",
    title: "Personal Mentorship",
    description:
      "Individual guidance, tailored pacing for beginners or working professionals, and continuous code reviews directly from Sabarinath.",
    iconName: "UserCheck",
    badge: "Dedicated Mentor",
  },
  {
    id: "real-world-dev",
    title: "Real-World Application Dev",
    description:
      "Learn industry-standard workflows: Git version control, virtual environments, REST API design, database migrations, and clean code principles.",
    iconName: "Globe2",
    badge: "Industry Standard",
  },
  {
    id: "first-lesson-free",
    title: "First Lesson 100% For Free",
    description:
      "Take your first session with zero risk or upfront payment. Experience the teaching style, discuss your goals, and decide only if satisfied.",
    iconName: "Gift",
    badge: "Zero Risk",
  },
  {
    id: "bilingual-support",
    title: "English & Malayalam Instruction",
    description:
      "Learn comfortably in your preferred tongue. Difficult programming concepts explained simply in Malayalam and English for 100% clarity.",
    iconName: "Languages",
    badge: "English | Malayalam",
  },
];

// 4. Metrics / Stats (Nomni 4-column style)
export const COURSE_METRICS: Metric[] = [
  {
    value: "1 Year",
    label: "Teaching Experience",
    description: "Hands-on mentorship tailored to student pace and real-world clarity.",
  },
  {
    value: "1-on-1",
    label: "Live Mentorship",
    description: "Personalized attention with direct live coding walkthroughs.",
  },
  {
    value: "7 Modules",
    label: "Full-Stack Journey",
    description: "Python, OOP, DSA, SQL, Django, FastAPI & modern React.",
  },
  {
    value: "100% Free",
    label: "Trial First Session",
    description: "Start risk-free. Pay only after you experience the teaching quality.",
  },
];

// 5. Tech Stack Ticker
export const TECH_STACK = [
  { name: "Python 3.12", category: "Core Language" },
  { name: "Django", category: "Full-Stack Web" },
  { name: "FastAPI", category: "High-Performance APIs" },
  { name: "React", category: "Dynamic UI" },
  { name: "PostgreSQL", category: "Relational DB" },
  { name: "SQL", category: "Queries & Analytics" },
  { name: "Data Structures", category: "Algorithms" },
  { name: "Tailwind CSS", category: "Modern Styling" },
  { name: "Git & GitHub", category: "Version Control" },
  { name: "Pydantic", category: "Data Validation" },
];

// 6. FAQs
export const COURSE_FAQS: FAQItem[] = [
  {
    question: "How do I claim my First Lesson For Free?",
    answer:
      "Simply click the 'Book Free Demo' or WhatsApp button. We will schedule a convenient 45-minute live 1-on-1 session where you'll experience the teaching style, write your first Python code, and map out your roadmap.",
    category: "General",
  },
  {
    question: "Do I need any previous coding experience?",
    answer:
      "No! The course begins from absolute zero. We cover foundational thinking, computer basics, and build up step-by-step to advanced web frameworks and algorithms.",
    category: "Prerequisites",
  },
  {
    question: "Can classes be conducted in Malayalam?",
    answer:
      "Yes! Classes can be conducted entirely in Malayalam, English, or a comfortable bilingual mix. This ensures you never get blocked by technical jargon.",
    category: "Classes",
  },
  {
    question: "What are the timings and schedule?",
    answer:
      "Since this is personalized mentorship, batch timings can be arranged flexibly to suit college students, job seekers, and working professionals (morning, evening, or weekend slots).",
    category: "Classes",
  },
  {
    question: "Will I build real projects for my resume/portfolio?",
    answer:
      "Yes. You will build and deploy real applications including an automated finance CLI, OOP banking system, e-commerce SQL database, Django web application, FastAPI microservice, and a React full-stack dashboard.",
    category: "General",
  },
  {
    question: "What happens if I miss a live class?",
    answer:
      "Every live session includes recap notes, code repositories, and flexible makeup sessions so you never fall behind.",
    category: "Classes",
  },
];
