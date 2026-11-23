import React from "react";
import Link from "./LocalizedLink";
import { useTranslation } from "react-i18next";
import areas from "../data/areasData";
import SEO from "./SEO";
import "../styles/Areas.css";

function AreasIndex() {
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const isArabic = language === "ar";
  const title = isArabic
    ? "خدمات الاستشارات الهندسية في الإمارات والسودان"
    : "Engineering Consultancy Services Across the UAE and Sudan";
  const metaTitle = isArabic
    ? "استشارات هندسية في الإمارات والسودان | صابر السر"
    : "Engineering Consultancy Across the UAE & Sudan | Sabir Elsir";
  const description = isArabic
    ? "تقدم شركة صابر السر للاستشارات الهندسية خدمات الاستشارات الهندسية والتصميم المعماري والخدمات المتعلقة بالمشاريع في الإمارات والسودان."
    : "Sabir Elsir Engineering Consultants provides engineering consultancy, architectural design, and project-related services in the UAE and Sudan.";
  const introParagraphs = isArabic
    ? [
        "تقدم شركة صابر السر للاستشارات الهندسية خدمات الاستشارات الهندسية والتصميم المعماري والخدمات المتعلقة بالمشاريع في جميع أنحاء دولة الإمارات العربية المتحدة والسودان. وبخبرة تمتد منذ عام 2001، نخدم العملاء في المشاريع السكنية والتجارية والصناعية في مواقع رئيسية، منها الشارقة وعجمان والخرطوم.",
        "في الإمارات، نقدم خدمات الاستشارات الهندسية في الشارقة وعجمان والمناطق المحيطة، وندعم المشاريع في التصميم المعماري والهندسة المدنية والإنشائية والتصميم الداخلي والإشراف الهندسي وإدارة المشاريع.",
        "وفي السودان، نقدم خدماتنا الاستشارية للعملاء في الخرطوم والمناطق المحيطة، وتشمل الاستشارات المعمارية والهندسية والتخطيط العمراني وتقييم الأصول.",
        "سواء كنتم تخططون لتطوير جديد، أو تعديل عقار قائم، أو تبحثون عن استشارات هندسية مهنية، تقدم شركة صابر السر للاستشارات الهندسية حلولاً تراعي موقع مشروعكم ومتطلباته.",
      ]
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
              {isArabic ? "أين نعمل" : "Where we work"}
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
