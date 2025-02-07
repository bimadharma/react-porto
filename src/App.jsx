import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./containers/home";
import About from "./containers/about"
import Resume from "./containers/resume"
import Portfolio from "./containers/portfolio"
import Contact from "./containers/contact"
import Skills from "./containers/skills"
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      {/* particles js */}

      {/* navbar */}
      <Navbar/>
      {/* main page contect */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
