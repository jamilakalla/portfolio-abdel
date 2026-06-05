import SectionHeading from '../components/SectionHeading.jsx';
import { skillGroups } from '../data/portfolio.js';

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

export default function Skills({ onNavigate }) {
  return (
    <>
      <section className="hero-section skills-hero">
        <div className="section-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Skills</p>
            <h1>Core Expertise</h1>
            <p className="hero-lede">
              Decorative surfaces, gypsum work and premium site execution.
            </p>
            <p className="hero-summary">
              Technical mastery across decorative painting, mural finishes, textured surfaces, gypsum works,
              false ceilings and team supervision for luxury interiors.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-parchment">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Skills"
            title="Core skills across decorative surfaces, gypsum work and premium site execution."
          />
          <div className="card-grid card-grid-three">
            {skillGroups.map((group) => (
              <article key={group.title} className="premium-card skill-card">
                <h3>{group.title}</h3>
                <BulletList items={group.items} />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
