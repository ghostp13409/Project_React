import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

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
