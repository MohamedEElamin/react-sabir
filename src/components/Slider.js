import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "../styles/Cards.css";

import swi from "../images/swi.webp";
import villa from "../images/5 (1).webp";
import res from "../images/re.webp";
import villa2 from "../images/6.webp";
import compound from "../images/11 (1).webp";
import villa3 from "../images/5 (2).webp";

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
              loading="lazy"
              alt="Villa Compound"
              title={t("Villa Compound")}
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src={villa.default || villa}
              loading="eager"
              alt="Modern Villa"
              title={t("Modern Villa Design")}
              className="img-fluid"
            />
          </div>

          <div>
            <img
              src={res.default || res}
              loading="eager"
              alt="Modern Restaurant Design"
              title={t("Modern Restaurant Design")}
              className="img-fluid"
            />
          </div>

          <div>
            <img
              src={villa2.default || villa2}
              loading="eager"
              alt="Modern Villa Design"
              title={"Modern Villa Design"}
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src={compound.default || compound}
              loading="eager"
              alt="Villa Compound Design"
              title={"Villa Compound Design"}
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src={villa3.default || villa3}
              loading="eager"
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
