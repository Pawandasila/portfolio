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
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);


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
          <div
            className="flex gap-2 mb-12"
          >
            {[0, 1, 2, 3, 4].map((index) => (
              <span
                key={index}
                className="block w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: "bounce 1.4s ease-in-out infinite both"
                }}
              />
            ))}
          </div>

          {/* Name */}
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          >
            Pawan Dasila
          </h1>

          {/* Welcome message */}
          <p
            className="text-lg md:text-xl text-gray-300 max-w-md text-center"
          >
            Hi, my name is Pawan Dasila. Please enjoy exploring my portfolio.
          </p>

          {/* Loading progress bar */}
          <div
            className="w-64 h-1 bg-gray-800 rounded-full mt-10 overflow-hidden"
          >            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
              style={{
                width: "100%",
                animation: "progressLoad 2s ease-in-out"
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;