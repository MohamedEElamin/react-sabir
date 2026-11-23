import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
import withTrans from "./withTranslation";
import { useTranslation } from "react-i18next";
import Link from "./LocalizedLink";
import {
  getLanguageFromPath,
  getLocalizedPath,
} from "../utils/localizedRoutes";

const Navbar = () => {
  const { i18n, t } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language || "en";
  const location = useLocation();
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const toggleLanguage = async () => {
    const newLanguage = language.startsWith("en") ? "ar" : "en";
    await i18n.changeLanguage(newLanguage);
    navigate(getLocalizedPath(location.pathname, newLanguage));
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
    const pathLanguage = getLanguageFromPath(location.pathname);
    if (!language.startsWith(pathLanguage)) {
      i18n.changeLanguage(pathLanguage);
    }
  }, [i18n, language, location.pathname]);

  useEffect(() => {
    const isArabic = language.startsWith("ar");
    document.documentElement.lang = isArabic ? "ar" : "en";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.body.classList.toggle("arabic", isArabic);
  }, [language]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img
            className="logo"
            src="/images/logo-part-min.jpg"
            alt={t("Sabir Elsir Engineering Consultants logo")}
            title={t("Sabir Elsir Engineering Consultants logo")}
            width="945"
            height="334"
          />
          <i className="fab fa-typ" />
        </Link>

        <button
          type="button"
          className="menu-icon"
          onClick={handleClick}
          aria-label={
            language.startsWith("ar")
              ? click
                ? "إغلاق قائمة التنقل"
                : "فتح قائمة التنقل"
              : click
                ? "Close navigation menu"
                : "Open navigation menu"
          }
          aria-expanded={click}
          aria-controls="primary-navigation"
        >
          <i
            aria-hidden="true"
            className={click ? "fas fa-times" : "fas fa-bars"}
          />
        </button>

        <ul
          id="primary-navigation"
          className={click ? "nav-menu active" : "nav-menu"}
        >
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
            <Link to="/areas" className="nav-links" onClick={closeMobileMenu}>
              {t("Areas We Serve")}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              {t("About")}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/founder-profile"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              {i18n.language.startsWith("ar") ? "المؤسس" : "Founder"}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              {t("Contact")}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/faq" className="nav-links" onClick={closeMobileMenu}>
              {i18n.language.startsWith("ar") ? "الأسئلة الشائعة" : "FAQ"}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
              {i18n.language.startsWith("ar") ? "المدونة" : "Blog"}
            </Link>
          </li>
        </ul>

        <button onClick={toggleLanguage} className="language-toggle">
          {language.startsWith("en") ? "العربية" : "English"}
        </button>
      </div>
    </nav>
  );
};

export default withTrans(Navbar);
