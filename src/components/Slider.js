import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "../styles/Cards.css";

import swi from "../images/circle_villa-min.jpg";
import villa from "../images/3 (1)-min.jpg";
import res from "../images/P17-min.jpg";
import intt from "../images/int.jpg";
import villa3 from "../images/villa_compound.jpg";
import vd from "../images/VillaT.jpg";

const AutoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const { t } = useTranslation();

  return (
    <div className="calc">
      <Slider {...settings} className="Container fluid">
        <div className="slide">
          <img
            src={swi.default || swi}
            loading="eager"
            alt="Villa Design"
            title={t("Villa Design")}
            className="img-fluid"
          />
        </div>
        <div className="slide">
          <img
            src={villa.default || villa}
            alt="Classic Villa"
            loading="eager"
            title={t("Classic Villa Design")}
            className="img-fluid"
          />
        </div>

        <div className="slide">
          <img
            src={res.default || res}
            loading="lazy"
            alt="Modern Mosque Design"
            title={t("Modern Mosque Design")}
            className="img-fluid"
          />
        </div>

        <div className="slide">
          <img
            src={intt.default || intt}
            loading="lazy"
            alt="Interior Design"
            title={t("Interior Design")}
            className="img-fluid"
          />
        </div>

        <div className="slide">
          <img
            src={villa3.default || villa3}
            loading="lazy"
            alt="Villa"
            title={"Villa Compound"}
            className="img-fluid"
          />
        </div>
        <div className="slide">
          <img
            src={vd.default || vd}
            loading="lazy"
            alt="Villa"
            title={"Villa"}
            className="img-fluid"
          />
        </div>
      </Slider>
    </div>
  );
};

export default AutoSlider;
