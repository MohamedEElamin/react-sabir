import React from "react";
import { Helmet } from "react-helmet";
import Slider from "./Slider";
import Grid from "./Grid";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title className="Myh2">{t("Home")}</title>
        <meta
          name="description"
          content=" .مكتب صابر السر هو إحدى شركات الاستشارات الهندسية الرائده في دولة الإمارات العربية المتحدة
          We are a leading engineering consultancy firm in the UAE."
        ></meta>
        <link rel="canonical" href="https://www.sabirelsir.com/"></link>
        <meta name="language" content="AR, EN"></meta>
      </Helmet>
      <Slider />
      <Grid />
    </>
  );
};

export default Home;
