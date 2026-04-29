import { BOOKING_PHONE } from '../../constants/site';

function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${BOOKING_PHONE}?text=Olá,%20gostaria%20de%20falar%20sobre%20booking%20do%20Dom%20Preto.`}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="floating-whatsapp"
    >
      WhatsApp
    </a>
  );
}

export default FloatingWhatsApp;
