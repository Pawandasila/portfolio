import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import AboutMe from '@/assets/images/About.svg';
import GrainImage from '@/assets/images/grain.jpg';

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
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-900 to-slate-800 overflow-hidden" id="about" ref={sectionRef}>      {/* Background decoration */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{ backgroundImage: `url(${GrainImage.src})` }}
      ></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text mb-4">
            About Me
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Passionate Developer & Problem Solver
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-sky-400 mx-auto rounded-full"></div>
        </motion.div>        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column - Image and Personal Info */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 order-2 lg:order-1"
          >
            {/* Profile Image - Made smaller and more proportional */}
            <div className="relative mx-auto lg:mx-0 w-72 h-72 group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-sky-400/20 rounded-3xl rotate-3 transition-transform group-hover:rotate-6 duration-500"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 transition-transform group-hover:-rotate-3 duration-500 border border-gray-700/30">
                <Image 
                  src={AboutMe} 
                  height={240} 
                  width={240} 
                  alt="About me illustration" 
                  className="w-full h-full object-contain filter drop-shadow-lg"
                />
              </div>
            </div>

            {/* Personal Stats/Info Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <motion.div 
                className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-emerald-400">3+</div>
                <div className="text-sm text-gray-300">Years Coding</div>
              </motion.div>
              {/* <motion.div 
                className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center hover:border-sky-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-sky-400">5</div>
                <div className="text-sm text-gray-300">Projects Built</div>
              </motion.div> */}
            </div>
          </motion.div>

          {/* Right Column - About Text and Highlights */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 order-1 lg:order-2"
          >
            {/* About Text */}
            <div className="space-y-5">
              <p className="text-white/90 text-lg leading-relaxed">
                I'm a <span className="text-emerald-400 font-semibold">dedicated full-stack developer</span> with a passion for creating innovative digital solutions. 
                Currently pursuing Computer Science and Engineering at Graphic Era Hill University, I've gained 
                hands-on experience through internships at leading companies like <span className="text-sky-400 font-semibold">BharatPe</span> and <span className="text-sky-400 font-semibold">Trusting Brains</span>.
              </p>
              <p className="text-white/90 text-lg leading-relaxed">
                My expertise spans modern web technologies, AI/ML integration, and scalable application development. 
                I believe in writing <span className="text-emerald-400 font-semibold">clean, maintainable code</span> and creating user experiences that truly make a difference.
              </p>
              <p className="text-white/90 text-lg leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                and solving algorithmic challenges on platforms like LeetCode.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href="https://drive.google.com/file/d/1iqQRB1G-9odTLc4Vo55d8r4sg4EpMh8z/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-sky-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-emerald-600 hover:to-sky-600 hover:shadow-lg hover:shadow-emerald-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Download Resume</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8l-8 8-8-8" />
                </svg>
              </motion.a>
              
              <motion.a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 bg-transparent border-2 border-emerald-500/50 text-emerald-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Let's Connect</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Core Expertise</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Areas where I excel and continuously grow as a developer
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <h4 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {highlight.title}
                  </h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
