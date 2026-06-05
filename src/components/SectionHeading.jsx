export default function SectionHeading({ eyebrow, title, light = false, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={light ? 'section-title section-title-light' : 'section-title'}>{title}</h2>
      {children}
    </div>
  );
}
