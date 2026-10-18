import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/BlogIndex.css";

const posts = {
  en: [
    {
      category: "Engineering approvals · UAE",
      title:
        "How to Navigate Engineering Approvals & Permits in Sharjah and Ajman (2026 Guide)",
      description:
        "A practical guide to building approval stages, required documentation, and indicative timelines.",
      path: "/blog/building-approval-stages-sharjah-ajman",
      label: "Read article",
    },
    {
      category: "Structural rehabilitation · Sudan",
      title:
        "Structural Integrity Assessment & Infrastructure Rehabilitation in Khartoum: A Technical Roadmap",
      description:
        "A technical overview of structural damage assessment, non-destructive testing, and rehabilitation planning in Khartoum.",
      path: "/blog/structural-rehabilitation-assessment-khartoum",
      label: "Read article",
    },
    {
      category: "Structural design · UAE and Sudan",
      title:
        "Seismic & Environmental Considerations for Structural Design in the Middle East and East Africa",
      description:
        "A comparative guide to seismic design, foundations, hot-climate durability, and practical engineering strategies for the UAE and Sudan.",
      path: "/blog/seismic-environmental-structural-design-middle-east-east-africa",
      label: "Read article",
    },
  ],
  ar: [
    {
      category: "اعتمادات هندسية · الإمارات",
      title: "دليل 2026 للتعامل مع اعتمادات وتصاريح الهندسة في الشارقة وعجمان",
      description:
        "دليل عملي لمراحل اعتماد البناء والمستندات المطلوبة والمدد الزمنية التقديرية.",
      path: "/blog/building-approval-stages-sharjah-ajman",
      label: "اقرأ المقال",
    },
    {
      category: "التأهيل الإنشائي · السودان",
      title:
        "تقييم السلامة الإنشائية وتأهيل البنية التحتية في الخرطوم: خارطة طريق فنية",
      description:
        "نظرة فنية على تقييم أضرار المباني والفحوصات غير المتلفة وتخطيط أعمال التأهيل في الخرطوم.",
      path: "/blog/structural-rehabilitation-assessment-khartoum",
      label: "اقرأ المقال",
    },
    {
      category: "التصميم الإنشائي · الإمارات والسودان",
      title:
        "اعتبارات الزلازل والبيئة في التصميم الإنشائي بالشرق الأوسط وشرق أفريقيا",
      description:
        "دليل مقارن للتصميم الزلزالي والأساسات ومتانة المباني في المناخ الحار واستراتيجيات هندسية للإمارات والسودان.",
      path: "/blog/seismic-environmental-structural-design-middle-east-east-africa",
      label: "اقرأ المقال",
    },
  ],
};

function BlogIndex() {
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const isArabic = language === "ar";
  const content = posts[language];
  const title = isArabic ? "المدونة الهندسية" : "Engineering insights";
  const description = isArabic
    ? "مقالات وأدلة هندسية عن اعتمادات البناء والتصميم الإنشائي في الإمارات، وتقييم الأضرار والتأهيل في السودان."
    : "Engineering guides on UAE building approvals, cross-border structural design, and damage assessment and rehabilitation in Sudan.";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    inLanguage: language,
    url: "https://www.sabirelsir.ae/blog",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: content.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: post.title,
        url: `https://www.sabirelsir.ae${post.path}`,
      })),
    },
  };

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{`${title} | Sabir Elsir Engineering Consultants`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://www.sabirelsir.ae/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="blog-index-page" dir={isArabic ? "rtl" : "ltr"}>
        <header className="blog-index-intro">
          <div className="blog-index-inner">
            <p className="blog-index-eyebrow">
              {isArabic ? "المعرفة الهندسية" : "Engineering knowledge"}
            </p>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </header>

        <section className="blog-index-list" aria-label={title}>
          {content.map((post, index) => (
            <article className="blog-index-post" key={post.path}>
              <span className="blog-index-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="blog-index-post-copy">
                <p className="blog-index-category">{post.category}</p>
                <h2>
                  <Link to={post.path}>{post.title}</Link>
                </h2>
                <p className="blog-index-description">{post.description}</p>
              </div>
              <Link className="blog-index-read" to={post.path}>
                {post.label} <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}

export default BlogIndex;
