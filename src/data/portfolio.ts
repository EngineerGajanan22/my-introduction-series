/**
 * Central portfolio data — generated from Gajanan Gangakhedkar's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Source of truth: Gajanan_Gangakhedkar_CV_2026_1EXP.pdf.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Gajanan Gangakhedkar',
  displayName: 'Gajanan Gangakhedkar',
  firstName: 'GAJANAN',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A GANGAKHEDKAR ORIGINAL',
  role: 'Web Developer (PHP & Laravel)',
  tagline: ['Web Developer', 'PHP / Laravel', 'Full-Stack'],
  intro:
    'PHP Software Developer with 1 year of experience in PHP, Laravel, MySQL, JavaScript, HTML, and CSS. Skilled in Laravel MVC, RESTful APIs, CRUD operations, authentication, validation, and database integration, building scalable and secure web applications.',
  location: 'Pune, Maharashtra',
  phone: '9373444585',
  email: 'gajanangangakhedkar@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/gajanan-gangakhedkar',
    github: 'https://github.com/EngineerGajanan22',
  },
  resumePdf: '/assets/Gajanan_Gangakhedkar_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Gajanan Gangakhedkar',
  },
  interests: ['Scalable Web Architecture', 'RESTful API Engineering', 'Generative AI Integration'],
};

export const education = [
  {
    school: 'Sinhgad Institute Of Technology And Science',
    place: 'Pune, Maharashtra',
    degree: 'BE in Information Technology',
    period: 'Sept 2021 – June 2024',
    score: 'GPA 8.07',
  },
  {
    school: 'Gramin Polytechnic',
    place: 'Vishnupuri, Nanded',
    degree: 'Diploma in Computer Engineering',
    period: 'Aug 2018 – Aug 2021',
    score: 'Score 87.77%',
  },
];

export const experience = [
  {
    company: 'Cyber Rafting',
    role: 'Web Developer (PHP, Laravel)',
    place: 'Pune, Maharashtra',
    period: 'Dec 2025 – Sept 2026',
    points: [
      'Developed and maintained PHP/Laravel web applications using Laravel MVC, MySQL, JavaScript, HTML, and CSS, implementing reusable modules, CRUD operations, authentication, validation, and business logic.',
      'Built and integrated RESTful APIs and database-driven features, improving application functionality, data flow, and system reliability while reducing manual business processes.',
      'Optimized MySQL queries, backend logic, and application performance, resulting in faster page/API response times and a smoother user experience.',
      'Collaborated with team members to troubleshoot bugs, test features, and deliver production-ready enhancements, contributing to more reliable, maintainable, and scalable web applications.',
    ],
  },
  {
    company: 'Amazon',
    role: 'Associate Data Operation',
    place: 'Pune, Maharashtra',
    period: 'March 2025 – April 2025',
    points: [
      'Implemented and monitored various data compliance frameworks using SQL, ensuring adherence to regulatory and internal data governance standards.',
      'Wrote and optimized complex SQL queries to extract, validate, and analyze large datasets, supporting compliance reporting and audit requirements.',
      'Reviewed and validated image and video data for Amazon Robotics fulfillment operations, accurately identifying stowing actions, product locations, and inventory-related information according to defined SOPs.',
      'Audited 10,000+ frames with a focus on accuracy, consistency, and adherence to quality standards, achieving 98%+ annotation/validation accuracy.',
    ],
  },
  {
    company: 'Codec Technologies',
    role: 'Software Developer Intern',
    place: 'Pune, Maharashtra',
    period: 'Dec 2024 – March 2025',
    points: [
      'Developed responsive and reusable React.js components using JavaScript (ES6+), HTML, CSS, and modern UI practices to build user-friendly web applications.',
      'Integrated RESTful APIs with frontend applications, implementing dynamic data rendering, form handling, validation, and state management for interactive user experiences.',
      'Improved application usability and performance by optimizing component structure, API calls, reusable code, and responsive layouts, reducing development effort and improving maintainability.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'ai-resume-coach',
    title: 'AI Resume & Interview Coach',
    year: '2026',
    genre: 'AI • LLM • Full-Stack',
    logline: 'An AI-powered platform generating structured learning paths and chapter content leveraging Google Gemini API.',
    stack: ['Node.js', 'Express', 'React', 'PostgreSQL', 'Google Gemini API'],
    build: [
      'Developed an AI-powered platform that generates structured learning paths and chapter content based on user input, leveraging LLM integration with the Google Gemini API.',
      'Designed and implemented RESTful APIs using Node.js and Express to manage course generation workflows and integrate with external AI and YouTube APIs.',
    ],
    features: [
      'LLM integration with Google Gemini API',
      'Structured learning paths & chapter generation',
      'Course generation workflow orchestration',
      'External AI & YouTube API integrations',
      'Full-stack PostgreSQL, Express & React architecture',
    ],
    metrics: [
      { value: 'Gemini AI', label: 'LLM engine integration' },
      { value: '100%', label: 'automated chapter generation' },
      { value: 'RESTful', label: 'Node.js & Express API' },
      { value: 'PostgreSQL', label: 'relational data persistence' },
      { value: '2026', label: 'production release' },
    ],
    github: 'https://github.com/EngineerGajanan22/ai-resume-coach-api',
    palette: { from: '#1a0524', via: '#63137e', to: '#09050d', accent: '#d946ef' },
    motif: 'shield',
  },
  {
    id: 'e-commerce-platform',
    title: 'Shopify-Inspired E-Commerce Platform',
    year: '2026',
    genre: 'Full-Stack • E-Commerce • MERN',
    logline: 'A full-stack e-commerce platform with responsive browsing, cart management, and centralized Redux state.',
    stack: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB'],
    build: [
      'Developed a full-stack Shopify-inspired e-commerce platform using React.js, Redux Toolkit, Node.js, and Express.js, implementing responsive product browsing, cart management, and shopping workflows.',
      'Engineered reusable frontend components and centralized state management with Redux Toolkit, improving application scalability, maintainability, and user experience.',
    ],
    features: [
      'Shopify-inspired responsive shopping workflows',
      'Interactive cart management & product browsing',
      'Centralized state management with Redux Toolkit',
      'Modular RESTful API with Node.js & Express.js',
      'Scalable document database schema in MongoDB',
    ],
    metrics: [
      { value: 'MERN', label: 'full-stack architecture' },
      { value: 'Redux', label: 'centralized state management' },
      { value: 'End-to-End', label: 'cart & product workflows' },
      { value: 'Modular', label: 'reusable component architecture' },
      { value: '2026', label: 'platform release' },
    ],
    github: 'https://github.com/EngineerGajanan22',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'product-item-hub',
    title: 'Product & Item Hub — Modern RESTful CRUD',
    year: '2026',
    genre: 'RESTful API • Inventory • Docker',
    logline: 'A RESTful CRUD application for managing products and nested inventory items with containerized Docker workflow.',
    stack: ['C#', 'JavaScript', 'CSS', 'HTML', 'Docker'],
    build: [
      'Developed a RESTful CRUD application for managing products and nested inventory items with search, creation, deletion, and quantity management functionality.',
      'Implemented structured API-based data operations and responsive interfaces to streamline product and inventory management workflows.',
    ],
    features: [
      'Nested inventory item tracking & quantity control',
      'Complete RESTful CRUD data operations',
      'Real-time search, creation, update & deletion',
      'Docker containerization for consistent deployment',
      'Responsive interface for inventory management',
    ],
    metrics: [
      { value: 'CRUD', label: 'structured RESTful API' },
      { value: 'Docker', label: 'containerized environment' },
      { value: 'Nested', label: 'product & item tracking' },
      { value: 'C# / JS', label: 'backend logic & dynamic UI' },
      { value: '2026', label: 'production release' },
    ],
    github: 'https://github.com/EngineerGajanan22',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'cyber-rafting',
    title: 'Web Developer',
    org: 'Cyber Rafting',
    detail: 'Engineered production PHP/Laravel MVC applications, built RESTful APIs, and optimized MySQL queries for business reliability.',
    laurel: 'Production Role',
  },
  {
    id: 'amazon-operations',
    title: '10,000+ Frames Audited',
    org: 'Amazon',
    detail: 'Achieved 98%+ annotation and validation accuracy for Amazon Robotics fulfillment operations with SQL compliance monitoring.',
    laurel: '98%+ Accuracy',
  },
  {
    id: 'genai-cert',
    title: 'Generative AI Professional',
    org: 'Certified Professional',
    detail: 'Certified in Generative AI technologies, LLM architecture, prompt engineering, and intelligent system integrations.',
    laurel: 'AI Certification',
  },
  {
    id: 'be-degree',
    title: 'BE in IT — 8.07 GPA',
    org: 'Sinhgad Institute of Technology',
    detail: 'Graduated in Information Technology covering OOP, Data Structures, Algorithms, Database Management, and SDLC.',
    laurel: 'Bachelor Degree',
  },
  {
    id: 'diploma-score',
    title: 'Diploma — 87.77%',
    org: 'Gramin Polytechnic, Nanded',
    detail: 'Earned Diploma in Computer Engineering with distinction, mastering foundational computing and software engineering.',
    laurel: '87.77% Score',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Certification', name: 'Certified Generative AI Professional (2025)', link: 'https://github.com/EngineerGajanan22' },
  { issuer: 'Certification', name: 'Python Programming (2025)', link: 'https://github.com/EngineerGajanan22' },
  { issuer: 'Certification', name: 'Foundation In Web Development (2024)', link: 'https://github.com/EngineerGajanan22' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'PHP & JavaScript core',
    skills: [
      { name: 'PHP', mono: 'Ph', note: 'Primary' },
      { name: 'JavaScript', mono: 'Js', note: 'Primary' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'C/C++', mono: 'C+' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JSON', mono: 'Jn' },
      { name: 'XML', mono: 'Xm' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libs',
    subtitle: 'MVC & modern stacks',
    skills: [
      { name: 'Laravel', mono: 'Lv', note: 'Primary' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'React.js', mono: 'Re' },
      { name: 'Flask', mono: 'Fl' },
      { name: 'Django', mono: 'Dj' },
      { name: 'Bootstrap', mono: 'Bs' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational & NoSQL',
    skills: [
      { name: 'MySQL', mono: 'My', note: 'Primary' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
    ],
  },
  {
    id: 'ai-tools',
    title: 'AI & Dev Tools',
    subtitle: 'Modern engineering toolkit',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'ChatGPT', mono: 'Gpt' },
      { name: 'Claude', mono: 'Cl' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Docker', mono: 'Dk' },
    ],
  },
  {
    id: 'core-concepts',
    title: 'Core Concepts',
    subtitle: 'Software foundations',
    skills: [
      { name: 'REST APIs', mono: 'Ap', note: 'Core' },
      { name: 'OOP', mono: 'Oo', note: 'Core' },
      { name: 'Laravel MVC', mono: 'Mv' },
      { name: 'Data Structures', mono: 'Ds' },
      { name: 'Algorithms', mono: 'Al' },
      { name: 'SDLC', mono: 'Sd' },
      { name: 'CRUD Operations', mono: 'Cr' },
    ],
  },
  {
    id: 'professional',
    title: 'Professional',
    subtitle: 'Delivery & collaboration',
    skills: [
      { name: 'Problem Solving', mono: 'Ps' },
      { name: 'Teamwork', mono: 'Tw' },
      { name: 'Communication', mono: 'Cm' },
      { name: 'Time Management', mono: 'Tm' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  PHP: ['Cyber Rafting — Web Developer', 'Laravel MVC & backend logic'],
  Laravel: ['Cyber Rafting — Laravel MVC', 'CRUD, Auth & Business Logic'],
  MySQL: ['Cyber Rafting — Query optimization', 'Amazon — SQL compliance'],
  JavaScript: ['Codec Technologies — React components', 'Cyber Rafting — Frontend logic'],
  HTML: ['Cyber Rafting', 'Foundation In Web Development (2024)'],
  CSS: ['Responsive layouts', 'Bootstrap & custom styling'],
  'React.js': ['Codec Technologies Intern', 'E-Commerce Platform', 'AI Resume Coach'],
  'Node.js': ['AI Resume & Interview Coach', 'E-Commerce Platform'],
  'Express.js': ['RESTful API routing', 'Course generation workflows'],
  Docker: ['Product & Item Hub', 'Containerized deployment'],
  'REST APIs': ['Cyber Rafting', 'AI Resume Coach', 'Product & Item Hub'],
  OOP: ['Laravel MVC Architecture', 'BE in Information Technology'],
  Git: ['Version control workflows', 'GitHub repository management'],
  'C/C++': ['Sinhgad Institute Of Technology', 'Gramin Polytechnic'],
  PostgreSQL: ['AI Resume & Interview Coach database'],
  MongoDB: ['Shopify-Inspired E-Commerce Platform'],
  'Data Structures': ['BE in IT coursework', 'Algorithm optimization'],
  'Generative AI': ['Certified Generative AI Professional 2025', 'Google Gemini API Integration'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2018 – 2021',
    synopsis: 'Diploma in Computer Engineering at Gramin Polytechnic, Vishnupuri, Nanded — graduating with 87.77%.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Computer Engineering Diploma',
        description: 'Completed Diploma in Computer Engineering at Gramin Polytechnic, Vishnupuri, Nanded with 87.77%.',
        tags: ['Diploma', 'Computer Engineering', '87.77%'],
        runtime: 'Aug 2018 – Aug 2021',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Engineering in IT',
    period: '2021 – 2024',
    synopsis: 'Bachelor of Engineering in Information Technology at Sinhgad Institute Of Technology And Science, Pune.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Degree',
        description: 'BE in Information Technology at Sinhgad Institute Of Technology And Science, achieving 8.07 GPA.',
        tags: ['BE in IT', 'GPA 8.07', 'Sinhgad'],
        runtime: 'Sept 2021 – June 2024',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'Core Fundamentals',
        description: 'Mastered Object-Oriented Programming, Data Structures, Algorithms, MySQL, and Software Development Life Cycle.',
        tags: ['OOP', 'DSA', 'SQL', 'SDLC'],
        runtime: '3 Years',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Early Industry Impact',
    period: '2024 – 2025',
    synopsis: 'Frontend engineering at Codec Technologies followed by data operations at Amazon.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Software Developer Intern',
        description: 'Developed responsive React.js components, integrated RESTful APIs, and optimized frontend architecture at Codec Technologies.',
        tags: ['Codec Technologies', 'React.js', 'REST APIs'],
        runtime: 'Dec 2024 – March 2025',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'Amazon Data Operations',
        description: 'Monitored SQL compliance frameworks and audited 10,000+ frames with 98%+ accuracy for Amazon Robotics fulfillment operations.',
        tags: ['Amazon', 'SQL Compliance', 'Amazon Robotics', '98%+ Accuracy'],
        runtime: 'March 2025 – April 2025',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'Web Developer — Laravel',
    period: '2025 – 2026',
    synopsis: 'Web Developer at Cyber Rafting — building production PHP/Laravel applications and optimizing performance.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Cyber Rafting',
        description: 'Developed and maintained PHP/Laravel web applications using Laravel MVC, MySQL, JavaScript, HTML, and CSS with full CRUD operations.',
        tags: ['PHP', 'Laravel MVC', 'MySQL', 'Authentication'],
        runtime: 'Dec 2025 – Sept 2026',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'API & Query Optimization',
        description: 'Built RESTful APIs and optimized MySQL queries and backend logic, delivering faster response times and reliable data flow.',
        tags: ['REST APIs', 'MySQL Optimization', 'Performance'],
        runtime: 'Cyber Rafting',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: 'The 2026 Originals',
    period: 'Now Streaming',
    synopsis: 'Three full-scale productions — AI Resume Coach, Shopify-Inspired E-Commerce, and Product & Item Hub.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'AI Resume & Coach',
        description: 'AI-powered platform generating structured learning paths with Google Gemini API, Node.js, and React.',
        tags: ['Google Gemini API', 'Node.js', 'React', 'PostgreSQL'],
        runtime: '2026',
        palette: violet,
      },
      {
        code: 'S05 E02',
        title: 'E-Commerce Platform',
        description: 'Full-stack Shopify-inspired shopping platform with React.js, Redux Toolkit, Node.js, Express, and MongoDB.',
        tags: ['React.js', 'Redux Toolkit', 'MongoDB'],
        runtime: '2026',
        palette: amber,
      },
      {
        code: 'S05 E03',
        title: 'Product & Item Hub',
        description: 'RESTful CRUD management for products and nested inventory with C#, JavaScript, and Docker.',
        tags: ['C#', 'RESTful CRUD', 'Docker'],
        runtime: '2026',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary Stack', title: 'PHP & Laravel', detail: 'Laravel MVC • RESTful APIs • MySQL', palette: crimson },
  { label: 'The AI Original', title: 'AI Resume Coach', detail: 'Google Gemini API • Node.js • React', palette: violet },
  { label: 'Production Role', title: 'Cyber Rafting', detail: 'Web Developer (PHP, Laravel) • 2025–2026', palette: ocean },
  { label: 'Amazon Robotics', title: '10,000+ Frames', detail: '98%+ Accuracy • SQL Compliance', palette: amber },
  { label: 'Academic High', title: 'BE in IT (8.07)', detail: 'Sinhgad Institute Of Technology', palette: jade },
  { label: 'Certified AI', title: 'Generative AI', detail: 'Certified Generative AI Professional 2025', palette: crimson },
  { label: 'Full-Stack MERN', title: 'E-Commerce Hub', detail: 'React.js • Redux Toolkit • MongoDB', palette: amber },
  { label: 'Containerized', title: 'Product & Item Hub', detail: 'RESTful CRUD • C# • Docker', palette: ocean },
  { label: 'Frontend Role', title: 'Codec Technologies', detail: 'Software Developer Intern • React.js', palette: jade },
  { label: 'Foundational Score', title: 'Diploma 87.77%', detail: 'Gramin Polytechnic • Computer Engineering', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'BE · Information Technology',
    lines: ['Sinhgad Institute Of Technology And Science, Pune', 'Sept 2021 – June 2024'],
    chips: ['GPA 8.07', 'Diploma 87.77%'],
  },
  {
    kicker: 'Skills',
    title: 'PHP & Laravel Core.',
    lines: ['JavaScript, SQL (MySQL), HTML, CSS, C/C++', 'Laravel, Node.js, Express.js, React.js, Docker, REST APIs'],
    chips: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'React.js', 'Node.js', 'Docker'],
  },
  {
    kicker: 'Experience',
    title: 'Cyber Rafting',
    lines: ['Web Developer (PHP, Laravel) · Dec 2025 – Sept 2026', 'Laravel MVC · Reusable Modules · CRUD · Auth · Business Logic', 'RESTful API Integration & MySQL Query Optimization'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: [
      'AI Resume & Interview Coach — Google Gemini API & Node.js',
      'E-Commerce Platform — React.js, Redux Toolkit & MongoDB',
      'Product & Item Hub — Modern RESTful CRUD & Docker',
    ],
  },
  {
    kicker: 'Amazon',
    title: 'Data Operations',
    lines: ['Associate Data Operation · Amazon · March – April 2025', 'Audited 10,000+ frames with 98%+ accuracy for Amazon Robotics', 'SQL compliance monitoring & regulatory data standards'],
  },
  {
    kicker: 'Certifications',
    title: 'Professional Credentials',
    lines: [
      'Certified Generative AI Professional (2025)',
      'Python Programming (2025)',
      'Foundation In Web Development (2024)',
    ],
  },
  {
    kicker: 'Current Mission',
    title: 'Building Scalable Web Apps',
    lines: ['Developing reliable, secure, and maintainable software', 'Laravel MVC · RESTful APIs · Modern Web Applications'],
  },
];

export type ProfileId = 'gajanan' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'gajanan',
    name: 'Gajanan',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Experience & education', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
