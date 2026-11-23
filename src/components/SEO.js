import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.sabirelsir.ae";
const DEFAULT_IMAGE = `${SITE_URL}/images/logo-part-min.jpg`;

function SEO({
  title,
  description,
  canonical,
  language,
  robots = "index, follow",
  image = DEFAULT_IMAGE,
  structuredData,
}) {
  return (
    <Helmet defer={false}>
      <html lang={language} dir={language === "ar" ? "rtl" : "ltr"} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content="Sabir Elsir Engineering Consultants"
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

export default SEO;
