import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/BlogArticle.css";
import "../styles/ClimateDesignArticle.css";

const articleContent = {
  en: {
    title:
      "Seismic & Environmental Considerations for Structural Design in the Middle East and East Africa | Sabir Elsir Engineering Consultants",
    description:
      "Comparative guide to structural design standards, foundation engineering, seismic requirements, and environmental durability in the UAE and Sudan.",
    heading:
      "Seismic & Environmental Considerations for Structural Design in the Middle East and East Africa",
    eyebrow: "Structural design · UAE and Sudan",
    directAnswer:
      "Structural design in the UAE and Sudan must account for site-specific heat exposure, temperature movement, soil and groundwater chemistry, geotechnical conditions, and the seismic requirements adopted by the relevant authority. Durable concrete, corrosion protection, suitable foundations, movement joints, and ductile detailing can be considered where supported by the project investigation and applicable codes.",
    frameworkTitle:
      "Comparison of engineering and design considerations across the UAE and Sudan",
    columns: [
      "Engineering parameter",
      "UAE (Sharjah / Ajman)",
      "Sudan (Khartoum)",
      "Recommended engineering strategy",
    ],
    comparisons: [
      {
        parameter: "Primary structural codes",
        uae: "Municipality-adopted UAE requirements; projects may reference IBC or Eurocodes and the applicable UAE Fire & Life Safety Code.",
        sudan:
          "Applicable local requirements and British Standards where adopted for the project.",
        strategy:
          "Confirm the authority-approved code basis and edition for each project, then coordinate design documents and BIM models to that basis.",
      },
      {
        parameter: "Foundation challenges",
        uae: "Groundwater level and chloride or sulfate exposure vary by plot; saline coastal soils may occur in some locations.",
        sudan:
          "Site conditions may include expansive clay (black cotton soil) or silt; confirm through geotechnical investigation.",
        strategy:
          "Select raft, pile, waterproofing, and concrete durability measures based on verified soil, groundwater, and loading data.",
      },
      {
        parameter: "Thermal considerations",
        uae: "High ambient temperatures and solar exposure can increase thermal movement and concrete temperature during construction.",
        sudan:
          "Large day-to-night temperature variation can contribute to thermal movement.",
        strategy:
          "Assess temperature effects and detail movement joints and insulated facade systems where calculations and project needs warrant them.",
      },
      {
        parameter: "Seismic requirements",
        uae: "Use the applicable authority-adopted seismic hazard map, site classification, and building code for the project location.",
        sudan:
          "Use locally applicable seismic hazard requirements and site-specific ground conditions.",
        strategy:
          "Base seismic actions on the verified code and hazard data, and provide ductile reinforced-concrete detailing as required by design.",
      },
    ],
    durabilityTitle: "Best practices for long-term structural durability",
    practices: [
      {
        title: "Corrosion mitigation",
        text: "Where exposure assessments identify saline groundwater or aggressive chlorides, specify suitable reinforcement protection, such as epoxy-coated or stainless-steel reinforcement, as appropriate to the design and local code.",
      },
      {
        title: "Concrete mix and curing",
        text: "Consider silica fume or fly ash in mix designs where locally approved and technically suitable; control permeability and curing to match the exposure class and construction conditions.",
      },
      {
        title: "BIM coordination",
        text: "Use Building Information Modeling to coordinate disciplines and review modeled thermal movement and structural deflection before construction, with assumptions checked by the responsible engineers.",
      },
    ],
    designNote:
      "Standards, seismic hazard classifications, soil profiles, and material availability differ by location and authority. This article is general guidance, not a design specification. Confirm the current adopted codes and commission site-specific geotechnical and structural design from qualified professionals.",
    contactText:
      "Planning a structural project in Sharjah, Ajman, or Khartoum? Talk with our engineering team about location-specific design requirements.",
    contactLink: "Contact our team",
    author: "Sabir Elsir Engineering Consultants",
    canonical:
      "https://www.sabirelsir.ae/blog/seismic-environmental-structural-design-middle-east-east-africa",
    keywords: [
      "Seismic engineering design UAE",
      "foundation engineering hot climate",
      "structural design standards Sudan UAE",
      "MEP engineering consultant Sharjah Khartoum",
    ],
  },
  ar: {
    title:
      "الاعتبارات الزلزالية والبيئية للتصميم الإنشائي في الشرق الأوسط وشرق أفريقيا | صابر السر للاستشارات الهندسية",
    description:
      "دليل مقارن لمعايير التصميم الإنشائي وهندسة الأساسات والمتطلبات الزلزالية ومتانة المنشآت البيئية في الإمارات والسودان.",
    heading:
      "الاعتبارات الزلزالية والبيئية للتصميم الإنشائي في الشرق الأوسط وشرق أفريقيا",
    eyebrow: "التصميم الإنشائي · الإمارات والسودان",
    directAnswer:
      "ينبغي أن يراعي التصميم الإنشائي في الإمارات والسودان التعرض الحراري الخاص بالموقع وحركة التمدد وتكوين التربة والمياه الجوفية والمتطلبات الزلزالية المعتمدة لدى الجهة المختصة. ويمكن النظر في الخرسانة المتينة والحماية من التآكل والأساسات المناسبة وفواصل الحركة والتفاصيل المطيلة عندما تدعمها دراسة المشروع والأنظمة المعمول بها.",
    frameworkTitle:
      "مقارنة الاعتبارات الهندسية والتصميمية في الإمارات والسودان",
    columns: [
      "المعيار الهندسي",
      "الإمارات (الشارقة / عجمان)",
      "السودان (الخرطوم)",
      "الاستراتيجية الهندسية الموصى بها",
    ],
    comparisons: [
      {
        parameter: "الأكواد الإنشائية الأساسية",
        uae: "اشتراطات الإمارات المعتمدة لدى البلدية؛ وقد تستند المشاريع إلى IBC أو Eurocodes وكود الإمارات للوقاية من الحريق وسلامة الأرواح حسب المعمول به.",
        sudan:
          "الاشتراطات المحلية ذات الصلة والمواصفات البريطانية حيثما اعتمدت للمشروع.",
        strategy:
          "تحقق من أساس التصميم وإصدار الكود المعتمدين من الجهة المختصة لكل مشروع، ثم نسّق مستندات التصميم ونماذج BIM وفقهما.",
      },
      {
        parameter: "تحديات الأساسات",
        uae: "يختلف منسوب المياه الجوفية والتعرض للكلوريدات أو الكبريتات باختلاف الموقع؛ وقد توجد تربة ساحلية مالحة في بعض المناطق.",
        sudan:
          "قد تشمل ظروف الموقع الطين الانتفاخي (التربة السوداء) أو الغرين؛ ويجب التحقق منها بدراسة جيوتقنية.",
        strategy:
          "اختر اللبشة أو الخوازيق والعزل وإجراءات متانة الخرسانة استناداً إلى بيانات التربة والمياه والأحمال التي تم التحقق منها.",
      },
      {
        parameter: "الاعتبارات الحرارية",
        uae: "قد تزيد درجات الحرارة المحيطة والتعرض الشمسي المرتفع من الحركة الحرارية وحرارة الخرسانة أثناء التنفيذ.",
        sudan:
          "قد يسهم التفاوت الكبير بين درجات الحرارة نهاراً وليلاً في الحركة الحرارية.",
        strategy:
          "قيّم تأثيرات الحرارة وصمّم فواصل الحركة وأنظمة الواجهات المعزولة عند الحاجة وفق الحسابات ومتطلبات المشروع.",
      },
      {
        parameter: "المتطلبات الزلزالية",
        uae: "استخدم خريطة الخطر الزلزالي وتصنيف الموقع وكود البناء المعتمدة لدى الجهة لموقع المشروع.",
        sudan:
          "استخدم المتطلبات الزلزالية المحلية ذات الصلة وظروف التربة الخاصة بالموقع.",
        strategy:
          "استند في الأحمال الزلزالية إلى الكود وبيانات الخطر المتحقق منها، ونفّذ تفاصيل مطيلة للخرسانة المسلحة حسب متطلبات التصميم.",
      },
    ],
    durabilityTitle: "أفضل الممارسات لمتانة إنشائية طويلة الأمد",
    practices: [
      {
        title: "الحد من التآكل",
        text: "عندما تكشف دراسة التعرض عن مياه جوفية مالحة أو كلوريدات مؤثرة، حدد حماية مناسبة لحديد التسليح، مثل الطلاء بالإيبوكسي أو استخدام الفولاذ المقاوم للصدأ، بما يتوافق مع التصميم والكود المحلي.",
      },
      {
        title: "خلطة الخرسانة والمعالجة",
        text: "يمكن دراسة استخدام غبار السيليكا أو الرماد المتطاير في الخلطات عندما يكون ذلك معتمداً محلياً ومناسباً فنياً، مع ضبط النفاذية والمعالجة بما يلائم فئة التعرض وظروف التنفيذ.",
      },
      {
        title: "تنسيق نمذجة BIM",
        text: "استخدم نمذجة معلومات البناء لتنسيق التخصصات ومراجعة الحركة الحرارية والانحراف الإنشائي في النماذج قبل التنفيذ، مع تحقق المهندسين المسؤولين من الافتراضات.",
      },
    ],
    designNote:
      "تختلف الأنظمة وتصنيفات الخطر الزلزالي وطبقات التربة وتوافر المواد باختلاف الموقع والجهة المختصة. هذا المقال إرشاد عام وليس مواصفات تصميم. تحقق من الأكواد المعتمدة حالياً واطلب دراسات جيوتقنية وتصميماً إنشائياً خاصاً بالموقع من مختصين مؤهلين.",
    contactText:
      "هل تخطط لمشروع إنشائي في الشارقة أو عجمان أو الخرطوم؟ تواصل مع فريقنا الهندسي لمناقشة متطلبات التصميم الخاصة بالموقع.",
    contactLink: "تواصل مع فريقنا",
    author: "صابر السر للاستشارات الهندسية",
    canonical:
      "https://www.sabirelsir.ae/blog/seismic-environmental-structural-design-middle-east-east-africa",
    keywords: [
      "التصميم الهندسي الزلزالي الإمارات",
      "هندسة الأساسات المناخ الحار",
      "معايير التصميم الإنشائي السودان الإمارات",
      "استشاري هندسة ميكانيكية كهربائية الشارقة الخرطوم",
    ],
  },
};

function ClimateDesignArticle() {
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const content = articleContent[language];
  const articleBody = [
    content.directAnswer,
    ...content.comparisons.map(
      (comparison) =>
        `${comparison.parameter}. UAE: ${comparison.uae} Sudan: ${comparison.sudan} Strategy: ${comparison.strategy}`,
    ),
    ...content.practices.map(
      (practice) => `${practice.title}: ${practice.text}`,
    ),
    content.designNote,
  ].join(" ");
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: content.heading,
    description: content.description,
    articleBody,
    articleSection:
      language === "ar" ? "التصميم الإنشائي" : "Structural design",
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
    areaServed: [
      "Sharjah",
      "Ajman",
      "Khartoum",
      "United Arab Emirates",
      "Sudan",
    ],
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
        className="blog-article-page climate-design-page"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <header className="blog-article-intro">
          <div className="blog-article-inner">
            <p className="blog-article-eyebrow">{content.eyebrow}</p>
            <h1>{content.heading}</h1>
            <p className="blog-article-byline">
              {content.author} <span aria-hidden="true">·</span>{" "}
              {language === "ar" ? "دليل التصميم" : "Design guide"}
            </p>
          </div>
        </header>

        <article className="blog-article-content">
          <p className="blog-article-summary">{content.directAnswer}</p>

          <section className="climate-comparison">
            <h2>{content.frameworkTitle}</h2>
            <div
              className="blog-approval-table-wrap"
              role="region"
              aria-label={content.frameworkTitle}
              tabIndex="0"
            >
              <table className="blog-approval-table climate-comparison-table">
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
                  {content.comparisons.map((comparison) => (
                    <tr key={comparison.parameter}>
                      <th scope="row">{comparison.parameter}</th>
                      <td>{comparison.uae}</td>
                      <td>{comparison.sudan}</td>
                      <td>{comparison.strategy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="climate-durability">
            <h2>{content.durabilityTitle}</h2>
            <ol>
              {content.practices.map((practice) => (
                <li key={practice.title}>
                  <h3>{practice.title}</h3>
                  <p>{practice.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <p className="climate-design-note">{content.designNote}</p>

          <aside className="blog-article-contact">
            <p>{content.contactText}</p>
            <Link to="/contact">{content.contactLink}</Link>
          </aside>
        </article>
      </div>
    </>
  );
}

export default ClimateDesignArticle;
