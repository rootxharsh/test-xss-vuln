import React from 'react';
import './About.css';

const VALUES = [
  { icon: '◈', title: 'Transparency',  desc: 'Open and honest communication at every stage. No surprises, no hidden costs.' },
  { icon: '◉', title: 'Excellence',    desc: 'We never settle for "good enough". Every line of code and every pixel is crafted with purpose.' },
  { icon: '◇', title: 'Innovation',    desc: 'Constantly exploring new tools and approaches to solve your problems better and faster.' },
  { icon: '◐', title: 'Partnership',   desc: 'Your success is our success. We work alongside you as partners, not just vendors.' },
];

const TEAM = [
  { name: 'Alex Chen',   role: 'CEO & Founder',        initials: 'AC' },
  { name: 'Sara Patel',  role: 'Chief Technology Officer', initials: 'SP' },
  { name: 'Marcus Lee',  role: 'Lead Designer',         initials: 'ML' },
  { name: 'Priya Nair',  role: 'Head of Engineering',   initials: 'PN' },
  { name: 'James Wu',    role: 'Product Strategist',    initials: 'JW' },
  { name: 'Lena Kovac',  role: 'DevOps Lead',           initials: 'LK' },
];

const MILESTONES = [
  { year: '2019', text: 'Nexus founded with a team of four in San Francisco.' },
  { year: '2020', text: 'First enterprise client — shipped a fintech platform in 90 days.' },
  { year: '2022', text: 'Expanded to 40+ people across three continents.' },
  { year: '2024', text: 'Crossed 200 successful product launches worldwide.' },
];

function About() {
  return (
    <div className="about">
      {/* ── Page hero ───────────────────────── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <div className="badge">About Us</div>
          <h1 className="section-title">
            We Are <span className="gradient-text">Nexus</span>
          </h1>
          <p className="section-desc">
            Founded in 2019, Nexus is a team of passionate engineers, designers, and strategists
            united by a single mission: to build software that makes a real difference.
          </p>
        </div>
      </section>

      {/* ── Mission ─────────────────────────── */}
      <section className="section mission-section">
        <div className="container mission-inner">
          <div>
            <div className="section-label">Our Mission</div>
            <h2 className="section-title">
              Technology With a <span className="gradient-text">Human Touch</span>
            </h2>
            <div className="divider" />
            <p className="mission-body">
              At Nexus, great software isn't just about code — it's about understanding people.
              We take time to listen, learn, and craft solutions that truly serve your users
              and your business goals.
            </p>
            <p className="mission-body" style={{ marginTop: 16 }}>
              We've helped over 200 companies across healthcare, fintech, e-commerce, and
              education build products they're proud of.
            </p>
          </div>

          <div className="mission-stats">
            {[
              { value: '200+', label: 'Products launched' },
              { value: '40+',  label: 'Team members' },
              { value: '12',   label: 'Countries served' },
              { value: '5',    label: 'Years strong' },
            ].map((s, i) => (
              <div className="mission-stat-card" key={i}>
                <span className="mission-stat-value gradient-text">{s.value}</span>
                <span className="mission-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ────────────────────────── */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-label">Our Journey</div>
          <h2 className="section-title">How We Got Here</h2>
          <div className="divider" />
          <div className="timeline">
            {MILESTONES.map((m, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-year gradient-text">{m.year}</div>
                <div className="timeline-dot" />
                <p className="timeline-text">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────── */}
      <section className="section values-section">
        <div className="container">
          <div className="section-label">Our Values</div>
          <h2 className="section-title">What Drives Us Forward</h2>
          <div className="divider" />
          <div className="grid-2">
            {VALUES.map((v, i) => (
              <div className="card value-card" key={i}>
                <span className="value-icon">{v.icon}</span>
                <div>
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-label">The Team</div>
          <h2 className="section-title">
            The Minds Behind the <span className="gradient-text">Magic</span>
          </h2>
          <div className="divider" />
          <div className="grid-3">
            {TEAM.map((t, i) => (
              <div className="card team-card" key={i}>
                <div className="team-avatar">{t.initials}</div>
                <h3 className="team-name">{t.name}</h3>
                <p className="team-role">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
