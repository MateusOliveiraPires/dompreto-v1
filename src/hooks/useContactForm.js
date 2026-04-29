import { useMemo, useState } from 'react';
import { BOOKING_PHONE } from '../constants/site';
import { buildWhatsAppUrl } from '../utils/whatsapp';

const INITIAL_FORM_STATE = {
  name: '',
  phone: '',
  eventType: '',
  message: '',
};

const INITIAL_ERRORS = {
  name: '',
  phone: '',
  eventType: '',
  message: '',
};

function validateField(name, value) {
  const trimmedValue = value.trim();

  switch (name) {
    case 'name':
      if (!trimmedValue) return 'Informe seu nome.';
      if (trimmedValue.length < 2) return 'Digite um nome válido.';
      return '';

    case 'phone':
      if (!trimmedValue) return 'Informe seu WhatsApp.';
      if (trimmedValue.replace(/\D/g, '').length < 10) return 'Digite um número válido.';
      return '';

    case 'eventType':
      if (!trimmedValue) return 'Informe o tipo de evento.';
      return '';

    case 'message':
      if (!trimmedValue) return 'Escreva uma mensagem.';
      if (trimmedValue.length < 10) return 'Detalhe um pouco mais a sua mensagem.';
      return '';

    default:
      return '';
  }
}

export function useContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState(INITIAL_ERRORS);

  const whatsappUrl = useMemo(() => {
    return buildWhatsAppUrl(BOOKING_PHONE, formData);
  }, [formData]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentState) => ({
      ...currentState,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: validateField(name, value),
    }));
  }

  function validateForm() {
    const nextErrors = {
      name: validateField('name', formData.name),
      phone: validateField('phone', formData.phone),
      eventType: validateField('eventType', formData.eventType),
      message: validateField('message', formData.message),
    };

    setErrors(nextErrors);

    return Object.values(nextErrors).every((error) => !error);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) return;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
}
