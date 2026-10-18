import "../styles/Cards.css";
import { useTranslation } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/VideoWatchPage.css";

function Grid() {
  const { t, i18n } = useTranslation();
  return (
    <div className="home-page">
      {/* Articles Section */}

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{t("Who We Are")}</h5>
                <br />
                <p className="card-text">
                  {t(
                    "At Sabir Elsir Consulting Office, excellence in engineering consulting has been our passion since 2001. With thriving branches in Sudan and the United Arab Emirates, we proudly deliver outstanding architectural designs, innovative construction solutions, and expert engineering supervision services across the region. What truly sets Sabir Elsir Consulting Office apart among engineering companies is the exceptional expertise of our team. Our consultants proudly hold prestigious qualifications such as the Professional Engineer (PE) License, the Project Management Professional (PMP) Certification, master’s Degrees (MSc) in specialized engineering fields, and even Doctorate Degrees (PhD). These achievements reflect a deep commitment to professional excellence, innovative thinking, and world-class project execution Whether you need visionary designs or meticulous engineering supervision, Sabir Elsir Consulting Office Consulting Office brings unmatched professionalism and decades of experience to every project. We combine academic mastery with hands-on expertise to help clients realize their dreams — safely, sustainably, and beautifully.Discover why Sabir Elsir Consulting Office continues to lead the way among top engineering consulting firms in Sharjah, Ajman, Khartoum, and beyond.",
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  {t("Key Certifications Every Consultant Should Have")}
                </h5>
                <br />
                <p className="card-text">
                  {t(
                    "Are You Looking for the Best Engineering Companies in Sharjah, Ajman, and Khartoum? When choosing an engineering consultant for your project, relying on charming words or flashy presentations isn’t enough. You need strong proof and that’s where certified qualifications come into play. Certifications tell you: 'This person has worked hard, learned, and gained the expertise to lead your project to success! Look for a consultant who holds certifications such as:",
                  )}
                </p>

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
                <p>
                  {t(
                    "These certifications are not just titles; they are proof of years of study, training, and real-world experience. Each certification means the consultant before you has faced academic and professional challenges and is qualified to turn your ideas into successful real-world projects.",
                  )}
                </p>

                <h5>{t("A Final Tip")}</h5>
                <p>
                  {t(
                    "Next time you are searching for an engineering company in Sharjah, Ajman, or Khartoum Always ask about the team's certifications and experience!",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="home-video-promo">
        <Link
          className="home-video-thumbnail"
          to="/videos/modern-villa-design"
          aria-label={
            i18n.language.startsWith("ar")
              ? "شاهد فيديو تصميم فيلا حديثة"
              : "Watch the modern villa design video"
          }
        >
          <img
            src="https://i.ytimg.com/vi/ioB8sAX-99g/hqdefault.jpg"
            alt={
              i18n.language.startsWith("ar")
                ? "صورة مصغرة لفيديو تصميم فيلا حديثة"
                : "Thumbnail for the modern villa design video"
            }
            loading="lazy"
            width="480"
            height="360"
          />
          <span className="home-video-play" aria-hidden="true">
            ▶
          </span>
        </Link>
        <div className="home-video-copy">
          <p className="home-video-eyebrow">
            {i18n.language.startsWith("ar") ? "من أعمالنا" : "Project video"}
          </p>
          <h2>
            {i18n.language.startsWith("ar")
              ? "تصميم فيلا حديثة"
              : "Modern Villa Design"}
          </h2>
          <p>
            {i18n.language.startsWith("ar")
              ? "شاهد عرضاً لتصميم فيلا حديثة من صابر السر للاستشارات الهندسية."
              : "Watch a modern villa design presentation by Sabir Elsir Engineering Consultants."}
          </p>
          <Link
            className="home-video-watch-link"
            to="/videos/modern-villa-design"
          >
            {i18n.language.startsWith("ar") ? "شاهد الفيديو" : "Watch video"}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <div className="container my-5">
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="images/modVilla2.jpg"
                className="card-img-top"
                alt="Modern Villa Design"
                loading="eager"
                width={400}
              />
              <div className="card-body">
                <h5 className="card-title">{t("Modern Villa Design")}</h5>
                <p className="card-text">
                  {t(
                    "Our engineering consultancy in Sharjah and Ajman specializes in bespoke modern villa designs that combine luxury with functional elegance. We incorporate cutting-edge architectural trends and sustainable building practices to create villas that are visually striking and environmentally responsible. Our team works closely with clients to ensure every design detail aligns with their vision and lifestyle needs. With extensive experience in the UAE's residential sector, we understand the local regulations and cultural aesthetics essential for villa development. Choose us to transform your land into a modern sanctuary that reflects innovation and comfort.",
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="/images/P17-min.jpg"
                alt="Mosque"
                loading="eager "
                className="card-img-top"
                width={400}
              />
              <div className="card-body">
                <h5 className="card-title">{t(" Mosque")}</h5>
                <p className="card-text">
                  {t(
                    "As a leading engineering consultant in Sharjah and Ajman, we offer distinguished mosque design services that honor Islamic architectural heritage while integrating modern engineering solutions. Our team emphasizes spiritual ambiance, acoustics, and optimal prayer space orientation in every mosque project. We adhere strictly to UAE building codes and cultural sensitivities to deliver places of worship that resonate with community values. From domes and minarets to interior calligraphy and lighting, we design mosques that are both structurally sound and spiritually inspiring. Trust us to bring your vision of a sacred space to life with precision and respect.",
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="/images/re-min.jpg"
                loading="eager"
                alt="Landscape Design"
                className="card-img-top"
                width={400}
              />
              <div className="card-body">
                <h5 className="card-title">{t("Landscape Design")}</h5>
                <p className="card-text">
                  {t(
                    "We provide innovative landscape design solutions in Sharjah and Ajman, enhancing outdoor spaces for residential, commercial, and public projects. Our designs blend natural beauty with sustainable practices, ensuring minimal water usage and environmental impact in the UAE’s arid climate. From garden layouts and hardscaping to lighting and irrigation systems, we create cohesive outdoor experiences that elevate property value. Our landscape architects collaborate closely with clients to craft spaces that are both visually appealing and functionally practical. Let us transform your surroundings into a serene and welcoming environment tailored to your lifestyle or brand.",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
