import { socials } from "./data";

const ContactPage = () => {
  return (
    <section id="hire" className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-8">Hire Me!</h2>
      <div className="bg-gray-800 p-6 rounded-lg mb-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <h3 className="text-xl font-bold mb-4">Work With Me...</h3>
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

      <div className="flex gap-4">
        {socials.map((social, Icon) => (
          <a
            href={social.url}
            className="p-2 bg-gray-800 rounded-lg transform transition-all duration-300 hover:scale-110 hover:bg-gray-700"
          >
            {social.Icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactPage;
