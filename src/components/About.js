import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useTranslation } from "react-i18next";
import "../styles/Cards.css";
import { Helmet } from "react-helmet-async";

const About = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      title: t("Our Mission"),
      text: t(
        "At Sabir Elsir Engineering Consultants, our mission is to earn a reputation as a top-quality Engineering consultant and a reliable engineering consultant services provider in the UAE."
      ),
    },
    {
      id: 3,
      title: t("Our Vision"),
      text: t(
        "At Sabir Elsir Engineering Consultants, our clear vision is to earn 100% customer satisfaction by consistently delivering superior services and solutions at a competitive cost. Our firm commitment to pushing the boundaries of technology-based corporate solutions ensures an unwavering response from our niche market. We believe in limitless growth, a belief that fuels our commitment to sustain our upward trajectory."
      ),
    },

    {
      id: 2,
      imgSrc: "",
      title: t("Why US"),
      text: t(
        "Expert Team: Our consultants are industry leaders with extensive knowledge and experience.Innovative Solutions: We utilize the latest technologies and methodologies to deliver cutting-edge solutions.Client-Centric Approach: Your satisfaction is our priority. We work closely with you to understand your expectations."
      ),
    },
    {
      id: 4,
      imgSrc: "",

      title: t("Our Story"),
      text: t(
        "Sabir Elsir Engineering Consultants Services is a leading company in the Engineering Consultants, established in 2001, with offices in Sudan and UAE. We provide exceptional Design, Construction, Supervision, and Fabrication services, backed by top-tier design capabilities. Our CEO, Sabir Elsir, is a highly qualified professional with a Ph.D. in construction management and has extensive experience of twenty-five years as an architect engineer, covering planning, execution, supervision, and project management. He is also a member of the UAE Engineering Society, a fellow of the Sudanese Architect Society, and a consultant engineer. Our executive manager, Taha Elnour, holds a Ph.D. in civil engineering and has an impressive thirty-two years of experience in civil engineering and construction management."
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title className="Myh2">{t("About")}</title>

        <meta
          name="description"
          content="  We specializes in Architectural and Structural Engineering, among other fields.
نحن متخصصون في الهندسة المعمارية والإنشائية، من بين مجالات أخرى."
        ></meta>

        <link rel="canonical" href="./about"></link>
      </Helmet>

      <h1 className="Myh1">{t("About Sabir Elsir Engineering Consultants")}</h1>
      <div className="calc">
        <div className="card">
          <Row xs={1} md={2} lg={1} className="g-4">
            {data.map((item) => (
              <Col key={item.id}>
                <Card className="">
                  <Card.Img variant="top" src={item.imgSrc} />
                  <Card.Body>
                    <h2 className="card-title-custom">{item.title}</h2>
                    <h3 className="card-text-custom">{item.text}</h3>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <br />
      </div>
    </>
  );
};

export default About;
