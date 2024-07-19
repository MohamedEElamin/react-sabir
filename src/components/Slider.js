import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "../styles/Cards.css";

// import swi from "../images/swi.webp";
// import villa from "../images/5 (1).webp";
// import res from "../images/re.webp";
// import villa2 from "../images/6.webp";
// import compound from "../images/11 (1).webp";
// import villa3 from "../images/5 (2).webp";

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
              src="images/circle_villa-min.jpg"
              loading="lazy"
              alt="Villa Design"
              title={t("Villa Design")}
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src="images/3 (1)-min.jpg"
              loading="lazy"
              alt="Modern Villa"
              title={t("Modern Villa Design")}
              className="img-fluid"
            />
          </div>

          <div>
            <img
              src="images/mo.jpg"
              loading="lazy"
              alt="Modern Mosque Design"
              title={t("Modern Mosque Design")}
              className="img-fluid"
            />
          </div>

          <div>
            <img
              src="images/5 (1)-min.jpg"
              loading="lazy"
              alt="Modern Villa Design"
              title={"Modern Villa Design"}
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src="images/11 (1)-min.jpg"
              loading="lazy"
              alt="Villa Compound Design"
              title={"Villa Compound Design"}
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src="images/villa_compound.jpg"
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
