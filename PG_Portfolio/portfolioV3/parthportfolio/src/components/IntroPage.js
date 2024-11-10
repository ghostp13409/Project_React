import { Star, Code, Coffee } from "lucide-react";
const IntroPage = () => {
  return (
    <section id="intro" className="min-h-screen p-8">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
          <Star className="text-yellow-400 animate-spin-slow" size={24} />
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Hello World! 👋
        </h1>

        <p className="text-xl text-gray-300 mb-6">
          Welcome to my little corner of the internet! I'm a developer who turns
          coffee into code and bugs into features!
        </p>

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

      {/* Education Section */}
      <h2 className="text-3xl font-bold mb-8 mt-5 text-gray-300">Education</h2>
      <div className="bg-gray-800 p-6 rounded-lg mb-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
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

      <div className="flex flex-wrap gap-6">
        <div className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <h3 className="text-xl font-bold mb-4">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {["Java", "C#", "Python", "JavaScript", "HTML", "CSS"].map(
              (lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 bg-blue-600 rounded-full text-sm transform transition-transform duration-300 hover:scale-110"
                >
                  {lang}
                </span>
              )
            )}
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <h3 className="text-xl font-bold mb-4">Frameworks</h3>
          <div className="flex flex-wrap gap-2">
            {["React", "Express.js", "ASP.NET", "Node"].map((framework) => (
              <span
                key={framework}
                className="px-3 py-1 bg-green-600 rounded-full text-sm transform transition-transform duration-300 hover:scale-110"
              >
                {framework}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <h3 className="text-xl font-bold mb-4">Databases</h3>
          <div className="flex flex-wrap gap-2">
            {["MySQL", "SQLite", "MongoDB"].map((db) => (
              <span
                key={db}
                className="px-3 py-1 bg-purple-600 rounded-full text-sm transform transition-transform duration-300 hover:scale-110"
              >
                {db}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <h3 className="text-xl font-bold mb-4">
            Data Structures and Algorithms
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {[
              "Arrays",
              "Stacks",
              "Queues",
              "Hash Tables",
              "Binary Serach",
              "Two-Pointer",
              "Bubble Sort",
              "Insertion Sort",
              "Selection Sort",
              "Merge Sort",
            ].map((dsa) => (
              <span
                key={dsa}
                className="px-3 py-1 bg-sky-900 rounded-full text-sm transform transition-transform duration-300 hover:scale-110"
              >
                {dsa}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroPage;
