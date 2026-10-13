export const site = {
  name: "Solomon Oshinde",
  role: "Software developer",
  location: "Lagos, Nigeria",
  email: "soloakorede15@gmail.com",
  intro:
    "Building modern web applications, intelligent digital products, and AI-powered experiences using React, Next.js, JavaScript, PHP, and emerging AI technologies.",
  socials: [
    { label: "GitHub", href: "https://github.com/Koredesolomon" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/solomon-oshinde/" },
  ],
};

export const about = [
  "I'm a software developer with 3+ years of experience building responsive web applications and digital products with JavaScript, React, Next.js, PHP and headless CMS architectures.",
  "My work spans custom web solutions, dynamic interfaces, API integrations, dashboards and assessment flows. I'm comfortable debugging, customising CMSs, and turning design requirements into maintainable applications.",
  "I graduated in Mathematics from the University of Lagos in 2025, have taken UI/UX courses to bridge design and development, and volunteer teaching IT skills and organising bootcamps in my community.",
];

export const skills = [
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "PHP",
  "WordPress",
  "WPGraphQL",
];

export type TimelineEntry = {
  years: string;
  type: "experience" | "education";
  title: string;
  org: string;
  place: string;
  bullets: string[];
  metric?: string;
  href?: string;
};

// Newest first. Source: CV.
export const timeline: TimelineEntry[] = [
  {
    years: "Sep 2025 – Present",
    type: "experience",
    title: "Contract WordPress / Frontend Developer",
    org: "Oval Studios",
    place: "Remote",
    bullets: [
      "Build and maintain custom client websites with responsive layouts, clean structure and functional user experiences.",
      "Develop dynamic blog and content pages in React and Next.js, with WordPress as a headless CMS.",
      "Use WPGraphQL and GraphQL to fetch posts, categories, featured images and custom content into Next.js.",
      "Built a custom LMS audio plugin for Tutor Pro in JavaScript, reducing plugin dependency to improve security and speed.",
      "Troubleshoot front-end, API, content-integration, responsiveness and WordPress issues across sites.",
    ],
    metric: "Headless WordPress + Next.js in production",
  },
  {
    years: "Oct 2025 – Jul 2026",
    type: "experience",
    title: "Web Developer",
    org: "Boluwatife Idowu\u2019s Agency",
    place: "Remote",
    bullets: [
      "Turned Figma designs into responsive WordPress sites, keeping layouts, typography and mobile views as designed.",
      "Built custom pages and dynamic sections with Elementor, CSS and vanilla JS instead of bloated prebuilt templates.",
      "Coded interactive features in JavaScript and custom PHP, reducing plugin dependency.",
      "Handled server migrations, automated backups, basic security setup and speed optimisation.",
      "Fixed plugin conflicts, broken mobile layouts, JavaScript errors and slow database issues.",
    ],
    metric: "Live fundraising stats via custom REST API",
  },
  {
    years: "Aug 2021 – Dec 2024",
    type: "experience",
    title: "Software Developer / Instructor",
    org: "EdSofta Limited",
    place: "Lagos, Nigeria",
    bullets: [
      "Built a custom web application from scratch in HTML, CSS, JavaScript and PHP, from design requirements to a working site.",
      "Co-developed a mobile UTME prep app in React Native, building the front-end interface and screens.",
      "Trained and mentored students in HTML, CSS, JavaScript and PHP, and supervised their coding projects.",
    ],
    metric: "6 students mentored",
  },
];

export type Credential = { source: string; title: string; description: string; href?: string };

export const academics: Credential[] = [
  {
    source: "University of Lagos · 2019 – 2025",
    title: "BSc Mathematics",
    description: "Second Class. Planning a future focus on data science and analytics.",
  },
  {
    source: "Practical training · 2021",
    title: "Web Development Program",
    description: "HTML, CSS, JavaScript, PHP, responsive design and software development fundamentals.",
  },
  {
    source: "Courses & community",
    title: "UI/UX courses & IT volunteering",
    description: "Design courses to bridge design and code, plus teaching IT skills and organising bootcamps.",
  },
];

export type Milestone = { category: string; subtitle: string; description: string; value: string; href?: string };

export const milestones: Milestone[] = [
  {
    category: "Experience",
    subtitle: "Years building",
    description: "Building responsive web apps and digital products since 2021.",
    value: "3+",
  },
  {
    category: "Mentoring",
    subtitle: "Students trained",
    description: "Taught HTML, CSS, JavaScript and PHP from the ground up at EdSofta.",
    value: "6",
  },
  {
    category: "Key projects",
    subtitle: "Case studies",
    description: "An AI STEM platform, a headless WordPress library, a church service system and a fundraising integration.",
    value: "4",
  },
  {
    category: "Education",
    subtitle: "BSc Mathematics",
    description: "University of Lagos, graduated 2025 with a Second Class degree.",
    value: "2025",
  },
];

export type CaseStudy = {
  title: string;
  org: string;
  bullets: string[];
  stack: string[];
  href?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "AI-Powered STEM Learning Platform",
    org: "TLCHub · Independent",
    bullets: [
      "Built from scratch: an AI-powered STEM testing platform with automated grading, guided explanations and student performance tracking.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "NestJS", "MongoDB", "OpenAI API", "Google Auth"],
  },
  {
    title: "Headless Resource Library & LMS Plugin",
    org: "Oval Studios",
    bullets: [
      "Dynamic resource library in React and Next.js, with WordPress as a headless CMS via WPGraphQL for filtering, categorisation and resource pages.",
      "Custom audio plugin for a Tutor LMS platform, reducing third-party plugins while improving performance and security.",
    ],
    stack: ["Next.js", "React", "WPGraphQL", "GraphQL", "JavaScript"],
  },
  {
    title: "Church Service Management System",
    org: "WordPress",
    bullets: [
      "Custom service-management system with Custom Post Types, ACF, recurring service logic, automated scheduling and dynamic service displays.",
    ],
    stack: ["WordPress", "PHP", "JavaScript", "ACF", "WP-Cron", "Elementor"],
  },
  {
    title: "Live Fundraising Integration",
    org: "Boluwatife Idowu\u2019s Agency",
    bullets: [
      "Pulled Givebutter campaign data into WordPress through custom REST API functionality, replacing manual updates with real-time fundraising stats and progress across multiple campaigns.",
    ],
    stack: ["WordPress", "PHP", "REST APIs", "JavaScript", "Givebutter API", "Elementor"],
  },
];

export const languages = ["English", "Yoruba", "French"];

export type Project = {
  title: string;
  category: string;
  role: string;
  description: string;
  highlights: string[];
  mockup: Mockup;
  href: string;
  tags: string[];
};

// Stylised UI preview drawn in code (not a screenshot). Labels are generic.
export type Mockup =
  | { kind: "steps"; title: string; steps: string[]; footer: string[] }
  | { kind: "site"; layout: "split" | "center"; nav: string[]; headline: string; sub: string; cta: string; cards: string[] };

// Edit these freely: category, role, highlights and tags are drafts.
export const projects: Project[] = [
  {
    title: "TLCHub",
    category: "AI-powered STEM learning platform",
    role: "Independent Developer",
    description:
      "An AI-powered STEM testing platform I built from scratch, with automated grading, guided explanations and student performance tracking.",
    highlights: [
      "Guided login, test and review flow",
      "Rubric-based AI grading with helpful feedback",
      "Dashboard showing what to work on next",
    ],
    mockup: { kind: "steps", title: "From first click to clear next step", steps: ["Login", "Choose", "Take test", "AI grading", "Dashboard"], footer: ["Practice", "Improve", "Repeat"] },
    href: "https://mytlchub.com/",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "NestJS", "MongoDB"],
  },
  {
    title: "MFM Lekki Youth Church",
    category: "Church youth community",
    role: "Web Developer",
    description:
      "Website for a church youth community, built to strengthen communication and online presence.",
    highlights: ["Built with WordPress and Elementor", "Easy for the team to update", "Responsive across devices"],
    mockup: { kind: "site", layout: "split", nav: ["Home", "About", "Events", "Contact"], headline: "MFM Lekki Youth Church", sub: "A community for young people.", cta: "Learn more", cards: ["About", "Events", "Connect"] },
    href: "https://mfmlekkiyc.org/",
    tags: ["WordPress", "Elementor"],
  },
  {
    title: "TFFX Media",
    category: "Media company",
    role: "Web Developer",
    description: "Marketing site with case studies for a media company.",
    highlights: ["Case-study showcase", "Responsive layout", "Clear calls to action"],
    mockup: { kind: "site", layout: "center", nav: ["Home", "Work", "Case studies", "Contact"], headline: "TFFX Media", sub: "Stories, campaigns and case studies.", cta: "View case studies", cards: ["Work", "Case studies", "Contact"] },
    href: "https://tffxmedia.com/",
    tags: ["Website"],
  },
  {
    title: "Victor & Julie",
    category: "Ministry website",
    role: "Web Developer",
    description: "Website for Victor and Julie COTE.",
    highlights: ["Clean, readable layout", "Responsive across devices"],
    mockup: { kind: "site", layout: "split", nav: ["Home", "About", "Contact"], headline: "Victor & Julie", sub: "Welcome to our ministry.", cta: "Get in touch", cards: ["About", "Messages", "Contact"] },
    href: "https://victorandjulie.com/",
    tags: ["Website"],
  },
  {
    title: "My Daddy Taught Me That",
    category: "Initiative website",
    role: "Web Developer",
    description: "Website for the My Daddy Taught Me That initiative.",
    highlights: ["Content-focused design", "Responsive across devices"],
    mockup: { kind: "site", layout: "center", nav: ["Home", "About", "Resources"], headline: "My Daddy Taught Me That", sub: "Lessons worth passing on.", cta: "Learn more", cards: ["About", "Stories", "Resources"] },
    href: "https://mydaddytaughtmethat.org/",
    tags: ["Website"],
  },
  {
    title: "SPH Capital Group",
    category: "Corporate website",
    role: "Web Developer",
    description: "Corporate website for an investment group.",
    highlights: ["Professional corporate presence", "Responsive across devices"],
    mockup: { kind: "site", layout: "split", nav: ["Home", "About", "Services", "Contact"], headline: "SPH Capital Group", sub: "Investment with purpose.", cta: "Contact us", cards: ["About", "Services", "Contact"] },
    href: "https://sphcapitalgroup.com/",
    tags: ["Website"],
  },
  {
    title: "Total Life Concern",
    category: "Non-profit",
    role: "Web Developer",
    description: "Website for a non-profit organisation.",
    highlights: ["Mission-led storytelling", "Responsive across devices"],
    mockup: { kind: "site", layout: "center", nav: ["Home", "About", "Programmes", "Donate"], headline: "Total Life Concern", sub: "Making a difference together.", cta: "Get involved", cards: ["About", "Programmes", "Donate"] },
    href: "https://totallifeconcern.org/",
    tags: ["Website"],
  },
];
