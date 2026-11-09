import { Link } from 'react-router-dom';

// 404 page
export default function NotFound() {
  return (
    <div className="not-found" data-testid="not-found">
      <h1>404</h1>
      <p>This page does not exist.</p>
      <Link to="/">Back to the shop</Link>
    </div>
  );
}
