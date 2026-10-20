import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import Grid from "./Grid";
import "../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar");
  return (
    <>
      <Helmet>
        <title className="Myh2">
          {t("Home")} استشاريون هندسيون في الإمارات والسودان | شركة صابر السر
        </title>
        <meta
          name="description"
          content="شركة صابر السر للاستشارات الهندسية والإشراف الهندسي تقدم خدمات تصميم معماري وهندسي متميزة في الشارقة وعجمان والخرطوم منذ عام 2001"
        ></meta>
        <meta
          property="og:title"
          content="استشاريون هندسيون في الإمارات والسودان | شركة صابر السر"
        />
        <meta
          property="og:description"
          content="ريادة في الاستشارات الهندسية والإشراف الفني في الشارقة وعجمان والخرطوم، بخبرة منذ 2001 وفريق مؤهل دوليًا."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.saberelsir.ae" />
        <meta
          property="og:image"
          content="https://www.saberelsir.ae/images/logo.png"
        />

        <link rel="canonical" href="https://www.sabirelsir.ae/"></link>
        <meta name="language" content="AR, EN"></meta>
      </Helmet>
      <section className="home-hero" dir={isArabic ? "rtl" : "ltr"}>
        <Slider />
        <div className="home-hero-shade" aria-hidden="true" />
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <p className="home-hero-eyebrow">
              {isArabic
                ? "استشارات هندسية · الإمارات والسودان"
                : "Engineering consultants · UAE and Sudan"}
            </p>
            <h1>
              {isArabic
                ? "صابر السر للاستشارات الهندسية"
                : "Sabir Elsir Engineering Consultants"}
            </h1>
            <p className="home-hero-description">
              {isArabic
                ? "تصميم وإشراف وإدارة مشاريع بخبرة عملية منذ عام 2001."
                : "Engineering design, supervision, and project management, shaped by experience since 2001."}
            </p>
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
