import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./containers/home";
import About from "./containers/about"
import Resume from "./containers/resume"
import Portfolio from "./containers/portfolio"
import Contact from "./containers/contact"
import Skills from "./containers/skills"
import Navbar from "./components/navbar";
import ParticlesComponent from './utils.js/ParticlesComponent';

function App() {
  const location = useLocation();
  console.log(location);

  const renderParticleJsIHomePage = location.pathname === "/";


  return (
    <div className="App">
      {/* particles js */}

      {renderParticleJsIHomePage && <ParticlesComponent/>}
      

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
