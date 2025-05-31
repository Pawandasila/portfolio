"use client";
import { JSX, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import js from "../assets/icons/icons8-javascript.gif";
import python from "../assets/icons/icons8-python.gif";
import cpp from "../assets/icons/icons8-cpp-64.png";
import java from "../assets/icons/icons8-java.gif";
import html from "../assets/icons/icons8-html5-50.png";
import react from "../assets/icons/icons8-react-100.png";
import next from "../assets/icons/next.jpg";
import nodejs from "../assets/icons/icons8-node-js-50.png";
import expressjs from "../assets/icons/icons8-express-js-50.png";
import mongodb from "../assets/icons/icons8-mongo-db-48.png";
import sql from "../assets/icons/icons8-sql-100.png";
import tailwind from "../assets/icons/icons8-tailwindcss-48.png";
import materialUI from "../assets/icons/icons8-material-ui-48.png";
import git from "../assets/icons/github.svg";
import api from "../assets/icons/api.jpg";
import db from "../assets/icons/db.png";
import system from "../assets/icons/system.jpg";

interface SkillItem {
  name: string;
  icon: string | StaticImageData;
  proficiency: "Expert" | "Advanced" | "Intermediate" | "Beginner";
  years: string;
}

interface SkillsData {
  coreLanguages: SkillItem[];
  frontendTech: SkillItem[];
  backendTech: SkillItem[];
  databases: SkillItem[];
  devOpsTools: SkillItem[];
  aiMlTech: SkillItem[];
}

export const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const skills: SkillsData = {
    coreLanguages: [
      {
        name: "JavaScript",
        icon: js,
        proficiency: "Advanced",
        years: "2+ years",
      },
      {
        name: "TypeScript",
        icon: js,
        proficiency: "Intermediate",
        years: "1+ years",
      },
      {
        name: "Python",
        icon: python,
        proficiency: "Intermediate",
        years: "1.5+ years",
      },
      {
        name: "Java",
        icon: java,
        proficiency: "Intermediate",
        years: "1+ years",
      },
      {
        name: "C++",
        icon: cpp,
        proficiency: "Intermediate",
        years: "1.5+ years",
      },
    ],
    frontendTech: [
      {
        name: "React.js",
        icon: react,
        proficiency: "Advanced",
        years: "2+ years",
      },
      {
        name: "Next.js",
        icon: next,
        proficiency: "Intermediate",
        years: "1+ years",
      },
      {
        name: "HTML5/CSS3",
        icon: html,
        proficiency: "Advanced",
        years: "2+ years",
      },
      {
        name: "Tailwind CSS",
        icon: tailwind,
        proficiency: "Intermediate",
        years: "1+ years",
      },
      {
        name: "Material UI",
        icon: materialUI,
        proficiency: "Intermediate",
        years: "8 months",
      },
    ],
    backendTech: [
      {
        name: "Node.js",
        icon: nodejs,
        proficiency: "Intermediate",
        years: "1+ years",
      },
      {
        name: "Express.js",
        icon: expressjs,
        proficiency: "Intermediate",
        years: "1+ years",
      },
      {
        name: "REST APIs",
        icon: api,
        proficiency: "Advanced",
        years: "1.5+ years",
      },
    ],
    databases: [
      {
        name: "MongoDB",
        icon: mongodb,
        proficiency: "Intermediate",
        years: "1+ years",
      },
      {
        name: "PostgreSQL",
        icon: sql,
        proficiency: "Intermediate",
        years: "8 months",
      },
      {
        name: "MySQL",
        icon: sql,
        proficiency: "Intermediate",
        years: "8 months",
      },
    ],
    devOpsTools: [
      {
        name: "Git/GitHub",
        icon: git,
        proficiency: "Advanced",
        years: "2+ years",
      },
      {
        name: "AWS",
        icon: system,
        proficiency: "Beginner",
        years: "6 months",
      },
      {
        name: "Vercel",
        icon: system,
        proficiency: "Intermediate",
        years: "1+ years",
      },
    ],
    aiMlTech: [
      {
        name: "Machine Learning",
        icon: python,
        proficiency: "Beginner",
        years: "6 months",
      },
      {
        name: "Data Analysis",
        icon: python,
        proficiency: "Intermediate",
        years: "8 months",
      },
    ],
  };

  // Animation variants - simplified
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  const getProficiencyColor = (proficiency: string): string => {
    switch (proficiency) {
      case "Expert":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Advanced":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "Beginner":
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };
  const renderSkillCategory = (
    categoryTitle: string,
    skillsData: SkillItem[]
  ): JSX.Element => (
    <motion.div
      variants={cardVariants}
      className="border border-purple-700/30 rounded-xl p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:from-gray-800/70 hover:to-gray-900/70 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-purple-500/50"
    >
      <h3 className="text-xl font-bold text-center mb-6 bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text">
        {categoryTitle}
      </h3>
      <div className="space-y-3">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-4 bg-gray-800/80 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 group hover:bg-gray-700/80"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 relative flex-shrink-0 p-1 bg-gray-700 rounded-lg">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={32}
                  height={32}
                  loading="lazy"
                  className="rounded w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-medium group-hover:text-purple-300 transition-colors text-sm md:text-base">
                  {skill.name}
                </span>
                <span className="text-xs text-gray-400">{skill.years}</span>
              </div>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border ${getProficiencyColor(
                skill.proficiency
              )} transition-all duration-300 group-hover:scale-105`}
            >
              {skill.proficiency}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
  return (
    <section
      id="skills"
      className="py-20 overflow-hidden bg-gray-900"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center mb-4">
            Technical Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Skills & Technologies
          </h2>{" "}
          <p className="text-gray-300 text-center max-w-3xl mx-auto">
            Technical skills developed through coursework, personal projects, and internship experience.
            As a 3rd-year student, I'm focused on building strong foundations in full-stack development
            and modern web technologies.
          </p>
        </motion.div>{" "}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {renderSkillCategory("Core Languages", skills.coreLanguages)}
          {renderSkillCategory("Frontend Technologies", skills.frontendTech)}
          {renderSkillCategory("Backend & APIs", skills.backendTech)}
          {renderSkillCategory("Databases & Storage", skills.databases)}
          {renderSkillCategory("DevOps & Cloud", skills.devOpsTools)}
          {renderSkillCategory("AI/ML Technologies", skills.aiMlTech)}
        </motion.div>
        {/* Professional Skills & Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Professional Skills */}
          <div className="border border-emerald-700/30 rounded-xl p-8 bg-gradient-to-br from-emerald-900/10 to-emerald-800/5 hover:from-emerald-900/20 hover:to-emerald-800/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-300 to-green-400 text-transparent bg-clip-text">
              Professional Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Problem Solving",
                  description: "Analytical thinking & debugging",
                },
                {
                  title: "Team Collaboration",
                  description: "Communication & teamwork",
                },
                {
                  title: "Project Management",
                  description: "Planning & time management",
                },
                {
                  title: "Code Quality",
                  description: "Attention to detail & best practices",
                },
                {
                  title: "Continuous Learning",
                  description: "Adaptability & growth mindset",
                },
                {
                  title: "Client Communication",
                  description: "Requirements gathering & feedback",
                },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-lg bg-emerald-900/20 hover:bg-emerald-900/30 transition-all duration-200 border border-emerald-700/20 hover:border-emerald-500/40 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full mt-1 group-hover:animate-pulse"></div>
                    <div>
                      <h4 className="text-white font-medium text-sm mb-1 group-hover:text-emerald-300 transition-colors">
                        {skill.title}
                      </h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Academic & Project Achievements */}
          <div className="border border-blue-700/30 rounded-xl p-8 bg-gradient-to-br from-blue-900/10 to-blue-800/5 hover:from-blue-900/20 hover:to-blue-800/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-300 to-sky-400 text-transparent bg-clip-text">
              Academic & Project Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Full-Stack Projects",
                  description: "5+ projects with modern tech stack",
                },
                {
                  title: "BharatPe Internship",
                  description: "Leading fintech company experience",
                },
                {
                  title: "AI Job Portal",
                  description: "AI-powered platform development",
                },
                {
                  title: "Cloud Deployments",
                  description: "Production apps on Vercel/AWS",
                },
                {
                  title: "Open Source",
                  description: "Community contributions & involvement",
                },
                {
                  title: "Academic Excellence",
                  description: "Strong CS performance & leadership",
                },
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-lg bg-blue-900/20 hover:bg-blue-900/30 transition-all duration-200 border border-blue-700/20 hover:border-blue-500/40 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mt-1 group-hover:animate-pulse"></div>
                    <div>
                      <h4 className="text-white font-medium text-sm mb-1 group-hover:text-blue-300 transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Languages */}
          <div className="border border-purple-700/30 rounded-xl p-6 bg-gradient-to-br from-purple-900/10 to-purple-800/5 hover:from-purple-900/20 hover:to-purple-800/10 transition-all duration-300">
            <h3 className="text-xl font-bold text-center mb-6 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
              Languages
            </h3>
            <div className="space-y-4">
              {[
                { language: "English", level: "Professional" },
                { language: "Hindi", level: "Native" },
              ].map((lang, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/30 transition-colors duration-200"
                >
                  <span className="text-gray-300 font-medium">{lang.language}</span>
                  <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Industry Focus */}
          <div className="border border-orange-700/30 rounded-xl p-6 bg-gradient-to-br from-orange-900/10 to-orange-800/5 hover:from-orange-900/20 hover:to-orange-800/10 transition-all duration-300">
            <h3 className="text-xl font-bold text-center mb-6 bg-gradient-to-r from-orange-300 to-yellow-300 text-transparent bg-clip-text">
              Industry Focus
            </h3>
            <div className="space-y-3">
              {[
                "FinTech Solutions",
                "E-commerce Platforms",
                "AI/ML Applications",
                "SaaS Products",
                "Enterprise Systems",
              ].map((industry, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2 rounded-lg bg-orange-900/20"
                >
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">{industry}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Availability */}
          <div className="border border-green-700/30 rounded-xl p-6 bg-gradient-to-br from-green-900/10 to-green-800/5 hover:from-green-900/20 hover:to-green-800/10 transition-all duration-300">
            <h3 className="text-xl font-bold text-center mb-6 bg-gradient-to-r from-green-300 to-emerald-300 text-transparent bg-clip-text">
              Availability
            </h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-4 h-4 bg-green-400 rounded-full mx-auto mb-2 animate-pulse"></div>
                <span className="text-green-300 font-medium">
                  Open to Opportunities
                </span>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Internships</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Entry-level positions</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Freelance projects</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Remote work</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Relocation</span>
                  <span className="text-yellow-400">Open to discuss</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
