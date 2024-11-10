import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import SkillsPage from "./SkillsPage";
import ProjectsPage from "./ProjectsPage";
import EducationPage from "./EducationPage";
import ContactPage from "./ContactPage";
import IntroPage from "./IntroPage";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["intro", "skills", "projects", "education", "hire"];

      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: "-50% 0px",
        threshold: 0,
      });

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.observe(element);
      });

      return () => observer.disconnect();
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Intro Section */}
          <IntroPage />

          {/* Skills Section */}
          <SkillsPage />

          {/* Projects Section */}
          <ProjectsPage />

          {/* Education Section */}
          <EducationPage />

          {/* Hire Me Section */}
          <ContactPage />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
