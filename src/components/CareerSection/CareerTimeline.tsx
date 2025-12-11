import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Award, Users, GraduationCap, Code } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "2024",
      title: "Early Tech & Business Enthusiast",
      subtitle: "Foundational Skills",
      description:
        "Started the journey into automation and web development. Developed proficiency in HTML, CSS, and Python, laying the groundwork for a tech-enabled business career.",
      icon: <Code className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "June 2025 – Present",
      title: "BBA (Finance & Marketing)",
      subtitle: "Christ University, Bangalore",
      description:
        "Pursuing a specialized degree focusing on the intersection of modern finance and strategic marketing. Leveraging technical skills in data analytics to bridge the gap between business strategy and operational efficiency.",
      icon: <GraduationCap className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2025 – Present",
      title: "Tech Tank Volunteer",
      subtitle: "Center for Academics & Professional Support (CAPS)",
      description:
        "Active member of the Tech Tank wing. Applying Python automation and web technologies (HTML/CSS) to streamline workflows. dedicated to fostering professional growth and technical proficiency among the student body.",
      icon: <Users className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2025",
      title: "Data & Automation Specialist",
      subtitle: "Professional Certifications",
      description:
        "Completed Google's Data Analytics Professional Certificate and University of Michigan's 'Python for Everybody'. Gained robust skills in data visualization, cleaning, and writing efficient automation scripts for business intelligence.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="A unique blend of Business Strategy, Finance, and Tech Automation"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
