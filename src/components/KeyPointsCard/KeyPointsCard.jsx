import "./index.css";

export default function KeyPointsCard({ icon: Icon, title, description }) {
  return (
    <div className="key-points-card">
      <span className="key-points-icon">
        <Icon />
      </span>
      <h3 className="key-points-title font-headline">
        {title}
      </h3>
      <p className="key-points-description font-body">
        {description}
      </p>
    </div>
  );
}
