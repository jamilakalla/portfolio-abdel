import { Link } from 'react-router-dom';
import { person } from '../data/portfolio.js';

const stats = ['20+ Years of Experience', 'Teams Supervised', 'Premium Interiors', 'Decorative Finishes'];
const expertise = ['Decorative Painting', 'Gypsum Works', 'Quality Supervision', 'Team Leadership'];

export default function About() {
  return (
    <div className="page page-dark">
      <section className="lux-hero section-shell">
        <div className="lux-copy">
          <p className="eyebrow">About</p>
          <h1>Who is Abdellah?</h1>
          <p>
            Abdellah Ait Messaoud is a senior decorative painting and gypsum finishing supervisor with
            more than 20 years of hands-on experience in refined interior finishing.
          </p>
          <p>
            His work combines craft, site discipline and team leadership for premium residential,
            commercial and hospitality interiors.
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
            <span>Based in {person.location}</span>
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
              <p>Premium execution with disciplined site standards and a refined eye for detail.</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
