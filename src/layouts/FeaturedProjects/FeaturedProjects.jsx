import "./index.css";
import { Link } from 'react-router-dom';
import projectsData from "../../data/projects-data";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { FaArrowRight } from "react-icons/fa6";

export default function FeaturedProjects() {
    const featuredProjects = projectsData.filter((project) => project.featured);

    return (
        <section id="featured-projects" className="featured-projects-section" aria-labelledby="featured-projects-title">
            <h2 className="featured-projects-title font-headline" id="featured-projects-title">Featured Projects</h2>

            <div className="featured-projects-container">
                {featuredProjects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <Link to="/projects" className="featured-projects-link font-body">
                    View All Projects <FaArrowRight aria-hidden="true" focusable="false" />
                </Link>
            </div>
        </section>
    )
}
