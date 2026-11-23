import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "./SEO";
import "../styles/PageLayout.css";

function NotFound() {
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const content =
    language === "ar"
      ? {
          title: "الصفحة غير موجودة | صابر السر للاستشارات الهندسية",
          heading: "الصفحة غير موجودة",
          message: "تعذر العثور على الصفحة المطلوبة.",
          home: "العودة إلى الرئيسية",
        }
      : {
          title: "Page Not Found | Sabir Elsir Engineering Consultants",
          heading: "Page not found",
          message: "The requested page could not be found.",
          home: "Return to home",
        };

  return (
    <>
      <SEO
        title={content.title}
        description={content.message}
        language={language}
        robots="noindex, nofollow"
      />
      <section
        className="site-page-content"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <h1>{content.heading}</h1>
        <p>{content.message}</p>
        <Link to="/">{content.home}</Link>
      </section>
    </>
  );
}

export default NotFound;
