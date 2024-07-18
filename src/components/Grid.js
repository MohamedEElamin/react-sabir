import "../styles/Cards.css";
import ServiceItem from "../components/ServiceItem";
import { useTranslation } from "react-i18next";

function Grid() {
  const { t } = useTranslation();
  return (
    <div className="cards">
      <div className="cards__container">
        <h1 className="Myh2">
          {t("Welcome to Sabir Elsir Engineering Consultants")}
        </h1>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <div className="responsive-container">
              <h2>{t("Who We Are")}</h2>
              <p>
                {t(
                  "Sabir Elsir Engineering Consultants Services has been a leader in engineering consultancy since 2001. With branches in Sudan and the United Arab Emirates, we offer exceptional architectural and structural planning and engineering supervision with top-tier design capabilities."
                )}
              </p>
            </div>
            <iframe
              className="responsive-iframe"
              src="https://www.youtube-nocookie.com/embed/ioB8sAX-99g?si=pv5gUTAivGXx0Ros"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </ul>

          <ul className="cards__items">
            <ServiceItem
              src="../images/5 (1).webp"
              alt="Modern Villa Design"
              h2={t("Modern Villa Design")}
              text={t(
                "Tailored architectural, structural, and MEP design solutions to fulfill each client's unique needs."
              )}
            />
            <ServiceItem
              src="../images/P7.webp"
              akt="Mosque"
              h2={t("Mosque")}
              text={t(
                "Mixed model Mosque design with the most recent technology with sustainable landscape materials."
              )}
            />
            <ServiceItem
              src="../images/re.webp"
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
