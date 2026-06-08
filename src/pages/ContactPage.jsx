import { person } from '../data/portfolio.js';

const contactCards = [
  ['Phone', person.phone],
  ['Email', person.email],
  ['Location', person.location],
  ['Availability', person.availability],
];

export default function ContactPage() {
  return (
    <div className="page page-light">
      <section className="section-shell page-intro">
        <p className="eyebrow">Contact</p>
        <h1>Let's Work Together</h1>
        <p>Have a project in mind? Let's bring your vision to life with premium decorative finishing.</p>
      </section>

      <section className="section-shell contact-layout">
        <div className="contact-side">
          <div className="contact-card-main">
            <img src={person.profileImage} alt={`Professional portrait of ${person.name}`} />
            <div>
              <h2>{person.name}</h2>
              <p>{person.title}</p>
              <a className="button button-primary focus-ring" href={`mailto:${person.email}`}>Email Abdellah</a>
            </div>
          </div>

          <div className="contact-info-grid">
            {contactCards.map(([label, value]) => (
              <article key={label} className="info-card">
                <span>{label}</span>
                <strong>{value}</strong>
              </article>
            ))}
          </div>
        </div>

        <form className="contact-form">
          <label>Full Name<input type="text" name="name" /></label>
          <label>Email Address<input type="email" name="email" /></label>
          <label>Phone Number<input type="tel" name="phone" /></label>
          <label>Project Type<input type="text" name="projectType" /></label>
          <label>Message<textarea name="message" rows="5" /></label>
          <button className="button button-primary focus-ring" type="button">Send Message</button>
        </form>
      </section>
    </div>
  );
}
