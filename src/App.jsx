import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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

const baseUrl = import.meta.env.BASE_URL || '/';
const basename = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

const normalizePath = (pathname) => {
  if (!pathname.startsWith(basename)) {
    return pathname || '/';
  }

  const relative = pathname.slice(basename.length) || '/';
  return relative === '' ? '/' : relative;
};

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = normalizePath(location.pathname);

  useEffect(() => {
    document.title =
      currentPath === '/projects'
        ? `Projects | ${person.name}`
        : currentPath === '/about'
        ? `About | ${person.name}`
        : currentPath === '/skills'
        ? `Skills | ${person.name}`
        : currentPath === '/experience'
        ? `Experience | ${person.name}`
        : currentPath === '/services'
        ? `Services | ${person.name}`
        : currentPath === '/education'
        ? `Education | ${person.name}`
        : currentPath === '/contact'
        ? `Contact | ${person.name}`
        : `${person.name} | Decorative Gypsum & Mural Painting Specialist`;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath]);

  const onNavigate = (event, href) => {
    if (
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.endsWith('.pdf')
    ) {
      return;
    }

    event.preventDefault();
    navigate(href);
  };

  return (
    <>
      <Header currentPath={currentPath} onNavigate={onNavigate} />
      <main>
        <Routes>
          <Route path="/" element={<Home onNavigate={onNavigate} />} />
          <Route path="/about" element={<About onNavigate={onNavigate} />} />
          <Route path="/skills" element={<Skills onNavigate={onNavigate} />} />
          <Route path="/experience" element={<Experience onNavigate={onNavigate} />} />
          <Route path="/projects" element={<Projects onNavigate={onNavigate} />} />
          <Route path="/services" element={<Services onNavigate={onNavigate} />} />
          <Route path="/education" element={<Education onNavigate={onNavigate} />} />
          <Route path="/contact" element={<ContactPage onNavigate={onNavigate} />} />
          <Route path="*" element={<Home onNavigate={onNavigate} />} />
        </Routes>
      </main>
      <Footer onNavigate={onNavigate} />
    </>
  );
}
