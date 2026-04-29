import Container from '../common/Container';
import SectionTag from '../common/SectionTag';

function AboutSection() {
  return (
    <section id="sobre" className="section-block">
      <Container>
        <div className="two-column-grid">
          <div className="fade-up">
            <SectionTag>Sobre</SectionTag>
            <h2 className="section-title">Um artista que canta com o corpo inteiro.</h2>
          </div>

          <div className="section-text-group fade-up delay-1">
            <p>
              Dom Preto nasce da mistura que sempre moveu a música brasileira: balanço,
              improviso, lirismo, rua e coragem. Belo Horizonte não entra aqui só como cenário —
              entra como pulsação, sotaque e matéria-prima.
            </p>
            <p>
              Sua construção musical atravessa blues, R&B, rock, MPB, rap e pop sem soar colada
              ou artificial. Tudo conversa porque vem da mesma fonte: a vontade de dizer algo real,
              com groove, peso e identidade.
            </p>
            <p>
              Influenciado por Tim Maia, Jorge Ben, Marku Ribas, Led Zeppelin e James Brown,
              Dom Preto cria uma linguagem própria. O resultado é um som brasileiro, preto, vivo
              e contemporâneo — feito para tocar no fone, mas principalmente para incendiar o palco.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
