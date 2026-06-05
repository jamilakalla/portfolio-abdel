import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Experience from './pages/Experience.jsx';
import Projects from './pages/Projects.jsx';
import Services from './pages/Services.jsx';
import Education from './pages/Education.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { person } from './data/portfolio.js';

const getPath = () => {
  const normalized = window.location.pathname.replace(/\/+$/, '');
  return normalized || '/';
};

const scrollToCurrentHash = () => {
  if (!window.location.hash) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const target = document.querySelector(window.location.hash);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function App() {
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const updatePath = () => setPath(getPath());
    window.addEventListener('popstate', updatePath);
    window.addEventListener('hashchange', updatePath);

    return () => {
      window.removeEventListener('popstate', updatePath);
      window.removeEventListener('hashchange', updatePath);
    };
  }, []);

  useEffect(() => {
    document.title =
      path === '/projects'
        ? `Projects | ${person.name}`
        : path === '/about'
        ? `About | ${person.name}`
        : path === '/skills'
        ? `Skills | ${person.name}`
        : path === '/experience'
        ? `Experience | ${person.name}`
        : path === '/services'
        ? `Services | ${person.name}`
        : path === '/education'
        ? `Education | ${person.name}`
        : path === '/contact'
        ? `Contact | ${person.name}`
        : `${person.name} | Decorative Gypsum & Mural Painting Specialist`;

    window.requestAnimationFrame(scrollToCurrentHash);
  }, [path]);

  const navigate = useCallback((event, href) => {
    if (
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.endsWith('.pdf')
    ) {
      return;
    }

    event.preventDefault();
    const url = new URL(href, window.location.origin);
    window.history.pushState({}, '', `${url.pathname}${url.hash}`);
    setPath(getPath());
    window.requestAnimationFrame(scrollToCurrentHash);
  }, []);

  const renderPage = () => {
    switch (path) {
      case '/about':
        return <About onNavigate={navigate} />;
      case '/skills':
        return <Skills onNavigate={navigate} />;
      case '/experience':
        return <Experience onNavigate={navigate} />;
      case '/projects':
        return <Projects onNavigate={navigate} />;
      case '/services':
        return <Services onNavigate={navigate} />;
      case '/education':
        return <Education onNavigate={navigate} />;
      case '/contact':
        return <ContactPage onNavigate={navigate} />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  const page = renderPage();

  return (
    <>
      <Header currentPath={path} onNavigate={navigate} />
      <main>{page}</main>
      <Footer onNavigate={navigate} />
    </>
  );
}
