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
            <div className="featured-projects-heading">
                <span className="section-eyebrow font-body">{ translations[lang].featuredProjects.eyebrow }</span>
                <h2 className="featured-projects-title font-headline" id="featured-projects-title">{ translations[lang].featuredProjects.title }</h2>
                <p className="featured-projects-description font-body">{ translations[lang].featuredProjects.description }</p>
            </div>

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
