import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "../styles/Cards.css";

import swi from "../images/circle_villa-min.jpg";
import villa from "../images/3 (1)-min.jpg";
import res from "../images/mo.jpg";
import villa2 from "../images/11 (2)-min.jpg";
import compound from "../images/11 (1)-min.jpg";
import villa3 from "../images/villa_compound.jpg";

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
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img
              src={swi.default || swi}
              alt="Villa Design"
              title={t("Villa Design")}
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src={villa.default || villa}
              alt="Modern Villa"
              title={t("Modern Villa Design")}
              className="img-fluid"
            />
          </div>

          <div>
            <img
              src={res.default || res}
              loading="lazy"
              alt="Modern Mosque Design"
              title={t("Modern Mosque Design")}
              className="img-fluid"
            />
          </div>

          <div>
            <img
              src={compound.default || compound}
              alt="Villa Compound Design"
              title={"Villa Compound Design"}
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src={villa3.default || villa3}
              loading="lazy"
              alt="Villa"
              title={"Villa Compound"}
              className="img-fluid"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AutoSlider;
