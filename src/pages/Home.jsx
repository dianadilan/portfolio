import { Link } from 'react-router-dom'
import logo from '../assets/Logga_Portfolio1.png'

function Home() {
  return (
    <main className="page">
      <nav className="navbar">
        <div className="logo">
          <img
            src={logo}
            alt="Diana Dilan logo"
            className="logoImage"
          />
          <span>Diana Dilan</span>
        </div>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">UX DESIGNER · FRONTEND DEVELOPER</p>

        <h1>
          I design and build digital experiences with focus on clarity,
          usability and real people.
        </h1>

        <p className="heroText">
          Holding a Bachelor’s degree in Digital Information Design, with a
          focus on UX/UI and frontend development, I combine Figma, React,
          WordPress and user-centered thinking to create clear, functional and
          thoughtful digital experiences.
        </p>

        <div className="heroButtons">
          <a className="primaryBtn" href="#projects">
            View my work
          </a>

          <a className="secondaryBtn" href="#contact">
            Contact me
          </a>
        </div>
      </section>

      <section className="section" id="about">
        <div className="sectionHeader">
          <p className="eyebrow">ABOUT</p>
        </div>

        <div className="aboutSection">
          <h2>Design-minded, technical and user-focused.</h2>

          <p>
            I enjoy working in the space between design and development. My
            background includes UX research, user flows, wireframes, UI design,
            accessibility, frontend development, backend fundamentals, API
            integrations and system-heavy customer-facing work. I like creating
            structure, solving problems and turning ideas into products people
            actually want to use.
          </p>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="sectionHeader">
          <p className="eyebrow">PROJECTS</p>
        </div>

        <div className="projectGrid">
          <Link className="projectCard" to="/doze">
            <span>UX · UI · React</span>
            <h3>Sleep Tracking App</h3>
            <p>
              A calm sleep logging app for young users, designed from research
              to prototype with focus on accessibility, low friction and clear
              user flows.
            </p>
          </Link>

          <Link className="projectCard" to="/klimatlar">
            <span>React · JavaScript</span>
            <h3>Interactive React Application</h3>
            <p>
              A frontend project built with reusable components, structured
              state management and responsive design for a smoother user
              experience.
            </p>
          </Link>

          <article className="projectCard disabledCard">
            <span>WordPress · Web Development</span>
            <h3>Custom WordPress Website</h3>
            <p>
              A custom WordPress project currently being prepared for
              publication.
            </p>
            <div className="comingSoon">Coming Soon</div>
          </article>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="sectionHeader">
          <p className="eyebrow">CONTACT</p>
        </div>

        <div className="contactSection">
          <h3 className="contactTitle">Let’s connect.</h3>

          <p>
            Available for UX, frontend and hybrid product/design roles.
          </p>

          <div className="contactLinks">
            <a className="primaryBtn" href="mailto:dianadilan@hotmail.com">
              Email
            </a>

            <a
              className="primaryBtn"
              href="https://www.linkedin.com/in/diana-dilan-15449a1bb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              className="primaryBtn"
              href="https://github.com/dianadilan"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home