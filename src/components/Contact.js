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
    : "Contact Sabir Elsir Engineering Consultants";
  const description = isArabic
    ? "تواصل مع صابر السر للاستشارات الهندسية للاستفسار عن خدمات التصميم والاستشارات والإشراف الهندسي في الإمارات والسودان."
    : "Contact us for architectural and interior design, 3D visualization, engineering consultancy, and project supervision in Sharjah, Ajman, UAE, and Sudan.";
  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical="https://www.sabirelsir.ae/contact"
        language={language}
        pageType="ContactPage"
      />

      <PageIntro
        eyebrow={isArabic ? "تواصل معنا" : "Contact Us"}
        title={
          isArabic
            ? "تواصل مع شركة صابر السر للاستشارات الهندسية"
            : "Contact Sabir Elsir Engineering Consultants"
        }
        description={
          isArabic
            ? "تواصل معنا للاستفسار عن خدمات التصميم والاستشارات والإشراف في الإمارات والسودان."
            : "Get in touch with our engineering consultancy team for professional architectural design, interior design, engineering consultancy, 3D design, and project supervision services across Sharjah, Ajman, the UAE, and Sudan."
        }
      />
      <div className="contact-page-shell">
        <Map />
      </div>
    </>
  );
};

export default Contact;
