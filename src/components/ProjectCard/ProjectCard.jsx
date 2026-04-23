import "./index.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaCodeBranch } from "react-icons/fa6";
import { GrDeploy } from "react-icons/gr";

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
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  const isProjectsPage = location.pathname === "/projects";
  const primaryProjectLink = url || github;

  return (
    <article className="project-card" aria-labelledby={`project-${id}-title`}>
      <div className="project-image">
        {!isLoaded && <div className="project-image-skeleton" aria-hidden="true" />}
        <img
          src={image}
          alt={`${title} project preview`}
          loading="lazy"
          className={`project-image-photo ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
        />
        <div className="project-overlay">
          {primaryProjectLink ? (
            <a
              href={primaryProjectLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title}`}
            >
              View Project
            </a>
          ) : (
            <span className="project-overlay-disabled" aria-disabled="true">
              Project coming soon
            </span>
          )}
        </div>
      </div>

      <div className="project-content flex flex-col flex-1 justify-between">
        <div>
          <div className="project-type-container">
            <span className="project-type font-body">{type}</span>
          </div>
          <h3 className="project-title font-headline" id={`project-${id}-title`}>
            {title}
          </h3>
          <p className="project-description font-body">{description}</p>
          <ul className="project-technologies font-body" aria-label={`${title} technologies`}>
            {technologies.map((tech) => (
              <li key={id + tech} className="project-technology">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        {isProjectsPage && (
          <div className="project-links font-body">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-links-link"
              aria-label={`Open ${title} source code repository`}
            >
              <FaCodeBranch aria-hidden="true" focusable="false" />
              Code
            </a>
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-links-link"
                aria-label={`Open ${title} live demo`}
              >
                <GrDeploy aria-hidden="true" focusable="false" />
                Live Demo
              </a>
            ) : null}
          </div>
        )}
      </div>
    </article>
  );
}
