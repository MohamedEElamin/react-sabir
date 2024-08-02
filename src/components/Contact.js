// src/components/Map.js
import React from "react";
import Map from "../components/Map.js";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title className="Myh2">{t("Contact Us")}</title>
        <meta
          name="description"
          content=" مكتب صابر السر الاستشاري في إماره الشارقه الإمارات المجاز1 برج الرشيد1 مكتب 2023
          Contact us: sabirelgabri@sabirelsir.ae, Almajaz(1)-Balrasheed Tower(1), office 2203 Sharjah, +971552771408. "
        ></meta>
        <link rel="canonical" href="https://www.sabirelsir.com/Contact"></link>
        <meta name="language" content="AR, EN"></meta>
      </Helmet>

      <div>
        <Map />
      </div>
    </>
  );
};

export default Contact;
