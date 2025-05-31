'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingRobotProps {
  onClick: () => void;
  isActive: boolean;
}

const FloatingRobot: React.FC<FloatingRobotProps> = ({ onClick, isActive }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = () => {
    if (!isDragging) {
      onClick();
    }
  };
    const RobotSVG = () => (
    <motion.svg
      width="120"
      height="120"
      viewBox="0 0 160 160"
      className={`transition-all duration-300 ${isActive ? 'scale-110' : 'hover:scale-105'} ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} w-20 h-20 sm:w-[120px] sm:h-[120px]`}
      animate={{
        rotate: isDragging ? 0 : [0, 1, -1, 0],
      }}
      transition={{
        rotate: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      {/* Enhanced Gradients and Filters */}
      <defs>
        <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
        <linearGradient id="armGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
        <linearGradient id="legGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
        <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <radialGradient id="shadowGradient">
          <stop offset="0%" stopColor="rgba(0,0,0,0.4)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        {/* Enhanced glow filter */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        {/* Sparkle filter */}
        <filter id="sparkle">
          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Enhanced robot shadow */}
      <motion.ellipse 
        cx="80" 
        cy="145" 
        rx="35" 
        ry="6" 
        fill="url(#shadowGradient)" 
        animate={{
          rx: [35, 40, 35],
          opacity: [0.3, 0.2, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Robot body with enhanced details */}
      <motion.rect
        x="50"
        y="70"
        width="60"
        height="60"
        rx="18"
        fill="url(#bodyGradient)"
        stroke="url(#glowGradient)"
        strokeWidth="2"
        filter="url(#glow)"
        animate={{
          strokeWidth: [2, 3, 2],
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      
      {/* Enhanced chest panel with animated LEDs */}
      <rect x="60" y="85" width="40" height="30" rx="10" fill="#1e1b4b" opacity="0.8" />
      
      {/* Animated LED indicators */}
      <motion.circle 
        cx="68" 
        cy="95" 
        r="3" 
        fill="#00ff00"
        filter="url(#sparkle)"
        animate={{ 
          opacity: [1, 0.3, 1],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.circle 
        cx="80" 
        cy="95" 
        r="3" 
        fill="#ff6b00"
        filter="url(#sparkle)"
        animate={{ 
          opacity: [1, 0.3, 1],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.circle 
        cx="92" 
        cy="95" 
        r="3" 
        fill="#0099ff"
        filter="url(#sparkle)"
        animate={{ 
          opacity: [1, 0.3, 1],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
      
      {/* Status display bars */}
      <rect x="65" y="105" width="30" height="2" rx="1" fill="#4ade80" opacity="0.8" />
      <rect x="65" y="108" width="20" height="2" rx="1" fill="#fbbf24" opacity="0.6" />
      
      {/* Enhanced robot head */}
      <motion.rect
        x="55"
        y="35"
        width="50"
        height="40"
        rx="20"
        fill="url(#headGradient)"
        stroke="url(#glowGradient)"
        strokeWidth="2"
        filter="url(#glow)"
        animate={{
          y: [35, 32, 35],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Enhanced eyes with realistic blinking and expressions */}
      <motion.ellipse 
        cx="68" 
        cy="50" 
        rx="7" 
        ry="7" 
        fill="#00f5ff" 
        filter="url(#glow)"
        animate={{
          scaleY: [1, 0.1, 1],
          opacity: [1, 0.3, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.05, 0.1] }}
      />
      <motion.ellipse 
        cx="92" 
        cy="50" 
        rx="7" 
        ry="7" 
        fill="#00f5ff"
        filter="url(#glow)"
        animate={{
          scaleY: [1, 0.1, 1],
          opacity: [1, 0.3, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.05, 0.1], delay: 0.1 }}
      />
      
      {/* Eye pupils with intelligent movement */}
      <motion.circle 
        cx="68" 
        cy="50" 
        r="2.5" 
        fill="#0066cc"
        animate={{
          cx: [68, 70, 66, 68],
          cy: [50, 48, 52, 50]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.circle 
        cx="92" 
        cy="50" 
        r="2.5" 
        fill="#0066cc"
        animate={{
          cx: [92, 90, 94, 92],
          cy: [50, 48, 52, 50]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      {/* Enhanced mouth with emotions */}
      <motion.ellipse 
        cx="80" 
        cy="62" 
        rx="12" 
        ry="4" 
        fill="#4c1d95"
        animate={{
          rx: [12, 16, 12],
          ry: [4, 6, 4]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Enhanced arms with shoulder joints and better animation */}
      <circle cx="45" cy="80" r="10" fill="url(#armGradient)" stroke="#4c1d95" strokeWidth="2" />
      <motion.rect
        x="20"
        y="75"
        width="30"
        height="12"
        rx="6"
        fill="url(#armGradient)"
        stroke="#4c1d95"
        strokeWidth="2"
        animate={{
          rotate: [-15, 15, -15],
          x: [20, 17, 20]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <circle cx="115" cy="80" r="10" fill="url(#armGradient)" stroke="#4c1d95" strokeWidth="2" />
      <motion.rect
        x="110"
        y="75"
        width="30"
        height="12"
        rx="6"
        fill="url(#armGradient)"
        stroke="#4c1d95"
        strokeWidth="2"
        animate={{
          rotate: [15, -15, 15],
          x: [110, 113, 110]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      />
      
      {/* Enhanced legs with better proportions */}
      <motion.rect
        x="60"
        y="125"
        width="14"
        height="22"
        rx="7"
        fill="url(#legGradient)"
        stroke="#4c1d95"
        strokeWidth="2"
        animate={{
          height: [22, 20, 22],
          y: [125, 127, 125]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.rect
        x="86"
        y="125"
        width="14"
        height="22"
        rx="7"
        fill="url(#legGradient)"
        stroke="#4c1d95"
        strokeWidth="2"
        animate={{
          height: [22, 20, 22],
          y: [125, 127, 125]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
      
      {/* Enhanced antenna with better signal animation */}
      <line x1="80" y1="35" x2="80" y2="20" stroke="#4c1d95" strokeWidth="4" />
      <motion.circle 
        cx="80" 
        cy="17" 
        r="5" 
        fill="#fbbf24"
        filter="url(#glow)"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0.7, 1]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      
      {/* Enhanced signal waves */}
      <motion.circle
        cx="80"
        cy="17"
        r="10"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="2"
        opacity="0.6"
        animate={{
          r: [10, 20, 10],
          opacity: [0.6, 0, 0.6]
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <motion.circle
        cx="80"
        cy="17"
        r="15"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="1.5"
        opacity="0.4"
        animate={{
          r: [15, 25, 15],
          opacity: [0.4, 0, 0.4]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      />
      
      {/* Floating particles for magical effect */}
      <motion.circle
        cx="40"
        cy="60"
        r="1"
        fill="#fbbf24"
        animate={{
          y: [0, -10, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.circle
        cx="120"
        cy="90"
        r="1.5"
        fill="#a855f7"
        animate={{
          y: [0, -15, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
      />
      
      {/* Enhanced chat bubble with better visibility and animation */}
      <AnimatePresence>
        {isActive && (
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 12, stiffness: 400 }}
          >            {/* Enhanced chat bubble background */}            <motion.ellipse 
              cx="130" 
              cy="40" 
              rx={isMobile ? 28 : 32}
              ry={isMobile ? 16 : 18}
              fill="white" 
              stroke="#4c1d95" 
              strokeWidth="3"
              filter="drop-shadow(4px 4px 12px rgba(0,0,0,0.3))"
              animate={{
                scale: [1, 1.05, 1],
                stroke: ["#4c1d95", "#6366f1", "#4c1d95"]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
              {/* Multi-line text for better readability */}
            <text 
              x="130" 
              y="35" 
              textAnchor="middle" 
              fontSize={isMobile ? "12" : "14"}
              fill="#4c1d95" 
              fontWeight="bold"
              fontFamily="Arial, sans-serif"
            >
              Let's Chat!
            </text>
            <text 
              x="130" 
              y="48" 
              textAnchor="middle" 
              fontSize={isMobile ? "16" : "20"}
              fill="#4c1d95"
            >
              💬✨🤖
            </text>
            
            {/* Enhanced chat bubble tail */}
            <polygon 
              points="102,45 112,52 112,38" 
              fill="white" 
              stroke="#4c1d95" 
              strokeWidth="3"
            />
          </motion.g>
        )}
      </AnimatePresence>
    </motion.svg>
  );
  return (
    <motion.div
      className="fixed z-40 select-none"      style={{
        left: isMobile ? 20 : 100,
        top: isMobile ? 100 : 100,
      }}
      drag
      dragMomentum={false}
      dragElastic={0.1}      dragConstraints={{
        left: 0,
        right: typeof window !== 'undefined' ? window.innerWidth - (isMobile ? 80 : 120) : 1000,
        top: 0,
        bottom: typeof window !== 'undefined' ? window.innerHeight - (isMobile ? 80 : 120) : 1000,
      }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      whileDrag={{ scale: 1.1, rotate: 5 }}
      animate={{
        y: [0, -10, 0], // Enhanced floating animation
      }}
      transition={{
        y: {
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
        scale: { duration: 0.2 },
        rotate: { duration: 0.2 },
      }}
    >
      <RobotSVG />
        {/* Enhanced interaction hint */}
      {!isActive && !isDragging && (
        <motion.div
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs sm:text-xs px-2 sm:px-3 py-1 sm:py-2 rounded-full whitespace-nowrap shadow-lg border border-purple-400 max-w-[200px] sm:max-w-none text-center"
          animate={{
            opacity: [0, 1, 1, 0],
            y: [0, -8, -8, 0],
            scale: [0.9, 1, 1, 0.9]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 6,
          }}
        >
          <span className="flex items-center gap-1 justify-center text-[10px] sm:text-xs">
            <span className="hidden sm:inline">🎮 Drag me around or</span>
            <span className="sm:hidden">Tap to</span> click to chat! ✨
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FloatingRobot;
