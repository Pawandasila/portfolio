"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface RenderTextProps {
  text: string;
  classname: string;
  baseWeight?: number;
}

const FONT_WEIGHT = {
  title: { min: 100, max: 400, default: 100 },
  subtitle: { min: 400, max: 900, default: 400 },
};

const Welcome = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  const setupTextHover = (
    container: HTMLHeadingElement | null,
    type: keyof typeof FONT_WEIGHT
  ) => {
    if (!container) return;

    const letters = container.querySelectorAll("span");

    const { min, max, default: base } = FONT_WEIGHT[type];

    const animateLetter = (
      letter: HTMLSpanElement,
      weight: number,
      duration: number = 0.25
    ) => {
      return gsap.to(letter, {
        duration,
        fontWeight: weight,
        ease: "power2.out",
      });
    };

    const handleMousePosition = (e: MouseEvent) => {
      const { left } = container.getBoundingClientRect();
      const mouseX = e.clientX - left;

      letters.forEach((letter) => {
        const { left: l, width: w } = letter.getBoundingClientRect();
        const dist = Math.abs(mouseX - (l - left + w / 2));
        const intensity = Math.exp(-(dist ** 2) / 2000);

        animateLetter(letter, min + (max - min) * intensity);
      });
    };

    const handleMouseLeave = () => {
      letters.forEach((letter) => {
        animateLetter(letter, base);
      });
    };

    container.addEventListener("mousemove", handleMousePosition);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMousePosition);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  };

  const renderText = ({
    text,
    classname,
    baseWeight = 400,
  }: RenderTextProps) => {
    return [...text].map((char, idx) => {
      return (
        <span
          key={idx}
          className={classname}
          style={{ fontWeight: baseWeight }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      );
    });
  };

  useGSAP(() => {
    setupTextHover(titleRef.current, "title");
    setupTextHover(subtitleRef.current, "subtitle");
  }, []);

  return (
    <section id="welcome">
      <p ref={titleRef}>
        {renderText({
          text: "Hey, I'm Pawan! Welcome to my",
          classname: "text-3xl font-georama",
          baseWeight: 400,
        })}
      </p>
      <h1 ref={subtitleRef} className="mt-4">
        {renderText({
          text: "Portfolio",
          classname: "text-9xl italic font-georama",
        })}
      </h1>

      <div className="small-screen">
        <p>This portfolio is designed for Desktop/tablet screen only</p>
      </div>
    </section>
  );
};

export default Welcome;
