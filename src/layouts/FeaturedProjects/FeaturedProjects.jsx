import "./index.css";
import { Link } from 'react-router-dom';
import projectsData from "../../data/projects-data";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { FaArrowRight } from "react-icons/fa6";
import { useLanguage } from "@/context/useLanguage";
import { translations } from '@/data/translations';

export default function FeaturedProjects() {
    const { lang } = useLanguage();
    const featuredProjects = projectsData[lang].filter((project) => project.featured);

    return (
        <section id="featured-projects" className="featured-projects-section" aria-labelledby="featured-projects-title">
            <h2 className="featured-projects-title font-headline" id="featured-projects-title">{ translations[lang].featuredProjects.title }</h2>

            <div className="featured-projects-container">
                {featuredProjects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <Link to="/projects" className="featured-projects-link font-body">
                    { translations[lang].featuredProjects.viewAll } <FaArrowRight aria-hidden="true" focusable="false" />
                </Link>
            </div>
        </section>
    )
}
