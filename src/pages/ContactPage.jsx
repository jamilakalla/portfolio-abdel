import SectionHeading from '../components/SectionHeading.jsx';
import { directContacts, briefChecklist, person } from '../data/portfolio.js';

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

export default function ContactPage({ onNavigate }) {
  const mailtoLink = `mailto:abdellah.aitmessaoud01@gmail.com?subject=Project%20Brief&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20send%20you%20a%20project%20brief.%0D%0A%0D%0AProject%20Name:%0D%0AProject%20Type:%0D%0ABudget:%0D%0ADeadline:%0D%0ADetails:%0D%0A`;

  return (
    <>
      <section className="hero-section contact-hero">
        <div className="section-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Contact</p>
            <h1>Let's Work Together</h1>
            <p className="hero-lede">
              Share a clear brief for a premium finishing project.
            </p>
            <p className="hero-summary">
              Abdellah is based in {person.location}. Send the project type, location, plans, surfaces,
              references and desired timeline to prepare a relevant discussion.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ink text-white">
        <div className="section-shell">
          <div className="contact-heading">
            <p className="eyebrow">Contact</p>
            <h2>Share a clear brief for a premium finishing project.</h2>
            <p>
              Abdellah is based in {person.location}. Send the project type, location, plans, surfaces,
              references and desired timeline to prepare a relevant discussion.
            </p>
            <div className="button-row button-row-center">
              <a
                className="button button-primary focus-ring"
                href={mailtoLink}
              >
                Send Project Brief
              </a>
              <a className="button button-outline-light focus-ring" href={person.cvUrl}>
                Download CV
              </a>
            </div>
          </div>

          <div className="contact-grid">
            <div className="premium-card contact-card">
              <h3>Direct contact</h3>
              <div>
                {directContacts.map((contact) => (
                  <a key={contact.label} className="contact-row focus-ring" href={contact.href}>
                    <span>{contact.label}</span>
                    <span>{contact.value}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="brief-card">
              <h3>Brief checklist</h3>
              <BulletList items={briefChecklist} dark />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
