import projectsData from "../../data/projects-data";

import "./index.css";
import FeaturedProjectCard from './../../components/FeaturedProjectCard/FeaturedProjectCard';

export default function FeaturedProject() {
    return (
        <section className="featured-projects-section">
            <h2 className="featured-projects-title font-headline">Featured Projects</h2>

            <div className="featured-projects-container">
                <FeaturedProjectCard />
                <FeaturedProjectCard />
                <FeaturedProjectCard />
                <FeaturedProjectCard />
            </div>
        </section>
    )
}
