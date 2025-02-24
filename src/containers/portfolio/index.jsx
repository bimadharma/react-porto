import "./styles.scss";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import PageHanderContect from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import api from "../../utils.js/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/projects");
        setProjects(response.data);
      } catch (err) {
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, []);

  return (
    <section className="projects">
      <PageHanderContect headerText="Portofolio Project" icon={<BsInfoCircleFill size={40} />} />
      <div className="container">
        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading Projects...</p> 
          </div>
        )}
        {error && <p className="error-message">{error}</p>}
        {!loading && !error && (
          <div className="grid-porto">
            {projects.map((project) => (
              <div key={project.id} className="project-card-porto">
                <img src={project.link_img} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink size={16} />
                  </a>
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