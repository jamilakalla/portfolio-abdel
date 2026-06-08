import { person } from '../data/portfolio.js';

const skills = [
  ['Decorative Painting', 95],
  ['Gypsum Works', 92],
  ['Surface Preparation', 90],
  ['Project Supervision', 96],
  ['Quality Control', 94],
  ['Team Management', 90],
];

export default function Skills() {
  return (
    <div className="page page-light">
      <section className="section-shell page-intro">
        <p className="eyebrow">Skills</p>
        <h1>Skills & Expertise</h1>
        <p>Decorative finishing, gypsum works and site supervision delivered with precision and premium standards.</p>
      </section>

      <section className="section-shell skills-layout">
        <div className="skill-stack">
          {skills.map(([label, value]) => (
            <article key={label} className="skill-meter-card">
              <div>
                <h3>{label}</h3>
                <strong>{value}%</strong>
              </div>
              <span className={`skill-track level-${value}`}><span /></span>
            </article>
          ))}
        </div>

        <aside className="quote-image-card">
          <img src={person.heroImage} alt="Premium interior finish with warm lighting" />
          <div>
            <p>"Detail is not a detail. It makes the design."</p>
            <span>Premium finishing philosophy</span>
          </div>
        </aside>
      </section>
    </div>
  );
}
