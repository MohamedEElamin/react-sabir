// Central contact/social details used across the site.
export const WHATSAPP_NUMBER = "971552771408"; // International format, no "+"

/**
 * Build a WhatsApp Click-to-Chat URL (https://faq.whatsapp.com/5913398998672934).
 * @param {string} message Optional prefilled message shown in the chat input.
 */
export const getWhatsAppLink = (message = "") =>
  `https://wa.me/${WHATSAPP_NUMBER}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
