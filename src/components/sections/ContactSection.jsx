import Container from '../common/Container';
import SectionTag from '../common/SectionTag';
import Button from '../common/Button';
import ContactForm from '../ui/ContactForm';
import { BOOKING_EMAIL, BOOKING_PHONE } from '../../constants/site';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

function ContactSection() {
  const whatsappLink = buildWhatsAppUrl(BOOKING_PHONE, {});

  return (
    <section id="contato" className="section-block">
      <Container>
        <div className="contact-wrapper">
          <div className="fade-up">
            <SectionTag>Contato / Booking</SectionTag>
            <h2 className="section-title">
              Para shows, eventos e parcerias, entre em contato.
            </h2>
            <p className="section-description">
              Se você quer levar Dom Preto para palco, festival, evento cultural, projeto especial
              ou ação de marca, este é o caminho mais direto.
            </p>

            <div className="contact-actions">
              <Button
                as="a"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                variant="whatsapp"
              >
                Falar no WhatsApp
              </Button>

              <Button as="a" href={`mailto:${BOOKING_EMAIL}`} variant="secondary">
                Enviar email
              </Button>
            </div>

            <div className="info-box">
              <p className="info-box-label">Direcionamento</p>
              <p className="info-box-text">
                Booking, festivais, eventos culturais, ações de marca e parcerias artísticas.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;
