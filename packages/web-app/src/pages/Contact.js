import React, { useState } from 'react';
import './Contact.css';

const INFO = [
  { icon: '✉', label: 'Email',    value: 'hello@nexus.dev' },
  { icon: '✆', label: 'Phone',    value: '+1 (555) 000-1234' },
  { icon: '⌖', label: 'Location', value: 'San Francisco, CA' },
];

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required.';
    if (!form.email.trim())   e.email   = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                              e.email   = 'Enter a valid email address.';
    if (!form.subject.trim()) e.subject = 'Subject is required.';
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <div className="contact">
      {/* ── Hero ──────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <div className="badge">Contact</div>
          <h1 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h1>
          <p className="section-desc">
            Have a project in mind? Drop us a message and we'll get back within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Body ──────────────────────────── */}
      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container contact-inner">

          {/* Form */}
          <div>
            {submitted ? (
              <div className="card success-card">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We'll be in touch within 24 hours.</p>
                <button
                  className="btn btn-outline"
                  style={{ marginTop: 24 }}
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <Field label="Name" error={errors.name}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className={errors.name ? 'has-error' : ''}
                    />
                  </Field>
                  <Field label="Email" error={errors.email}>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={errors.email ? 'has-error' : ''}
                    />
                  </Field>
                </div>

                <Field label="Subject" error={errors.subject}>
                  <input
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'has-error' : ''}
                  />
                </Field>

                <Field label="Message" error={errors.message}>
                  <textarea
                    name="message"
                    rows="7"
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={handleChange}
                    className={errors.message ? 'has-error' : ''}
                  />
                </Field>

                <button type="submit" className="btn btn-primary btn-full">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="contact-sidebar">
            <div className="card info-card">
              <h3>Get in Touch</h3>
              <p>Our team is available Monday – Friday, 9 am – 6 pm PST.</p>
              <div className="info-list">
                {INFO.map((item, i) => (
                  <div className="info-item" key={i}>
                    <span className="info-icon">{item.icon}</span>
                    <div>
                      <div className="info-label">{item.label}</div>
                      <div className="info-value">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card response-card">
              <span className="response-time gradient-text">24h</span>
              <p>Average response time</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      {children}
      {error && <span className="field-error">{error}</span>}
    </div>
  );
}

export default Contact;
