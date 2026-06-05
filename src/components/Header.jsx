import { useEffect, useState } from 'react';
import { navItems, person } from '../data/portfolio.js';

export default function Header({ currentPath, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  const handleClick = (event, href) => {
    onNavigate(event, href);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="section-shell header-shell">
        <a
          className="brand-link focus-ring"
          href="/"
          aria-label="Back to top"
          onClick={(event) => handleClick(event, '/')}
        >
          <span className="brand-mark">{person.initials}</span>
          <span className="brand-name">{person.name}</span>
        </a>

        <button
          className="menu-button focus-ring"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="menu-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav id="main-navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              className={`nav-link focus-ring ${
                currentPath === item.href ? 'is-active' : ''
              }`}
              href={item.href}
              onClick={(event) => handleClick(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
