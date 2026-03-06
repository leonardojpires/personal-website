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
          With over 2 years experience in full-stack development, I am specialized in building scalable and scalable web applications that deliver exceptional user experiences and measurable business value. My approach combines technical expertise with a deep understanding of user needs 
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
