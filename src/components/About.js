import React from "react";
import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import SEO from "./SEO";
import "../styles/PageLayout.css";

const aboutContent = {
  en: {
    title:
      "About Sabir Elsir Engineering Consultants | Sharjah & Ajman",
    description:
      "Sabir Elsir Engineering Consultants, founded in 2001, offers architectural, structural, civil, supervision, and project management in the UAE and Sudan.",
    heading:
      "About Us | Sabir Elsir Engineering Consultants in Sharjah and Ajman",
    introTitle:
      "Sabir Elsir Engineering Consultants: experience in design and engineering solutions since 2001",
    introParagraphs: [
      "Founded in 2001, Sabir Elsir Engineering Consultants provides consultancy and engineering design services for projects in the United Arab Emirates and Sudan, with a focus on Sharjah, Ajman, and Khartoum.",
      "We work in architectural, structural, and civil design, engineering supervision, and project management. Our services also include villa and residential and commercial building design, interior design, landscaping, and 3D design, according to the scope available for each project.",
      "Our work combines engineering planning, technical study, and coordination across disciplines to develop practical design solutions that consider project characteristics, client needs, and the requirements of the relevant authorities at each location.",
    ],
    teamTitle: "Our engineering team's experience and qualifications",
    teamParagraphs: [
      "Our team brings academic and professional experience in architecture, construction, and project management. Depending on their specialties, team members' professional and academic qualifications include Professional Engineer (PE) licenses, Project Management Professional (PMP®) certification, and master's (MSc) and doctoral (PhD) degrees.",
      "These backgrounds support design, planning, coordination, and engineering supervision, while taking into account the professional registration and licensing requirements of the relevant authorities in each country.",
    ],
    servicesTitle: "Engineering consultancy and design services",
    services: [
      {
        title: "Architectural design",
        text: "Preparing architectural designs and drawings for residential, commercial, and other building projects.",
      },
      {
        title: "Structural and civil design",
        text: "Developing structural and civil engineering solutions and drawings to suit the project and its technical requirements.",
      },
      {
        title: "Villa and residential building design",
        text: "Designing layouts and elevations to suit client needs and site characteristics.",
      },
      {
        title: "Interior design and 3D visualization",
        text: "Developing interior design concepts and preparing three-dimensional visualizations.",
      },
      {
        title: "Landscape design",
        text: "Planning gardens and outdoor spaces and coordinating natural and architectural elements.",
      },
      {
        title: "Engineering supervision",
        text: "Monitoring site work and reviewing execution against approved drawings, specifications, and the agreed scope.",
      },
      {
        title: "Project planning and management",
        text: "Coordinating project scope, schedule, costs, and risks to support project delivery.",
      },
    ],
    areasTitle: "Areas we serve",
    locations: [
      {
        title: "United Arab Emirates",
        places: ["Sharjah", "Ajman", "Other locations, according to project scope"],
      },
      {
        title: "Sudan",
        places: ["Khartoum", "Other locations, according to project scope"],
      },
    ],
    visionTitle: "Our vision and approach",
    visionParagraphs: [
      "We aim to provide engineering consultancy services that combine design quality, technical study, and effective coordination across disciplines.",
      "We seek to build long-term professional relationships by understanding clients' project needs, developing suitable engineering solutions, and observing the requirements and regulations applicable at the project location.",
    ],
    eyebrow: "About us",
    lead: "Engineering consultancy and design for projects in Sharjah, Ajman, the UAE, and Sudan.",
  },
  ar: {
    title: "من نحن | صابر السر للاستشارات الهندسية في الشارقة وعجمان",
    description:
      "تأسس مكتب صابر السر للاستشارات الهندسية عام 2001، ويقدم خدمات هندسية وإدارة مشاريع في الإمارات والسودان، خاصة في الشارقة وعجمان والخرطوم.",
    heading: "من نحن | صابر السر للاستشارات الهندسية في الشارقة وعجمان",
    introTitle:
      "مكتب صابر السر للاستشارات الهندسية: خبرة في التصميم والحلول الهندسية منذ عام 2001",
    introParagraphs: [
      "تأسس مكتب صابر السر للاستشارات الهندسية عام 2001، ويقدم خدمات الاستشارات والتصميم الهندسي للمشاريع في دولة الإمارات العربية المتحدة والسودان، مع التركيز على الشارقة وعجمان والخرطوم.",
      "نعمل في مجالات التصميم المعماري والإنشائي والمدني، والإشراف الهندسي وإدارة المشاريع، إلى جانب تصميم الفلل والمباني السكنية والتجارية، والتصميم الداخلي والمناظر الطبيعية والتصميم ثلاثي الأبعاد، وفقاً لنطاق الخدمات المتاحة لكل مشروع.",
      "نعتمد في عملنا على الجمع بين التخطيط الهندسي والدراسة الفنية وتنسيق التخصصات المختلفة، بهدف تطوير حلول تصميمية وعملية تراعي طبيعة المشروع واحتياجات العملاء ومتطلبات الجهات المختصة في كل موقع.",
    ],
    teamTitle: "خبراتنا ومؤهلات فريق العمل الهندسي",
    teamParagraphs: [
      "يضم فريق العمل خبرات أكاديمية ومهنية في مجالات الهندسة المعمارية والإنشاءات وإدارة المشاريع. وتشمل المؤهلات المهنية والأكاديمية لأعضاء الفريق، بحسب التخصص، رخصة المهندس المحترف (PE)، وشهادة محترف إدارة المشاريع (PMP®)، ودرجات الماجستير (MSc) والدكتوراه (PhD).",
      "وتدعم هذه الخلفيات العلمية والمهنية أعمال التصميم والتخطيط والتنسيق والإشراف الهندسي، مع مراعاة متطلبات التسجيل والترخيص المهني المعمول بها لدى الجهات المختصة في كل دولة.",
    ],
    servicesTitle: "خدمات الاستشارات والتصميم الهندسي",
    services: [
      {
        title: "التصميم المعماري",
        text: "إعداد التصاميم والمخططات المعمارية للمباني السكنية والتجارية وغيرها من أنواع المشاريع.",
      },
      {
        title: "التصميم الإنشائي والمدني",
        text: "تطوير الحلول والمخططات الهندسية الإنشائية والمدنية وفق طبيعة المشروع والمتطلبات الفنية.",
      },
      {
        title: "تصميم الفلل والمباني السكنية",
        text: "تصميم المساحات والمخططات والواجهات بما يتناسب مع احتياجات العملاء وطبيعة الموقع.",
      },
      {
        title: "التصميم الداخلي والديكور ثلاثي الأبعاد",
        text: "تطوير التصورات التصميمية للمساحات الداخلية وإعداد المرئيات ثلاثية الأبعاد.",
      },
      {
        title: "تصميم المناظر الطبيعية واللاندسكيب",
        text: "تخطيط الحدائق والمساحات الخارجية وتنسيق العناصر الطبيعية والمعمارية.",
      },
      {
        title: "الإشراف الهندسي",
        text: "متابعة الأعمال ميدانياً ومراجعة تنفيذها وفق المخططات والمواصفات المعتمدة ونطاق التكليف.",
      },
      {
        title: "إدارة وتخطيط المشاريع",
        text: "تنسيق نطاق العمل والجدول الزمني والتكاليف والمخاطر لدعم تنفيذ المشاريع.",
      },
    ],
    areasTitle: "مناطق عملنا",
    locations: [
      {
        title: "الإمارات العربية المتحدة",
        places: ["الشارقة", "عجمان", "مواقع أخرى وفق نطاق المشروع"],
      },
      {
        title: "السودان",
        places: ["الخرطوم", "مواقع أخرى وفق نطاق المشروع"],
      },
    ],
    visionTitle: "رؤيتنا ونهجنا الهندسي",
    visionParagraphs: [
      "نسعى إلى تقديم خدمات استشارية وهندسية تجمع بين جودة التصميم والدراسة الفنية والتنسيق الفعال بين التخصصات المختلفة.",
      "ونهدف إلى بناء علاقات مهنية طويلة الأمد مع عملائنا من خلال فهم احتياجات مشاريعهم، وتطوير حلول هندسية مناسبة، والالتزام بمتطلبات المشروع واللوائح المعمول بها في موقع التنفيذ.",
    ],
    eyebrow: "معلومات عنا",
    lead: "خدمات استشارية وهندسية للمشاريع في الشارقة وعجمان والإمارات والسودان.",
  },
};

function About() {
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const content = aboutContent[language];
  const canonical = "https://www.sabirelsir.ae/about";

  return (
    <>
      <SEO
        title={content.title}
        description={content.description}
        canonical={canonical}
        language={language}
        pageType="AboutPage"
      />

      <PageIntro
        eyebrow={content.eyebrow}
        title={content.heading}
        description={content.lead}
      />

      <article
        className="site-page-content about-page-content about-us-section"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <h2>{content.introTitle}</h2>
        <div>
          {content.introParagraphs.map((paragraph, index) => (
            <p
              className={index === 0 ? "about-section-lead" : undefined}
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <section className="about-copy-section">
          <h2>{content.teamTitle}</h2>
          {content.teamParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className="about-copy-section">
          <h2>{content.servicesTitle}</h2>
          <ul>
            {content.services.map((service) => (
              <li key={service.title}>
                <strong>{`${service.title}: `}</strong>
                {service.text}
              </li>
            ))}
          </ul>
        </section>

        <section className="about-copy-section">
          <h2>{content.areasTitle}</h2>
          {content.locations.map((location) => (
            <div key={location.title}>
              <h3>{location.title}</h3>
              <ul>
                {location.places.map((place) => (
                  <li key={place}>{place}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="about-copy-section">
          <h2>{content.visionTitle}</h2>
          {content.visionParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      </article>
    </>
  );
}

export default About;
