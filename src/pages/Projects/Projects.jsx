import "./index.css";
import projectsData from './../../data/projects-data.js';
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function Projects() {
    return (
        <article className="projects-header-section">
            <section className="projects-header">
                <h1 className="projects-header-title font-headline">All Projects</h1>
                <p className="projects-header-description font-body">A collection of my work across various projects, from simple landing pages to complex web applications</p>
            </section>

            <section className="projects-container">
                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </section>
        </article>
    )
}
