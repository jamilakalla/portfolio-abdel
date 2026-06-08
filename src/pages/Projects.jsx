import { Link } from 'react-router-dom';
import { projectItems } from '../data/portfolio.js';

const projects = [
  ['Luxury Villa - Dubai', 'Decorative Painting', projectItems[0].image],
  ['Modern Apartment', 'Interiors', projectItems[1].image],
  ['Premium Residence', 'Gypsum Works', projectItems[2].image],
  ['Hotel Lobby', 'Decorative Painting', projectItems[3].image],
  ['Office Interior', 'Interiors', projectItems[0].image],
  ['Retail Space', 'Gypsum Works', projectItems[3].image],
];

export default function Projects() {
  return (
    <div className="page page-light">
      <section className="section-shell page-intro">
        <p className="eyebrow">Projects</p>
        <h1>Featured Projects</h1>
        <p>A selection of decorative finishing and interior projects shaped by craft, supervision and premium detail.</p>

        <div className="filter-row" aria-label="Project categories">
          {['All', 'Decorative Painting', 'Gypsum Works', 'Interiors'].map((filter) => (
            <button key={filter} type="button" className="filter-pill">{filter}</button>
          ))}
        </div>
      </section>

      <section className="section-shell project-gallery">
        {projects.map(([title, category, image]) => (
          <article key={title} className="gallery-card">
            <img src={image} alt={`${title} decorative interior project`} loading="lazy" />
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
