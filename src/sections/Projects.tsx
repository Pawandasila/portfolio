import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Calendar,
  Code,
  TrendingUp,
  Star,
  Github,
  Eye,
  Check,
  X,
  Users,
  Activity,
  Award,
  Zap,
  Globe,
  ChevronRight,
  Play,
  Sparkles,
} from "lucide-react";

import aiInterviewImage from "@/assets/images/ai_interview.png";
import aiLearning from "@/assets/images/ai-learning.png";
import jobImage from "@/assets/images/job.png";
import yogaImage from "@/assets/images/Yoga.png";
import ai from "@/assets/images/ai.png";
import photobooth from "@/assets/images/photobooth.png";
import financeDashboard from "@/assets/images/dashboard_.png";
import ThumbnailGenerator from "@/assets/images/Thumbnail-generator.png";
import pixoraEditor from "@/assets/images/pixoraEditor.png";
import spotify from "@/assets/images/spotify.jpg";
import postboy from "@/assets/images/postboy.png";

import snypse from "@/assets/images/snypse.png";

import {
  EnhancedProjectCardProps,
  Project,
  ProjectModalProps,
  Result,
} from "./types";

const portfolioProjects: Project[] = [
  {
    company: "AI/ML Development",
    year: "2025",
    title: "SkillSprint - Adaptive Learning Management",
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
    image: aiLearning,
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
    company: "Full-Stack Development",
    year: "2025",
    title: "Naukari Marg - Professional Job Matching Platform",
    shortDescription: "Intelligent job matching platform with ML algorithms",
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
    image: jobImage,
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
    company: "AI/ML Development",
    year: "2025",
    title: "InterviewAce - AI-Powered Career Preparation",
    shortDescription: "Intelligent interview simulator with real-time feedback",
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
    image: aiInterviewImage,
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
    company: "Full-Stack Development",
    year: "2025",
    title: "YogaLife - Digital Wellness Ecosystem",
    shortDescription:
      "Comprehensive wellness platform connecting instructors and students",
    description:
      "Comprehensive wellness platform connecting instructors and students through immersive digital experiences and real-time streaming. Features HD video streaming, analytics dashboard, and community features.",
    results: [
      { title: "Active wellness community", metric: "7 users", icon: "users" },
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
    image: yogaImage,
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
    company: "Full-Stack Development",
    year: "2024",
    title: "FlashAI - Enterprise Content Generation Platform",
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
    image: ai,
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
    company: "Full-Stack Development",
    year: "2025",
    title: "Photobooth - Recall your memories",
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
    image: photobooth,
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
    company: "Full-Stack Development",
    year: "2025",
    title: "TrendTide - YouTube Analytics & AI Content Creation",
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
    image: ThumbnailGenerator,
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
      "AI Thumbnail Generator with multiple style variations",
      "Thumbnail Search & Competitor Analysis",
      "AI Content Generator for titles, descriptions, and scripts",
      "Outlier Analysis for viral content insights",
      "Advanced YouTube Analytics Dashboard",
      "Multi-tier subscription plans (Free, Pro, Business)",
      "Real-time processing with Inngest workflows",
      "Responsive design with dark/light theme support",
    ],
  },
  {
    company: "Full-Stack Development",
    year: "2025",
    title: "Finora - AI Finance Dashboard",
    shortDescription:
      "AI-powered personal finance management platform with automated transaction tracking and intelligent insights",
    description:
      "A comprehensive financial management platform that empowers users with AI-driven receipt scanning, automated recurring transactions, real-time analytics, and intelligent spending insights. Features include advanced financial reporting, transaction categorization, budget tracking, and automated email reports with seamless cloud integrations.",
    results: [
      { title: "Transactions Processed", metric: "10K+", icon: "credit-card" },
      { title: "AI Receipts Scanned", metric: "2.5K+", icon: "scan" },
      { title: "Monthly Reports Generated", metric: "500+", icon: "file-text" },
      { title: "User Savings Tracked", metric: "₹2.5M+", icon: "trending-up" },
    ],
    link: "https://finance-dashboard-frontend-beta.vercel.app",
    github: "https://github.com/Pawandasila/finance-dashboard-frontend",
    image: financeDashboard,
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
      "Resend Email",
      "Recharts",
      "Tailwind CSS",
      "Zod Validation",
      "Node Cron",
      "Vercel",
    ],
    status: "Live",
    teamSize: 1,
    duration: "45 days",
    highlights: [
      "AI-powered receipt scanning with Google Gemini for automatic transaction extraction",
      "Automated recurring transaction processing with smart scheduling",
      "Real-time financial analytics dashboard with interactive charts",
      "Intelligent expense categorization and budget tracking",
      "Monthly financial report generation with email automation",
      "Multi-currency support with precise decimal handling (paisa/cents)",
      "Secure JWT authentication with Passport.js integration",
      "RESTful API design with comprehensive error handling",
      "Responsive design with dark/light theme support",
      "Cloud file storage for receipt management",
      "Background job processing for automated tasks",
      "Comprehensive input validation and type safety",
    ],
  },
  {
    company: "Full-Stack Development",
    year: "2025",
    title: "Pixora - AI Image Editor",
    shortDescription:
      "Professional web-based AI image editor with advanced neural enhancement, background removal, and real-time canvas editing capabilities",
    description:
      "A comprehensive AI-powered image editing platform that brings professional-grade tools to the browser. Features include intelligent background removal, AI-powered upscaling, object removal, image enhancement, and a full-featured canvas editor with layer support. Built with modern web technologies and multiple AI integrations for seamless creative workflows.",
    results: [
      { title: "AI Models Integrated", metric: "15+", icon: "brain" },
      { title: "Image Processing Speed", metric: "<3s", icon: "zap" },
      { title: "Project Organization", metric: "Folder-Based", icon: "folder" },
      { title: "Canvas Tools", metric: "20+", icon: "palette" },
    ],
    link: "https://pixora-image-editor.vercel.app",
    github: "https://github.com/Pawandasila/ai-image-editor",
    image: pixoraEditor, // You'll need to add this image
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
      "Stability AI",
      "Real-time DB",
      "Canvas API",
      "File Upload",
      "Image Processing",
      "PWA Ready",
      "Vercel",
    ],
    status: "Live",
    teamSize: 1,
    duration: "60 days",
    highlights: [
      "AI-powered background removal with precision edge detection",
      "Super-resolution upscaling up to 4x with detail preservation",
      "Magic object removal using intelligent content-aware fill",
      "Real-time canvas editor with layers, filters, and professional tools",
      "Project organization system with folder-based management",
      "Drag-and-drop file uploads with multiple format support",
      "Responsive design optimized for desktop and mobile editing",
      "Real-time database with Convex for instant project syncing",
      "Secure authentication with Clerk and user management",
      "Multiple AI model integrations via Replicate API",
      "Advanced image processing with client-side canvas manipulation",
      "SEO-optimized landing page with smooth scroll navigation",
      "Glassmorphism UI design with modern animations",
      "Cloud storage integration for seamless file management",
      "Professional-grade editing tools comparable to desktop software",
      "Free tier with credit-based usage system",
    ],
  },
  {
    company: "Full-Stack Development",
    year: "2025",
    title: "Synapse - Enterprise Hackathon Platform",
    shortDescription:
      "Full-stack hackathon platform with hybrid database, real-time collaboration, and automated event management",
    description:
      "Architected a scalable enterprise hackathon platform using Next.js, Node.js, Azure SQL, and MongoDB. Features hybrid database design, real-time team collaboration, automated certificate generation, and WebSocket-based chat. Deployed microservices on Azure App Service with horizontal scaling, serving 100+ users across 10 concurrent events and handling 1000+ API requests/minute with p95 latency under 200ms.",
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
      {
        title: "Event Management Overhead Reduced",
        metric: "70%",
        icon: "trending-up",
      },
      {
        title: "Platform Uptime",
        metric: "99.9%",
        icon: "check",
      },
    ],
    link: "https://synapse-frontend-beryl.vercel.app/",
    github: "https://github.com/Pawandasila/synapse-frontend-1",
    image: snypse,
    tags: [
      "Next.js",
      "Node.js",
      "Azure SQL",
      "MongoDB",
      "JWT",
      "WebSocket",
      "Microservices",
      "Azure App Service",
      "TypeScript",
      "Real-time Collaboration",
    ],
    status: "Live",
    teamSize: 1,
    duration: "2 months",
    highlights: [
      "Hybrid database architecture (Azure SQL + MongoDB)",
      "Real-time team collaboration and chat",
      "Automated certificate generation",
      "Microservices deployed with horizontal scaling",
      "99.9% uptime and p95 latency <200ms",
      "Reduced event management overhead by 70%",
    ],
  },
  {
    company: "Full-Stack Development",
    year: "2024",
    title: "Spotify Clone - Microservices Architecture",
    shortDescription:
      "Distributed Spotify-like music platform with microservices, caching, and optimized performance",
    description:
      "Designed and deployed a distributed Spotify clone using Node.js microservices on AWS EC2, orchestrated with PM2 for high availability. Integrated Redis caching and MongoDB query optimization to reduce database load by 60% and improve throughput by 45%. Achieved 99.9% uptime and sub-200ms API response times.",
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
      {
        title: "Throughput Improved",
        metric: "45%",
        icon: "award",
      },
    ],
    link: "http://13.53.170.11:3000",
    github: "https://github.com/Pawandasila/spotify",
    image: spotify,
    tags: [
      "Node.js",
      "AWS EC2",
      "MongoDB",
      "Redis",
      "PM2",
      "Microservices",
      "TypeScript",
      "REST API",
    ],
    status: "Live",
    teamSize: 1,
    duration: "1 month",
    highlights: [
      "Distributed microservices architecture on AWS EC2",
      "PM2 orchestration for process management",
      "Redis caching layer for fast data access",
      "MongoDB query optimization",
      "99.9% uptime and sub-200ms API response times",
      "Reduced database load by 60%",
      "Improved throughput by 45%",
    ],
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "PostBoy - AI-Powered API Testing Platform",
    shortDescription:
      "Modern API testing workspace with AI-assisted payloads, intelligent naming, and instant documentation.",
    description:
      "Built an end-to-end API testing platform using Next.js 15 and React 19 that blends traditional REST/WebSocket tooling with AI automation. Implemented Google Gemini-powered JSON generation, contextual request naming, and one-click documentation export, all backed by Prisma and PostgreSQL with secure authentication. Deployed to Vercel with analytics, environment management, and a polished shadcn/ui interface to streamline collaborative API development.",
    results: [
      {
        title: "AI Payload Builder",
        metric: "70% faster request drafting",
        icon: "sparkles",
      },
      {
        title: "Documentation Export",
        metric: "<5s markdown generation",
        icon: "book-open",
      },
      {
        title: "Authentication Methods",
        metric: "Email + Google + GitHub",
        icon: "shield",
      },
      {
        title: "Deployment",
        metric: "Live on Vercel (Global CDN)",
        icon: "cloud",
      },
    ],
    link: "https://postman-pearl.vercel.app/",
    github: "https://github.com/Pawandasila/postman",
    image: postboy,
    tags: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
      "Vercel",
      "Shadcn/ui",
      "Tailwind CSS",
      "TanStack Query",
      "Zod",
      "Google Gemini",
      "AI Automation",
      "REST API",
    ],
    status: "Live",
    teamSize: 1,
    duration: "3 months",
    highlights: [
      "AI-powered JSON payload generation and naming suggestions",
      "Automatic API documentation export to markdown",
      "Next.js 15 + React 19 architecture with server components",
      "Prisma ORM with PostgreSQL and Vercel Postgres integration",
      "Authentication via email/password, Google, and GitHub using Better Auth",
      "Modern shadcn/ui interface with dark/light theming",
      "Deployed on Vercel with analytics and environment management",
    ],
  },
];

const getResultIcon = (iconName: string) => {
  const icons = {
    users: Users,
    activity: Activity,
    award: Award,
    zap: Zap,
    play: Play,
    check: Check,
  };
  const IconComponent = icons[iconName as keyof typeof icons] || TrendingUp;
  return <IconComponent className="w-4 h-4" />;
};

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-slate-900 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-slate-700/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="h-80 overflow-hidden rounded-t-3xl">
                <img
                  src={
                    typeof project.image === "string"
                      ? project.image
                      : project.image.src
                  }
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              </div>

              <motion.button
                onClick={onClose}
                className="absolute top-6 right-6 p-3 bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>

              {project.featured && (
                <div className="absolute top-6 left-6">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-3 shadow-xl">
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2 bg-emerald-500/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <motion.div
                    className="w-3 h-3 bg-white rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-white text-sm font-semibold">
                    Active
                  </span>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 flex gap-3">
                <div className="bg-slate-800/80 backdrop-blur-sm px-3 py-2 rounded-full">
                  <span className="text-white text-sm font-medium">
                    Team: {project.teamSize}
                  </span>
                </div>
                <div className="bg-slate-800/80 backdrop-blur-sm px-3 py-2 rounded-full">
                  <span className="text-white text-sm font-medium">
                    {project.duration}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider">
                      {project.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.year}</span>
                  </div>
                </div>

                <h2 className="text-4xl font-bold text-white leading-tight">
                  {project.title}
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  Key Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.highlights?.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800/70 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-emerald-400" />
                        <span className="text-slate-300 text-sm font-medium">
                          {highlight}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  Key Results
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.results.map((result: Result, idx: number) => (
                    <motion.div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800/70 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-500/20 rounded-lg">
                          {result.icon ? (
                            getResultIcon(result.icon)
                          ) : (
                            <TrendingUp className="w-4 h-4" />
                          )}
                        </div>
                        <span className="text-slate-300 text-sm font-medium">
                          {result.title}
                        </span>
                      </div>
                      {result.metric && (
                        <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                          {result.metric}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-400" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag: string, idx: number) => (
                    <motion.span
                      key={idx}
                      className="px-4 py-2 bg-slate-800/60 text-slate-300 text-sm rounded-full border border-slate-700/50 font-medium hover:bg-slate-700/60 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                {project.link && project.link.trim() !== "" && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 px-6 py-4 rounded-xl text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                      <Eye className="w-5 h-5" />
                      Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </motion.a>
                )}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    project.link && project.link.trim() !== ""
                      ? "flex-1"
                      : "w-full"
                  }
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button className="w-full bg-slate-800 hover:bg-slate-700 px-6 py-4 rounded-xl text-white font-semibold transition-all duration-300 border border-slate-700 flex items-center justify-center gap-2 shadow-lg">
                    <Github className="w-5 h-5" />
                    Source Code
                  </button>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const EnhancedProjectCard = ({ project, index }: EnhancedProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="group relative bg-gradient-to-b from-slate-800/90 to-slate-900/90 backdrop-blur-lg rounded-3xl overflow-hidden border border-slate-700/50 hover:border-slate-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl h-[560px] flex flex-col"
        whileHover={{ y: -8, scale: 1.02 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        id="projects"
      >
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <motion.img
            src={
              typeof project.image === "string"
                ? project.image
                : project.image.src
            }
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />

          {project.featured && (
            <div className="absolute top-4 right-4">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-2 shadow-xl backdrop-blur-sm">
                <Star className="w-4 h-4 text-white fill-white" />
              </div>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col h-[320px]">
          <div className="h-[100px] flex flex-col justify-between mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  {project.company}
                </span>
              </div>
              <span className="text-slate-400 text-xs font-medium">
                {project.year}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white leading-tight group-hover:text-emerald-200 transition-colors line-clamp-2 min-h-[56px]">
              {project.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed line-clamp-2">
              {project.shortDescription}
            </p>
          </div>

          <div className="h-[50px] mb-4">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5 h-[30px] overflow-hidden">
              {project.tags.slice(0, 4).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-slate-800/60 text-slate-300 text-xs rounded-full border border-slate-700/50 font-medium hover:border-slate-600 hover:bg-slate-700/60 transition-all duration-300 h-fit"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="px-1 py-1 bg-slate-800/60 text-slate-400 text-xs rounded-full border border-slate-700/50 h-fit">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>
          </div>

          <div className="h-[90px] mb-4">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Key Metrics
            </h4>
            <div className="grid grid-cols-2 gap-2 h-[50px]">
              {project.results.slice(0, 2).map((result, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 bg-slate-800/40 rounded-lg border border-slate-700/30 hover:bg-slate-800/60 transition-all duration-300"
                >
                  <div className="p-1.5 bg-emerald-500/20 rounded-lg flex-shrink-0">
                    {result.icon ? (
                      getResultIcon(result.icon)
                    ) : (
                      <TrendingUp className="w-3 h-3 text-emerald-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-emerald-400 font-bold text-xs truncate">
                      {result.metric}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-auto">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 px-4 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Eye className="w-4 h-4" />
              View Details
            </motion.button>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-slate-800/80 hover:bg-slate-700 rounded-xl text-white transition-all duration-300 border border-slate-700 flex items-center justify-center shadow-lg hover:shadow-slate-800/25 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </motion.div>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export const ProjectsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-900 rounded-full border border-slate-700/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-400 font-semibold text-sm">
              Featured Work
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Projects & Solutions
          </motion.h2>
          <motion.p
            className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Explore my technical expertise through innovative applications and
            scalable solutions that push the boundaries of modern web
            development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {portfolioProjects.map((project, index) => (
            <EnhancedProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
