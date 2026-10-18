import React from "react";
import { Helmet } from "react-helmet";
import Slider from "./Slider";
import Grid from "./Grid";
import PageIntro from "./PageIntro";
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
      <Slider />
      <PageIntro
        eyebrow={
          isArabic ? "من نحن" : "Engineering consultants · UAE and Sudan"
        }
        title={t("Welcome to Sabir Elsir Engineering Consultants")}
        description={
          isArabic
            ? "استشارات هندسية وتصميم وإشراف للمشاريع في الإمارات والسودان منذ عام 2001."
            : "Engineering consultancy, design, and supervision for projects across the UAE and Sudan since 2001."
        }
      />
      <Grid />
    </>
  );
};

export default Home;
