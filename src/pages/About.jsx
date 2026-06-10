import { Link } from 'react-router-dom';
import { person } from '../data/portfolio.js';

const stats = [
  'Decorative painting and premium wall finishes',
  'Gypsum works, false ceilings and interior detailing',
  'Team supervision and site coordination',
  'Quality control and finishing standards',
];
const expertise = [
  'Decorative Painting',
  'Gypsum Works',
  'Team Leadership',
  'Quality Supervision',
];
export default function About() {
  return (
    <div className="page page-dark">
      <section className="lux-hero section-shell">
        <div className="lux-copy">
<p className="eyebrow" style={{ fontSize: "1.1rem", marginBottom: "1.2rem" }}>
  ABOUT
</p>          <p>
            Abdellah Ait Messaoud is a senior finishing supervisor with more than 20 years of practical
            experience in decorative painting, gypsum works, mural painting and premium interior finishes.
          </p>
          <p>
            He combines hands-on technical knowledge with site supervision, team coordination and
            attention to detail. His work focuses on clean execution, high-quality finishing, respect
            for project specifications and smooth coordination between workers, clients and site teams.
          </p>
          <p>
            Based in the UAE and seeking senior opportunities in Dubai, Abdellah brings strong field
            experience across painting, decorative surfaces, gypsum decoration, false ceilings and
            luxury interior delivery.
          </p>
          <div className="button-row">
            <Link className="button button-primary focus-ring" to="/projects">View My Work</Link>
            <Link className="button button-outline-light focus-ring" to="/contact">Contact Me</Link>
          </div>
        </div>

        <div className="image-feature">
          <img src={`${import.meta.env.BASE_URL}abdo-profil.png`} alt="Abdellah Ait Messaoud professional portrait" />
          <div className="profile-float">
            <strong>{person.name}</strong>
            <span>Decorative Finishing Supervisor</span>
            <span>Based in the UAE</span>
          </div>
        </div>
      </section>

      <section className="section-shell lux-section">
        <div className="stat-grid">
          {stats.map((stat) => <article key={stat} className="stat-card">{stat}</article>)}
        </div>
      </section>

      <section className="section-shell lux-section split-panel">
        <div>
          <p className="eyebrow">Expertise</p>
          <h2>Craft. Detail. Excellence.</h2>
        </div>
        <div className="expertise-grid">
          {expertise.map((item) => (
            <article key={item} className="glass-card">
              <span />
              <h3>{item}</h3>
              <p>
                {item === 'Decorative Painting'
                  ? 'High-end wall finishes, murals and premium painted surfaces.'
                  : item === 'Gypsum Works'
                  ? 'Gypsum decoration, false ceilings and interior detailing with clean handover.'
                  : item === 'Team Leadership'
                  ? 'Supervises site teams, coordinates trades and maintains execution discipline.'
                  : 'Ensures project specifications, finish quality and delivery standards.'}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
