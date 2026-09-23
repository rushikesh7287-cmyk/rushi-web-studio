import "./App.css";

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
  return (
    <div className="site">
      <div className="bg-grid"></div>
      <div className="bg-glow glow-one"></div>
      <div className="bg-glow glow-two"></div>

      <nav className="navbar">
        <a href="#home" className="logo">
          <span className="logo-box">R</span>
          <span>Rushi<span>Web</span></span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Why Us</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk ↗
        </a>
      </nav>

      <main>
        <section id="home" className="hero">
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

        <section id="services" className="section">
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

        <section id="work" className="feature-section section">
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

        <section id="about" className="section about">
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

        <section id="contact" className="section contact">
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