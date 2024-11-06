import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        {/* Page */}
        <MainContent />
      </div>
    </BrowserRouter>
  );
}

export default App;
