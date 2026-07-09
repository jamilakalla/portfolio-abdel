import { Link } from 'react-router-dom';
import { person } from '../data/portfolio.js';

const homeStats = [
  { value: '20+', label: 'Years of professional experience' },
  { value: 'Supervisor', label: 'Interior fit-out, gypsum & finishing teams' },
  { value: 'Dubai / UAE', label: 'Based & open to international opportunities' },
];

export default function Home() {
  return (
    <>
      <section id="top" className="hero-section">
        <img
          className="hero-background"
          src={person.heroImage}
          alt="Luxury interior with decorative wall finishes, gypsum details and architectural lighting"
        />
        <div className="hero-overlay" />

        <div className="section-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">OPEN TO INTERIOR FIT-OUT & FINISHING ROLES</p>
            <p className="hero-role">Senior Interior Fit-Out & Finishing Supervisor</p>
            <h1>{person.name}</h1>
            <div className="mobile-hero-portrait" aria-label={`Professional portrait of ${person.name}`}>
              <div className="mobile-portrait-frame">
                <img src={person.profileImage} alt={`Professional portrait of ${person.name}`} />
              </div>
              <div className="mobile-role-card">
                <p>Open to senior roles</p>
                <span>Interior Fit-Out Supervisor, Finishing Supervisor, Decorative Gypsum Supervisor, or Painting Supervisor.</span>
              </div>
            </div>
            <p className="hero-lede">
              Senior Interior Fit-Out & Finishing Supervisor specialized in Decorative Gypsum, Marmorino, Venetian Plaster & Premium Interior Finishing.
            </p>
            <p className="hero-summary">
              20+ years of hands-on experience in decorative gypsum works, Marmorino-style finishes, Venetian plaster, decorative plaster finishes, mural painting, site supervision, team coordination, premium interior finishing, and experience with Matteo Brioni materials for residential, commercial, villa, hotel, and retail projects.
            </p>
            <div className="button-row">
              <Link className="button button-primary focus-ring" to="/contact">
                Contact for Opportunities
              </Link>
              <Link className="button button-primary" to="/projects">
                View Projects
              </Link>
              <a
                className="button button-primary focus-ring"
                href="/abdellahcv1.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV
              </a>
            </div>
          </div>

          <div className="hero-portrait" aria-label={`Professional portrait of ${person.name}`}>
            <div className="portrait-frame">
              <img src={person.profileImage} alt={`Professional portrait of ${person.name}`} />
            </div>
            <div className="role-card">
              <p>Open to senior roles</p>
              <span>Interior Fit-Out Supervisor, Finishing Supervisor, Decorative Gypsum Supervisor, or Painting Supervisor.</span>
            </div>
          </div>
        </div>

        <div className="section-shell hero-stats-shell">
          <div className="hero-stats">
            {homeStats.map((stat) => (
              <div key={stat.label} className="stat-cell">
                <p>{stat.value}</p>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
