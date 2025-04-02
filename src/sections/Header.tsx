"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants, Transition } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define types
export interface NavItem {
  id: string;
  name: string;
}

export interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<string>("home");

  // Updated nav items with IDs
  const navItems: NavItem[] = [
    { id: "home", name: "Home" },
    { id: "projects", name: "Projects" },
    { id: "education", name: "Education" },
    { id: "experience", name: "Experience" },
    { id: "contact", name: "Contact" },
  ];

  useEffect(() => {
    // Add floating animation
    if (navRef.current) {
      gsap.to(navRef.current, {
        y: 5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Set active item based on URL hash on page load
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && navItems.some(item => item.id === hash)) {
        setActiveItem(hash);
      }
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
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

  const handleNavClick = (itemId: string) => {
    setActiveItem(itemId);
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
          <motion.div key={item.id} custom={i} variants={navItemVariants}>
            <Link 
              href={`#${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`inline-block px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeItem === item.id
                  ? "bg-white text-gray-900 hover:bg-white/90"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.span>
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    </div>
  );
};

export default Header;