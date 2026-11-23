import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import areas from "../data/areasData";
import SEO from "./SEO";
import "../styles/Areas.css";

function AreasIndex() {
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const isArabic = language === "ar";
  const title = isArabic
    ? "المناطق التي نخدمها"
    : "Engineering Consultancy Services Across the UAE and Sudan";
  const metaTitle = isArabic
    ? `${title} | Sabir Elsir Engineering Consultants`
    : "Engineering Consultancy Across the UAE & Sudan | Sabir Elsir";
  const description = isArabic
    ? "يخدم صابر السر للاستشارات الهندسية العملاء في الإمارات والسودان، بما في ذلك الشارقة وعجمان والخرطوم."
    : "Sabir Elsir Engineering Consultants provides engineering consultancy, architectural design, and project-related services in the UAE and Sudan.";
  const introParagraphs = isArabic
    ? [description]
    : [
        "Sabir Elsir Engineering Consultants provides professional engineering consultancy, architectural design, and project-related services across the United Arab Emirates and Sudan. With experience dating back to 2001, we serve residential, commercial, and industrial clients in key locations, including Sharjah, Ajman, and Khartoum.",
        "In the UAE, we provide engineering consultancy services in Sharjah, Ajman, and surrounding areas, supporting projects with architectural design, civil and structural engineering, interior design, engineering supervision, and project management.",
        "In Sudan, our consultancy serves clients in Khartoum and surrounding areas, offering architectural and engineering consultancy, urban planning, and asset valuation services.",
        "Whether you are planning a new development, modifying an existing property, or seeking professional engineering consultancy, Sabir Elsir Engineering Consultants provides solutions tailored to your project's location and requirements.",
      ];
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
      <SEO
        title={metaTitle}
        description={description}
        canonical="https://www.sabirelsir.ae/areas"
        language={language}
        structuredData={structuredData}
      />

      <div className="areas-page" dir={isArabic ? "rtl" : "ltr"}>
        <header className="areas-intro">
          <div className="areas-inner">
            <p className="areas-eyebrow">
              {isArabic ? "حضورنا الجغرافي" : "Where we work"}
            </p>
            <h1>{title}</h1>
            {introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
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
                  {`${label} `}
                  <span aria-hidden="true">↗</span>
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
