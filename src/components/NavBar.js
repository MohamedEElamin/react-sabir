import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import withTrans from "./withTranslation";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);

    // Cleanup event listener to avoid memory leaks
    return () => window.removeEventListener("resize", showButton);
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";

    if (i18n.language === "ar") {
      document.body.classList.add("arabic");
    } else {
      document.body.classList.remove("arabic");
    }
  }, [i18n.language]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img
            className="logo"
            src="/images/logo-part-min.jpg"
            alt={t("Sabir Elsir Engineering Consultants logo")}
            title={t("Sabir Elsir Engineering Consultants logo")}
          />
          <i className="fab fa-typ" />
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              {t("Home")}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              {t("Services")}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
              {t("About")}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-links" onClick={closeMobileMenu}>
              {t("Contact")}
            </Link>
          </li>
        </ul>

        <button onClick={toggleLanguage} className="language-toggle">
          {language === "en" ? "العربية" : "English"}
        </button>
      </div>
    </nav>
  );
};

export default withTrans(Navbar);
