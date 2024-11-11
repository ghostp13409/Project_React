import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css"; // Ensure this is where your CSS is

function Sidebar({ activeSection }) {
  return (
    <div className="sidebar">
      <h2>Parth Gajjar</h2>
      <h3>Developer</h3>
      <ul>
        <li
          className={`${
            activeSection === "skills" ? "active" : ""
          } sidebarOption_Container`}
        >
          <Link to="#skills">Skills</Link>
        </li>
        <li
          className={`${
            activeSection === "projects" ? "active" : ""
          } sidebarOption_Container`}
        >
          <Link to="#projects">Projects</Link>
        </li>
        <li
          className={`${
            activeSection === "education" ? "active" : ""
          } sidebarOption_Container`}
        >
          <Link to="#education">Education</Link>
        </li>
        <li
          className={`${
            activeSection === "contact" ? "active" : ""
          } sidebarOption_Container`}
        >
          <Link to="#contact">Hire Me!</Link>
        </li>
      </ul>
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Sidebar activeSection={activeSection} />
      <div className="main-content">
        <section id="skills">
          <h2>Skills</h2>
          <p>Here are my skills...</p>
          <p>Here are my skills...</p>
          <p>Here are my skills...</p>
          {/* Repeat for demonstration */}
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <p>Here are my projects...</p>
          <p>Here are my projects...</p>
          <p>Here are my projects...</p>
          {/* Repeat for demonstration */}
        </section>
        <section id="education">
          <h2>Education</h2>
          <p>Here is my education...</p>
          <p>Here is my education...</p>
          <p>Here is my education...</p>
          {/* Repeat for demonstration */}
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Here is my contact info...</p>
          <p>Here is my contact info...</p>
          <p>Here is my contact info...</p>
          {/* Repeat for demonstration */}
        </section>
      </div>
    </div>
  );
}

export default App;
