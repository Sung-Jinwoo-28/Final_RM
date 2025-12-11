import { Badge } from "../lightswind/badge";
import { motion } from "framer-motion";

export const HeroSection = () => {
  // Consistent color variable
  const textColor = "text-[#003333] dark:text-gray-300";

  return (
    <motion.div
      id="hero"
      className="text-foreground bg-transparent flex flex-col md:flex-row 
      items-center justify-center max-w-7xl mx-auto w-full"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          // acts like staggerChildren / delayChildren
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      }}
    >
      {/* Left Section */}
      <motion.div
        className="flex-1 space-y-4 p-6 text-left md:text-left"
        initial={false} // so it inherits parent animation
      >
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          Rahul Modi
          <motion.span
            className="text-sm text-indigo-500 font-semibold block"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.8, ease: "easeOut" },
            }}
          >
            He / Him
          </motion.span>
        </motion.h1>

        <motion.h2
          className={`text-xl ${textColor} mt-1`}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          Aspiring Financial Analyst & Tech Enthusiast
        </motion.h2>

        <motion.p
          className={`mt-4 text-sm ${textColor}`}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          I’m a motivated student with a strong interest in finance,
          data analysis, and technology.I enjoy working with numbers,
          understanding market trends,& backend development, and creating 
          scalable solutions that captivate audiences. Passionate about
          blending creativity with technology to bring ideas to life.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-2"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          <Badge className="text-xs bg-indigo-500">Team Lead</Badge>
          <Badge className="text-xs bg-indigo-500">Problem Solving</Badge>
          <Badge className="text-xs bg-indigo-500">Decision Making</Badge>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="flex-1 flex justify-center p-6"
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
      >
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
          <img
            src="https://i.ibb.co/wZdwKbmp/9-FE22-A5-A-06-B9-4566-812-E-784-F8-C80-D629-1-105-c.jpg"
            alt="Scarlett Rose"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
