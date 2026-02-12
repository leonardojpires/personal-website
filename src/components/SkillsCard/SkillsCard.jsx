import "./index.css";

export default function SkillsCard({ icon: Icon, title, skills }) {
  return (
    <div className="about-skill">
      <div className="flex flex-col items-center gap-4 mb-4 text-center">
          <span><Icon /></span>
          <h3 className="font-headline">{title}</h3>
      </div>
      <div className="about-skill-list font-body">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </div>
  );
}
