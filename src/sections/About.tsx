import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const highlights = [
    {
      title: "Full-Stack Development",
      description: "Expert in modern web technologies including React, Next.js, Node.js, and MongoDB"
    },
    {
      title: "AI/ML Integration",
      description: "Specialized in integrating artificial intelligence and machine learning capabilities into web applications"
    },
    {
      title: "Problem Solving",
      description: "Strong analytical skills with focus on creating efficient, scalable solutions for complex challenges"
    },
    {
      title: "Team Collaboration",
      description: "Experienced in working with cross-functional teams and delivering projects in fast-paced environments"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-900" id="about" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            About Me
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-6 font-bold text-white">
            Passionate Developer & Problem Solver
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <p className="text-white/70 text-lg leading-relaxed">
              I'm a dedicated full-stack developer with a passion for creating innovative digital solutions. 
              Currently pursuing Computer Science and Engineering at Graphic Era Hill University, I've gained 
              hands-on experience through internships at leading companies like BharatPe and Trusting Brains.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              My expertise spans modern web technologies, AI/ML integration, and scalable application development. 
              I believe in writing clean, maintainable code and creating user experiences that truly make a difference.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
              and solving algorithmic challenges on platforms like LeetCode.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 hover:border-emerald-500/30 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{highlight.title}</h3>
                <p className="text-gray-300">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
