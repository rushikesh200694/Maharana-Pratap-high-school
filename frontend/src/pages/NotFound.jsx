import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-title">404</div>
      <div className="not-found-subtitle">Page Not Found</div>
      <p className="not-found-text">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link to="/" className="btn btn-primary">
        🏠 Back to Home
      </Link>
    </div>
  );
}
