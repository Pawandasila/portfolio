import { StarIcon } from "lucide-react";
import { motion } from "framer-motion";

const words = [
  "Performance",
  "Accessible",
  "Innovative",
  "Secure",
  "Scalable",
  "Reliable",
  "Efficient",
  "User-friendly",
  "Interactive",
  "Maintainable",
  "Usable",
];

export const TapeSection = () => {
  return (
    <div className="py-20 relative overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-hidden -rotate-2 shadow-lg">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-emerald-300 to-transparent z-10"></div>

          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-sky-400 to-transparent z-10"></div>

          <div className="flex overflow-hidden py-6">
            <motion.div
              className="flex flex-nowrap gap-6 items-center"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...words, ...words, ...words].map((word, index) => (
                <motion.div
                  key={index}
                  className="inline-flex gap-4 items-center flex-none"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-2xl md:text-3xl font-extrabold text-gray-900 uppercase tracking-wider">
                    {word}
                  </span>
                  <motion.div
                    animate={{ rotate: [-12, 12, -12] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <StarIcon className="size-6 md:size-8 text-gray-900" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-emerald-500/30 blur-xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-8 right-12 w-20 h-20 rounded-full bg-blue-500/30 blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};
