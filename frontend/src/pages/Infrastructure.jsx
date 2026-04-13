import { Link } from 'react-router-dom';

const infraItems = [
  {
    icon: '🏢', label: 'Building Type', value: 'Rented Building',
    detail: 'Well-maintained rented premises suitable for school operations',
    status: 'ok',
  },
  {
    icon: '🚪', label: 'Classrooms', value: '5 Classrooms',
    detail: 'Five dedicated classrooms for regular classes',
    status: 'ok',
  },
  {
    icon: '📦', label: 'Additional Rooms', value: '2 Extra Rooms',
    detail: 'Two additional rooms for activities and storage',
    status: 'ok',
  },
  {
    icon: '🪑', label: 'Headmaster Room', value: 'Separate Room',
    detail: "Dedicated room for the headmaster's office",
    status: 'ok',
  },
  {
    icon: '⚡', label: 'Electricity', value: 'Available',
    detail: 'Functional electrical connections throughout the school',
    status: 'ok',
  },
  {
    icon: '🚰', label: 'Drinking Water', value: 'Tap Water (Functional)',
    detail: 'Clean tap water supply available for students and staff',
    status: 'ok',
  },
  {
    icon: '🚻', label: 'Boys\' Toilets', value: '2 Toilets',
    detail: 'Two separate, maintained toilet blocks for boys',
    status: 'ok',
  },
  {
    icon: '🚾', label: 'Girls\' Toilets', value: '3 Toilets',
    detail: 'Three clean and separate toilet facilities for girls',
    status: 'ok',
  },
  {
    icon: '🏟️', label: 'Playground', value: 'Available',
    detail: 'Open playground area for sports and recreational activities',
    status: 'ok',
  },
  {
    icon: '📚', label: 'Library', value: '2525 Books',
    detail: 'Well-stocked library with 2525 books across subjects',
    status: 'ok',
  },
  {
    icon: '💻', label: 'Computers', value: '3 Functional Units',
    detail: 'Three functional computers available for student use',
    status: 'ok',
  },
  {
    icon: '🍱', label: 'Mid-Day Meal', value: 'On-Campus',
    detail: 'Nutritious mid-day meals prepared and served on school premises',
    status: 'ok',
  },
  {
    icon: '🔌', label: 'Computer Internet', value: 'N/A',
    detail: 'Internet facility currently not available for computers',
    status: 'na',
  },
  {
    icon: '🌿', label: 'Boundary Wall', value: 'Barbed Wire Fencing',
    detail: 'Safe barbed wire fencing around the school boundary',
    status: 'ok',
  },
  {
    icon: '🛣️', label: 'Road Access', value: 'All-Weather Road',
    detail: 'Accessible via all-weather road throughout the year',
    status: 'ok',
  },
];

const summaryStats = [
  { icon: '🚪', label: 'Classrooms', value: '5' },
  { icon: '📚', label: 'Library Books', value: '2,525' },
  { icon: '💻', label: 'Computers', value: '3' },
  { icon: '🚻', label: 'Toilet Blocks', value: '5' },
];

export default function Infrastructure() {
  return (
    <>
      <div className="page-hero">
        <h1>Infrastructure</h1>
        <p>Our facilities are designed to support a safe and productive learning environment</p>
        <div className="hero-breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <span>Infrastructure</span>
        </div>
      </div>

      {/* Summary Stats */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <div className="title-badge">At a Glance</div>
            <h2 className="section-title">Infrastructure Overview</h2>
            <p className="section-subtitle">
              Well-equipped premises to support quality education for all students
            </p>
          </div>

          {/* Quick Stats Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '20px',
            marginBottom: '56px',
          }}>
            {summaryStats.map((s, i) => (
              <div key={i} className="stat-card animate-fadeup" style={{ animationDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '8px' }}>{s.icon}</div>
                <div className="stat-number">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Infrastructure Cards Grid */}
          <div className="infra-grid">
            {infraItems.map((item, i) => (
              <div key={i} className="infra-card animate-fadeup" style={{ animationDelay: `${(i % 4) * 0.08}s` }}>
                <div className="infra-icon">{item.icon}</div>
                <div>
                  <div className="infra-label">{item.label}</div>
                  <div className="infra-value">{item.detail}</div>
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    fontSize: '0.95rem',
                  }}>
                    {item.value}
                  </span>
                  <span className={`infra-status ${item.status === 'ok' ? 'status-ok' : 'status-na'}`}>
                    {item.status === 'ok' ? '✓ Available' : '✗ N/A'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Info Banner */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid-2">
            <div className="card" style={{ padding: '36px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🏢</div>
              <h3 style={{
                fontFamily: 'var(--font-heading)', fontSize: '1.2rem',
                fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '12px',
              }}>
                Building & Classrooms
              </h3>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8 }}>
                The school operates from a rented building featuring 5 well-maintained classrooms,
                2 additional multipurpose rooms, and a dedicated headmaster's office. The premises
                are designed to accommodate students comfortably while ensuring a safe and
                conducive learning atmosphere.
              </p>
            </div>
            <div className="card" style={{ padding: '36px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🌿</div>
              <h3 style={{
                fontFamily: 'var(--font-heading)', fontSize: '1.2rem',
                fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '12px',
              }}>
                Safety & Accessibility
              </h3>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8 }}>
                Student safety is our priority. The school boundary is secured with barbed wire
                fencing. The school is accessible via an all-weather road, ensuring students and
                staff can reach the premises comfortably throughout the year regardless of season.
              </p>
            </div>
          </div>

          {/* Toilet & Water */}
          <div className="card" style={{ padding: '36px', marginTop: '24px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🚰</div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '8px' }}>
                  Clean Drinking Water
                </h4>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.92rem' }}>
                  Functional tap water connections provide clean drinking water to all students and staff throughout the day.
                </p>
              </div>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🚻</div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '8px' }}>
                  Separate Toilet Blocks
                </h4>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.92rem' }}>
                  2 toilet blocks for boys and 3 for girls — well-maintained and separate to ensure privacy and hygiene.
                </p>
              </div>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🍱</div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '8px' }}>
                  Mid-Day Meal Program
                </h4>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.92rem' }}>
                  Nutritious mid-day meals are cooked and served on campus, supporting both nutrition and student attendance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
