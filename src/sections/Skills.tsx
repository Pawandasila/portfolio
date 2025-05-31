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
        </motion.div>        {/* Professional Skills & Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Professional Skills */}
          <div className="border border-emerald-700/30 rounded-xl p-8 bg-gradient-to-br from-emerald-900/10 to-emerald-800/5 hover:from-emerald-900/20 hover:to-emerald-800/10 transition-all duration-300 hover:scale-[1.02]">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-green-400 text-transparent bg-clip-text">
                Professional Skills
              </h3>
              <p className="text-gray-400 text-sm mt-2">Core competencies & soft skills</p>
            </div>            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { skill: "Problem Solving", icon: "🧩", description: "Analytical thinking & debugging complex issues" },
                { skill: "Team Collaboration", icon: "🤝", description: "Effective communication & cross-functional teamwork" },
                { skill: "Project Management", icon: "📋", description: "Agile methodologies & deadline management" },
                { skill: "Code Quality", icon: "✨", description: "Best practices, testing & clean architecture" },
                { skill: "Continuous Learning", icon: "📚", description: "Staying updated with latest technologies" },
                { skill: "Client Relations", icon: "💬", description: "Requirements gathering & stakeholder communication" },
                { skill: "Leadership", icon: "👑", description: "Mentoring peers & leading project initiatives" },
                { skill: "Technical Writing", icon: "📝", description: "Documentation & knowledge sharing" },
                { skill: "Critical Thinking", icon: "🎯", description: "Data-driven decision making & analysis" },
                { skill: "Adaptability", icon: "🔄", description: "Quick learning & flexible problem-solving approaches" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 hover:from-emerald-900/50 hover:to-emerald-800/30 border border-emerald-700/30 hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer hover:scale-105"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-emerald-300 font-semibold text-sm mb-1 group-hover:text-emerald-200 transition-colors">
                        {item.skill}
                      </h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Academic & Project Achievements */}
          <div className="border border-blue-700/30 rounded-xl p-8 bg-gradient-to-br from-blue-900/10 to-blue-800/5 hover:from-blue-900/20 hover:to-blue-800/10 transition-all duration-300 hover:scale-[1.02]">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-sky-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-sky-400 text-transparent bg-clip-text">
                Achievements & Projects
              </h3>
              <p className="text-gray-400 text-sm mt-2">Academic excellence & practical experience</p>
            </div>
            <div className="space-y-4">
              {[
                {
                  category: "Development Projects",
                  achievements: [
                    { title: "Full-Stack Applications", description: "5+ projects with modern tech stack" },
                    { title: "AI Job Portal Platform", description: "AI-powered recruitment system" }
                  ]
                },
                {
                  category: "Professional Experience",
                  achievements: [
                    { title: "BharatPe Internship", description: "Leading fintech company experience" },
                    { title: "Cloud Deployments", description: "Production apps on Vercel/AWS" }
                  ]
                },
                {
                  category: "Community & Leadership",
                  achievements: [
                    { title: "Open Source Contributions", description: "Active in developer communities" },
                    { title: "Academic Excellence", description: "Strong CS performance & leadership" }
                  ]
                }
              ].map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + categoryIndex * 0.2 }}
                  className="bg-blue-900/20 rounded-lg p-4 border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <h4 className="text-blue-300 font-semibold mb-3 group-hover:text-blue-200 transition-colors">
                    {category.category}
                  </h4>
                  <div className="space-y-2">
                    {category.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="p-3 rounded bg-blue-900/30 hover:bg-blue-900/50 transition-colors duration-200 border border-blue-700/20 hover:border-blue-500/40">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h5 className="text-white font-medium text-sm mb-1">{achievement.title}</h5>
                            <p className="text-gray-400 text-xs leading-relaxed">{achievement.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>{/* Additional Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Languages */}
          <div className="border border-purple-700/30 rounded-xl p-8 bg-gradient-to-br from-purple-900/10 to-purple-800/5 hover:from-purple-900/20 hover:to-purple-800/10 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
                Languages
              </h3>
            </div>
            <div className="space-y-4">
              {[
                { 
                  language: "English", 
                  level: "Professional",
                  proficiency: "Business & Technical Communication",
                  icon: "🇺🇸"
                },
                { 
                  language: "Hindi", 
                  level: "Native",
                  proficiency: "Mother Tongue",
                  icon: "🇮🇳"
                },
              ].map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                  className="p-4 rounded-lg bg-purple-900/20 hover:bg-purple-900/30 transition-all duration-200 border border-purple-700/20 hover:border-purple-500/40 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-200">
                      {lang.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold group-hover:text-purple-300 transition-colors">
                          {lang.language}
                        </span>
                        <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                          {lang.level}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {lang.proficiency}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Industry Focus */}
          <div className="border border-orange-700/30 rounded-xl p-8 bg-gradient-to-br from-orange-900/10 to-orange-800/5 hover:from-orange-900/20 hover:to-orange-800/10 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-300 to-yellow-300 text-transparent bg-clip-text">
                Industry Focus
              </h3>
            </div>
            <div className="space-y-4">
              {[
                { industry: "FinTech Solutions", icon: "💳", description: "Payment & Banking" },
                { industry: "E-commerce", icon: "🛒", description: "Online Retail Platforms" },
                { industry: "AI/ML Applications", icon: "🤖", description: "Intelligent Systems" },
                { industry: "SaaS Products", icon: "☁️", description: "Cloud-based Solutions" },
                { industry: "Enterprise Systems", icon: "🏢", description: "Large-scale Applications" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="p-3 rounded-lg bg-orange-900/20 hover:bg-orange-900/30 transition-all duration-200 border border-orange-700/20 hover:border-orange-500/40 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-xl group-hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm group-hover:text-orange-300 transition-colors">
                        {item.industry}
                      </h4>
                      <p className="text-gray-400 text-xs">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="border border-green-700/30 rounded-xl p-8 bg-gradient-to-br from-green-900/10 to-green-800/5 hover:from-green-900/20 hover:to-green-800/10 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center relative">
                <span className="text-2xl">🚀</span>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 text-transparent bg-clip-text">
                Availability
              </h3>
              <p className="text-green-300 font-medium mt-2">
                Ready to Start Immediately
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-900/30 rounded-lg p-4 border border-green-600/30">
                <h4 className="text-green-300 font-semibold mb-3 text-center">Opportunity Types</h4>
                <div className="space-y-3">
                  {[
                    { type: "Internships", status: "Actively Seeking", icon: "🎓" },
                    { type: "Entry-level Positions", status: "Open to Offers", icon: "💼" },
                    { type: "Freelance Projects", status: "Available", icon: "🔥" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center justify-between p-2 rounded bg-green-900/20 hover:bg-green-900/40 transition-colors duration-200 group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm group-hover:scale-110 transition-transform duration-200">
                          {item.icon}
                        </span>
                        <span className="text-gray-300 text-sm font-medium">
                          {item.type}
                        </span>
                      </div>
                      <span className="text-xs text-green-400 bg-green-500/20 px-2 py-1 rounded-full">
                        {item.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-600/30">
                <h4 className="text-blue-300 font-semibold mb-3 text-center">Work Preferences</h4>
                <div className="space-y-2">
                  {[
                    { preference: "Remote Work", status: "Preferred", icon: "🏠" },
                    { preference: "Hybrid Mode", status: "Flexible", icon: "🔄" },
                    { preference: "On-site", status: "Open", icon: "🏢" },
                    { preference: "Relocation", status: "Negotiable", icon: "✈️" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-center justify-between p-2 rounded bg-blue-900/20 hover:bg-blue-900/40 transition-colors duration-200 group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm group-hover:scale-110 transition-transform duration-200">
                          {item.icon}
                        </span>
                        <span className="text-gray-300 text-sm">
                          {item.preference}
                        </span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.status === 'Preferred' ? 'text-green-400 bg-green-500/20' :
                        item.status === 'Flexible' ? 'text-blue-400 bg-blue-500/20' :
                        item.status === 'Open' ? 'text-yellow-400 bg-yellow-500/20' :
                        'text-orange-400 bg-orange-500/20'
                      }`}>
                        {item.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
