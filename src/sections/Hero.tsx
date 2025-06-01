import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import memojiImage from "@/assets/images/memoji-computer.png";
import { FaCode, FaRocket } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";
import grainImage from "@/assets/images/grain.jpg";
import Link from "next/link";

export const HeroSection = () => {
  const containerRef = useRef(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);
  const memojiRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      setIsClient(true);
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Simplified animation timeline with fewer animations
    tl.fromTo(
      memojiRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
      .fromTo(
        ".status-badge",
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(
        ".heading-word",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
        "-=0.2"
      )
      .fromTo(
        textRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.2"
      )
      .fromTo(
        buttonsRef.current?.children || [],
        { opacity: 0 },
        { opacity: 1, stagger: 0.1, duration: 0.4 },
        "-=0.2"
      )
      .fromTo(
        ".social-icon",
        { opacity: 0 },
        { opacity: 1, stagger: 0.1, duration: 0.4 },
        "-=0.2"
      );

    // Simplified scroll animations
    gsap.to(".parallax-bg", {
      y: "15%", // Reduced parallax effect
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1, // Increased scrub value for smoother effect
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isClient]);

  // Reduced number of floating shapes
  const floatingShapes = [
    {
      component: (
        <div className="h-8 w-8 rounded bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
      ),
    },
    {
      component: <PiStarFourFill className="text-yellow-500/20 text-2xl" />,
    },
    { 
      component: <FaCode className="text-teal-500/20 text-3xl" />, 
    },
  ];

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative overflow-hidden py-16 sm:py-28 lg:py-36 min-h-screen flex items-center z-0"
    >
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="hero-ring size-820"></div>
      <div className="hero-ring size-1220"></div>
      
      {/* Background elements */}
      <div className="parallax-bg absolute inset-0 bg-gradient-to-b from-gray-950 via-blue-950/30 to-gray-950 z-0"></div>

      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-blue-500/10 blur-[100px] rounded-full"></div>
      
      {/* Grid lines - reduced */}
      {isClient && (
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute w-full h-full">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-blue-400/30"
                style={{
                  top: `${(i * 20) % 100}%`,
                  left: 0,
                  right: 0,
                }}
              />
            ))}
            {[...Array(5)].map((_, i) => (
              <div
                key={i + 100}
                className="absolute w-px bg-blue-400/30"
                style={{
                  left: `${(i * 20) % 100}%`,
                  top: 0,
                  bottom: 0,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Floating shapes - reduced and simplified animations */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden z-0">
          {floatingShapes.map((shape, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${((i * 30) % 90) + 5}%`,
                top: `${((i * 30) % 80) + 10}%`,
              }}
            >
              {shape.component}
            </div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center text-center mb-8 scroll-section">
          <div ref={memojiRef} className="relative mb-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-[30px]"></div>

              <div className="relative z-10">
                <Image
                  src={memojiImage}
                  alt="Developer Avatar"
                  width={200}
                  height={200}
                  className="drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjAyNDM5Ii8+PC9zdmc+"
                />
              </div>
            </div>
          </div>

          {/* Available badge */}
          <div
            className="status-badge py-1.5 px-5 bg-gradient-to-r from-emerald-500/20 to-teal-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-full flex items-center gap-2 mb-8 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400"></div>
            <span className="text-sm font-medium text-emerald-200">
              Open to opportunities
            </span>
          </div>
        </div>

        {/* Main heading with simplified effect */}
        <div ref={headingRef} className="text-center mb-8 scroll-section">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="heading-word inline-block mx-2 my-1">
              Full-Stack
            </span>{" "}
            <span className="heading-word inline-block mx-1 my-1">
              Developer
            </span>
            <span className="heading-word inline-block mx-2 my-1">&</span>{" "}
            <br />
            <span className="heading-word inline-block mx-2 my-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                AI Innovator
              </span>
            </span>
          </h1>
        </div>

        {/* Enhanced paragraph */}
        <div
          ref={textRef}
          className="max-w-3xl mx-auto text-center mb-12 scroll-section"
        >
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Passionate software engineer with expertise in modern web technologies, AI/ML integration, and scalable application development. 
            Proven track record of delivering high-impact solutions that drive business growth and user engagement.
          </p>
        </div>

        {/* Call to action buttons with simplified styling */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-7 scroll-section"
        >
          <Link
            href="#projects"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 rounded-full font-medium transition-all duration-300 shadow-lg shadow-blue-700/30 hover:shadow-blue-600/50"
          >
            <span>Explore My Work</span>
            <div>
              <FiArrowDown />
            </div>
          </Link>

          <Link
            href="#contact"
            className="group flex items-center gap-3 px-8 py-4 bg-gray-800/50 hover:bg-gray-700/60 border border-gray-700/60 hover:border-blue-500/30 rounded-full font-medium transition-all duration-300 backdrop-blur-sm"
          >
            <span className="text-xl">👋</span>
            <span>Let's Connect</span>
          </Link>
        </div>

        {/* Social links */}
        <div className="flex justify-center mt-12 gap-5 scroll-section">
          {[
            {
              icon: <FiGithub size={20} />,
              url: "https://github.com/Pawandasila",
              label: "GitHub",
              color: "from-gray-600 to-gray-700",
            },
            {
              icon: <FiLinkedin size={20} />,
              url: "https://www.linkedin.com/in/pawan-dasila-92483b251",
              label: "LinkedIn",
              color: "from-blue-600 to-blue-700",
            },
            {
              icon: <FiTwitter size={20} />,
              url: "https://x.com/dasila0612",
              label: "Twitter",
              color: "from-sky-500 to-sky-600",
            }
          ].map((social, i) => (
            <a
              key={i}
              href={social.url}
              aria-label={social.label}
              className={`social-icon w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-b ${social.color} hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Simplified scroll indicator */}
        <div className="flex justify-center mt-20">
          <div
            className="scroll-indicator w-7 h-12 border-2 border-white/40 rounded-full flex justify-center p-1"
          >
            <div
              className="w-2 h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};