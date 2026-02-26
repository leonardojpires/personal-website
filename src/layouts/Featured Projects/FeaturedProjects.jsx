import "./index.css";
import projectsData from "../../data/projects-data";
import { Link } from 'react-router-dom';
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function FeaturedProject() {
    return (
        <section id="featured-projects" className="featured-projects-section">
            <h2 className="featured-projects-title font-headline">Featured Projects</h2>

            <div className="featured-projects-container">
                {projectsData.map((project) => {
                    if (project.featured) {
                        return (
                            <ProjectCard key={project.id} {...project} />
                        )
                    }
                })}
            </div>

            <div className="flex justify-center mt-12">
                <Link to="/projects" className="featured-projects-link font-body">View All Projects</Link>
            </div>
        </section>
    )
}
