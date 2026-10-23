import { Link } from 'react-router-dom';
import sections from '../data/sections';
import './landing.css';

export default function Landing() {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Scientific References Library</h1>
        <p>A curated collection of foundational and contemporary papers.</p>
      </header>
      <div className="landing-sections">
        {sections.map(sec => (
          <Link key={sec.id} to={sec.route} className="section-card">
            <h2>{sec.title}</h2>
            <p>Explore papers related to {sec.title.toLowerCase()}.</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
