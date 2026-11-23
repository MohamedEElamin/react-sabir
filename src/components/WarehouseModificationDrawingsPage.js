import React from "react";
import Link from "./LocalizedLink";
import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import SEO from "./SEO";
import "../styles/ServiceDetail.css";

const englishCanonical =
  "https://www.sabirelsir.ae/services/warehouse-factory-workshop-modification-drawings-sharjah";
const arabicCanonical =
  "https://www.sabirelsir.ae/ar/warehouse-factory-workshop-modification-drawings-sharjah";

const arabicContent = {
  title: "مخططات تعديل المستودعات والمصانع والورش في الشارقة",
  description:
    "خدمات إعداد وتعديل المخططات الهندسية للمستودعات والمصانع والورش في الشارقة، مع تجهيز الوثائق اللازمة لمعاملات البلدية وSEWA والدفاع المدني.",
  heading: "إعداد مخططات تعديل المستودعات والمصانع والورش في الشارقة",
  lead:
    "خدمات إعداد وتنسيق المخططات والوثائق الهندسية للمشاريع الصناعية والتجارية في الشارقة وفق نطاق العمل ومتطلبات الجهات المختصة.",
  sectionHeading: "الاستشارات الهندسية للمشاريع الصناعية والتجارية",
  paragraphs: [
    "يقدم مكتب صابر السر للاستشارات الهندسية خدمات إعداد وتعديل المخططات الهندسية للمستودعات والمصانع وورش العمل في إمارة الشارقة، وفق متطلبات المشاريع والاشتراطات الفنية والتنظيمية للجهات المختصة. تشمل خدماتنا دعم المشاريع الصناعية والتجارية من خلال إعداد وتنسيق المخططات المعمارية والإنشائية والميكانيكية والكهربائية، بالإضافة إلى مخططات السلامة ومكافحة الحريق، بحسب طبيعة المشروع ونطاق العمل المتفق عليه.",
    "نساعد أصحاب المستودعات والمصانع والورش على تجهيز الوثائق والمخططات الهندسية اللازمة لمعاملات التعديل والتجديد وتغيير الاستخدام، مع مراعاة متطلبات بلدية الشارقة وهيئة كهرباء ومياه وغاز الشارقة (SEWA) والدفاع المدني، وفق اختصاص كل جهة ومتطلباتها المعمول بها.",
    "تشمل خدماتنا الهندسية، بحسب متطلبات المشروع، إعداد مخططات التعديل المعماري والإنشائي، وتنسيق أنظمة التهوية والتكييف والأعمال الكهربائية، وتجهيز مستندات السلامة والحماية من الحريق، بالإضافة إلى المساعدة في إجراءات التقديم ومتابعة الملاحظات الفنية مع الجهات المختصة.",
    "سواء كنت تخطط لتعديل مستودع قائم، أو تطوير مصنع، أو إعادة تنظيم ورشة صناعية، يوفر مكتب صابر السر للاستشارات الهندسية الدعم الفني اللازم لتجهيز المخططات والوثائق الهندسية وفق طبيعة المشروع والاشتراطات التنظيمية في إمارة الشارقة.",
    "للاستفسار عن خدمات إعداد مخططات تعديل المستودعات والمصانع والورش، تواصل معنا لمناقشة متطلبات مشروعك.",
  ],
  tableTitle: "خدمات تعديل المخططات الهندسية للمنشآت الصناعية في الشارقة",
  tableLabel: "خدمات تعديل المخططات الهندسية للمنشآت الصناعية في الشارقة",
  categoryColumn: "المعلومة",
  detailsColumn: "التفاصيل",
  rows: [
    {
      category: "اسم المكتب",
      details: "مكتب صابر السر للاستشارات الهندسية",
    },
    {
      category: "الخدمة الرئيسية",
      details: "إعداد وتعديل المخططات الهندسية",
    },
    {
      category: "الموقع المستهدف",
      details: "الشارقة، الإمارات العربية المتحدة",
    },
    {
      category: "أنواع المنشآت",
      details: "المستودعات، المصانع، الورش",
    },
    {
      category: "التخصصات",
      details: "المعماري، الإنشائي، الميكانيكي، الكهربائي",
    },
    {
      category: "الجهات ذات الصلة",
      details: "بلدية الشارقة، SEWA، الدفاع المدني",
    },
    {
      category: "أنواع المعاملات",
      details: "التعديل، التجديد، وتغيير الاستخدام",
    },
  ],
  faqTitle: "الأسئلة الشائعة",
  faqs: [
    {
      question: "هل يقدم مكتب صابر السر خدمات تعديل مخططات المستودعات في الشارقة؟",
      answer:
        "نعم، يقدم المكتب خدمات إعداد وتعديل المخططات الهندسية للمستودعات وفق طبيعة المشروع والمتطلبات الفنية والتنظيمية للجهات المختصة.",
    },
    {
      question: "هل يمكن إعداد مخططات تعديل المصانع وورش العمل؟",
      answer:
        "نعم، يمكن للمكتب تقديم خدمات إعداد وتنسيق المخططات الهندسية للمصانع والورش الصناعية، بما يتناسب مع طبيعة النشاط ومتطلبات المنشأة.",
    },
    {
      question: "ما أنواع المخططات المطلوبة لتعديل المستودعات والمصانع؟",
      answer:
        "تختلف المخططات المطلوبة حسب طبيعة التعديل والنشاط، وقد تشمل المخططات المعمارية والإنشائية والميكانيكية والكهربائية ومخططات السلامة ومكافحة الحريق.",
    },
    {
      question: "هل يساعد المكتب في الحصول على موافقات بلدية الشارقة؟",
      answer:
        "يمكن للمكتب المساعدة في إعداد وتنسيق المخططات والوثائق الهندسية اللازمة للتقديم إلى بلدية الشارقة، وفق نطاق العمل ومتطلبات المعاملة. ويظل إصدار الموافقة خاضعاً لقرار الجهة المختصة.",
    },
    {
      question: "هل يقدم المكتب خدمات موافقات SEWA؟",
      answer:
        "يمكن للمكتب المساعدة في تجهيز وتنسيق الوثائق والمخططات المتعلقة بالمتطلبات الكهربائية، وفق طبيعة المشروع ومتطلبات هيئة كهرباء ومياه وغاز الشارقة.",
    },
    {
      question: "هل يمكن تعديل استخدام المستودع إلى نشاط آخر؟",
      answer:
        "تعتمد إمكانية تعديل الاستخدام على طبيعة العقار والنشاط المقترح والاشتراطات التنظيمية وموافقة الجهات المختصة. ويمكن للمكتب المساعدة في تجهيز المستندات الهندسية اللازمة للطلب.",
    },
    {
      question: "كيف يمكن طلب خدمة تعديل المخططات الهندسية في الشارقة؟",
      answer:
        "يمكنك التواصل مع مكتب صابر السر للاستشارات الهندسية وتقديم معلومات عن المنشأة ونوع التعديل المطلوب، ليتم تحديد المتطلبات الهندسية والوثائق اللازمة للمشروع.",
    },
  ],
  home: "الرئيسية",
  services: "الخدمات",
  breadcrumb: "مسار التنقل",
  serviceName: "إعداد مخططات تعديل المستودعات والمصانع والورش في الشارقة",
  serviceTypes: [
    "إعداد مخططات تعديل المستودعات",
    "تعديل مخططات المصانع",
    "تعديل مخططات الورش",
    "تنسيق المخططات الهندسية",
  ],
};

const englishContent = {
  title: "Warehouse Modification Drawings | Sharjah",
  description:
    "Engineering drawing and documentation services for warehouse, factory, and workshop modifications in Sharjah, coordinated for relevant authority requirements.",
  heading: "Warehouse, Factory & Workshop Modification Drawings in Sharjah",
  lead:
    "Engineering drawings and documentation for industrial and commercial modifications in Sharjah, prepared according to project scope and applicable authority requirements.",
  sectionHeading:
    "Engineering Consultancy for Industrial and Commercial Projects",
  paragraphs: [
    "Sabir Elsir Engineering Consultants prepares and coordinates engineering drawings for warehouses, factories, and workshops in Sharjah according to project needs and applicable technical and regulatory requirements. Depending on the project and agreed scope, this may include architectural, structural, mechanical, electrical, and fire-safety drawings.",
    "We help owners prepare drawings and documents for alterations, renewals, and changes of use, taking account of Sharjah Municipality, SEWA, and Civil Defense requirements as applicable to each authority's responsibilities and the project.",
    "Depending on the project requirements, services may include architectural and structural modification drawings, ventilation and air-conditioning coordination, electrical plans, and fire-safety documentation, as well as assistance coordinating submissions and responses to technical comments.",
    "Whether you are modifying an existing warehouse, developing a factory, or reorganizing an industrial workshop, our team can help prepare the engineering drawings and documents required for the project, subject to its scope and the applicable Sharjah regulations.",
    "Contact us to discuss the requirements for warehouse, factory, or workshop modification drawings.",
  ],
  tableTitle:
    "Engineering Drawing Modification Services for Industrial Facilities in Sharjah",
  tableLabel:
    "Engineering drawing modification services for industrial facilities in Sharjah",
  categoryColumn: "Information",
  detailsColumn: "Details",
  rows: [
    { category: "Consultancy", details: "Sabir Elsir Engineering Consultants" },
    {
      category: "Main service",
      details: "Preparation and modification of engineering drawings",
    },
    { category: "Location", details: "Sharjah, United Arab Emirates" },
    { category: "Facility types", details: "Warehouses, factories, and workshops" },
    {
      category: "Disciplines",
      details: "Architectural, structural, mechanical, and electrical",
    },
    {
      category: "Relevant authorities",
      details: "Sharjah Municipality, SEWA, and Civil Defense, as applicable",
    },
    { category: "Application types", details: "Alteration, renewal, and change of use" },
  ],
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "Do you prepare warehouse modification drawings in Sharjah?",
      answer:
        "Yes. We prepare and coordinate engineering drawings for warehouse modifications according to the project scope and the applicable technical and regulatory requirements.",
    },
    {
      question: "Can you prepare drawings for factory and workshop modifications?",
      answer:
        "Yes. Drawing preparation and coordination for factories and industrial workshops can be scoped according to the facility's activity and project requirements.",
    },
    {
      question: "Which drawings may be needed for warehouse or factory modifications?",
      answer:
        "The required drawings depend on the proposed modification and activity. They may include architectural, structural, mechanical, electrical, and fire-safety drawings.",
    },
    {
      question: "Can you help coordinate Sharjah Municipality approval submissions?",
      answer:
        "We can help prepare and coordinate the engineering drawings and documents for submission, according to the agreed scope and application requirements. The relevant authority makes the approval decision.",
    },
    {
      question: "Can you help coordinate SEWA requirements?",
      answer:
        "We can help coordinate utility-related drawings and documents when SEWA review or approval applies. Requirements depend on the project and the services requested.",
    },
    {
      question: "Can an existing warehouse use be changed to another activity?",
      answer:
        "A change of use depends on the property, proposed activity, applicable regulations, and approvals from the relevant authorities. We can help prepare engineering documents within the agreed project scope.",
    },
    {
      question: "How can I request engineering drawing modification services in Sharjah?",
      answer:
        "Contact Sabir Elsir Engineering Consultants with details about the facility and proposed modification so the project requirements and necessary engineering documents can be reviewed.",
    },
  ],
  home: "Home",
  services: "Services",
  breadcrumb: "Breadcrumb",
  serviceName: "Warehouse, Factory & Workshop Modification Drawings",
  serviceTypes: [
    "Warehouse modification drawings",
    "Factory modification drawings",
    "Workshop modification drawings",
    "Engineering drawing coordination",
  ],
};

function WarehouseModificationDrawingsPage() {
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const isArabic = language === "ar";
  const content = isArabic ? arabicContent : englishContent;
  const canonical = isArabic ? arabicCanonical : englishCanonical;
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
        areaServed: ["Sharjah", "United Arab Emirates"],
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
        localized={false}
        alternateUrls={{
          en: englishCanonical,
          ar: arabicCanonical,
        }}
        structuredData={structuredData}
      />
      <div
        className="service-detail-page"
        dir={isArabic ? "rtl" : "ltr"}
        lang={language}
      >
        <PageIntro
          eyebrow={
            isArabic
              ? "الاستشارات الهندسية للمشاريع الصناعية والتجارية"
              : "Engineering consultancy for industrial and commercial projects"
          }
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
            aria-labelledby="industrial-modification-heading"
          >
            <h2 id="industrial-modification-heading">
              {content.sectionHeading}
            </h2>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
          <section
            className="service-detail-section"
            aria-labelledby="industrial-modification-table-heading"
          >
            <h2 id="industrial-modification-table-heading">
              {content.tableTitle}
            </h2>
            <div className="service-detail-table-wrapper">
              <table
                className="service-detail-table"
                aria-label={content.tableLabel}
              >
                <thead>
                  <tr>
                    <th scope="col">{content.categoryColumn}</th>
                    <th scope="col">{content.detailsColumn}</th>
                  </tr>
                </thead>
                <tbody>
                  {content.rows.map(({ category, details }) => (
                    <tr key={category}>
                      <th scope="row">{category}</th>
                      <td>{details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section
            className="service-detail-section"
            aria-labelledby="industrial-modification-faq-heading"
          >
            <h2 id="industrial-modification-faq-heading">
              {content.faqTitle}
            </h2>
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

export default WarehouseModificationDrawingsPage;
