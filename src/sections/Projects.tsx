import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { ArrowUp, CheckIcon } from "lucide-react";

import ai from "@/assets/images/ai.png";
import job from "@/assets/images/job.png";
import yoga from "@/assets/images/Yoga.png";
import aiInterviewImage from "@/assets/images/ai_interview.png"
import aiLearning from "@/assets/images/ai-learning.png";

interface Result {
  title: string;
}

interface Project {
  company: string;
  year: string;
  title: string;
  results: Result[];
  link: string;
  image: StaticImageData;
}

const portfolioProjects: Project[] = [
  {
    company: "Full-Stack Development",
    year: "2024",
    title: "FlashAI - Enterprise Content Generation Platform",
    results: [
      { title: "Built scalable AI platform serving 1000+ users with 40% improved UX" },
      { title: "Implemented optimized ML models reducing content generation time by 60%" },
      { title: "Developed real-time preview system increasing user engagement by 75%" },
    ],
    link: "https://flash-ai-pro.vercel.app/",
    image: ai,
  },
  {
    company: "Full-Stack Development",
    year: "2025",
    title: "YogaLife - Digital Wellness Ecosystem",
    results: [
      { title: "Architected comprehensive wellness platform with 500+ active users" },
      { title: "Integrated video streaming infrastructure supporting HD quality sessions" },
      { title: "Built robust admin dashboard with analytics and user management" },
    ],
    link: "https://yoga-frontend-wheat.vercel.app/",
    image: yoga,
  },
  {
    company: "AI/ML Development",
    year: "2025",
    title: "InterviewAce - AI-Powered Career Preparation Platform",
    results: [
      { title: "Developed intelligent interview simulator with natural language processing" },
      { title: "Implemented real-time feedback system with 85% accuracy in assessment" },
      { title: "Created comprehensive analytics dashboard tracking performance metrics" },
    ],
    link: "https://ai-interview-liart-five.vercel.app",
    image: aiInterviewImage, 
  },  
  {
    company: "Full-Stack Development",
    year: "2025",
    title: "CareerHub - Professional Job Matching Platform",
    results: [
      { title: "Built comprehensive job portal with advanced search and filtering capabilities" },
      { title: "Implemented secure file upload system with resume parsing technology" },
      { title: "Optimized matching algorithm improving job-candidate compatibility by 45%" },
    ],
    link: "https://job-portal-snowy-six.vercel.app",
    image: job,
  },
  {
    company: "AI/ML Development",
    year: "2025",
    title: "SkillSprint - Adaptive Learning Management System",
    results: [
      { title: "Engineered AI-driven personalized learning platform with course generation" },
      { title: "Integrated machine learning algorithms for adaptive content recommendation" },
      { title: "Developed automated certification system with blockchain verification" },
    ],
    link: "#",
    image: aiLearning,
  },
];

// Optimized animations with staggered children
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const projectCardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring", 
      damping: 12,
      stiffness: 100
    }
  }
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 }
  }
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
    <section
      className="py-16 md:py-24 bg-gray-900 overflow-hidden"
      id="projects"
    >
      <motion.div
        ref={sectionRef}
        className="container px-4 mx-auto"
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div 
          className="text-center mb-12"
          variants={headerVariants}
        >
          <motion.p 
            className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Portfolio Showcase
          </motion.p>
          <motion.h2 
            className="font-serif text-3xl md:text-4xl lg:text-5xl mt-6 font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured Projects & Solutions
          </motion.h2>
          <motion.p 
            className="text-white/70 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore my technical expertise through innovative full-stack applications, AI/ML solutions, and scalable platforms that drive business growth.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-3xl pl-3 pt-3 pr-3 pb-0 shadow-lg relative overflow-hidden flex flex-col h-full group"
              variants={projectCardVariants}
              // Removed duplicate initial/animate as they're controlled by parent
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 } 
              }}
              layout
            >
              <div className="p-6 flex-1">
                <motion.div 
                  className="flex"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-1 font-bold uppercase tracking-widest text-xs text-transparent bg-clip-text rounded-3xl mb-4">
                    <p>{project.company}</p>
                    <span>&bull;</span>
                    <p>{project.year}</p>
                  </div>
                </motion.div>

                <motion.h3 
                  className="font-serif text-xl md:text-2xl font-bold mt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index }}
                >
                  {project.title}
                </motion.h3>

                <motion.hr 
                  className="border-t border-white/15 my-4"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 * index }}
                />

                <ul className="flex flex-col gap-3 mt-4">
                  {project.results.map((result, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex gap-2 text-sm text-white/70"
                      variants={listItemVariants}
                      // Using custom transitions here to avoid lagging with too many animations
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.4 + (idx * 0.1) // Stagger within items
                      }}
                    >
                      <CheckIcon className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                      <span>{result.title}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-auto">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center mb-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <button
                    className="bg-white text-gray-950 h-12 w-full rounded-3xl inline-flex items-center justify-center gap-2 font-semibold transition-colors hover:bg-emerald-300 mb-6"
                  >
                    <motion.div 
                      animate={{ y: [0, -3, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        repeatType: "reverse" 
                      }}
                    >
                      <ArrowUp size={15} />
                    </motion.div>
                    View Project
                  </button>
                </motion.a>
                <motion.div 
                  className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden rounded-xl"
                  variants={imageVariants}
                >
                  <div className="h-full w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-cover rounded-xl h-full w-full"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                      // Using CSS for image hover effect instead of JS animation for better performance
                      style={{
                        transition: "transform 800ms ease-out"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;