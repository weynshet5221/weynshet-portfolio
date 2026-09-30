const projects = [
  {
    number: "01",
    title: "Addis Eats",
    type: "React · Vite",
    description:
      "A responsive food delivery application with menu search, category filtering, dish details, favorites, cart, checkout, client-side state management, local storage and an admin dashboard.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Vite",
      "Zustand",
    ],
    live: "https://addis-eats-omega.vercel.app/",
    github:
      "https://github.com/IBT-Qiyas-Full-Stack-Academy/sq6-weynshet-kebede-/tree/main/module-03-react-nextjs/project/addis-eats",
  },

  {
    number: "02",
    title: "Habesha Eatery",
    type: "Restaurant Website",
    description:
      "A responsive restaurant website with menu browsing, restaurant information, contact details and table reservation functionality.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
    ],
    live: "https://habeshaeatery.vercel.app/",
    github:
      "https://github.com/weynshet5221/Habesha-Eatery",
  },

  {
    number: "03",
    title: "Addis Eats",
    type: "HTML · CSS · JavaScript",
    description:
      "A responsive food delivery website focused on menu browsing, search, category filtering, shopping cart, checkout and browser storage.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Local Storage",
    ],
    live: "https://addis-eats1-nu.vercel.app/",
    github:
      "https://github.com/IBT-Qiyas-Full-Stack-Academy/sq6-weynshet-kebede-/tree/main/module-02-html-css-javascript/projects/addis-eats",
  },

  {
    number: "04",
    title: "Client-Side Bank Transaction System",
    type: "Python",
    description:
      "A Python banking application supporting account creation, deposits, transfers, account viewing and transaction undo functionality.",
    technologies: [
      "Python",
      "OOP",
      "File Handling",
    ],
    live: null,
    github:
      "https://github.com/IBT-Qiyas-Full-Stack-Academy/sq6-weynshet-kebede-/tree/main/module-01-foundation/project/project_1",
  },
];

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">

        <div className="section-heading project-heading">
          <div>
            <p className="section-label">PROJECTS</p>
            <h2>Things I've built</h2>
          </div>

          <p>
            A selection of projects that show my experience
            building practical software and responsive interfaces.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-content">

                <div className="project-top">
                  <div>
                    <p className="project-type">
                      {project.type}
                    </p>

                    <h3>{project.title}</h3>
                  </div>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-buttons">

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link primary-link"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub ↗
                  </a>

                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;