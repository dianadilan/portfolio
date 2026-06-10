import { Link } from 'react-router-dom'

import login from '../assets/klimatlar/login.png'
import dashboard from '../assets/klimatlar/dashboard.png'
import quiz from '../assets/klimatlar/quiz.png'
import leaderboard from '../assets/klimatlar/newgame.png'
import result from '../assets/klimatlar/result.png'

import colors from '../assets/klimatlar/klimatlar-colors.png'
import components from '../assets/klimatlar/klimatlar-components.png'
import fonts from '../assets/klimatlar/klimatlar-fonts.png'

function KlimatlarCase() {
  return (
    <main className="page casePage">
      <Link className="backLink" to="/">
        ← Back to portfolio
      </Link>

      <section className="caseHero">
        <p className="eyebrow">REACT FRONTEND PROJECT</p>

        <h1>Klimatlär, Interactive React Application</h1>

        <p>
          Klimatlär is an interactive climate learning application built with
          React, JavaScript and reusable components. The project focuses on
          creating a clear and engaging learning experience through climate
          facts, quiz interaction and visual feedback.
        </p>
      </section>

      <section className="caseInfo">
        <div>
          <span>Role</span>
          <p>Frontend Developer & UI Designer</p>
        </div>

        <div>
          <span>Tools</span>
          <p>React, JavaScript, CSS, Figma</p>
        </div>

        <div>
          <span>Focus</span>
          <p>Reusable components, state management, routing and responsive UI</p>
        </div>
      </section>

      <section className="caseSection">
        <p className="eyebrow">PROBLEM</p>

        <h2>Making climate learning more interactive and accessible.</h2>

        <p>
          Climate information can often feel heavy, abstract or difficult to
          engage with. Klimatlär was created to make climate learning easier to
          understand through short facts, interactive quiz questions, visual
          feedback and a clear mobile-first interface.
        </p>
      </section>

      <section className="caseSection">
        <p className="eyebrow">PROCESS</p>

        <h2>From design prototype to React application</h2>

        <div className="processGrid">
          <div>
            <span>01 Structure</span>
            <p>
              I planned the application structure with separate pages, reusable
              UI components and a consistent navigation flow.
            </p>
          </div>

          <div>
            <span>02 Data</span>
            <p>
              Climate facts, quiz questions and result content were structured
              through data, making the app easier to update and scale.
            </p>
          </div>

          <div>
            <span>03 Interaction</span>
            <p>
              I built quiz logic, answer feedback, score handling and result
              views using React state and conditional rendering.
            </p>
          </div>

          <div>
            <span>04 Styling</span>
            <p>
              The interface was styled with CSS to match the Figma design,
              including buttons, cards, navigation, colors and typography.
            </p>
          </div>
        </div>
      </section>

      <section className="caseSection">
        <p className="eyebrow">KEY FEATURES</p>

        <h2>Built with reusable components and interactive logic</h2>

        <div className="processGrid">
          <div>
            <span>Login Flow</span>
            <p>
              The app includes login, registration and password recovery views,
              showing form structure and user flow handling.
            </p>
          </div>

          <div>
            <span>Climate Facts</span>
            <p>
              Users can explore climate-related information through article
              cards and structured content sections.
            </p>
          </div>

          <div>
            <span>Quiz System</span>
            <p>
              The quiz includes multiple-choice questions, answer feedback,
              score calculation and a final result screen.
            </p>
          </div>

          <div>
            <span>Leaderboard</span>
            <p>
              The leaderboard visualizes user scores and adds a playful element
              to the learning experience.
            </p>
          </div>
        </div>
      </section>

      <section className="caseSection">
        <p className="eyebrow">FINAL SCREENS</p>

        <div className="screenGrid">
          <img src={login} alt="Klimatlär login screen" />
          <img src={dashboard} alt="Klimatlär dashboard screen" />
          <img src={quiz} alt="Klimatlär quiz screen" />
          <img src={leaderboard} alt="Klimatlär leaderboard screen" />
          <img src={result} alt="Klimatlär result screen" />
        </div>
      </section>

      <section className="caseSection">
        <p className="eyebrow">DESIGN SYSTEM</p>

        <h2>A playful and consistent visual language</h2>

        <p>
          The design system uses strong green, orange and blue colors to support
          the climate theme and quiz experience. Reusable buttons, cards, icons
          and typography helped keep the interface consistent across the
          application.
        </p>

        <div className="designSystemGrid">
          <img src={colors} alt="Klimatlär color palette" />
          <img src={components} alt="Klimatlär UI components" />
          <img src={fonts} alt="Klimatlär typography system" />
        </div>
      </section>
      <section className="caseSection">
      <section className="caseSection">
  <p className="eyebrow">PROJECT LINKS</p>

  <h2>Explore the project</h2>

  <p>
    Explore the original Figma prototype and view the complete React
    application source code on GitHub.
  </p>

  <div className="projectLinks">
    <a
      href="https://www.figma.com/design/N3NMVaERi0clsXglvfimbD/F%C3%B6rdjupad-frontend---Diana-Dilan?node-id=123-902&t=vMWZB27BOWww5wDF-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Figma Prototype
    </a>

    <a
      href="https://github.com/dianadilan/interactive-react-application"
      target="_blank"
      rel="noopener noreferrer"
    >
      View GitHub Repository
    </a>
  </div>
</section>
</section>

      <section className="caseSection">
        <p className="eyebrow">REFLECTION</p>

        <h2>Building a clearer bridge between design and code.</h2>

        <p>
          This project helped me strengthen my understanding of how a Figma
          prototype can be translated into a working React application. I worked
          with components, routing, state, conditional rendering and structured
          styling to create a smoother user experience.
        </p>

        <p>
          The biggest learning was how important structure is in frontend
          development. By separating content, components and styling, the app
          became easier to maintain, expand and understand.
        </p>
      </section>
    </main>
  )
}

export default KlimatlarCase