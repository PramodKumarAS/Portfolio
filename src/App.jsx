import "./App.css";
import profileImg from "./assets/ProfileImage.png";
import AnimatedText from "./AnimatedText";

function App() {

  const techStack = {
    Languages: ["Java", "JavaScript", "SQL"],
    Frontend: ["HTML", "CSS", "React", "Vite"],
    Backend: ["Node.js", "Express.js"],
    Automation: ["Selenium", "Playwright", "TestNG", "Rest Assured"],
    DevOps: ["Jenkins"],
    Databases: ["MongoDB", "SQL Server"],
    Data: ["Databricks"],
    Tools: ["Postman"]
  };

  return (
    <div className="app-container">
     
      {/* HERO */}
      <section className="hero">
        <div className="hero-content hero-layout">
          <div className="hero-text">

            <h1>Hello, I’m Pramod Kumar A S</h1>

          <AnimatedText
            text="A Software Development Engineer in Test (SDET) based in Bangalore, India, with 4+ years of experience in Automation Testing. I specialize in designing scalable automation frameworks and delivering reliable, high-quality test solutions. My expertise spans Java with Selenium and JavaScript with Playwright, enabling robust end-to-end and cross-browser testing for modern web applications."
            delay={0.5}
          />

          <a
            href="https://drive.google.com/uc?export=download&id=1jV2LCsF3T6oSWYYJHcPcD1sU8LCoGWWm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="download-btn">Download Resume</button>
          </a>
          </div>

          <div className="hero-image">
            <img src={profileImg} alt="Pramod Kumar A S" />
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="tech-stack fade-in">
        <h2 className="section-title">Tech Stack Overview</h2>

        <div className="tech-grid">
          {Object.entries(techStack).map(([category, items]) => (
          <div className="tech-group" key={category}>
            <h3>{category}</h3>

            <div className="tech-badges">
              {items.map((item, index) => (
                <span
                  key={item}
                  className="tech-badge"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          ))}
        </div>
      </section>

      {/* PERSONAL PROJECTS */}
      <section className="my-projects fade-in">
        <h2 className="section-title">Personal Projects</h2>

        {/* App Development */}
        <div className="project-subsection">
          <h3 className="subsection-title">App Development</h3>
          <div className="projects-grid">
          <div className="project-card">
            <h3>IMDB Clone</h3>

            <p className="project-desc">
              A movie listing web application with search, ratings, and detailed movie
              pages built to replicate core IMDB functionality.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
              <span>API</span>
            </div>

            <div className="project-links">
              <a href="https://imdbreview.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="https://github.com/PramodKumarAS/IMDB_001" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
          </div>
          <div className="project-card">
              <h3>Book My Show Clone</h3>
              <p className="project-desc">
              A ticket booking platform clone featuring movie listings, seat selection,
              and showtime management.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Vite</span>
              <span>CSS</span>
            </div>

              <div className="project-links">
                <a href="https://bookmyshow0101.netlify.app/login" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/PramodKumarAS/BookMyShow" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
          </div>
          <div className="project-card">
              <h3>Kanban Board</h3>
              <p className="project-desc">
              A task management board supporting drag-and-drop workflows for tracking
              tasks across multiple stages.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
            </div>

              <div className="project-links">
                <a href="https://pramodkumaras.github.io/Kanbanboard-application/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/PramodKumarAS/Kanbanboard-application" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
          </div>
          </div>
        </div>

        {/* Automation Projects */}
        <div className="project-subsection">
          <h3 className="subsection-title">Automation Projects</h3>
          <div className="projects-grid">
            <div className="project-card">
              <h3>BMS Automation(Selenium and Java)</h3>
              <p className="project-desc">
              End-to-end automation framework for Book My Show application covering
              regression and critical user flows.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>Selenium</span>
              <span>TestNG</span>
              <span>Maven</span>
            </div>

            <div className="project-links">
                <a href="https://github.com/PramodKumarAS/BMS_Automation_Java_Selenium" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
            </div>

            <div className="project-card">
              <h3>BMS Automation(Javascript and Playwright)</h3>
              <p className="project-desc">
              Modern web automation framework using Playwright for fast, reliable
              cross-browser testing.
              </p>

              <div className="project-tech">
                <span>JavaScript</span>
                <span>Playwright</span>
                <span>Node.js</span>
              </div>  

              <div className="project-links">
                <a href="https://github.com/PramodKumarAS/BMS_Automation_Javascript_Playwright" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section className="work-experience fade-in">
        <h2 className="section-title">My Work Experience</h2>

        <div className="experience-timeline">
          <div className="experience-card">
            <span className="experience-dot" />
            <h3>SDET – I</h3>
            <p className="experience-company">Assurecare HealthTech</p>
            <p className="experience-desc">
      Built and maintained end-to-end automation frameworks using Java, Selenium, and TestNG, significantly increasing regression test coverage across critical workflows. Actively collaborated with developers and product teams to identify edge cases early, reduce production defects, and streamline the release process. Contributed to test data setup, environment validation, and execution of CI-driven regression suites to reduce manual testing effort.      </p>
          </div>

          <div className="experience-card">
            <span className="experience-dot" />
            <h3>SDET – II</h3>
            <p className="experience-company">Assurecare HealthTech</p>
            <p className="experience-desc">
      Owned the design and implementation of Playwright-based automation frameworks, enabling faster feedback cycles and improved test reliability. Integrated automated tests into CI pipelines to support continuous delivery. Took ownership of automation standards, framework improvements, and mentored team members on best practices in test automation and quality engineering.      </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;