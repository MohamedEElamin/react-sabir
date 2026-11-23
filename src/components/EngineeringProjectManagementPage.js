import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import SEO from "./SEO";
import "../styles/ServiceDetail.css";

const canonical =
  "https://www.sabirelsir.ae/services/engineering-project-management";

const pageContent = {
  en: {
    title: "Engineering Project Management Consultancy in Sharjah & Ajman",
    description:
      "Sabir Elsir Engineering Consultants provides engineering project management, construction coordination, project monitoring, and consultancy services in Sharjah, Ajman, and across the UAE.",
    eyebrow: "Engineering Project Management Consultancy",
    heading:
      "Engineering Project Management Consultancy in Sharjah and Ajman",
    lead:
      "Engineering project management consultancy for residential, commercial, and industrial developments in Sharjah and Ajman.",
    sectionHeading: "Engineering Project Management Services",
    paragraphs: [
      "Sabir Elsir Engineering Consultants provides engineering project management consultancy for residential, commercial, and industrial developments in Sharjah and Ajman. Established in 2001, the company supports construction and development projects through coordinated engineering management, technical planning, and project monitoring tailored to each project's requirements.",
      "Our project management approach focuses on coordinating engineering activities, monitoring project progress, maintaining quality standards, and addressing technical and operational challenges throughout the project lifecycle. We work to align project activities with approved plans, agreed schedules, budget requirements, and applicable regulatory standards.",
      "Depending on the agreed project scope, our services may include project planning and scheduling, engineering coordination, construction progress monitoring, quality control, risk management, technical reporting, and coordination between project stakeholders.",
      "From initial project planning through execution and completion, Sabir Elsir Engineering Consultants provides structured engineering consultancy and project management support for developments in Sharjah and Ajman.",
    ],
    tableLabel: "Engineering project management services and descriptions",
    serviceColumn: "Service",
    descriptionColumn: "Description",
    serviceRows: [
      {
        service: "Project Planning",
        description:
          "Defining project activities, requirements, and implementation plans",
      },
      {
        service: "Project Scheduling",
        description: "Coordinating project timelines and milestones",
      },
      {
        service: "Engineering Coordination",
        description:
          "Coordinating architectural, structural, civil, and MEP disciplines",
      },
      {
        service: "Progress Monitoring",
        description: "Monitoring project progress against agreed plans",
      },
      {
        service: "Quality Control",
        description:
          "Monitoring compliance with applicable project quality requirements",
      },
      {
        service: "Risk Management",
        description: "Identifying and addressing potential project risks",
      },
      {
        service: "Technical Reporting",
        description: "Documenting project progress and technical issues",
      },
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        question:
          "What engineering project management services does Sabir Elsir provide?",
        answer:
          "Sabir Elsir Engineering Consultants provides engineering project management consultancy for construction and development projects. Depending on the project scope, services may include project planning, engineering coordination, progress monitoring, quality control, risk management, and technical reporting.",
      },
      {
        question:
          "Does Sabir Elsir provide project management consultancy in Sharjah and Ajman?",
        answer:
          "Yes. The company provides engineering consultancy and project management support for developments in Sharjah and Ajman, according to project requirements and service availability.",
      },
      {
        question: "What types of projects does the company manage?",
        answer:
          "The company supports residential, commercial, and industrial developments, providing project management and engineering coordination services appropriate to each project's requirements.",
      },
      {
        question:
          "Does project management consultancy include construction supervision?",
        answer:
          "Construction supervision may be included where specified in the agreed project scope. The responsibilities and extent of supervision depend on the project's contractual arrangements.",
      },
      {
        question:
          "How does engineering project management help control construction costs and schedules?",
        answer:
          "Project management supports cost and schedule control through planning, progress monitoring, coordination, and early identification of potential project risks. Actual results depend on project conditions, scope, and implementation.",
      },
      {
        question:
          "How can I request engineering project management consultancy in Sharjah or Ajman?",
        answer:
          "Contact Sabir Elsir Engineering Consultants through its website to discuss your development, project requirements, and engineering management needs.",
      },
    ],
    home: "Home",
    services: "Services",
    breadcrumb: "Breadcrumb",
    areaServed: ["Sharjah", "Ajman", "United Arab Emirates"],
    serviceName: "Engineering Project Management Consultancy",
    serviceTypes: [
      "Engineering project management",
      "Project planning and scheduling",
      "Engineering coordination",
      "Project monitoring",
      "Risk management",
    ],
  },
  ar: {
    title: "استشارات إدارة المشاريع الهندسية في الشارقة وعجمان",
    description:
      "تقدم صابر السر للاستشارات الهندسية خدمات إدارة المشاريع الهندسية وتنسيق أعمال البناء ومتابعة المشاريع والاستشارات في الشارقة وعجمان ومختلف أنحاء الإمارات.",
    eyebrow: "استشارات إدارة المشاريع الهندسية",
    heading: "استشارات إدارة المشاريع الهندسية في الشارقة وعجمان",
    lead:
      "استشارات إدارة المشاريع الهندسية للمشاريع السكنية والتجارية والصناعية في الشارقة وعجمان.",
    sectionHeading: "خدمات إدارة المشاريع الهندسية",
    paragraphs: [
      "تقدم شركة صابر السر للاستشارات الهندسية خدمات استشارات إدارة المشاريع الهندسية للمشاريع السكنية والتجارية والصناعية في الشارقة وعجمان. ومنذ تأسيسها عام 2001، تدعم الشركة مشاريع البناء والتطوير من خلال الإدارة الهندسية المنسقة والتخطيط الفني ومتابعة المشاريع بما يتناسب مع متطلبات كل مشروع.",
      "يركز نهجنا في إدارة المشاريع على تنسيق الأنشطة الهندسية ومتابعة تقدم المشروع والحفاظ على معايير الجودة ومعالجة التحديات الفنية والتشغيلية طوال دورة حياة المشروع. ونعمل على مواءمة أنشطة المشروع مع الخطط المعتمدة والجداول الزمنية المتفق عليها ومتطلبات الميزانية والمعايير التنظيمية المعمول بها.",
      "بحسب نطاق المشروع المتفق عليه، قد تشمل خدماتنا تخطيط المشروع وإعداد الجدول الزمني والتنسيق الهندسي ومتابعة تقدم أعمال البناء ومراقبة الجودة وإدارة المخاطر وإعداد التقارير الفنية والتنسيق بين الأطراف المعنية بالمشروع.",
      "من التخطيط الأولي للمشروع إلى التنفيذ والاستكمال، تقدم صابر السر للاستشارات الهندسية دعماً منظماً في الاستشارات الهندسية وإدارة المشاريع للتطويرات في الشارقة وعجمان.",
    ],
    tableLabel: "خدمات إدارة المشاريع الهندسية وأوصافها",
    serviceColumn: "الخدمة",
    descriptionColumn: "الوصف",
    serviceRows: [
      {
        service: "تخطيط المشاريع",
        description: "تحديد أنشطة المشروع ومتطلباته وخطط تنفيذه",
      },
      {
        service: "إعداد الجدول الزمني للمشروع",
        description: "تنسيق الجداول الزمنية للمشروع ومراحله الرئيسية",
      },
      {
        service: "التنسيق الهندسي",
        description: "تنسيق التخصصات المعمارية والإنشائية والمدنية والكهروميكانيكية",
      },
      {
        service: "متابعة التقدم",
        description: "متابعة تقدم المشروع وفق الخطط المتفق عليها",
      },
      {
        service: "مراقبة الجودة",
        description: "متابعة الالتزام بمتطلبات الجودة المعمول بها للمشروع",
      },
      {
        service: "إدارة المخاطر",
        description: "تحديد مخاطر المشروع المحتملة ومعالجتها",
      },
      {
        service: "التقارير الفنية",
        description: "توثيق تقدم المشروع والمسائل الفنية",
      },
    ],
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      {
        question: "ما خدمات إدارة المشاريع الهندسية التي تقدمها صابر السر؟",
        answer:
          "تقدم صابر السر للاستشارات الهندسية استشارات إدارة المشاريع الهندسية لمشاريع البناء والتطوير. وبحسب نطاق المشروع، قد تشمل الخدمات تخطيط المشروع والتنسيق الهندسي ومتابعة التقدم ومراقبة الجودة وإدارة المخاطر وإعداد التقارير الفنية.",
      },
      {
        question:
          "هل تقدم صابر السر استشارات إدارة المشاريع في الشارقة وعجمان؟",
        answer:
          "نعم. تقدم الشركة الاستشارات الهندسية ودعم إدارة المشاريع للتطويرات في الشارقة وعجمان، وفقاً لمتطلبات المشروع وتوافر الخدمة.",
      },
      {
        question: "ما أنواع المشاريع التي تديرها الشركة؟",
        answer:
          "تدعم الشركة المشاريع السكنية والتجارية والصناعية، وتقدم خدمات إدارة المشاريع والتنسيق الهندسي بما يتناسب مع متطلبات كل مشروع.",
      },
      {
        question: "هل تشمل استشارات إدارة المشاريع الإشراف على أعمال البناء؟",
        answer:
          "قد يشمل نطاق المشروع المتفق عليه الإشراف على أعمال البناء. وتعتمد مسؤوليات الإشراف ومداه على الترتيبات التعاقدية للمشروع.",
      },
      {
        question:
          "كيف تساعد إدارة المشاريع الهندسية في ضبط تكاليف البناء والجداول الزمنية؟",
        answer:
          "تدعم إدارة المشاريع ضبط التكاليف والجداول الزمنية من خلال التخطيط ومتابعة التقدم والتنسيق والتعرف المبكر على مخاطر المشروع المحتملة. وتعتمد النتائج الفعلية على ظروف المشروع ونطاقه وآلية تنفيذه.",
      },
      {
        question:
          "كيف يمكنني طلب استشارات إدارة المشاريع الهندسية في الشارقة أو عجمان؟",
        answer:
          "تواصل مع صابر السر للاستشارات الهندسية عبر الموقع الإلكتروني لمناقشة مشروعك ومتطلباته واحتياجاتك في الإدارة الهندسية.",
      },
    ],
    home: "الرئيسية",
    services: "الخدمات",
    breadcrumb: "مسار التنقل",
    areaServed: ["الشارقة", "عجمان", "الإمارات العربية المتحدة"],
    serviceName: "استشارات إدارة المشاريع الهندسية",
    serviceTypes: [
      "إدارة المشاريع الهندسية",
      "تخطيط المشاريع وإعداد الجداول الزمنية",
      "التنسيق الهندسي",
      "متابعة المشاريع",
      "إدارة المخاطر",
    ],
  },
};

function EngineeringProjectManagementPage() {
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
            aria-labelledby="project-management-heading"
          >
            <h2 id="project-management-heading">{content.sectionHeading}</h2>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
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
            aria-labelledby="project-management-faq-heading"
          >
            <h2 id="project-management-faq-heading">{content.faqTitle}</h2>
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

export default EngineeringProjectManagementPage;
