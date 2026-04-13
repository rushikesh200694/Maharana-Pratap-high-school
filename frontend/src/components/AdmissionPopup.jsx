import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AdmissionPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('popup_dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem('popup_dismissed', 'true');
  };

  if (!show) return null;

  return (
    <div className="popup-overlay" onClick={dismiss}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={dismiss} aria-label="Close">✕</button>
        <div className="popup-icon">🎓</div>
        <div className="popup-badge">Admissions Open</div>
        <h2 className="popup-title">Academic Year 2025–26</h2>
        <p className="popup-text">
          Admissions are now open for <strong>Classes 5 to 12</strong>.<br />
          Marathi Medium | State Board | Co-educational
        </p>
        <div className="popup-details">
          <div className="popup-detail-item">
            <span className="popup-detail-icon">📅</span>
            <span>Session starts <strong>April 2025</strong></span>
          </div>
          <div className="popup-detail-item">
            <span className="popup-detail-icon">📍</span>
            <span>Ward No. 18, Dhule M.N.P.</span>
          </div>
          <div className="popup-detail-item">
            <span className="popup-detail-icon">📞</span>
            <span>+91 XXXXX XXXXX</span>
          </div>
        </div>
        <div className="popup-actions">
          <Link to="/contact" className="popup-btn-primary" onClick={dismiss}>
            📩 Enquire Now
          </Link>
          <button className="popup-btn-ghost" onClick={dismiss}>
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}
