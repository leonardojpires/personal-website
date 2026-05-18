import "./index.css";
import projectsData from "./../../data/projects-data.js";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { motion as Motion } from "framer-motion";
import { useLanguage } from "@/context/useLanguage";
import { translations } from "@/data/translations";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function Projects() {
  const { lang } = useLanguage();
  const totalProjects = projectsData[lang].length;
  const total = translations[lang].projectsPage.total.replace(
    "{totalProjects}",
    totalProjects
  )

  return (
    <article className="projects-header-section">
      <Motion.section
        className="projects-header"
        {...fadeInUp}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="projects-intro">
          <div className="projects-back-row">
            <Link to="/" className="projects-back-button" aria-label={translations[lang].projectsPage.backButton}>
              <FiArrowLeft className="projects-back-icon" aria-hidden="true" focusable="false" />
            </Link>
            <span className="tracking-widest uppercase font-bold text-xs md:text-sm text-(--color-primary) font-body text-start px-3 py-1 rounded-full bg-clip-border">
              { total }
            </span>
          </div>
          <h1 className="projects-header-title font-headline">
            { translations[lang].projectsPage.title }
          </h1>
        </div>
        <p className="projects-header-description font-body">
          { translations[lang].projectsPage.description }
        </p>
      </Motion.section>

      <section className="projects-container">
        <div className="projects-grid">
          {projectsData[lang].map((project, index) => (
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
