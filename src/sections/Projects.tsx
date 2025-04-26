import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { ArrowUp, CheckIcon } from "lucide-react";

import ai from "@/assets/images/ai.png";
import job from "@/assets/images/job.png";
import yoga from "@/assets/images/Yoga.png";
import aiInterviewImage from "@/assets/images/ai_interview.png"

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
    company: "Personal Projects",
    year: "2024",
    title: "Flash AI - AI-powered Content Generator",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "AI model capable of generating results with better optimization" },
      { title: "Better results with a live preview feature" },
    ],
    link: "https://flash-ai-pro.vercel.app/",
    image: ai,
  },
  {
    company: "Personal Projects",
    year: "2025",
    title: "Online Yoga Portal - A Virtual Wellness Platform",
    results: [
      { title: "Better user experience with interactive sessions" },
      { title: "Recorded video lectures for classes" },
      { title: "Admin Panel supported" },
    ],
    link: "https://yoga-frontend-wheat.vercel.app/",
    image: yoga,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "AI Interview Platform - Liart",
    results: [
      { title: "An AI-powered platform to simulate real interview experiences." },
      { title: "Features include mock interviews, real-time feedback, and performance analysis." },
      { title: "Focuses on helping users practice and improve their interview skills." },
    ],
    link: "https://ai-interview-liart-five.vercel.app",
    image: aiInterviewImage, 
  },  
  {
    company: "Personal Project",
    year: "2025-current",
    title: "Online Job Portal - Naukari Marg",
    results: [
      { title: "A platform designed to find job" },
      { title: "Features include job listings, resume uploads,etc" },
      { title: "Focuses on improving job search efficiency." },
    ],
    link: "https://job-portal-snowy-six.vercel.app",
    image: job,
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
            Real World Results
          </motion.p>
          <motion.h2 
            className="font-serif text-3xl md:text-4xl lg:text-5xl mt-6 font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-white/70 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Check out my latest projects and see the impact I can make for your business.
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