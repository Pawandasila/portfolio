import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useInView } from "framer-motion";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";

interface Testimonial {
  name: string;
  position: string;
  text: string;
  avatar: StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    position: "Tech Lead @ InnovateHub",
    text: "Pawan's technical expertise in full-stack development is impressive. His ability to integrate AI features into web applications sets him apart from other developers. Highly recommended for complex projects.",
    avatar: memojiAvatar1,
  },
  {
    name: "Rajesh Kumar",
    position: "Senior Developer @ TechCorp",
    text: "Having worked alongside Pawan, I can attest to his problem-solving skills and dedication to clean code. His projects demonstrate strong understanding of modern development practices.",
    avatar: memojiAvatar2,
  },
  {
    name: "Emma Wilson",
    position: "Project Manager @ StartupLab",
    text: "Pawan delivered exceptional results on our learning platform project. His attention to user experience and technical implementation made our product stand out in the market.",
    avatar: memojiAvatar3,
  },
  {
    name: "David Chen",
    position: "Lead Engineer @ AI Solutions",
    text: "Impressed by Pawan's ability to seamlessly integrate AI/ML capabilities into web applications. His interview platform project showcases excellent technical architecture and user design.",
    avatar: memojiAvatar4,
  },
  {
    name: "Lisa Rodriguez",
    position: "CTO @ WebFlow Inc",
    text: "Pawan's portfolio demonstrates strong full-stack capabilities and innovative thinking. His projects show both technical depth and practical business value. A promising developer to watch.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What People Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feedback from colleagues and industry professionals about my work and collaboration.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 hover:border-emerald-500/30 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 relative mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
