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
      <ellipse 
        cx="80" 
        cy="145" 
        rx="35" 
        ry="6" 
        fill="url(#shadowGradient)" 
        opacity="0.3"
      />
      
      {/* Robot body with enhanced details */}
      <rect
        x="50"
        y="70"
        width="60"
        height="60"
        rx="18"
        fill="url(#bodyGradient)"
        stroke="url(#glowGradient)"
        strokeWidth="2"
        filter="url(#glow)"
      />
      
      {/* Enhanced chest panel with animated LEDs */}
      <rect x="60" y="85" width="40" height="30" rx="10" fill="#1e1b4b" opacity="0.8" />
      
      {/* Animated LED indicators */}
      <circle 
        cx="68" 
        cy="95" 
        r="3" 
        fill="#00ff00"
        filter="url(#sparkle)"
      />
      <circle 
        cx="80" 
        cy="95" 
        r="3" 
        fill="#ff6b00"
        filter="url(#sparkle)"
      />
      <circle 
        cx="92" 
        cy="95" 
        r="3" 
        fill="#0099ff"
        filter="url(#sparkle)"
      />
      
      {/* Status display bars */}
      <rect x="65" y="105" width="30" height="2" rx="1" fill="#4ade80" opacity="0.8" />
      <rect x="65" y="108" width="20" height="2" rx="1" fill="#fbbf24" opacity="0.6" />
      
      {/* Enhanced robot head */}
      <rect
        x="55"
        y="35"
        width="50"
        height="40"
        rx="20"
        fill="url(#headGradient)"
        stroke="url(#glowGradient)"
        strokeWidth="2"
        filter="url(#glow)"
      />
      
      {/* Enhanced eyes with realistic blinking and expressions */}
      <ellipse 
        cx="68" 
        cy="50" 
        rx="7" 
        ry="7" 
        fill="#00f5ff" 
        filter="url(#glow)"
      />
      <ellipse 
        cx="92" 
        cy="50" 
        rx="7" 
        ry="7" 
        fill="#00f5ff"
        filter="url(#glow)"
      />
      
      {/* Eye pupils with intelligent movement */}
      <circle 
        cx="68" 
        cy="50" 
        r="2.5" 
        fill="#0066cc"
      />
      <circle 
        cx="92" 
        cy="50" 
        r="2.5" 
        fill="#0066cc"
      />
      
      {/* Enhanced mouth with emotions */}
      <ellipse 
        cx="80" 
        cy="62" 
        rx="12" 
        ry="4" 
        fill="#4c1d95"
      />
      
      {/* Enhanced arms with shoulder joints and better animation */}
      <circle cx="45" cy="80" r="10" fill="url(#armGradient)" stroke="#4c1d95" strokeWidth="2" />
      <rect
        x="20"
        y="75"
        width="30"
        height="12"
        rx="6"
        fill="url(#armGradient)"
        stroke="#4c1d95"
        strokeWidth="2"
      />
      
      <circle cx="115" cy="80" r="10" fill="url(#armGradient)" stroke="#4c1d95" strokeWidth="2" />
      <rect
        x="110"
        y="75"
        width="30"
        height="12"
        rx="6"
        fill="url(#armGradient)"
        stroke="#4c1d95"
        strokeWidth="2"
      />
      
      {/* Enhanced legs with better proportions */}
      <rect
        x="60"
        y="125"
        width="14"
        height="22"
        rx="7"
        fill="url(#legGradient)"
        stroke="#4c1d95"
        strokeWidth="2"
      />
      <rect
        x="86"
        y="125"
        width="14"
        height="22"
        rx="7"
        fill="url(#legGradient)"
        stroke="#4c1d95"
        strokeWidth="2"
      />
      
      {/* Enhanced antenna with better signal animation */}
      <line x1="80" y1="35" x2="80" y2="20" stroke="#4c1d95" strokeWidth="4" />
      <circle 
        cx="80" 
        cy="17" 
        r="5" 
        fill="#fbbf24"
        filter="url(#glow)"
      />
      
      {/* Enhanced signal waves */}
      <circle
        cx="80"
        cy="17"
        r="15"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="2"
        opacity="0.3"
      />
      
      {/* Enhanced chat bubble with better visibility and animation */}
      <AnimatePresence>
        {isActive && (
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 12, stiffness: 400 }}
          >            {/* Enhanced chat bubble background */}            <ellipse 
              cx="130" 
              cy="40" 
              rx={isMobile ? 28 : 32}
              ry={isMobile ? 16 : 18}
              fill="white" 
              stroke="#4c1d95" 
              strokeWidth="3"
              filter="drop-shadow(4px 4px 12px rgba(0,0,0,0.3))"
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
      className="fixed z-40 select-none"
      style={{
        left: isMobile ? 20 : 100,
        top: isMobile ? 100 : 100,
      }}
      drag
      dragMomentum={false}
      dragElastic={0.1}
      dragConstraints={{
        left: 0,
        right: typeof window !== 'undefined' ? window.innerWidth - (isMobile ? 80 : 120) : 1000,
        top: 0,
        bottom: typeof window !== 'undefined' ? window.innerHeight - (isMobile ? 80 : 120) : 1000,
      }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Enhanced Glow Effect */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/20 to-blue-400/20 blur-xl scale-150"
      />
      
      <RobotSVG />
      
      {/* Notification Badge */}
      {!isActive && (
        <div
          className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
        >
          <span className="text-xs text-white font-bold">💬</span>
        </div>
      )}
        {/* Enhanced interaction hint */}
      {!isActive && !isDragging && (
        <div
          className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white text-xs px-3 py-2 rounded-full whitespace-nowrap shadow-xl border border-emerald-400/50 backdrop-blur-sm opacity-80"
        >
          <span className="flex items-center gap-1 justify-center font-medium">
            <span className="hidden sm:inline">🎮 Drag me around or</span>
            <span className="sm:hidden">Tap to</span> click to chat! ✨
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default FloatingRobot;
