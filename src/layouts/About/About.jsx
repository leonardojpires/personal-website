import "./index.css";
import skillsData from "../../data/skills-data";
import SkillsCard from "../../components/SkillsCard/SkillsCard";
import KeyPointsCard from './../../components/KeyPointsCard/KeyPointsCard';
import keyPointsData from './../../data/key-points-data';

export default function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="about-container">
        <h2 className="about-title font-headline" id="about-title">About Me</h2>
        <span className="about-subtitle font-body">
          Turning Ideas Into Code
        </span>
        <p className="about-description font-body">
          With over 2 years experience in full-stack development, I am specialized in building scalable and scalable web applications that deliver exceptional user experiences and measurable business value. My approach combines technical expertise with a deep understanding of user needs 
        </p>
        <ul className="about-skills" id="skills" aria-label="Core skills">
          {skillsData.map((skill) => (
            <li key={skill.id} className="list-none">
              <SkillsCard
                icon={skill.icon}
                title={skill.title}
                skills={skill.skills}
              />
            </li>
          ))}
        </ul>

        <ul className="about-key-points" aria-label="What I focus on">
          {keyPointsData.map((point) => (
            <li key={point.id} className="list-none about-key-point-item">
              <KeyPointsCard icon={point.icon} title={point.title} description={point.description} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
