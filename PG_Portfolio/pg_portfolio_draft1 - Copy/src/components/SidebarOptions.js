import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [activeSection, setActiveSection] = useState("skills");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      {" "}
      <div className="sidebarOptions">
        {" "}
        <Link
          to="/skills"
          className={`${
            activeSection === "skills" ? "active" : ""
          } sidebarOption_Container`}
          onClick={() => handleSectionClick("skills")}
        >
          {" "}
          <div>Skills</div>{" "}
        </Link>{" "}
        <Link
          to="/projects"
          className={`${
            activeSection === "projects" ? "active" : ""
          } sidebarOption_Container`}
          onClick={() => handleSectionClick("projects")}
        >
          {" "}
          <div>Projects</div>{" "}
        </Link>{" "}
        <Link
          to="/education"
          className={`${
            activeSection === "education" ? "active" : ""
          } sidebarOption_Container`}
          onClick={() => handleSectionClick("education")}
        >
          {" "}
          <div>Education</div>{" "}
        </Link>{" "}
        <Link
          to="/contact"
          className={`${
            activeSection === "contact" ? "active" : ""
          } sidebarOption_Container`}
          onClick={() => handleSectionClick("contact")}
        >
          {" "}
          <div>Hire Me!</div>{" "}
        </Link>{" "}
      </div>{" "}
    </>
  );
}

export default Sidebar;
