import React, { useState } from "react";
import { FaDownload, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./styles.scss";
import CV from "../../assets/file/CV - Bima Dharma Yahya.pdf";
import ProfileImage from "../../assets/images/profile-1.jpeg";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowCV = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <img src={ProfileImage} alt="Profile" className="profile-image" />
        <h1>Bima Dharma Yahya</h1>
        <h2 className="text-animation">Front end Developer</h2>

        <div className="home__actions">
          <a href={CV} className="download-btn" onClick={handleShowCV}>
            <FaDownload className="icon" /> Download Curriculum Vitae
          </a>
        </div>

        <div className="home__socials">
          <a href="https://www.instagram.com/bimadharmayahyaa/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://github.com/bimadharma" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="http://linkedin.com/in/bima-dharma-yahya" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowModal(false)}>
              ✖
            </button>
            <iframe
              src={CV}
              title="CV Viewer"
              width="100%"
              height="500px"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
