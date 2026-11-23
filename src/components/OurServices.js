import React from "react";
import Link from "./LocalizedLink";
import "../styles/Cards.css";
import { useTranslation } from "react-i18next";
import ServiceItem from "./ServiceItem";
import PageIntro from "./PageIntro";
import SEO from "./SEO";

const architecturalContent = {
  en: {
    eyebrow: "Architectural Design",
    heading:
      "Architectural Design & Engineering Consultancy in Sharjah and Ajman",
    summary:
      "Architectural design, building planning, villa design, elevations, and construction drawings coordinated with structural, civil, and MEP disciplines where included in the project scope.",
    link: "Explore architectural services",
  },
  ar: {
    eyebrow: "التصميم المعماري",
    heading: "التصميم المعماري والاستشارات الهندسية في الشارقة وعجمان",
    summary:
      "خدمات التصميم المعماري وتخطيط المباني وتصميم الفلل والواجهات ومخططات التنفيذ، مع تنسيق التخصصات الإنشائية والمدنية والكهروميكانيكية وفق نطاق المشروع.",
    link: "استكشف خدمات التصميم المعماري",
  },
};

const civilEngineeringContent = {
  en: {
    heading: "Civil Engineering Consultancy in Sharjah and Ajman",
    summary:
      "Civil design, technical coordination, infrastructure planning, and engineering documentation tailored to project needs, where applicable.",
    link: "Explore civil engineering services",
  },
  ar: {
    heading: "استشارات هندسية مدنية في الشارقة وعجمان",
    summary:
      "التصميم المدني والتنسيق الفني وتخطيط البنية التحتية والوثائق الهندسية وفق احتياجات المشروع، عند الاقتضاء.",
    link: "استكشف خدمات الهندسة المدنية",
  },
};

const interiorDesignContent = {
  en: {
    heading: "Interior Design Consultancy",
    summary:
      "Interior space planning, design concepts, 3D visualization, material selection, and coordination with architectural and MEP disciplines.",
    link: "Explore interior design services",
  },
  ar: {
    heading: "استشارات التصميم الداخلي",
    summary:
      "تخطيط المساحات الداخلية ومفاهيم التصميم والتصور ثلاثي الأبعاد واختيار المواد والتنسيق مع التخصصات المعمارية والكهروميكانيكية.",
    link: "استكشف خدمات التصميم الداخلي",
  },
};

const projectManagementContent = {
  en: {
    heading: "Engineering Project Management Consultancy",
    summary:
      "Project planning, engineering coordination, progress monitoring, and technical reporting tailored to the agreed project scope.",
    link: "Explore project management services",
  },
  ar: {
    heading: "استشارات إدارة المشاريع الهندسية",
    summary:
      "تخطيط المشاريع والتنسيق الهندسي ومتابعة التقدم وإعداد التقارير الفنية وفق نطاق المشروع المتفق عليه.",
    link: "استكشف خدمات إدارة المشاريع",
  },
};

const generalBuildingContent = {
  en: {
    heading: "General Building Engineering Consultancy",
    summary:
      "Multidisciplinary building consultancy covering architectural planning, design coordination, engineering requirements, and technical documentation.",
    link: "Explore building engineering services",
  },
  ar: {
    heading: "استشارات هندسة المباني العامة",
    summary:
      "استشارات متعددة التخصصات تشمل التخطيط المعماري وتنسيق التصميم والمتطلبات الهندسية والوثائق الفنية.",
    link: "استكشف خدمات هندسة المباني",
  },
};

const modificationDrawingsContent = {
  en: {
    heading: "Warehouse, Factory & Workshop Modification Drawings",
    summary:
      "Engineering drawings and documentation for industrial and commercial modifications in Sharjah, prepared according to project scope and applicable authority requirements.",
    link: "View service details",
  },
  ar: {
    heading: "مخططات تعديل المستودعات والمصانع والورش في الشارقة",
    summary:
      "إعداد وتنسيق المخططات والوثائق الهندسية للمشاريع الصناعية والتجارية وفق نطاق العمل ومتطلبات الجهات المختصة.",
    link: "عرض تفاصيل الخدمة",
  },
};

const OurServices = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const isArabic = language === "ar";
  const architectural = architecturalContent[language];
  const civilEngineering = civilEngineeringContent[language];
  const interiorDesign = interiorDesignContent[language];
  const projectManagement = projectManagementContent[language];
  const generalBuilding = generalBuildingContent[language];
  const modificationDrawings = modificationDrawingsContent[language];
  const title = isArabic
    ? "الخدمات الهندسية في الإمارات والسودان | صابر السر"
    : "Engineering Services in Sharjah & Ajman | Sabir Elsir";
  const description = isArabic
    ? "خدمات التصميم المعماري والمدني والإنشائي والداخلي والإشراف وإدارة المشاريع للمباني السكنية والتجارية والصناعية في الإمارات والسودان."
    : "Engineering design, supervision, and project management for residential, commercial, and industrial projects across the UAE and Sudan.";
  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical="https://www.sabirelsir.ae/services"
        language={language}
      />
      <PageIntro
        eyebrow={
          isArabic
            ? "الاستشارات الهندسية في الإمارات والسودان"
            : "Engineering Consultancy in the UAE & Sudan"
        }
        title={
          isArabic
            ? "خدمات التصميم والاستشارات والإشراف الهندسي"
            : "Engineering Design, Consultancy & Supervision Services"
        }
        description={
          isArabic
            ? "نقدم خدمات التصميم المعماري والإنشائي والمدني والاستشارات الهندسية والإشراف على المشاريع السكنية والتجارية والصناعية في الشارقة وعجمان ومختلف مناطق الإمارات والسودان."
            : "We provide architectural design, structural and civil engineering, engineering consultancy, and project supervision for residential, commercial, and industrial developments across Sharjah, Ajman, the UAE, and Sudan."
        }
      />
      <section className="site-page-content services-page-content">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                className="card-img-top"
                src="/images/vils-min.webp"
                loading="lazy"
                alt={isArabic ? "تصميم فيلا عصرية" : "Modern villa design"}
                width="1920"
                height="1080"
              />
              <div className="card-body">
                <p className="text-muted text-uppercase small mb-2">
                  {architectural.eyebrow}
                </p>
                <h2 className="card-title">{architectural.heading}</h2>
                <p className="card-text">{architectural.summary}</p>
                <Link
                  className="btn btn-link p-0 fw-semibold"
                  to="/services/architectural-engineering-consultancy"
                >
                  {architectural.link}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="/images/3000.webp"
                loading="lazy"
                alt={
                  isArabic
                    ? "رسم توضيحي لخدمة تعديل مخططات المستودعات والمصانع والورش"
                    : "Illustration of warehouse, factory, and workshop drawing modification services"
                }
                className="card-img-top card-img-top--promo"
                width="1047"
                height="1152"
              />
              <div className="card-body">
                <h2 className="card-title">
                  {modificationDrawings.heading}
                </h2>
                <p className="card-text">{modificationDrawings.summary}</p>
                <Link
                  className="btn btn-link p-0 fw-semibold"
                  to="/ar/warehouse-factory-workshop-modification-drawings-sharjah"
                >
                  {modificationDrawings.link}
                </Link>
              </div>
            </div>
          </div>
          <br />
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="/images/13 (2)-min.webp"
                loading="lazy"
                alt={isArabic ? "تصميم درج دائري حديث" : "Modern circular staircase"}
                className="card-img-top"
                width="1920"
                height="1080"
              />
              <div className="card-body">
                <h2 className="card-title">{civilEngineering.heading}</h2>
                <p className="card-text">{civilEngineering.summary}</p>
                <Link
                  className="btn btn-link p-0 fw-semibold"
                  to="/services/civil-engineering-consultancy"
                >
                  {civilEngineering.link}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="/images/3-min.webp"
                loading="lazy"
                alt={isArabic ? "تصميم مبنى عام" : "General building design"}
                className="card-img-top"
                width="1920"
                height="1080"
              />
              <div className="card-body">
                <h2 className="card-title">{generalBuilding.heading}</h2>
                <p className="card-text">{generalBuilding.summary}</p>
                <Link
                  className="btn btn-link p-0 fw-semibold"
                  to="/services/general-building-engineering-consultancy"
                >
                  {generalBuilding.link}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="/images/int2.jpg"
                loading="lazy"
                alt={isArabic ? "تصميم داخلي" : "Interior design"}
                className="card-img-top"
                width="1080"
                height="1080"
              />
              <div className="card-body">
                <h2 className="card-title">{interiorDesign.heading}</h2>
                <p className="card-text">{interiorDesign.summary}</p>
                <Link
                  className="btn btn-link p-0 fw-semibold"
                  to="/services/interior-design-consultancy"
                >
                  {interiorDesign.link}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="/images/4 (3)-min.webp"
                loading="lazy"
                alt={isArabic ? "تصميم فيلا" : "Villa design"}
                className="card-img-top"
                width="1920"
                height="1080"
              />
              <div className="card-body">
                <h2 className="card-title">{projectManagement.heading}</h2>
                <p className="card-text">{projectManagement.summary}</p>
                <Link
                  className="btn btn-link p-0 fw-semibold"
                  to="/services/engineering-project-management"
                >
                  {projectManagement.link}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
