// components/Education.tsx
import { FC, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import Image from 'next/image';

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
      description: 'Currently pursuing Computer Science and Engineering with specialization in Software Development, Data Structures, Algorithms, Object-Oriented Programming, and Database Management. Maintaining strong academic performance while developing practical skills in modern web technologies.',
      imageUrl: 'https://th.bing.com/th/id/OIP.Km7-jkujhZIr_KSHOlzXKAHaHa?rs=1&pid=ImgDetMain',
      imageAlt: 'Graphic Era Hill University Logo'
    },
    {
      id: 2,
      institution: 'St. Lawrence School, Haldwani',
      degree: 'CBSE(XII), Science with Computer Science',
      period: 'April 2012 - March 2022',
      grade: '76%',
      description: 'Completed higher secondary education with focus on Science and Computer Science. Built foundational knowledge in Mathematics, Physics, Chemistry, and Computer Programming that supported transition to engineering studies.',
      imageUrl: 'https://th.bing.com/th/id/OIP.COwrh4ouPLy8eZJQe-2TjAHaHa?rs=1&pid=ImgDetMain',
      imageAlt: 'St. Lawrence School Logo'
    },
    {
      id: 3,
      institution: 'St. Lawrence School, Haldwani',
      degree: 'CBSE(X)',
      period: 'April 2012 - March 2020',
      grade: '81%',
      description: 'Completed secondary education with strong performance across all subjects. Developed fundamental analytical and problem-solving skills that laid the groundwork for future technical pursuits.',
      imageUrl: 'https://th.bing.com/th/id/OIP.COwrh4ouPLy8eZJQe-2TjAHaHa?rs=1&pid=ImgDetMain',
      imageAlt: 'St. Lawrence School Logo'
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white py-12 px-4 md:py-16 md:px-8" id='education'>
      <div className="container mx-auto max-w-5xl">        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center mb-4">
            Academic Background
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Education & Qualifications
          </h1>
          
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12 md:mb-16 px-4">
            Strong academic foundation in Computer Science and Engineering with focus on modern software development practices and emerging technologies.
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
                        <div className="w-16 h-16 md:w-20 md:h-20 relative">
                          <Image 
                            src={item.imageUrl} 
                            alt={item.imageAlt}
                            layout="fill" 
                            objectFit="contain"
                            className="rounded-lg"
                          />
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