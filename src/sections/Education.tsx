// components/Education.tsx
import { FC, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, BookOpen, Code, Award } from 'lucide-react';

const Education: FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const educationData = [
    {
      id: 1,
      institution: 'Graphic Era Hill University, Bhimtal, Uttarakhand',
      degree: 'Bachelor of Technology - BTech, Computer Science and Engineering',
      period: 'Oct 2022 - Current',
      grade: '7.89 CGPA',
      description: 'I am currently pursuing a Bachelor\'s degree in Computer Science and Engineering at Graphic Era Hill University, Bhimtal, Uttarakhand. I have completed 4 semesters and have a CGPA of 7.89. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management.',
      icon: <Code className="text-indigo-400" size={24} />
    },
    {
      id: 2,
      institution: 'St.Lawerence School, Haldwani',
      degree: 'CBSE(XII), Science with Computer',
      period: 'April 2012 - March 2022',
      grade: '76%',
      description: 'I completed my class 12 high school education at St.Lawerence School, Haldwani, where I studied Science with Computer Science.',
      icon: <BookOpen className="text-indigo-400" size={24} />
    },
    {
      id: 3,
      institution: 'St.Lawerence School, Haldwani',
      degree: 'CBSE(X)',
      period: 'April 2012 - March 2022',
      grade: '81%',
      description: 'I completed my class 10 high school education at St.Lawerence School, Haldwani, where I studied Science with Computer Science.',
      icon: <Award className="text-indigo-400" size={24} />
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white py-12 px-4 md:py-16 md:px-8">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
            Education
          </h1>
          
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12 md:mb-16 px-4">
            My education has been a journey of self-discovery and growth. My educational details are as follows.
          </p>
        </motion.div>

        <div className="relative" ref={containerRef}>
          {/* Main timeline line with gradient and glow */}
          <motion.div 
            className="absolute left-6 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 via-purple-500 to-indigo-400 rounded-full shadow-[0_0_15px_0_rgba(99,102,241,0.5)]"
            style={{ 
              scaleY: useTransform(scrollYProgress, [0, 1], [0, 1]),
              originY: 0
            }}
          />

          {educationData.map((item, index) => {
            const itemRef = useRef(null);
            const isItemInView = useInView(itemRef, { once: false, margin: "-100px" });
            
            return (
              <motion.div
                key={item.id}
                ref={itemRef}
                className={`relative z-10 mb-12 md:mb-16 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isItemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Timeline node */}
                <div className="absolute left-6 md:left-1/2 top-0 transform -translate-x-1/2 flex justify-center items-center">
                  <motion.div
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 border-2 border-indigo-500 flex items-center justify-center z-10 shadow-lg shadow-indigo-500/30"
                    initial={{ scale: 0 }}
                    animate={isItemInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.4,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <GraduationCap className="text-indigo-400" size={16} />
                  </motion.div>
                </div>

                {/* Content card - Mobile: Full width to the right of timeline | Desktop: Alternating sides */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'}`}>
                  <motion.div 
                    className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700/50 shadow-xl"
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 20px 40px -10px rgba(79, 70, 229, 0.3)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Horizontal connecting line on hover - desktop only */}
                    <motion.div 
                      className={`hidden md:block absolute top-4 md:top-1/2 transform md:-translate-y-1/2 h-0.5 ${
                        index % 2 === 0 ? 'right-0 left-auto' : 'left-0 right-auto'
                      } bg-gradient-to-r from-transparent ${
                        index % 2 === 0 ? 'to-indigo-500/80' : 'from-indigo-500/80'
                      }`}
                      style={{ 
                        width: useTransform(scrollYProgress, 
                          [0, 1], 
                          [0, index % 2 === 0 ? '3rem' : '3rem']
                        ),
                        opacity: useTransform(scrollYProgress, 
                          [0, 0.1 + index * 0.3, 0.2 + index * 0.3], 
                          [0, 0, 1]
                        ),
                      }}
                    />

                    <div className="flex flex-col md:flex-row items-start gap-4">
                      <div className="flex-shrink-0 bg-indigo-900/30 rounded-lg p-2">
                        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <motion.h3 
                          className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300"
                          initial={{ opacity: 0 }}
                          animate={isItemInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          {item.institution}
                        </motion.h3>
                        
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={isItemInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          <p className="font-medium text-indigo-200">{item.degree}</p>
                          <p className="text-gray-400 text-sm mt-1">{item.period}</p>
                          
                          <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-700/50">
                            <span className="text-gray-300 text-sm font-medium">Grade:</span>
                            <span className="ml-2 text-indigo-300 font-semibold">{item.grade}</span>
                          </div>
                          
                          <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">{item.description}</p>
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

export default Education;