import { person } from '../data/portfolio.js';

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-shell">
        <p>© 2026 {person.name}. Decorative gypsum, mural painting and luxury interior finishes.</p>
        <div className="footer-links">
          <a className="focus-ring" href={person.linkedin}>
            LinkedIn
          </a>
          <a className="focus-ring" href={`mailto:${person.email}`}>
            Email
          </a>
          <a className="focus-ring" href="/" onClick={(event) => onNavigate(event, '/')}>
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
