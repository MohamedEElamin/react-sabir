import React from "react";
import Link from "./LocalizedLink";
import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import SEO from "./SEO";
import "../styles/ServiceDetail.css";

const canonical =
  "https://www.sabirelsir.ae/services/interior-design-consultancy";

const pageContent = {
  en: {
    title: "Interior Design Consultancy in Sharjah & Ajman",
    description:
      "Interior design consultancy, space planning, 3D visualization, and engineering coordination in Sharjah and Ajman.",
    eyebrow: "Interior Design Consultancy",
    heading:
      "Interior Design Consultancy & Engineering Services in Sharjah and Ajman",
    lead:
      "Interior design consultancy and engineering design services for residential, commercial, and hospitality projects in Sharjah, Ajman, and across the UAE.",
    sectionHeading: "Interior Design Consultancy Services",
    paragraphs: [
      "Sabir Elsir Engineering Consultants provides interior design consultancy and engineering design services for residential, commercial, and hospitality projects in Sharjah, Ajman, and across the UAE. Established in 2001, the company develops interior design solutions that combine functionality, aesthetics, spatial efficiency, and technical requirements.",
      "Our interior design services include space planning, interior layouts, design concepts, 3D visualization, material selection, and interior design documentation. Each design is developed to reflect the client's requirements while considering the building's architectural characteristics, intended use, and applicable regulations.",
      "We coordinate interior design requirements with architectural and MEP engineering disciplines to support the integration of lighting, electrical systems, ventilation, and other building services into the proposed interior spaces.",
      "From initial design concepts to detailed drawings and visualization, Sabir Elsir Engineering Consultants supports residential, commercial, and hospitality developments with practical interior design solutions tailored to each project's requirements.",
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        question:
          "What interior design services does Sabir Elsir Engineering Consultants provide?",
        answer:
          "Sabir Elsir Engineering Consultants provides interior design consultancy services, including space planning, interior layouts, design concepts, 3D visualization, material selection, and design documentation, depending on project requirements.",
      },
      {
        question:
          "Does Sabir Elsir provide interior design services in Sharjah and Ajman?",
        answer:
          "Yes. The company provides interior design consultancy for residential, commercial, and hospitality projects in Sharjah and Ajman.",
      },
      {
        question:
          "Does the company provide 3D interior design and visualization?",
        answer:
          "Yes. The company provides 3D visualization services where included in the project scope, helping clients visualize proposed interior layouts, materials, finishes, and design concepts.",
      },
      {
        question:
          "Does Sabir Elsir provide interior design for villas and commercial spaces?",
        answer:
          "The company supports interior design requirements for residential and commercial properties, developing design solutions according to the intended use of each space and the client's requirements.",
      },
      {
        question: "Does interior design consultancy include MEP coordination?",
        answer:
          "Where included in the agreed project scope, interior design requirements are coordinated with mechanical, electrical, and plumbing systems to support the integration of building services.",
      },
      {
        question:
          "How can I request interior design consultancy in Sharjah or Ajman?",
        answer:
          "You can contact Sabir Elsir Engineering Consultants through its website to discuss your project requirements and request an interior design consultation.",
      },
    ],
    home: "Home",
    services: "Services",
    breadcrumb: "Breadcrumb",
    areaServed: ["Sharjah", "Ajman", "United Arab Emirates"],
    serviceName: "Interior Design Consultancy",
    serviceTypes: [
      "Interior design consultancy",
      "Space planning",
      "3D visualization",
      "Interior design documentation",
      "MEP coordination",
    ],
  },
  ar: {
    title: "استشارات التصميم الداخلي في الشارقة وعجمان",
    description:
      "استشارات التصميم الداخلي وتخطيط المساحات والتصور ثلاثي الأبعاد والتنسيق الهندسي في الشارقة وعجمان.",
    eyebrow: "استشارات التصميم الداخلي",
    heading: "استشارات التصميم الداخلي والخدمات الهندسية في الشارقة وعجمان",
    lead:
      "استشارات التصميم الداخلي وخدمات التصميم الهندسي للمشاريع السكنية والتجارية والفندقية في الشارقة وعجمان ومختلف أنحاء الإمارات.",
    sectionHeading: "خدمات استشارات التصميم الداخلي",
    paragraphs: [
      "تقدم شركة صابر السر للاستشارات الهندسية خدمات استشارات التصميم الداخلي والتصميم الهندسي للمشاريع السكنية والتجارية والفندقية في الشارقة وعجمان ومختلف أنحاء الإمارات. ومنذ تأسيسها عام 2001، تطور الشركة حلولاً للتصميم الداخلي تجمع بين الوظائف العملية والجمال وكفاءة استغلال المساحات والمتطلبات الفنية.",
      "تشمل خدمات التصميم الداخلي تخطيط المساحات والتوزيعات الداخلية ومفاهيم التصميم والتصور ثلاثي الأبعاد واختيار المواد وإعداد وثائق التصميم الداخلي. ويُطور كل تصميم بما يعكس متطلبات العميل، مع مراعاة الخصائص المعمارية للمبنى والاستخدام المقصود واللوائح المعمول بها.",
      "ننسق متطلبات التصميم الداخلي مع التخصصات المعمارية والهندسية الكهروميكانيكية (MEP)، لدعم دمج الإضاءة والأنظمة الكهربائية والتهوية وغيرها من خدمات المباني ضمن المساحات الداخلية المقترحة.",
      "من مفاهيم التصميم الأولية إلى المخططات التفصيلية والتصورات، تدعم صابر السر للاستشارات الهندسية المشاريع السكنية والتجارية والفندقية بحلول عملية للتصميم الداخلي تراعي متطلبات كل مشروع.",
    ],
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      {
        question:
          "ما خدمات التصميم الداخلي التي تقدمها صابر السر للاستشارات الهندسية؟",
        answer:
          "تقدم صابر السر للاستشارات الهندسية خدمات استشارات التصميم الداخلي، بما في ذلك تخطيط المساحات والتوزيعات الداخلية ومفاهيم التصميم والتصور ثلاثي الأبعاد واختيار المواد ووثائق التصميم، وفقاً لمتطلبات المشروع.",
      },
      {
        question: "هل تقدم صابر السر خدمات التصميم الداخلي في الشارقة وعجمان؟",
        answer:
          "نعم. تقدم الشركة استشارات التصميم الداخلي للمشاريع السكنية والتجارية والفندقية في الشارقة وعجمان.",
      },
      {
        question: "هل تقدم الشركة خدمات التصميم الداخلي والتصور ثلاثي الأبعاد؟",
        answer:
          "نعم. تقدم الشركة خدمات التصور ثلاثي الأبعاد عند إدراجها ضمن نطاق المشروع، لمساعدة العملاء على تصور التوزيعات الداخلية والمواد والتشطيبات ومفاهيم التصميم المقترحة.",
      },
      {
        question: "هل تقدم صابر السر تصميماً داخلياً للفلل والمساحات التجارية؟",
        answer:
          "تدعم الشركة متطلبات التصميم الداخلي للعقارات السكنية والتجارية، وتطور حلولاً تصميمية وفق الاستخدام المقصود لكل مساحة ومتطلبات العميل.",
      },
      {
        question: "هل تشمل استشارات التصميم الداخلي تنسيق أنظمة MEP؟",
        answer:
          "عند إدراج ذلك ضمن نطاق المشروع المتفق عليه، يجري تنسيق متطلبات التصميم الداخلي مع الأنظمة الميكانيكية والكهربائية والصحية لدعم دمج خدمات المبنى.",
      },
      {
        question:
          "كيف يمكنني طلب استشارات التصميم الداخلي في الشارقة أو عجمان؟",
        answer:
          "يمكنك التواصل مع صابر السر للاستشارات الهندسية عبر الموقع الإلكتروني لمناقشة متطلبات مشروعك وطلب استشارة للتصميم الداخلي.",
      },
    ],
    home: "الرئيسية",
    services: "الخدمات",
    breadcrumb: "مسار التنقل",
    areaServed: ["الشارقة", "عجمان", "الإمارات العربية المتحدة"],
    serviceName: "استشارات التصميم الداخلي",
    serviceTypes: [
      "استشارات التصميم الداخلي",
      "تخطيط المساحات",
      "التصور ثلاثي الأبعاد",
      "وثائق التصميم الداخلي",
      "التنسيق الكهروميكانيكي",
    ],
  },
};

function InteriorDesignServicePage() {
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
            aria-labelledby="interior-design-heading"
          >
            <h2 id="interior-design-heading">{content.sectionHeading}</h2>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
          <section
            className="service-detail-section"
            aria-labelledby="interior-design-faq-heading"
          >
            <h2 id="interior-design-faq-heading">{content.faqTitle}</h2>
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

export default InteriorDesignServicePage;
