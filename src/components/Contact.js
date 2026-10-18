// src/components/Map.js
import React from "react";
import Map from "../components/Map.js";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar");
  return (
    <>
      <Helmet>
        <title className="Myh2">{t("Contact Us")}</title>
        <meta
          name="description"
          content="Get in touch with Sabir Elsir Engineering Consultants. We are here to assist you with engineering consultancy, design, and supervision services across the UAE and Sudan."
        />
        <meta
          name="keywords"
          content="contact engineering consultants, contact Sabir Elsir, engineering company Sharjah, engineering consultants UAE"
        />
        <meta
          name="description"
          content=" مكتب صابر السر الاستشاري في إماره الشارقه الإمارات المجاز1 برج الرشيد1 مكتب 2023
          Contact us: sabir.elsir.eng.cons@gmail.com, Almajaz(1)-Balrasheed Tower(1), office 2203 Sharjah, +971552771408. "
        ></meta>
        <meta
          name="description"
          content="تواصل مع شركة صابر السر للاستشارات الهندسية. نحن جاهزون لمساعدتك في خدمات الاستشارات الهندسية، التصميم، والإشراف في الإمارات والسودان."
        />
        <meta
          name="keywords"
          content="اتصال الاستشارات الهندسية، شركة صابر السر، مهندسون في الشارقة، الاستشارات الهندسية الإمارات"
        />

        <link rel="canonical" href="https://www.sabirelsir.ae/Contact"></link>
        <meta name="language" content="AR, EN"></meta>
      </Helmet>

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
