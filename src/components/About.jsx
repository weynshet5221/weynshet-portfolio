function About() {
  return (
    <section className="section" id="about">
      <div className="container">

        <div className="section-heading">
          <p className="section-label">ABOUT ME</p>
          <h2>A little about me</h2>
        </div>

        <div className="about-grid">

          <div className="about-text">
            <p>
              I'm a 4th-year Computer Science student at
              Debre Berhan University with hands-on experience
              developing responsive web applications.
            </p>

            <p>
              I enjoy transforming ideas into practical and
              user-friendly interfaces. My main focus is frontend
              development using React, JavaScript, HTML and CSS.
            </p>

            <p>
              I also have experience working on real-world
              software projects, including a Court Case Management
              System during my software development internship.
            </p>

            <p>
              I'm currently looking for frontend developer
              internship and entry-level opportunities where I can
              contribute, learn and grow as a developer.
            </p>
          </div>

          <div className="about-stats">

            <div className="stat-card">
              <strong>4th</strong>
              <span>Year Computer Science</span>
            </div>

            <div className="stat-card">
              <strong>3.48</strong>
              <span>Current CGPA</span>
            </div>

            <div className="stat-card">
              <strong>3+</strong>
              <span>Months Internship</span>
            </div>

            <div className="stat-card">
              <strong>4+</strong>
              <span>Major Projects</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;