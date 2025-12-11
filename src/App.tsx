import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection"; 
import { AboutSection } from "./components/AboutSection/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection";
import { EducationSection } from "./components/EducationSection/EducationSection";
import { CareerTimeline } from "./components/CareerSection/CareerTimeline";
import ContactSection from "./components/ContactSection/ContactSection";
import { Carousel3D } from "./components/Carousel3D/Carousel3D";

import { ReactLenis } from "lenis/react";
import Dock from "./components/lightswind/dock";
import {
  Home,
  User,
  GraduationCap,
  Briefcase,
  FolderKanban,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [showDock, setShowDock] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowDock(false);
      } else {
        setShowDock(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const dockItems = [
    { icon: <Home size={24} />, label: "Home", onClick: () => scrollToSection("home") },
    { icon: <User size={24} />, label: "About", onClick: () => scrollToSection("about") },
    { icon: <GraduationCap size={24} />, label: "Education", onClick: () => scrollToSection("education") },
    { icon: <Briefcase size={24} />, label: "Career", onClick: () => scrollToSection("career") },
    { icon: <FolderKanban size={24} />, label: "Projects", onClick: () => scrollToSection("projects") },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      
      {/* The Animation Background */}
      
      <ReactLenis root>
        <Header />

        <div className="w-full bg-transparent max-w-5xl px-4 my-32 flex items-center justify-center lg:rounded-3xl backdrop-blur-xl border-gray-100 dark:border-gray-900 relative z-10">
          <div className="z-10 w-full">
            <div id="home"><HeroSection /></div>
            <div id="about"><AboutSection /></div>
            
            {/* Changed overflow-hidden to overflow-visible */}
            <div id="journey" className="py-10 overflow-visible rounded-xl my-8">
              {/* CHANGE: Replaced 'text-white' with 'text-[var(--text-main)]' */}
              <h1 className="font-[family-name:var(--font-aldrich)] text-[var(--text-main)] text-4xl text-center">
                My Tech Journey
              </h1><br /><br/>
              <Carousel3D />
            </div>

            <div id="education"><EducationSection /></div>
            <div id="career"><CareerTimeline /></div>
            <div id="projects"><ProjectsSection /></div>
            <div id="contact"><ContactSection /></div>
          </div>
        </div>

        <AnimatePresence>
          {showDock && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-10 left-0 right-0 flex justify-center z-50 pointer-events-none"
            >
              <div className="pointer-events-auto">
                <Dock items={dockItems} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </ReactLenis>
    </div>
  );
}

export default App;