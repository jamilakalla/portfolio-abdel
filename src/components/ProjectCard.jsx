export default function ProjectCard({ project }) {
  return (
    <article className="premium-card project-card">
      <div className="project-image-wrap">
        <img className="project-image" src={project.image} alt={project.alt} loading="lazy" />
      </div>
      <div className="project-content">
        <p className="card-kicker">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="card-meta">{project.meta}</p>
        <p className="project-description">{project.description}</p>
        <ul className="bullet-list">
          {project.bullets.map((bullet) => (
            <li key={bullet}>
              <span className="bullet-dot" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
