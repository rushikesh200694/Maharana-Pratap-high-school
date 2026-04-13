import { Link } from 'react-router-dom';

const schoolInfo = [
  ['School Name', 'Maharana Pratap High School'],
  ['Established', '1989'],
  ['Management', 'Pvt. Aided'],
  ['Location', 'Ward No. 18, Dhule M.N.P., Dhule'],
  ['District', 'Dhule, Maharashtra – 424002'],
  ['Area Type', 'Urban'],
  ['Medium of Instruction', 'Marathi'],
  ['School Category', 'Co-educational (Boys & Girls)'],
  ['Classes Offered', '5 to 12'],
  ['Academic Session', 'Starts in April'],
  ['Board Affiliation', 'Maharashtra State Board (SSC & HSC)'],
  ['School Type', 'Secondary & Higher Secondary'],
];

const timeline = [
  { year: '1989', event: 'School established in Dhule M.N.P.', icon: '🏛️' },
  { year: '1995', event: 'Expanded to include Classes 9 & 10 (SSC)', icon: '📖' },
  { year: '2005', event: 'Library set up with 1000+ books', icon: '📚' },
  { year: '2015', event: 'Computer lab added with 3 functional systems', icon: '💻' },
  { year: '2025', event: '35+ years of educational excellence', icon: '🏆' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <h1>About Our School</h1>
        <p>A proud legacy of education since 1989</p>
        <div className="hero-breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <span>About Us</span>
        </div>
      </div>

      {/* Main Info */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            {/* Left */}
            <div>
              <div className="title-badge">Who We Are</div>
              <h2 className="section-title">A School Built on Values</h2>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                Maharana Pratap High School was established in 1989 with a vision to provide quality
                education to the children of Dhule. Managed under Pvt. Aided management, we have
                been serving families in the urban areas of Dhule Municipal Council for over
                three decades.
              </p>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '24px' }}>
                Our school offers Marathi medium instruction from Class 5 to Class 12, affiliated
                with the Maharashtra State Board. We are a co-educational institution that warmly
                welcomes all students, nurturing them in an environment of discipline, creativity,
                and cultural pride.
              </p>

              {/* Mission */}
              <div className="mission-card">
                <h4>🎯 Our Mission</h4>
                <p>
                  To empower every student with knowledge, strong values, and practical skills
                  that will serve them throughout their lives — rooted in Indian heritage and
                  prepared for the modern world.
                </p>
              </div>
              <div className="mission-card" style={{ marginTop: '16px' }}>
                <h4>👁️ Our Vision</h4>
                <p>
                  To be the most trusted educational institution in Dhule district, renowned
                  for academic excellence, character building, and community service.
                </p>
              </div>
            </div>

            {/* Right */}
            <div>
              {/* School Info Table */}
              <div className="card" style={{ padding: '28px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)', fontSize: '1.1rem',
                  fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '20px',
                  borderBottom: '2px solid var(--border)', paddingBottom: '12px'
                }}>
                  📋 School Details
                </h3>
                <table className="info-table">
                  <tbody>
                    {schoolInfo.map(([k, v]) => (
                      <tr key={k}>
                        <td>{k}</td>
                        <td style={{ fontWeight: 600 }}>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Principal Card */}
              <div className="principal-card" style={{ marginTop: '24px' }}>
                <div className="principal-avatar">👨‍🏫</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem' }}>
                  School Leadership
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '8px', lineHeight: 1.7, fontSize: '0.92rem' }}>
                  Our dedicated teaching staff of 19 qualified educators — 9 male and 10 female
                  teachers — work together to provide compassionate and effective education.
                  The school is led by an experienced headmaster committed to academic excellence
                  and student welfare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header centered">
            <div className="title-badge">Our Journey</div>
            <h2 className="section-title">School Timeline</h2>
            <p className="section-subtitle">Key milestones in our 35+ year history</p>
          </div>
          <div style={{
            display: 'flex', flexDirection: 'column', gap: '0',
            maxWidth: '700px', margin: '0 auto', position: 'relative'
          }}>
            <div style={{
              position: 'absolute', left: '50px', top: 0, bottom: 0,
              width: '3px', background: 'linear-gradient(to bottom, var(--accent), var(--primary))',
              borderRadius: '3px'
            }} />
            {timeline.map((t, i) => (
              <div key={i} style={{
                display: 'flex', gap: '24px', alignItems: 'flex-start',
                marginBottom: '32px', position: 'relative'
              }}>
                <div style={{
                  width: '100px', flexShrink: 0, display: 'flex', flexDirection: 'column',
                  alignItems: 'center', gap: '8px'
                }}>
                  <div style={{
                    width: '44px', height: '44px',
                    background: 'linear-gradient(135deg, var(--accent), var(--accent-light))',
                    borderRadius: '50%', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '1.2rem',
                    boxShadow: '0 4px 12px rgba(240,165,0,0.3)',
                    zIndex: 1
                  }}>
                    {t.icon}
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 800,
                    color: 'var(--primary)', fontSize: '0.95rem'
                  }}>{t.year}</span>
                </div>
                <div className="card" style={{ flex: 1, padding: '18px 22px' }}>
                  <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem' }}>{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--primary)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', color: 'white', fontSize: '2rem', fontWeight: 800 }}>
            Ready to Join Our School Family?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', margin: '12px 0 28px', fontSize: '1rem' }}>
            Admissions open for the 2025–26 academic session
          </p>
          <Link to="/contact" className="btn btn-primary">📩 Contact Us for Admission</Link>
        </div>
      </section>
    </>
  );
}
