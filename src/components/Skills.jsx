const skills = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Responsive Design",
  "Component-Based UI",
  "Form Validation",
  "Python",
  "C++",
  "Git",
  "GitHub",
  "VS Code",
  "NetBeans",
];

function Skills() {
  return (
    <section className="section alternate-section" id="skills">
      <div className="container">

        <div className="section-heading">
          <p className="section-label">SKILLS</p>
          <h2>Technologies I work with</h2>
          <p>
            Tools and technologies I use to build and develop
            web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              <span>{skill}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;