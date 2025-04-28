// src/components/Map.js
import React, { useRef, useState } from "react";
import "../styles/Cards.css";
import { Row, Col, Card } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Map = ({ location }) => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_h0il90i",
      "template_cjgzv7r",
      form.current,
      "R53zKxDTRI_IMv4mx"
    );
    // .then(
    //   (result) => {
    //     console.log(result.text);
    //     setSuccessMessage(
    //       t("Thank you! Message sent successfully. We will contact you soon.")
    //     );
    //   },
    //   (error) => {
    //     console.log(error.text);
    //     setSuccessMessage(t("Failed to send the message. Please try again."));
    //   }
    // );
  };

  const { t } = useTranslation();

  const form = useRef(null);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const validate = () => {
    if (!form.current) {
      console.error("form.current is null");
      return {};
    }
    const formElements = form.current.elements;
    const newErrors = {};

    if (!formElements.user_name.value.trim()) {
      newErrors.user_name = t("Name is required");
    }

    const phonePattern = /^\+?[1-9]\d{1,14}$/;
    if (!formElements.phone.value.match(phonePattern)) {
      newErrors.phone = t("Enter a valid phone number");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formElements.user_email.value.match(emailPattern)) {
      newErrors.user_email = t("Enter a valid email address");
    }

    if (!formElements.message.value.trim()) {
      newErrors.message = t("Message is required");
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Assuming you have a function to send the form data
      sendFormData(form.current)
        .then((result) => {
          console.log(result.text);
          setSuccessMessage(
            t("Thank you! Message sent successfully. We will contact you soon.")
          );
        })
        .catch((error) => {
          console.log(error.text);
          setSuccessMessage(t("Failed to send the message. Please try again."));
        });
    }
  };

  // Placeholder function for sending form data
  const sendFormData = (formData) => {
    return new Promise((resolve, reject) => {
      // Simulating a successful form submission
      setTimeout(() => {
        resolve({ text: "Success" });
      }, 1000);
      // Uncomment the line below to simulate a failure
      // setTimeout(() => { reject({ text: "Error" }); }, 1000);
    });
  };

  return (
    <>
      <div className="calc">
        <h1 className="Myh1">
          {t("Contact Sabir Elsir Engineering Consultants")}
        </h1>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body className="calc2">
                <h3>{t("Sharjah UAE")}</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.848116567497!2d55.38329977538656!3d25.34287717761749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5bc92e8eac93%3A0x3c85516abfef18aa!2sBell%20Rashid%20Towers%20-%20Corniche%20St%20-%20Al%20Majaz%201%20-%20Al%20Majaz%20-%20Sharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1717694266783!5m2!1sen!2sus"
                  width="100%"
                  height="465"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map 3"
                ></iframe>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body className="calc2">
                <h3>{t("Khartoum Sudan")}</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.7143868319603!2d32.558500725483576!3d15.595707697674648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x168e91b00d257a39%3A0x30ba9f11fdf738be!2z2LnZhdin2LHYqSDYp9mE2KjYr9ix!5e0!3m2!1sen!2sus!4v1718587546236!5m2!1sen!2sus"
                  width="100%"
                  height="465"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map 2"
                ></iframe>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body className="calc2">
                <h3>{t("Ajman UAE")}</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14414.321060014643!2d55.428171159773186!3d25.41885697013976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5770f5c0c4af%3A0xe23009abbf0652b4!2sAl%20Owan%20-%20Al%20Nakhil%202%20-%20Ajman%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1717700155252!5m2!1sen!2sus"
                  width="100%"
                  height="465"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map 1"
                ></iframe>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body className="calc2">
                <div className="StyledContactForm">
                  <br /> <h3>{t("Contact Us")}</h3>
                  <br />
                  <form ref={form} onSubmit={sendEmail}>
                    <label>{t("Name")}</label>
                    <div>
                      <input
                        type="text"
                        placeholder={t("Enter your Name")}
                        name="user_name"
                      />
                      {errors.user_name && <span>{errors.user_name}</span>}
                      <br />
                      <label>{t("Phone")}</label>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder={t("Enter your Phone Number")}
                        name="phone"
                      />
                      {errors.phone && <span>{errors.phone}</span>}
                      <label>{t("Email")}</label>
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder={t("Enter your Email")}
                        name="user_email"
                      />
                      {errors.user_email && <span>{errors.user_email}</span>}
                      <label>{t("Message")}</label>
                    </div>
                    <div>
                      <textarea
                        placeholder={t("Enter your Message")}
                        name="message"
                      />
                      {errors.message && <span>{errors.message}</span>}
                    </div>
                    <br />
                    <br />
                    <button
                      type="submit"
                      className="success"
                      onClick={handleSubmit}
                    >
                      {t("Submit")}
                    </button>
                    <br />
                    {successMessage && <p>{successMessage}</p>}
                  </form>
                  <br />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <div className="addr">
                <Card.Body className="calc2">
                  <br />
                  <h2>{t("Address")}</h2> <br />
                  <br />
                  <h4>
                    {t(
                      "Sharjah-Almajaz(1)- Balrasheed Tower (1)-Floor 22 - office 2203"
                    )}
                  </h4>
                  <br />
                  <br />
                  <h4>{t("Ajman-Nakheel 2 Office No. 190")}</h4>
                  <br /> <br />
                  <h3>{t("Office Hours")}</h3>
                  <h4>{t("Saturday to Thursday: 9:00 AM to 5:00 PM")}</h4>
                  <br /> <br />
                  <h3>{t("Email")}</h3>
                  {/* <h4>sabirelgabri@sabirelsir.ae </h4> */}
                  <h4>sabir.elsir.eng.cons@gmail.com</h4>
                  <br />
                  <br />
                  <h3>{t("Phone")}</h3>
                  <h4>
                    +971552771408 <br />
                    +974547099448
                  </h4>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Map;
