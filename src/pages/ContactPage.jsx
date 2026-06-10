import { person } from '../data/portfolio.js';

const whatsappNumber = '971581632025';
const contactCards = [
  ['Phone', person.phone],
  ['Email', person.email],
  ['Location', person.location],
  ['Availability', person.availability],
];

export default function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const phone = formData.get('phone') || '';
    const projectType = formData.get('projectType') || '';
    const message = formData.get('message') || '';

    const whatsappMessage = `Hello Abdellah,
I visited your portfolio and would like to discuss a project or opportunity.

Name: ${name}
Email: ${email}
Phone: ${phone}
Project Type: ${projectType}

Message:
${message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

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
              <a
                className="button button-primary"
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=abdellah.aitmessaoud01@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Abdellah,%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20or%20opportunity.%0D%0A%0D%0ABest%20regards,"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
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

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Full Name<input type="text" name="name" /></label>
          <label>Email Address<input type="email" name="email" /></label>
          <label>Phone Number<input type="tel" name="phone" /></label>
          <label>Project Type<input type="text" name="projectType" /></label>
          <label>Message<textarea name="message" rows="5" /></label>
          <button className="button button-primary focus-ring contact-submit" type="submit">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
