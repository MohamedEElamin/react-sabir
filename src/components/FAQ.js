import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/FAQ.css";

const faqContent = {
  en: {
    title: "Frequently Asked Questions | Sabir Elsir Engineering Consultants",
    description:
      "Answers about engineering design, project supervision, building permits, and consultancy services in Sharjah, Ajman, and Khartoum.",
    eyebrow: "Client information",
    heading: "Frequently asked questions",
    intro:
      "Clear answers about our engineering services, local approvals, project timelines, and consultancy fees in the UAE and Sudan.",
    sections: [
      {
        title: "Engineering services",
        questions: [
          {
            question: "What engineering consultancy services do you provide?",
            answer:
              "We provide architectural and structural design, project management, engineering supervision, building permit and government approval support, feasibility studies, and technical assessments of existing buildings.",
          },
          {
            question: "Do you offer interior design and landscape design?",
            answer:
              "Yes. We provide interior and landscape design services, developing practical, contemporary spaces that make effective use of each site and meet the project’s functional and aesthetic needs.",
          },
        ],
      },
      {
        title: "Locations and building permits",
        questions: [
          {
            question: "How do I obtain a building permit in Sharjah or Ajman?",
            answer:
              "The process depends on the regulations of the relevant emirate. It generally involves reviewing the plot and planning requirements, preparing preliminary architectural and structural designs for the client’s approval, submitting the application and obtaining required service-provider approvals, then securing the final permit and appointing the contractor and supervising consultant.",
          },
          {
            question:
              "What engineering consultancy services do you provide in Khartoum?",
            answer:
              "In Khartoum, Sudan, we provide engineering consultancy for villas and residential, commercial, and administrative buildings. Our services include design and engineering supervision tailored to local planning requirements, with a focus on construction quality and safety.",
          },
        ],
      },
      {
        title: "Timelines and fees",
        questions: [
          {
            question:
              "How long does residential design and building permit approval take?",
            answer:
              "A residential design and permit process typically takes around 4 to 8 weeks. The actual duration depends on the project’s size and complexity, requested revisions, and the review and approval timelines of the relevant authorities.",
          },
          {
            question: "What determines the cost of engineering consultancy?",
            answer:
              "Fees depend on the project type, total built-up area and number of floors, the requested scope (design only or design with supervision), and the applicable requirements in the project location, including Sharjah, Ajman, or Khartoum.",
          },
        ],
      },
    ],
    contact: "Contact our team",
    canonical: "https://www.sabirelsir.ae/faq",
  },
  ar: {
    title: "الأسئلة الشائعة | صابر السر للاستشارات الهندسية",
    description:
      "إجابات عن التصميم الهندسي والإشراف على المشاريع وتراخيص البناء والخدمات الاستشارية في الشارقة وعجمان والخرطوم.",
    eyebrow: "معلومات للعملاء",
    heading: "الأسئلة الشائعة",
    intro:
      "إجابات واضحة عن خدماتنا الهندسية والموافقات المحلية والمدة الزمنية للمشاريع وتكاليف الاستشارات في الإمارات والسودان.",
    sections: [
      {
        title: "الخدمات الهندسية",
        questions: [
          {
            question: "ما الخدمات التي تقدمها شركة الاستشارات الهندسية؟",
            answer:
              "نقدم التصميم المعماري والإنشائي، وإدارة المشاريع، والإشراف الهندسي، وخدمات تراخيص البناء والموافقات الحكومية، ودراسات الجدوى، والتقييمات الفنية للمباني القائمة.",
          },
          {
            question: "هل تقدمون خدمات التصميم الداخلي وتنسيق المواقع؟",
            answer:
              "نعم، نقدم خدمات التصميم الداخلي وتنسيق المواقع الخارجية، مع تطوير مساحات عصرية وعملية تستفيد من الموقع بكفاءة وتلبي الاحتياجات الوظيفية والجمالية للمشروع.",
          },
        ],
      },
      {
        title: "المواقع وتراخيص البناء",
        questions: [
          {
            question: "كيف أستخرج رخصة بناء في الشارقة أو عجمان؟",
            answer:
              "تعتمد الإجراءات على أنظمة الإمارة المعنية، وتشمل عادةً دراسة قطعة الأرض والاشتراطات التخطيطية، وإعداد التصاميم المعمارية والإنشائية الأولية لاعتماد العميل، ثم تقديم المعاملة واستكمال موافقات الجهات الخدمية، وأخيراً إصدار الرخصة النهائية واعتماد المقاول والاستشاري المشرف.",
          },
          {
            question: "ما الخدمات الاستشارية التي تقدمونها في الخرطوم؟",
            answer:
              "نقدم في الخرطوم بالسودان خدمات استشارية هندسية لمشاريع الفلل والمباني السكنية والتجارية والإدارية. وتشمل خدماتنا التصميم والإشراف الهندسي بما يتناسب مع متطلبات التخطيط المحلية، مع التركيز على جودة التنفيذ وسلامته.",
          },
        ],
      },
      {
        title: "المدة الزمنية والتكاليف",
        questions: [
          {
            question: "كم تستغرق عملية التصميم السكني والحصول على رخصة البناء؟",
            answer:
              "تستغرق عملية التصميم السكني وإجراءات الترخيص عادةً نحو 4 إلى 8 أسابيع. وقد تختلف المدة الفعلية بحسب مساحة المشروع وتعقيده والتعديلات المطلوبة ومدد المراجعة والاعتماد لدى الجهات المختصة.",
          },
          {
            question: "ما العوامل التي تحدد تكلفة الاستشارات الهندسية؟",
            answer:
              "تعتمد التكلفة على نوع المشروع، وإجمالي مساحة البناء وعدد الطوابق، ونطاق الخدمات المطلوبة (التصميم فقط أو التصميم مع الإشراف)، والاشتراطات المطبقة في موقع المشروع، بما في ذلك الشارقة أو عجمان أو الخرطوم.",
          },
        ],
      },
    ],
    contact: "تواصل معنا",
    canonical: "https://www.sabirelsir.ae/faq",
  },
};

function FAQ() {
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const content = faqContent[language];
  const questions = content.sections.flatMap((section) => section.questions);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <link rel="canonical" href={content.canonical} />
        <link rel="alternate" hrefLang="en" href={content.canonical} />
        <link rel="alternate" hrefLang="ar" href={content.canonical} />
        <link rel="alternate" hrefLang="x-default" href={content.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.description} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="faq-page" dir={language === "ar" ? "rtl" : "ltr"}>
        <header className="faq-intro">
          <div className="faq-inner">
            <p className="faq-eyebrow">{content.eyebrow}</p>
            <h1>{content.heading}</h1>
            <p className="faq-lead">{content.intro}</p>
          </div>
        </header>

        <section className="faq-content" aria-label={content.heading}>
          {content.sections.map((section, sectionIndex) => (
            <section className="faq-section" key={section.title}>
              <div className="faq-section-heading">
                <span aria-hidden="true">
                  {String(sectionIndex + 1).padStart(2, "0")}
                </span>
                <h2>{section.title}</h2>
              </div>
              <div className="faq-list">
                {section.questions.map(({ question, answer }) => (
                  <details className="faq-item" key={question}>
                    <summary>{question}</summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}

          <div className="faq-contact">
            <p>{content.contact}</p>
            <Link to="/contact" aria-label={content.contact}>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default FAQ;
