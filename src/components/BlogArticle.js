import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/BlogArticle.css";

const articleContent = {
  en: {
    title:
      "How to Navigate Engineering Approvals & Permits in Sharjah and Ajman (2026 Guide) | Sabir Elsir Engineering Consultants",
    description:
      "A 2026 guide to engineering approvals, civil defense NOCs, local building permits, and structural design compliance in Sharjah and Ajman, UAE.",
    eyebrow: "Engineering guide · UAE",
    heading:
      "How to Navigate Engineering Approvals & Permits in Sharjah and Ajman (2026 Guide)",
    summary:
      "Building approval typically moves through four coordinated stages: site soil testing, structural design, MEP and safety review, then final NOC and permit. Based on the stage estimates below, the combined indicative duration is about 25–36 days, subject to project scope and authority review.",
    timeframeNote:
      "These are indicative averages, not guaranteed service or authority processing times. Requirements and review durations can vary by plot, project complexity, appointed specialists, and the current procedures of each authority. Confirm the current checklist before submission.",
    tableCaption:
      "Typical building approval stages, responsible authorities, documentation, and estimated duration",
    columns: [
      "Approval stage",
      "Responsible authority",
      "Required documentation",
      "Average timeline",
    ],
    stages: [
      {
        name: "Site soil testing",
        authority: "Approved geotechnical laboratory",
        documents:
          "Core sampling and a soil investigation report, including bearing-capacity analysis",
        timeline: "5–7 days",
      },
      {
        name: "Structural design",
        authority: "Sharjah or Ajman Municipality",
        documents:
          "Structural load calculations, seismic design information, and CAD or BIM drawings",
        timeline: "10–14 days",
      },
      {
        name: "MEP and safety",
        authority:
          "Civil Defense and relevant utility authorities (SEWA / FEWA, as applicable)",
        documents:
          "Fire-safety layout, electrical load details, and HVAC specifications",
        timeline: "7–10 days",
      },
      {
        name: "Final NOC and permit",
        authority: "Municipal building department",
        documents: "Contractor appointment, fee clearance, and site NOC",
        timeline: "3–5 days",
      },
    ],
    preparationTitle: "How to prepare for a smoother submission",
    preparation: [
      "Confirm plot details and the applicable planning requirements before design starts.",
      "Use the laboratory and technical specialists accepted by the relevant authorities.",
      "Coordinate structural, MEP, and fire-safety information so drawings and calculations agree.",
      "Check that contractor details, fees, and required NOCs are ready for the final permit stage.",
    ],
    localConsultantTitle:
      "Why work with a licensed local engineering consultant in the Northern Emirates?",
    localConsultantBenefits: [
      {
        title: "Code compliance",
        text: "A consultant familiar with municipal building codes can help align project documentation with UAE Fire and Life Safety Codes and applicable regional seismic design standards.",
      },
      {
        title: "More efficient reviews",
        text: "Well-coordinated, authority-ready BIM or CAD submissions can help reduce avoidable review cycles. Review times remain subject to the authority’s process.",
      },
      {
        title: "Cost efficiency",
        text: "Project-specific foundation and structural design can help avoid unnecessary over-engineering while meeting applicable safety and code requirements.",
      },
    ],
    contactText:
      "Planning a building project in Sharjah or Ajman? Our engineering team can help you prepare the design and approval documents.",
    contactLink: "Talk to our team",
    author: "Sabir Elsir Engineering Consultants",
    publishedLabel: "Engineering approvals",
    canonical:
      "https://www.sabirelsir.ae/blog/building-approval-stages-sharjah-ajman",
  },
  ar: {
    title:
      "دليل 2026 للتعامل مع اعتمادات وتصاريح الهندسة في الشارقة وعجمان | صابر السر للاستشارات الهندسية",
    description:
      "دليل 2026 للاعتمادات الهندسية وشهادات عدم الممانعة من الدفاع المدني وتصاريح البناء والامتثال الإنشائي في الشارقة وعجمان، الإمارات.",
    eyebrow: "دليل هندسي · الإمارات",
    heading: "دليل 2026 للتعامل مع اعتمادات وتصاريح الهندسة في الشارقة وعجمان",
    summary:
      "تمر إجراءات اعتماد البناء عادةً بأربع مراحل مترابطة: فحص تربة الموقع، والتصميم الإنشائي، ومراجعة الأعمال الميكانيكية والكهربائية والسلامة، ثم إصدار عدم الممانعة والرخصة النهائية. وبحسب المدد التقديرية أدناه، يبلغ مجموع المدد الإرشادية نحو 25 إلى 36 يوماً، مع اختلافها حسب نطاق المشروع ومراجعة الجهات المختصة.",
    timeframeNote:
      "هذه مدد متوسطة إرشادية وليست ضماناً لمدة إنجاز الخدمات أو اعتماد الجهات. قد تختلف المتطلبات ومدد المراجعة بحسب قطعة الأرض وتعقيد المشروع والاختصاصيين المعتمدين والإجراءات المعمول بها لدى كل جهة. يُرجى التأكد من قائمة المتطلبات الحالية قبل التقديم.",
    tableCaption:
      "مراحل اعتماد البناء والجهات المسؤولة والمستندات والمدة التقديرية",
    columns: [
      "مرحلة الاعتماد",
      "الجهة المسؤولة",
      "المستندات المطلوبة",
      "المدة المتوسطة",
    ],
    stages: [
      {
        name: "فحص تربة الموقع",
        authority: "مختبر جيوتقني معتمد",
        documents: "أخذ عينات التربة وإعداد تقرير فحص يتضمن تحليل قدرة التحمل",
        timeline: "5–7 أيام",
      },
      {
        name: "التصميم الإنشائي",
        authority: "بلدية الشارقة أو بلدية عجمان",
        documents:
          "حسابات الأحمال الإنشائية وبيانات التصميم الزلزالي ومخططات CAD أو BIM",
        timeline: "10–14 يوماً",
      },
      {
        name: "الأعمال الميكانيكية والكهربائية والسلامة",
        authority:
          "الدفاع المدني والجهات الخدمية المعنية (سيوا / فيوا حسب الإمارة)",
        documents:
          "مخطط السلامة من الحريق وبيانات الأحمال الكهربائية ومواصفات التكييف والتهوية",
        timeline: "7–10 أيام",
      },
      {
        name: "عدم الممانعة والرخصة النهائية",
        authority: "قسم المباني في البلدية",
        documents: "تعيين المقاول وتسوية الرسوم وعدم ممانعة الموقع",
        timeline: "3–5 أيام",
      },
    ],
    preparationTitle: "كيف تجهز معاملة أكثر سلاسة؟",
    preparation: [
      "تحقق من بيانات الأرض والاشتراطات التخطيطية المعمول بها قبل بدء التصميم.",
      "استعن بالمختبر والاختصاصيين الفنيين المقبولين لدى الجهات المعنية.",
      "نسّق بين المعلومات الإنشائية والميكانيكية والكهربائية ومخططات السلامة لضمان توافق المخططات والحسابات.",
      "جهّز بيانات المقاول والرسوم وموافقات الجهات المطلوبة قبل مرحلة إصدار الرخصة النهائية.",
    ],
    localConsultantTitle:
      "لماذا تستعين باستشاري هندسي محلي مرخص في الإمارات الشمالية؟",
    localConsultantBenefits: [
      {
        title: "الامتثال للأنظمة",
        text: "يمكن للاستشاري الملمّ باشتراطات البناء البلدية المساعدة في مواءمة مستندات المشروع مع كود الإمارات للوقاية من الحريق وسلامة الأرواح ومعايير التصميم الزلزالي الإقليمية المعمول بها.",
      },
      {
        title: "مراجعات أكثر كفاءة",
        text: "قد تساعد ملفات BIM أو CAD المنسقة والمعدة وفق متطلبات الجهات على تقليل دورات المراجعة التي يمكن تفاديها، مع بقاء مدة المراجعة خاضعة لإجراءات الجهة المختصة.",
      },
      {
        title: "كفاءة التكلفة",
        text: "قد يساعد التصميم الإنشائي وتصميم الأساسات الملائمان للمشروع على تجنب المبالغة غير الضرورية في التصميم مع استيفاء متطلبات السلامة والأنظمة المعمول بها.",
      },
    ],
    contactText:
      "هل تخطط لمشروع بناء في الشارقة أو عجمان؟ يمكن لفريقنا الهندسي مساعدتك في تجهيز التصاميم ومستندات الاعتماد.",
    contactLink: "تواصل مع فريقنا",
    author: "صابر السر للاستشارات الهندسية",
    publishedLabel: "اعتمادات هندسية",
    canonical:
      "https://www.sabirelsir.ae/blog/building-approval-stages-sharjah-ajman",
  },
};

function BlogArticle() {
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const content = articleContent[language];
  const articleText = [
    content.summary,
    ...content.stages.map(
      (stage) =>
        `${stage.name}: ${stage.authority}. ${stage.documents}. ${stage.timeline}.`,
    ),
    content.timeframeNote,
    ...content.preparation,
    content.localConsultantTitle,
    ...content.localConsultantBenefits.map(
      (benefit) => `${benefit.title}: ${benefit.text}`,
    ),
  ].join(" ");
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: content.heading,
        description: content.description,
        articleBody: articleText,
        articleSection: content.publishedLabel,
        inLanguage: language,
        areaServed: ["Sharjah", "Ajman", "United Arab Emirates"],
        keywords: [
          "Engineering consultants Sharjah",
          "Ajman municipality structural approvals",
          "building permit process UAE",
        ],
        author: {
          "@type": "Organization",
          name: content.author,
          url: "https://www.sabirelsir.ae/",
        },
        publisher: {
          "@type": "Organization",
          name: content.author,
          url: "https://www.sabirelsir.ae/",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": content.canonical,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: language === "ar" ? "الرئيسية" : "Home",
            item: "https://www.sabirelsir.ae/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: language === "ar" ? "المدونة" : "Blog",
            item: "https://www.sabirelsir.ae/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: content.heading,
            item: content.canonical,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <link rel="canonical" href={content.canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.description} />
        <meta property="og:url" content={content.canonical} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div
        className="blog-article-page"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <header className="blog-article-intro">
          <div className="blog-article-inner">
            <p className="blog-article-eyebrow">{content.eyebrow}</p>
            <h1>{content.heading}</h1>
            <p className="blog-article-byline">
              {content.author} <span aria-hidden="true">·</span>{" "}
              {content.publishedLabel}
            </p>
          </div>
        </header>

        <article className="blog-article-content">
          <p className="blog-article-summary">{content.summary}</p>
          <p className="blog-article-note">{content.timeframeNote}</p>

          <div
            className="blog-approval-table-wrap"
            role="region"
            aria-label={content.tableCaption}
            tabIndex="0"
          >
            <table className="blog-approval-table">
              <caption>{content.tableCaption}</caption>
              <thead>
                <tr>
                  {content.columns.map((column) => (
                    <th key={column} scope="col">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.stages.map((stage) => (
                  <tr key={stage.name}>
                    <th scope="row">{stage.name}</th>
                    <td>{stage.authority}</td>
                    <td>{stage.documents}</td>
                    <td className="blog-approval-timeline">{stage.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <section className="blog-article-preparation blog-local-consultant">
            <h2>{content.localConsultantTitle}</h2>
            <ul>
              {content.localConsultantBenefits.map((benefit) => (
                <li key={benefit.title}>
                  <strong>{benefit.title}:</strong> {benefit.text}
                </li>
              ))}
            </ul>
          </section>

          <section className="blog-article-preparation">
            <h2>{content.preparationTitle}</h2>
            <ul>
              {content.preparation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <aside className="blog-article-contact">
            <p>{content.contactText}</p>
            <Link to="/contact">{content.contactLink}</Link>
          </aside>
        </article>
      </div>
    </>
  );
}

export default BlogArticle;
