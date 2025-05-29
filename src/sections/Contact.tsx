// components/Contact.tsx
import { FC, useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Twitter, Code, Mail, Phone, ExternalLink } from 'lucide-react';

interface ContactLinkProps {
  url: string;
  icon: React.ReactNode;
  label: string;
  delay: number;
}

const ContactLink: FC<ContactLinkProps> = ({ url, icon, label, delay }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-gray-800/50 hover:bg-gray-700/70 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 transition-all group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 10px 30px -10px rgba(99, 102, 241, 0.4)"
      }}
    >
      <div className="p-2 rounded-lg bg-indigo-900/30 text-indigo-300">
        {icon}
      </div>
      <span className="text-gray-200 font-medium">{label}</span>
      <ExternalLink className="ml-auto text-gray-400 group-hover:text-indigo-300 transition-colors" size={16} />
    </motion.a>
  );
};

const Contact: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const contactLinks = [
    {
      url: "https://github.com/Pawandasila",
      icon: <Github size={24} />,
      label: "GitHub"
    },
    {
      url: "https://www.linkedin.com/in/pawan-dasila-92483b251/",
      icon: <Linkedin size={24} />,
      label: "LinkedIn"
    },
    {
      url: "https://x.com/dasila0612",
      icon: <Twitter size={24} />,
      label: "Twitter"
    },
    {
      url: "https://leetcode.com/pawan_dasila/",
      icon: <Code size={24} />,
      label: "LeetCode"
    }
  ];

  return (
    <div className="relative bg-gray-900 min-h-screen text-white py-16 px-4 md:py-24 md:px-8 overflow-hidden" id="contact">
      {/* Animated background lines */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-full bg-gradient-to-r from-indigo-500/0 via-indigo-500 to-indigo-500/0"
            style={{ 
              top: `${20 * i}%`, 
              left: 0,
              x: useTransform(
                scrollYProgress, 
                [0, 1], 
                [i % 2 === 0 ? '-100%' : '100%', i % 2 === 0 ? '100%' : '-100%']
              )
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-full bg-gradient-to-b from-purple-500/0 via-purple-500 to-purple-500/0"
            style={{ 
              left: `${20 * i}%`, 
              top: 0,
              y: useTransform(
                scrollYProgress, 
                [0, 1], 
                [i % 2 === 0 ? '-100%' : '100%', i % 2 === 0 ? '100%' : '-100%']
              )
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-5xl relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.p 
            className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Get In Touch
          </motion.p>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Let's Build Something Amazing Together
          </motion.h1>
          
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto mb-8 md:mb-10 px-4 text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Open to new opportunities and exciting projects. Let's discuss how my technical expertise can contribute to your team's success.
          </motion.p>
        </motion.div>

        <div className="md:flex gap-8 items-start">
          {/* Left side - Card */}
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            style={{ opacity, y: translateY }}
          >
            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 md:p-8 rounded-2xl border border-gray-700/50 shadow-xl relative overflow-hidden"
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.3)",
              }}
            >
              {/* Decorative circles */}
              <motion.div 
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-indigo-600/20 blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4] 
                }} 
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-purple-600/20 blur-xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3] 
                }} 
                transition={{ 
                  duration: 6,
                  delay: 1,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />

              <motion.h2 
                className="text-2xl md:text-3xl font-bold mb-6 text-white relative z-10"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Ready to Collaborate?
              </motion.h2>

              <motion.p 
                className="text-gray-300 mb-6 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Whether you have a specific project in mind or just want to explore possibilities, I'm here to help transform your vision into a striking digital solution.
              </motion.p>

              <motion.button
                className="relative overflow-hidden group bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-xl shadow-lg shadow-indigo-500/30 transition-all"
                onClick={() => setIsModalOpen(true)}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get In Touch</span>
                <motion.span 
                  className="absolute inset-0 bg-white/20 -z-10"
                  initial={{ x: "-100%", opacity: 0 }}
                  whileHover={{ x: "100%", opacity: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Links */}
          <motion.div 
            className="md:w-1/2 space-y-4"
            style={{ opacity, y: translateY }}
          >
            <motion.h3 
              className="text-xl font-semibold mb-4 text-indigo-200"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Connect With Me
            </motion.h3>

            <div className="space-y-3">
              {contactLinks.map((link, index) => (
                <ContactLink 
                  key={index}
                  url={link.url}
                  icon={link.icon}
                  label={link.label}
                  delay={0.4 + index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div 
            className="bg-gray-800 rounded-2xl max-w-md w-full border border-gray-700/50 shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-[1px] w-full bg-white/40"
                    style={{ 
                      top: `${20 * i}%`, 
                      left: 0,
                    }}
                    animate={{
                      x: [i % 2 === 0 ? '-100%' : '100%', i % 2 === 0 ? '100%' : '-100%']
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-white relative z-10">Contact Information</h3>
              <p className="text-indigo-100 mt-1 relative z-10">Let's turn your vision into reality</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-900/30 text-indigo-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:dasilapawan.dev@gmail.com" className="text-white hover:text-indigo-300 transition-colors">dasilapawan.dev@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-900/30 text-indigo-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a href="tel:+917819805935" className="text-white hover:text-indigo-300 transition-colors">+91 7819805935</a>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-6">
                  <a href="https://github.com/Pawandasila" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/pawan-dasila-92483b251/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://x.com/dasila0612" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="https://leetcode.com/pawan_dasila/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors">
                    <Code size={20} />
                  </a>
                </div>
              </div>
              
              <motion.button
                className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-2.5 px-4 rounded-xl shadow-lg shadow-indigo-500/20 transition-all"
                onClick={() => setIsModalOpen(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Contact;