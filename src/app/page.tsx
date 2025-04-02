"use client";

import { useState, useEffect, useRef } from "react";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import Loading from "./loading";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectsSection } from "@/sections/Projects";
import { Footer } from "@/sections/Footer";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import Education from "@/sections/Education";
import Experience from "@/sections/Experience";

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);
  const mainContentRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const timer = setTimeout(() => {
      setShowLoading(false);

      window.scrollTo(0, 0);

      if (mainContentRef.current) {
        const element = mainContentRef.current as HTMLElement;
        element.style.display = "none";
        void element.offsetHeight;
        element.style.display = "";
      }
    }, 4000);
    return () => {
      document.documentElement.style.scrollBehavior = "";
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoading && <Loading />}
      </AnimatePresence>

      <motion.main
        ref={mainContentRef}
        className="min-h-screen bg-gray-900 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: showLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          pointerEvents: showLoading ? "none" : "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Header key={`header-${showLoading}`} />
        <HeroSection key={`hero-${showLoading}`} />
        <div className="p-4">
        <ProjectsSection key={`projects-${showLoading}`} />
        <Experience key={`experience-${showLoading}`}/>

        <TapeSection key={`tape-${showLoading}`} />
        {/* <TestimonialsSection key={`testimonial-${showLoading}`} /> */}
        {/* <AboutSection key={`about-${showLoading}`} /> */}
        <Education key={`education-${showLoading}`} />
        </div>
          
      </motion.main>

      <motion.footer
        className="bg-gray-900 text-white py-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: showLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          pointerEvents: showLoading ? "none" : "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Footer/>
      </motion.footer>
    </>
  );
}
