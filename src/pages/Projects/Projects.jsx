import "./index.css";
import projectsData from "./../../data/projects-data.js";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { motion as Motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function Projects() {
  const totalProjects = projectsData.length;

  return (
    <article className="projects-header-section">
      <Motion.section
        className="projects-header"
        {...fadeInUp}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="projects-intro">
          <div className="projects-back-row">
            <Link to="/" className="projects-back-button" aria-label="Back to home">
              <FiArrowLeft className="projects-back-icon" aria-hidden="true" focusable="false" />
            </Link>
            <span className="tracking-widest uppercase font-bold text-xs md:text-sm text-(--color-primary) font-body text-start px-3 py-1 rounded-full bg-clip-border">
              A collection of my work | { totalProjects } projects
            </span>
          </div>
          <h1 className="projects-header-title font-headline">
            Project's Library
          </h1>
        </div>
        <p className="projects-header-description font-body">
          A polished showcase of my selected web applications, designed to
          highlight the built experience, architecture, and deployment details
          behind each project.
        </p>
      </Motion.section>

      <section className="projects-container">
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <Motion.div
              key={project.id}
              {...fadeInUp}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: index * 0.08,
              }}
            >
              <ProjectCard {...project} />
            </Motion.div>
          ))}
        </div>
      </section>
    </article>
  );
}
