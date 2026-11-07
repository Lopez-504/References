import { Link } from 'react-router-dom';
import sections from '../data/sections';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">References (Beta)</Link>
      </div>
      <ul className="navbar-links">
        {sections.map(sec => (
          <li key={sec.id}>
            <Link to={sec.route}>{sec.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
