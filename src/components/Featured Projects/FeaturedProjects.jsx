import projectsData from "../../data/projects-data";

import "./index.css";

export default function FeaturedProject() {
    return (
        <section className="featured-projects-section">
            <h2 className="featured-projects-title font-headline">Featured Projects</h2>

            <div className="featured-projects-container">
                <div className="featured-project-card">
                    <div className="featured-project-image">
                        <img src="https://placehold.co/600x250" alt="" />
                        <div className="featured-project-overlay">
                            <a href="#">View Project</a>
                        </div>
                    </div>

                    <div className="featured-project-content">
                        <div className="featured-project-type-container">
                            <span className="featured-project-type font-body">Project Type</span>
                        </div>
                        <h3 className="featured-project-title font-headline">Project Title</h3>
                        <p className="featured-project-description font-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto cumque nemo nulla sint temporibus officiis aliquid asperiores dignissimos doloremque eaque odio minima voluptatum tempora, ex magni. Vero, aliquam in!</p>
                        <div className="featured-project-technologies font-body">
                            <span className="featured-project-technology">React.js</span>
                            <span className="featured-project-technology">Node.js</span>
                            <span className="featured-project-technology">Express</span>
                            <span className="featured-project-technology">MySQL</span>
                            <span className="featured-project-technology">Sequelize</span>
                        </div>
                    </div>
                </div>

                <div className="featured-project-card">
                    <div className="featured-project-image">
                        <img src="https://placehold.co/600x250" alt="" />
                        <div className="featured-project-overlay">
                            <a href="#" className="font-body">View Project</a>
                        </div>
                    </div>

                    <div className="featured-project-content">
                        <div className="featured-project-type-container">
                            <span className="featured-project-type font-body">Project Type</span>
                        </div>
                        <h3 className="featured-project-title font-headline">Project Title</h3>
                        <p className="featured-project-description font-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto cumque nemo nulla sint temporibus officiis aliquid asperiores dignissimos doloremque eaque odio minima voluptatum tempora, ex magni. Vero, aliquam in!</p>
                        <div className="featured-project-technologies font-body">
                            <span className="featured-project-technology">React.js</span>
                            <span className="featured-project-technology">Node.js</span>
                            <span className="featured-project-technology">Express</span>
                            <span className="featured-project-technology">MySQL</span>
                            <span className="featured-project-technology">Sequelize</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
