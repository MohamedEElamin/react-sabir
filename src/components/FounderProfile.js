import React from "react";
import Link from "./LocalizedLink";
import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import SEO from "./SEO";
import "../styles/PageLayout.css";

const founderContent = {
  en: {
    title: "Dr. Sabir Elsir | Founder & Consulting Engineer",
    description:
      "Meet Dr. Sabir Elsir, Founder of Sabir Elsir Engineering Consultants. A consulting engineer with a PhD in Construction Management and extensive academic and professional experience in architecture and engineering consultancy.",
    heading: "Dr. Sabir Elsir – Founder & Consulting Engineer",
    role: "Founder",
    profileTitle: "Founder and professional experience",
    profileParagraphs: [
      "Dr. Sabir Elsir is the founder of Sabir Elsir Engineering Consultants and has broad academic and professional experience in architecture, architectural design, engineering consultancy, construction management, and project management.",
      "Dr. Sabir Elsir holds a PhD in Construction Management, an MSc in Construction Management and Technology, and a BSc in Architecture.",
    ],
    profileSections: [
      {
        title: "Professional Qualifications and Credentials",
        paragraphs: [
          "Dr. Sabir Elsir holds the title of Consulting Engineer from the Sudanese Engineering Council. He is also a Fellow of the Sudanese Society of Architects and a member of the Society of Architects (SIA), reflecting his professional background and specialization in architecture and engineering consultancy.",
        ],
      },
      {
        title: "Academic Experience and University Teaching",
        paragraphs: [
          "Alongside his work in engineering consultancy, architectural design, and project management, Dr. Sabir Elsir has academic experience in teaching and participating in university educational activities. He taught at Khartoum College of Applied Arts.",
          "His academic, teaching, and assessment contributions have included several higher education institutions, including the University of Applied Sciences, Omdurman Ahlia University, Emirates College, Qatar College, and a number of Sudanese universities.",
          "He has also served as an external examiner for bachelor's, master's, and diploma programs at several Sudanese universities, contributing to the assessment of academic outcomes, research, and projects in fields related to his specialization.",
        ],
      },
      {
        title: "Professional Experience and Company Vision",
        paragraphs: [
          "Sabir Elsir Engineering Consultants draws on its founder's academic and professional background to provide specialized architectural and engineering design, interior design, 3D design, engineering consultancy, and project management and coordination services.",
          "The company's approach combines academic knowledge, engineering experience, and practical application to deliver integrated design and engineering solutions that meet client requirements and recognized technical standards.",
          "Dr. Sabir Elsir's academic qualifications and professional experience are presented separately from the company's founding date, distinguishing the founder's personal and professional career from the engineering firm's history and growth.",
        ],
      },
    ],
    education: [
      "PhD in Construction Management",
      "MSc in Construction Management and Technology",
      "BSc in Architecture",
    ],
    contact: "Contact our team",
  },
  ar: {
    title: "د. صابر السر | المؤسس والمهندس الاستشاري",
    description:
      "تعرّف على الدكتور صابر السر، مؤسس شركة صابر السر للاستشارات الهندسية. مهندس استشاري حاصل على درجة الدكتوراه في إدارة التشييد، ويتمتع بخبرة أكاديمية ومهنية واسعة في الهندسة المعمارية والاستشارات الهندسية.",
    heading: "د. صابر السر – المؤسس والمهندس الاستشاري",
    role: "المؤسس",
    profileTitle: "المؤسس والخبرة المهنية",
    profileParagraphs: [
      "الدكتور صابر السر هو مؤسس شركة صابر السر للاستشارات الهندسية، ويتمتع بخبرة أكاديمية ومهنية واسعة في الهندسة المعمارية والتصميم المعماري والاستشارات الهندسية وإدارة التشييد والمشاريع.",
      "يحمل الدكتور صابر السر درجة الدكتوراه في إدارة التشييد (PhD in Construction Management)، ودرجة الماجستير في إدارة وتقنيات التشييد (MSc in Construction Management and Technology)، بالإضافة إلى درجة البكالوريوس في الهندسة المعمارية (BSc in Architecture).",
    ],
    profileSections: [
      {
        title: "المؤهلات والاعتمادات المهنية",
        paragraphs: [
          "يحمل الدكتور صابر السر صفة مهندس استشاري من المجلس الهندسي السوداني، كما أنه زميل الجمعية المعمارية السودانية وعضو جمعية المهندسين المعماريين (SIA)، وهو ما يعكس خلفيته المهنية وتخصصه في الهندسة المعمارية والاستشارات الهندسية.",
        ],
      },
      {
        title: "الخبرة الأكاديمية والتدريس الجامعي",
        paragraphs: [
          "إلى جانب عمله في الاستشارات الهندسية والتصميم المعماري وإدارة المشاريع، يمتلك الدكتور صابر السر خبرة أكاديمية في التدريس والمشاركة في الأنشطة التعليمية الجامعية، وقد عمل في التدريس بكلية الخرطوم للفنون التطبيقية.",
          "وشملت مساهماته الأكاديمية والتدريسية والتقييمية عدداً من مؤسسات التعليم العالي، منها جامعة العلوم التطبيقية، وجامعة أم درمان الأهلية، وكلية الإمارات، والكلية القطرية، وعدد من الجامعات السودانية.",
          "كما عمل ممتحناً خارجياً لبرامج البكالوريوس والماجستير والدبلوم في عدد من الجامعات السودانية، وأسهم في تقييم المخرجات الأكاديمية والأبحاث والمشاريع في المجالات المرتبطة بتخصصه.",
        ],
      },
      {
        title: "الخبرة المهنية ورؤية الشركة",
        paragraphs: [
          "تستند شركة صابر السر للاستشارات الهندسية إلى الخلفية الأكاديمية والمهنية لمؤسسها، وتقدم خدمات متخصصة في التصميم المعماري والهندسي، والتصميم الداخلي، والتصميم ثلاثي الأبعاد (3D Design)، والاستشارات الهندسية، وإدارة المشاريع وتنسيقها.",
          "ويجمع نهج الشركة بين المعرفة الأكاديمية والخبرة الهندسية والتطبيق العملي لتقديم حلول تصميمية وهندسية متكاملة تلبي متطلبات العملاء والمعايير الفنية المعتمدة.",
          "تُعرض المؤهلات الأكاديمية والخبرة المهنية للدكتور صابر السر بصورة مستقلة عن تاريخ تأسيس الشركة، للفصل بين المسيرة المهنية والشخصية للمؤسس وتاريخ المؤسسة الهندسية ونموها.",
        ],
      },
    ],
    education: [
      "دكتوراه في إدارة التشييد",
      "ماجستير في إدارة وتقنيات التشييد",
      "بكالوريوس في الهندسة المعمارية",
    ],
    contact: "تواصل مع فريقنا",
  },
};

function FounderProfile() {
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const content = founderContent[language];
  const canonical = "https://www.sabirelsir.ae/founder-profile";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${canonical}#person`,
    name: "Sabir Elsir",
    jobTitle: "Founder",
    description: content.description,
    hasCredential: content.education.map((name) => ({
      "@type": "EducationalOccupationalCredential",
      name,
    })),
    worksFor: {
      "@id": "https://www.sabirelsir.ae/#organization",
    },
    mainEntityOfPage: canonical,
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
      <div dir={language === "ar" ? "rtl" : "ltr"}>
        <PageIntro
          eyebrow={content.role}
          title={content.heading}
        />
        <article className="site-page-content founder-profile-content">
          <section className="founder-profile-card founder-profile-biography">
            <h2>{content.profileTitle}</h2>
            {content.profileParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {content.profileSections?.map((section) => (
              <div key={section.title}>
                <h3>{section.title}</h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ))}
          </section>
          <p className="founder-profile-contact">
            <Link to="/contact">{content.contact}</Link>
          </p>
        </article>
      </div>
    </>
  );
}

export default FounderProfile;
