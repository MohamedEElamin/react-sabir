import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import Grid from "./Grid";
import "../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import SEO from "./SEO";

const Home = () => {
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const isArabic = language === "ar";
  const title = isArabic
    ? "استشارات هندسية في الشارقة وعجمان | صابر السر للاستشارات الهندسية"
    : "Engineering Consultants in Sharjah & Ajman | Sabir Elsir";
  const description = isArabic
    ? "صابر السر للاستشارات الهندسية، خبرة منذ 2001 في التصميم المعماري والإنشائي والمدني وMEP وتصميم الفلل والإشراف الهندسي واعتماد المخططات في الشارقة وعجمان."
    : "Engineering design, supervision, and project management across the UAE and Sudan. Sabir Elsir Engineering Consultants, established in 2001.";
  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical="https://www.sabirelsir.ae/"
        language={language}
      />
      <section className="home-hero" dir={isArabic ? "rtl" : "ltr"}>
        <Slider />
        <div className="home-hero-shade" aria-hidden="true" />
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <h1>
              {isArabic
                ? "صابر السر للاستشارات الهندسية"
                : "Sabir Elsir Engineering Consultants"}
            </h1>
            {isArabic ? (
              <>
                <h2 className="home-hero-subheading">
                  الاستشارات الهندسية والتصميم المعماري وإدارة المشاريع في
                  الإمارات والسودان
                </h2>
                <p className="home-hero-description">
                  تأسس مكتب صابر السر للاستشارات الهندسية عام 2001، ويقدم خدمات
                  متكاملة تشمل التصميم المعماري والهندسة المدنية والإنشائية
                  والإشراف الهندسي وإدارة المشاريع في الشارقة وعجمان ومختلف
                  أنحاء الإمارات، إلى جانب خدمات استشارية مهنية في الخرطوم،
                  السودان.
                </p>
                <p className="home-hero-description">
                  نجمع بين الخبرة الهندسية وحلول التصميم العملية والالتزام
                  بالجودة لدعم المشاريع السكنية والتجارية والصناعية، بدءًا من
                  مراحل التخطيط والتصميم الأولية وصولًا إلى تنفيذ المشاريع.
                </p>
              </>
            ) : (
              <>
                <h2 className="home-hero-subheading">
                  Engineering Consultancy, Architectural Design &amp; Project
                  Management in the UAE and Sudan
                </h2>
                <p className="home-hero-description">
                  Established in 2001, Sabir Elsir Engineering Consultants
                  provides integrated architectural design, civil and
                  structural engineering, engineering supervision, and project
                  management services in Sharjah, Ajman, and across the UAE,
                  with professional consultancy services in Khartoum, Sudan.
                </p>
                <p className="home-hero-description">
                  Combining engineering expertise, practical design solutions,
                  and a commitment to quality, we support residential,
                  commercial, and industrial developments from initial planning
                  and design through project execution.
                </p>
              </>
            )}
            <div className="home-hero-actions">
              <Link className="home-hero-primary" to="/services">
                {isArabic ? "استكشف خدماتنا" : "Explore our services"}
                <span aria-hidden="true">↗</span>
              </Link>
              <Link className="home-hero-secondary" to="/contact">
                {isArabic ? "تواصل مع فريقنا" : "Talk to our team"}
              </Link>
            </div>
          </div>
          <div className="home-hero-proof">
            <span>{isArabic ? "منذ 2001" : "Established 2001"}</span>
            <span>
              {isArabic
                ? "الشارقة · عجمان · الخرطوم"
                : "Sharjah · Ajman · Khartoum"}
            </span>
          </div>
        </div>
      </section>
      <Grid />
    </>
  );
};

export default Home;
