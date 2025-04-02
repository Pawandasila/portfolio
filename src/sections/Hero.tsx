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
import { StarIcon } from "lucide-react";

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

    tl.fromTo(
      memojiRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 }
    )
      .fromTo(
        ".status-badge",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7 },
        "-=0.5"
      )
      .fromTo(
        ".heading-word",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.7 },
        "-=0.5"
      )
      .fromTo(
        textRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.4"
      )
      .fromTo(
        buttonsRef.current?.children || [],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 },
        "-=0.5"
      )
      .fromTo(
        ".social-icon",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(
        ".scroll-indicator",
        { opacity: 0 },
        { opacity: 0.7, duration: 0.5 },
        "-=0.2"
      );

    gsap.to(".parallax-bg", {
      y: "30%",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    const sections = document.querySelectorAll(".scroll-section");
    sections.forEach((section) => {
      if (
        section === textRef.current ||
        section === headingRef.current ||
        section.closest('[ref="buttonsRef"]')
      ) {
        return;
      }

      gsap.fromTo(
        section,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
            scrub: 0.5,
          },
        }
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isClient]);

  const floatingShapes = [
    {
      component: (
        <div className="h-8 w-8 rounded bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
      ),
      delay: 0,
    },
    {
      component: (
        <div className="h-12 w-12 rotate-45 bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
      ),
      delay: 1.2,
    },
    {
      component: <PiStarFourFill className="text-yellow-500/20 text-2xl" />,
      delay: 0.5,
    },
    {
      component: (
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500/20 to-violet-500/20" />
      ),
      delay: 2,
    },
    { component: <FaCode className="text-teal-500/20 text-3xl" />, delay: 1 },
    {
      component: (
        <div className="h-6 w-6 rotate-12 rounded-sm bg-gradient-to-br from-orange-500/20 to-red-500/20" />
      ),
      delay: 1.5,
    },
    {
      component: <FaRocket className="text-amber-500/20 text-3xl" />,
      delay: 0.8,
    },
  ];

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative overflow-hidden py-16 sm:py-28 lg:py-36 min-h-screen flex items-center z-0"
    >
      <div
        className="absolute inset-0 -z-30 opacity-5 "
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className=" hero-ring size-620"></div>
      <div className=" hero-ring size-820"></div>
      <div className=" hero-ring size-1020"></div>
      <div className=" hero-ring size-1220"></div>
      {/* Background elements */}
      <div className="parallax-bg absolute inset-0 bg-gradient-to-b from-gray-950 via-blue-950/30 to-gray-950 z-0"></div>

      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-blue-500/10 blur-[100px] rounded-full"></div>
      <div className="absolute top-1/3 left-1/4 w-1/2 h-1/3 bg-purple-500/10 blur-[80px] rounded-full"></div>

      {/* Grid lines */}
      {isClient && (
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute w-full h-full">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-blue-400/30"
                style={{
                  top: `${(i * 7) % 100}%`,
                  left: 0,
                  right: 0,
                }}
                animate={{
                  opacity: [0.1, 0.5, 0.1],
                  scaleX: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 5 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i + 100}
                className="absolute w-px bg-blue-400/30"
                style={{
                  left: `${(i * 7) % 100}%`,
                  top: 0,
                  bottom: 0,
                }}
                animate={{
                  opacity: [0.1, 0.5, 0.1],
                  scaleY: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 5 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Floating shapes */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden z-0">
          {floatingShapes.map((shape, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${((i * 15) % 90) + 5}%`,
                top: `${((i * 17) % 80) + 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, i % 2 === 0 ? 10 : -10, 0],
                rotate: [0, 360],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 10 + i,
                repeat: Infinity,
                delay: shape.delay,
                ease: "easeInOut",
              }}
            >
              {shape.component}
            </motion.div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center text-center mb-8 scroll-section">
          <div ref={memojiRef} className="relative mb-6">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-[30px]"></div>

              <div className="relative z-10">
                <Image
                  src={memojiImage}
                  alt="Developer Avatar"
                  width={200}
                  height={200}
                  className="drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                />
              </div>
            </motion.div>

            {/* Orbital effect */}
            {isClient && (
              <div className="absolute inset-0 z-0">
                <motion.div
                  className="absolute w-full h-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div
                    className="absolute w-6 h-6 rounded-full bg-blue-500/50 blur-sm"
                    style={{
                      top: "0%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  ></div>
                </motion.div>
                <motion.div
                  className="absolute w-full h-full"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div
                    className="absolute w-4 h-4 rounded-full bg-purple-500/50 blur-sm"
                    style={{ bottom: "10%", right: "10%" }}
                  ></div>
                </motion.div>
              </div>
            )}
          </div>

          {/* Available badge */}
          <motion.div
            className="status-badge py-1.5 px-5 bg-gradient-to-r from-emerald-500/20 to-teal-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-full flex items-center gap-2 mb-8 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-sm font-medium text-emerald-200">
              Available for new projects
            </span>
          </motion.div>
        </div>

        {/* Main heading with improved typewriter effect */}
        <div ref={headingRef} className="text-center mb-8 scroll-section ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="heading-word inline-block mx-2 my-1">
              Building
            </span>{" "}
            <span className="heading-word inline-block mx-1 my-1">
              Exceptional
            </span>
            <span className="heading-word inline-block mx-2 my-1">User</span>{" "}
            <br />
            <span className="heading-word inline-block mx-2 my-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                Experiences
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
            Full-stack developer specializing in crafting modern, responsive,
            and high-performance web applications with clean code and
            captivating user interfaces that leave a lasting impression.
          </p>
        </div>

        {/* Call to action buttons with enhanced styling */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-7 scroll-section"
        >
          <motion.a
            href="#projects"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 rounded-full font-medium transition-all duration-300 shadow-lg shadow-blue-700/30 hover:shadow-blue-600/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Explore My Work</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="group-hover:translate-y-1 transition-transform"
            >
              <FiArrowDown />
            </motion.div>
          </motion.a>

          <motion.a
            href="#contact"
            className="group flex items-center gap-3 px-8 py-4 bg-gray-800/50 hover:bg-gray-700/60 border border-gray-700/60 hover:border-blue-500/30 rounded-full font-medium transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              className="text-xl"
            >
              👋
            </motion.span>
            <span>Let's Connect</span>
          </motion.a>
        </div>

        {/* Enhanced social links */}
        <div className="flex justify-center mt-12 gap-5 scroll-section">
          {[
            {
              icon: <FiGithub size={20} />,
              url: "#",
              label: "GitHub",
              color: "from-gray-600 to-gray-700",
            },
            {
              icon: <FiLinkedin size={20} />,
              url: "#",
              label: "LinkedIn",
              color: "from-blue-600 to-blue-700",
            },
            {
              icon: <FiTwitter size={20} />,
              url: "#",
              label: "Twitter",
              color: "from-sky-500 to-sky-600",
            },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              aria-label={social.label}
              className={`social-icon w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-b ${social.color} hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
              whileHover={{ y: -3 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Enhanced scroll indicator */}
        <div className="flex justify-center mt-20">
          <motion.div
            className="scroll-indicator w-7 h-12 border-2 border-white/40 rounded-full flex justify-center p-1"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-2 h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
