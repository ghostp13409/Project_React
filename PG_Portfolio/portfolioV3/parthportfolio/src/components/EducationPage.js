const EducationPage = () => {
  return (
    <section id="education" className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
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
    </section>
  );
};

export default EducationPage;
