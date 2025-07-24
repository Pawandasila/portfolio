import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  Code2,
  Brain,
  Users,
  Zap,
  Award,
  MapPin,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import AboutMe from "@/assets/images/About.svg";
import GrainImage from "@/assets/images/grain.jpg";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Dev",
      description: "React, Next.js, Node.js, MongoDB",
      color: "emerald",
    },
    {
      icon: Brain,
      title: "AI/ML Integration",
      description: "OpenAI, TensorFlow, Smart Apps",
      color: "blue",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "40% faster APIs, 99.5% uptime",
      color: "yellow",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "5-member teams, Agile workflow",
      color: "purple",
    },
  ];

  const stats = [
    { icon: Award, number: "3+", label: "Years Coding", color: "emerald" },
    { icon: Code2, number: "7+", label: "Projects", color: "purple" },
    { icon: Users, number: "500+", label: "Users Served", color: "yellow" },
  ];
  return (
    <section
      className="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-900 to-slate-800 overflow-hidden"
      id="about"
      ref={sectionRef}
    >
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
            Developer & Innovator
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-sky-400 mx-auto rounded-full"></div>
        </motion.div>{" "}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 order-2 lg:order-1"
          >
            <div className="relative mx-auto lg:mx-0 w-80 h-80 group">
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-emerald-500/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Code2 className="w-6 h-6 text-emerald-400" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/30"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <Brain className="w-6 h-6 text-blue-400" />
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-8 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
              >
                <Zap className="w-4 h-4 text-purple-400" />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-sky-400/20 rounded-3xl rotate-3 transition-transform group-hover:rotate-6 duration-500"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 transition-transform group-hover:-rotate-3 duration-500 border border-gray-700/30">
                <Image
                  src={AboutMe}
                  height={280}
                  width={280}
                  alt="About me illustration"
                  className="w-full h-full object-contain filter drop-shadow-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const colorMap = {
                  emerald:
                    "from-emerald-500 to-emerald-600 text-emerald-400 border-emerald-500/30",
                  blue: "from-blue-500 to-blue-600 text-blue-400 border-blue-500/30",
                  purple:
                    "from-purple-500 to-purple-600 text-purple-400 border-purple-500/30",
                  yellow:
                    "from-yellow-500 to-yellow-600 text-yellow-400 border-yellow-500/30",
                };

                return (
                  <motion.div
                    key={index}
                    className={`bg-gray-800/60 backdrop-blur-sm border rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 ${
                      colorMap[stat.color as keyof typeof colorMap]
                    }`}
                    whileHover={{ scale: 1.05 }}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <Icon
                        className={`w-6 h-6 ${
                          colorMap[stat.color as keyof typeof colorMap].split(
                            " "
                          )[2]
                        }`}
                      />
                    </div>
                    <div
                      className={`text-2xl font-bold ${
                        colorMap[stat.color as keyof typeof colorMap].split(
                          " "
                        )[2]
                      }`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-300">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 order-1 lg:order-2"
          >
            <div className="space-y-6">
              <div className="relative">
                <motion.div
                  className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-blue-400 rounded-full"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: "100%" } : { height: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
                <p className="text-white/90 text-lg leading-relaxed pl-6">
                  <span className="text-emerald-400 font-semibold">
                    Full-stack developer
                  </span>{" "}
                  passionate about creating innovative digital solutions.
                  Currently pursuing{" "}
                  <span className="text-sky-400 font-semibold">
                    Computer Science
                  </span>
                  with hands-on experience at{" "}
                  <span className="text-emerald-400 font-semibold">
                    BharatPe
                  </span>{" "}
                  and
                  <span className="text-blue-400 font-semibold">
                    {" "}
                    Greenfuel Energy
                  </span>
                  .
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20 rounded-xl p-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-emerald-400 font-semibold text-sm">
                        40% Faster
                      </p>
                      <p className="text-gray-300 text-xs">API Performance</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl p-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-blue-400 font-semibold text-sm">
                        Best Clean
                      </p>
                      <p className="text-gray-300 text-xs">Ui Design</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-emerald-400" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "Node.js",
                    "MongoDB",
                    "AI/ML",
                    "TypeScript",
                  ].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-800/60 text-gray-300 text-xs rounded-full border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href="https://drive.google.com/file/d/1VfbUHTX11Lo0D88nuBsvNQK2vFLMCXPM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-sky-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-emerald-600 hover:to-sky-600 hover:shadow-lg hover:shadow-emerald-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Download Resume</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8l-8 8-8-8"
                  />
                </svg>
              </motion.a>

              <motion.a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 bg-transparent border-2 border-emerald-500/50 text-emerald-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Let's Connect</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.a>
            </div>

            <div className="space-y-3 mt-6">
              <motion.div
                className="flex items-center gap-3 bg-gray-800/40 rounded-lg p-3 border border-gray-700/30"
                whileHover={{ x: 5 }}
              >
                <GraduationCap className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">
                    Computer Science & Engineering
                  </p>
                  <p className="text-gray-400 text-xs">
                    Graphic Era Hill University
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 bg-gray-800/40 rounded-lg p-3 border border-gray-700/30"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">
                    Dehradun, India
                  </p>
                  <p className="text-gray-400 text-xs">Open to Remote Work</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              What I Do Best
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My core expertise in modern development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              const colorMap = {
                emerald: {
                  gradient: "from-emerald-500/20 to-emerald-600/20",
                  border: "border-emerald-500/30",
                  text: "text-emerald-400",
                  bg: "bg-emerald-500/10",
                },
                blue: {
                  gradient: "from-blue-500/20 to-blue-600/20",
                  border: "border-blue-500/30",
                  text: "text-blue-400",
                  bg: "bg-blue-500/10",
                },
                yellow: {
                  gradient: "from-yellow-500/20 to-yellow-600/20",
                  border: "border-yellow-500/30",
                  text: "text-yellow-400",
                  bg: "bg-yellow-500/10",
                },
                purple: {
                  gradient: "from-purple-500/20 to-purple-600/20",
                  border: "border-purple-500/30",
                  text: "text-purple-400",
                  bg: "bg-purple-500/10",
                },
              };

              const colors = colorMap[highlight.color as keyof typeof colorMap];

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`group relative bg-gradient-to-br ${colors.gradient} backdrop-blur-sm border ${colors.border} rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-${highlight.color}-500/10`}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </motion.div>

                  <h4
                    className={`text-lg font-bold ${colors.text} mb-2 group-hover:scale-105 transition-transform duration-300`}
                  >
                    {highlight.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {highlight.description}
                  </p>

                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient} rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
