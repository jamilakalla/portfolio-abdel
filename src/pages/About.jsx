import SectionHeading from '../components/SectionHeading.jsx';
import { aboutHighlights, person } from '../data/portfolio.js';

export default function About({ onNavigate }) {
  return (
    <>
      <section className="hero-section about-hero">
        <div className="section-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">About</p>
            <p className="hero-role">{person.title}</p>
            <h1>Who is Abdellah?</h1>
            <p className="hero-lede">
              Senior finishing supervisor for decorative painting, gypsum and premium interiors.
            </p>
            <p className="hero-summary">
              Abdellah Ait Messaoud brings 20+ years of hands-on finishing experience and supervises teams
              across painting, decorative surfaces, gypsum works and high-end interior delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="section-shell two-column">
          <div>
            <SectionHeading
              eyebrow="About"
              title="A practical finishing supervisor for serious site environments."
            />
            <div className="small-stack">
              <span>{person.location}</span>
              <span>Availability: {person.availability}</span>
            </div>
          </div>
          <div>
            <p className="lead-text">
              Senior finishing professional with over 20 years of experience in decorative painting, mural
              finishes, gypsum works and premium interior delivery.
            </p>
            <div className="body-stack">
              <p>
                He combines hands-on technical execution with site supervision, coordinating painting and
                gypsum teams to deliver clean, consistent and design-aligned finishes.
              </p>
              <p>
                This portfolio is designed for serious employment opportunities with leading construction,
                fit-out and interior companies, not as a long CV copy.
              </p>
              <p>Company names, selected project names and verified references remain à compléter from official project records.</p>
            </div>
            <div className="highlight-grid">
              {aboutHighlights.map((highlight) => (
                <div key={highlight}>{highlight}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
