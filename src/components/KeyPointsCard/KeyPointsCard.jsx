import { createElement } from "react";
import "./index.css";

export default function KeyPointsCard({ icon: Icon, title, description }) {
  return (
    <article className="key-points-card" aria-label={title}>
      <span className="key-points-icon" aria-hidden="true">
        {Icon ? createElement(Icon) : null}
      </span>
      <h3 className="key-points-title font-headline">
        {title}
      </h3>
      <p className="key-points-description font-body">
        {description}
      </p>
    </article>
  );
}
