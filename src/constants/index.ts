const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
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
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "/images/finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "safari", // was "Safari"
    icon: "/images/safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "/images/photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "/images/contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "/images/terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
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
  ],
  databases: [
    { name: "MongoDB", proficiency: "Intermediate", years: "1+ years" },
    { name: "PostgreSQL", proficiency: "Intermediate", years: "8 months" },
    { name: "MySQL", proficiency: "Intermediate", years: "8 months" },
  ],
  devOpsTools: [
    { name: "Git/GitHub", proficiency: "Advanced", years: "2+ years" },
    { name: "Vercel", proficiency: "Intermediate", years: "1+ years" },
    { name: "Docker", proficiency: "Intermediate", years: "1+ years" },
    { name: "AWS", proficiency: "Intermediate", years: "1+ years" },
    { name: "Azure", proficiency: "Intermediate", years: "1+ years" },
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

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  skills,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = [
  {
    id: 1,
    type: "work",
    name: "Internships",
    icon: "/icon/work.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        company: "City Future Lab IIT Kharagpur",
        name: "City Future Lab", // Added for Finder
        position: "Full Stack Developer Intern",
        duration: "Sept 2025 - Oct 2025",
        location: "Remote",
        image: "/images/IIT.png",
        description: `
**Full Stack Developer Intern** at *City Future Lab IIT Kharagpur*

During my time here, I:
* **Designed and delivered** backend services powering a cloud-based geospatial dashboard using Next.js and Node.js, reducing data load latency by 30%.
* **Owned** backend workflows including API integration, authentication, data persistence, and deployment, working across the full SDLC in an Agile environment.
* **Implemented** secure backend pipelines using Firebase Auth, Firestore, and Cloud Storage with CI/CD automation, improving deployment reliability and operational visibility.
        `,
      },
      {
        id: 2,
        company: "GreenFuelEnergy",
        name: "GreenFuelEnergy", // Added for Finder
        position: "Frontend Developer Intern",
        duration: "Feb 2025 - Jul 2025",
        location: "Remote",
        image: "/images/Greenfuels.png",
        description: `
**Frontend Developer Intern** at *GreenFuelEnergy*

My key contributions included:
* **Built and shipped** a production-grade enterprise platform used by 200+ concurrent users, collaborating closely with backend services and APIs.
* **Integrated** OAuth2 and JWT-based authentication with role-based access control, maintaining 99.9% uptime.
* **Owned** features end-to-end, including implementation, backend coordination, deployment, monitoring, and post-release fixes in a fast-paced startup environment.
        `,
      },
    ],
  },
  {
    id: 2,
    type: "about",
    name: "Projects",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        year: "2025",
        title: "SkillSprint - Adaptive Learning Management",
        name: "SkillSprint",
        shortDescription:
          "AI-driven personalized learning with blockchain certification",
        description:
          "AI-driven personalized learning platform with adaptive content recommendation and blockchain-based certification system. Features personalized learning paths, progress tracking, and verified certifications.",
        results: [
          {
            title: "Personalized learning paths",
            metric: "6 learners",
            icon: "users",
          },
          {
            title: "Adaptive content recommendations",
            metric: "9 courses",
            icon: "award",
          },
          {
            title: "Blockchain certification system",
            metric: "5 verified",
            icon: "check",
          },
        ],
        link: "https://skill-sprint-blond.vercel.app/",
        github: "https://github.com/Pawandasila/Online-ai-learning",
        image: "/images/projects/ai-learning.png",
        tags: ["AI/ML", "Blockchain", "React", "Python", "TensorFlow"],
        status: "Live",
        teamSize: 1,
        duration: "4 months",
        highlights: [
          "Adaptive learning",
          "Blockchain certificates",
          "Progress analytics",
        ],
      },
      {
        id: 2,
        year: "2025",
        title: "Naukari Marg - Professional Job Matching Platform",
        name: "Naukari Marg",
        shortDescription:
          "Intelligent job matching platform with ML algorithms",
        description:
          "Intelligent job matching platform connecting talent with opportunities through advanced algorithms and machine learning. Features smart matching, real-time notifications, and comprehensive analytics.",
        results: [
          {
            title: "Job seeker profiles and employers profiles",
            metric: "5 profiles",
            icon: "users",
          },
          { title: "Real-time job matching", metric: "7 matches", icon: "zap" },
          {
            title: "Job-candidate compatibility",
            metric: "8 users",
            icon: "award",
          },
        ],
        link: "https://job-portal-snowy-six.vercel.app",
        github: "https://github.com/Pawandasila/Job-portal",
        image: "/images/projects/job.png",
        tags: ["React", "Express", "MongoDB", "Elasticsearch", "JWT"],
        status: "Live",
        teamSize: 1,
        duration: "3 months",
        highlights: [
          "Smart job matching",
          "Real-time notifications",
          "Advanced search filters",
        ],
      },
      {
        id: 3,
        year: "2025",
        title: "InterviewAce - AI-Powered Career Preparation",
        name: "InterviewAce",
        shortDescription:
          "Intelligent interview simulator with real-time feedback",
        description:
          "Intelligent interview simulator leveraging advanced NLP to provide personalized career preparation experiences with real-time feedback. Features voice analysis, behavioral assessments, and personalized improvement recommendations.",
        results: [
          {
            title: "AI-driven interview simulations",
            metric: "6 users",
            icon: "users",
          },
          {
            title: "Real-time feedback system",
            metric: "9 sessions",
            icon: "activity",
          },
          {
            title: "Personalized question generation",
            metric: "8 active",
            icon: "zap",
          },
        ],
        link: "https://ai-interview-liart-five.vercel.app",
        github: "https://github.com/Pawandasila/ai-interview",
        image: "/images/projects/ai_interview.png",
        tags: ["Python", "VAPI", "React", "OpenAI", "Gemini", "NLP"],
        featured: true,
        status: "Live",
        teamSize: 1,
        duration: "2 months",
        highlights: [
          "Voice recognition",
          "Real-time feedback",
          "Personalized coaching",
        ],
      },
      {
        id: 4,
        year: "2025",
        title: "YogaLife - Digital Wellness Ecosystem",
        name: "YogaLife",
        shortDescription:
          "Comprehensive wellness platform connecting instructors and students",
        description:
          "Comprehensive wellness platform connecting instructors and students through immersive digital experiences and real-time streaming. Features HD video streaming, analytics dashboard, and community features.",
        results: [
          {
            title: "Active wellness community",
            metric: "7 users",
            icon: "users",
          },
          {
            title: "HD video streaming infrastructure",
            metric: "5 sessions",
            icon: "play",
          },
          {
            title: "Admin dashboard with analytics",
            metric: "10 visits",
            icon: "activity",
          },
        ],
        link: "https://yoga-frontend-wheat.vercel.app/",
        github: "https://github.com/Pawandasila/yoga-frontend",
        image: "/images/projects/yoga.png",
        tags: ["React", "Video Streaming", "Analytics", "AWS", "Redux"],
        status: "Live",
        teamSize: 1,
        duration: "4 months",
        highlights: [
          "Real-time video streaming",
          "Analytics dashboard",
          "Community features",
        ],
      },
      {
        id: 5,
        year: "2024",
        title: "FlashAI - Enterprise Content Generation Platform",
        name: "FlashAI",
        shortDescription:
          "AI-powered content generation platform revolutionizing enterprise workflows",
        description:
          "AI-powered content generation platform revolutionizing enterprise workflows with intelligent automation and seamless user experiences. Built with modern React architecture and integrated with OpenAI's latest models.",
        results: [
          {
            title: "Scaleable Production-ready platform",
            metric: "8 users",
            icon: "users",
          },
          {
            title: "Improved user experience efficiency",
            metric: "6 active",
            icon: "activity",
          },
          {
            title: "Reduced content generation time",
            metric: "5 daily",
            icon: "zap",
          },
          {
            title: "Increased user engagement",
            metric: "9 reviews",
            icon: "award",
          },
        ],
        link: "https://flash-ai-pro.vercel.app/",
        github: "https://github.com/Pawandasila/Flash.Ai",
        image: "/images/projects/ai.png",
        tags: ["React", "Node.js", "AI/ML", "TypeScript", "OpenAI"],
        featured: true,
        status: "Live",
        teamSize: 1,
        duration: "3 months",
        highlights: [
          "Real-time AI content generation",
          "Enterprise-grade security",
          "Scalable cloud architecture",
        ],
      },
      {
        id: 6,
        year: "2025",
        title: "Photobooth - Recall your memories",
        name: "Photobooth",
        shortDescription:
          "A platform for capturing and sharing memories through photos",
        description:
          "A platform for capturing and sharing memories through photos and videos. Features include real-time collaboration, cloud storage, and advanced editing tools.",
        results: [
          { title: "Active user base", metric: "7 users", icon: "users" },
          {
            title: "Filters and effects",
            metric: "5 sessions",
            icon: "play",
          },
          {
            title: "Downloadable memories",
            metric: "10 visits",
            icon: "activity",
          },
        ],
        link: "https://photobooth-one-tau.vercel.app/",
        github: "https://github.com/Pawandasila/photobooth",
        image: "/images/projects/photobooth.png",
        tags: ["React", "Nextjs"],
        status: "Live",
        teamSize: 1,
        duration: "10 days",
        highlights: [
          "Filters and effects",
          "Customizable designs",
          "Advanced editing tools",
        ],
      },
      {
        id: 7,
        year: "2025",
        title: "TrendTide - YouTube Analytics & AI Content Creation",
        name: "TrendTide",
        shortDescription:
          "AI-powered YouTube content creation and analytics platform for creators",
        description:
          "A comprehensive platform that empowers YouTube creators with AI-driven tools for thumbnail generation, content creation, competitor analysis, and performance insights. Features include advanced analytics, thumbnail search, outlier analysis, and automated content generation with seamless integrations.",
        results: [
          { title: "AI Thumbnails Generated", metric: "500K+", icon: "image" },
          { title: "Active Creators", metric: "15K+", icon: "users" },
          { title: "Content Pieces Created", metric: "248K+", icon: "edit" },
          { title: "Performance Growth", metric: "98%", icon: "trending-up" },
        ],
        link: "",
        github: "https://github.com/Pawandasila/youtube-analytics",
        image: "/images/projects/Thumbnail.png",
        tags: [
          "Next.js",
          "TypeScript",
          "Clerk Auth",
          "Neon DB",
          "Drizzle ORM",
          "Inngest",
          "Framer Motion",
          "Tailwind CSS",
          "AI/ML APIs",
          "ImageKit",
        ],
        status: "Live",
        teamSize: 1,
        duration: "30 days",
        highlights: [
          "AI Thumbnail Generator",
          "Thumbnail Search & Competitor Analysis",
          "AI Content Generator",
          "Outlier Analysis",
          "Advanced YouTube Analytics",
          "Multi-tier subscription plans",
          "Real-time processing",
          "Responsive design",
        ],
      },
      {
        id: 8,
        year: "2025",
        title: "Finora - AI Finance Dashboard",
        name: "Finora",
        shortDescription:
          "AI-powered personal finance management platform with automated transaction tracking",
        description:
          "A comprehensive financial management platform that empowers users with AI-driven receipt scanning, automated recurring transactions, real-time analytics, and intelligent spending insights. Features include advanced financial reporting, transaction categorization, budget tracking, and automated email reports.",
        results: [
          {
            title: "Transactions Processed",
            metric: "10K+",
            icon: "credit-card",
          },
          { title: "AI Receipts Scanned", metric: "2.5K+", icon: "scan" },
          {
            title: "Monthly Reports Generated",
            metric: "500+",
            icon: "file-text",
          },
          {
            title: "User Savings Tracked",
            metric: "₹2.5M+",
            icon: "trending-up",
          },
        ],
        link: "https://finance-dashboard-frontend-beta.vercel.app",
        github: "https://github.com/Pawandasila/finance-dashboard-frontend",
        image: "/images/projects/dashboard_.png",
        tags: [
          "Node.js",
          "TypeScript",
          "Express.js",
          "MongoDB",
          "React",
          "Redux Toolkit",
          "JWT Auth",
          "Passport.js",
          "Google Gemini AI",
          "Cloudinary",
        ],
        status: "Live",
        teamSize: 1,
        duration: "45 days",
        highlights: [
          "AI-powered receipt scanning",
          "Automated recurring transactions",
          "Real-time analytics",
          "Intelligent expense categorization",
          "Monthly financial reports",
          "Multi-currency support",
        ],
      },
      {
        id: 9,
        year: "2025",
        title: "Pixora - AI Image Editor",
        name: "Pixora",
        shortDescription:
          "Professional web-based AI image editor with advanced neural enhancement",
        description:
          "A comprehensive AI-powered image editing platform that brings professional-grade tools to the browser. Features include intelligent background removal, AI-powered upscaling, object removal, image enhancement, and a full-featured canvas editor with layer support.",
        results: [
          { title: "AI Models Integrated", metric: "15+", icon: "brain" },
          { title: "Image Processing Speed", metric: "<3s", icon: "zap" },
          {
            title: "Project Organization",
            metric: "Folder-Based",
            icon: "folder",
          },
          { title: "Canvas Tools", metric: "20+", icon: "palette" },
        ],
        link: "https://pixora-image-editor.vercel.app",
        github: "https://github.com/Pawandasila/ai-image-editor",
        image: "/images/projects/pixoraEditor.png",
        tags: [
          "Next.js 14",
          "React",
          "TypeScript",
          "Convex",
          "TailwindCSS",
          "Framer Motion",
          "Fabric.js",
          "Clerk Auth",
          "Replicate API",
        ],
        status: "Live",
        teamSize: 1,
        duration: "60 days",
        highlights: [
          "AI background removal",
          "Super-resolution upscaling",
          "Magic object removal",
          "Real-time canvas editor",
          "Project organization system",
        ],
      },
      {
        id: 10,
        year: "2025",
        title: "Synapse - Enterprise Hackathon Platform",
        name: "Synapse",
        shortDescription:
          "Full-stack hackathon platform with hybrid database and real-time collaboration",
        description:
          "Architected a scalable enterprise hackathon platform using Next.js, Node.js, Azure SQL, and MongoDB. Features hybrid database design, real-time team collaboration, automated certificate generation, and WebSocket-based chat.",
        results: [
          {
            title: "Concurrent Events Hosted",
            metric: "10+",
            icon: "award",
          },
          {
            title: "Active Users",
            metric: "100+",
            icon: "users",
          },
          {
            title: "API Requests/min",
            metric: "1000+",
            icon: "zap",
          },
        ],
        link: "https://synapse-frontend-beryl.vercel.app/",
        github: "https://github.com/Pawandasila/synapse-frontend-1",
        image: "/images/projects/snypse.png",
        tags: [
          "Next.js",
          "Node.js",
          "Azure SQL",
          "MongoDB",
          "JWT",
          "WebSocket",
          "Microservices",
        ],
        status: "Live",
        teamSize: 1,
        duration: "2 months",
        highlights: [
          "Hybrid database architecture",
          "Real-time team collaboration",
          "Automated certificate generation",
          "Microservices architecture",
        ],
      },
      {
        id: 11,
        year: "2024",
        title: "Spotify Clone - Microservices Architecture",
        name: "Spotify Clone",
        shortDescription:
          "Distributed Spotify-like music platform with microservices",
        description:
          "Designed and deployed a distributed Spotify clone using Node.js microservices on AWS EC2, orchestrated with PM2 for high availability. Integrated Redis caching and MongoDB query optimization to reduce database load by 60% and improve throughput by 45%.",
        results: [
          {
            title: "Availability",
            metric: "99.9%",
            icon: "check",
          },
          {
            title: "API Response Time",
            metric: "<200ms",
            icon: "zap",
          },
          {
            title: "Database Load Reduced",
            metric: "60%",
            icon: "trending-up",
          },
        ],
        link: "http://13.53.170.11:3000",
        github: "https://github.com/Pawandasila/spotify",
        image: "/images/projects/spotify.jpg",
        tags: [
          "Node.js",
          "AWS EC2",
          "MongoDB",
          "Redis",
          "PM2",
          "Microservices",
          "TypeScript",
        ],
        status: "Live",
        teamSize: 1,
        duration: "1 month",
        highlights: [
          "Distributed microservices",
          "Redis caching",
          "MongoDB query optimization",
          "PM2 orchestration",
        ],
      },
      {
        id: 12,
        year: "2025",
        title: "PostBoy - AI-Powered API Testing Platform",
        name: "PostBoy",
        shortDescription:
          "Modern API testing workspace with AI-assisted payloads",
        description:
          "Built an end-to-end API testing platform using Next.js 15 and React 19 that blends traditional REST/WebSocket tooling with AI automation. Implemented Google Gemini-powered JSON generation, contextual request naming, and one-click documentation export.",
        results: [
          {
            title: "AI Payload Builder",
            metric: "70% faster",
            icon: "sparkles",
          },
          {
            title: "Documentation Export",
            metric: "<5s build",
            icon: "book-open",
          },
          {
            title: "Deployment",
            metric: "Live on Vercel",
            icon: "cloud",
          },
        ],
        link: "https://postman-pearl.vercel.app/",
        github: "https://github.com/Pawandasila/postman",
        image: "/images/projects/postboy.png",
        tags: [
          "Next.js 15",
          "React 19",
          "TypeScript",
          "Prisma",
          "PostgreSQL",
          "Better Auth",
          "Vercel",
        ],
        status: "Live",
        teamSize: 1,
        duration: "3 months",
        highlights: [
          "AI payload generation",
          "API docs export",
          "Next.js 15 + React 19",
          "Better Auth integration",
        ],
      },
      {
        id: 13,
        year: "2025",
        title: "Parity CLI – Environment Consistency Enforcement Tool",
        name: "Parity CLI",
        shortDescription:
          "Zero-config CLI to eliminate environment mismatch issues across teams and CI",
        description:
          "Built Parity CLI, a developer experience tool that enforces environment consistency across local machines and CI pipelines. It validates runtime versions, OS constraints, package managers, environment files, and required variables using a single YAML-based lock file. Designed to prevent common issues like version mismatches, missing .env variables, and mixed package manager usage, while integrating seamlessly into existing workflows and CI systems.",
        results: [
          {
            title: "Community Adoption",
            metric: "300+ downloads",
            icon: "download",
          },
          {
            title: "Setup Time",
            metric: "<2 min",
            icon: "zap",
          },
          {
            title: "Distribution",
            metric: "Published on npm",
            icon: "package",
          },
        ],
        link: "https://www.npmjs.com/package/parity-ci",
        github: "https://github.com/Pawandasila/parity-cli",
        image: "/images/projects/parity.png",
        tags: [
          "Node.js",
          "TypeScript",
          "CLI Tools",
          "Developer Experience",
          "YAML",
          "CI/CD",
          "npm",
        ],
        status: "Live",
        teamSize: 1,
        duration: "2 months",
        highlights: [
          "Runtime & version enforcement (Node/Bun)",
          "YAML-based environment lock file",
          "Interactive env variable fixing",
          "CI-safe checks with --ci flag",
          "Package manager integrity enforcement",
        ],
      },
    ],
  },
];

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/adrian.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/adrian-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/adrian-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/adrian.jpg",
      description: [
        "Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
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
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
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
    data: null,
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
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
