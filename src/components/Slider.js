import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "../styles/Cards.css";

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
              src="../images/swi.webp"
              alt="slide1_alt"
              title={t("Villa Compound")}
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src="../images/5 (1).webp"
              alt="slide2_alt"
              title={t("Modern Villa Design")}
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src="../images/re.webp"
              alt="slide3_alt"
              title={t("Modern Restaurant Design")}
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src="../images/6.webp"
              alt="slide4_alt"
              title={"Modern Villa Design"}
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src="../images/11 (1).webp"
              alt="slide5_alt"
              title={"Villa Compound"}
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src="../images/5 (2).webp"
              alt="slide6_alt"
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
