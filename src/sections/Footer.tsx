import { FC, JSX } from "react";
import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";

// Define interfaces for our component
interface SocialIcon {
  name: string;
  url: string;
  svg: JSX.Element;
}

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className = "" }) => {
  // Create refs for different sections to trigger animations separately
  const footerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const copyrightRef = useRef<HTMLDivElement>(null);
  
  // Use inView for each section
  const isFooterInView = useInView(footerRef, { once: true, amount: 0.1 });
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isSocialsInView = useInView(socialsRef, { once: true, amount: 0.5 });
  const isContactInView = useInView(contactRef, { once: true, amount: 0.5 });
  const isDividerInView = useInView(dividerRef, { once: true, amount: 0.8 });
  const isCopyrightInView = useInView(copyrightRef, { once: true, amount: 0.5 });

  // Animation variants
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const socialLinkVariants: Variants = {
    hover: {
      y: -5,
      color: "#60a5fa",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const socialIcons: SocialIcon[] = [
    { 
      name: "GitHub", 
      url: "https://github.com/Pawandasila", 
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/pawan-dasila-92483b251/", 
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    { 
      name: "Twitter", 
      url: "https://x.com/dasila0612", 
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      )
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className={`container mx-auto px-6 ${className}`} ref={footerRef}>
      <div className="flex flex-col items-center py-8">
        <motion.h2 
          ref={headingRef}
          className="text-2xl font-bold mb-6 relative"
          initial={{ y: 20, opacity: 0 }}
          animate={isHeadingInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Let's Connect
          <motion.div 
            className="h-1 w-16 bg-blue-400 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-2 rounded-full"
            initial={{ width: 0 }}
            animate={isHeadingInView ? { width: "4rem" } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          ></motion.div>
        </motion.h2>
        
        <motion.div 
          ref={socialsRef}
          className="flex space-x-8 mb-8"
        >
          {socialIcons.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transform transition-all duration-300"
              title={social.name}
              whileHover="hover"
              variants={socialLinkVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={isSocialsInView ? 
                { opacity: 1, y: 0, transition: { delay: 0.1 * index, duration: 0.5 } } : 
                { opacity: 0, y: 20 }
              }
            >
              <div 
                className="p-3 rounded-full bg-gray-800 bg-opacity-50"
              >
                {social.svg}
              </div>
              <span className="sr-only">{social.name}</span>
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div 
          ref={contactRef}
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.p 
            className="text-lg mb-3"
          >
            Available for full-time opportunities and exciting projects
          </motion.p>
          <motion.a 
            href="mailto:dasilapawan.dev@gmai.com" 
            className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
            whileHover={{ y: -3, color: "#93c5fd" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            dasilapawan.dev@gmai.com
          </motion.a>
        </motion.div>
      </div>
      
      <div ref={dividerRef} className="relative">
        <motion.div 
          className="border-t border-gray-700 my-4"
          initial={{ scaleX: 0 }}
          animate={isDividerInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ originX: "center" }}
        />
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2 -top-2.5 bg-gray-900 px-6"
          initial={{ opacity: 0 }}
          animate={isDividerInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="text-blue-400">●</span>
        </motion.div>
      </div>
      
      <motion.div 
        ref={copyrightRef}
        className="flex flex-col md:flex-row justify-between items-center py-6"
        initial={{ opacity: 0 }}
        animate={isCopyrightInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm text-gray-400">
          &copy; {currentYear} Pawan Dasila. All rights reserved.
        </p>
        <p className="text-sm text-gray-400 mt-2 md:mt-0 flex items-center">
          Designed & Built with{" "}
          <span 
            className="text-red-500 mx-1"
          >
            ❤️
          </span>
        </p>
      </motion.div>
    </div>
  );
};