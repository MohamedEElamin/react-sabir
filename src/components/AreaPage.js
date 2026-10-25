import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import areas from "../data/areasData";
import "../styles/Areas.css";

function AreaPage({ slug }) {
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const isArabic = language === "ar";
  const area = areas.find((item) => item.slug === slug);

  if (!area) {
    return null;
  }

  const content = area[language];
  const areasLabel = isArabic ? "المناطق التي نخدمها" : "Areas We Serve";
  const canonical = `https://www.sabirelsir.ae${area.path}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: isArabic ? "الرئيسية" : "Home",
            item: "https://www.sabirelsir.ae/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: areasLabel,
            item: "https://www.sabirelsir.ae/areas",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: content.name,
            item: canonical,
          },
        ],
      },
      {
        "@type": "Service",
        name: `Sabir Elsir Engineering Consultants – ${content.name}`,
        provider: {
          "@type": "Organization",
          name: "Sabir Elsir Engineering Consultants",
          url: "https://www.sabirelsir.ae/",
        },
        areaServed: [content.name, content.country],
        description: content.metaDescription,
        url: canonical,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={content.heading} />
        <meta property="og:description" content={content.metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="area-page" dir={isArabic ? "rtl" : "ltr"}>
        <header className="area-hero">
          <div className="areas-inner">
            <nav className="area-breadcrumb" aria-label="Breadcrumb">
              <Link to="/areas">{areasLabel}</Link>
              <span aria-hidden="true"> / </span>
              <span>{content.name}</span>
            </nav>
            <p className="areas-eyebrow">{content.eyebrow}</p>
            <h1>{content.heading}</h1>
            <p className="area-summary">{content.summary}</p>
          </div>
        </header>

        <div className="areas-inner area-body">
          <section aria-labelledby="area-services">
            <h2 id="area-services">{content.servicesTitle}</h2>
            <ul className="area-services-list">
              {content.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="area-local">
            <h2 id="area-local">{content.localTitle}</h2>
            <ul className="area-points-list">
              {content.localPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          <section className="area-office" aria-labelledby="area-office">
            <div className="area-office-copy">
              <h2 id="area-office">{content.officeTitle}</h2>
              <p>{content.officeAddress}</p>
              <p className="area-cta-text">{content.ctaText}</p>
              <Link className="area-cta-link" to="/contact">
                {content.ctaLink} <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="area-office-map">
              <iframe
                src={area.mapSrc}
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={content.mapTitle}
              ></iframe>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default AreaPage;
