import { Link } from 'react-router-dom';
import { heroStats, person } from '../data/portfolio.js';

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
            <p className="eyebrow">Open to opportunities with leading construction and interior companies</p>
            <p className="hero-role">{person.title}</p>
            <h1>{person.name}</h1>
            <div className="mobile-hero-portrait" aria-label={`Professional portrait of ${person.name}`}>
              <div className="mobile-portrait-frame">
                <img src={person.profileImage} alt={`Professional portrait of ${person.name}`} />
              </div>
              <div className="mobile-role-card">
                <p>Seeking senior roles</p>
                <span>Finishing supervisor, painting supervisor or gypsum team supervisor.</span>
              </div>
            </div>
            <p className="hero-lede">
              Senior finishing supervisor for decorative painting, gypsum and premium interiors.
            </p>
            <p className="hero-summary">
              Abdellah Ait Messaoud brings 20+ years of hands-on finishing experience and supervises teams
              across painting, decorative surfaces, gypsum works and high-end interior delivery.
            </p>
            <div className="button-row">
              <Link className="button button-primary focus-ring" to="/contact">
                Contact for opportunities
              </Link>
              <a
                className="button button-outline-light focus-ring"
                href="mailto:abdellah.aitmessaoud01@gmail.com?subject=Project%20Brief&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20send%20you%20a%20project%20brief.%0D%0A%0D%0AProject%20Name:%0D%0AProject%20Type:%0D%0ABudget:%0D%0ADeadline:%0D%0ADetails:%0D%0A"
              >
                Send Project Brief
              </a>
              <a className="button button-outline-light focus-ring" href={person.cvUrl}>
                View CV
              </a>
            </div>
          </div>

          <div className="hero-portrait" aria-label={`Professional portrait of ${person.name}`}>
            <div className="portrait-frame">
              <img src={person.profileImage} alt={`Professional portrait of ${person.name}`} />
            </div>
            <div className="role-card">
              <p>Seeking senior roles</p>
              <span>Finishing supervisor, painting supervisor or gypsum team supervisor.</span>
            </div>
          </div>
        </div>

        <div className="section-shell hero-stats-shell">
          <div className="hero-stats">
            {heroStats.map((stat) => (
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
