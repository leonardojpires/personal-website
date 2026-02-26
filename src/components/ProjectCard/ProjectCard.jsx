import { Link } from "react-router-dom";
import "./index.css";

export default function ProjectCard({
  id,
  type,
  title,
  description,
  technologies,
  image,
  github,
  url,
}) {
  const isProjectsPage = window.location.pathname === "/projects";

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
        <div className="project-overlay">
          <a href="#">View Project</a>
        </div>
      </div>

      <div className="project-content flex flex-col flex-1 justify-between">
        <div>
          <div className="project-type-container">
            <span className="project-type font-body">{type}</span>
          </div>
          <h3 className="project-title font-headline">{title}</h3>
          <p className="project-description font-body">{description}</p>
          <div className="project-technologies font-body">
            {technologies.map((tech) => (
              <span key={id + tech} className="project-technology">
                {tech}
              </span>
            ))}
          </div>
        </div>
        {isProjectsPage && (
          <div className="project-links font-body">
            <Link
              to={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-links-link"
            >
              Code
            </Link>
            <Link
              to={url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-links-link"
            >
              Live Demo
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
