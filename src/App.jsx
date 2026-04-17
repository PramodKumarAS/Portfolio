import { useEffect } from "react";
import "./App.css";
import profileImg from "./assets/ProfileImage.png";
import AnimatedText from "./AnimatedText";

function App() {
  const techStack = {
    Languages: ["Java", "JavaScript (ES6+)"],
    "Test Automation": ["Selenium WebDriver", "Playwright", "TestNG"],
    "API Testing": ["RestAssured", "Postman"],
    "Visual Testing": ["Applitools Eyes"],
    Databases: ["SQL Server", "MongoDB"],
    "CI/CD & DevOps": ["Azure DevOps", "GitHub Actions"],
    "Build Tools": ["Maven", "Git Bash"],
    Reporting: ["Extent Reports", "Allure Reports"],
  };

  const stats = [
    { number: "4+", label: "Years Experience" },
    { number: "40%", label: "Faster Test Execution" },
    { number: "70%", label: "Less Test Flakiness" },
    { number: "3", label: "Healthcare Products" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-wrapper">

      {/* NAVBAR */}
      <nav className="navbar">
        <span className="nav-brand">PK<span className="nav-dot">.</span></span>
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </div>
      </nav>

      <div className="app-container">

        {/* HERO */}
        <section className="hero" id="hero">
          <div className="hero-content">
            <div className="hero-text">
              <p className="open-to-work">&#x1F7E2; Open to new opportunities</p>
              <h1>Hello, I'm<br /><span className="name-gradient">Pramod Kumar A S</span></h1>
              <p className="hero-role">Software Development Engineer in Test</p>

              <AnimatedText
                text="Results-driven SDET with 4+ years of experience designing scalable test automation frameworks for UI, API, DB, and visual regression testing in the healthcare domain. Proficient in Java, JavaScript, Selenium WebDriver, and Playwright — with a track record of reducing test execution time by 40% and improving regression coverage across complex enterprise applications. Skilled in CI/CD integration with GitHub Actions and Azure DevOps."
                delay={0.5}
              />

              <a
                href="https://drive.google.com/uc?export=download&id=1S4dSlM_GVrptOMcV6JTwKVlnp_1NW_qX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="download-btn">Download Resume</button>
              </a>
            </div>

            <div className="hero-image">
              <div className="image-ring">
                <img src={profileImg} alt="Pramod Kumar A S" />
              </div>
            </div>
          </div>

          {/* STATS STRIP */}
          <div className="stats-strip">
            {stats.map((s) => (
              <div className="stat-item" key={s.label}>
                <span className="stat-number">{s.number}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK */}
        <section className="tech-stack reveal" id="skills">
          <h2 className="section-title">Tech Stack</h2>
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

        {/* PROJECTS */}
        <section className="my-projects reveal" id="projects">
          <h2 className="section-title">Projects</h2>

          {/* Personal Automation Projects */}
          <div className="project-subsection">
            <h3 className="subsection-title">Personal Automation Projects</h3>
            <div className="projects-grid">
              <div className="project-card accent-java">
                <h3>BMS Automation — Java &amp; Selenium</h3>
                <p className="project-desc">
                  End-to-end UI automation framework for the Book My Show application built with
                  Java and Selenium WebDriver. Covers critical user flows including movie search,
                  seat selection, and booking — structured with TestNG and Maven for scalable
                  regression execution.
                </p>
                <div className="project-tech">
                  <span>Java</span>
                  <span>Selenium WebDriver</span>
                  <span>TestNG</span>
                  <span>Maven</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/PramodKumarAS/BMS_Automation_Java_Selenium" target="_blank" rel="noopener noreferrer">&#x2197; GitHub Repo</a>
                </div>
              </div>

              <div className="project-card accent-js">
                <h3>BMS Automation — JavaScript &amp; Playwright</h3>
                <p className="project-desc">
                  Modern automation framework for Book My Show using Playwright with JavaScript.
                  Implements parallel execution, auto-wait strategies, and cross-browser testing
                  to deliver fast and reliable end-to-end coverage across critical booking workflows.
                </p>
                <div className="project-tech">
                  <span>JavaScript</span>
                  <span>Playwright</span>
                  <span>Node.js</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/PramodKumarAS/BMS_Automation_Javascript_Playwright" target="_blank" rel="noopener noreferrer">&#x2197; GitHub Repo</a>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Projects */}
          <div className="project-subsection">
            <h3 className="subsection-title">Projects</h3>
            <div className="projects-grid">
              <div className="project-card accent-java">
                <h3>MedCompass</h3>
                <p className="project-desc">
                  Comprehensive UI and API automation suite for a healthcare data management platform,
                  covering critical patient workflows with DB validation that reduced data-related
                  production defects by 25%.
                </p>
                <div className="project-tech">
                  <span>Java</span>
                  <span>Selenium</span>
                  <span>TestNG</span>
                  <span>REST Assured</span>
                  <span>SQL Server</span>
                  <span>Postman</span>
                </div>
              </div>

              <div className="project-card accent-js">
                <h3>Akumen</h3>
                <p className="project-desc">
                  Scalable UI automation architecture using Playwright's fixture-based design pattern.
                  Parallel execution and test isolation cut suite time by 35%. Applitools Eyes
                  integration covers visual regression across 5+ browser/viewport combinations.
                </p>
                <div className="project-tech">
                  <span>JavaScript</span>
                  <span>Playwright</span>
                  <span>Applitools</span>
                  <span>MongoDB</span>
                </div>
              </div>

              <div className="project-card accent-purple">
                <h3>Aktivate</h3>
                <p className="project-desc">
                  End-to-end automation for a complex canvas-based application using coordinate-based
                  actions and low-level mouse events. Reusable drag-and-drop utility library reduced
                  test flakiness by 70% across 100+ scenarios.
                </p>
                <div className="project-tech">
                  <span>JavaScript</span>
                  <span>Playwright</span>
                  <span>Applitools</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section className="work-experience reveal" id="experience">
          <h2 className="section-title">Work Experience</h2>
          <p className="experience-note">Most recent first</p>
          <div className="experience-timeline">
            <div className="experience-card">
              <span className="experience-dot" />
              <h3>SDET – II <span className="current-badge">Current</span></h3>
              <p className="experience-company">AssureCare Healthtech Pvt Ltd &mdash; May 2023 – Present &middot; Bangalore</p>
              <p className="experience-desc">
                Designed and owned scalable UI and API automation frameworks using Java, Selenium, TestNG, and Playwright,
                reducing regression cycle time by 30%. Led Playwright end-to-end automation with parallel execution,
                fixture-based design, and auto-wait strategies — cutting total execution time by 40%. Integrated Applitools
                Visual Tests for automated detection of UI inconsistencies and cross-browser layout issues. Collaborated in
                Agile/Scrum with developers and PMs to define acceptance criteria and shift-left testing practices.
              </p>
            </div>

            <div className="experience-card">
              <span className="experience-dot" />
              <h3>SDET – I</h3>
              <p className="experience-company">AssureCare Healthtech Pvt Ltd &mdash; June 2022 – April 2023 &middot; Bangalore</p>
              <p className="experience-desc">
                Developed and maintained UI automation suites using Java, Selenium, and TestNG, improving regression coverage
                and reducing manual testing effort. Transitioned 70% of manual regression test cases to automation, cutting
                testing time by 60% and enabling faster release cycles. Performed database validation using SQL Server and
                MongoDB to ensure data integrity. Executed smoke, regression, and sanity cycles across multiple sprints with
                zero critical production defects.
              </p>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="education reveal" id="education">
          <h2 className="section-title">Education</h2>
          <div className="experience-timeline">
            <div className="experience-card">
              <span className="experience-dot" />
              <h3>Bachelor of Engineering (B.E.)</h3>
              <p className="experience-company">Krishna College of Engineering &mdash; Sept 2017 – May 2020 &middot; KR Pet, Karnataka</p>
              <p className="experience-desc">GPA: 7.6 / 10</p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="site-footer reveal" id="contact">
          <p className="footer-tagline">Let's build something great together.</p>
          <div className="footer-links">
            <a href="mailto:pramodkumaras143@gmail.com">pramodkumaras143@gmail.com</a>
            <a href="tel:+918970880935">+91 89708 80935</a>
            <a href="https://linkedin.com/in/pramodkumaras" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/PramodKumarAS" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Pramod Kumar A S</p>
        </footer>

      </div>
    </div>
  );
}

export default App;
