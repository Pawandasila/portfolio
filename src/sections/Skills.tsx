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
import react from '../assets/icons/icons8-react-100.png'
import next from '../assets/icons/next.jpg'
import nodejs from '../assets/icons/icons8-node-js-50.png'
import expressjs from '../assets/icons/icons8-express-js-50.png'
import mongodb from '../assets/icons/icons8-mongo-db-48.png'
import sql from '../assets/icons/icons8-sql-100.png'
import bootstrap from '../assets/icons/icons8-bootstrap-50.png'
import tailwind from '../assets/icons/icons8-tailwindcss-48.png'
import materialUI from '../assets/icons/icons8-material-ui-48.png'
import shadcn from '../assets/icons/shadcn.jpg'
import git from '../assets/icons/github.svg'
import vscode from '../assets/icons/icons8-vs-code-48.png'
import postman from '../assets/icons/icons8-postman-api-50.png'
import api from '../assets/icons/api.jpg'
import db from '../assets/icons/db.png'
import system from '../assets/icons/system.jpg'




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
      { name: "React.js", icon: react },
      { name: "Next.js", icon: next },
      { name: "Node.js", icon: nodejs },
      { name: "Express.js", icon: expressjs },
    ],
    database: [
      { name: "MongoDB", icon: mongodb },
      { name: "SQL", icon: sql },
    ],
    frameworks: [
      { name: "Bootstrap", icon: bootstrap },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Material UI", icon: materialUI },
      { name: "ShadCN UI", icon: shadcn },
    ],
    tools: [
      { name: "GitHub", icon: git },
      { name: "VS Code", icon: vscode },
      { name: "Postman", icon: postman },
    ],
    systemDesign: [
      { name: "API Design", icon: api },
      { name: "Database Design", icon: db },
      { name: "System Architecture", icon: system },
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
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center mb-4">
            Technical Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Skills & Technologies
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            Comprehensive technical skillset spanning full-stack development, modern frameworks, databases, and system design principles.
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