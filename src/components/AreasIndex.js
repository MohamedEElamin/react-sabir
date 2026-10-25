import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import areas from "../data/areasData";
import "../styles/Areas.css";

function AreasIndex() {
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const isArabic = language === "ar";
  const title = isArabic ? "المناطق التي نخدمها" : "Areas We Serve";
  const description = isArabic
    ? "يخدم صابر السر للاستشارات الهندسية العملاء في الإمارات العربية المتحدة والسودان من مكاتبنا في الشارقة وعجمان والخرطوم."
    : "Sabir Elsir Engineering Consultants serves clients across the United Arab Emirates and Sudan from our offices in Sharjah, Ajman, and Khartoum.";
  const label = isArabic ? "استكشف المنطقة" : "Explore area";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    inLanguage: language,
    url: "https://www.sabirelsir.ae/areas",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: areas.map((area, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: area[language].name,
        url: `https://www.sabirelsir.ae${area.path}`,
      })),
    },
  };

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{`${title} | Sabir Elsir Engineering Consultants`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://www.sabirelsir.ae/areas" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="areas-page" dir={isArabic ? "rtl" : "ltr"}>
        <header className="areas-intro">
          <div className="areas-inner">
            <p className="areas-eyebrow">
              {isArabic ? "حضورنا الجغرافي" : "Where we work"}
            </p>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </header>

        <section className="areas-grid" aria-label={title}>
          {areas.map((area) => {
            const content = area[language];
            return (
              <article className="areas-card" key={area.slug}>
                <p className="areas-card-country">{content.country}</p>
                <h2>
                  <Link to={area.path}>{content.name}</Link>
                </h2>
                <p className="areas-card-blurb">{content.cardBlurb}</p>
                <Link className="areas-card-link" to={area.path}>
                  {label} <span aria-hidden="true">↗</span>
                </Link>
              </article>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default AreasIndex;
