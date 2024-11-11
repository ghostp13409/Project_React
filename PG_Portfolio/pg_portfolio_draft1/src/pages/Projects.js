import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import TagFilter from "../components/TagFilter";

const projects = [
  {
    id: 1,
    title: "DSA Exercises",
    description:
      "Solved 70+ algorithmic problems on LeetCode. Analyzed time and space complexity for multiple algorithms, ensuring efficient and scalable solutions. Implemented and optimized algorithms for sorting, searching, and dynamic programming, reducing computation time by 30%.",
    imageUrl: "./logos/profile_logo.jpeg",
    tags: ["Java", "C#", "Algorithms"],
  },
  {
    id: 2,
    title: "LMS – Learning Management System (Open Source)",
    description:
      'Designed and integrated core system component "Progress Items". Developed comprehensive test cases for seamless system integration. Maintained and improved documentation and code formatting.',
    imageUrl: "./logos/profile_logo.jpeg",
    tags: ["C#", "SQLite"],
  },
  {
    id: 3,
    title: "Web Scrapper",
    description:
      "Developed Selenium-based web scrapers for stock and price monitoring on local retail sites. Implemented customized SMS-based alerts using IFTTT APIs, resulting in an early edge on stock details in a competitive market.",
    imageUrl: "./logos/profile_logo.jpeg",
    tags: ["Python", "Selenium", "Web Scraping"],
  },
  {
    id: 4,
    title: "Trading Bot",
    description:
      "Strategized a volatility-based trading bot. Designed the trading algorithm and simulated paper trading for testing. Deployed and experimented on the Binance platform for performance tuning.",
    imageUrl: "./logos/profile_logo.jpeg",
    tags: ["Python", "Trading", "Binance"],
  },
  {
    id: 5,
    title: "E-commerce Website",
    description:
      "Designed a fully class-based product and order system for scalability and code efficiency. Handcrafted CSS styling for a unique web design.",
    imageUrl: "./logos/profile_logo.jpeg",
    tags: ["JavaScript", "Express", "MongoDB", "EJS"],
  },
];

const allTags = ["All", "Java", "Python", "C#", "JavaScript", "React"];

const ProjectPage = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  return (
    <div className="project-page">
      <TagFilter
        tags={allTags}
        selectedTag={selectedTag}
        onTagClick={handleTagClick}
      />
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
