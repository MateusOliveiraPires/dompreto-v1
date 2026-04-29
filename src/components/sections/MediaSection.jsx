import Container from '../common/Container';
import SectionTag from '../common/SectionTag';
import { MEDIA_ITEMS } from '../../constants/site';

function MediaSection() {
  return (
    <section id="midia" className="section-block">
      <Container>
        <div className="two-column-grid media-grid-layout">
          <div className="fade-up">
            <SectionTag>Mídia e clipping</SectionTag>
            <h2 className="section-title">Quando a música ecoa além do palco.</h2>
            <p className="section-description">
              A presença em rádio, televisão e espaços de destaque fortalece a autoridade artística
              de Dom Preto e amplia o alcance de um trabalho autoral construído com consistência.
            </p>
          </div>

          <div className="mini-card-grid fade-up delay-1">
            {MEDIA_ITEMS.map((item) => (
              <div key={item} className="mini-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MediaSection;
