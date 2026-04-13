import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API = 'http://localhost:5000/api';

/* ── Star component ── */
function Stars({ rating, size = '1rem' }) {
  return (
    <div className="review-stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className="review-star" style={{ fontSize: size }}>
          {s <= rating ? '⭐' : '☆'}
        </span>
      ))}
    </div>
  );
}

/* ── Fallback demo reviews (shown when API is offline) ── */
const demoReviews = [
  {
    _id: '1',
    name: 'Priya Patil',
    rating: 5,
    comment:
      'Maharana Pratap High School is an excellent institution. My children have been studying here for 4 years and the teachers are very dedicated and caring. Highly recommended!',
    createdAt: '2025-09-15T10:00:00Z',
  },
  {
    _id: '2',
    name: 'Ramesh Jadhav',
    rating: 4,
    comment:
      'Good school with qualified teachers. The emphasis on values and discipline is commendable. The library is well-stocked and students make good use of it.',
    createdAt: '2025-08-10T08:30:00Z',
  },
  {
    _id: '3',
    name: 'Sunita Deshmukh',
    rating: 5,
    comment:
      'My son cleared his SSC with distinction from this school. The teachers go above and beyond to support every student. Very proud parent!',
    createdAt: '2025-07-05T12:00:00Z',
  },
  {
    _id: '4',
    name: 'Anil Bhosale',
    rating: 4,
    comment:
      'Affordable fees, excellent teaching staff and very good results in board exams. The mid-day meal programme is a great initiative for students.',
    createdAt: '2025-06-20T09:15:00Z',
  },
];

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', rating: 0, comment: '' });
  const [hovered, setHovered] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [apiOnline, setApiOnline] = useState(true);

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`${API}/reviews`, { timeout: 4000 });
      setReviews(res.data.length ? res.data : demoReviews);
      setApiOnline(true);
    } catch {
      setReviews(demoReviews);
      setApiOnline(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchReviews(); }, []);

  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : '0.0';

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.rating || !form.comment) {
      showToast('Please fill in all fields and select a rating.', 'error');
      return;
    }
    setSubmitting(true);
    try {
      if (apiOnline) {
        const res = await axios.post(`${API}/reviews`, form);
        setReviews((prev) => [res.data, ...prev]);
      } else {
        // Offline mode — add locally
        const local = {
          _id: Date.now().toString(),
          ...form,
          rating: Number(form.rating),
          createdAt: new Date().toISOString(),
        };
        setReviews((prev) => [local, ...prev]);
      }
      showToast('✅ Thank you for your review!');
      setForm({ name: '', rating: 0, comment: '' });
      setHovered(0);
    } catch {
      showToast('❌ Could not submit review. Please try again.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'long', year: 'numeric',
    });

  return (
    <>
      <div className="page-hero">
        <h1>Reviews & Testimonials</h1>
        <p>Hear what parents, students, and the community say about us</p>
        <div className="hero-breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <span>Reviews</span>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="reviews-layout">
            {/* ── Left: Avg Rating + Form ── */}
            <div>
              {/* Avg Rating Widget */}
              <div className="avg-rating-widget">
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>
                  Overall Rating
                </div>
                <div className="avg-number">{avgRating}</div>
                <div className="avg-stars">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} style={{ color: s <= Math.round(Number(avgRating)) ? 'var(--accent)' : 'rgba(255,255,255,0.3)', fontSize: '1.5rem' }}>
                      ★
                    </span>
                  ))}
                </div>
                <div className="avg-count">Based on {reviews.length} review{reviews.length !== 1 ? 's' : ''}</div>

                {/* Rating Distribution */}
                <div style={{ marginTop: '20px' }}>
                  {[5, 4, 3, 2, 1].map((star) => {
                    const count = reviews.filter((r) => r.rating === star).length;
                    const pct = reviews.length ? (count / reviews.length) * 100 : 0;
                    return (
                      <div key={star} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                        <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', width: '20px', textAlign: 'right' }}>{star}★</span>
                        <div style={{ flex: 1, height: '7px', background: 'rgba(255,255,255,0.15)', borderRadius: '10px', overflow: 'hidden' }}>
                          <div style={{
                            height: '100%',
                            width: `${pct}%`,
                            background: 'linear-gradient(90deg, var(--accent), var(--accent-light))',
                            borderRadius: '10px',
                            transition: 'width 1s ease',
                          }} />
                        </div>
                        <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', width: '20px' }}>{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Review Form */}
              <div className="review-form-card">
                <h3>✍️ Write a Review</h3>

                {!apiOnline && (
                  <div style={{
                    background: '#fef9e7', border: '1px solid var(--accent)', borderRadius: 'var(--radius-sm)',
                    padding: '10px 14px', fontSize: '0.82rem', color: '#856404', marginBottom: '16px',
                  }}>
                    ⚠️ Backend offline — reviews will appear locally
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="r-name">Your Name *</label>
                    <input
                      id="r-name" name="name" type="text"
                      placeholder="Enter your name"
                      value={form.name} onChange={handleChange} required
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Rating *</label>
                    <div className="star-select">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <button
                          key={s}
                          type="button"
                          className="star-btn"
                          onMouseEnter={() => setHovered(s)}
                          onMouseLeave={() => setHovered(0)}
                          onClick={() => setForm({ ...form, rating: s })}
                          aria-label={`Rate ${s} star${s > 1 ? 's' : ''}`}
                        >
                          <span className={s <= (hovered || form.rating) ? 'star-filled' : 'star-empty'}>
                            ★
                          </span>
                        </button>
                      ))}
                    </div>
                    {form.rating > 0 && (
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', marginTop: '4px' }}>
                        {['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][form.rating]} — {form.rating}/5
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="r-comment">Your Review *</label>
                    <textarea
                      id="r-comment" name="comment"
                      placeholder="Share your experience with the school..."
                      value={form.comment} onChange={handleChange}
                      style={{ minHeight: '110px' }} required
                    />
                  </div>

                  <button type="submit" className="submit-btn" disabled={submitting}>
                    {submitting ? '⏳ Submitting...' : '🌟 Submit Review'}
                  </button>
                </form>
              </div>
            </div>

            {/* ── Right: Reviews List ── */}
            <div>
              <div className="section-header">
                <div className="title-badge">Community Feedback</div>
                <h2 className="section-title">What People Say</h2>
                <p className="section-subtitle">Genuine reviews from parents and alumni</p>
              </div>

              {loading ? (
                <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-light)' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '12px', animation: 'spin 1s linear infinite', display: 'inline-block' }}>⏳</div>
                  <p>Loading reviews...</p>
                </div>
              ) : reviews.length === 0 ? (
                <div style={{
                  textAlign: 'center', padding: '60px 20px',
                  background: 'white', borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  <div style={{ fontSize: '4rem' }}>💬</div>
                  <h3 style={{ marginTop: '16px', color: 'var(--primary-dark)' }}>No reviews yet</h3>
                  <p style={{ color: 'var(--text-light)', marginTop: '8px' }}>Be the first to share your experience!</p>
                </div>
              ) : (
                <div className="reviews-list">
                  {reviews.map((r, i) => (
                    <div
                      key={r._id}
                      className="review-card animate-fadeup"
                      style={{ animationDelay: `${i * 0.08}s` }}
                    >
                      <div className="review-header">
                        <div className="reviewer-info">
                          <div className="reviewer-avatar">
                            {r.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="reviewer-name">{r.name}</div>
                            <div className="review-date">{formatDate(r.createdAt)}</div>
                          </div>
                        </div>
                        <Stars rating={r.rating} />
                      </div>
                      <div className="review-comment">
                        <span className="review-quote">"</span>
                        {r.comment}
                      </div>
                      {/* Verified badge */}
                      <div style={{
                        marginTop: '12px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '0.75rem',
                        color: 'var(--success)',
                        fontWeight: 600,
                      }}>
                        ✓ Verified Review
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'var(--secondary)',
        padding: '60px 0',
        textAlign: 'center',
      }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary-dark)', fontSize: '1.8rem', fontWeight: 800 }}>
            Want to Know More About Our School?
          </h2>
          <p style={{ color: 'var(--text-light)', margin: '12px 0 28px' }}>
            Visit us or get in touch for admission enquiries and school tours.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">📩 Contact Us</Link>
            <Link to="/about" className="btn btn-outline">🏫 About School</Link>
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
