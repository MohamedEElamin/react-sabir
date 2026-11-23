import React from "react";
import Link from "./LocalizedLink";
import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import SEO from "./SEO";
import "../styles/ServiceDetail.css";

const canonical =
  "https://www.sabirelsir.ae/services/civil-engineering-consultancy";

const pageContent = {
  en: {
    title: "Civil Engineering Consultancy in Sharjah & Ajman",
    description:
      "Civil engineering consultancy for residential, commercial, and industrial projects in Sharjah and Ajman.",
    eyebrow: "Civil Engineering Consultancy",
    heading: "Civil Engineering Consultancy in Sharjah and Ajman",
    lead:
      "Civil design, technical coordination, and infrastructure planning for project-specific needs, where applicable.",
    sectionHeading: "Civil Engineering for Project Planning and Coordination",
    paragraphs: [
      "Sabir Elsir Engineering Consultants provides civil engineering consultancy services for residential, commercial, and industrial developments in Sharjah, Ajman, and across the UAE. Established in 2001, the company delivers engineering solutions tailored to project requirements, site conditions, and applicable local regulations.",
      "Our civil engineering services support the planning, design, and technical coordination of building and development projects, including infrastructure considerations where applicable. Working alongside architectural and structural engineering disciplines, we focus on practical solutions that consider functionality, safety, regulatory requirements, and construction needs.",
      "Our multidisciplinary approach supports project development from initial planning and engineering design through technical documentation and project coordination. Where included in the agreed scope, we also provide engineering supervision and coordinate relevant documentation for submission to the applicable local authorities.",
      "With experience across residential, commercial, and industrial developments, Sabir Elsir Engineering Consultants supports clients seeking professional civil engineering consultancy in Sharjah, Ajman, and other locations across the UAE.",
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        question:
          "What civil engineering services does Sabir Elsir Engineering Consultants provide?",
        answer:
          "Sabir Elsir Engineering Consultants provides civil engineering consultancy and related engineering services for residential, commercial, and industrial developments. Services are tailored to project requirements and may include civil engineering design, technical documentation, and coordination with other engineering disciplines.",
      },
      {
        question:
          "Does Sabir Elsir provide civil engineering consultancy in Sharjah and Ajman?",
        answer:
          "Yes. Sabir Elsir Engineering Consultants provides engineering consultancy services for projects in Sharjah and Ajman, supporting clients with professional engineering solutions based on their project requirements.",
      },
      {
        question: "Does the company provide structural engineering services?",
        answer:
          "The company coordinates civil and structural engineering requirements as part of its multidisciplinary approach. Specific structural engineering design services depend on the agreed project scope.",
      },
      {
        question:
          "Does Sabir Elsir assist with engineering approvals and municipality submissions?",
        answer:
          "Where included in the agreed scope, the company assists with preparing and coordinating engineering documentation for submission to relevant local authorities. Final approvals are subject to the applicable authority's requirements.",
      },
      {
        question: "What types of projects does the company undertake?",
        answer:
          "The company supports residential, commercial, and industrial developments, with engineering consultancy solutions tailored to the nature and technical requirements of each project.",
      },
      {
        question:
          "How can I request civil engineering consultancy services?",
        answer:
          "You can contact Sabir Elsir Engineering Consultants through its website to discuss your project, explain your requirements, and request a consultation.",
      },
    ],
    home: "Home",
    services: "Services",
    breadcrumb: "Breadcrumb",
    areaServed: ["Sharjah", "Ajman", "United Arab Emirates"],
    serviceName: "Civil Engineering Consultancy",
    serviceTypes: [
      "Civil engineering consultancy",
      "Civil design",
      "Infrastructure planning",
      "Technical coordination",
    ],
  },
  ar: {
    title: "الاستشارات الهندسية المدنية في الشارقة وعجمان",
    description:
      "تقدم صابر السر للاستشارات الهندسية خدمات الاستشارات الهندسية المدنية للمشاريع السكنية والتجارية والصناعية في الشارقة وعجمان ومختلف أنحاء الإمارات.",
    eyebrow: "استشارات الهندسة المدنية",
    heading: "استشارات هندسية مدنية في الشارقة وعجمان",
    lead:
      "التصميم المدني والتنسيق الفني وتخطيط البنية التحتية وفق احتياجات كل مشروع، عند الاقتضاء.",
    sectionHeading: "الهندسة المدنية لتخطيط المشاريع والتنسيق الفني",
    paragraphs: [
      "تقدم شركة صابر السر للاستشارات الهندسية خدمات الاستشارات الهندسية المدنية للمشاريع السكنية والتجارية والصناعية في الشارقة وعجمان ومختلف أنحاء الإمارات. ومنذ تأسيسها عام 2001، تقدم الشركة حلولاً هندسية تراعي متطلبات المشروع وظروف الموقع واللوائح المحلية المعمول بها.",
      "تدعم خدماتنا المدنية تخطيط مشاريع المباني والتطوير وتصميمها والتنسيق الفني لها، بما في ذلك اعتبارات البنية التحتية عند الاقتضاء. ونعمل بالتنسيق مع تخصصات الهندسة المعمارية والإنشائية، مع التركيز على حلول عملية تراعي الوظائف والسلامة والمتطلبات التنظيمية واحتياجات التنفيذ.",
      "يدعم نهجنا متعدد التخصصات تطوير المشروع بدءاً من التخطيط الأولي والتصميم الهندسي، مروراً بإعداد الوثائق الفنية وتنسيق المشروع. وعند إدراج ذلك ضمن نطاق العمل المتفق عليه، نقدم أيضاً الإشراف الهندسي ونتولى تنسيق الوثائق ذات الصلة لتقديمها إلى الجهات المحلية المختصة.",
      "ومن خلال خبرتنا في مشاريع سكنية وتجارية وصناعية، ندعم العملاء الباحثين عن استشارات هندسية مدنية في الشارقة وعجمان ومواقع أخرى في الإمارات.",
    ],
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      {
        question: "ما خدمات الهندسة المدنية التي تقدمها صابر السر للاستشارات الهندسية؟",
        answer:
          "تقدم صابر السر للاستشارات الهندسية خدمات الاستشارات الهندسية المدنية والخدمات الهندسية ذات الصلة للمشاريع السكنية والتجارية والصناعية. وتُحدد الخدمات وفق متطلبات المشروع، وقد تشمل التصميم الهندسي المدني والوثائق الفنية والتنسيق مع التخصصات الهندسية الأخرى.",
      },
      {
        question: "هل تقدم صابر السر استشارات هندسية مدنية في الشارقة وعجمان؟",
        answer:
          "نعم. تقدم صابر السر للاستشارات الهندسية خدمات الاستشارات الهندسية للمشاريع في الشارقة وعجمان، وتدعم العملاء بحلول هندسية مهنية وفقاً لمتطلبات مشاريعهم.",
      },
      {
        question: "هل تقدم الشركة خدمات الهندسة الإنشائية؟",
        answer:
          "تنسق الشركة متطلبات الهندسة المدنية والإنشائية ضمن نهجها متعدد التخصصات. وتعتمد خدمات التصميم الإنشائي المحددة على نطاق العمل المتفق عليه.",
      },
      {
        question: "هل تساعد صابر السر في الاعتمادات الهندسية وتقديم المعاملات للبلديات؟",
        answer:
          "عند إدراج ذلك ضمن نطاق العمل المتفق عليه، تساعد الشركة في إعداد الوثائق الهندسية وتنسيقها لتقديمها إلى الجهات المحلية المختصة. ويخضع الاعتماد النهائي لمتطلبات الجهة المختصة.",
      },
      {
        question: "ما أنواع المشاريع التي تنفذها الشركة؟",
        answer:
          "تدعم الشركة المشاريع السكنية والتجارية والصناعية، وتقدم حلولاً للاستشارات الهندسية تراعي طبيعة كل مشروع ومتطلباته الفنية.",
      },
      {
        question: "كيف يمكنني طلب خدمات الاستشارات الهندسية المدنية؟",
        answer:
          "يمكنك التواصل مع صابر السر للاستشارات الهندسية عبر الموقع الإلكتروني لمناقشة مشروعك وشرح متطلباتك وطلب استشارة.",
      },
    ],
    home: "الرئيسية",
    services: "الخدمات",
    breadcrumb: "مسار التنقل",
    areaServed: ["الشارقة", "عجمان", "الإمارات العربية المتحدة"],
    serviceName: "الاستشارات الهندسية المدنية",
    serviceTypes: [
      "الاستشارات الهندسية المدنية",
      "التصميم المدني",
      "تخطيط البنية التحتية",
      "التنسيق الفني",
    ],
  },
};

function CivilEngineeringServicePage() {
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
            aria-labelledby="civil-engineering-heading"
          >
            <h2 id="civil-engineering-heading">{content.sectionHeading}</h2>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
          <section
            className="service-detail-section"
            aria-labelledby="civil-engineering-faq-heading"
          >
            <h2 id="civil-engineering-faq-heading">{content.faqTitle}</h2>
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

export default CivilEngineeringServicePage;
