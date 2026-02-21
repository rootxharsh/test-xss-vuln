import React from 'react';
import './Home.css';

const STATS = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '5+',   label: 'Years of Experience' },
  { value: '40+',  label: 'Team Members' },
];

const FEATURES = [
  { icon: '⬡', title: 'Scalable Architecture',   desc: 'Systems designed to grow from zero to enterprise without painful rewrites.' },
  { icon: '⬢', title: 'Modern Tech Stack',        desc: 'Latest frameworks and tools for fast, reliable, and maintainable software.' },
  { icon: '◎', title: 'Security First',           desc: 'Every product follows OWASP best practices and security review cycles.' },
  { icon: '◈', title: 'User-Centered Design',     desc: 'Beautiful interfaces crafted around how real people think and interact.' },
  { icon: '◐', title: 'Agile Delivery',           desc: 'Iterative sprints with weekly demos keep you in the loop always.' },
  { icon: '◑', title: '24 / 7 Support',           desc: 'Dedicated post-launch support to keep your product at peak performance.' },
];

function Home({ navigate }) {
  return (
    <div className="home">
      {/* ── Hero ─────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <div className="badge">Trusted by 200+ companies worldwide</div>
          <h1 className="hero-title">
            We Build <span className="gradient-text">Digital Experiences</span>
            <br />That Define the Future
          </h1>
          <p className="hero-desc">
            Nexus is a full-service software agency specialising in web, mobile, and cloud solutions.
            We turn complex ideas into elegant, scalable products.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => navigate('work')}>View Our Work</button>
            <button className="btn btn-outline" onClick={() => navigate('contact')}>Start a Project</button>
          </div>
        </div>

        {/* floating decoration */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
      </section>

      {/* ── Stats ────────────────────────────── */}
      <section className="stats-strip">
        <div className="container stats-grid">
          {STATS.map((s, i) => (
            <div className="stat-item" key={i}>
              <span className="stat-value gradient-text">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ─────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-label">Why Nexus</div>
          <h2 className="section-title">Everything You Need to Ship Great Software</h2>
          <p className="section-desc">
            From concept to deployment, we handle every aspect of the product lifecycle
            with precision and care.
          </p>
          <div className="divider" />
          <div className="grid-3">
            {FEATURES.map((f, i) => (
              <div className="card feature-card" key={i}>
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-card">
            <div className="cta-glow" />
            <h2>Ready to Build Something <span className="gradient-text">Extraordinary?</span></h2>
            <p>Let's bring your vision to life. Our team is ready to start.</p>
            <div className="cta-actions">
              <button className="btn btn-primary" onClick={() => navigate('contact')}>Get in Touch</button>
              <button className="btn btn-outline" onClick={() => navigate('services')}>Explore Services</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
