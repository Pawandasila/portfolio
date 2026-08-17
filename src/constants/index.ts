const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 2,
    name: "Clients",
    type: "clients",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    name: "wifi",
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    name: "search",
    img: "/icons/search.svg",
  },
  {
    id: 3,
    name: "control-center",
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Finder",
    icon: "/images/finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Safari (AI Chat)",
    icon: "/images/safari.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Terminal",
    icon: "/images/terminal.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact & About",
    icon: "/images/contact.png",
    canOpen: true,
  },
  {
    id: "resume",
    name: "Resume",
    icon: "/images/pages.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Trash",
    icon: "/images/trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const skills = {
  coreLanguages: [
    { name: "JavaScript", proficiency: "Advanced", years: "2+ years" },
    { name: "TypeScript", proficiency: "Intermediate", years: "1+ years" },
    { name: "Python", proficiency: "Intermediate", years: "1.5+ years" },
    { name: "Java", proficiency: "Intermediate", years: "1+ years" },
    { name: "C++", proficiency: "Intermediate", years: "1.5+ years" },
  ],
  frontendTech: [
    { name: "React.js", proficiency: "Advanced", years: "2+ years" },
    { name: "Next.js", proficiency: "Intermediate", years: "1+ years" },
    { name: "HTML5/CSS3", proficiency: "Advanced", years: "2+ years" },
    { name: "Tailwind CSS", proficiency: "Intermediate", years: "1+ years" },
  ],
  backendTech: [
    { name: "Node.js", proficiency: "Intermediate", years: "1+ years" },
    { name: "Express.js", proficiency: "Intermediate", years: "1+ years" },
    { name: "REST APIs", proficiency: "Advanced", years: "1.5+ years" },
    { name: "Supabase / Firebase", proficiency: "Intermediate", years: "1+ years" },
  ],
  databases: [
    { name: "PostgreSQL", proficiency: "Intermediate", years: "1+ years" },
    { name: "MongoDB", proficiency: "Intermediate", years: "1+ years" },
    { name: "MySQL", proficiency: "Intermediate", years: "8 months" },
  ],
  devOpsTools: [
    { name: "Git/GitHub", proficiency: "Advanced", years: "2+ years" },
    { name: "Vercel", proficiency: "Intermediate", years: "1+ years" },
    { name: "Docker", proficiency: "Intermediate", years: "1+ years" },
    { name: "AWS", proficiency: "Intermediate", years: "1+ years" },
  ],
};

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/pawandasila",
  },
  {
    id: 2,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/dasila0612",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/pawan-dasila-92483b251/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

// CLIENT ENGAGEMENTS
export const CLIENT_ENGAGEMENTS = [
  {
    id: "vestrostyles",
    title: "Vestrostyles — High-Intent Fashion Drops & E-Commerce",
    name: "Vestrostyles",
    company: "Vestrostyles",
    role: "Full Stack Developer",
    engagementValue: "₹25,000",
    trafficImpact: "400+ daily active users",
    domain: "E-Commerce / Wearable Art",
    year: "2026",
    status: "Live & Active",
    link: "https://www.vestrostyles.com/",
    image: "/images/projects/ai-learning.png",
    shortDescription:
      "Full-stack e-commerce infrastructure for limited-edition wearable art drops with Supabase, Razorpay server verification, Delhivery rates, and store credits.",
    description: `
## Client Background & Project Overview

**Vestrostyles** is a high-intent fashion label specializing in "wearable art" through exclusive, limited-edition releases known as drops. 

As a **Full Stack Developer**, I designed and implemented the platform's core infrastructure:
- **Database & Authentication**: Configured Supabase for scalable PostgreSQL data persistence, user sessions, and real-time inventory locking during flash drops.
- **Payment Gateway**: Integrated Razorpay with secure server-to-server webhook verification to prevent double-charging and drop-cart dropouts.
- **Logistics & Shipping**: Engineered dynamic shipping rate calculations via Delhivery API integration with real-time pincode serviceability checks.
- **Store Credit & Returns**: Built a custom exchange and refund store credit model to streamline post-purchase customer service.
    `,
    results: [
      { title: "Engagement Value", metric: "₹25,000", icon: "dollar-sign" },
      { title: "Traffic Impact", metric: "400+ DAU", icon: "users" },
      { title: "Payment Integrity", metric: "100% Verified", icon: "shield-check" },
      { title: "Logistics Sync", metric: "Delhivery API", icon: "truck" },
    ],
    tags: ["Supabase", "Razorpay", "Next.js", "Delhivery API", "PostgreSQL", "Tailwind CSS"],
    highlights: [
      "Implemented full Supabase backend with role-based auth & inventory state locking",
      "Integrated Razorpay server-to-server signature verification for secure payments",
      "Automated Delhivery courier rate calculations based on weight & delivery zones",
      "Created custom wallet / store-credit return & exchange pipeline",
    ],
  },
  {
    id: "rss",
    title: "Rashtriya Seva Sangh (RSS) — National Community Portal",
    name: "Rashtriya Seva Sangh (RSS)",
    company: "Rashtriya Seva Sangh",
    role: "Frontend Developer",
    engagementValue: "₹20,000",
    trafficImpact: "1,000+ daily active users",
    domain: "National Community & Volunteering",
    year: "2026",
    status: "Live & Active",
    link: "https://joinrss.org.in/",
    image: "/images/projects/rss.png",
    shortDescription:
      "High-traffic frontend portal across 15+ states with digital ID card verification, mobile navigation overhaul, and multi-year tenure payments.",
    description: `
## Client Background & Project Overview

The **Rashtriya Seva Sangh (RSS)** is a voluntary organization focused on national unity and community service, operating across over 15 states in India.

As a **Frontend Developer**, my core contributions focused on scaling the frontend experience:
- **Mobile Experience**: Redesigned mobile navigation and implemented sticky sidebars for fast accessibility across devices.
- **Digital ID Card Verification**: Developed a real-time verification system allowing coordinators and members to validate credentials on the spot.
- **Volunteer Onboarding & Tenure Payments**: Refined registration and tenure-renewal payment flows supporting centralized multi-year membership pricing models.
    `,
    results: [
      { title: "Engagement Value", metric: "₹20,000", icon: "dollar-sign" },
      { title: "Traffic Impact", metric: "1,000+ DAU", icon: "users" },
      { title: "Regional Reach", metric: "15+ States", icon: "globe" },
      { title: "ID Verification", metric: "Instant QR/ID", icon: "award" },
    ],
    tags: ["Next.js", "React.js", "ID Verification", "Payment Gateway", "Tailwind CSS", "Mobile UX"],
    highlights: [
      "Engineered digital ID card verification system with dynamic badge generation",
      "Revamped mobile navigation and responsive sticky layouts for 1,000+ daily users",
      "Created multi-tier volunteer registration and tenure-renewal payment interfaces",
    ],
  },
  {
    id: "road2srcc",
    title: "Road2SRCC — EdTech & CUET Entrance Platform",
    name: "Road2SRCC",
    company: "Road2SRCC",
    role: "Full Stack Developer",
    engagementValue: "₹15,000",
    trafficImpact: "300+ daily active students",
    domain: "EdTech / Competitive Exams",
    year: "2026",
    status: "Live & Active",
    link: "https://road2srcc.in/",
    image: "/images/projects/road2srcc.png",
    shortDescription:
      "EdTech platform for students preparing for SRCC & CUET with practice mock tests and custom anti-credential sharing protection.",
    description: `
## Client Background & Project Overview

**Road2SRCC** is a specialized EdTech platform designed to assist students in preparing for admission to prestigious institutions like the Shri Ram College of Commerce (SRCC).

As a **Full Stack Developer**, I delivered:
- **Digital Product Delivery**: Structured fast content delivery for mock tests, interactive questions, and curated course study materials.
- **Anti-Credential Sharing Security**: Built custom account monitoring and active session validation to prevent unauthorized credential sharing.
- **Student Performance Dashboard**: Developed real-time score calculation and detailed solution analysis.
    `,
    results: [
      { title: "Engagement Value", metric: "₹15,000", icon: "dollar-sign" },
      { title: "Daily Students", metric: "300+ Active", icon: "users" },
      { title: "Account Security", metric: "Zero Sharing", icon: "lock" },
      { title: "Mock Tests", metric: "Interactive", icon: "book-open" },
    ],
    tags: ["Next.js", "Full Stack", "EdTech", "Auth & Security", "MongoDB", "Tailwind CSS"],
    highlights: [
      "Engineered interactive test simulation engine for timed CUET mock exams",
      "Developed proprietary session-locking mechanism preventing simultaneous account logins",
      "Optimized digital asset delivery for practice papers and video courses",
    ],
  },
  {
    id: "thefithab",
    title: "TheFithab — Gym & Health Fitness Ecosystem",
    name: "TheFithab",
    company: "TheFithab",
    role: "Full Stack Website",
    engagementValue: "₹17,000",
    trafficImpact: "100+ daily active users",
    domain: "Health & Fitness",
    year: "2026",
    status: "Live & Active",
    link: "https://thefithab.vercel.app/",
    image: "/images/projects/yoga.png",
    shortDescription:
      "Full-stack wellness & fitness gym platform training verified clients across engineering, healthcare, and corporate sectors.",
    description: `
## Client Background & Project Overview

**Thefithab** is an Indian fitness gym and wellness brand that trains verified clients across demanding sectors including Engineering, Healthcare, and Pharma.

As the **Full Stack Developer**, I delivered:
- **Enterprise Client Matching**: Implemented specialized onboarding workflows for corporate employees and individual clients.
- **Interactive Schedule & Bookings**: Built a responsive session scheduler with slot management.
- **Performance & Branding**: Engineered a modern aesthetic with smooth animations and lightning-fast load times.
    `,
    results: [
      { title: "Engagement Value", metric: "₹17,000", icon: "dollar-sign" },
      { title: "Traffic Impact", metric: "100+ DAU", icon: "users" },
      { title: "Lead Conversion", metric: "+45%", icon: "trending-up" },
      { title: "Mobile Speed", metric: "98/100", icon: "zap" },
    ],
    tags: ["Next.js", "Full Stack", "Tailwind CSS", "Fitness Tech", "Vercel", "Framer Motion"],
    highlights: [
      "Built modern corporate gym booking and trainer allocation interface",
      "Designed responsive mobile-first experience with dynamic member reviews",
      "Deployed on Vercel with edge caching and SEO optimization",
    ],
  },
  {
    id: "cfm-practice",
    title: "CFM Practice — Commerce Assessment Platform",
    name: "CFM Practice",
    company: "Commerce For Me (CFM)",
    role: "Frontend Developer",
    engagementValue: "₹10,000",
    trafficImpact: "400+ daily active students",
    domain: "EdTech / Commerce",
    year: "2026",
    status: "Live & Active",
    shortDescription:
      "Responsive educational interface for CFM students to practice interactive assessments and mock accounting examinations.",
    description: `
## Client Background & Project Overview

Developed the frontend interface for the **CFM (Commerce For Me)** practice platform. 

The project focused on creating an intuitive, distraction-free environment for students to engage with educational content and practice assessments:
- **Interactive Assessment UI**: Designed question palettes, timer widgets, and formula helpers.
- **Responsive Layout**: Ensured seamless interaction on budget smartphones, tablets, and laptops.
- **Instant Result Analytics**: Created visual progress charts and accuracy breakdowns.
    `,
    results: [
      { title: "Engagement Value", metric: "₹10,000", icon: "dollar-sign" },
      { title: "Daily Active Students", metric: "400+ Active", icon: "users" },
      { title: "Test Completion Rate", metric: "94%", icon: "award" },
      { title: "Latency", metric: "<100ms UI", icon: "zap" },
    ],
    tags: ["React.js", "Tailwind CSS", "EdTech", "Interactive UI", "State Management"],
    highlights: [
      "Constructed modular quiz components supporting multiple question formats",
      "Implemented client-side auto-save to prevent data loss on unstable connections",
      "Engineered clean accessible UI components tailored for students",
    ],
  },
  {
    id: "rivixo",
    title: "Rivixo — Digital Growth & Marketing Platform",
    name: "Rivixo",
    company: "Rivixo.in",
    role: "Landing Page Developer",
    engagementValue: "₹5,000",
    trafficImpact: "100+ daily active users",
    domain: "Digital Marketing & AI Growth",
    year: "2026",
    status: "Live & Active",
    link: "https://www.rivixo.in/",
    image: "/images/projects/rivixo.png",
    shortDescription:
      "High-performance landing page showcasing a 4-step growth process (Discovery, Strategy, Execution, Scaling) with AI integrations.",
    description: `
## Client Background & Project Overview

**Rivixo.in** is a digital growth and marketing platform that provides web development and AI technology integrations for businesses ranging from local shops to global startups.

As a **Landing Page Developer**, I developed a high-performance landing page designed to optimize conversion rates:
- **4-Step Growth Process**: Interactive visual walkthrough of Discovery, Strategy, Execution, and Scaling.
- **High Conversion Layout**: Clear CTAs, social proof badges, and dynamic service cards.
- **Speed & SEO**: Optimized assets for sub-second page loads.
    `,
    results: [
      { title: "Engagement Value", metric: "₹5,000", icon: "dollar-sign" },
      { title: "Traffic Impact", metric: "100+ DAU", icon: "users" },
      { title: "Conversion Lift", metric: "+35%", icon: "trending-up" },
      { title: "SEO Score", metric: "100/100", icon: "award" },
    ],
    tags: ["Next.js", "React.js", "Landing Page", "CRO", "Figma", "Digital Marketing"],
    highlights: [
      "Created an interactive showcase of the 4-step business growth roadmap",
      "Translated custom Figma illustrations into lightweight SVG React components",
      "Optimized layout shift (CLS: 0) and initial render time for mobile ad traffic",
    ],
  },
  {
    id: "rojmarg",
    title: "Rojmarg — Indian Recruitment & Job Matching Platform",
    name: "Rojmarg",
    company: "Rojmarg",
    role: "Landing Page Developer",
    engagementValue: "₹5,000",
    trafficImpact: "100+ daily active users",
    domain: "Recruitment & HR Tech",
    year: "2026",
    status: "Live & Active",
    link: "https://www.rojmarg.com/",
    image: "/images/projects/rojmarg.png",
    shortDescription:
      "Specialized landing page connecting verified talent with over 10,000 companies across Engineering, Healthcare, and Pharma.",
    description: `
## Client Background & Project Overview

**Rojmarg** is an Indian recruitment platform that connects verified talent with over 10,000 companies across sectors like Engineering, Healthcare, and Pharma.

As a **Landing Page Developer**, I delivered:
- **Enterprise Solutions Landing Page**: Targeted presentation for employers and recruiters looking for rapid placement cycles.
- **Job Seeker Funnel**: Clean profile matching overview and lead generation forms.
- **Sector Showcase**: Filterable sector showcases for engineering, pharma, and healthcare.
    `,
    results: [
      { title: "Engagement Value", metric: "₹5,000", icon: "dollar-sign" },
      { title: "Traffic Impact", metric: "100+ DAU", icon: "users" },
      { title: "Network", metric: "10,000+ Cos", icon: "briefcase" },
      { title: "Page Speed", metric: "99/100", icon: "zap" },
    ],
    tags: ["Next.js", "React.js", "Recruitment", "Talent Matching", "SEO", "Responsive UI"],
    highlights: [
      "Delivered high-converting corporate employer landing page",
      "Structured dual-audience (job seeker vs employer) navigation flow",
      "Built responsive layout with optimized forms and trust indicators",
    ],
  },
];

// WORK LOCATION FOR FINDER
const WORK_LOCATION = [
  {
    id: "clients-folder",
    type: "clients",
    name: "Client Engagements",
    icon: "/icons/work.svg",
    kind: "folder",
    children: CLIENT_ENGAGEMENTS,
  },
  {
    id: "projects-folder",
    type: "projects",
    name: "Personal Projects",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
      {
        id: "trendtide",
        year: "2025",
        title: "TrendTide - YouTube Analytics & AI Content Creation",
        name: "TrendTide",
        shortDescription:
          "AI-powered YouTube content creation and analytics platform for creators",
        description:
          "A comprehensive platform that empowers YouTube creators with AI-driven tools for thumbnail generation, content creation, competitor analysis, and performance insights.",
        results: [
          { title: "AI Thumbnails Generated", metric: "500K+", icon: "image" },
          { title: "Active Creators", metric: "15K+", icon: "users" },
        ],
        github: "https://github.com/Pawandasila/youtube-analytics",
        image: "/images/projects/Thumbnail.png",
        tags: ["Next.js", "TypeScript", "Neon DB", "Drizzle ORM", "AI/ML APIs"],
        status: "Live",
      },
      {
        id: "finora",
        year: "2025",
        title: "Finora - AI Finance Dashboard",
        name: "Finora",
        shortDescription:
          "AI-powered personal finance management platform with automated transaction tracking",
        description:
          "A comprehensive financial management platform that empowers users with AI-driven receipt scanning, automated recurring transactions, and intelligent spending insights.",
        results: [
          { title: "Transactions Processed", metric: "10K+", icon: "credit-card" },
          { title: "User Savings Tracked", metric: "₹2.5M+", icon: "trending-up" },
        ],
        link: "https://finance-dashboard-frontend-beta.vercel.app",
        github: "https://github.com/Pawandasila/finance-dashboard-frontend",
        image: "/images/projects/dashboard_.png",
        tags: ["Node.js", "TypeScript", "Express.js", "MongoDB", "React", "Gemini AI"],
        status: "Live",
      },
      {
        id: "pixora",
        year: "2025",
        title: "Pixora - AI Image Editor",
        name: "Pixora",
        shortDescription:
          "Professional web-based AI image editor with advanced neural enhancement",
        description:
          "A comprehensive AI-powered image editing platform that brings professional-grade tools to the browser with background removal, upscaling, and object erasure.",
        results: [
          { title: "AI Models Integrated", metric: "15+", icon: "brain" },
          { title: "Image Processing", metric: "<3s", icon: "zap" },
        ],
        link: "https://pixora-image-editor.vercel.app",
        github: "https://github.com/Pawandasila/ai-image-editor",
        image: "/images/projects/pixoraEditor.png",
        tags: ["Next.js 14", "React", "TypeScript", "TailwindCSS", "Replicate API"],
        status: "Live",
      },
      {
        id: "postboy",
        year: "2025",
        title: "PostBoy - AI-Powered API Testing Platform",
        name: "PostBoy",
        shortDescription:
          "Modern API testing workspace with AI-assisted JSON payloads",
        description:
          "Built an end-to-end API testing platform blending traditional REST/WebSocket tooling with AI automation.",
        results: [
          { title: "AI Payload Builder", metric: "70% faster", icon: "sparkles" },
          { title: "Docs Export", metric: "<5s build", icon: "book-open" },
        ],
        link: "https://postman-pearl.vercel.app/",
        github: "https://github.com/Pawandasila/postman",
        image: "/images/projects/postboy.png",
        tags: ["Next.js 15", "React 19", "TypeScript", "PostgreSQL", "Prisma"],
        status: "Live",
      },
      {
        id: "parity-cli",
        year: "2025",
        title: "Parity CLI – Environment Consistency Enforcement Tool",
        name: "Parity CLI",
        shortDescription:
          "Zero-config CLI to eliminate environment mismatch issues across teams and CI",
        description:
          "Built Parity CLI, a developer experience tool that enforces environment consistency across local machines and CI pipelines.",
        results: [
          { title: "Community Adoption", metric: "300+ downloads", icon: "download" },
          { title: "Distribution", metric: "npm registry", icon: "package" },
        ],
        link: "https://www.npmjs.com/package/parity-ci",
        github: "https://github.com/Pawandasila/parity-cli",
        image: "/images/projects/parity.png",
        tags: ["Node.js", "TypeScript", "CLI Tools", "CI/CD", "YAML", "npm"],
        status: "Live",
      },
    ],
  },
  {
    id: "internships-folder",
    type: "internships",
    name: "Internships",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
      {
        id: "iit-kgp",
        company: "City Future Lab IIT Kharagpur",
        name: "City Future Lab (IIT Kharagpur)",
        title: "City Future Lab IIT Kharagpur — Full Stack Intern",
        position: "Full Stack Developer Intern",
        duration: "Sept 2025 - Oct 2025",
        location: "Remote",
        image: "/images/IIT.png",
        description: `
**Full Stack Developer Intern** at *City Future Lab IIT Kharagpur*

During my time here, I:
* **Designed and delivered** backend services powering a cloud-based geospatial dashboard using Next.js and Node.js, reducing data load latency by 30%.
* **Owned** backend workflows including API integration, authentication, data persistence, and deployment in an Agile environment.
* **Implemented** secure backend pipelines using Firebase Auth, Firestore, and Cloud Storage with CI/CD automation.
        `,
        tags: ["Next.js", "Node.js", "Geospatial", "Firebase", "Agile"],
      },
      {
        id: "greenfuel",
        company: "GreenFuelEnergy",
        name: "GreenFuelEnergy",
        title: "GreenFuelEnergy — Frontend Developer Intern",
        position: "Frontend Developer Intern",
        duration: "Feb 2025 - Jul 2025",
        location: "Remote",
        image: "/images/Greenfuels.png",
        description: `
**Frontend Developer Intern** at *GreenFuelEnergy*

My key contributions included:
* **Built and shipped** a production-grade enterprise platform used by 200+ concurrent users.
* **Integrated** OAuth2 and JWT-based authentication with role-based access control, maintaining 99.9% uptime.
* **Owned** features end-to-end including UI implementation, deployment, and monitoring.
        `,
        tags: ["React.js", "OAuth2", "Enterprise UI", "REST APIs"],
      },
    ],
  },
];

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About Pawan",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "about-pawan.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/profile.jpg",
      description: [
        "Hey! I'm Pawan Dasila 👋, a Full Stack Developer & AI engineer who specializes in building scalable web applications and high-converting client products.",
        "Experienced across E-commerce (Supabase/Razorpay), EdTech, recruitment systems, and AI dashboard applications.",
        "Passionate about pixel-perfect macOS-grade UI design, resilient architectures, and delivering real business value for clients.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Pawan_Dasila_Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: { activeCategory: "Client Work" },
  },
  contact: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  resume: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  safari: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  photos: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  terminal: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  txtfile: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  imgfile: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  "project-detail": {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  "about-mac": {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
};

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  skills,
  socials,
  photosLinks,
  gallery,
  INITIAL_Z_INDEX,
  WINDOW_CONFIG,
};
