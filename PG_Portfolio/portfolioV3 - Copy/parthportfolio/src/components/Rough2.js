import React, { useState } from "react";
import { Github, Linkedin, Instagram, Mail, X } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProjectCard = ({ title, description, tags, videoUrl }) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <Card
        onClick={() => setShowPreview(true)}
        className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 
          hover:scale-105 hover:shadow-xl cursor-pointer group"
      >
        {/* Video Thumbnail */}
        <div className="h-48 bg-gray-700 rounded-lg mb-4 overflow-hidden">
          <video
            src={videoUrl}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            preload="metadata"
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 
          rounded-lg transition-opacity duration-300"
        />
      </Card>

      {/* Fullscreen Video Preview */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setShowPreview(false)}
            className="absolute top-4 right-4 p-2 bg-gray-800 rounded-lg 
              hover:bg-gray-700 transition-colors duration-300"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="w-full max-w-6xl p-4">
            <div className="relative rounded-lg overflow-hidden">
              <video
                src={videoUrl}
                className="w-full h-auto"
                controls
                autoPlay
                playsInline
              >
                Your browser does not support the video tag.
              </video>

              <div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t 
                from-black/80 to-transparent p-6"
              >
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-gray-300">{description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const SchoolProjects = () => {
  const projects = [
    {
      title: "Restaurant Management System",
      description:
        "A full-stack application for managing restaurant operations including order management, inventory tracking, and staff scheduling.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      videoUrl: "/path/to/your/video.mp4", // Replace with your video URL
    },
    {
      title: "Library Management System",
      description:
        "Digital library system with features for book tracking, member management, and automated notifications.",
      tags: ["C#", ".NET", "SQL Server", "WPF"],
      videoUrl: "/path/to/your/video.mp4", // Replace with your video URL
    },
    {
      title: "Student Portal",
      description:
        "Web-based student portal for course registration, grade viewing, and academic resource access.",
      tags: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      videoUrl: "/path/to/your/video.mp4", // Replace with your video URL
    },
    {
      title: "Inventory Management System",
      description:
        "Real-time inventory tracking system with barcode scanning and automated reordering capabilities.",
      tags: ["Python", "Django", "PostgreSQL", "Bootstrap"],
      videoUrl: "/path/to/your/video.mp4", // Replace with your video URL
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default SchoolProjects;
