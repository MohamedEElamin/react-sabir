import React from "react";
import "../styles/Cards.css";
import ServiceItem from "../components/ServiceItem";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

// import architectural from "../images/7.webp";
// import civil from "../images/13 (2).webp";
// import Interior from "../images/11.webp";
// import building from "../images/3.webp";

const OurServices = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title className="Myh2">{t("Services")}</title>
        <meta
          name="description"
          content="Explore our consultancy services, architectural, civil, project management, and more. استكشف خدماتنا الاستشارية، الاستشارات المعمارية والمدنية وإدارة المشاريع والمزيد"
        ></meta>
        <link rel="canonical" href="./Services.js"></link>
        <meta name="language" content="EN, AR"></meta>
      </Helmet>
      <div className="cards">
        <div className="cards__container">
          <h1 className="Myh2">
            {t("Sabir Elsir Engineering Consultants's Services")}
          </h1>
          <div className="cards__wrapper">
            <ul className="cards__items">
              <ServiceItem
                src="images/vils-min.jpg"
                loading="lazy"
                alt="modern villa design"
                title="Architectural Engineering Consultancy"
                h2={t("Architectural Engineering Consultancy")}
                text={t(
                  "Sabir Elsir Engineering Consultancy provides comprehensive solutions  that integrate architectural design with engineering excellence. Our team collaborates closely with clients to deliver innovative designs, precise engineering, and seamless project management from concept to completion."
                )}
              />
              <ServiceItem
                src="images/13 (2)-min.jpg"
                loading="lazy"
                alt="Modern circular staircase design"
                title="Civil Engineering Consultancy"
                h2={t("Civil Engineering Consultancy")}
                text={t(
                  "Sabir Elsir Engineering Consultants confidently provides a wide range of high-quality civil engineering services, such as structural design services, building rehabilitation, structural reinforcement, building remodeling"
                )}
              />
            </ul>
            <ul className="cards__items">
              <ServiceItem
                src="/images/4 (3)-min.jpg"
                loading="lazy"
                alt=" villa design"
                title="Engineering Projects Management Consultancy"
                h2={t("Engineering Projects Management Consultancy")}
                text={t(
                  "Sabir Elsir Engineering Consultants is your premier choice for Engineering Projects Management Consultancy. Our top-tier services guarantee the successful execution of complex engineering projects. From planning and feasibility studies to design coordination, procurement, and construction oversight, we offer end-to-end project management solutions. Our expert team is dedicated to optimizing project performance and ensuring adherence to timelines, budgets, and quality standards."
                )}
              />
              <ServiceItem
                src="/images/2 (1)-min.jpg"
                loading="lazy"
                alt="Interior Design"
                title="Interior Design Engineering Consultancy"
                h2={t("Interior Design Engineering Consultancy")}
                text={t(
                  "At Sabir Elsir Engineering Consultants, we specialize in providing personalized Interior design services for both residential and commercial spaces. Our skilled engineers are committed to incorporating functionality and sustainability into every project. From initial idea to final execution, we meticulously oversee every aspect of the process to ensure our client's active involvement and satisfaction. The result is extraordinary designs that elevate the appeal and value of their spaces."
                )}
              />
              <ServiceItem
                src="images/3-min.jpg"
                loading="required"
                alt="General Building"
                title="General Buildings Engineering  Consultancy"
                h2={t("General Buildings Engineering  Consultancy")}
                text={t(
                  "Boost your construction projects with Sabir Elsir Engineering Consultants. Our comprehensive building engineering consultancy services offer expert guidance and innovative solutions for architectural, structural, electrical, and mechanical engineering. Collaborating closely with clients, architects, and contractors, we ensure every aspect of your building is designed for safety, efficiency, and durability."
                )}
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
