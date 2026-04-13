import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API = 'http://localhost:5000/api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      showToast('✅ Message sent successfully! We\'ll get back to you soon.');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      showToast('❌ Failed to send message. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="page-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you — reach out anytime</p>
        <div className="hero-breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <span>Contact</span>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Left: Contact Info */}
            <div>
              <div className="contact-info-card">
                <h3>Get In Touch</h3>
                <p>We're here to help with admissions, inquiries, and any questions you may have.</p>

                <div className="contact-detail">
                  <div className="contact-detail-icon">📍</div>
                  <div className="contact-detail-text">
                    <div className="cdl">Address</div>
                    <div className="cdv">Ward No. 18, Dhule M.N.P.,<br />Dhule, Maharashtra – 424002</div>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">📞</div>
                  <div className="contact-detail-text">
                    <div className="cdl">Phone</div>
                    <div className="cdv">+91 XXXXX XXXXX</div>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">✉️</div>
                  <div className="contact-detail-text">
                    <div className="cdl">Email</div>
                    <div className="cdv">info@maharanapratapschool.edu</div>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">🕐</div>
                  <div className="contact-detail-text">
                    <div className="cdl">School Hours</div>
                    <div className="cdv">Monday – Saturday<br />7:30 AM – 1:30 PM</div>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">📅</div>
                  <div className="contact-detail-text">
                    <div className="cdl">Academic Session</div>
                    <div className="cdv">April – March (Annual)</div>
                  </div>
                </div>
              </div>

              {/* Quick Reach Buttons */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    padding: '14px',
                    background: '#25D366',
                    color: 'white',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 700,
                    textAlign: 'center',
                    display: 'block',
                    fontSize: '0.9rem',
                  }}
                >
                  💬 WhatsApp Us
                </a>
                <a
                  href="mailto:info@maharanapratapschool.edu"
                  style={{
                    flex: 1,
                    padding: '14px',
                    background: 'var(--primary)',
                    color: 'white',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 700,
                    textAlign: 'center',
                    display: 'block',
                    fontSize: '0.9rem',
                  }}
                >
                  ✉️ Send Email
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="contact-form-card">
              <h3>Send Us a Message</h3>
              <p>Fill in the form below and we'll respond within 1–2 business days.</p>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="c-name">Full Name *</label>
                    <input
                      id="c-name" name="name" type="text"
                      placeholder="Your full name"
                      value={form.name} onChange={handleChange} required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-email">Email Address *</label>
                    <input
                      id="c-email" name="email" type="email"
                      placeholder="your@email.com"
                      value={form.email} onChange={handleChange} required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="c-phone">Phone Number</label>
                    <input
                      id="c-phone" name="phone" type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-subject">Subject</label>
                    <select
                      id="c-subject" name="subject"
                      value={form.subject} onChange={handleChange}
                    >
                      <option value="">Select subject...</option>
                      <option value="Admission Enquiry">Admission Enquiry</option>
                      <option value="Fee Structure">Fee Structure</option>
                      <option value="Academic Query">Academic Query</option>
                      <option value="Infrastructure">Infrastructure</option>
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="c-message">Your Message *</label>
                  <textarea
                    id="c-message" name="message"
                    placeholder="Write your message here..."
                    value={form.message} onChange={handleChange} required
                  />
                </div>
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? '⏳ Sending...' : '📨 Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="map-container" style={{ marginTop: '60px' }}>
            <h3 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700,
              color: 'var(--primary-dark)', fontSize: '1.3rem',
              marginBottom: '20px', textAlign: 'center',
            }}>
              📍 Find Us On The Map
            </h3>
            <iframe
              title="Maharana Pratap High School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0!2d74.7748!3d20.9013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdeed176c85aabb%3A0xdf08b3e0c47f1f79!2sDhule%2C%20Maharashtra%20424002!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Toast */}
      {toast && (
        <div className={`toast ${toast.type === 'error' ? 'toast-error' : 'toast-success'}`}>
          {toast.msg}
        </div>
      )}
    </>
  );
}
