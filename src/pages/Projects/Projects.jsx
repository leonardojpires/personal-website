import "./index.css";
import projectsData from './../../data/projects-data.js';
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { motion as Motion } from "framer-motion";

const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 }
};

export default function Projects() {
    return (
        <article className="projects-header-section">
            <Motion.section
                className="projects-header"
                {...fadeInUp}
                transition={{ duration: 0.55, ease: "easeOut" }}
            >
                <h1 className="projects-header-title font-headline">All Projects</h1>
                <p className="projects-header-description font-body">A collection of my work across various projects, from simple landing pages to complex web applications</p>
            </Motion.section>

            <section className="projects-container">
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <Motion.div
                            key={project.id}
                            {...fadeInUp}
                            transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
                        >
                            <ProjectCard {...project} />
                        </Motion.div>
                    ))}
                </div>
            </section>
        </article>
    )
}
