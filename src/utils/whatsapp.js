export function buildWhatsAppMessage(data) {
  const lines = [
    'Olá, gostaria de falar sobre booking do Dom Preto.',
    `Nome: ${data.name || 'Não informado'}`,
    `WhatsApp: ${data.phone || 'Não informado'}`,
    `Tipo de evento: ${data.eventType || 'Não informado'}`,
    `Mensagem: ${data.message || 'Não informada'}`,
  ];

  return encodeURIComponent(lines.join('\n'));
}

export function buildWhatsAppUrl(phone, data) {
  return `https://wa.me/${phone}?text=${buildWhatsAppMessage(data)}`;
}
