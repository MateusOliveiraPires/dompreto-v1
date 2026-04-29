import Container from '../common/Container';
import SectionTag from '../common/SectionTag';
import { TRAJECTORY_ITEMS } from '../../constants/site';

function TrajectorySection() {
  return (
    <section id="trajetoria" className="section-block section-alt section-divider">
      <Container>
        <div className="section-intro fade-up">
          <SectionTag>Trajetória</SectionTag>
          <h2 className="section-title">Palcos, estrada e construção de nome.</h2>
          <p className="section-description">
            A trajetória de Dom Preto é feita de presença. Festivais, circuitos culturais,
            aparições em rádio e TV e uma caminhada autoral consistente ajudam a consolidar um
            artista que não depende de tendência para marcar espaço.
          </p>
        </div>

        <div className="card-grid three-columns">
          {TRAJECTORY_ITEMS.map((item, index) => (
            <article key={item.title} className={`content-card fade-up delay-${index + 1}`}>
              <div className="card-line" />
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TrajectorySection;
