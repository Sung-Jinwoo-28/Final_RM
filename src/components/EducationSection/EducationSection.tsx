import { Card, CardHeader, CardTitle, CardContent } from "../lightswind/card";
import ProfessionalProfile from "./SkillCategory";
import { motion } from "framer-motion";

export const EducationSection = () => {
  // Updated color to #003333
  const textColor = "text-[#003333] dark:text-gray-300";

  return (
    <motion.section
      id="education"
      className="space-y-10 py-10 px-6"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Education */}
      <div>
        <motion.h3
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Education
        </motion.h3>

        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>BBA in Finance & Marketing Analytics</CardTitle>
              <p className={`text-base ${textColor}`}>
                Christ University, Bangalore — 2025 – Present
              </p>
            </CardHeader>
            <CardContent className={`text-sm ${textColor} space-y-2`}>
              <p>
                Specialized in <strong>Software Architecture</strong>,
                <strong> Distributed Systems</strong>, and
                <strong> Artificial Intelligence Applications</strong>.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Coursework in Financial Management, Marketing Analytics, and Business Statistics</li>
                <li>Hands-on experience using <strong>Python</strong> for data analysis and automation</li>
                <li>Developing skills in tools like <strong>Excel</strong>, and basic data modelling</li>
                <li>Experience with real-world business case studies and financial modelling concepts</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Higher Secondary Education (PCM)</CardTitle>
              <p className={`text-base ${textColor}`}>
                Rajkumar College — 2023 – 2025
              </p>
            </CardHeader>
            <CardContent className={`text-sm ${textColor} space-y-2`}>
              <p>
                Completed higher secondary education with a focus on Physics, 
                Chemistry, and Mathematics (PCM), developing <strong>strong logical thinking</strong>, 
                <strong> problem-solving abilities</strong>, and a structured approach to analytical challenges.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Strong foundation in Mathematics and analytical thinking</li>
                <li>Developed structured problem-solving skills through science-based learning</li>
                <li>Actively participated in academic and technical activities</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <ProfessionalProfile />
    </motion.section>
  );
};