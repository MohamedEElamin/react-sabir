import React from "react";
import "../styles/Cards.css";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import ServiceItem from "./ServiceItem";

const OurServices = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>الخدمات الهندسية | شركة صابر السر</title>
        <meta
          name="description"
          content="تعرّف على خدمات الاستشارات الهندسية، التصميم المعماري، والإشراف على المشاريع في الإمارات والسودان منذ عام 2001."
        />
        <meta
          name="keywords"
          content="الاستشارات الهندسية، التصميم المعماري، إشراف هندسي، شركات هندسية في الشارقة، شركة صابر السر"
        />
        <meta
          name="description"
          content="Explore our engineering consultancy, architecture, and supervision services across the UAE and Sudan since 2001."
        />
        <meta
          name="keywords"
          content="engineering consultants UAE, architectural design Sharjah, project supervision Ajman, engineering companies in Sharjah"
        />
        <title className="Myh2">{t("Services")}</title>

        <link rel="canonical" href="https://www.sabirelsir.ae/services"></link>
        <meta name="language" content="EN, AR"></meta>
      </Helmet>
      <br />
      <br />
      <br />
      <div className="container ">
        <div className="card">
          <br />
          <br />

          <h1 className="Myh2">
            {t("Sabir Elsir Engineering Consultants's Services")}
          </h1>
          <br />
          <div className="card">
            <img
              className="card-img-top"
              src="images/vils-min.jpg"
              loading="lazy"
              alt="modern villa design"
              title="Architectural Engineering Consultancy"
            />
            <div className="card-body">
              <h5 className="card-title">
                {t("Architectural Engineering Consultancy")}
              </h5>
              <br />
              <p className="card-text">
                {t(
                  "As one of the top engineering companies in Sharjah and Ajman, Sabir Elsir Engineering Office stands out for its exceptional Architectural Engineering Consultancy services tailored to meet the dynamic needs of the UAE's growing construction and infrastructure sectors. Recognized among leading engineering companies in Sharjah, we specialize in innovative architectural design, sustainable development, and regulatory-compliant planning. Our team of experienced architects and engineers delivers bespoke solutions for residential, commercial, and industrial projects, ensuring both aesthetic value and structural integrity. From concept to completion, Sabir Elsir Engineering Office remains a trusted partner for quality, precision, and visionary design."
                )}
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="card">
          <img
            src="images/13 (2)-min.jpg"
            loading="lazy"
            alt="Modern circular staircase design"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{t("Civil Engineering Consultancy")}</h5>
            <br />
            <p className="card-text">
              {t(
                "Sabir Elsir Engineering Consultants Office is one of the most experienced and trusted civil engineering consultancy firms in the UAE, proudly serving Sharjah and Ajman with innovative, cost-effective, and sustainable engineering solutions. With a proven track record in structural design, infrastructure planning, and project management, Sabir Elsir Engineering Consultants combines technical expertise with local regulatory knowledge to deliver high-quality services across residential, commercial, and industrial projects. As a leading civil engineering consultant in Sharjah and Ajman, our commitment to engineering excellence and client satisfaction has positioned us as a top choice for developers, contractors, and government entities alike."
              )}
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="images/3-min.jpg"
              loading="required"
              alt="General Building"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                {t("General Buildings Engineering  Consultancy")}
              </h5>
              <br />
              <p className="card-text">
                {t(
                  "As one of the leading engineering companies in Sharjah and Ajman, Sabir Elsir Engineering Office stands out with its exceptional expertise in General Buildings Engineering Consultancy. With decades of experience in structural design, architectural planning, and construction supervision, we offer innovative and compliant solutions for residential, commercial, and mixed-use developments. Recognized among the top engineering companies in Sharjah, our team delivers tailored engineering services that meet the highest standards of quality, safety, and sustainability—making us the trusted partner for developers, contractors, and government entities across the UAE."
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="images/int2.jpg"
              loading="lazy"
              alt="Interior Design"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                {t("Interior Design Engineering Consultancy")}
              </h5>
              <br />
              <p className="card-text">
                {t(
                  "As one of the leading engineering companies in Sharjah and Ajman, Sabir Elsir Engineering Office specializes in Interior Design Engineering Consultancy that blends functionality, aesthetics, and structural integrity. Unlike many engineering companies in Sharjah, we offer a holistic approach to interior design by combining architectural vision with advanced engineering solutions tailored to residential, commercial, and hospitality spaces. From space planning and 3D visualization to material selection and MEP integration, our experienced consultants ensure that every detail aligns with client goals and regulatory standards across the UAE."
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="/images/4 (3)-min.jpg"
              loading="lazy"
              alt=" villa design"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                {t("Engineering Projects Management Consultancy")}
              </h5>
              <br />
              <p className="card-text">
                {t(
                  "As one of the leading engineering companies in Sharjah, Sabir Elsir  Engineering Office specializes in comprehensive project management consultancy services tailored to meet the diverse needs of the construction and infrastructure sectors. Recognized among top civil engineering companies in Sharjah, we deliver expert guidance from concept to completion—ensuring projects are executed on time, within budget, and to the highest standards. With a strong focus on quality control, risk mitigation, and regulatory compliance, Sabir Elsir Engineering Office empowers developers and contractors to achieve sustainable success in every phase of engineering project execution."
                )}
              </p>
            </div>
          </div>
        </div>
        <p />

        <div class="col-md-0"></div>
      </div>
    </>
  );
};

export default OurServices;
