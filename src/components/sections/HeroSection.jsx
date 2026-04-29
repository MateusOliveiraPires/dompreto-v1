import Container from '../common/Container';
import SectionTag from '../common/SectionTag';
import Button from '../common/Button';
import { HERO_BADGES, SOCIAL_LINKS } from '../../constants/site';

function HeroSection() {
  return (
    <section id="top" className="hero-section section-divider">
      <div className="hero-background" />
      <div className="hero-overlay" />

      <Container className="hero-grid">
        <div className="fade-up">
          <SectionTag>Blues · R&B · Rock · MPB · Rap · Pop</SectionTag>

          <h1 className="hero-title">
            Som de rua, alma mineira e presença de palco.
          </h1>

          <p className="hero-description">
            Dom Preto é o encontro entre peso, suingue e verdade. Um artista de Belo Horizonte
            que transforma influências negras, brasileiras e urbanas em uma assinatura sonora viva,
            autoral e impossível de passar batido.
          </p>

          <div className="hero-actions">
            <Button as="a" href="#musicas" variant="primary">
              Ouvir músicas
            </Button>
            <Button as="a" href="#contato" variant="secondary">
              Contratar show
            </Button>
          </div>

          <div className="hero-badges">
            {HERO_BADGES.map((badge) => (
              <span key={badge} className="badge">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-card-wrapper fade-up delay-1">
          <div className="hero-card-glow" />
          <div className="hero-card">
            <div className="hero-card-inner">
              <div className="hero-card-top">
                <span className="mini-badge">Dom Preto</span>
                <span className="mini-label">Ao vivo / autoral</span>
              </div>

              <div>
                <p className="hero-card-name">Fábio Valadares</p>
                <h2 className="hero-card-title">Brasileiro, forte, autêntico.</h2>
                <p className="hero-card-text">
                  Um repertório que atravessa gêneros sem perder verdade, raiz e assinatura.
                  Música feita para tocar no fone, mas nascer inteira no palco.
                </p>
              </div>

              <div className="social-grid">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-card"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;