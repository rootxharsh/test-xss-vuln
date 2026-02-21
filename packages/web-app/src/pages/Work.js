import React, { useState } from 'react';
import './Work.css';

const CATEGORIES = ['All', 'Web', 'Mobile', 'Design', 'AI'];

const PROJECTS = [
  {
    title: 'FinTrack',
    category: 'Web',
    desc: 'A real-time financial dashboard for tracking investments, expenses, and portfolio performance at a glance.',
    tags: ['React', 'Node.js', 'Charts'],
    accent: '#7c6fff',
  },
  {
    title: 'HealthPulse',
    category: 'Mobile',
    desc: 'Patient management app for clinics with appointment scheduling, EMR integration, and telemedicine.',
    tags: ['React Native', 'Firebase'],
    accent: '#00e5ff',
  },
  {
    title: 'Katalog',
    category: 'Design',
    desc: 'Complete design system and brand identity for a European e-commerce startup expanding across 8 markets.',
    tags: ['Figma', 'Design System', 'Branding'],
    accent: '#ff6eb4',
  },
  {
    title: 'LexAI',
    category: 'AI',
    desc: 'AI-powered legal document analysis that flags risks and extracts key clauses in seconds, not hours.',
    tags: ['Python', 'OpenAI', 'NLP'],
    accent: '#ffb347',
  },
  {
    title: 'ShipFast',
    category: 'Web',
    desc: 'Order management platform for logistics companies with live GPS tracking, analytics, and driver apps.',
    tags: ['Next.js', 'PostgreSQL', 'WebSockets'],
    accent: '#7c6fff',
  },
  {
    title: 'EduFlow',
    category: 'Mobile',
    desc: 'Adaptive learning platform with personalised quizzes, progress tracking, and full offline support.',
    tags: ['React Native', 'Redux', 'Offline'],
    accent: '#00e5ff',
  },
];

function Work() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active);

  return (
    <div className="work">
      {/* ── Hero ──────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <div className="badge">Our Work</div>
          <h1 className="section-title">
            Projects We're <span className="gradient-text">Proud Of</span>
          </h1>
          <p className="section-desc">
            A selection of products we've designed and built for clients around the world.
          </p>
        </div>
      </section>

      {/* ── Portfolio ─────────────────────── */}
      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          {/* Filter tabs */}
          <div className="filter-tabs" role="tablist">
            {CATEGORIES.map(c => (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
                className={`filter-tab ${active === c ? 'active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="projects-grid">
            {filtered.map((p, i) => (
              <div className="card project-card" key={p.title}>
                <div
                  className="project-preview"
                  style={{
                    background: `linear-gradient(135deg, ${p.accent}1a 0%, ${p.accent}08 100%)`,
                    borderBottom: `1px solid ${p.accent}28`,
                  }}
                >
                  <div className="project-logo" style={{ background: p.accent }}>
                    {p.title.charAt(0)}
                  </div>
                </div>

                <div className="project-body">
                  <span className="project-category">{p.category}</span>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="tag-row">
                    {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="no-results">No projects found in this category.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Work;
