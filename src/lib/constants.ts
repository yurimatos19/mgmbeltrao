export const WHATSAPP_NUMBER = "5581994858474";
export const WHATSAPP_MSG_DEFAULT = "Olá! Gostaria de saber mais sobre os serviços da MGM Beltrão.";
export const WHATSAPP_MSG_CTA = "Olá! Gostaria de agendar uma conversa para estruturar minha operação médica.";
export const EMAIL = "gabriela@mgmbeltrao.com.br";
export const CNPJ = "64.705.012/0001-02";
export const WHATSAPP_URL = (msg = WHATSAPP_MSG_DEFAULT) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
