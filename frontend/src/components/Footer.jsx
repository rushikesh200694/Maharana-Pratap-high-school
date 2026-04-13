import { Link } from 'react-router-dom';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/academics', label: 'Academics' },
  { to: '/infrastructure', label: 'Infrastructure' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">🏫</div>
                <div className="footer-logo-text">
                  Maharana Pratap<br />High School
                </div>
              </div>
              <p>
                Established in 1989, Maharana Pratap High School has been shaping
                young minds with quality education in Dhule, Maharashtra. We offer
                classes from 5 to 12 in Marathi medium under the State Board.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="Facebook">📘</a>
                <a href="#" className="social-link" aria-label="WhatsApp">💬</a>
                <a href="#" className="social-link" aria-label="YouTube">▶️</a>
                <a href="#" className="social-link" aria-label="Instagram">📸</a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <div className="footer-links">
                {quickLinks.map((l) => (
                  <Link key={l.to} to={l.to} className="footer-link">{l.label}</Link>
                ))}
              </div>
            </div>

            {/* Academics */}
            <div className="footer-col">
              <h4>Academics</h4>
              <div className="footer-links">
                <span className="footer-link">Classes 5 – 12</span>
                <span className="footer-link">Marathi Medium</span>
                <span className="footer-link">State Board (SSC/HSC)</span>
                <span className="footer-link">19 Qualified Teachers</span>
                <span className="footer-link">Mid-Day Meal Program</span>
              </div>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4>Contact Us</h4>
              <div className="footer-contact-item">
                <span>📍</span>
                <span>Ward No. 18, Dhule M.N.P., Dhule, Maharashtra – 424002</span>
              </div>
              <div className="footer-contact-item">
                <span>📞</span>
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="footer-contact-item">
                <span>✉️</span>
                <span>info@maharanapratapschool.edu</span>
              </div>
              <div className="footer-contact-item">
                <span>🕐</span>
                <span>Mon – Sat: 7:30 AM – 1:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Maharana Pratap High School, Dhule. All rights reserved.</p>
          <p>Managed by Pvt. Aided | Academic Session: April onwards</p>
        </div>
      </div>
    </footer>
  );
}
