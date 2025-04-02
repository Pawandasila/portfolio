"use client";

import React, { useEffect, useRef } from "react";
import { motion, Variants, Transition } from "framer-motion";
import gsap from "gsap";
import { HeaderProps, NavItem } from "./types";



export const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const navRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    { name: "Home" },
    { name: "Projects" },
    { name: "About" },
    { name: "Contact", isActive: true },
  ];

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        y: 5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  const navItemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      } as Transition,
    }),
  };

  const navContainerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div
      className={`flex justify-center items-center fixed w-full top-3 z-50 ${className}`}
    >
      <motion.nav
        ref={navRef}
        className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-black/10 backdrop-blur-lg shadow-lg"
        initial="hidden"
        animate="visible"
        variants={navContainerVariants}
      >
        {navItems.map((item, i) => (
          <motion.a
            key={item.name}
            href={`#${item.name.toLowerCase()}`}
            custom={i}
            variants={navItemVariants}
            whileHover={{
              scale: 1.1,
              backgroundColor: item.isActive
                ? "rgba(255, 255, 255, 0.7)"
                : "rgba(255, 255, 255, 0.1)",
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              item.isActive
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : "text-white hover:bg-white/10"
            }`}
          >
            {item.name}
          </motion.a>
        ))}
      </motion.nav>
    </div>
  );
};
