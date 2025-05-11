import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Cards.css";
import { Helmet } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title className="Myh2">{t("About")}</title>
        <meta
          name="description"
          content="مكتب صابر السر هو مكتب هندسي منخصص في الهندسة المعمارية والإنشائية 
          We specializes in Architectural and Structural Engineering."
        ></meta>
        <link rel="canonical" href="https://www.sabirelsir.com/About"></link>
        <meta name="language" content="AR, EN"></meta>
      </Helmet>

      <div className="container my-5">
        <h1 className="Myh1">
          {t("About Sabir Elsir Engineering Consultants")}
        </h1>
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{t("Our Mission")}</h5>
                <p className="card-text">
                  {t(
                    "Our mission is to provide smart, reliable, and efficient engineering services that add value to every project. As one of the best Engineering Consultants in Ajman UAE, we focus on delivering quality design and supervision with precision and professionalism. We aim to support our clients through every phase of the project, from concept to completion, ensuring excellence in execution and long-term satisfaction."
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{t("Our Vision")}</h5>
                <p className="card-text">
                  {t(
                    "We envision becoming the benchmark for engineering consultant companies in Sharjah and across the UAE. Our goal is to lead the industry by adopting cutting-edge technologies, promoting sustainable development, and continuously enhancing our service delivery. As we look ahead, we strive to maintain our reputation as one of the top Engineering Consultants in Sharjah UAE, known for our commitment to integrity and innovation."
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{t("Our Story")}</h5>
                <p className="card-text">
                  {t(
                    "As one of the top engineering companies in Sharjah, our journey began with a vision to redefine engineering consultancy in the UAE. From our humble beginnings, we’ve grown into a trusted name among the top Engineering Consultants in Sharjah UAE and beyond. Our expertise spans residential, commercial, and infrastructure projects—delivering innovative and sustainable solutions to clients across the Emirates. With a deep understanding of local regulations and international standards, we continue to shape Sharjah’s skyline with excellence."
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{t("Why US")}</h5>
                <p className="card-text">
                  {t(
                    "Choosing us means partnering with one of the most respected engineering consultant companies in Sharjah. We bring unmatched technical expertise, personalized service, and a strong track record of successful projects. Whether you're seeking the best Engineering Consultants in Ajman UAE or dependable engineering support in Sharjah, our team is dedicated to turning your vision into reality—on time and within budget."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
