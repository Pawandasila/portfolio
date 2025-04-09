import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { ArrowUp, CheckIcon } from "lucide-react";

import ai from "@/assets/images/ai.png";
import job from "@/assets/images/job.png";
import yoga from "@/assets/images/Yoga.png";

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

// Simplified variants with fewer animations
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const projectCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const ProjectsSection: React.FC = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

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
        <div className="text-center mb-12">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real World Results
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-6 font-bold">
            Featured Projects
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-4">
            Check out my latest projects and see the impact I can make for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-3xl pl-3 pt-3 pr-3 pb-[-10px] shadow-lg relative overflow-hidden flex flex-col h-full group"
              variants={projectCardVariants}
              initial="hidden"
              animate={controls}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-6 flex-1">
                <div className="flex">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-1 font-bold uppercase tracking-widest text-xs text-transparent bg-clip-text rounded-3xl mb-4">
                    <p>{project.company}</p>
                    <span>&bull;</span>
                    <p>{project.year}</p>
                  </div>
                </div>

                <h3 className="font-serif text-xl md:text-2xl font-bold mt-2">
                  {project.title}
                </h3>

                <hr className="border-t border-white/15 my-4" />

                <ul className="flex flex-col gap-3 mt-4">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-white/70">
                      <CheckIcon className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-auto border-emerald-200">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center mb-2"
                >
                  <button
                    className="bg-white text-gray-950 h-12 w-[300px] rounded-3xl inline-flex items-center justify-center gap-2 font-semibold transition-colors hover:bg-emerald-300 mb-6"
                  >
                    <ArrowUp size={15} />
                    View Project
                  </button>
                </a>
                <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden rounded-xl">
                  <div className="h-full w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-cover transition-transform duration-500 rounded-xl h-full w-full hover:scale-105"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;