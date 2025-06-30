"use client";

import { useState, useEffect, useRef } from "react";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import Loading from "./loading";
import { AnimatePresence } from "framer-motion";
import { ProjectsSection } from "@/sections/Projects";
import { Footer } from "@/sections/Footer";
import { TapeSection } from "@/sections/Tape";
import Contact from "@/sections/Contact";
import { AboutSection } from "@/sections/About";
import Education from "@/sections/Education";
import Experience from "@/sections/Experience";
import { SkillsSection } from "@/sections/Skills";
import { useLoading } from "@/contexts/LoadingContext";
import gsap from "gsap";
// import { ScrollSmoother } from "gsap/ScrollSmoother";

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);
  const { setIsLoading } = useLoading();
  const mainContentRef = useRef(null);

  useEffect(() => {
    // Enable smooth scrolling with CSS
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Optional: Add custom smooth scrolling enhancement
    const handleSmoothScroll = () => {
      // You can add custom smooth scrolling logic here if needed
    };
    
    handleSmoothScroll();

    const timer = setTimeout(() => {
      setShowLoading(false);
      setIsLoading(false);

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

      {!showLoading && (
        <main
          ref={mainContentRef}
          className="min-h-screen bg-gray-900 text-white"
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <Header key={`header-${showLoading}`} />
          <HeroSection key={`hero-${showLoading}`} />
          <div className="p-4">
            <AboutSection key={`about-${showLoading}`} />
            <ProjectsSection key={`projects-${showLoading}`} />
            <SkillsSection key={`skills-${showLoading}`} />
            <Experience key={`experience-${showLoading}`} />
            <Education key={`education-${showLoading}`} />
            {/* <TestimonialsSection key={`testimonials-${showLoading}`} /> */}
            <TapeSection key={`tape-${showLoading}`} />
            <Contact key={`contact-${showLoading}`} />
          </div>
        </main>
      )}

      {!showLoading && (
        <footer
          className="bg-gray-900 text-white py-4 text-center"
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <Footer />
        </footer>
      )}
    </>
  );
}
