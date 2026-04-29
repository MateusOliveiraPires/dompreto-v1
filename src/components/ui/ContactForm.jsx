import Button from '../common/Button';
import { useContactForm } from '../../hooks/useContactForm';

function ContactForm() {
  const { formData, errors, handleChange, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="contact-form fade-up delay-1" noValidate>
      <label className="input-group">
        <span>Nome</span>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Seu nome"
        />
        {errors.name && <small className="input-error">{errors.name}</small>}
      </label>

      <label className="input-group">
        <span>WhatsApp</span>
        <input
          name="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(31) 99999-9999"
        />
        {errors.phone && <small className="input-error">{errors.phone}</small>}
      </label>

      <label className="input-group">
        <span>Tipo de evento</span>
        <input
          name="eventType"
          type="text"
          value={formData.eventType}
          onChange={handleChange}
          placeholder="Festival, casa de show, evento cultural..."
        />
        {errors.eventType && <small className="input-error">{errors.eventType}</small>}
      </label>

      <label className="input-group">
        <span>Mensagem</span>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          placeholder="Conte um pouco sobre o evento, cidade, data e formato desejado."
        />
        {errors.message && <small className="input-error">{errors.message}</small>}
      </label>

      <Button type="submit" variant="primary" className="submit-button">
        Enviar pelo WhatsApp
      </Button>
    </form>
  );
}

export default ContactForm;
