import React from 'react';
import { CurriculumModule } from '../constants/courseData';
import { 
  Clock, 
  ArrowRight, 
  FolderGit2, 
  CheckCircle2, 
  Sparkles,
  Database,
  Terminal,
  ShieldCheck,
  Zap,
  Server,
  Layers,
  Code2
} from 'lucide-react';

interface ModuleCardProps {
  module: CurriculumModule;
  index: number;
  isLast: boolean;
  idPrefix: string;
  onOpenBookingModal: (moduleName?: string) => void;
}

interface ModuleEditorial {
  eyebrow: string;
  headingPrefix: string;
  headingItalic: string;
  topBadge: {
    icon: React.ReactNode;
    label: string;
    value: string;
  };
  bottomBadge: {
    icon: React.ReactNode;
    label: string;
    value: string;
  };
  deviceHeader: {
    title: string;
    tag: string;
  };
  deviceSnippet: {
    lines: string[];
    accentLine?: string;
    statusPill: string;
  };
}

const MODULE_EDITORIAL_MAP: Record<string, ModuleEditorial> = {
  'python-basics': {
    eyebrow: '#1 Core Python & Architecture',
    headingPrefix: 'Python fundamentals,',
    headingItalic: 'built from ground zero.',
    topBadge: {
      icon: <Terminal className="w-4 h-4 text-brand-blue" />,
      label: 'Capstone Project',
      value: 'CLI Financial Reporter',
    },
    bottomBadge: {
      icon: <CheckCircle2 className="w-4 h-4 text-brand-accent" />,
      label: 'Zero Prior Coding Needed',
      value: 'Bilingual 1-on-1 Guidance',
    },
    deviceHeader: {
      title: 'expense_tracker.py',
      tag: 'Python 3.12+',
    },
    deviceSnippet: {
      lines: [
        '$ python tracker.py --ledger=nov',
        '>>> engine.analyze_cashflow()',
        '[✓] 1,420 records processed',
        '[✓] Net Balance: +₹42,500.00',
      ],
      accentLine: 'All unit tests passing (100%)',
      statusPill: 'Verified Clean Architecture',
    },
  },
  'oop': {
    eyebrow: '#2 Object-Oriented Engineering',
    headingPrefix: 'Object-oriented code,',
    headingItalic: 'crafted for scale.',
    topBadge: {
      icon: <Layers className="w-4 h-4 text-brand-blue" />,
      label: 'Capstone Project',
      value: 'Banking Core Engine',
    },
    bottomBadge: {
      icon: <ShieldCheck className="w-4 h-4 text-brand-accent" />,
      label: 'Clean Architecture',
      value: 'SOLID & Dunder Methods',
    },
    deviceHeader: {
      title: 'banking_core.py',
      tag: 'OOP Architecture',
    },
    deviceSnippet: {
      lines: [
        'class SavingsAccount(Account):',
        '    def apply_interest(self):',
        '        self.balance *= (1 + self.rate)',
        '        self.audit_log.commit()',
      ],
      accentLine: 'Polymorphic ledger active',
      statusPill: 'Zero Spaghetti Code',
    },
  },
  'dsa': {
    eyebrow: '#3 Algorithms & Problem Solving',
    headingPrefix: 'Data structures & logic,',
    headingItalic: 'for fast problem solving.',
    topBadge: {
      icon: <Code2 className="w-4 h-4 text-brand-blue" />,
      label: 'Capstone Project',
      value: 'In-Memory Search Engine',
    },
    bottomBadge: {
      icon: <Zap className="w-4 h-4 text-brand-accent" />,
      label: 'Complexity Mastery',
      value: 'Big-O Time & Space',
    },
    deviceHeader: {
      title: 'search_tree.py',
      tag: 'DSA Engine',
    },
    deviceSnippet: {
      lines: [
        'Tree Search: BST.query("index")',
        'Depth: 4 | Comparisons: 4',
        'Latency: 0.04ms (O(log n))',
        '[✓] Binary tree self-balanced',
      ],
      accentLine: 'LeetCode patterns mastered',
      statusPill: 'High-Speed Tree Search',
    },
  },
  'sql': {
    eyebrow: '#4 Relational Database Engineering',
    headingPrefix: 'SQL & relational databases,',
    headingItalic: 'structured for scale.',
    topBadge: {
      icon: <Database className="w-4 h-4 text-brand-blue" />,
      label: 'Capstone Project',
      value: 'E-Commerce SQL Schema',
    },
    bottomBadge: {
      icon: <ShieldCheck className="w-4 h-4 text-brand-accent" />,
      label: 'ACID Transactions',
      value: 'Multi-Table JOINs & Indexing',
    },
    deviceHeader: {
      title: 'analytics_query.sql',
      tag: 'PostgreSQL 16',
    },
    deviceSnippet: {
      lines: [
        'SELECT u.name, SUM(o.total)',
        'FROM users u JOIN orders o',
        'ON u.id = o.user_id',
        'GROUP BY u.id HAVING total > 5k;',
      ],
      accentLine: 'Query latency: 3.4ms (Indexed)',
      statusPill: 'ACID Compliant Database',
    },
  },
  'django': {
    eyebrow: '#5 Enterprise Web Frameworks',
    headingPrefix: 'Django full-stack apps,',
    headingItalic: 'enterprise-grade & secure.',
    topBadge: {
      icon: <Server className="w-4 h-4 text-brand-blue" />,
      label: 'Capstone Project',
      value: 'Hospitality Booking Portal',
    },
    bottomBadge: {
      icon: <CheckCircle2 className="w-4 h-4 text-brand-accent" />,
      label: 'Production Ready',
      value: 'MVT + ORM + DRF Serializers',
    },
    deviceHeader: {
      title: 'portal.nomni.app',
      tag: 'Django 5.0 MVT',
    },
    deviceSnippet: {
      lines: [
        'Booking Engine: ONLINE',
        'Active Tables: 24/28 booked (86%)',
        'ORM: Table.objects.filter(is_free)',
        'Security: CSRF + Session Auth OK',
      ],
      accentLine: 'Admin dashboard live',
      statusPill: 'Enterprise Web Platform',
    },
  },
  'fastapi': {
    eyebrow: '#6 High-Performance Microservices',
    headingPrefix: 'FastAPI microservices,',
    headingItalic: 'asynchronous & lightning fast.',
    topBadge: {
      icon: <Zap className="w-4 h-4 text-brand-blue" />,
      label: 'Capstone Project',
      value: 'Real-Time Order Dispatch API',
    },
    bottomBadge: {
      icon: <ShieldCheck className="w-4 h-4 text-brand-accent" />,
      label: 'Auto Validation',
      value: 'Pydantic v2 + JWT Tokens',
    },
    deviceHeader: {
      title: 'POST /api/v1/orders',
      tag: 'FastAPI 0.111',
    },
    deviceSnippet: {
      lines: [
        'Status: 200 OK (1.2ms)',
        '{',
        '  "order_id": "ord_99824",',
        '  "pydantic_validated": true',
        '}',
      ],
      accentLine: 'Worker: asyncio loop active',
      statusPill: '12,000 requests/sec',
    },
  },
  'react': {
    eyebrow: '#7 Modern Frontend Interfaces',
    headingPrefix: 'Modern React interfaces,',
    headingItalic: 'interactive & full-stack.',
    topBadge: {
      icon: <Layers className="w-4 h-4 text-brand-blue" />,
      label: 'Capstone Project',
      value: 'Full-Stack Analytics Web App',
    },
    bottomBadge: {
      icon: <Sparkles className="w-4 h-4 text-brand-accent" />,
      label: 'Connected Frontend',
      value: 'Vite + React 18 + Tailwind',
    },
    deviceHeader: {
      title: 'Dashboard.tsx',
      tag: 'React 18 + Vite',
    },
    deviceSnippet: {
      lines: [
        'Live Backend: Connected (200 OK)',
        'State: useState + custom API hook',
        '<AnalyticsFeed data={orders} />',
        'Styling: Responsive Tailwind tokens',
      ],
      accentLine: 'Real-time WebSocket sync',
      statusPill: 'Full-Stack End-to-End',
    },
  },
};

export const ModuleCard: React.FC<ModuleCardProps> = ({
  module,
  index,
  isLast,
  idPrefix,
  onOpenBookingModal,
}) => {
  const editorial = MODULE_EDITORIAL_MAP[module.id] || {
    eyebrow: `#${module.number} ${module.title}`,
    headingPrefix: `${module.title},`,
    headingItalic: 'built for real scale.',
    topBadge: {
      icon: <FolderGit2 className="w-4 h-4 text-brand-blue" />,
      label: 'Capstone Project',
      value: module.keyProject,
    },
    bottomBadge: {
      icon: <CheckCircle2 className="w-4 h-4 text-brand-accent" />,
      label: 'Practical Drill',
      value: module.skills[0] || 'Clean Code',
    },
    deviceHeader: {
      title: 'main.py',
      tag: 'Python',
    },
    deviceSnippet: {
      lines: [
        '>>> module.execute()',
        '[✓] Tests passing: 100%',
        '[✓] Ready for review',
      ],
      accentLine: 'Verified by mentor',
      statusPill: 'Production Ready',
    },
  };

  return (
    <div
      id={`${idPrefix}-${module.id}`}
      style={{
        zIndex: index + 1,
      }}
      className={`bg-brand-page rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-brand-forest/15 shadow-xl sm:shadow-2xl transition-all duration-fast relative lg:sticky lg:top-[144px] ${
        isLast ? 'mb-0' : 'mb-8 sm:mb-12 lg:mb-32'
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* LEFT COLUMN: Editorial Typography, Bullets, Action */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          
          {/* Eyebrow & Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-3 sm:mb-4">
            <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-brand-forest">
              {editorial.eyebrow}
            </span>
            <span className="text-brand-forest/30 font-bold">•</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-forest/5 border border-brand-forest/15 text-xs font-semibold text-brand-forest">
              <Clock className="w-3.5 h-3.5 text-brand-blue" />
              <span>{module.duration}</span>
            </span>
            <span className="px-3 py-0.5 rounded-full bg-brand-accent/25 text-brand-forest text-xs font-extrabold">
              {module.level}
            </span>
          </div>

          {/* Big Punchy Headline with Italic Python Blue Accent */}
          <h3 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-brand-forest tracking-tight leading-[1.15]">
            {editorial.headingPrefix}{' '}
            <span className="italic font-normal text-brand-blue block sm:inline">
              {editorial.headingItalic}
            </span>
          </h3>

          {/* Concise Summary */}
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-brand-text-secondary leading-relaxed font-normal">
            {module.summary}
          </p>

          {/* Clean Topic Bullets with Python Yellow Asterisks */}
          <div className="mt-5 sm:mt-6">
            <ul className="space-y-2 sm:space-y-2.5">
              {module.topics.map((topic, i) => (
                <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-brand-forest/90 leading-snug">
                  <span className="text-brand-accent font-bold text-base leading-none select-none mt-0.5 shrink-0">
                    *
                  </span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Row: Learn More / Start Free & Skills */}
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-brand-forest/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => onOpenBookingModal(module.title)}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-brand-forest hover:text-brand-forest-light transition-colors group self-start sm:self-auto"
            >
              <span className="underline decoration-brand-accent decoration-2 underline-offset-4 group-hover:decoration-brand-forest">
                Start with this module free
              </span>
              <ArrowRight className="w-4 h-4 text-brand-accent transition-transform group-hover:translate-x-1" />
            </button>

            {/* Skill Tags */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-bold text-brand-text-tertiary mr-1">Skills:</span>
              {module.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-0.5 rounded-full bg-brand-forest/5 text-brand-forest text-[11px] font-semibold border border-brand-forest/15"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Visual Showcase / Phone Mockup with Floating Badges */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center pt-2 sm:pt-6 pb-2 sm:pb-6 lg:py-4">
          
          {/* Top Badge (Stacked cleanly on mobile, floating on desktop) */}
          <div className="w-full max-w-[280px] sm:max-w-[310px] mb-3 lg:mb-0 lg:w-auto lg:absolute lg:-top-3 lg:-left-6 z-20 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-lg border border-brand-forest/10 lg:max-w-[210px] transform hover:scale-105 transition-transform duration-fast">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-lg bg-sky-50 flex items-center justify-center shrink-0">
                {editorial.topBadge.icon}
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-blue">
                {editorial.topBadge.label}
              </span>
            </div>
            <p className="text-xs font-bold text-brand-forest leading-tight truncate">
              {editorial.topBadge.value}
            </p>
          </div>

          {/* Main Device Container (Sleek Phone Frame in Python Deep Navy) */}
          <div className="w-full max-w-[280px] sm:max-w-[310px] rounded-[32px] sm:rounded-[36px] bg-brand-forest-dark p-2.5 sm:p-3 shadow-2xl border-4 border-black/40 relative z-10">
            
            {/* Phone Top Speaker / Dynamic Island */}
            <div className="flex justify-center mb-2 sm:mb-2.5">
              <div className="w-16 sm:w-20 h-3 sm:h-3.5 bg-black/70 rounded-full flex items-center justify-center">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-brand-accent mr-1.5 animate-pulse" />
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-white/20" />
              </div>
            </div>

            {/* Inner Phone Screen */}
            <div className="rounded-[22px] sm:rounded-[24px] bg-brand-forest p-3 sm:p-4 text-white overflow-hidden border border-sky-950/50 shadow-inner">
              
              {/* Screen Top Bar */}
              <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-sky-900/40 mb-2.5 sm:mb-3 text-[11px]">
                <div className="flex items-center gap-1.5 truncate">
                  <div className="w-2 h-2 rounded-full bg-brand-accent" />
                  <span className="font-mono font-bold text-sky-100/90 truncate">
                    {editorial.deviceHeader.title}
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-brand-accent/20 text-brand-accent text-[10px] font-extrabold shrink-0">
                  {editorial.deviceHeader.tag}
                </span>
              </div>

              {/* Code / Visual Execution Box */}
              <div className="bg-brand-forest-dark/90 p-2.5 sm:p-3 rounded-xl border border-sky-950/60 font-mono text-[10px] sm:text-[11px] leading-relaxed text-sky-100/90 space-y-1 sm:space-y-1.5 mb-2.5 sm:mb-3">
                {editorial.deviceSnippet.lines.map((line, li) => (
                  <div key={li} className="truncate">
                    {line.startsWith('$') ? (
                      <span className="text-brand-accent font-bold">{line}</span>
                    ) : line.startsWith('SELECT') || line.startsWith('class') || line.startsWith('Status') ? (
                      <span className="text-white font-bold">{line}</span>
                    ) : line.startsWith('[✓]') ? (
                      <span className="text-brand-accent">{line}</span>
                    ) : (
                      <span>{line}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Project Card Highlight Inside Screen */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-brand-forest-light to-brand-forest border border-sky-800/40">
                <span className="text-[10px] uppercase tracking-wider text-brand-accent font-bold block mb-0.5">
                  Live Milestone
                </span>
                <div className="text-xs font-bold text-white leading-tight">
                  {module.keyProject}
                </div>
                {editorial.deviceSnippet.accentLine && (
                  <div className="mt-1.5 sm:mt-2 text-[10px] text-sky-200 font-mono flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-brand-accent" />
                    <span>{editorial.deviceSnippet.accentLine}</span>
                  </div>
                )}
              </div>

              {/* Status Footer Pill Inside Screen */}
              <div className="mt-2.5 sm:mt-3 text-center">
                <span className="inline-block px-3 py-0.5 sm:py-1 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-[10px] font-extrabold text-brand-accent">
                  ● {editorial.deviceSnippet.statusPill}
                </span>
              </div>

            </div>
          </div>

          {/* Bottom Badge (Stacked cleanly on mobile, floating on desktop) */}
          <div className="w-full max-w-[280px] sm:max-w-[310px] mt-3 lg:mt-0 lg:w-auto lg:absolute lg:-bottom-3 lg:-right-6 z-20 bg-brand-forest text-white p-3 sm:p-3.5 rounded-2xl shadow-lg border border-sky-800/60 lg:max-w-[210px] transform hover:scale-105 transition-transform duration-fast">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-lg bg-brand-accent/20 flex items-center justify-center shrink-0">
                {editorial.bottomBadge.icon}
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-accent">
                {editorial.bottomBadge.label}
              </span>
            </div>
            <p className="text-xs font-bold text-sky-50 leading-tight">
              {editorial.bottomBadge.value}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
