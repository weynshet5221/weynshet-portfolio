function Education() {
  return (
    <section className="section" id="education">
      <div className="container">

        <div className="section-heading">
          <p className="section-label">EDUCATION</p>
          <h2>Education & training</h2>
        </div>

        <div className="education-list">

          <div className="education-item">
            <div className="education-year">
              2023 — present
            </div>

            <div>
              <h3>B.Sc. in Computer Science</h3>

              <p className="education-place">
                Debre Berhan University
              </p>

              <p>
                Expected graduation: February 2027
              </p>

              <span className="education-result">
                CGPA: 3.48
              </span>
            </div>
          </div>

          <div className="education-item">
            <div className="education-year">
              2026 — Present
            </div>

            <div>
              <h3>
                Software Development & Quality Assurance
              </h3>

              <p className="education-place">
                IBT College of Canada
              </p>

              <p>
                Professional software development training covering
                modern web development, React, Next.js, APIs,
                databases, Git and software development practices.
              </p>
            </div>
          </div>

          <div className="education-item">
            <div className="education-year">
              Certification
            </div>

            <div>
              <h3>Programming Fundamentals</h3>

              <p className="education-place">
                ECODES
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;