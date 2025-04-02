import { motion } from "framer-motion";

export const Footer = () => {
  const linkVariants = {
    hover: {
      y: -3,
      color: "#60a5fa",
      transition: { duration: 0.2 }
    }
  };

  const socialIcons = [
    { 
      name: "GitHub", 
      url: "https://github.com/yourusername", 
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    },
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com/in/yourusername", 
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
      url: "https://twitter.com/yourusername", 
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      )
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="container mx-auto px-6">
      <motion.div 
        className="flex flex-col items-center py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-2xl font-bold mb-6"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Let's Connect
        </motion.h2>
        
        <motion.div 
          className="flex space-x-6 mb-8"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {socialIcons.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
              whileHover="hover"
              variants={linkVariants}
              title={social.name}
            >
              {social.svg}
              <span className="sr-only">{social.name}</span>
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mb-6"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg mb-2">Open for freelance opportunities and collaborations</p>
          <motion.a 
            href="mailto:pawandasila06@gmail.com" 
            className="text-blue-400 hover:text-blue-300 font-medium"
            whileHover="hover"
            variants={linkVariants}
          >
            pawandasila06@gmail.com
          </motion.a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="border-t border-gray-800 my-4"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      ></motion.div>
      
      <motion.div 
        className="flex flex-col md:flex-row justify-between items-center py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-sm text-gray-400">
          &copy; {currentYear} Pawan Dasila. All rights reserved.
        </p>
        <p className="text-sm text-gray-400 mt-2 md:mt-0">
          Designed & Built with ❤️
        </p>
      </motion.div>
    </div>
  );
};