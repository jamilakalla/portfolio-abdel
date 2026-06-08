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

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get('redirect');

    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [location.search, navigate]);

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

  return (
    <>
      <Header currentPath={currentPath} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
