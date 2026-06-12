import { Link } from 'react-router-dom';
import { projectItems } from '../data/portfolio.js';

const projects = [
  ['Luxury Villa - Dubai', 'Decorative Painting', projectItems[0].image],
  ['Modern Apartment', 'Interiors', projectItems[1].image],
  ['Premium Residence', 'Gypsum Works', projectItems[2].image],
  ['Hotel Lobby', 'Decorative Painting', projectItems[3].image],
  ['Office Interior', 'Interiors', projectItems[0].image],
  ['Retail Space', 'Gypsum Works', projectItems[3].image],
  ['Decorative Interior Finish', 'Interiors', projectItems[4].image],
  ['Gypsum & Ceiling Detail', 'Gypsum Works', projectItems[5].image],
  ['Premium Wall Finish', 'Decorative Painting', projectItems[6].image],
];

export default function Projects() {
  return (
    <div className="page page-light">
      <section className="section-shell page-intro">
        <h1>Featured Projects</h1>
        
        <p className="projects-heading-copy">A selection of decorative finishing and interior projects shaped by craft, supervision and premium detail.</p>

        <div className="filter-row" aria-label="Project categories">
          {['All', 'Decorative Painting', 'Gypsum Works', 'Interiors'].map((filter) => (
            <button key={filter} type="button" className="filter-pill">{filter}</button>
          ))}
          <a
            className="button button-primary focus-ring"
            href="https://drive.google.com/drive/folders/PASTE_YOUR_DRIVE_FOLDER_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
          >
            View More Projects
          </a>
        </div>
      </section>

      <section className="section-shell project-gallery">
        {projects.map(([title, category, image]) => (
          <article key={title} className="gallery-card">
            <div
              className="project-image-wrap"
              role="button"
              tabIndex={0}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                window.open(image, '_blank', 'noopener,noreferrer');
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  event.stopPropagation();
                  window.open(image, '_blank', 'noopener,noreferrer');
                }
              }}
              aria-label={`Open full image for ${title}`}
            >
              <img
                className="project-image"
                src={image}
                alt={`${title} decorative interior project`}
                loading="lazy"
              />
            </div>
            <div>
              <span>{category}</span>
              <h2>{title}</h2>
              <Link className="card-link focus-ring" to="/contact">Discuss similar work</Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
