import React from "react";
import Link from "./LocalizedLink";
import { useTranslation } from "react-i18next";
import SEO from "./SEO";
import "../styles/FAQ.css";

const faqContent = {
  en: {
    title: "Engineering Services FAQ | Sabir Elsir Consultants",
    description:
      "Answers about architectural and interior design, 3D visualization, MEP, Sharjah Municipality and SEWA, Civil Defense, supervision, fees, and service areas.",
    eyebrow: "FAQ",
    heading: "Frequently Asked Questions About Our Engineering Services",
    intro:
      "Find answers to common questions about Sabir Elsir Engineering Consultants, including architectural design, interior design, 3D visualization, engineering consultancy, municipality approvals, project timelines, and consultancy fees in Sharjah, Ajman, the UAE, and Sudan.",
    sections: [
      {
        title: "Design and consultancy services",
        questions: [
          {
            question: "What design and engineering services do you provide?",
            answer:
              "Services include architectural design, interior design concepts and 3D visualization, civil and structural engineering, and mechanical, electrical, and plumbing (MEP) engineering. Project consultation, coordination, and construction supervision are available according to the agreed project scope.",
          },
          {
            question: "What is included in your MEP engineering services?",
            answer:
              "MEP covers mechanical, electrical, and plumbing engineering. The design documents and coordination required depend on the building use, project requirements, and agreed scope; MEP layouts are coordinated with the architectural and structural design.",
          },
          {
            question:
              "Is construction supervision included with design or project consultation?",
            answer:
              "Not automatically. Construction supervision is included only when it is specified in the agreed scope. The proposal should define the supervision responsibilities and extent of service for the project.",
          },
        ],
      },
      {
        title: "Municipality and authority approvals",
        questions: [
          {
            question:
              "How do you support Sharjah Municipality building approvals?",
            answer:
              "We support the preparation and coordination of architectural and engineering drawings and submission documents for the applicable approval process. Sharjah Municipality's required documents and reviews depend on the plot, building use, project scope, and current regulations. Approval is issued by the relevant authority and is not guaranteed by preparing or submitting documents.",
          },
          {
            question: "What is involved in coordinating approvals with SEWA?",
            answer:
              "For projects in Sharjah, we coordinate the relevant utility drawings and documents with the Sharjah Electricity, Water and Gas Authority (SEWA) when its review or service approval applies. Requirements depend on the site, requested utility services, and project; SEWA's review is separate from the municipality's building approval.",
          },
          {
            question: "When are Civil Defense approvals required?",
            answer:
              "Civil Defense review may be required for fire and life-safety matters, depending on the building use, project details, and applicable authority requirements. Where required, the relevant plans and documents can be coordinated for review. The authority determines the applicable requirements and approval.",
          },
        ],
      },
      {
        title: "Locations, timelines, and fees",
        questions: [
          {
            question:
              "Where are your engineering consultancy services available?",
            answer:
              "The company serves projects in Sharjah, Ajman, and surrounding areas in the UAE, as well as Khartoum and surrounding areas in Sudan. Available services and authority procedures depend on the project's location and agreed scope.",
          },
          {
            question:
              "How are project timelines and consultancy fees determined?",
            answer:
              "There is no single timeline or fee for every project. Both depend on the location, building type and area, number of floors, required design disciplines, requested services (including whether supervision is included), and authority review times. A project-specific estimate can be prepared after reviewing these details.",
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
      "إجابات حول التصميم وMEP واعتمادات بلدية الشارقة ومتطلبات SEWA والدفاع المدني والإشراف ورسوم الاستشارات والخدمات في الإمارات والسودان.",
    eyebrow: "الأسئلة الشائعة",
    heading: "الأسئلة الشائعة حول خدماتنا الهندسية",
    intro:
      "اعثر على إجابات للأسئلة الشائعة حول صابر السر للاستشارات الهندسية، بما في ذلك التصميم المعماري والداخلي والتصور ثلاثي الأبعاد والاستشارات الهندسية وموافقات البلدية ومدد المشاريع ورسوم الاستشارات في الشارقة وعجمان والإمارات والسودان.",
    sections: [
      {
        title: "خدمات التصميم والاستشارات",
        questions: [
          {
            question: "ما خدمات التصميم والهندسة التي تقدمونها؟",
            answer:
              "تشمل الخدمات التصميم المعماري، وأفكار التصميم الداخلي والتصور ثلاثي الأبعاد، والهندسة المدنية والإنشائية، وهندسة الميكانيكا والكهرباء والسباكة (MEP). كما تتوفر استشارات المشاريع وتنسيقها والإشراف على التنفيذ وفق نطاق العمل المتفق عليه.",
          },
          {
            question: "ما الذي تشمل عليه خدمات هندسة MEP؟",
            answer:
              "تشمل MEP تخصصات الميكانيكا والكهرباء والسباكة. وتتحدد وثائق التصميم والتنسيق المطلوبة بحسب استخدام المبنى ومتطلبات المشروع ونطاق العمل المتفق عليه، مع تنسيق مخططات هذه التخصصات مع التصميمين المعماري والإنشائي.",
          },
          {
            question: "هل يشمل عقد التصميم أو الاستشارة الإشراف على التنفيذ؟",
            answer:
              "ليس تلقائياً. يُقدّم الإشراف على التنفيذ عندما يكون منصوصاً عليه في نطاق العمل المتفق عليه، وينبغي أن يحدد العرض مسؤوليات الإشراف ومدى الخدمة للمشروع.",
          },
        ],
      },
      {
        title: "موافقات البلدية والجهات المختصة",
        questions: [
          {
            question: "كيف تدعمون إجراءات موافقات بلدية الشارقة؟",
            answer:
              "ندعم إعداد وتنسيق المخططات المعمارية والهندسية ومستندات التقديم ضمن إجراءات الموافقة المعمول بها. وتتوقف المستندات والمراجعات المطلوبة لدى بلدية الشارقة على قطعة الأرض واستخدام المبنى ونطاق المشروع واللوائح السارية. تصدر الموافقة عن الجهة المختصة، ولا يضمن إعداد المستندات أو تقديمها صدور الموافقة.",
          },
          {
            question: "ما الذي يشمله تنسيق الموافقات مع SEWA؟",
            answer:
              "في مشاريع الشارقة، ننسق المخططات والمستندات المتعلقة بالخدمات مع هيئة كهرباء ومياه وغاز الشارقة (SEWA) عندما تكون مراجعتها أو موافقتها مطلوبة. وتعتمد المتطلبات على الموقع والخدمات المطلوبة وطبيعة المشروع؛ كما أن مراجعة SEWA منفصلة عن موافقة البلدية على البناء.",
          },
          {
            question: "متى تكون موافقات الدفاع المدني مطلوبة؟",
            answer:
              "قد تلزم مراجعة الدفاع المدني لمتطلبات السلامة من الحريق وسلامة الأرواح بحسب استخدام المبنى وتفاصيل المشروع ومتطلبات الجهات المختصة. وعند انطباق ذلك، يمكن تنسيق المخططات والمستندات اللازمة للمراجعة. وتحدد الجهة المختصة المتطلبات والموافقة.",
          },
        ],
      },
      {
        title: "مناطق الخدمة والمدد الزمنية والتكاليف",
        questions: [
          {
            question: "أين تتوفر خدمات الاستشارات الهندسية؟",
            answer:
              "تخدم الشركة المشاريع في الشارقة وعجمان والمناطق المحيطة بهما في الإمارات، وكذلك في الخرطوم والمناطق المحيطة بها في السودان. وتتحدد الخدمات المتاحة وإجراءات الجهات المختصة بحسب موقع المشروع ونطاق العمل المتفق عليه.",
          },
          {
            question: "كيف تحددون مدة المشروع ورسوم الاستشارات؟",
            answer:
              "لا توجد مدة أو رسوم واحدة تناسب جميع المشاريع؛ إذ تتأثر بموقع المشروع ونوع المبنى ومساحته وعدد طوابقه والتخصصات المطلوبة والخدمات المتفق عليها، بما في ذلك الإشراف، ومدد مراجعة الجهات المختصة. ويمكن إعداد تقدير خاص بالمشروع بعد مراجعة هذه التفاصيل.",
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
      <SEO
        title={content.title}
        description={content.description}
        canonical={content.canonical}
        language={language}
        structuredData={structuredData}
      />

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
