import "./index.css";

export default function FeaturedProjectCard({ id, type, title, description, technologies, image }) {
  return (
    <div className="featured-project-card">
      <div className="featured-project-image">
        <img src={image} alt={title} />
        <div className="featured-project-overlay">
          <a href="#">View Project</a>
        </div>
      </div>

      <div className="featured-project-content">
        <div className="featured-project-type-container">
          <span className="featured-project-type font-body">{type}</span>
        </div>
        <h3 className="featured-project-title font-headline">{title}</h3>
        <p className="featured-project-description font-body">{description}</p>
        <div className="featured-project-technologies font-body">
            {technologies.map((tech) => (
                <span key={id} className="featured-project-technology">{tech}</span>
            ))}
        </div>
      </div>
    </div>
  );
}
