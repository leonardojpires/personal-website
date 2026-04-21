import { createElement } from "react";
import "./index.css";

export default function SkillsCard({ icon: Icon, title, skills }) {
  return (
    <article className="about-skill" aria-label={title}>
      <div className="flex flex-col items-center gap-4 mb-4 text-center">
          <span aria-hidden="true">
            {Icon ? createElement(Icon) : null}
          </span>
          <h3 className="font-headline">{title}</h3>
      </div>
      <ul className="about-skill-list font-body" aria-label={`${title} technologies`}>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}
