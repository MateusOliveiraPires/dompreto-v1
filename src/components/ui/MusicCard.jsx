function MusicCard({ title, description, platform, href, animationClass = '' }) {
  return (
    <article className={`content-card ${animationClass}`.trim()}>
      <span className="card-label">Destaque</span>
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description}</p>
      <a href={href} target="_blank" rel="noreferrer" className="card-link">
        Ouvir no {platform} <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}

export default MusicCard;
