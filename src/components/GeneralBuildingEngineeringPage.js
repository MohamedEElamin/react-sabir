import React from "react";
import Link from "./LocalizedLink";
import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import SEO from "./SEO";
import "../styles/ServiceDetail.css";

const canonical =
  "https://www.sabirelsir.ae/services/general-building-engineering-consultancy";

const pageContent = {
  en: {
    title: "General Building Engineering Consultancy in Sharjah & Ajman",
    description:
      "Building engineering consultancy, architectural planning, design coordination, and supervision in Sharjah and Ajman.",
    eyebrow: "General Building Engineering Consultancy",
    heading: "General Building Engineering Consultancy in Sharjah and Ajman",
    lead:
      "General building engineering consultancy for residential, commercial, and mixed-use developments in Sharjah, Ajman, and across the UAE.",
    sectionHeading: "General Building Engineering Consultancy Services",
    paragraphs: [
      "Sabir Elsir Engineering Consultants provides general building engineering consultancy for residential, commercial, and mixed-use developments in Sharjah, Ajman, and across the UAE. Established in 2001, the company supports building projects through multidisciplinary engineering services tailored to project requirements, site conditions, and applicable local regulations.",
      "Our building engineering consultancy covers architectural planning, building design coordination, structural engineering requirements, and technical documentation. By coordinating different engineering disciplines, we aim to develop practical building solutions that consider functionality, safety, construction requirements, and regulatory compliance.",
      "Depending on the agreed project scope, our services may also include engineering supervision, coordination of architectural and MEP requirements, and preparation of technical documentation for submission to relevant local authorities.",
      "From initial planning and design development to construction-related engineering support, Sabir Elsir Engineering Consultants provides consultancy solutions for building developments in Sharjah, Ajman, and other locations across the UAE.",
    ],
    tableTitle: "General Building Engineering Services",
    tableLabel: "General building engineering services and descriptions",
    serviceColumn: "Service category",
    descriptionColumn: "Description",
    serviceRows: [
      {
        service: "Architectural Planning",
        description:
          "Building layouts and architectural design development",
      },
      {
        service: "Building Design Coordination",
        description:
          "Coordination between architectural and engineering disciplines",
      },
      {
        service: "Structural Engineering",
        description:
          "Structural design and technical coordination, where provided",
      },
      {
        service: "Civil Engineering",
        description: "Civil engineering requirements for building developments",
      },
      {
        service: "MEP Coordination",
        description:
          "Integration of mechanical, electrical, and plumbing requirements",
      },
      {
        service: "Engineering Supervision",
        description:
          "Technical monitoring and supervision, where contracted",
      },
      {
        service: "Technical Documentation",
        description: "Engineering drawings and project documentation",
      },
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        question:
          "What general building engineering consultancy services does Sabir Elsir provide?",
        answer:
          "Sabir Elsir Engineering Consultants provides building engineering consultancy for residential, commercial, and mixed-use developments. Depending on project requirements, services may include architectural planning, building design coordination, structural engineering coordination, technical documentation, and engineering supervision.",
      },
      {
        question:
          "Does Sabir Elsir provide building engineering consultancy in Sharjah and Ajman?",
        answer:
          "Yes. The company provides engineering consultancy services for building developments in Sharjah and Ajman, according to project requirements and service availability.",
      },
      {
        question: "What types of buildings does the company work with?",
        answer:
          "The company supports different building categories, including residential, commercial, and mixed-use developments. Consultancy services are tailored to each project's design, technical, and regulatory requirements.",
      },
      {
        question:
          "Does general building engineering consultancy include structural design?",
        answer:
          "Structural engineering requirements can form part of a building consultancy project where included in the company's agreed scope. The specific structural design responsibilities depend on the project requirements and contractual arrangements.",
      },
      {
        question: "Does Sabir Elsir provide construction supervision?",
        answer:
          "Engineering supervision may be provided where included in the agreed project scope. The scope of supervision depends on the project's requirements and applicable contractual arrangements.",
      },
      {
        question:
          "How can I request general building engineering consultancy in Sharjah or Ajman?",
        answer:
          "You can contact Sabir Elsir Engineering Consultants through its website to discuss your building project, technical requirements, and consultancy needs.",
      },
    ],
    home: "Home",
    services: "Services",
    breadcrumb: "Breadcrumb",
    areaServed: ["Sharjah", "Ajman", "United Arab Emirates"],
    serviceName: "General Building Engineering Consultancy",
    serviceTypes: [
      "General building engineering consultancy",
      "Architectural planning",
      "Building design coordination",
      "Structural engineering",
      "Civil engineering",
      "MEP coordination",
      "Engineering supervision",
      "Technical documentation",
    ],
  },
  ar: {
    title: "استشارات هندسة المباني العامة في الشارقة وعجمان",
    description:
      "تقدم صابر السر للاستشارات الهندسية استشارات هندسة المباني والتخطيط المعماري وتنسيق التصاميم والإشراف الهندسي في الشارقة وعجمان ومختلف أنحاء الإمارات.",
    eyebrow: "استشارات هندسة المباني العامة",
    heading: "استشارات هندسة المباني العامة في الشارقة وعجمان",
    lead:
      "استشارات هندسة المباني العامة للمشاريع السكنية والتجارية ومتعددة الاستخدامات في الشارقة وعجمان ومختلف أنحاء الإمارات.",
    sectionHeading: "خدمات استشارات هندسة المباني العامة",
    paragraphs: [
      "تقدم شركة صابر السر للاستشارات الهندسية استشارات هندسة المباني العامة للمشاريع السكنية والتجارية ومتعددة الاستخدامات في الشارقة وعجمان ومختلف أنحاء الإمارات. ومنذ تأسيسها عام 2001، تدعم الشركة مشاريع المباني بخدمات هندسية متعددة التخصصات تراعي متطلبات المشروع وظروف الموقع واللوائح المحلية المعمول بها.",
      "تشمل استشارات هندسة المباني التخطيط المعماري وتنسيق تصميم المباني ومتطلبات الهندسة الإنشائية والوثائق الفنية. ومن خلال تنسيق التخصصات الهندسية المختلفة، نعمل على تطوير حلول عملية للمباني تراعي الوظائف والسلامة ومتطلبات التنفيذ والامتثال التنظيمي.",
      "وبحسب نطاق العمل المتفق عليه، قد تشمل خدماتنا أيضاً الإشراف الهندسي وتنسيق المتطلبات المعمارية والكهروميكانيكية وإعداد الوثائق الفنية لتقديمها إلى الجهات المحلية المختصة.",
      "من التخطيط الأولي وتطوير التصميم إلى الدعم الهندسي المتعلق بالتنفيذ، تقدم صابر السر للاستشارات الهندسية حلولاً استشارية لمشاريع المباني في الشارقة وعجمان ومواقع أخرى في الإمارات.",
    ],
    tableTitle: "خدمات هندسة المباني العامة",
    tableLabel: "خدمات هندسة المباني العامة وأوصافها",
    serviceColumn: "فئة الخدمة",
    descriptionColumn: "الوصف",
    serviceRows: [
      {
        service: "التخطيط المعماري",
        description: "مخططات المباني وتطوير التصميم المعماري",
      },
      {
        service: "تنسيق تصميم المباني",
        description: "التنسيق بين التخصصات المعمارية والهندسية",
      },
      {
        service: "الهندسة الإنشائية",
        description: "التصميم الإنشائي والتنسيق الفني عند تقديمهما",
      },
      {
        service: "الهندسة المدنية",
        description: "متطلبات الهندسة المدنية لمشاريع المباني",
      },
      {
        service: "التنسيق الكهروميكانيكي",
        description: "دمج متطلبات الأنظمة الميكانيكية والكهربائية والصحية",
      },
      {
        service: "الإشراف الهندسي",
        description: "المتابعة الفنية والإشراف عند تضمينهما في التعاقد",
      },
      {
        service: "الوثائق الفنية",
        description: "المخططات الهندسية ووثائق المشروع",
      },
    ],
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      {
        question:
          "ما خدمات استشارات هندسة المباني العامة التي تقدمها صابر السر؟",
        answer:
          "تقدم صابر السر للاستشارات الهندسية استشارات هندسة المباني للمشاريع السكنية والتجارية ومتعددة الاستخدامات. وبحسب متطلبات المشروع، قد تشمل الخدمات التخطيط المعماري وتنسيق تصميم المباني والتنسيق الإنشائي والوثائق الفنية والإشراف الهندسي.",
      },
      {
        question:
          "هل تقدم صابر السر استشارات هندسة المباني في الشارقة وعجمان؟",
        answer:
          "نعم. تقدم الشركة خدمات الاستشارات الهندسية لمشاريع المباني في الشارقة وعجمان، وفقاً لمتطلبات المشروع وتوافر الخدمة.",
      },
      {
        question: "ما أنواع المباني التي تعمل عليها الشركة؟",
        answer:
          "تدعم الشركة فئات مختلفة من المباني، بما في ذلك المشاريع السكنية والتجارية ومتعددة الاستخدامات. وتُصمم الخدمات الاستشارية بما يتناسب مع متطلبات التصميم والجوانب الفنية والتنظيمية لكل مشروع.",
      },
      {
        question: "هل تشمل استشارات هندسة المباني العامة التصميم الإنشائي؟",
        answer:
          "يمكن أن تشمل استشارات المباني متطلبات الهندسة الإنشائية عند إدراجها ضمن نطاق العمل المتفق عليه. وتعتمد مسؤوليات التصميم الإنشائي المحددة على متطلبات المشروع والترتيبات التعاقدية.",
      },
      {
        question: "هل تقدم صابر السر خدمات الإشراف على أعمال البناء؟",
        answer:
          "قد تقدم الشركة الإشراف الهندسي عند إدراجه ضمن نطاق المشروع المتفق عليه. ويعتمد نطاق الإشراف على متطلبات المشروع والترتيبات التعاقدية المعمول بها.",
      },
      {
        question:
          "كيف يمكنني طلب استشارات هندسة المباني العامة في الشارقة أو عجمان؟",
        answer:
          "يمكنك التواصل مع صابر السر للاستشارات الهندسية عبر الموقع الإلكتروني لمناقشة مشروع المبنى ومتطلباته الفنية واحتياجاتك الاستشارية.",
      },
    ],
    home: "الرئيسية",
    services: "الخدمات",
    breadcrumb: "مسار التنقل",
    areaServed: ["الشارقة", "عجمان", "الإمارات العربية المتحدة"],
    serviceName: "استشارات هندسة المباني العامة",
    serviceTypes: [
      "استشارات هندسة المباني العامة",
      "التخطيط المعماري",
      "تنسيق تصميم المباني",
      "الهندسة الإنشائية",
      "الهندسة المدنية",
      "التنسيق الكهروميكانيكي",
      "الإشراف الهندسي",
      "الوثائق الفنية",
    ],
  },
};

function GeneralBuildingEngineeringPage() {
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
            aria-labelledby="general-building-consultancy-heading"
          >
            <h2 id="general-building-consultancy-heading">
              {content.sectionHeading}
            </h2>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
          <section
            className="service-detail-section"
            aria-labelledby="general-building-services-heading"
          >
            <h2 id="general-building-services-heading">{content.tableTitle}</h2>
            <div className="service-detail-table-wrapper">
              <table
                className="service-detail-table"
                aria-label={content.tableLabel}
              >
                <thead>
                  <tr>
                    <th scope="col">{content.serviceColumn}</th>
                    <th scope="col">{content.descriptionColumn}</th>
                  </tr>
                </thead>
                <tbody>
                  {content.serviceRows.map(({ service, description }) => (
                    <tr key={service}>
                      <th scope="row">{service}</th>
                      <td>{description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section
            className="service-detail-section"
            aria-labelledby="general-building-faq-heading"
          >
            <h2 id="general-building-faq-heading">{content.faqTitle}</h2>
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

export default GeneralBuildingEngineeringPage;
