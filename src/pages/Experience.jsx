import SectionHeading from '../components/SectionHeading.jsx';
import { experienceItems } from '../data/portfolio.js';

function BulletList({ items, dark = false }) {
  return (
    <ul className={`bullet-list ${dark ? 'bullet-list-dark' : ''}`}>
      {items.map((item) => (
        <li key={item}>
          <span className="bullet-dot" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Experience({ onNavigate }) {
  return (
    <>
      <section className="hero-section experience-hero">
        <div className="section-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Experience</p>
            <h1>Professional Track Record</h1>
            <p className="hero-lede">
              A long track record in decorative painting and gypsum finishing.
            </p>
            <p className="hero-summary">
              Over 20 years of professional experience in decorative painting, gypsum works and team supervision
              for premium interior projects across the UAE and international markets.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ink text-white">
        <div className="section-shell">
          <div className="split-heading">
            <SectionHeading
              eyebrow="Experience"
              title="A long track record in decorative painting and gypsum finishing."
              light
            />
            <p>
              The CV confirms more than 20 years of professional experience. Employers, exact dates and project
              references not visible in the CV are marked à compléter.
            </p>
          </div>

          <div className="timeline-list">
            {experienceItems.map((item) => (
              <article key={item.title} className="timeline-card">
                <div>
                  <p className="timeline-number">{item.number}</p>
                  <p className="timeline-period">{item.period}</p>
                  <p className="timeline-location">{item.location}</p>
                </div>
                <div>
                  <p className="timeline-eyebrow">{item.eyebrow}</p>
                  <h3>{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                  <BulletList items={item.bullets} dark />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
