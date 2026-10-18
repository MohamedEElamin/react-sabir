import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import "../styles/PageLayout.css";

const aboutContent = {
  en: {
    title: "About Sabir Elsir Engineering Consultants",
    description:
      "Learn about Sabir Elsir Engineering Consultants, established in 2001 and serving projects in Sharjah, Ajman, and Khartoum through architectural and structural design, engineering supervision, and project management.",
    introTitle:
      "About Sabir Elsir Engineering Consultants: engineering experience since 2001",
    intro: (
      <>
        Since <strong>2001</strong>, Sabir Elsir Engineering Consultants has
        delivered architectural design, structural engineering solutions, and
        engineering supervision. Our work serves clients in the
        <strong>
          {" "}
          United Arab Emirates, including Sharjah and Ajman, and Sudan,
          including Khartoum
        </strong>
        . We bring together design thinking, practical construction experience,
        and project coordination to help clients develop buildings that respond
        to their needs and local requirements.
      </>
    ),
    distinctionTitle:
      "Why clients choose an engineering consultancy serving Sharjah, Ajman, and Khartoum",
    distinction: (
      <>
        Our team combines academic study with field experience across
        engineering and construction. Team members have professional and
        academic qualifications that include Professional Engineer (PE), Project
        Management Professional (PMP), master’s degrees (MSc), and doctoral
        degrees (PhD). Qualifications and local professional registration
        requirements vary by role and jurisdiction, so clients should confirm
        that the appointed professionals meet the requirements of the relevant
        authority.
      </>
    ),
    credentialsTitle: "Team qualifications and professional credentials",
    credentials: [
      {
        title: "Professional Engineer (PE) licence",
        text: "A professional engineering credential issued under the requirements of its licensing jurisdiction. Verify its recognition and any local registration needed for your project.",
      },
      {
        title: "Project Management Professional (PMP®) certification",
        text: "A project-management credential relevant to planning and coordinating scope, schedules, budgets, and project risks.",
      },
      {
        title: "Master’s and doctoral degrees (MSc and PhD)",
        text: "Advanced academic study and research in engineering disciplines, which may include architecture, structural engineering, and construction management.",
      },
    ],
    servicesTitle: "Our engineering services in the UAE and Sudan",
    services: [
      {
        title: "Architectural and structural design",
        text: "Developing coordinated design drawings and engineering solutions with consideration for project needs and applicable authority requirements.",
      },
      {
        title: "Site engineering supervision",
        text: "Monitoring construction progress and reviewing work against approved drawings, project specifications, and applicable safety requirements.",
      },
      {
        title: "Project planning and management",
        text: "Coordinating project scope, costs, schedules, and risks to support clear, informed delivery decisions.",
      },
    ],
    visionTitle: "Our vision and approach",
    vision: (
      <>
        We believe engineering brings together academic knowledge, considered
        design, and practical delivery. Our aim is to be a trusted engineering
        partner for projects in Sharjah, Ajman, and Khartoum, helping clients
        pursue safe, durable, and sustainable outcomes through collaboration and
        careful project execution.
      </>
    ),
    eyebrow: "About us",
    lead: "Engineering consultancy, design, and supervision across the UAE and Sudan since 2001.",
  },
  ar: {
    title: "معلومات عنا | صابر السر للاستشارات الهندسية",
    description:
      "تعرّف على مكتب صابر السر للاستشارات الهندسية، الذي تأسس عام 2001 ويخدم المشاريع في الشارقة وعجمان والخرطوم من خلال التصميم المعماري والإنشائي والإشراف الهندسي وإدارة المشاريع.",
    introTitle:
      "عن مكتب صابر السر للاستشارات الهندسية: خبرة هندسية منذ عام 2001",
    intro: (
      <>
        منذ عام <strong>2001</strong>، يقدم مكتب صابر السر للاستشارات الهندسية
        خدمات التصميم المعماري والحلول الإنشائية والإشراف الهندسي. نخدم المشاريع
        في{" "}
        <strong>
          الإمارات العربية المتحدة، بما في ذلك الشارقة وعجمان، والسودان، بما في
          ذلك الخرطوم
        </strong>
        . ونجمع بين التفكير التصميمي والخبرة العملية في البناء وتنسيق المشاريع
        لمساعدة العملاء على تطوير مبانٍ تلبي احتياجاتهم ومتطلبات الموقع والجهات
        المحلية.
      </>
    ),
    distinctionTitle:
      "لماذا يختار العملاء مكتباً للاستشارات الهندسية يخدم الشارقة وعجمان والخرطوم؟",
    distinction: (
      <>
        يجمع فريقنا بين الدراسة الأكاديمية والخبرة الميدانية في الهندسة
        والإنشاءات. وتشمل مؤهلات بعض أعضاء الفريق رخصة المهندس المحترف (PE)،
        وشهادة محترف إدارة المشاريع (PMP)، ودرجات الماجستير (MSc)، ودرجات
        الدكتوراه (PhD). تختلف المؤهلات ومتطلبات التسجيل المهني المحلي بحسب
        الدور والاختصاص القضائي؛ لذلك يُنصح بالتحقق من استيفاء المختصين المعينين
        لمتطلبات الجهة المعنية بالمشروع.
      </>
    ),
    credentialsTitle: "مؤهلات الفريق والاعتمادات المهنية",
    credentials: [
      {
        title: "رخصة مهندس محترف (PE)",
        text: "مؤهل مهني يصدر وفق متطلبات جهة الترخيص. تحقق من الاعتراف به ومن أي تسجيل محلي مطلوب للمشروع.",
      },
      {
        title: "شهادة محترف إدارة المشاريع (PMP®)",
        text: "شهادة مهنية في إدارة المشاريع، وترتبط بتخطيط نطاق المشروع وجدوله وميزانيته ومخاطره وتنسيقها.",
      },
      {
        title: "درجات الماجستير والدكتوراه (MSc وPhD)",
        text: "دراسة أكاديمية وبحث متقدم في تخصصات هندسية قد تشمل العمارة والهندسة الإنشائية وإدارة التشييد.",
      },
    ],
    servicesTitle: "خدماتنا الهندسية في الإمارات والسودان",
    services: [
      {
        title: "التصميم المعماري والإنشائي",
        text: "إعداد مخططات منسقة وحلول هندسية تراعي احتياجات المشروع ومتطلبات الجهات المختصة المعمول بها.",
      },
      {
        title: "الإشراف الهندسي الميداني",
        text: "متابعة تقدم أعمال البناء ومراجعتها وفق المخططات المعتمدة ومواصفات المشروع ومتطلبات السلامة ذات الصلة.",
      },
      {
        title: "تخطيط وإدارة المشاريع",
        text: "تنسيق نطاق المشروع وتكاليفه وجدوله الزمني ومخاطره لدعم قرارات تنفيذ واضحة ومدروسة.",
      },
    ],
    visionTitle: "رؤيتنا ونهجنا",
    vision: (
      <>
        نؤمن بأن الهندسة تجمع بين المعرفة الأكاديمية والتصميم المدروس والتنفيذ
        العملي. ونسعى إلى أن نكون شريكاً هندسياً موثوقاً للمشاريع في الشارقة
        وعجمان والخرطوم، وأن نساعد العملاء على تحقيق نتائج آمنة ومتينة ومستدامة
        من خلال التعاون والتنفيذ الدقيق للمشاريع.
      </>
    ),
    eyebrow: "معلومات عنا",
    lead: "استشارات هندسية وتصميم وإشراف في الإمارات والسودان منذ عام 2001.",
  },
};

function About() {
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const content = aboutContent[language];

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <link rel="canonical" href="https://www.sabirelsir.ae/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.description} />
      </Helmet>

      <PageIntro
        eyebrow={content.eyebrow}
        title={
          language === "ar"
            ? "عن صابر السر للاستشارات الهندسية"
            : "About Sabir Elsir Engineering Consultants"
        }
        description={content.lead}
      />

      <article
        className="site-page-content about-page-content about-us-section"
        itemScope
        itemType="https://schema.org/EngineeringService"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <meta
          itemProp="areaServed"
          content="Sharjah, Ajman, United Arab Emirates, Khartoum, Sudan"
        />
        <h2 itemProp="name">{content.introTitle}</h2>
        <p className="about-section-lead" itemProp="description">
          {content.intro}
        </p>

        <section className="about-copy-section">
          <h2>{content.distinctionTitle}</h2>
          <p>{content.distinction}</p>
          <h3>{content.credentialsTitle}</h3>
          <ul>
            {content.credentials.map((credential) => (
              <li key={credential.title}>
                <strong>{credential.title}: </strong>
                {credential.text}
              </li>
            ))}
          </ul>
        </section>

        <section className="about-copy-section">
          <h2>{content.servicesTitle}</h2>
          <ul>
            {content.services.map((service) => (
              <li key={service.title}>
                <strong>{service.title}: </strong>
                {service.text}
              </li>
            ))}
          </ul>
        </section>

        <section className="about-copy-section">
          <h2>{content.visionTitle}</h2>
          <p>{content.vision}</p>
        </section>
      </article>
    </>
  );
}

export default About;
