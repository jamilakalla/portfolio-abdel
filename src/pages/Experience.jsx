const roles = [
  ['Senior Finishing Supervisor', 'Leads decorative painting, gypsum finishing and final quality control for premium interior environments.'],
  ['Finishing Supervisor', 'Coordinates site teams, material flow and daily finishing standards across complex interiors.'],
  ['Site Supervisor', 'Supports delivery schedules, safety awareness and clean handovers with project managers and contractors.'],
  ['Finishing Specialist', 'Executes decorative textures, surface preparation and gypsum details with hands-on technical precision.'],
];

const stats = ['20+ Years Experience', '100+ Projects Completed', '10+ Teams Led'];

export default function Experience() {
  return (
    <div className="page page-dark">
      <section className="section-shell page-intro page-intro-dark">
        <h1>Work Experience</h1>
        <p>20+ years of hands-on experience in high-end interiors, decorative painting, gypsum works and site supervision.</p>
      </section>

      <section className="section-shell lux-section">
        <div className="premium-timeline">
          {roles.map(([title, description], index) => (
            <article key={title} className="timeline-item">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell lux-section">
        <div className="stat-grid stat-grid-three">
          {stats.map((stat) => <article key={stat} className="stat-card">{stat}</article>)}
        </div>
      </section>
    </div>
  );
}
