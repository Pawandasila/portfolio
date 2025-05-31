"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  useEffect(() => {
    // Reduced loading time for better performance
    const timer = setTimeout(() => {
      setIsExiting(true);
      
      // Shorter exit animation
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, 1000); // Reduced from 3000ms to 1000ms

    return () => clearTimeout(timer);
  }, []);

  // Loading indicator animations
  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.1
      }
    },
    end: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const loadingCircleVariants = {
    start: {
      y: "0%"
    },
    end: {
      y: "100%"
    }
  };

  const loadingCircleTransition = {
    duration: 0.6,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut"
  };

  // Text animations
  const nameVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      } 
    },
    exit: { 
      opacity: 0, 
      y: 50,
      transition: { 
        duration: 0.8,
        ease: "easeIn" 
      } 
    }
  };

  const messageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delay: 0.6,
        duration: 0.8 
      } 
    },
    exit: { 
      opacity: 0,
      y: 50,
      transition: { 
        duration: 0.6,
        ease: "easeIn" 
      } 
    }
  };

  if (!isLoading) return null;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: "100%",
            transition: { duration: 1, ease: "easeInOut" }
          }}
        >
          {/* Loading indicator */}
          <motion.div
            className="flex gap-2 mb-12"
            variants={loadingContainerVariants}
            initial="start"
            animate="end"
          >
            {[0, 1, 2, 3, 4].map((index) => (
              <motion.span
                key={index}
                className="block w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
              />
            ))}
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            Pawan Dasila
          </motion.h1>

          {/* Welcome message */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-md text-center"
            variants={messageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            Hi, my name is Pawan Dasila. Please enjoy exploring my portfolio.
          </motion.p>

          {/* Loading progress bar */}
          <motion.div
            className="w-64 h-1 bg-gray-800 rounded-full mt-10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }} // Reduced from 2.8s
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;