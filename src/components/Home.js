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
          content="We are a leading engineering consultancy firm in the UAE.  صابر السر للاستشارات الهندسية، شركة الاستشارات الهندسية الرائدة في دولة الإمارات العربية المتحدة."
        ></meta>
        <link rel="canonical" href="Home"></link>
        <meta name="language" content="EN, AR"></meta>
      </Helmet>
      <Slider />
      <Grid />
    </>
  );
};

export default Home;
