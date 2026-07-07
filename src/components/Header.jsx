import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems, person } from '../data/portfolio.js';

export default function Header({ currentPath }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  return (
    <header className="site-header">
      <div className="section-shell header-shell">
        <Link className="brand-link focus-ring" to="/" aria-label="Back to top" onClick={() => setMenuOpen(false)}>
          <img
            src={`${import.meta.env.BASE_URL}projects/abdo-logo.png`}
            alt="Abdellah Ait Messaoud logo"
            className="brand-logo"
          />
          <span className="brand-name">{person.name}</span>
        </Link>

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
            <NavLink
              key={item.href}
              className={({ isActive }) =>
                `nav-link focus-ring ${isActive ? 'is-active' : ''}`
              }
              to={item.href}
              end
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link className="header-cta focus-ring" to="/contact" onClick={() => setMenuOpen(false)}>
            Let's Work Together
          </Link>
        </nav>
      </div>
    </header>
  );
}
