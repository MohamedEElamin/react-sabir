import React from "react";
import Link from "./LocalizedLink";
import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import SEO from "./SEO";
import "../styles/ServiceDetail.css";

const canonical =
  "https://www.sabirelsir.ae/services/architectural-engineering-consultancy";

const pageContent = {
  en: {
    title: "Architectural Design Consultancy | Sharjah & Ajman",
    description:
      "Architectural design, villa planning, and engineering consultancy in Sharjah and Ajman.",
    eyebrow: "Engineering Services",
    heading:
      "Architectural Design & Engineering Consultancy in Sharjah and Ajman",
    lead:
      "Architectural design and engineering consultancy for residential, commercial, and industrial developments in Sharjah, Ajman, and across the UAE.",
    servicesHeading: "Architectural Engineering Consultancy Services",
    paragraphs: [
      "Established in 2001, Sabir Elsir Engineering Consultants provides architectural engineering consultancy and building design services in Sharjah, Ajman, and across the UAE. Our services cover architectural concept development, building planning, residential villa design, commercial and industrial building design, architectural elevations, and detailed construction drawings.",
      "We develop architectural solutions that balance functionality, aesthetics, site requirements, and applicable building regulations. Our approach includes coordinating architectural designs with structural, civil, and MEP engineering disciplines to support integrated project planning and technical consistency.",
      "From initial design concepts to detailed engineering documentation, we support residential, commercial, and industrial developments with practical design solutions tailored to each project's requirements. Where included in our scope of work, we also assist with preparing and coordinating architectural documentation for submission to the relevant local authorities.",
      "Explore our architectural design projects and discover how our engineering consultancy services support building developments in Sharjah, Ajman, and other locations across the UAE.",
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        question:
          "What architectural engineering services does Sabir Elsir provide?",
        answer:
          "Architectural engineering consultancy includes building design, architectural planning, villa design, commercial and residential building layouts, architectural elevations, and construction documentation, subject to the company's actual service scope.",
      },
      {
        question:
          "Does Sabir Elsir provide architectural design services in Sharjah and Ajman?",
        answer:
          "Yes. The company provides architectural design and engineering consultancy services for projects in Sharjah and Ajman.",
      },
      {
        question: "Does the company assist with municipality submissions?",
        answer:
          "Where included in the project scope, the company assists with preparing and coordinating engineering documentation for submission to the relevant authorities.",
      },
    ],
    home: "Home",
    services: "Services",
    breadcrumb: "Breadcrumb",
    areaServed: ["Sharjah", "Ajman", "United Arab Emirates"],
    serviceName: "Architectural Design & Engineering Consultancy",
    serviceTypes: [
      "Architectural design",
      "Building planning",
      "Villa design",
      "Engineering consultancy",
    ],
  },
  ar: {
    title: "التصميم والاستشارات الهندسية المعمارية في الشارقة وعجمان",
    description:
      "تقدم صابر السر للاستشارات الهندسية خدمات التصميم المعماري وتخطيط المباني وتصميم الفلل والاستشارات الهندسية في الشارقة وعجمان والإمارات.",
    eyebrow: "الخدمات الهندسية",
    heading: "التصميم المعماري والاستشارات الهندسية في الشارقة وعجمان",
    lead:
      "خدمات التصميم المعماري والاستشارات الهندسية للمشاريع السكنية والتجارية والصناعية في الشارقة وعجمان ومختلف أنحاء الإمارات.",
    servicesHeading: "خدمات الاستشارات الهندسية المعمارية",
    paragraphs: [
      "تأسست شركة صابر السر للاستشارات الهندسية عام 2001، وتقدم خدمات الاستشارات الهندسية المعمارية وتصميم المباني في الشارقة وعجمان ومختلف أنحاء الإمارات. تشمل خدماتنا تطوير الأفكار المعمارية، وتخطيط المباني، وتصميم الفلل السكنية والمباني التجارية والصناعية، وإعداد الواجهات المعمارية ومخططات التنفيذ التفصيلية.",
      "نطور حلولاً معمارية توازن بين الوظائف العملية والجماليات ومتطلبات الموقع وأنظمة البناء المعمول بها. ويشمل نهجنا تنسيق التصاميم المعمارية مع تخصصات الهندسة الإنشائية والمدنية والكهروميكانيكية (MEP) لدعم التخطيط المتكامل للمشاريع والاتساق الفني.",
      "من المفاهيم التصميمية الأولية إلى إعداد الوثائق الهندسية التفصيلية، ندعم المشاريع السكنية والتجارية والصناعية بحلول تصميم عملية تراعي متطلبات كل مشروع. وحسب نطاق أعمالنا، نساعد أيضاً في إعداد وتنسيق الوثائق المعمارية لتقديمها إلى الجهات المحلية المختصة.",
      "استكشفوا مشاريعنا في التصميم المعماري واكتشفوا كيف تدعم خدمات الاستشارات الهندسية التي نقدمها تطوير المباني في الشارقة وعجمان ومواقع أخرى في الإمارات.",
    ],
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      {
        question: "ما خدمات الاستشارات الهندسية المعمارية التي تقدمها صابر السر؟",
        answer:
          "تشمل الاستشارات الهندسية المعمارية تصميم المباني والتخطيط المعماري وتصميم الفلل وتخطيطات المباني التجارية والسكنية والواجهات المعمارية ووثائق التنفيذ، وذلك وفقاً لنطاق الخدمات الفعلي للشركة.",
      },
      {
        question: "هل تقدم صابر السر خدمات التصميم المعماري في الشارقة وعجمان؟",
        answer:
          "نعم. تقدم الشركة خدمات التصميم المعماري والاستشارات الهندسية للمشاريع في الشارقة وعجمان.",
      },
      {
        question: "هل تساعد الشركة في تقديم المعاملات إلى البلديات؟",
        answer:
          "عند إدراج ذلك ضمن نطاق المشروع، تساعد الشركة في إعداد الوثائق الهندسية وتنسيقها لتقديمها إلى الجهات المختصة.",
      },
    ],
    home: "الرئيسية",
    services: "الخدمات",
    breadcrumb: "مسار التنقل",
    areaServed: ["الشارقة", "عجمان", "الإمارات العربية المتحدة"],
    serviceName: "التصميم والاستشارات الهندسية المعمارية",
    serviceTypes: [
      "التصميم المعماري",
      "تخطيط المباني",
      "تصميم الفلل",
      "الاستشارات الهندسية",
    ],
  },
};

function ArchitecturalServicePage() {
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const content = pageContent[language];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: content.serviceName,
        serviceType: content.serviceTypes,
        provider: {
          "@type": "Organization",
          "@id": "https://www.sabirelsir.ae/#organization",
        },
        areaServed: content.areaServed,
        description: content.description,
        url: canonical,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: content.home,
            item: "https://www.sabirelsir.ae/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: content.services,
            item: "https://www.sabirelsir.ae/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: content.heading,
            item: canonical,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: content.faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <SEO
        title={content.title}
        description={content.description}
        canonical={canonical}
        language={language}
        structuredData={structuredData}
      />
      <div
        className="service-detail-page"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <PageIntro
          eyebrow={content.eyebrow}
          title={content.heading}
          description={content.lead}
        />
        <article className="site-page-content service-detail-content">
          <nav
            className="service-detail-breadcrumb"
            aria-label={content.breadcrumb}
          >
            <Link to="/">{content.home}</Link>
            <span aria-hidden="true"> / </span>
            <Link to="/services">{content.services}</Link>
            <span aria-hidden="true"> / </span>
            <span>{content.heading}</span>
          </nav>

          <section
            className="service-detail-section"
            aria-labelledby="architectural-services-heading"
          >
            <h2 id="architectural-services-heading">
              {content.servicesHeading}
            </h2>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section
            className="service-detail-section"
            aria-labelledby="architectural-faq-heading"
          >
            <h2 id="architectural-faq-heading">{content.faqTitle}</h2>
            <div className="service-detail-faq">
              {content.faqs.map(({ question, answer }) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </section>
        </article>
      </div>
    </>
  );
}

export default ArchitecturalServicePage;
