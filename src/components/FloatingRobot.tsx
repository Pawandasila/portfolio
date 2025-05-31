'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FloatingRobotProps {
  onClick: () => void;
  isActive: boolean;
}

const FloatingRobot: React.FC<FloatingRobotProps> = ({ onClick, isActive }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = () => {
    if (!isDragging) {
      onClick();
    }
  };

  // Robot SVG component
  const RobotSVG = () => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 100 100"
      className={`transition-all duration-300 ${isActive ? 'scale-110' : 'hover:scale-105'} ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
    >
      {/* Robot body */}
      <rect
        x="25"
        y="40"
        width="50"
        height="40"
        rx="8"
        fill="url(#bodyGradient)"
        stroke="#4c1d95"
        strokeWidth="2"
      />
      
      {/* Robot head */}
      <rect
        x="35"
        y="20"
        width="30"
        height="25"
        rx="12"
        fill="url(#headGradient)"
        stroke="#4c1d95"
        strokeWidth="2"
      />
      
      {/* Eyes */}
      <circle cx="42" cy="30" r="3" fill="#60a5fa" className="animate-pulse" />
      <circle cx="58" cy="30" r="3" fill="#60a5fa" className="animate-pulse" />
      
      {/* Mouth */}
      <rect x="45" y="36" width="10" height="2" rx="1" fill="#4c1d95" />
      
      {/* Arms */}
      <rect
        x="15"
        y="45"
        width="15"
        height="6"
        rx="3"
        fill="url(#armGradient)"
        stroke="#4c1d95"
        strokeWidth="1"
      />
      <rect
        x="70"
        y="45"
        width="15"
        height="6"
        rx="3"
        fill="url(#armGradient)"
        stroke="#4c1d95"
        strokeWidth="1"
      />
      
      {/* Legs */}
      <rect
        x="35"
        y="75"
        width="8"
        height="15"
        rx="4"
        fill="url(#legGradient)"
        stroke="#4c1d95"
        strokeWidth="1"
      />
      <rect
        x="57"
        y="75"
        width="8"
        height="15"
        rx="4"
        fill="url(#legGradient)"
        stroke="#4c1d95"
        strokeWidth="1"
      />
      
      {/* Antenna */}
      <line x1="50" y1="20" x2="50" y2="15" stroke="#4c1d95" strokeWidth="2" />
      <circle cx="50" cy="13" r="2" fill="#fbbf24" className="animate-ping" />
      
      {/* Chat bubble when active */}
      {isActive && (
        <g>
          <ellipse cx="80" cy="25" rx="15" ry="8" fill="white" stroke="#4c1d95" strokeWidth="1" />
          <text x="80" y="28" textAnchor="middle" fontSize="8" fill="#4c1d95">Hi! 👋</text>
        </g>
      )}
      
      {/* Gradients */}
      <defs>
        <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="armGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
        <linearGradient id="legGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <motion.div
      className="fixed z-40 select-none"
      style={{
        left: 100,
        top: 100,
      }}
      drag
      dragMomentum={false}
      dragElastic={0.1}
      dragConstraints={{
        left: 0,
        right: typeof window !== 'undefined' ? window.innerWidth - 80 : 1000,
        top: 0,
        bottom: typeof window !== 'undefined' ? window.innerHeight - 80 : 1000,
      }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      whileDrag={{ scale: 1.1, rotate: 5 }}
      animate={{
        y: [0, -8, 0], // Gentle floating animation
      }}
      transition={{
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
        scale: { duration: 0.2 },
        rotate: { duration: 0.2 },
      }}
    >
      <RobotSVG />
      
      {/* Click me indicator */}
      {!isActive && !isDragging && (
        <motion.div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap"
          animate={{
            opacity: [0, 1, 1, 0],
            y: [0, -5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 5,
          }}
        >
          Drag me or click! 🎮
        </motion.div>
      )}
    </motion.div>
  );
};

export default FloatingRobot;