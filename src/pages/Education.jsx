const educationItems = [
  'Technical Diploma in Building Finishing',
  'Advanced Gypsum Systems Training',
  'Site Management Certification',
  'Leadership & Supervision Course',
];

export default function Education() {
  return (
    <div className="page page-dark">
      <section className="section-shell page-intro page-intro-dark">
        <p className="eyebrow">Education</p>
        <h1>Education & Certifications</h1>
        <p>Continuous learning and professional development for stronger site leadership and better finishing results.</p>
      </section>

      <section className="section-shell education-layout">
        <div className="premium-timeline">
          {educationItems.map((item, index) => (
            <article key={item} className="timeline-item">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h2>{item}</h2>
                <p>Focused professional development supporting decorative finishing, gypsum systems and team supervision.</p>
              </div>
            </article>
          ))}
        </div>

        <aside className="certificate-card">
          <p className="eyebrow">Certification</p>
          <h2>Premium Finishing Practice</h2>
          <p>Craft knowledge, supervision standards and continuous development for high-end interiors.</p>
          <div className="seal">AA</div>
        </aside>
      </section>

      <section className="section-shell lux-section">
        <div className="quote-card">
          <p>"Continuous learning is the key to delivering outstanding results."</p>
        </div>
      </section>
    </div>
  );
}
