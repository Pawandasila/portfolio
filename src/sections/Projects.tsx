import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
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

// type CardRefArray = Array<HTMLDivElement | null>;

const portfolioProjects: Project[] = [
  {
    company: "Personal Projects",
    year: "2024",
    title: "Flash AI - AI-powered Content Generator",
    results: [
      { title: "Enhanced user experience by 40%" },
      {
        title:
          "AI model capable of generating results with better optimization",
      },
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
    year: "2024",
    title: "Docify",
    results: [
      { title: "A platform Like a Ms word" },
      { title: "Features include uploading image , saving and editing" },
      { title: "Focuses on improving  efficiency." },
    ],
    link: "https://job-portal-five-lime.vercel.app/",
    image: job,
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
    link: "https://job-portal-five-lime.vercel.app/",
    image: job,
  },

];

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const projectCardVariants: Variants = {
  hidden: { y: 80, opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      delay: i * 0.2,
    },
  }),
  hover: {
    y: -8,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

const resultItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.3 + i * 0.1,
    },
  }),
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.4,
    },
  },
  hover: {
    scale: 1.08,
    transition: { duration: 0.5 },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
      delay: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    backgroundColor: "#10b981",
    transition: { duration: 0.2 },
  },
  tap: { scale: 0.95 },
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
        <motion.div
          className="flex items-center justify-center"
          variants={projectCardVariants}
          custom={0}
        >
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real World Results
          </p>
        </motion.div>

        <motion.h2
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mt-6 font-bold"
          variants={projectCardVariants}
          custom={1}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-center text-white/70 max-w-2xl mx-auto mt-4"
          variants={projectCardVariants}
          custom={2}
        >
          Check out my latest projects and see the impact I can make for your
          business.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {portfolioProjects.map((project, index) => {
            const cardRef = useRef<HTMLDivElement | null>(null);
            const isCardInView = useInView(cardRef, {
              once: true,
              amount: 0.2,
            });

            return (
              <motion.div
                key={index}
                ref={cardRef}
                className="bg-gray-800 rounded-3xl pl-3 pt-3 pr-3 pb-[-10px] shadow-lg relative overflow-hidden flex flex-col h-full group"
                variants={projectCardVariants}
                initial="hidden"
                animate={isCardInView ? "visible" : "hidden"}
                whileHover="hover"
                custom={index}
              >
                <div className="p-6 flex-1">
                  <motion.div
                    className="flex"
                    initial={{ opacity: 0, y: -10 }}
                    animate={
                      isCardInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: -10 }
                    }
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="bg-gradient-to-r  from-emerald-300 to-sky-400 inline-flex gap-1 font-bold uppercase tracking-widest text-xs text-transparent bg-clip-text rounded-3xl mb-4">
                      <p className="">{project.company}</p>
                      <span>&bull;</span>
                      <p>{project.year}</p>
                    </div>
                  </motion.div>

                  <motion.h3
                    className="font-serif text-xl md:text-2xl font-bold mt-2"
                    initial={{ opacity: 0, y: -5 }}
                    animate={
                      isCardInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: -5 }
                    }
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.hr
                    className="border-t border-white/15 my-4"
                    initial={{ width: "0%" }}
                    animate={isCardInView ? { width: "100%" } : { width: "0%" }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  />

                  <motion.ul className="flex flex-col gap-3 mt-4">
                    {project.results.map((result, idx) => (
                      <motion.li
                        key={idx}
                        className="flex gap-2 text-sm text-white/70"
                        variants={resultItemVariants}
                        initial="hidden"
                        animate={isCardInView ? "visible" : "hidden"}
                        custom={idx}
                      >
                        <motion.div
                          initial={{ scale: 0, rotate: -45 }}
                          animate={
                            isCardInView
                              ? { scale: 1, rotate: 0 }
                              : { scale: 0, rotate: -45 }
                          }
                          transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
                        >
                          <CheckIcon className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                        </motion.div>
                        <span>{result.title}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                <div className="relative mt-auto border-emerald-200">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center mb-2"
                  >
                    <motion.button
                      className="bg-white text-gray-950 h-12 w-[300px] rounded-3xl inline-flex items-center justify-center gap-2 font-semibold transition-colors hover:bg-emerald-300 z-10 relative mb-6"
                      variants={buttonVariants}
                      initial="hidden"
                      animate={isCardInView ? "visible" : "hidden"}
                      whileHover="hover"
                      whileTap="tap"
                      custom={index}
                    >
                      <ArrowUp size={15} />
                      View Project
                    </motion.button>
                  </a>
                  <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden rounded-xl">
                    <motion.div
                      variants={imageVariants}
                      initial="hidden"
                      animate={isCardInView ? "visible" : "hidden"}
                      whileHover="hover"
                      className="h-full w-full"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="object-cover transition-transform duration-500 rounded-xl h-full w-full"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
