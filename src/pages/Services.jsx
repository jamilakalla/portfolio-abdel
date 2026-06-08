const services = [
  ['Decorative Painting', 'Elegant painted finishes, feature walls and bespoke surface treatments for luxury interiors.'],
  ['Gypsum Works', 'Gypsum details, ceilings, partitions and refined finishing for architectural interiors.'],
  ['Surface Finishes', 'Preparation, repair and premium final surfaces with consistent texture and tone.'],
  ['Project Supervision', 'Team coordination, quality checks and site delivery support from start to handover.'],
  ['Renovation & Upgrades', 'Interior upgrades that refresh existing spaces with clean, premium finishing standards.'],
  ['Consultation', 'Practical finishing guidance for contractors, owners and interior project teams.'],
];

export default function Services() {
  return (
    <div className="page page-light">
      <section className="section-shell page-intro">
        <p className="eyebrow">Services</p>
        <h1>What I Offer</h1>
        <p>High-quality finishing services for premium interiors, delivered with discipline, detail and care.</p>
      </section>

      <section className="section-shell service-grid">
        {services.map(([title, description], index) => (
          <article key={title} className="service-card">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </section>

      <section className="section-shell lux-section">
        <div className="statement-card">
          <p>"Quality craftsmanship. On-time delivery. Client satisfaction. That's my commitment."</p>
        </div>
      </section>
    </div>
  );
}
