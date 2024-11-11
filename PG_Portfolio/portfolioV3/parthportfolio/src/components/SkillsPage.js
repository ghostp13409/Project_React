import { Code, Coffee } from "lucide-react";
import ProfileStats from "./ProfileStats";
import { Skills, Certificates, CollageProjects } from "./data";
import ProjectCard from "./ProjectCard";

const SkillsPage = () => {
  return (
    <section id="skills" className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Here's Some Cool Stuff I Did 👨‍🎓
      </h1>

      {/* <ProfileStats className="mt-6" /> */}

      <div className="grid grid-cols-2 gap-6 mt-6">
        <div>
          <h2 className="text-3xl font-bold mb-8 text-gray-300">College</h2>
          <div className="bg-gray-800 p-6 rounded-lg mb-6 mt-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xl font-bold mb-2">
              Computer Programming and Analysis (Level 3) (Co-op)
            </h3>
            <p className="text-gray-400">Conestoga College</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-gray-300">
            Certificates
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {Certificates.map((cert) => (
              <a
                href={cert.link}
                key={cert.id}
                className={`bg-gray-800 p-4 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <h4 className="font-bold">{cert.title}</h4>
                <p className="text-gray-400">
                  {cert.date} | {cert.issuer}
                </p>
                <div className="flex gap-4 justify-center mt-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 bg-gray-700 rounded-full text-sm`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <h2 className="text-3xl font-bold mb-8 mt-8 text-gray-300">Skills</h2>

      {/* Skills Map */}
      <div className="flex flex-wrap gap-6">
        {Skills.map((skillset) => (
          <div
            key={skillset.id}
            className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold mb-4">{skillset.title}</h3>
            <div className="grid grid-cols-4 gap-2">
              {skillset.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 ${skillset.color} rounded-full text-sm transform transition-transform duration-300 hover:scale-110`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
