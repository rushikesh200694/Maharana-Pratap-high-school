import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

/* ── Animated counter hook ── */
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const highlights = [
  { icon: '🏛️', title: 'Established 1989', desc: 'Over 35 years of educational excellence in Dhule' },
  { icon: '🌍', title: 'Co-educational', desc: 'Welcoming boys and girls from all communities' },
  { icon: '📚', title: 'Classes 5 – 12', desc: 'Complete secondary and higher secondary education' },
  { icon: '🏆', title: 'State Board', desc: 'Affiliated with Maharashtra State Board (SSC & HSC)' },
  { icon: '🇮🇳', title: 'Marathi Medium', desc: 'Rooted in regional language and Indian culture' },
  { icon: '🍱', title: 'Mid-Day Meal', desc: 'Nutritious meals provided on campus daily' },
];

const tickerItems = [
  '📢 Admissions Open for 2025–26 Academic Session',
  '🏆 State Board Results: 100% Pass Rate',
  '📚 Library now has 2525+ books',
  '🌿 New academic session begins in April',
  '🎓 Classes 5 to 12 | Marathi Medium | State Board',
  '📞 Contact us for Admission Enquiry',
];

export default function Home() {
  const heroRef = useRef(null);
  const [countersVisible, setCountersVisible] = useState(false);
  const [scrollBtn, setScrollBtn] = useState(false);
  const sectionRef = useRef(null);

  const years = useCounter(35, 2000, countersVisible);
  const students = useCounter(500, 2000, countersVisible);
  const teachers = useCounter(19, 1500, countersVisible);
  const books = useCounter(2525, 2200, countersVisible);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCountersVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollBtn(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="home-hero" ref={heroRef}>
        <div className="hero-bg-pattern" />
        <div className="hero-shapes">
          <div className="hero-shape shape-1" />
          <div className="hero-shape shape-2" />
          <div className="hero-shape shape-3" />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-eyebrow">
                <span />
                Est. 1989 · Dhule, Maharashtra
              </div>
              <h1 className="hero-title">
                Maharana Pratap<br />
                <span className="highlight">High School</span>
              </h1>
              <p className="hero-tagline">
                Nurturing young minds with quality education,<br />
                tradition, and values since 1989. Shaping tomorrow's<br />
                leaders today in the heart of Dhule.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary">
                  📩 Get Admission Info
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  🏫 Explore School
                </Link>
              </div>
              <div className="hero-highlights">
                <div className="hero-highlight-item">✅ Co-educational</div>
                <div className="hero-highlight-item">✅ State Board</div>
                <div className="hero-highlight-item">✅ Marathi Medium</div>
                <div className="hero-highlight-item">✅ Classes 5–12</div>
              </div>
            </div>

            {/* Right floating cards */}
            <div className="hero-visual">
              <div className="hero-card-grid">
                <div className="hero-info-card">
                  <div className="icon">🏫</div>
                  <div className="value">35+</div>
                  <div className="label">Years of Excellence</div>
                </div>
                <div className="hero-info-card">
                  <div className="icon">👨‍🏫</div>
                  <div className="value">19</div>
                  <div className="label">Qualified Teachers</div>
                </div>
                <div className="hero-info-card">
                  <div className="icon">📖</div>
                  <div className="value">5–12</div>
                  <div className="label">Classes Offered</div>
                </div>
                <div className="hero-info-card">
                  <div className="icon">📚</div>
                  <div className="value">2525</div>
                  <div className="label">Library Books</div>
                </div>
                <div className="hero-info-card wide">
                  <div style={{ fontSize: '2rem' }}>🏆</div>
                  <div>
                    <div className="value">State Board Affiliated</div>
                    <div className="label">SSC (10th) & HSC (12th)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="ticker-bar">
        <div className="ticker-inner">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <section className="section" ref={sectionRef}>
        <div className="container">
          <div className="section-header centered">
            <div className="title-badge">By The Numbers</div>
            <h2 className="section-title">Our School At A Glance</h2>
            <p className="section-subtitle">Decades of dedication to quality education in Dhule district</p>
          </div>
          <div className="grid-4" style={{ marginTop: '40px' }}>
            <div className="stat-card animate-fadeup">
              <div className="stat-number">{years}+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-card animate-fadeup" style={{ animationDelay: '0.1s' }}>
              <div className="stat-number">{students}+</div>
              <div className="stat-label">Students Enrolled</div>
            </div>
            <div className="stat-card animate-fadeup" style={{ animationDelay: '0.2s' }}>
              <div className="stat-number">{teachers}</div>
              <div className="stat-label">Qualified Teachers</div>
            </div>
            <div className="stat-card animate-fadeup" style={{ animationDelay: '0.3s' }}>
              <div className="stat-number">{books}</div>
              <div className="stat-label">Library Books</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WELCOME ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="welcome-grid">
            <div className="welcome-img-wrapper animate-left">
              <div className="school-image-placeholder">
                🏫
                <div className="img-label">Maharana Pratap High School</div>
                <div className="img-label" style={{ fontSize: '0.85rem', opacity: 0.6 }}>Dhule, Maharashtra</div>
              </div>
              <div className="welcome-badge">Since 1989 🇮🇳</div>
            </div>
            <div className="animate-right">
              <div className="title-badge">Welcome</div>
              <h2 className="section-title">A Legacy of Learning &amp; Excellence</h2>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                Maharana Pratap High School has been a cornerstone of education in Dhule since
                1989. Managed by Pvt. Aided and situated in the urban heart of Dhule M.N.P.,
                our school proudly offers Marathi medium instruction aligned with Maharashtra
                State Board standards.
              </p>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '20px' }}>
                We are committed to providing holistic education to children of Classes 5 through 12,
                nurturing not just academic excellence but also values, discipline, and civic pride.
              </p>
              <div className="welcome-list">
                {[
                  'Co-educational institution serving the Dhule community',
                  'Affiliated with Maharashtra State Board (SSC & HSC)',
                  'Dedicated team of 19 qualified teachers',
                  'Nutritious mid-day meals provided on campus',
                  'Library with 2525+ books and 3 computers',
                ].map((item, i) => (
                  <div key={i} className="welcome-list-item">
                    <div className="check-icon">✓</div>
                    {item}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn-outline">Learn More →</Link>
                <Link to="/contact" className="btn btn-primary">📩 Admission Enquiry</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <div className="title-badge">Our Strengths</div>
            <h2 className="section-title">Why Choose Maharana Pratap?</h2>
            <p className="section-subtitle">A school that goes beyond textbooks to truly educate</p>
          </div>
          <div className="highlights-grid">
            {highlights.map((h, i) => (
              <div key={i} className="highlight-card animate-fadeup" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="highlight-icon">{h.icon}</div>
                <div className="highlight-title">{h.title}</div>
                <p className="highlight-desc">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary-dark), var(--primary))',
        padding: '70px 0',
        textAlign: 'center',
      }}>
        <div className="container">
          <div className="title-badge" style={{ background: 'rgba(240,165,0,0.3)', color: 'var(--accent-light)' }}>
            Admissions 2025–26
          </div>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 800,
            color: 'white',
            margin: '16px 0',
          }}>
            Begin Your Child's Journey<br />With Us Today!
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '32px', fontSize: '1.05rem' }}>
            Admissions open for Classes 5 to 12. Academic session starts in April.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1rem', padding: '14px 32px' }}>
              📩 Apply for Admission
            </Link>
            <Link to="/about" className="btn btn-secondary" style={{ fontSize: '1rem', padding: '14px 32px' }}>
              🏫 Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Scroll To Top ── */}
      <button
        className={`scroll-top-btn${scrollBtn ? ' visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  );
}
