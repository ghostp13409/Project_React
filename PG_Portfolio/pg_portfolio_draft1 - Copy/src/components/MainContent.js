import { Route, Routes } from "react-router-dom";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Education from "../pages/Education";
import Contact from "../pages/Contact";
import Info from "../pages/Info";

const MainContent = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default MainContent;
