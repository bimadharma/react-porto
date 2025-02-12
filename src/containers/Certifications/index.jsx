import "./styles.scss";
import PageHanderContect from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project Title 1",
      description: "A brief description of the project and the technologies used.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
      link: "#"
    },
    {
      id: 2,
      title: "Project Title 2",
      description: "A brief description of the project and the technologies used.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
      link: "#"
    },
    {
      id: 3,
      title: "Project Title 3",
      description: "A brief description of the project and the technologies used.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
       <PageHanderContect headerText="Certifications" icon={<BsInfoCircleFill size={40} />} />
      <div className="container">
        <div className="grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
