import "./index.css";
import skillsData from "../../data/skills-data";
import SkillsCard from "../../components/SkillsCard/SkillsCard";
import KeyPointsCard from './../../components/KeyPointsCard/KeyPointsCard';
import keyPointsData from './../../data/key-points-data';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title font-headline">About Me</h2>
        <span className="about-subtitle font-body">
          Turning Ideas Into Code
        </span>
        <p className="about-description font-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          dolores accusantium error aliquid, unde, deserunt voluptatibus animi
          eaque earum eveniet explicabo laborum adipisci labore totam, ab
          ratione eius sequi corrupti.
        </p>
        <div className="about-skills">
          {skillsData.map((skill) => (
            <SkillsCard
              key={skill.id}
              icon={skill.icon}
              title={skill.title}
              skills={skill.skills}
            />
          ))}
        </div>

        <div className="about-key-points">
          {keyPointsData.map((point) => (
            <KeyPointsCard key={point.id} icon={point.icon} title={point.title} description={point.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
