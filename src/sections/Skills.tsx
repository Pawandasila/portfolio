"use client";
import { JSX, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import js from '../assets/icons/icons8-javascript.gif'
import python from '../assets/icons/icons8-python.gif'
import c from '../assets/icons/icons8-c-48.png'
import cpp from '../assets/icons/icons8-cpp-64.png'
import java from '../assets/icons/icons8-java.gif'
import html from '../assets/icons/icons8-html5-50.png'
import css from '../assets/icons/icons8-css3-48.png'


interface SkillItem {
  name: string;
  icon: string | StaticImageData;
}

interface SkillsData {
  programmingLanguages: SkillItem[];
  webDevelopment: SkillItem[];
  database: SkillItem[];
  frameworks: SkillItem[];
  tools: SkillItem[];
  systemDesign: SkillItem[];
}

export const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  
  const skills: SkillsData = {
    programmingLanguages: [
      { name: "JavaScript", icon: js },
      { name: "Python", icon: python },
      { name: "C", icon: c },
      { name: "C++", icon: cpp },
      { name: "Java", icon: java },
      { name: "HTML5", icon: html},
      { name: "CSS3", icon: css },
    ],
    webDevelopment: [
      { name: "React.js", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Express.js", icon: "/icons/express.svg" },
      { name: "RESTful APIs", icon: "/icons/api.svg" },
    ],
    database: [
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "SQL", icon: "/icons/sql.svg" },
      { name: "NoSQL", icon: "/icons/nosql.svg" },
    ],
    frameworks: [
      { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
      { name: "Material UI", icon: "/icons/material-ui.svg" },
      { name: "ShadCN UI", icon: "/icons/shadcn.svg" },
    ],
    tools: [
      { name: "Git", icon: "/icons/git.svg" },
      { name: "GitHub", icon: "/icons/github.svg" },
      { name: "VS Code", icon: "/icons/vscode.svg" },
      { name: "Postman", icon: "/icons/postman.svg" },
      { name: "npm", icon: "/icons/npm.svg" },
    ],
    systemDesign: [
      { name: "Microservices", icon: "/icons/microservices.svg" },
      { name: "API Design", icon: "/icons/api-design.svg" },
      { name: "Database Design", icon: "/icons/database-design.svg" },
      { name: "System Architecture", icon: "/icons/architecture.svg" },
    ]
  };

  // Animation variants - simplified
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const renderSkillCategory = (categoryTitle: string, skillsData: SkillItem[]): JSX.Element => (
    <motion.div
      variants={cardVariants}
      className="border border-purple-700/30 rounded-xl p-8 bg-gray-800/50"
    >
      <h3 className="text-2xl font-bold text-center mb-8">{categoryTitle}</h3>
      <div className="grid grid-cols-2 gap-4">
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center justify-center gap-2 p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors duration-300"
          >
            <div className="w-6 h-6 relative">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={24}
                height={24}
                loading="lazy"
              />
            </div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-4">Skills</h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto">
            Here are some of my skills on which I have been working on for the
            past 2 years.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {renderSkillCategory("Programming Languages", skills.programmingLanguages)}
          {renderSkillCategory("Web Development", skills.webDevelopment)}
          {renderSkillCategory("Database", skills.database)}
          {renderSkillCategory("Frameworks", skills.frameworks)}
          {renderSkillCategory("Development Tools", skills.tools)}
          {renderSkillCategory("System Design", skills.systemDesign)}
        </motion.div>
      </div>
    </section>
  );
};