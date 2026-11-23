// src/components/Map.js
import React from "react";
import Map from "../components/Map.js";
import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import SEO from "./SEO";

const Contact = () => {
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const isArabic = language === "ar";
  const title = isArabic
    ? "تواصل معنا | صابر السر للاستشارات الهندسية"
    : "Contact | Sabir Elsir Engineering Consultants";
  const description = isArabic
    ? "تواصل مع صابر السر للاستشارات الهندسية للاستفسار عن خدمات التصميم والاستشارات والإشراف الهندسي في الإمارات والسودان."
    : "Contact Sabir Elsir Engineering Consultants about engineering design, consultancy, and supervision services in the UAE and Sudan.";
  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical="https://www.sabirelsir.ae/contact"
        language={language}
      />

      <PageIntro
        eyebrow={isArabic ? "تواصل معنا" : "Contact"}
        title={
          isArabic ? "تواصل مع فريقنا الهندسي" : "Contact our engineering team"
        }
        description={
          isArabic
            ? "تواصل معنا للاستفسار عن خدمات التصميم والاستشارات والإشراف في الإمارات والسودان."
            : "Reach out about engineering design, consultancy, and supervision services in the UAE and Sudan."
        }
      />
      <div className="contact-page-shell">
        <Map />
      </div>
    </>
  );
};

export default Contact;
