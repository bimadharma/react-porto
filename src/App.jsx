import { Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import Home from "./containers/home";
import About from "./containers/about"
import Portfolio from "./containers/portfolio"
import Contact from "./containers/contact"
import Skills from "./containers/skills"
import Navbar from "./components/navbar";
import ParticlesComponent from './utils.js/ParticlesComponent';

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
      {/* particles js */}

      <ParticlesComponent/>
      

      {/* navbar */}
      <Navbar/>
      {/* main page contect */}
      <div className="App__main-page-content">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
