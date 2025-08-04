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
            <div
              className="flex flex-nowrap gap-6 items-center"
              style={{
                animation: "scroll 60s linear infinite"
              }}
            >
              {[...words, ...words, ...words].map((word, index) => (
                <div
                  key={index}
                  className="inline-flex gap-4 items-center flex-none"
                >
                  <span className="text-2xl md:text-3xl font-extrabold text-gray-900 uppercase tracking-wider">
                    {word}
                  </span>
                  <div>
                    <StarIcon className="size-6 md:size-8 text-gray-900" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
