import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { ArrowUpRight, CheckIcon, ExternalLink, Calendar, Code, Sparkles, TrendingUp } from "lucide-react";

// Mock images for demo - replace with your actual images
const mockImages = {
  ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=faces",
  job: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop&crop=faces",
  yoga: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=faces",
  aiInterviewImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&crop=faces",
  aiLearning: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=faces"
};

interface Result {
  title: string;
  metric?: string;
}

interface Project {
  company: string;
  year: string;
  title: string;
  description: string;
  results: Result[];
  link: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

const portfolioProjects: Project[] = [
  {
    company: "Full-Stack Development",
    year: "2024",
    title: "FlashAI - Enterprise Content Generation Platform",
    description: "AI-powered content generation platform revolutionizing enterprise workflows with intelligent automation.",
    results: [
      { title: "Scaled to serve 1000+ enterprise users", metric: "1000+" },
      { title: "Improved user experience efficiency", metric: "40%" },
      { title: "Reduced content generation time", metric: "60%" },
      { title: "Increased user engagement", metric: "75%" },
    ],
    link: "https://flash-ai-pro.vercel.app/",
    image: mockImages.ai,
    tags: ["React", "Node.js", "AI/ML", "TypeScript"],
    featured: true,
  },
  {
    company: "Full-Stack Development",
    year: "2025",
    title: "YogaLife - Digital Wellness Ecosystem",
    description: "Comprehensive wellness platform connecting instructors and students through immersive digital experiences.",
    results: [
      { title: "Active wellness community", metric: "500+" },
      { title: "HD video streaming infrastructure", metric: "99.9%" },
      { title: "Admin dashboard with analytics", metric: "Real-time" },
    ],
    link: "https://yoga-frontend-wheat.vercel.app/",
    image: mockImages.yoga,
    tags: ["React", "Video Streaming", "Analytics", "AWS"],
  },
  {
    company: "AI/ML Development",
    year: "2025",
    title: "InterviewAce - AI-Powered Career Preparation",
    description: "Intelligent interview simulator leveraging NLP to provide personalized career preparation experiences.",
    results: [
      { title: "Natural language processing accuracy", metric: "85%" },
      { title: "Real-time feedback system", metric: "< 1s" },
      { title: "Performance analytics dashboard", metric: "15+" },
    ],
    link: "https://ai-interview-liart-five.vercel.app",
    image: mockImages.aiInterviewImage,
    tags: ["Python", "NLP", "React", "Machine Learning"],
    featured: true,
  },
  {
    company: "Full-Stack Development",
    year: "2025",
    title: "CareerHub - Professional Job Matching Platform",
    description: "Intelligent job matching platform connecting talent with opportunities through advanced algorithms.",
    results: [
      { title: "Advanced search capabilities", metric: "10+" },
      { title: "Resume parsing accuracy", metric: "95%" },
      { title: "Job-candidate compatibility", metric: "45%" },
    ],
    link: "https://job-portal-snowy-six.vercel.app",
    image: mockImages.job,
    tags: ["React", "Express", "MongoDB", "Elasticsearch"],
  },
  {
    company: "AI/ML Development",
    year: "2025",
    title: "SkillSprint - Adaptive Learning Management",
    description: "AI-driven personalized learning platform with adaptive content recommendation and blockchain certification.",
    results: [
      { title: "Personalized learning paths", metric: "AI-driven" },
      { title: "Adaptive content recommendations", metric: "ML-powered" },
      { title: "Blockchain certification system", metric: "Automated" },
    ],
    link: "https://skill-sprint-blond.vercel.app/",
    image: mockImages.aiLearning,
    tags: ["AI/ML", "Blockchain", "React", "Python"],
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.15
    }
  }
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const projectCardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      damping: 15,
      stiffness: 100,
      duration: 0.6
    }
  }
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative group ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
      variants={projectCardVariants}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {project.featured && (
        <div className="absolute -top-3 -right-3 z-10">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2 shadow-lg">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
        </div>
      )}

      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 h-full flex flex-col relative">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: isHovered ? 1.15 : 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
          
          {/* Floating tags */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-1">
            {project.tags.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-xs rounded-full border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Year badge */}
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full">
            <Calendar className="w-3 h-3 text-emerald-400" />
            <span className="text-white text-xs font-medium">{project.year}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Code className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wide">
              {project.company}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-2 leading-tight">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Results with metrics */}
          <div className="space-y-2 mb-6">
            {project.results.map((result, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-2 text-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
              >
                <CheckIcon className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{result.title}</span>
                {result.metric && (
                  <span className="ml-auto text-emerald-400 font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {result.metric}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-md border border-gray-700/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-[1px] rounded-xl group-hover:from-emerald-400 group-hover:to-blue-400 transition-all duration-300">
              <div className="bg-gray-900 rounded-xl px-4 py-3 flex items-center justify-center gap-2 font-semibold text-white hover:bg-transparent transition-all duration-300">
                <ExternalLink className="w-4 h-4" />
                <span>View Project</span>
                <motion.div
                  animate={{ x: isHovered ? 4 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection: React.FC = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.1
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      
      <motion.div
        ref={sectionRef}
        className="container px-4 mx-auto relative z-10"
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wide">
              Portfolio Showcase
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured Projects &{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore my technical expertise through innovative full-stack applications, AI/ML solutions, 
            and scalable platforms that drive measurable business impact and user engagement.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-400 mb-4">
            Interested in working together?
          </p>
          <motion.button
            className="bg-gradient-to-r from-emerald-500 to-blue-500 px-8 py-3 rounded-full text-white font-semibold hover:from-emerald-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;