"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, Variants, Transition } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { ScrollSmoother } from "gsap/all";

// Define types
export interface NavItem {
  id: string;
  name: string;
}

export interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = "" }) => {

  gsap.registerPlugin(ScrollSmoother);

  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Updated nav items with IDs
  const navItems: NavItem[] = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "projects", name: "Projects" },
    { id: "skills", name: "Skills" },
    { id: "experience", name: "Experience" },
    { id: "education", name: "Education" },
    // { id: "testimonials", name: "Testimonials" },
    { id: "contact", name: "Contact" },
  ];

  useEffect(() => {
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

  const mobileMenuVariants: Variants = {
    closed: { 
      opacity: 0,
      y: -20,
      pointerEvents: "none" as "none",
    },
    open: { 
      opacity: 1,
      y: 0,
      pointerEvents: "auto" as "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const handleNavClick = (itemId: string) => {
    setActiveItem(itemId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={`flex justify-center items-center fixed w-full top-3 px-4 z-50 ${className}`}
    >
      {/* Desktop Navigation - Hidden on mobile */}
      <motion.nav
        className="hidden md:flex gap-1 p-0.5 border border-white/15 rounded-full bg-black/10 backdrop-blur-lg shadow-lg"
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

      {/* Mobile Navigation Button */}
      <motion.div 
        className="md:hidden flex justify-between w-full max-w-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="px-2 py-1 text-sm font-semibold text-white">
          {navItems.find(item => item.id === activeItem)?.name || "Menu"}
        </div>

        <motion.button
          className="p-1.5 rounded-full border border-white/15 bg-black/10 backdrop-blur-lg shadow-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <Menu size={18} className="text-white" />
        </motion.button>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <motion.div
        className="absolute top-12 right-4 md:hidden w-40 bg-gray-800/95 backdrop-blur-md rounded-lg overflow-hidden border border-white/10 shadow-xl"
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
      >
        {navItems.map((item, i) => (
          <motion.div 
            key={item.id}
            variants={navItemVariants}
            custom={i}
            className="w-full"
          >
            <Link
              href={`#${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full px-4 py-2.5 text-sm transition-colors ${
                activeItem === item.id
                  ? "bg-white/10 text-white font-medium"
                  : "text-white/80 hover:bg-white/5"
              }`}
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;