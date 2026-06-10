import { Link } from 'react-router-dom'

import home from '../assets/doze/home.png'
import week from '../assets/doze/week.png'
import calender from '../assets/doze/calender.png'
import tips from '../assets/doze/tips.png'
import profile from '../assets/doze/profile.png'

import colors from '../assets/doze/colors1.png'
import components from '../assets/doze/components.png'
import fonts from '../assets/doze/fonts.png'

import maltrad from '../assets/doze/maltrad.png'

function DozeCase() {
  return (
    <main className="page casePage">
      <Link className="backLink" to="/">
        ← Back to portfolio
      </Link>

      <section className="caseHero">
        <p className="eyebrow">UX/UI CASE STUDY</p>
        <h1>Doze, Sleep Tracking App</h1>
        <p>
          Doze is a calm sleep tracking app designed for young users. The goal
          was to create a low-pressure experience that helps users reflect on
          their sleep without making it feel like another performance task.
        </p>
      </section>

      <section className="caseMeta">
        <div><span>Role</span><p>UX/UI Designer & Frontend Developer</p></div>
        <div><span>Duration</span><p>Sep 2025 – Jan 2026</p></div>
        <div><span>Tools</span><p>Figma, React, JavaScript, CSS</p></div>
        <div><span>Focus</span><p>Research, accessibility, user flows, UI and design system</p></div>
      </section>

      <section className="caseSection">
        <p className="eyebrow">PROBLEM</p>
        <h2>Making sleep tracking feel calm, simple and safe.</h2>
        <p>
          Many young people struggle with sleep, but existing health apps can
          feel overwhelming, data-heavy or too focused on performance. Doze was
          designed to lower the threshold for logging sleep and make the
          experience feel supportive rather than demanding.
        </p>
      </section>

      <section className="caseSection">
        <p className="eyebrow">RESEARCH</p>
        <h2>Understanding the users</h2>
        <p>
          The project was based on research with high school students aged
          17–19. The findings showed that many students struggled with irregular
          sleep schedules, stress and difficulties disconnecting from their
          phones before bedtime. Existing health apps were often viewed as
          overwhelming, performance-focused and too demanding to use
          consistently.
        </p>
      </section>

      <section className="caseSection">
        <p className="eyebrow">PROCESS</p>
        <h2>From research to working prototype</h2>

        <div className="processGrid">
          <div><span>01 Research</span><p>I collected user insights about sleep habits, stress, app usage and what kind of support young users wanted.</p></div>
          <div><span>02 Structure</span><p>I translated the findings into goals, user needs, core functions and a clear product direction.</p></div>
          <div><span>03 Design</span><p>I created wireframes, UI screens and a soft visual system focused on clarity, calmness and low friction.</p></div>
          <div><span>04 Prototype</span><p>The concept was built as a React prototype with reusable components, navigation and structured styling.</p></div>
        </div>
      </section>

      <section className="caseSection">
        <p className="eyebrow">GOALS</p>
        <h2>Designing for reflection, not performance</h2>
        <p>
          The goal was to help users understand their sleep habits without
          creating pressure. Instead of focusing on optimization and numbers,
          the experience encourages reflection, awareness and small positive
          changes over time.
        </p>

        <div className="goalTreeWrapper">
          <img src={maltrad} alt="Goal tree for the Doze project" />
        </div>
      </section>

      <section className="caseSection">
        <p className="eyebrow">KEY DESIGN DECISIONS</p>
        <h2>Reducing pressure through design</h2>

        <div className="decisionGrid">
          <div><span>Moon Visualizations</span><p>Traditional sleep graphs were replaced with moon icons to make sleep patterns easier to understand without creating a sense of performance.</p></div>
          <div><span>Mood Reflection</span><p>Users can quickly log how they feel each morning through simple mood icons instead of lengthy questionnaires.</p></div>
          <div><span>Calm Interface</span><p>Soft colors, supportive language and minimal interactions were used throughout the app to reduce stress and cognitive load.</p></div>
        </div>
      </section>

      <section className="caseSection">
        <p className="eyebrow">FINAL SCREENS</p>
        <div className="screenGrid">
          <img src={home} alt="Doze home screen" />
          <img src={week} alt="Doze weekly overview screen" />
          <img src={calender} alt="Doze calendar view screen" />
          <img src={tips} alt="Doze sleep tips screen" />
          <img src={profile} alt="Doze profile screen" />
        </div>
      </section>

      <section className="caseSection">
        <p className="eyebrow">DESIGN SYSTEM</p>
        <h2>A calm and consistent visual language</h2>
        <p>
          The design system was created to keep the app visually consistent,
          soft and easy to understand. Rounded cards, purple tones, clear icons
          and accessible typography helped create a calm experience across all
          screens.
        </p>

        <div className="designSystemGrid">
          <img src={colors} alt="Doze color palette" />
          <img src={components} alt="Doze UI components" />
          <img src={fonts} alt="Doze typography system" />
        </div>
      </section>

      <section className="caseSection">
        <p className="eyebrow">PROJECT LINKS</p>
        <h2>Explore the project</h2>
        <p>View the interactive prototype in Figma or explore the React implementation on GitHub.</p>

        <div className="projectLinks">
          <a href="https://www.figma.com/design/rI7ngOE9mhdx8Fih9d36JG/Doze---App?node-id=0-1&t=zHWnETONpOI5Tz99-1" target="_blank" rel="noopener noreferrer">
            View Figma Prototype
          </a>

          <a href="https://github.com/dianadilan/my-doze-app" target="_blank" rel="noopener noreferrer">
            View GitHub Repository
          </a>
        </div>
      </section>

      <section className="caseSection">
        <p className="eyebrow">REFLECTION</p>
        <h2>Balancing clarity with emotional safety.</h2>
        <p>
          The biggest challenge was creating a product that gives useful sleep
          insights without making users feel judged. The project showed me how
          important tone, visual feedback and interaction design are when
          designing for wellbeing.
        </p>
        <p>
          I learned that a health-related product does not always need more
          data, graphs or features to be helpful. In this case, simplicity was
          the main design decision.
        </p>
      </section>
    </main>
  )
}

export default DozeCase