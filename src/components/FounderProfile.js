import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import SEO from "./SEO";
import "../styles/PageLayout.css";

const founderContent = {
  en: {
    title: "Dr. Sabir Elsir | Founder & Engineering Consultant",
    description:
      "Learn about Dr. Sabir Elsir, founder of Sabir Elsir Engineering Consultants, and his academic and professional background in architecture and construction management.",
    heading: "Dr. Sabir Elsir",
    role: "Founder",
    profileTitle: "Founder and professional experience",
    profileParagraphs: [
      "Dr. Sabir Elsir is the founder of Sabir Elsir Engineering Consultants, with an academic and professional background specializing in architecture and construction management.",
      "He holds a PhD in Construction Management, an MSc in Construction Management and Technology, and a bachelor's degree in Architecture.",
      "His career includes architectural design, engineering consultancy, and project management, along with academic teaching at Khartoum College of Applied Arts.",
      "His professional qualifications include membership in the Sudanese Council for Regulating Engineering Professions and the Society of Architects (SIA), according to approved professional registrations and documents.",
      "The founder's professional experience and qualifications are presented separately from the company's founding date to clarify the founder's personal career and the engineering firm's experience.",
    ],
    education: [
      "PhD in Construction Management",
      "MSc in Construction Management and Technology",
      "BSc in Architecture",
    ],
    contact: "Contact our team",
  },
  ar: {
    title: "د. صابر السر | المؤسس والاستشاري الهندسي",
    description:
      "تعرّف على الدكتور صابر السر، مؤسس شركة صابر السر للاستشارات الهندسية، وخلفيته الأكاديمية والمهنية في الهندسة المعمارية وإدارة التشييد.",
    heading: "د. صابر السر",
    role: "المؤسس",
    profileTitle: "المؤسس والخبرة المهنية",
    profileParagraphs: [
      "يُعد الدكتور صابر السر مؤسس شركة صابر السر للاستشارات الهندسية، ويتمتع بخلفية أكاديمية ومهنية متخصصة في مجالات الهندسة المعمارية وإدارة التشييد.",
      "يحمل درجة الدكتوراه في إدارة التشييد، ودرجة الماجستير في إدارة وتقنيات التشييد، بالإضافة إلى درجة البكالوريوس في الهندسة المعمارية.",
      "وتشمل مسيرته المهنية العمل في مجالات التصميم المعماري والاستشارات الهندسية وإدارة المشاريع، إلى جانب نشاطه الأكاديمي في التدريس بكلية الخرطوم للفنون التطبيقية.",
      "كما تشمل مؤهلاته المهنية العضوية في مجلس تنظيم المهن الهندسية السوداني وعضوية جمعية المهندسين المعماريين (SIA)، وفقاً للتسجيلات والوثائق المهنية المعتمدة.",
      "تُعرض الخبرة المهنية للمؤسس ومؤهلاته بصورة مستقلة عن تاريخ تأسيس الشركة، بما يوضح المسيرة المهنية والشخصية للمؤسس وخبرة المؤسسة الهندسية.",
    ],
    education: [
      "دكتوراه في إدارة التشييد",
      "ماجستير في إدارة وتقنية التشييد",
      "بكالوريوس في العمارة",
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
