import { Link } from "react-router-dom";
import "./index.css";

export default function ProjectCard({
  id,
  type,
  title,
  description,
  technologies,
  image,
  featured,
  github,
  url,
}) {
  const isProjectsPage = window.location.pathname === "/projects";

  return (
    <div className="featured-project-card">
      <div className="featured-project-image">
        <img src={image} alt={title} />
        <div className="featured-project-overlay">
          <a href="#">View Project</a>
        </div>
      </div>

      <div className="featured-project-content flex flex-col flex-1 justify-between">
        <div>
          <div className="featured-project-type-container">
            <span className="featured-project-type font-body">{type}</span>
          </div>
          <h3 className="featured-project-title font-headline">{title}</h3>
          <p className="featured-project-description font-body">{description}</p>
          <div className="featured-project-technologies font-body">
            {technologies.map((tech) => (
              <span key={id + tech} className="featured-project-technology">
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
