import { Link } from 'react-router-dom';

const facilities = [
  {
    icon: '📚',
    title: 'Library',
    desc: 'Well-stocked library with over 2,525 books covering all subjects from Classes 5 to 12.',
    detail: '2,525 Books',
    color: '#e8f4fd',
  },
  {
    icon: '🏟️',
    title: 'Playground',
    desc: 'Spacious open playground for physical activities, sports, and recreational play during breaks.',
    detail: 'Open Ground',
    color: '#eafaf1',
  },
  {
    icon: '💻',
    title: 'Computer Lab',
    desc: 'Equipped with 3 functional computers helping students gain basic digital literacy skills.',
    detail: '3 Computers',
    color: '#fdf2f8',
  },
  {
    icon: '🚰',
    title: 'Clean Water',
    desc: 'Functional tap water supply ensuring students have access to clean drinking water all day.',
    detail: 'Tap Water',
    color: '#fef9e7',
  },
  {
    icon: '⚡',
    title: 'Electricity',
    desc: 'Fully electrified premises with functioning lights and fans for a comfortable learning atmosphere.',
    detail: 'Functional',
    color: '#fdf6ec',
  },
  {
    icon: '🍱',
    title: 'Mid-Day Meals',
    desc: 'Nutritious mid-day meals cooked and served on campus under the government scheme.',
    detail: 'On Campus',
    color: '#edf7fd',
  },
  {
    icon: '🚻',
    title: 'Clean Toilets',
    desc: '5 total toilet blocks — 2 for boys and 3 for girls — maintained clean and separate.',
    detail: '2 Boys + 3 Girls',
    color: '#f4ecf7',
  },
  {
    icon: '🌿',
    title: 'Secure Boundary',
    desc: 'Barbed wire fencing around the campus ensures safety and a secure learning environment.',
    detail: 'Barbed Wire',
    color: '#eafaf1',
  },
  {
    icon: '🛣️',
    title: 'Road Access',
    desc: 'School is accessible year-round via an all-weather approach road for parents and students.',
    detail: 'All-Weather',
    color: '#fef9e7',
  },
  {
    icon: '🏢',
    title: 'Classrooms',
    desc: '5 dedicated classrooms along with 2 additional rooms and a separate headmaster room.',
    detail: '5 + 2 Rooms',
    color: '#e8f4fd',
  },
];

const highlights = [
  { emoji: '📖', text: 'Books in Library', value: '2,525+' },
  { emoji: '💻', text: 'Computers', value: '3' },
  { emoji: '🚻', text: 'Toilet Blocks', value: '5' },
  { emoji: '🏟️', text: 'Playground', value: '1' },
];

export default function Facilities() {
  return (
    <>
      <div className="page-hero">
        <h1>Facilities</h1>
        <p>Everything our students need for a well-rounded school experience</p>
        <div className="hero-breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <span>Facilities</span>
        </div>
      </div>

      {/* Highlights Bar */}
      <div style={{
        background: 'linear-gradient(90deg, var(--primary-dark), var(--primary))',
        padding: '28px 0',
      }}>
        <div className="container">
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '20px',
            justifyContent: 'space-around', alignItems: 'center',
          }}>
            {highlights.map((h, i) => (
              <div key={i} style={{ textAlign: 'center', color: 'white' }}>
                <div style={{ fontSize: '1.8rem' }}>{h.emoji}</div>
                <div style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 900,
                  fontSize: '1.8rem', color: 'var(--accent)', lineHeight: 1,
                }}>{h.value}</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>
                  {h.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Facilities Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <div className="title-badge">Our Facilities</div>
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              A safe, supportive, and well-equipped environment for every student
            </p>
          </div>
          <div className="facilities-grid">
            {facilities.map((f, i) => (
              <div
                key={i}
                className="facility-card animate-fadeup"
                style={{
                  animationDelay: `${(i % 5) * 0.08}s`,
                  background: f.color,
                }}
              >
                <span
                  className="facility-icon"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {f.icon}
                </span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <div style={{
                  marginTop: '14px',
                  display: 'inline-block',
                  background: 'white',
                  padding: '4px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  {f.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Library Focus Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="welcome-grid">
            <div>
              <div className="title-badge">Knowledge Hub</div>
              <h2 className="section-title">Our School Library</h2>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                The school library is a quiet haven for curious minds. With over 2,525 books
                spanning all subjects — from literature, mathematics, science, history to additional
                reference books — our library encourages students to explore beyond the textbook.
              </p>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '24px' }}>
                Students from all classes (5–12) are encouraged to use the library regularly.
                Reading habits developed here lay the foundation for a lifetime of learning.
              </p>
              <div className="welcome-list">
                {[
                  '2,525+ books across all subjects',
                  'Open for students of Classes 5 to 12',
                  'Reference books for board exam preparation',
                  'Supervised reading sessions available',
                ].map((item, i) => (
                  <div key={i} className="welcome-list-item">
                    <div className="check-icon">✓</div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="school-image-placeholder" style={{ borderRadius: 'var(--radius-lg)', minHeight: '300px', aspectRatio: '4/3' }}>
              📚
              <div className="img-label">School Library</div>
              <div className="img-label" style={{ fontSize: '0.85rem', opacity: 0.6 }}>2,525+ Books</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports & Activity */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <div className="title-badge">Beyond Books</div>
            <h2 className="section-title">Sports & Activities</h2>
            <p className="section-subtitle">Physical fitness and extracurricular development</p>
          </div>
          <div className="grid-3">
            {[
              { icon: '🏏', name: 'Cricket', desc: 'Students play cricket on the school playground during sports periods' },
              { icon: '⚽', name: 'Football', desc: 'Football activities are conducted in the open playground area' },
              { icon: '🏃', name: 'Athletics', desc: 'Running and track events are part of the physical education program' },
              { icon: '🧘', name: 'Yoga', desc: 'Yoga sessions promoting physical and mental well-being for students' },
              { icon: '🎨', name: 'Arts & Crafts', desc: 'Creative activities and art programs for cultural development' },
              { icon: '🎭', name: 'Cultural Events', desc: 'Annual cultural programs celebrating Indian festivals and traditions' },
            ].map((a, i) => (
              <div key={i} className="card" style={{ padding: '28px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{a.icon}</div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 700,
                  color: 'var(--primary-dark)', marginBottom: '8px', fontSize: '1rem',
                }}>
                  {a.name}
                </h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.88rem' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
