import React from 'react';
import './Services.css';

const SERVICES = [
  {
    icon: '⬡',
    title: 'Web Development',
    desc: 'High-performance web apps built with React, Next.js, and modern backend technologies. Optimised for speed, SEO, and scalability.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    icon: '◎',
    title: 'Mobile Development',
    desc: 'Cross-platform mobile apps for iOS and Android using React Native. Native feel, single codebase, fast delivery.',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    icon: '◈',
    title: 'UI / UX Design',
    desc: 'Research-driven design that prioritises clarity, usability, and visual delight — from wireframes to polished design systems.',
    tags: ['Figma', 'Design Systems', 'Prototyping'],
  },
  {
    icon: '◐',
    title: 'Cloud & DevOps',
    desc: 'Scalable cloud infrastructure on AWS, GCP, or Azure. CI/CD pipelines, containerisation, and real-time monitoring.',
    tags: ['AWS', 'Docker', 'Kubernetes'],
  },
  {
    icon: '◑',
    title: 'AI Integration',
    desc: 'Embed intelligent features into your product — NLP, recommendations, computer vision, and predictive analytics.',
    tags: ['OpenAI', 'TensorFlow', 'Python'],
  },
  {
    icon: '◇',
    title: 'Security Audits',
    desc: 'Comprehensive security reviews including penetration testing, code audits, and compliance assessments.',
    tags: ['OWASP', 'Pen Testing', 'Compliance'],
  },
];

const STEPS = [
  { num: '01', title: 'Discovery',  desc: 'We dig deep into your goals, users, and constraints to define exactly the right scope.' },
  { num: '02', title: 'Design',     desc: 'Architecture, wireframes, and prototypes validate ideas before writing a line of code.' },
  { num: '03', title: 'Build',      desc: 'Agile sprints with weekly demos keep you fully in the loop throughout development.' },
  { num: '04', title: 'Launch',     desc: 'Thorough QA, staged deployment, and smooth go-live with full post-launch support.' },
];

function Services({ navigate }) {
  return (
    <div className="services">
      {/* ── Hero ──────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <div className="badge">What We Do</div>
          <h1 className="section-title">
            Services Built for <span className="gradient-text">Real Impact</span>
          </h1>
          <p className="section-desc">
            From strategy to shipping, end-to-end services to bring your product to life.
          </p>
        </div>
      </section>

      {/* ── Service cards ─────────────────── */}
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {SERVICES.map((s, i) => (
              <div className="card service-card" key={i}>
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="tag-row">
                  {s.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────── */}
      <section className="section process-section">
        <div className="container">
          <div className="section-label">How We Work</div>
          <h2 className="section-title">Our Process</h2>
          <div className="divider" />
          <div className="process-grid">
            {STEPS.map((s, i) => (
              <div className="process-step" key={i}>
                <div className="process-num gradient-text">{s.num}</div>
                <h3 className="process-title">{s.title}</h3>
                <p className="process-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-card">
            <div className="cta-glow" />
            <h2>Ready to Get <span className="gradient-text">Started?</span></h2>
            <p>Tell us about your project and let's figure out how we can help.</p>
            <button className="btn btn-primary" onClick={() => navigate('contact')}>
              Start a Conversation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
