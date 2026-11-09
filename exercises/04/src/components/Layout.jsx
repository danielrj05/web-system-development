import { Outlet } from 'react-router-dom';
import Header from './Header';

// Common layout: header + current page (Outlet)
export default function Layout() {
  return (
    <div>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}
