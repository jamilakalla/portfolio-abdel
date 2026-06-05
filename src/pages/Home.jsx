import SectionHeading from '../components/SectionHeading.jsx';
import {
  aboutHighlights,
  briefChecklist,
  directContacts,
  educationItems,
  experienceItems,
  heroStats,
  languages,
  person,
  serviceItems,
  skillGroups,
} from '../data/portfolio.js';

const baseUrl = import.meta.env.BASE_URL || '/';

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

function TagList({ tags }) {
  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

export default function Home({ onNavigate }) {
  return (
    <>
      <section id="top" className="hero-section">
        <img
          className="hero-background"
          src={person.heroImage}
          alt="Luxury interior with decorative wall finishes, gypsum details and architectural lighting"
        />
        <div className="hero-overlay" />

        <div className="section-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Open to opportunities with leading construction and interior companies</p>
            <p className="hero-role">{person.title}</p>
            <h1>{person.name}</h1>
            <div className="mobile-hero-portrait" aria-label={`Professional portrait of ${person.name}`}>
              <div className="mobile-portrait-frame">
                <img src={person.profileImage} alt={`Professional portrait of ${person.name}`} />
              </div>
              <div className="mobile-role-card">
                <p>Seeking senior roles</p>
                <span>Finishing supervisor, painting supervisor or gypsum team supervisor.</span>
              </div>
            </div>
            <p className="hero-lede">
              Senior finishing supervisor for decorative painting, gypsum and premium interiors.
            </p>
            <p className="hero-summary">
              Abdellah Ait Messaoud brings 20+ years of hands-on finishing experience and supervises teams
              across painting, decorative surfaces, gypsum works and high-end interior delivery.
            </p>
            <div className="button-row">
              <a
                className="button button-primary focus-ring"
                href={`${baseUrl}contact`}
                onClick={(event) => onNavigate(event, '/contact')}
              >
                Contact for opportunities
              </a>
              <a
                className="button button-outline-light focus-ring"
                href="mailto:abdellah.aitmessaoud01@gmail.com?subject=Project%20Brief&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20send%20you%20a%20project%20brief.%0D%0A%0D%0AProject%20Name:%0D%0AProject%20Type:%0D%0ABudget:%0D%0ADeadline:%0D%0ADetails:%0D%0A"
              >
                Send Project Brief
              </a>
              <a className="button button-outline-light focus-ring" href={person.cvUrl}>
                View CV
              </a>
            </div>
          </div>

          <div className="hero-portrait" aria-label={`Professional portrait of ${person.name}`}>
            <div className="portrait-frame">
              <img src={person.profileImage} alt={`Professional portrait of ${person.name}`} />
            </div>
            <div className="role-card">
              <p>Seeking senior roles</p>
              <span>Finishing supervisor, painting supervisor or gypsum team supervisor.</span>
            </div>
          </div>
        </div>

        <div className="section-shell hero-stats-shell">
          <div className="hero-stats">
            {heroStats.map((stat) => (
              <div key={stat.label} className="stat-cell">
                <p>{stat.value}</p>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-padding bg-ivory">
        <div className="section-shell two-column">
          <div>
            <SectionHeading
              eyebrow="About"
              title="A practical finishing supervisor for serious site environments."
            />
            <div className="small-stack">
              <span>{person.location}</span>
              <span>Availability: {person.availability}</span>
            </div>
          </div>
          <div>
            <p className="lead-text">
              Senior finishing professional with over 20 years of experience in decorative painting, mural
              finishes, gypsum works and premium interior delivery.
            </p>
            <div className="body-stack">
              <p>
                He combines hands-on technical execution with site supervision, coordinating painting and
                gypsum teams to deliver clean, consistent and design-aligned finishes.
              </p>
              <p>
                This portfolio is designed for serious employment opportunities with leading construction,
                fit-out and interior companies, not as a long CV copy.
              </p>
              <p>Company names, selected project names and verified references remain à compléter from official project records.</p>
            </div>
            <div className="highlight-grid">
              {aboutHighlights.map((highlight) => (
                <div key={highlight}>{highlight}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-padding bg-parchment">
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

      <section id="experience" className="section-padding bg-ink text-white">
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

          <div className="timeline-list">
            {experienceItems.map((item) => (
              <article key={item.title} className="timeline-card">
                <div>
                  <p className="timeline-number">{item.number}</p>
                  <p className="timeline-period">{item.period}</p>
                  <p className="timeline-location">{item.location}</p>
                </div>
                <div>
                  <p className="timeline-eyebrow">{item.eyebrow}</p>
                  <h3>{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                  <BulletList items={item.bullets} dark />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-padding bg-parchment">
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

      <section id="education" className="section-padding bg-ivory">
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

      <section id="contact" className="section-padding bg-ink text-white">
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
                href={`mailto:${person.email}?subject=Project brief for Abdellah Ait Messaoud`}
              >
                Send project brief
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
