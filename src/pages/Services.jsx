import SectionHeading from '../components/SectionHeading.jsx';
import { serviceItems } from '../data/portfolio.js';

function TagList({ tags }) {
  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

export default function Services({ onNavigate }) {
  return (
    <>
      <section className="hero-section services-hero">
        <div className="section-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Services</p>
            <h1>What I Offer</h1>
            <p className="hero-lede">
              Services for luxury residential, hospitality and premium commercial interiors.
            </p>
            <p className="hero-summary">
              Specialized services in decorative painting, mural effects, gypsum finishing, textured surfaces
              and premium interior delivery for high-end projects.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-parchment">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Services"
            title="Services for luxury residential, hospitality and premium commercial interiors."
          />
          <div className="card-grid card-grid-two service-grid">
            {serviceItems.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <TagList tags={service.tags} />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
