import "./index.css";
import skillsData from "../../data/skills-data";
import SkillsCard from "../../components/SkillsCard/SkillsCard";
import KeyPointsCard from './../../components/KeyPointsCard/KeyPointsCard';
import keyPointsData from './../../data/key-points-data';
import { useLanguage } from "@/context/useLanguage";
import { translations } from "@/data/translations";

export default function About() {
  const { lang } = useLanguage();

  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="about-container">
        <span className="section-eyebrow font-body">{ translations[lang].about.eyebrow }</span>
        <h2 className="about-title font-headline" id="about-title">{ translations[lang].about.sectionTitle }</h2>
        <p className="about-description font-body">
          { translations[lang].about.description }
        </p>
        <ul className="about-skills" id="skills" aria-label="Core skills">
          {skillsData[lang].map((skill) => (
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
          {keyPointsData[lang].map((point) => (
            <li key={point.id} className="list-none about-key-point-item">
              <KeyPointsCard icon={point.icon} title={point.title} description={point.description} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
