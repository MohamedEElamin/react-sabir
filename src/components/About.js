import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Cards.css";
import { Helmet } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import PageIntro from "./PageIntro";

const About = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar");

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Learn about Sabir Elsir Engineering Consultants, a trusted name in engineering consultancy and supervision services since 2001 across the UAE and Sudan."
        />
        <meta
          name="keywords"
          content="about Sabir Elsir, engineering consultants UAE, engineering company Sharjah, supervision services, consultancy firm"
        />
        <title className="Myh2">{t("About")}</title>
        <meta
          name="description"
          content="تعرّف على شركة صابر السر للاستشارات الهندسية، الاسم الموثوق في مجال الاستشارات الهندسية والإشراف على المشاريع منذ عام 2001 في الإمارات والسودان."
        />
        <meta
          name="keywords"
          content="من نحن صابر السر، شركة استشارات هندسية، شركات هندسية في الشارقة، الإشراف الهندسي، شركة هندسية الإمارات"
        />

        <link rel="canonical" href="https://www.sabirelsir.ae/About"></link>
        <meta name="language" content="AR, EN"></meta>
      </Helmet>

      <PageIntro
        eyebrow={isArabic ? "من نحن" : "About us"}
        title={
          isArabic
            ? "عن صابر السر للاستشارات الهندسية"
            : "About Sabir Elsir Engineering Consultants"
        }
        description={
          isArabic
            ? "خبرة في الاستشارات الهندسية والتصميم والإشراف في الإمارات والسودان منذ عام 2001."
            : "Engineering consultancy, design, and supervision across the UAE and Sudan since 2001."
        }
      />
      <section className="site-page-content about-page-content">
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{t("Our Mission")}</h5>
                <p className="card-text">
                  {t(
                    "Our mission is to provide smart, reliable, and efficient engineering services that add value to every project. As one of the best Engineering Consultants in Ajman UAE, we focus on delivering quality design and supervision with precision and professionalism. We aim to support our clients through every phase of the project, from concept to completion, ensuring excellence in execution and long-term satisfaction.",
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
                    "We envision becoming the benchmark for engineering consultant companies in Sharjah and across the UAE. Our goal is to lead the industry by adopting cutting-edge technologies, promoting sustainable development, and continuously enhancing our service delivery. As we look ahead, we strive to maintain our reputation as one of the top Engineering Consultants in Sharjah UAE, known for our commitment to integrity and innovation.",
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
                    "As one of the top engineering companies in Sharjah, our journey began with a vision to redefine engineering consultancy in the UAE. From our humble beginnings, we’ve grown into a trusted name among the top Engineering Consultants in Sharjah UAE and beyond. Our expertise spans residential, commercial, and infrastructure projects—delivering innovative and sustainable solutions to clients across the Emirates. With a deep understanding of local regulations and international standards, we continue to shape Sharjah’s skyline with excellence.",
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
                    "Choosing us means partnering with one of the most respected engineering consultant companies in Sharjah. We bring unmatched technical expertise, personalized service, and a strong track record of successful projects. Whether you're seeking the best Engineering Consultants in Ajman UAE or dependable engineering support in Sharjah, our team is dedicated to turning your vision into reality—on time and within budget.",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
