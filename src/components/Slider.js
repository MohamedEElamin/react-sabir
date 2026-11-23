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
    autoplaySpeed: 5000,
    prevArrow: (
      <button type="button" aria-label="Previous slide">
        Previous
      </button>
    ),
    nextArrow: (
      <button type="button" aria-label="Next slide">
        Next
      </button>
    ),
  };

  const { i18n, t } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar") === true;

  return (
    <div className="calc">
      <Slider {...settings} className="Container fluid">
        <div className="slide">
          <img
            src="/images/circle_villa-min.webp"
            loading="eager"
            fetchPriority="high"
            alt={isArabic ? "تصميم فيلا معاصر" : "Contemporary villa design"}
            className="img-fluid"
            width="1920"
            height="1080"
          />
        </div>
        <div className="slide">
          <img
            src="/images/vils-min.webp"
            alt={isArabic ? "تصميم فيلا كلاسيكية" : "Classic villa design"}
            loading="lazy"
            title={t("Classic Villa Design")}
            className="img-fluid"
            width="1920"
            height="1080"
          />
        </div>

        <div className="slide">
          <img
            src="/images/تصميم مسجد-min.webp"
            loading="lazy"
            alt={isArabic ? "تصميم مسجد حديث" : "Modern mosque design"}
            title={t("Modern Mosque Design")}
            className="img-fluid"
            width="1920"
            height="1080"
          />
        </div>

        <div className="slide">
          <img
            src="/images/li.webp"
            loading="lazy"
            alt={isArabic ? "تصميم داخلي" : "Interior design"}
            title={t("Interior Design")}
            className="img-fluid"
            width="1600"
            height="900"
          />
        </div>

        <div className="slide">
          <img
            src="/images/villa_compound.webp"
            loading="lazy"
            alt={isArabic ? "تصميم مجمع فلل" : "Villa compound design"}
            title={"Villa Compound"}
            className="img-fluid"
            width="1920"
            height="1080"
          />
        </div>
        <div className="slide">
          <img
            src="/images/000.webp"
            loading="lazy"
            alt={isArabic ? "تصميم فيلا" : "Villa design"}
            title={"Villa"}
            className="img-fluid"
            width="1920"
            height="1080"
          />
        </div>
      </Slider>
    </div>
  );
};

export default AutoSlider;
