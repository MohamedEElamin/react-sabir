import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

import { faSnapchatGhost } from "@fortawesome/free-brands-svg-icons";

import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>{t("About Us")}</h2>

            <Link to="/About">{t("Vision")}</Link>
            <Link to="/About">{t("Mission")}</Link>
            <Link to="/About">{t("About Us")}</Link>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>{t("Services")}</h2>
              <Link to="/Services">{t("Architectural")}</Link>
              <Link to="/Services">{t("Civil")}</Link>
              <Link to="/Services">{t("Projects Management")}</Link>
              <Link to="/Services">{t("Interior Design")}</Link>
              <Link to="/Services">{t("General Buildings")}</Link>
            </div>
          </div>

          <div className="footer-link-items">
            <h2>{t("Contact Us")}</h2>
            <Link to="/Contact">{t("Contact")}</Link>
            <Link to="/Contact">{t("Sharjah UAE")}</Link>
            <Link to="/Contact">{t("Ajman UAE")}</Link>
            <Link to="/Contact">{t("Khartoum Sudan")}</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-log"></div>
          <small className="website-rights">
            Sabir Elsir Engineering Consultants © 2024
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link snapchat"
              to="https://www.snapchat.com/add/dr.sabiralsir"
              target="_blank"
              aria-label="Snapchat"
            >
              <FontAwesomeIcon icon={faSnapchatGhost} />
            </Link>
            <Link
              className="social-icon-link facebook"
              to="https://www.facebook.com/profile.php?id=61562617565173"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link tiktok"
              to="https://www.tiktok.com/@sabirelsirengineeringcon"
              target="_blank"
              aria-label="TikTok"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="https://www.instagram.com/sabir.elsir.eng.cons/?hl=en"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>

            <Link
              className="social-icon-link youtube"
              to="https://www.youtube.com/channel/UC7Wa4-UE_2zSp92EgiCK2GQ"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>

            {/* <Link
              className="social-icon-link X"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </Link> */}
            {/* <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
