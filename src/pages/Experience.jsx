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
            <h1>Professional Experience</h1>
            <p className="hero-lede">
              20+ years delivering decorative painting, gypsum finishing and supervising teams on premium
              interior projects.
            </p>
            <p className="hero-summary">
              Hands-on expertise in decorative finishes, team supervision and quality-led handovers for
              residential, hospitality and commercial interiors.
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

          <div className="highlight-grid" style={{ marginTop: '1.25rem' }}>
            <div>20+ Years Experience</div>
            <div>Team Supervision</div>
            <div>Decorative Finishing</div>
            <div>Quality Control</div>
          </div>

          <div className="timeline-list">
            {experienceItems.map((item) => (
              <article key={item.title} className="timeline-card timeline-card--career">
                <div className="timeline-meta">
                  <p className="timeline-number">{item.number}</p>
                  <p className="timeline-period">{item.period}</p>
                  <p className="timeline-location">{item.location}</p>
                </div>

                <div className="timeline-main">
                  <p className="timeline-eyebrow">{item.eyebrow}</p>
                  <h3>{item.title}</h3>

                  <div className="timeline-strengths">
                    <p className="timeline-description">{item.description}</p>
                  </div>

                  <div className="timeline-resp">
                    <p className="eyebrow" style={{ marginTop: '0.75rem' }}>Key responsibilities</p>
                    <BulletList items={item.bullets} dark />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
