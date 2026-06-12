import { Link } from 'react-router-dom';
import { person } from '../data/portfolio.js';

const expertise = [
  'Decorative Painting',
  'Gypsum Works',
  'Team Leadership',
  'Quality Supervision',
];
export default function About() {
  return (
    <div className="page page-dark">
      <section className="lux-hero section-shell">
        <div className="lux-copy">
          <h1 className="section-title section-title-light">About My Work</h1>
          <p>
            I am Abdellah Ait Messaoud, a Senior Decorative Gypsum and Mural Painting Specialist with over 20 years of hands-on experience in luxury interior finishing.
          </p>
          <p>
            My work focuses on decorative and mural painting, textured wall finishes, premium surface treatments, gypsum decoration, false ceilings and detailed interior finishing works. I have worked on residential, hospitality and commercial projects across the UAE, Qatar, Saudi Arabia and Morocco.
          </p>
          <p>
            I combine practical site experience with strong attention to detail, quality control and the ability to follow architectural drawings and design specifications. I work closely with architects, interior designers, project managers and contractors to deliver clean, precise and high-quality finishes.
          </p>
          <p>
            Based in the UAE and available for senior opportunities in Dubai, I am committed to delivering professional finishing work with reliability, precision and respect for project deadlines.
          </p>
          <div className="button-row">
            <Link className="button button-primary focus-ring" to="/projects">View My Work</Link>
            <Link className="button button-primary focus-ring" to="/contact">Contact Me</Link>
          </div>
        </div>

        <div className="image-feature">
          <img src={`${import.meta.env.BASE_URL}abdo-profil.png`} alt="Abdellah Ait Messaoud professional portrait" />
          <div className="profile-float">
            <strong>{person.name}</strong>
            <span>Decorative Finishing Supervisor</span>
            <span>Based in the UAE</span>
          </div>
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
              <p>
                {item === 'Decorative Painting'
                  ? 'High-end wall finishes, murals and premium painted surfaces.'
                  : item === 'Gypsum Works'
                  ? 'Gypsum decoration, false ceilings and interior detailing with clean handover.'
                  : item === 'Team Leadership'
                  ? 'Supervises site teams, coordinates trades and maintains execution discipline.'
                  : 'Ensures project specifications, finish quality and delivery standards.'}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
