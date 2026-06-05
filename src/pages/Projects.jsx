import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';
import { projectItems } from '../data/portfolio.js';

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-ivory projects-page">
      <div className="section-shell">
        <div className="split-heading">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h1 className="section-title">Decorative painting project finishes.</h1>
          </div>
          <p>
            These photos are classified as decoration peinture: textured, patterned and premium painted
            finishes. Project names, clients and locations remain à compléter until they are verified.
          </p>
        </div>

        <div className="button-row projects-actions">
          <Link className="button button-primary focus-ring" to="/">
            Back to home
          </Link>
          <Link className="button button-outline-dark focus-ring" to="/contact">
            Contact
          </Link>
        </div>

        <div className="projects-grid">
          {projectItems.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
