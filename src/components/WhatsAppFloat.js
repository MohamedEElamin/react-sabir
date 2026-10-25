import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import { getWhatsAppLink } from "../data/siteInfo";
import "../styles/WhatsApp.css";

// Floating WhatsApp Click-to-Chat button shown on every page.
const WhatsAppFloat = () => {
  const { t } = useTranslation();
  const label = t("Chat with us on WhatsApp");
  const message = t(
    "Hello, I would like to inquire about your engineering services.",
  );

  return (
    <a
      href={getWhatsAppLink(message)}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
};

export default WhatsAppFloat;
