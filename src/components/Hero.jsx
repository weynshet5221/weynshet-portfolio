function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">

        <div className="hero-content">
          <p className="hero-label">
            FRONTEND DEVELOPER
          </p>

          <h1>
            Hi, I'm{" "}
            <span>Weynshet Kebede.</span>
            <br />
            I build modern web experiences.
          </h1>

          <p className="hero-text">
            I'm a Computer Science student and frontend developer
            passionate about building clean, responsive and
            user-friendly web applications using React, JavaScript,
            HTML and CSS.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              View My Work
            </a>

            <a href="/CV.pdf" className="button" download>
              Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/weynshet5221"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=weynshetkebede15@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Email ↗
</a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-circle">
            <img
              src="/profile.jpg"
              alt="Weynshet Kebede"
            />
          </div>

          <div className="hero-decoration"></div>
        </div>

      </div>
    </section>
  );
}

export default Hero;