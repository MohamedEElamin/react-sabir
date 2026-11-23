import React from "react";
import { Helmet } from "react-helmet-async";
import { getLocalizedPath } from "../utils/localizedRoutes";

const SITE_URL = "https://www.sabirelsir.ae";
const DEFAULT_IMAGE = `${SITE_URL}/images/logo-part-min.jpg`;

function localizeUrl(url, language) {
  const parsedUrl = new URL(url);
  parsedUrl.pathname = getLocalizedPath(parsedUrl.pathname, language);
  return parsedUrl.href;
}

function localizeStructuredData(value, language, parentTypes = [], propertyName = "") {
  if (Array.isArray(value)) {
    return value.map((item) =>
      localizeStructuredData(item, language, parentTypes, propertyName),
    );
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        localizeStructuredData(
          item,
          language,
          Array.isArray(value["@type"])
            ? value["@type"]
            : value["@type"]
              ? [value["@type"]]
              : parentTypes,
          key,
        ),
      ]),
    );
  }
  if (typeof value !== "string" || !value.startsWith(SITE_URL)) return value;
  if (/^https:\/\/www\.sabirelsir\.ae\/#(?:organization|website|logo)$/.test(value)) {
    return value;
  }
  if (
    value === `${SITE_URL}/` &&
    propertyName === "url" &&
    parentTypes.some((type) =>
      ["Organization", "ProfessionalService", "WebSite"].includes(type),
    )
  ) {
    return value;
  }

  return localizeUrl(value, language);
}

function SEO({
  title,
  description,
  canonical,
  language,
  robots = "index, follow",
  image = DEFAULT_IMAGE,
  structuredData,
  pageType = "WebPage",
  localized = true,
  alternateUrls,
}) {
  const canonicalUrl =
    canonical && localized ? localizeUrl(canonical, language) : canonical;
  const languages =
    alternateUrls ||
    (canonical && localized
      ? {
          en: localizeUrl(canonical, "en"),
          ar: localizeUrl(canonical, "ar"),
        }
      : null);
  const resolvedStructuredData = structuredData
    ? localizeStructuredData(structuredData, language)
    : null;
  const webpageSchema = canonicalUrl
    ? {
        "@context": "https://schema.org",
        "@type": pageType,
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description,
        inLanguage: language,
        isPartOf: { "@id": `${SITE_URL}/#website` },
      }
    : null;

  return (
    <Helmet defer={false}>
      <html lang={language} dir={language === "ar" ? "rtl" : "ltr"} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {languages && (
        <link rel="alternate" hrefLang="en" href={languages.en} />
      )}
      {languages && (
        <link rel="alternate" hrefLang="ar" href={languages.ar} />
      )}
      {languages && (
        <link rel="alternate" hrefLang="x-default" href={languages.en} />
      )}
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content="Sabir Elsir Engineering Consultants"
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:locale"
        content={language === "ar" ? "ar_AE" : "en_AE"}
      />
      <meta
        property="og:locale:alternate"
        content={language === "ar" ? "en_AE" : "ar_AE"}
      />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={image} />
      <meta
        property="og:image:alt"
        content="Sabir Elsir Engineering Consultants"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {resolvedStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(resolvedStructuredData)}
        </script>
      )}
      {webpageSchema && (
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
      )}
    </Helmet>
  );
}

export default SEO;
