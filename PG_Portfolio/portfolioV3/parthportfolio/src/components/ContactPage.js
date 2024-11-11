import { UserPen } from "lucide-react";

const ContactPage = () => {
  return (
    <section id="hire" className="relative min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Work with Me 👥
      </h1>
      <div className="bg-gray-800 p-6 rounded-lg mb-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <h3 className="text-xl font-bold mb-4">Send Me A Message</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-32 transition-all duration-300"
          />
          <button className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1">
            Send Message
          </button>
        </form>
      </div>
      <div className="absolute bottom-10 left-5">
        <h3 className="text-xl font-bold"> {`<---`} Or Contact Me Here</h3>
      </div>
    </section>
  );
};

export default ContactPage;
