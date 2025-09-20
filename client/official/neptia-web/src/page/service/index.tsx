import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "@page/service/index.css";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Service() {
  const { t } = useTranslation();
  const services = t("services", { returnObjects: true }) as [];
  const navigate = useNavigate();

  return (
    <div
      className="services-page-business"
      style={{ padding: "120px 0 80px 0" }}
    >
      {services.map((service: any, sidx: any) => (
        <section className="service-glass-card" key={sidx}>
          <Container style={{ padding: "0 0 0 0" }}>
            <Row
              className="align-items-center service-glass-row"
              //   style={{ padding: '0 48px 0 48px' }}
            >
              <Col md={8} className="service-glass-content">
                <div className="service-glass-title">{service.title}</div>
                <div className="service-glass-items">
                  {service.items.map((item: any, idx: any) => (
                    <div className="service-glass-item" key={idx}>
                      <div className="service-glass-subtitle">
                        <span className="service-glass-dot" />
                        {item.subtitle}
                      </div>
                      <div
                        className="service-glass-desc"
                        dangerouslySetInnerHTML={{
                          __html: item.desc.replace(/\n/g, "<br/>"),
                        }}
                      />
                    </div>
                  ))}
                </div>
              </Col>
              <Col md={4} className="service-glass-number-col">
                <div className="service-glass-number">
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      maxHeight: "500px",
                      minHeight: "500px",
                      objectFit: "cover",
                    }}
                    src={service.bgSrc}
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      ))}

      {/* CTA Section */}
      <section
        className="cta-section"
        style={{
          background: "#fff",
          padding: "80px 0",
          color: "white",
        }}
      >
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={8} className="text-center mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="fw-bold mb-4" style={{ fontSize: "2.5rem" }}>
                  {t("home.cta.title")}
                </h2>
                <p
                  className="lead mb-5"
                  style={{
                    fontSize: "1.3rem",
                    opacity: 0.9,
                  }}
                >
                  {t("home.cta.subtitle")}
                </p>
                <Button
                  onClick={() => navigate("/home/contact")}
                  variant="light"
                  size="lg"
                  style={{
                    minWidth: 200,
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    padding: "12px 30px",
                    borderRadius: "50px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  }}
                >
                  {t("home.cta.button")}
                  <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                </Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Service;
