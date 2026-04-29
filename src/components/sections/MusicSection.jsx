import Container from '../common/Container';
import SectionTag from '../common/SectionTag';
import Button from '../common/Button';
import MusicCard from '../ui/MusicCard';
import { TRACKS } from '../../constants/site';

function MusicSection() {
  return (
    <section id="musicas" className="section-block section-alt section-divider">
      <Container>
        <div className="section-header-actions fade-up">
          <div>
            <SectionTag>Músicas autorais</SectionTag>
            <h2 className="section-title">Canções com assinatura própria.</h2>
            <p className="section-description section-max-width">
              Mais de 200 composições formam um repertório onde melodia, peso, groove e palavra
              convivem sem pedir licença. Aqui, cada faixa carrega identidade — não fórmula.
            </p>
          </div>

          <div className="platform-actions">
            <Button
              as="a"
              href="https://open.spotify.com/"
              target="_blank"
              rel="noreferrer"
              variant="light"
            >
              Spotify
            </Button>

            <Button
              as="a"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              variant="secondary"
            >
              YouTube
            </Button>
          </div>
        </div>

        <div className="card-grid three-columns">
          {TRACKS.map((track, index) => (
            <MusicCard
              key={track.title}
              {...track}
              animationClass={`fade-up delay-${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default MusicSection;
