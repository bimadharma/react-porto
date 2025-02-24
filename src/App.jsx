import { Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import Home from "./containers/home";
import About from "./containers/about";
import Portfolio from "./containers/portfolio";
import Feedback from "./containers/Feedback";
import Certifications from "./containers/Certifications";
import Navbar from "./components/navbar";
import ParticlesComponent from './utils.js/ParticlesComponent';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* particles js */}
      <ParticlesComponent />

      {/* navbar */}
      <Navbar />

      {/* Toast notification */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Certifications" element={<Certifications />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Feedback" element={<Feedback />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
