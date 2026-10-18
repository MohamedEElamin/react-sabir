import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/BlogArticle.css";
import "../styles/KhartoumRehabilitationArticle.css";

const articleContent = {
  en: {
    title:
      "Structural Integrity Assessment & Infrastructure Rehabilitation in Khartoum: A Technical Roadmap | Sabir Elsir Engineering Consultants",
    description:
      "Technical guide to non-destructive testing, concrete core sampling, structural damage inspection, and rehabilitation planning in Khartoum, Sudan.",
    heading:
      "Structural Integrity Assessment & Infrastructure Rehabilitation in Khartoum: A Technical Roadmap",
    eyebrow: "Structural rehabilitation · Sudan",
    directAnswer:
      "Structural integrity assessments in Khartoum evaluate load-bearing elements, foundation stability, and material condition in structures affected by blast or fire. Qualified structural engineers may combine visual inspection, non-destructive testing (NDT), concrete core sampling, ultrasonic pulse velocity testing, and geotechnical investigation to assess observed damage and develop repair recommendations. The appropriate investigation depends on the building and site conditions.",
    frameworkTitle: "Framework for structural rehabilitation assessment",
    frameworkIntro:
      "A systematic assessment helps distinguish cosmetic distress from damage that may affect structural performance. Testing should be selected and interpreted by qualified professionals for the specific building and site.",
    columns: [
      "Assessment phase",
      "Engineering methodology",
      "Primary goal",
      "Output deliverable",
    ],
    phases: [
      {
        name: "Visual inspection",
        method: "Structural mapping and crack monitoring",
        goal: "Identify visible damage and possible compromises to load-bearing elements",
        output: "Initial hazard category (Green / Yellow / Red)",
      },
      {
        name: "Field testing (NDT)",
        method: "Rebound hammer and ultrasonic pulse velocity testing",
        goal: "Assess concrete uniformity and indicators of material condition",
        output: "Material condition and degradation report",
      },
      {
        name: "Core sampling and foundation review",
        method:
          "Concrete core extraction for laboratory testing, with geotechnical investigation where foundation concerns exist",
        goal: "Verify concrete properties and inform structural and foundation capacity assessment",
        output: "Laboratory results and structural/geotechnical analysis",
      },
      {
        name: "Repair specification",
        method:
          "Engineered options may include carbon-fiber wrapping, concrete or steel jacketing, or steel bracing",
        goal: "Develop project-specific repair and retrofit recommendations",
        output: "Repair specifications and construction drawings",
      },
    ],
    categoriesTitle: "Structural safety categories for rehabilitation planning",
    categoryNote:
      "These descriptions are preliminary planning categories, not a building safety certificate. Only an on-site assessment by qualified structural professionals and the relevant authorities can determine occupancy or repair requirements.",
    categories: [
      {
        name: "Category A · Habitable / minor repairs",
        description:
          "Examples may include superficial masonry cracks or non-structural wall damage. Repairs may involve plaster and sealing after an engineer confirms that the damage is non-structural.",
      },
      {
        name: "Category B · Structural retrofitting required",
        description:
          "Examples may include column spalling or beam shear cracking. An engineered repair, such as column jacketing or steel bracing, may be required before re-occupancy is considered.",
      },
      {
        name: "Category C · Unsafe / possible partial demolition",
        description:
          "Major foundation settlement or collapse of primary structural elements may require restricted access, detailed engineering review, and a repair, partial-demolition, or redesign plan approved by the responsible professionals and authorities.",
      },
    ],
    safetyNote:
      "If a building shows signs of instability or major damage, keep people away from affected areas and contact qualified local structural professionals and the relevant authorities. Do not use these categories to decide whether a building is safe to occupy.",
    contactText:
      "Need structural damage assessment or rehabilitation planning in Khartoum? Contact our engineering team to discuss the appropriate next steps.",
    contactLink: "Contact our team",
    author: "Sabir Elsir Engineering Consultants",
    canonical:
      "https://www.sabirelsir.ae/blog/structural-rehabilitation-assessment-khartoum",
    keywords: [
      "Structural engineering assessment Khartoum",
      "building damage inspection Sudan",
      "infrastructure reconstruction consultancy Khartoum",
      "structural repair assessment Sudan",
    ],
  },
  ar: {
    title:
      "تقييم السلامة الإنشائية وتأهيل البنية التحتية في الخرطوم: خارطة طريق فنية | صابر السر للاستشارات الهندسية",
    description:
      "دليل فني للفحوصات غير المتلفة وأخذ عينات الخرسانة وفحص أضرار المباني وتخطيط التأهيل الإنشائي في الخرطوم، السودان.",
    heading:
      "تقييم السلامة الإنشائية وتأهيل البنية التحتية في الخرطوم: خارطة طريق فنية",
    eyebrow: "التأهيل الإنشائي · السودان",
    directAnswer:
      "يقيّم فحص السلامة الإنشائية في الخرطوم العناصر الحاملة واستقرار الأساسات وحالة المواد في المنشآت المتضررة من الانفجارات أو الحرائق. وقد يجمع المهندسون الإنشائيون المؤهلون بين المعاينة البصرية والفحوصات غير المتلفة وأخذ عينات الخرسانة واختبار سرعة النبضات فوق الصوتية والتحقيق الجيوتقني لتقييم الأضرار الظاهرة وإعداد توصيات الإصلاح. ويتحدد نوع الفحوصات المناسبة بحسب المبنى وظروف الموقع.",
    frameworkTitle: "إطار تقييم التأهيل الإنشائي",
    frameworkIntro:
      "يساعد التقييم المنهجي على التمييز بين الأضرار الشكلية والتلف الذي قد يؤثر في أداء المنشأ. وينبغي أن يختار المختصون المؤهلون الفحوصات ويفسروا نتائجها وفق حالة المبنى والموقع.",
    columns: [
      "مرحلة التقييم",
      "المنهجية الهندسية",
      "الهدف الأساسي",
      "المخرج الفني",
    ],
    phases: [
      {
        name: "المعاينة البصرية",
        method: "رسم خريطة إنشائية ومراقبة الشقوق",
        goal: "تحديد الأضرار الظاهرة ومواطن الخلل المحتملة في العناصر الحاملة",
        output: "تصنيف أولي للمخاطر (أخضر / أصفر / أحمر)",
      },
      {
        name: "الفحوصات الميدانية غير المتلفة",
        method: "مطرقة الارتداد واختبار سرعة النبضات فوق الصوتية",
        goal: "تقييم تجانس الخرسانة ومؤشرات حالة المواد",
        output: "تقرير حالة المواد والتدهور",
      },
      {
        name: "أخذ العينات ومراجعة الأساسات",
        method:
          "استخراج عينات خرسانية للفحص المخبري، مع تحقيق جيوتقني عند وجود مخاوف تتعلق بالأساسات",
        goal: "التحقق من خصائص الخرسانة ودعم تقييم قدرة المنشأ والأساسات",
        output: "نتائج مخبرية وتحليل إنشائي وجيوتقني",
      },
      {
        name: "مواصفات الإصلاح",
        method:
          "قد تشمل الحلول المدروسة هندسياً لف ألياف الكربون أو تدعيم الأعمدة بالخرسانة أو الفولاذ أو التدعيم الفولاذي",
        goal: "إعداد توصيات إصلاح وتأهيل تناسب المشروع",
        output: "مواصفات الإصلاح ومخططات التنفيذ",
      },
    ],
    categoriesTitle: "تصنيفات السلامة الإنشائية للتخطيط لأعمال التأهيل",
    categoryNote:
      "هذه أوصاف أولية للتخطيط وليست شهادة سلامة للمبنى. ولا يمكن تحديد صلاحية الإشغال أو متطلبات الإصلاح إلا من خلال تقييم موقعي يجريه مختصون إنشائيون مؤهلون وبالتنسيق مع الجهات المعنية.",
    categories: [
      {
        name: "الفئة أ · صالح للإشغال / إصلاحات بسيطة",
        description:
          "قد تشمل الأمثلة شقوقاً سطحية في المباني أو أضراراً في الجدران غير الإنشائية. وقد تشمل الإصلاحات أعمال اللياسة وسد الشقوق بعد تأكيد المهندس أن الضرر غير إنشائي.",
      },
      {
        name: "الفئة ب · تتطلب تدعيماً إنشائياً",
        description:
          "قد تشمل الأمثلة تقشر الخرسانة في الأعمدة أو شقوق القص في الكمرات. وقد يلزم إصلاح مصمم هندسياً، مثل تغليف الأعمدة أو التدعيم الفولاذي، قبل النظر في إعادة الإشغال.",
      },
      {
        name: "الفئة ج · غير آمن / احتمال الإزالة الجزئية",
        description:
          "قد يتطلب الهبوط الكبير في الأساسات أو انهيار العناصر الإنشائية الرئيسية تقييد الوصول ومراجعة هندسية مفصلة وخطة للإصلاح أو الإزالة الجزئية أو إعادة التصميم يعتمدها المختصون والجهات المسؤولة.",
      },
    ],
    safetyNote:
      "إذا ظهرت على المبنى علامات عدم الاستقرار أو أضرار كبيرة، أبعد الأشخاص عن المناطق المتضررة وتواصل مع مختصين إنشائيين محليين مؤهلين والجهات المعنية. لا تستخدم هذه التصنيفات لتحديد صلاحية المبنى للإشغال.",
    contactText:
      "هل تحتاج إلى تقييم أضرار إنشائية أو تخطيط للتأهيل في الخرطوم؟ تواصل مع فريقنا الهندسي لمناقشة الخطوات المناسبة.",
    contactLink: "تواصل مع فريقنا",
    author: "صابر السر للاستشارات الهندسية",
    canonical:
      "https://www.sabirelsir.ae/blog/structural-rehabilitation-assessment-khartoum",
    keywords: [
      "تقييم هندسة إنشائية الخرطوم",
      "فحص أضرار المباني السودان",
      "استشارات إعادة بناء البنية التحتية الخرطوم",
      "تقييم إصلاح الهياكل السودان",
    ],
  },
};

function KhartoumRehabilitationArticle() {
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const content = articleContent[language];
  const articleBody = [
    content.directAnswer,
    content.frameworkIntro,
    ...content.phases.map(
      (phase) =>
        `${phase.name}: ${phase.method}. ${phase.goal}. ${phase.output}.`,
    ),
    content.categoryNote,
    ...content.categories.map(
      (category) => `${category.name}: ${category.description}`,
    ),
    content.safetyNote,
  ].join(" ");
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: content.heading,
    description: content.description,
    articleBody,
    articleSection:
      language === "ar" ? "التأهيل الإنشائي" : "Structural rehabilitation",
    inLanguage: language,
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
    areaServed: ["Khartoum", "Sudan"],
    keywords: content.keywords,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": content.canonical,
    },
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
        className="blog-article-page khartoum-article-page"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <header className="blog-article-intro">
          <div className="blog-article-inner">
            <p className="blog-article-eyebrow">{content.eyebrow}</p>
            <h1>{content.heading}</h1>
            <p className="blog-article-byline">
              {content.author} <span aria-hidden="true">·</span>{" "}
              {language === "ar"
                ? "تقييم وتأهيل إنشائي"
                : "Assessment and rehabilitation"}
            </p>
          </div>
        </header>

        <article className="blog-article-content">
          <p className="blog-article-summary">{content.directAnswer}</p>

          <section className="khartoum-framework">
            <h2>{content.frameworkTitle}</h2>
            <p>{content.frameworkIntro}</p>
            <div
              className="blog-approval-table-wrap"
              role="region"
              aria-label={content.frameworkTitle}
              tabIndex="0"
            >
              <table className="blog-approval-table khartoum-assessment-table">
                <caption>{content.frameworkTitle}</caption>
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
                  {content.phases.map((phase) => (
                    <tr key={phase.name}>
                      <th scope="row">{phase.name}</th>
                      <td>{phase.method}</td>
                      <td>{phase.goal}</td>
                      <td>{phase.output}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="khartoum-categories">
            <h2>{content.categoriesTitle}</h2>
            <p className="blog-article-note">{content.categoryNote}</p>
            <ol>
              {content.categories.map((category) => (
                <li key={category.name}>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <p className="khartoum-safety-note">{content.safetyNote}</p>

          <aside className="blog-article-contact">
            <p>{content.contactText}</p>
            <Link to="/contact">{content.contactLink}</Link>
          </aside>
        </article>
      </div>
    </>
  );
}

export default KhartoumRehabilitationArticle;
