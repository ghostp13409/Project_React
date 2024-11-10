import React, { useRef, useState, useEffect } from "react";
import {
  Code,
  Coffee,
  Sparkles,
  Brain,
  Rocket,
  Heart,
  Star,
  Trophy,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const [coffeeCount, setCoffeeCount] = useState(0);

  // Refs for scroll targets
  const introRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const hireRef = useRef(null);

  // Setup intersection observer
  useEffect(() => {
    const options = {
      threshold: 0.5,
      rootMargin: "-20% 0px -79% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute("data-section"));
        }
      });
    }, options);

    [introRef, skillsRef, projectsRef, educationRef, hireRef].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Fun facts and coding quotes
  const funFacts = [
    "I debug with console.log() and I'm not ashamed of it! 😄",
    "My code works on my machine... and hopefully on yours too! 🤞",
    "I speak multiple languages, but my favorite is JavaScript... just kidding! 😉",
    "I've written more lines of code than I've had cups of coffee... maybe.",
  ];

  const languages = [
    "Java",
    "C#",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "PHP",
  ];
  const frameworks = ["React", "ASP.NET", "Express", "Node"];
  const databases = ["MySQL", "SQLite", "MongoDB"];

  const projects = [
    {
      title: "🚀 Super Cool Project 1",
      description: "It's like Facebook, but for pets... just kidding!",
      tags: ["React", "Node", "MongoDB"],
    },
    {
      title: "🎮 Awesome Project 2",
      description: "Made this while drinking coffee at 3 AM",
      tags: ["Python", "Flask"],
    },
    {
      title: "🌟 Epic Project 3",
      description: "This one actually works! Most of the time...",
      tags: ["Java", "Spring"],
    },
    {
      title: "🎯 Neat Project 4",
      description: "My masterpiece (until I make something better)",
      tags: ["C#", ".NET"],
    },
  ];

  const NavButton = ({ section, icon: Icon, label, targetRef }) => (
    <button
      onClick={() => scrollToSection(targetRef)}
      className={`w-full text-left px-4 py-2 rounded transition-colors duration-200 flex items-center gap-2 ${
        activeSection === section
          ? "bg-blue-600 text-white"
          : "text-gray-300 hover:bg-gray-700"
      }`}
    >
      <Icon size={18} />
      {label}
    </button>
  );

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 shadow-lg p-6">
        <div className="mb-8 relative group">
          <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-200">
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 animate-gradient" />
          </div>
          <h2 className="text-xl font-bold text-center text-gray-100">
            Parth Gajjar
          </h2>
          <p className="text-gray-400 text-center">
            Code Wizard in Training ✨
          </p>

          <div className="mt-2 text-center">
            <button
              onClick={() => setCoffeeCount((prev) => prev + 1)}
              className="text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-200"
            >
              ☕ × {coffeeCount} cups of coffee consumed
            </button>
          </div>
        </div>

        <nav className="space-y-4">
          <NavButton
            section="intro"
            icon={Sparkles}
            label="Intro"
            targetRef={introRef}
          />
          <NavButton
            section="skills"
            icon={Brain}
            label="Skills"
            targetRef={skillsRef}
          />
          <NavButton
            section="projects"
            icon={Rocket}
            label="Projects"
            targetRef={projectsRef}
          />
          <NavButton
            section="education"
            icon={Trophy}
            label="Education"
            targetRef={educationRef}
          />
          <NavButton
            section="hire"
            icon={Heart}
            label="Hire Me!"
            targetRef={hireRef}
          />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-8">
        {/* Intro Section */}
        <section ref={introRef} data-section="intro" className="mb-12">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <Star className="text-yellow-400 animate-spin-slow" size={24} />
            </div>

            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Hello World! 👋
            </h1>

            <p className="text-xl text-gray-300 mb-6">
              Welcome to my little corner of the internet! I'm a developer who
              turns coffee into code and bugs into features!
            </p>

            <div className="bg-gray-700 p-4 rounded-lg mb-6">
              <h3 className="font-bold text-blue-400 mb-2">
                Fun Fact of the Day:
              </h3>
              <p className="text-gray-300 italic">
                {funFacts[Math.floor(Math.random() * funFacts.length)]}
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Code size={20} />
                <span>1,000+ commits</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Coffee size={20} />
                <span>∞ cups of coffee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the sections remain the same, just updating the styling and content to be more fun */}
        {/* Skills Section */}
        <section ref={skillsRef} data-section="skills" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-100 flex items-center gap-2">
            <Brain className="text-blue-400" />
            Super Powers (aka Skills)
          </h2>

          <div className="grid gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 transform hover:scale-102 transition-transform duration-200">
              <h3 className="font-bold mb-4 text-gray-100 flex items-center gap-2">
                <Code size={20} className="text-blue-400" />
                Languages I Speak (Besides Human)
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="bg-blue-900 text-blue-100 px-3 py-1 rounded hover:bg-blue-800 transition-colors duration-200"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Similar updates for Frameworks and Soft Skills sections... */}
            {/* Projects, Education, and Hire Me sections follow the same pattern */}
          </div>
        </section>

        {/* Projects Section with fun descriptions */}
        <section ref={projectsRef} data-section="projects" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-100 flex items-center gap-2">
            <Rocket className="text-blue-400" />
            My Digital Adventures
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-blue-500 transition-colors duration-200"
              >
                <h3 className="font-bold mb-2 text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 italic">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-600 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rest of the sections... */}
        {/* Education and Hire Me sections would follow similar patterns with added personality */}
      </div>
    </div>
  );
};

export default Portfolio;
