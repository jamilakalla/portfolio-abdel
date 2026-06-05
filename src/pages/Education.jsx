import SectionHeading from '../components/SectionHeading.jsx';
import { educationItems, languages } from '../data/portfolio.js';

export default function Education({ onNavigate }) {
  return (
    <>
      <section className="hero-section education-hero">
        <div className="section-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Education</p>
            <h1>Learning & Development</h1>
            <p className="hero-lede">
              Education, professional training and practical credentials.
            </p>
            <p className="hero-summary">
              Continuous professional development through formal training, certifications and hands-on experience
              in decorative painting, gypsum works and site management.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="section-shell education-layout">
          <div>
            <SectionHeading
              eyebrow="Education"
              title="Education, professional training and practical credentials."
            />
            <div className="education-list">
              {educationItems.map((item) => (
                <article key={item.title} className="education-card">
                  <div className="education-card-head">
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.meta}</p>
                    </div>
                    <span>{item.year}</span>
                  </div>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <aside className="premium-card language-card">
            <p className="eyebrow">Languages</p>
            <div>
              {languages.map((language) => (
                <div key={language.language} className="language-row">
                  <span>{language.language}</span>
                  <span>{language.level}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
