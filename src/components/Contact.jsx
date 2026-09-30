function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">

        <div className="contact-box">

          <p className="section-label">
            GET IN TOUCH
          </p>

          <h2>
            Let's build something
             together.
          </h2>

          <p>
            I'm currently open to frontend developer internships
            and entry-level opportunities. If you have an opportunity
            or simply want to connect, feel free to reach out.
          </p>

          <div className="contact-details">

            <a href="mailto:Weynshetkebede15@gmail.com">
              weynshetkebede15@gmail.com
            </a>

            <a href="tel:0902432938">
              0902432938
            </a>

            <span>
              Addis Ababa, Ethiopia
            </span>

          </div>

          <div className="contact-buttons">

                       <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=weynshetkebede15@gmail.com"
  target="_blank"
  rel="noopener noreferrer"

              className="button primary"
            >
              Email Me
            </a>

            <a
              href="https://github.com/weynshet5221"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              GitHub ↗
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;