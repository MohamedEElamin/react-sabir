import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "../styles/Cards.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import swi from "../images/circle_villa-min.jpg ";
// import villa from "/images/3 (1)-min.jpg";
// import res from "../images/P17-min.jpg";
// import intt from "../images/int.jpg";
// import villa3 from "../images/villa_compound.jpg";
// import vd from "../images/VillaT.jpg";

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
            src="images/circle_villa-min.jpg"
            loading="lazy"
            alt="sdffn"
            class="img-fluid"
            width="800"
            height="600"
          />
        </div>
        <div className="slide">
          <img
            src="images/vils-min.jpg"
            alt="Classic Villa"
            loading="eager"
            title={t("Classic Villa Design")}
            className="img-fluid"
          />
        </div>

        <div className="slide">
          <img
            src="images/تصميم مسجد-min.jpg"
            loading="lazy"
            alt="Modern Mosque Design"
            title={t("Modern Mosque Design")}
            className="img-fluid"
          />
        </div>

        <div className="slide">
          <img
            src="images/li.jpg"
            loading="lazy"
            alt="Interior Design"
            title={t("Interior Design")}
            className="img-fluid"
          />
        </div>

        <div className="slide">
          <img
            src="images/villa_compound.jpg"
            loading="lazy"
            alt="Villa"
            title={"Villa Compound"}
            className="img-fluid"
          />
        </div>
        <div className="slide">
          <img
            src="images/000.jpg"
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
