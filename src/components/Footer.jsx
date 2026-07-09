import { person } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-shell">
        <p>© 2026 {person.name}. All Rights Reserved.</p>
        <div className="footer-links">
          <a className="focus-ring" href={person.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="focus-ring" href="https://www.instagram.com/abdellahdecorativepaint/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a className="focus-ring" href="FACEBOOK_PAGE_LINK_HERE" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a className="focus-ring footer-back-top" href="#top">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
