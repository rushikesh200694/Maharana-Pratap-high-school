import { Link } from 'react-router-dom';

const academicCards = [
  {
    icon: '🏫', color: '#e8f4fd', border: '#3b82f6',
    title: 'Primary (Classes 5 & 6)',
    desc: 'Building foundational skills in mathematics, language, science, and social studies through engaging, activity-based learning.',
  },
  {
    icon: '📘', color: '#fef9e7', border: '#f0a500',
    title: 'Middle School (Classes 7 & 8)',
    desc: 'Strengthening subject knowledge with Marathi, Hindi, English, Mathematics, Science, and Social Science.',
  },
  {
    icon: '📗', color: '#eafaf1', border: '#27ae60',
    title: 'Secondary (Classes 9 & 10)',
    desc: 'Rigorous preparation for SSC Board examinations with focus on conceptual clarity and exam readiness.',
  },
  {
    icon: '🎓', color: '#fdf2f8', border: '#8e44ad',
    title: 'Higher Secondary (Classes 11 & 12)',
    desc: 'Advanced HSC curriculum preparing students for board exams and higher education pathways.',
  },
  {
    icon: '📖', color: '#fdf6ec', border: '#e67e22',
    title: 'Marathi Medium',
    desc: 'All subjects taught in Marathi — preserving regional language and ensuring deep understanding.',
  },
  {
    icon: '🇮🇳', color: '#edf7fd', border: '#2980b9',
    title: 'State Board Affiliation',
    desc: 'Affiliated to Maharashtra State Board for SSC (Class 10) and HSC (Class 12) examinations.',
  },
];

const subjects = [
  'Marathi', 'Hindi', 'English', 'Mathematics',
  'Science', 'Social Science', 'History', 'Geography',
  'Civics', 'Economics', 'Political Science', 'Sanskrit',
];

const classes = ['5', '6', '7', '8', '9', '10', '11', '12'];

export default function Academics() {
  return (
    <>
      <div className="page-hero">
        <h1>Academics</h1>
        <p>Quality education from Class 5 to 12 under Maharashtra State Board</p>
        <div className="hero-breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <span>Academics</span>
        </div>
      </div>

      {/* Academic Programs */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <div className="title-badge">Curriculum</div>
            <h2 className="section-title">Academic Programs</h2>
            <p className="section-subtitle">
              We offer a comprehensive curriculum aligned with Maharashtra State Board from Classes 5 to 12
            </p>
          </div>
          <div className="academics-cards">
            {academicCards.map((c, i) => (
              <div key={i} className="academic-card" style={{ borderTopColor: c.border }}>
                <div className="academic-card-icon" style={{ background: c.color, fontSize: '1.8rem' }}>
                  {c.icon}
                </div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Stats */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header centered">
            <div className="title-badge">Our Educators</div>
            <h2 className="section-title">Teaching Staff</h2>
            <p className="section-subtitle">Dedicated professionals committed to student success</p>
          </div>
          <div className="teacher-stats">
            <div className="teacher-stat animate-fadeup">
              <div className="icon">👨‍🏫</div>
              <div className="num">9</div>
              <div className="lbl">Male Teachers</div>
            </div>
            <div className="teacher-stat animate-fadeup" style={{ animationDelay: '0.1s' }}>
              <div className="icon">👩‍🏫</div>
              <div className="num">10</div>
              <div className="lbl">Female Teachers</div>
            </div>
            <div className="teacher-stat animate-fadeup" style={{ animationDelay: '0.2s' }}>
              <div className="icon">🏫</div>
              <div className="num">19</div>
              <div className="lbl">Total Teaching Staff</div>
            </div>
          </div>
          <div className="card" style={{ padding: '28px', marginTop: '32px', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              Our team of 19 dedicated teachers brings immense experience and passion to the classroom.
              With a healthy gender balance — 9 male and 10 female teachers — we ensure a nurturing
              environment for all students. Each teacher is trained in Maharashtra State Board curriculum
              and is committed to holistic student development.
            </p>
          </div>
        </div>
      </section>

      {/* Class Range + Subjects */}
      <section className="section">
        <div className="container">
          <div className="class-range-banner">
            <h3>📚 Classes We Offer</h3>
            <div className="class-pills">
              {classes.map((cls) => (
                <span key={cls} className="class-pill">Class {cls}</span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '48px' }}>
            <div className="section-header centered">
              <div className="title-badge">Subjects</div>
              <h2 className="section-title">Subjects Taught</h2>
              <p className="section-subtitle">Comprehensive subject offerings across all classes</p>
            </div>
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '12px',
              justifyContent: 'center', marginTop: '32px'
            }}>
              {subjects.map((s, i) => (
                <div key={i} style={{
                  background: 'white',
                  border: '2px solid var(--border)',
                  borderRadius: 'var(--radius-full)',
                  padding: '10px 24px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--primary)',
                  transition: 'var(--transition)',
                  cursor: 'default',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board Info */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid-2">
            <div className="card" style={{ padding: '36px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📋</div>
              <h3 style={{
                fontFamily: 'var(--font-heading)', fontSize: '1.2rem',
                fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '12px'
              }}>
                SSC (Class 10)
              </h3>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.7 }}>
                Class 10 students appear for the Secondary School Certificate examination
                conducted by Maharashtra State Board. Our focused preparation ensures students
                achieve excellent results.
              </p>
            </div>
            <div className="card" style={{ padding: '36px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎓</div>
              <h3 style={{
                fontFamily: 'var(--font-heading)', fontSize: '1.2rem',
                fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '12px'
              }}>
                HSC (Class 12)
              </h3>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.7 }}>
                Class 12 students appear for the Higher Secondary Certificate examination.
                This prepares them for entrance to colleges, universities, and professional
                courses across Maharashtra and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
