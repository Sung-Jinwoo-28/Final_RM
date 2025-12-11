import { Separator } from "../lightswind/separator";
import { motion } from "framer-motion";

export const AboutSection = () => {
  // Consistent color variable
  const textColor = "text-[#003333] dark:text-gray-300";

  return (
    <motion.div
      id="about"
      className="text-foreground max-w-7xl mx-auto w-full px-6 py-12 space-y-4"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className={`${textColor} text-base md:text-lg leading-relaxed max-w-3xl`}>
        I am an aspiring financial analyst with a strong interest in understanding markets,
        analyzing financial data, and solving real-world business problems using technology.
        I enjoy working with numbers, identifying patterns,and transforming complex data
        into clear, useful insights. Currently, I am building a strong foundation in finance,
        accounting, and data analytics while exploring tools and technologies that help improve
        decision-making. I am highly motivated, detail-oriented, and always eager to learn new
        skills that help me grow both professionally and personally.
      </p>
      <p className={`${textColor} text-base md:text-lg leading-relaxed max-w-3xl`}>
        I believe in continuous learning and enjoy taking on new challenges that push me to
        think critically and analytically.
      </p>
      <Separator />
    </motion.div>
  );
};