import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/academics', label: 'Academics' },
  { to: '/infrastructure', label: 'Infrastructure' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact', cta: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <NavLink to="/" className="nav-logo">
          <div className="nav-logo-icon">🏫</div>
          <div>
            <div className="nav-logo-text">Maharana Pratap</div>
            <div className="nav-logo-sub">High School, Dhule</div>
          </div>
        </NavLink>

        {/* Desktop Links */}
        <div className={`nav-links${open ? ' open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `nav-link${l.cta ? ' nav-cta' : ''}${isActive ? ' active' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span style={{ transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </div>
    </nav>
  );
}
