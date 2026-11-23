import React from "react";
import Link from "./LocalizedLink";
import { useTranslation } from "react-i18next";
import areas from "../data/areasData";
import SEO from "./SEO";
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
          "@id": "https://www.sabirelsir.ae/#organization",
        },
        areaServed: [content.name, content.country],
        description: content.metaDescription,
        url: canonical,
      },
    ],
  };
  if (content.assetValuation) {
    const professionalService = area.professionalService;
    structuredData["@graph"].push(
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": "https://www.sabirelsir.ae/#organization",
        name: professionalService.name,
        url: "https://www.sabirelsir.ae/",
        telephone: professionalService.telephone,
        email: professionalService.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: professionalService.addressLocality,
          addressCountry: professionalService.addressCountry,
        },
      },
      {
        "@type": "Service",
        "@id": `${canonical}#asset-valuation`,
        name: content.assetValuation.sectionTitle,
        serviceType: "Asset valuation",
        provider: {
          "@id": "https://www.sabirelsir.ae/#organization",
        },
        areaServed: content.country,
        description: content.assetValuation.serviceDescription,
        url: canonical,
      },
    );
  }

  return (
    <>
      <SEO
        title={content.metaTitle}
        description={content.metaDescription}
        canonical={canonical}
        language={language}
        structuredData={structuredData}
      />

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

          {content.assetValuation && (
            <section
              className="area-asset-valuation"
              aria-labelledby="area-asset-valuation"
            >
              <h2 id="area-asset-valuation">
                {content.assetValuation.sectionTitle}
              </h2>
              {content.assetValuation.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                {`${content.assetValuation.officialLabel} `}<a
                  href="https://cbos.gov.sd/ar/content/قائمة-بيوت-الخبرة-الاستشارية-المعتمدة-لدى-بنك-السودان-المركزي"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.assetValuation.officialLinkLabel}
                </a>
              </p>
              <h3>{content.assetValuation.contactTitle}</h3>
              <ul className="asset-valuation-contact-list">
                <li>
                  {`${content.assetValuation.phoneLabel}: `}<a
                    href={`tel:${area.professionalService.telephone}`}
                  >
                    {area.professionalService.telephone}
                  </a>
                </li>
                <li>
                  {`${content.assetValuation.emailLabel}: `}<a
                    href={`mailto:${area.professionalService.email}`}
                  >
                    {area.professionalService.email}
                  </a>
                </li>
                <li>
                  {`${content.assetValuation.directorLabel}: ${area.professionalService.director}`}
                </li>
              </ul>
            </section>
          )}

          <section className="area-office" aria-labelledby="area-office">
            <div className="area-office-copy">
              <h2 id="area-office">{content.officeTitle}</h2>
              <p>{content.officeAddress}</p>
              <p className="area-cta-text">{content.ctaText}</p>
              <Link className="area-cta-link" to="/contact">
                {`${content.ctaLink} `}
                <span aria-hidden="true">↗</span>
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
