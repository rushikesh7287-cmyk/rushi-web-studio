import {useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/logo-symbol.png";

const services = [
  {
    icon: "✦",
    title: "Business Websites",
    text: "Professional websites that help your business build trust and grow online.",
  },
  {
    icon: "⚡",
    title: "Modern UI Design",
    text: "Clean interfaces with polished layouts, animations and a premium feel.",
  },
  {
    icon: "◈",
    title: "React Development",
    text: "Fast and scalable websites built with modern React technology.",
  },
  {
    icon: "▣",
    title: "Responsive Design",
    text: "Beautiful experiences that work smoothly on mobile, tablet and desktop.",
  },
  {
    icon: "↗",
    title: "Landing Pages",
    text: "High-impact landing pages designed around your goals and audience.",
  },
  {
    icon: "⌘",
    title: "Website Maintenance",
    text: "Updates, improvements and ongoing support for your website.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site">
      <div className="bg-grid"></div>
      <div className="bg-glow glow-one"></div>
      <div className="bg-glow glow-two"></div>

      <nav className="navbar">
       <a href="#home" className="logo">
  <img src={logo} alt="Rushi Web Studio" className="logo-image" />
</a>
<button
  className="menu-button"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle menu"
>
  ☰
</button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
  <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
<a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
<a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
<a href="#work" onClick={() => setMenuOpen(false)}>Why Us</a>
<a href="#about" onClick={() => setMenuOpen(false)}>About</a>
<a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
</div>

        <a href="#contact" className="nav-button">
          Let's Talk ↗
        </a>
      </nav>

      <main>
        <section id="home" className="hero reveal visible">
          <div className="hero-content">
            <div className="badge">
              <span></span>
              AVAILABLE FOR NEW PROJECTS
            </div>

            <h1>
              We build websites
              <strong>that stand out.</strong>
            </h1>

            <p>
              Rushi Web Studio creates modern, responsive and professional
              websites for businesses, creators and individuals.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="primary-button">
                Start a Project <span>↗</span>
              </a>

              <a href="#services" className="secondary-button">
                Explore Services
              </a>
            </div>

            <div className="trust-row">
              <div>
                <strong>Modern</strong>
                <small>Design</small>
              </div>

              <div>
                <strong>Fast</strong>
                <small>Performance</small>
              </div>

              <div>
                <strong>100%</strong>
                <small>Responsive</small>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="browser">
              <div className="browser-top">
                <div className="dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <span>rushiwebstudio.com</span>
              </div>

              <div className="browser-body">
                <div className="mini-nav">
                  <b>R</b>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="mini-content">
                  <small>YOUR DIGITAL PRESENCE</small>
                  <h3>Build something<br />people remember.</h3>
                  <div className="mini-button"></div>
                </div>

                <div className="floating-card">
                  <span>✦</span>
                  <div>
                    <b>Modern Website</b>
                    <small>Built for your brand</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section reveal">
          <div className="section-heading">
            <span className="label">WHAT WE DO</span>
            <h2>
              Everything you need to
              <em> build online.</em>
            </h2>
            <p>
              From the first idea to the final launch, we create digital
              experiences focused on design, performance and usability.
            </p>
          </div>

          <div className="services">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-number">0{index + 1}</div>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="feature-section section reveal">
          <div className="feature-card">
            <div className="feature-content">
              <span className="label">WHY RUSHI WEB STUDIO</span>
              <h2>
                A website should feel
                <em> as good as it looks.</em>
              </h2>
              <p>
                We combine thoughtful design, responsive development and
                smooth interactions to create websites that represent your
                brand professionally.
              </p>

              <div className="feature-list">
                <div>
                  <span>✓</span>
                  <p>Clean and professional design</p>
                </div>
                <div>
                  <span>✓</span>
                  <p>Mobile-first responsive layouts</p>
                </div>
                <div>
                  <span>✓</span>
                  <p>Modern web technologies</p>
                </div>
              </div>
            </div>

            <div className="feature-visual">
              <div className="visual-circle">
                <span>R</span>
                <small>WEB STUDIO</small>
              </div>
              <div className="ring ring-one"></div>
              <div className="ring ring-two"></div>
            </div>
          </div>
        </section>
<section id="portfolio" className="section portfolio reveal">
  <div className="section-heading">
    <span className="label">SELECTED WORK</span>

    <h2>
      Websites built to
      <em>make an impact.</em>
    </h2>

    <p>
      A few examples of the digital experiences we can create for
      businesses, creators and growing brands.
    </p>
  </div>

  <div className="portfolio-grid">
    <article className="project-card project-large">
      <div className="project-preview business-preview">
        <div className="preview-top">
          <span>R</span>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="preview-content">
          <small>BUSINESS WEBSITE</small>
          <h3>Build your<br />brand online.</h3>
          <span className="preview-button"></span>
        </div>
      </div>

      <div className="project-info">
        <div>
          <h3>Business Website</h3>
          <p>Professional website for a modern business.</p>
        </div>

        <span className="project-arrow">↗</span>
      </div>

      <div className="project-tags">
        <span>React</span>
        <span>Responsive</span>
        <span>Modern UI</span>
      </div>
    </article>

    <article className="project-card">
      <div className="project-preview creator-preview">
        <div className="creator-circle">C</div>
        <small>CREATOR</small>
        <h3>Your story.<br />Your audience.</h3>
      </div>

      <div className="project-info">
        <div>
          <h3>Creator Landing Page</h3>
          <p>Focused landing page for a personal brand.</p>
        </div>

        <span className="project-arrow">↗</span>
      </div>

      <div className="project-tags">
        <span>Landing Page</span>
        <span>UI Design</span>
      </div>
    </article>

    <article className="project-card">
      <div className="project-preview store-preview">
        <div className="store-header">
          <b>STORE</b>
          <span>⌕</span>
          <span>🛒</span>
        </div>

        <div className="product-row">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <small>ONLINE STORE</small>
        <h3>Simple shopping<br />experience.</h3>
      </div>

      <div className="project-info">
        <div>
          <h3>Online Store</h3>
          <p>Clean and responsive e-commerce concept.</p>
        </div>

        <span className="project-arrow">↗</span>
      </div>

      <div className="project-tags">
        <span>React</span>
        <span>Web Design</span>
      </div>
    </article>
  </div>
</section>
        <section id="about" className="section about reveal">
          <span className="label">ABOUT US</span>

          <h2>
            Turning ideas into
            <em> digital experiences.</em>
          </h2>

          <p>
            Rushi Web Studio is focused on helping businesses and individuals
            create a stronger presence on the internet with modern websites
            that are simple, fast and professional.
          </p>
        </section>

        <section id="contact" className="section contact reveal">
          <div className="contact-card">
            <div>
              <span className="label">START A PROJECT</span>
              <h2>
                Have an idea?
                <em> Let's build it.</em>
              </h2>
              <p>
                Ready to take your online presence to the next level?
                Get in touch and let's discuss your project.
              </p>
            </div>

            <div className="contact-buttons">
              <a
                href="https://wa.me/917028762518"
                target="_blank"
                rel="noreferrer"
              >
                <span>WhatsApp</span>
                <b>Chat with us ↗</b>
              </a>

              <a href="tel:+917028762518">
                <span>Phone</span>
                <b>7028762518 ↗</b>
              </a>

              <a
                href="https://www.instagram.com/rushiwebstudio"
                target="_blank"
                rel="noreferrer"
              >
                <span>Instagram</span>
                <b>@rushiwebstudio ↗</b>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-top">
          <div>
            <a href="#home" className="logo">
              <span className="logo-box">R</span>
              <span>Rushi<span>Web</span></span>
            </a>
            <p>Modern websites for modern businesses.</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Rushi Web Studio</span>
          <span>Built with passion & code.</span>
        </div>
      </footer>

      <a
        className="whatsapp"
        href="https://wa.me/917028762518"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        ☏
      </a>
    </div>
  );
}

export default App;