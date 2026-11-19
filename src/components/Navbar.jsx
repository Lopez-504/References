import { Link } from 'react-router-dom';
import sections from '../data/sections';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">References (Beta)</Link>
      </div>
      <ol className="navbar-links">
        {sections.map(sec => (
          <li key={sec.id}>
            <Link to={sec.route} className='animated-underline'>{sec.title}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
