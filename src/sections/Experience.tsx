// components/Experience.tsx
import { FC, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Briefcase, ArrowRight, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

const Experience: FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const experienceData = [
    // {
    //   id: 1,
    //   company: "BharatPe",
    //   position: "Full Stack Web Developer Intern",
    //   location: "Delhi",
    //   period: "Dec 2023 - Jan 2024",
    //   description: [
    //     "Developed responsive web applications using MongoDB, Express.js, React.js, and Node.js",
    //     "Implemented RESTful APIs for efficient data management and client-server communication",
    //   ],
    //   technologies: [
    //     "MongoDB",
    //     "Express.js",
    //     "React.js",
    //     "Node.js",
    //     "REST API",
    //   ],
    //   logoUrl:
    //     "https://bp-wp-website-prod.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/bharatpe_logo.png",
    //   color: "emerald",
    // },
    {
      id: 1,
      company: "Greenfuel Energy Solutions",
      position: "Software Engineering Intern",
      location: "Remote",
      period: "Feb 2025 - July 2025",
      description: [
        "Collaborated with 5-member team to architect and develop scalable management dashboard serving 500+ daily users, optimizing RESTful API calls to reduce latency by 40% through efficient data fetching and caching mechanisms",
        "Implemented responsive UI components and backend optimizations achieving 25% faster load times and 99.5% uptime, while integrating real-time data visualization for enhanced operational insights",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "RESTful APIs",
        "Data Visualization",
        "Performance Optimization",
        "Team Collaboration",
        "Agile Methodologies",
        "Version Control (Git)",
      ],
      logoUrl:
        "https://greenfuelenergy.in/wp-content/uploads/elementor/thumbs/GreenFuel-Energy-Logo-White-r66sqo3u67tuhgfmoakaqeg535bt9scwedxz5tct8g.png",
      color: "blue",
    },
  ];

  return (
    <div
      className="bg-gray-900 min-h-screen text-white py-12 px-4 md:py-16 md:px-8"
      id="experience"
    >
      <div className="container mx-auto max-w-5xl">
        {" "}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center mb-4">
            Professional Journey
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Work Experience
          </h1>

          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12 md:mb-16 px-4">
            Building innovative solutions and gaining valuable industry
            experience through hands-on development roles at leading technology
            companies.
          </p>
        </motion.div>
        <div className="relative" ref={containerRef}>
          {/* Main timeline line with gradient and glow */}
          <motion.div
            className="absolute left-6 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-blue-400 rounded-full shadow-[0_0_15px_0_rgba(16,185,129,0.5)]"
            style={{
              scaleY: useTransform(scrollYProgress, [0, 1], [0, 1]),
              originY: 0,
            }}
          />

          {experienceData.map((item, index) => {
            const itemRef = useRef(null);
            const isItemInView = useInView(itemRef, {
              once: false,
              margin: "-100px",
            });

            const colorClasses = {
              emerald: {
                bg: "bg-emerald-900/30",
                border: "border-emerald-700/50",
                text: "text-emerald-300",
                glow: "shadow-emerald-500/30",
                pill: "bg-emerald-900/50 border-emerald-700/50",
              },
              blue: {
                bg: "bg-blue-900/30",
                border: "border-blue-700/50",
                text: "text-blue-300",
                glow: "shadow-blue-500/30",
                pill: "bg-blue-900/50 border-blue-700/50",
              },
            };

            const colors =
              colorClasses[item.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={item.id}
                ref={itemRef}
                className={`relative z-10 mb-12 md:mb-16 flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isItemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Timeline node */}
                <div className="absolute left-6 md:left-1/2 top-0 transform -translate-x-1/2 flex justify-center items-center">
                  <motion.div
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 border-2 ${
                      index === 0 ? "border-emerald-500" : "border-blue-500"
                    } flex items-center justify-center z-10 shadow-lg ${
                      colors.glow
                    }`}
                    initial={{ scale: 0 }}
                    animate={isItemInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <Briefcase
                      className={
                        index === 0 ? "text-emerald-400" : "text-blue-400"
                      }
                      size={16}
                    />
                  </motion.div>
                </div>

                {/* Content card - Mobile: Full width to the right of timeline | Desktop: Alternating sides */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8 lg:pr-12" : "md:pl-8 lg:pl-12"
                  }`}
                >
                  <motion.div
                    className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700/50 shadow-xl"
                    whileHover={{
                      y: -5,
                      boxShadow: `0 20px 40px -10px rgba(${
                        index === 0 ? "16,185,129" : "59,130,246"
                      }, 0.3)`,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {/* Horizontal connecting line on hover - desktop only */}
                    <motion.div
                      className={`hidden md:block absolute top-4 md:top-1/2 transform md:-translate-y-1/2 h-0.5 ${
                        index % 2 === 0
                          ? "right-0 left-auto"
                          : "left-0 right-auto"
                      } ${
                        index === 0
                          ? "bg-gradient-to-r from-transparent to-emerald-500/80"
                          : "bg-gradient-to-r from-transparent to-blue-500/80"
                      }`}
                      style={{
                        width: useTransform(
                          scrollYProgress,
                          [0, 1],
                          [0, index % 2 === 0 ? "3rem" : "3rem"]
                        ),
                        opacity: useTransform(
                          scrollYProgress,
                          [0, 0.1 + index * 0.3, 0.2 + index * 0.3],
                          [0, 0, 1]
                        ),
                      }}
                    />

                    <div className="flex flex-col md:flex-row items-start gap-4">
                      <div
                        className={`flex-shrink-0 ${colors.bg} rounded-lg p-2 flex items-center justify-center`}
                      >
                        <div className="w-12 h-12 md:w-16 md:h-16 relative flex items-center justify-center">
                          {/* Option 1: Next.js Image with proper configuration */}
                          <Image
                            src={item.logoUrl}
                            alt={`${item.company} logo`}
                            width={64}
                            height={64}
                            className="object-contain"
                            unoptimized // Add this prop to bypass optimization if needed
                          />

                          {/* Option 2: Regular img tag as fallback */}
                          {/* <img 
                            src={item.logoUrl}
                            alt={`${item.company} logo`} 
                            className="w-full h-full object-contain"
                          /> */}
                        </div>
                      </div>

                      <div className="flex-1">
                        <motion.div
                          className="flex flex-wrap items-center gap-2 mb-2"
                          initial={{ opacity: 0 }}
                          animate={
                            isItemInView ? { opacity: 1 } : { opacity: 0 }
                          }
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          <h3
                            className={`text-lg md:text-xl font-bold ${colors.text}`}
                          >
                            {item.position}
                          </h3>
                          <span className="text-gray-400">@</span>
                          <span className="font-semibold text-white">
                            {item.company}
                          </span>
                        </motion.div>

                        <motion.div
                          className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm text-gray-400"
                          initial={{ opacity: 0 }}
                          animate={
                            isItemInView ? { opacity: 1 } : { opacity: 0 }
                          }
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{item.location}</span>
                          </div>
                        </motion.div>

                        <motion.div
                          className="space-y-2 mb-4"
                          initial={{ opacity: 0 }}
                          animate={
                            isItemInView ? { opacity: 1 } : { opacity: 0 }
                          }
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          {item.description.map((desc, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <ArrowRight
                                size={16}
                                className={`mt-1 ${colors.text}`}
                              />
                              <p className="text-gray-300 text-sm md:text-base">
                                {desc}
                              </p>
                            </div>
                          ))}
                        </motion.div>

                        <motion.div
                          className="flex flex-wrap gap-2 mt-4"
                          initial={{ opacity: 0 }}
                          animate={
                            isItemInView ? { opacity: 1 } : { opacity: 0 }
                          }
                          transition={{ duration: 0.6, delay: 0.5 }}
                        >
                          {item.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className={`px-2 py-1 rounded-full text-xs font-medium ${colors.pill} ${colors.text} border`}
                            >
                              {tech}
                            </span>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
