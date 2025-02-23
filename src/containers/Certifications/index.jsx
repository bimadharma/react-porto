import "./styles.scss";
import { useEffect, useState } from "react";
import api from "../../utils.js/api";
import PageHanderContect from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

const Projects = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await api.get("/certificates");
        console.log(response.data); 
        setCertificates(response.data);
      } catch (error) {
        console.error("Error fetching certificates:", error);
        setError("Gagal memuat sertifikat.");
      } finally {
        setLoading(false); 
      }
    };
    fetchCertificates();
  }, []);

  return (
    <section id="projects" className="projects">
      <PageHanderContect headerText="Certifications" icon={<BsInfoCircleFill size={40} />} />
      <div className="container">
        {loading ? ( 
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading certifications...</p>
          </div>
        ) : error ? ( 
          <p className="error-message">{error}</p>
        ) : (
          <div className="grid">
            {certificates.map((certificate) => (
              <div key={certificate.id} className="project-card">
                <img src={certificate.link_img} alt={certificate.title} className="project-image" />
                <div className="project-content">
                  <h3 className="project-title">{certificate.title}</h3>
                  <p className="project-description">{certificate.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
