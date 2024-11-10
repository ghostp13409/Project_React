import { Code, Coffee } from "lucide-react";
import ProfileStats from "./ProfileStats";
import { Skills } from "./data";

const SkillsPage = () => {
  return (
    <section id="skills" className="min-h-screen p-8">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 relative overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Here's Some Cool Stuff I Did 👨‍🎓
        </h1>

        <p className="text-xl text-gray-300 mb-6 mt-3">
          I've been studying Computer Programming and Analysis at Conestoga
          College for a while now.
        </p>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Code size={20} />
            <span>1000+ days of code</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Coffee size={20} />
            <span>∞ cups of coffee</span>
          </div>
        </div>
      </div>
      {/* <ProfileStats className="mt-6" /> */}
      {/* Education Section */}
      <div className="bg-gray-800 p-6 rounded-lg mb-6 mt-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <h3 className="text-xl font-bold mb-2">
          Computer Programming and Analysis (Level 3)
        </h3>
        <p className="text-gray-400">Conestoga College - Present</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {["DSA", "React Essential Training", "OOP with C#", "SQLite"].map(
          (course) => (
            <div
              key={course}
              className="bg-gray-800 p-4 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h4 className="font-bold">{course}</h4>
              <p className="text-gray-400">Certificate</p>
            </div>
          )
        )}
      </div>

      {/* Skills Section */}
      <h2 className="text-3xl font-bold mb-8 mt-5 text-gray-300">Skills</h2>

      {/* Skills Map */}
      <div className="grid grid-cols-3 gap-6">
      {Skills.map((skillset) => (
        
          <div
            key={skillset.id}
            className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold mb-4">{skillset.title}</h3>
            <div className="flex flex-wrap gap-2">
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
