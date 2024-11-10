import { projects } from "./data";

const ProjectsPage = () => {
  return (
    <section id="projects" className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-bold mb-4">{p.title}</h3>
            <p className="text-gray-400 mb-4">{p.description}</p>
            <div className="flex gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-600 rounded-full text-sm"
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
export default ProjectsPage;
