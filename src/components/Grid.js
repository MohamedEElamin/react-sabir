import "../styles/Cards.css";
import ServiceItem from "../components/ServiceItem";
import { useTranslation } from "react-i18next";

function Grid() {
  const { t } = useTranslation();
  return (
    <div className="calc">
      <div className="cards__container">
        <h1 className="Myh2">
          {t(`Welcome to Sabir Elsir Engineering Consultants`)}
        </h1>
        <div className="">
          <div className="calc">
            <div className="responsive-container">
              <h2>{t("Who We Are")}</h2>
              <p className="main-p">
                {t(
                  "At Sabir Elsir Consulting Office, excellence in engineering consulting has been our passion since 2001. With thriving branches in Sudan and the United Arab Emirates, we proudly deliver outstanding architectural designs, innovative construction solutions, and expert engineering supervision services across the region. What truly sets Sabir Elsir Consulting Office apart among engineering companies is the exceptional expertise of our team. Our consultants proudly hold prestigious qualifications such as the Professional Engineer (PE) License, the Project Management Professional (PMP) Certification, master’s Degrees (MSc) in specialized engineering fields, and even Doctorate Degrees (PhD). These achievements reflect a deep commitment to professional excellence, innovative thinking, and world-class project execution Whether you need visionary designs or meticulous engineering supervision, Sabir Elsir Consulting Office Consulting Office brings unmatched professionalism and decades of experience to every project. We combine academic mastery with hands-on expertise to help clients realize their dreams — safely, sustainably, and beautifully.Discover why Sabir Elsir Consulting Office continues to lead the way among top engineering consulting firms in Sharjah, Ajman, Khartoum, and beyond."
                )}
              </p>
            </div>
          </div>

          <div className="calc">
            <div className="responsive-container">
              <h2>{t("Secrets to Choosing the Right Engineering Partner")}</h2>
              <h3>{t("Key Certifications Every Consultant Should Have")}</h3>
              <p className="main-p">
                {t(
                  "Are You Looking for the Best Engineering Companies in Sharjah, Ajman, and Khartoum? When choosing an engineering consultant for your project, relying on charming words or flashy presentations isn’t enough. You need strong proof and that’s where certified qualifications come into play. Certifications tell you: 'This person has worked hard, learned, and gained the expertise to lead your project to success! Look for a consultant who holds certifications such as:"
                )}
              </p>

              <ul>
                <ul>
                  <li>{t("Professional Engineer (PE) License")}</li>
                  <li>
                    {t("Project Management Professional (PMP) Certification")}
                  </li>
                  <li>
                    {t("Master’s Degree (MSc) in an engineering specialty")}
                  </li>
                  <li>{t("Doctorate Degree (PhD) in their field")}</li>
                </ul>
              </ul>

              <p>
                {t(
                  "These certifications are not just titles; they are proof of years of study, training, and real-world experience. Each certification means the consultant before you has faced academic and professional challenges and is qualified to turn your ideas into successful real-world projects."
                )}
              </p>

              <h3>{t("A Final Tip")}</h3>
              <p>
                {t(
                  "Next time you are searching for an engineering company in Sharjah, Ajman, or Khartoum Always ask about the team's certifications and experience!"
                )}
              </p>
            </div>
          </div>
          <div className="calc">
            <div className="">
              <iframe
                className=" responsive-iframe"
                width="100%"
                height={400}
                src="https://www.youtube-nocookie.com/embed/ioB8sAX-99g?si=pv5gUTAivGXx0Ros"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <ul className="cards__items">
            <ServiceItem
              src="images/modVilla2.jpg"
              alt="Modern Villa Design"
              loading="eager"
              h2={t("Modern Villa Design")}
              text={t(
                "Tailored architectural, structural, and MEP design solutions to fulfill each client's unique needs."
              )}
            />
            <ServiceItem
              src="/images/P17-min.jpg"
              alt="Mosque"
              loading="eager"
              h2={t("Mosque")}
              text={t(
                "Mixed model Mosque design with the most recent technology with sustainable landscape materials."
              )}
            />
            <ServiceItem
              src="/images/re-min.jpg"
              loading="eager"
              alt="Landscape Design"
              h2={t("Landscape Design")}
              text={t(
                "Enhancing Mental Well-being through Outdoor Living with Sustainable Landscape Materials."
              )}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Grid;
