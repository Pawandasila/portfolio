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
import yogaImage from "@/assets/images/Yoga.png";
import ai from "@/assets/images/ai.png";
import jobImage from "@/assets/images/job.png";


interface Result {
  title: string;
  metric?: string;
  icon?: string;
}

import type { StaticImageData } from "next/image";

interface Project {
  company: string;
  year: string;
  title: string;
  description: string;
  shortDescription: string;
  results: Result[];
  link: string;
  github: string;
  image: string | StaticImageData;
  tags: string[];
  featured?: boolean;
  status?: "Live" | "In Development" | "Archived";
  teamSize?: number;
  duration?: string;
  highlights?: string[];
}

const portfolioProjects: Project[] = [
  {
    company: "Full-Stack Development",
    year: "2024",
    title: "FlashAI - Enterprise Content Generation Platform",
    shortDescription: "AI-powered content generation platform revolutionizing enterprise workflows",
    description: "AI-powered content generation platform revolutionizing enterprise workflows with intelligent automation and seamless user experiences. Built with modern React architecture and integrated with OpenAI's latest models.",
    results: [
      { title: "Scaleable Production-ready platform", metric: "8 users", icon: "users" },
      { title: "Improved user experience efficiency", metric: "6 active", icon: "activity" },
      { title: "Reduced content generation time", metric: "5 daily", icon: "zap" },
      { title: "Increased user engagement", metric: "9 reviews", icon: "award" },
    ],
    link: "https://flash-ai-pro.vercel.app/",
    github: "https://github.com/Pawandasila/Flash.Ai",
    image: ai,
    tags: ["React", "Node.js", "AI/ML", "TypeScript", "OpenAI"],
    featured: true,
    status: "Live",
    teamSize: 1,
    duration: "3 months",
    highlights: ["Real-time AI content generation", "Enterprise-grade security", "Scalable cloud architecture"],
  },
  {
    company: "Full-Stack Development",
    year: "2025",
    title: "YogaLife - Digital Wellness Ecosystem",
    shortDescription: "Comprehensive wellness platform connecting instructors and students",
    description: "Comprehensive wellness platform connecting instructors and students through immersive digital experiences and real-time streaming. Features HD video streaming, analytics dashboard, and community features.",
    results: [
      { title: "Active wellness community", metric: "7 users", icon: "users" },
      { title: "HD video streaming infrastructure", metric: "5 sessions", icon: "play" },
      { title: "Admin dashboard with analytics", metric: "10 visits", icon: "activity" },
    ],
    link: "https://yoga-frontend-wheat.vercel.app/",
    github: "https://github.com/Pawandasila/yoga-frontend",
    image: yogaImage,
    tags: ["React", "Video Streaming", "Analytics", "AWS", "Redux"],
    status: "Live",
    teamSize: 1,
    duration: "4 months",
    highlights: ["Real-time video streaming", "Analytics dashboard", "Community features"],
  },
  {
    company: "AI/ML Development",
    year: "2025",
    title: "InterviewAce - AI-Powered Career Preparation",
    shortDescription: "Intelligent interview simulator with real-time feedback",
    description: "Intelligent interview simulator leveraging advanced NLP to provide personalized career preparation experiences with real-time feedback. Features voice analysis, behavioral assessments, and personalized improvement recommendations.",
    results: [
      { title: "AI-driven interview simulations", metric: "6 users", icon: "users" },
      { title: "Real-time feedback system", metric: "9 sessions", icon: "activity" },
      { title: "Personalized question generation", metric: "8 active", icon: "zap" },
    ],
    link: "https://ai-interview-liart-five.vercel.app",
    github: "https://github.com/Pawandasila/ai-interview",
    image: aiInterviewImage,
    tags: ["Python", "VAPI", "React", "OpenAI", "Gemini", "NLP"],
    featured: true,
    status: "Live",
    teamSize: 1,
    duration: "2 months",
    highlights: ["Voice recognition", "Real-time feedback", "Personalized coaching"],
  },
  {
    company: "Full-Stack Development",
    year: "2025",
    title: "Naukari Marg - Professional Job Matching Platform",
    shortDescription: "Intelligent job matching platform with ML algorithms",
    description: "Intelligent job matching platform connecting talent with opportunities through advanced algorithms and machine learning. Features smart matching, real-time notifications, and comprehensive analytics.",
    results: [
      { title: "Job seeker profiles and employers profiles", metric: "5 profiles", icon: "users" },
      { title: "Real-time job matching", metric: "7 matches", icon: "zap" },
      { title: "Job-candidate compatibility", metric: "8 users", icon: "award" },
    ],
    link: "https://job-portal-snowy-six.vercel.app",
    github: "https://github.com/Pawandasila/Job-portal",
    image: jobImage,
    tags: ["React", "Express", "MongoDB", "Elasticsearch", "JWT"],
    status: "Live",
    teamSize: 1,
    duration: "3 months",
    highlights: ["Smart job matching", "Real-time notifications", "Advanced search filters"],
  },
  {
    company: "AI/ML Development",
    year: "2025",
    title: "SkillSprint - Adaptive Learning Management",
    shortDescription: "AI-driven personalized learning with blockchain certification",
    description: "AI-driven personalized learning platform with adaptive content recommendation and blockchain-based certification system. Features personalized learning paths, progress tracking, and verified certifications.",
    results: [
      { title: "Personalized learning paths", metric: "6 learners", icon: "users" },
      { title: "Adaptive content recommendations", metric: "9 courses", icon: "award" },
      { title: "Blockchain certification system", metric: "5 verified", icon: "check" },
    ],
    link: "https://skill-sprint-blond.vercel.app/",
    github: "https://github.com/Pawandasila/Online-ai-learning",
    image: aiLearning,
    tags: ["AI/ML", "Blockchain", "React", "Python", "TensorFlow"],
    status: "Live",
    teamSize: 1,
    duration: "4 months",
    highlights: ["Adaptive learning", "Blockchain certificates", "Progress analytics"],
  },
];

// Component Props Interfaces
interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

interface EnhancedProjectCardProps {
  project: Project;
  index: number;
}

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

// Enhanced Modal Component with Dialog
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
            {/* Header with Image */}
            <div className="relative">
              <div className="h-80 overflow-hidden rounded-t-3xl">
                <img
                  src={typeof project.image === 'string' ? project.image : project.image.src}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              </div>
              
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-6 right-6 p-3 bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-6 left-6">
                  <motion.div
                    className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-3 shadow-xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Star className="w-5 h-5 text-white fill-white" />
                  </motion.div>
                </div>
              )}

              {/* Status Badge */}
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2 bg-emerald-500/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <motion.div
                    className="w-3 h-3 bg-white rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-white text-sm font-semibold">{project.status}</span>
                </div>
              </div>

              {/* Project Info Cards */}
              <div className="absolute bottom-6 right-6 flex gap-3">
                <div className="bg-slate-800/80 backdrop-blur-sm px-3 py-2 rounded-full">
                  <span className="text-white text-sm font-medium">Team: {project.teamSize}</span>
                </div>
                <div className="bg-slate-800/80 backdrop-blur-sm px-3 py-2 rounded-full">
                  <span className="text-white text-sm font-medium">{project.duration}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Header Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
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

                <h2 className="text-4xl font-bold text-white leading-tight">{project.title}</h2>
                <p className="text-slate-300 text-lg leading-relaxed">{project.description}</p>
              </div>

              {/* Highlights */}
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
                        <span className="text-slate-300 text-sm font-medium">{highlight}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Results */}
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
                          {result.icon ? getResultIcon(result.icon) : <TrendingUp className="w-4 h-4" />}
                        </div>
                        <span className="text-slate-300 text-sm font-medium">{result.title}</span>
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

              {/* Technologies */}
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

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
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
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
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

// Enhanced Project Card Component
const EnhancedProjectCard = ({ project, index }: EnhancedProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="bg-slate-900/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 group relative"
        whileHover={{ y: -8, scale: 1.02 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
      >
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={typeof project.image === 'string' ? project.image : project.image.src}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          
          {/* Floating Elements */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ 
              background: [
                "linear-gradient(45deg, rgba(16,185,129,0.2) 0%, rgba(59,130,246,0.2) 100%)",
                "linear-gradient(45deg, rgba(59,130,246,0.2) 0%, rgba(16,185,129,0.2) 100%)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4">
              <motion.div
                className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-2 shadow-xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Star className="w-4 h-4 text-white fill-white" />
              </motion.div>
            </div>
          )}

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <div className="flex items-center gap-2 bg-emerald-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-white text-xs font-semibold">{project.status}</span>
            </div>
          </div>

          {/* Project Stats */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Users className="w-3 h-3 text-slate-300" />
              <span className="text-slate-300 text-xs font-medium">Team: {project.teamSize}</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Calendar className="w-3 h-3 text-slate-300" />
              <span className="text-slate-300 text-xs font-medium">{project.duration}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Company Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider">
                {project.company}
              </span>
            </div>
            <span className="text-slate-400 text-sm">{project.year}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white leading-tight group-hover:text-emerald-100 transition-colors">
            {project.title}
          </h3>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-3">
            {project.results.slice(0, 2).map((result, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 bg-slate-800/50 rounded-lg">
                <div className="p-1 bg-emerald-500/20 rounded">
                  {result.icon ? getResultIcon(result.icon) : <TrendingUp className="w-3 h-3 text-emerald-400" />}
                </div>
                <div>
                  <div className="text-emerald-400 font-bold text-xs">{result.metric}</div>
                  <div className="text-slate-400 text-xs">{result.title.split(' ').slice(0, 2).join(' ')}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Preview */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-slate-800/60 text-slate-300 text-xs rounded-md border border-slate-700/50 font-medium"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 bg-slate-800/60 text-slate-400 text-xs rounded-md border border-slate-700/50">
                +{project.tags.length - 3} more
              </span>
            )}
          </div>

          {/* View Project Button */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 px-4 py-3 rounded-xl text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Eye className="w-4 h-4" />
            View Project Details
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </motion.div>

      {/* Modal */}
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
    <section className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Featured Projects &{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Explore my technical expertise through innovative applications and scalable solutions that push the boundaries of modern web development.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <EnhancedProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;