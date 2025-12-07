import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Index() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const indexData = t("index", { returnObjects: true }) as Record<string, any>;

  return (
    <div className="home-page" style={{ padding: "120px 0 80px 0" }}>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          padding: "0 0 30px 0",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>\')',
            opacity: 0.3,
          }}
        />
        <Container
          style={{
            position: "relative",
            zIndex: 2,
            // backgroundImage:
            //   'url("https://img1.baidu.com/it/u=645583569,3263128764&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067")',
            // backgroundSize: 'contain', // 确保图片覆盖整个容器
            // backgroundPosition: 'center', // 图片居中
            // backgroundRepeat: 'no-repeat', // 防止图片重复
          }}
        >
          <Row className="align-items-center justify-content-center">
            <Col lg={10} className="text-center mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1
                  className="fw-bold mb-3"
                  style={{
                    fontSize: "3.5rem",
                    letterSpacing: "0.02em",
                    textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  {t("index.hero.title")}
                </h1>
                <h2
                  className="mb-4"
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 300,
                    opacity: 0.9,
                  }}
                >
                  {t("index.hero.subtitle")}
                </h2>
                <p
                  className="lead mb-5"
                  style={{
                    fontSize: "1.3rem",
                    maxWidth: "800px",
                    margin: "0 auto",
                    lineHeight: 1.6,
                    opacity: 0.95,
                  }}
                >
                  {t("index.hero.description")}
                </p>
                <Button
                  // as={Link}
                  onClick={() => navigate("/home/contact")}
                  // to="contact"
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
                  {t("index.hero.cta")}
                </Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section
        className="services-section"
        style={{ backgroundColor: "white", padding: "80px 0" }}
      >
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2
                  className="fw-bold mb-4"
                  style={{
                    fontSize: "2.5rem",
                    lineHeight: "3.6rem",
                    color: "#2c3e50",
                  }}
                >
                  {t("index.services.title")}
                </h2>
              </motion.div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {indexData.services.list.map((item: any, index: number) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card
                    className="service-card h-100"
                    style={{
                      borderRadius: 20,
                      border: "none",
                      boxShadow: "none",
                      backgroundColor: "transparent",
                      transition: "transform 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-10px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <Card.Body
                      className="p-4"
                      style={{
                        backgroundColor: "white",
                        borderRadius: "20px",
                        height: "400px",
                        display: "flex",
                        flexDirection: "column",
                        backgroundImage: `url("${item.cover}")`,
                        backgroundSize: "cover", // 确保图片覆盖整个容器
                        backgroundPosition: "center", // 图片居中
                        backgroundRepeat: "no-repeat", // 防止图片重复
                      }}
                    >
                      <div style={{ flex: 1 }}></div>
                      <Card.Title
                        className=" mb-3"
                        style={{
                          textAlign: "left",
                          fontWeight: 700,
                          color: "#fff",
                          fontSize: "1.3rem",
                        }}
                      >
                        {item.title}
                      </Card.Title>
                      {/* <Card.Text
                        style={{
                          color: '#6c757d',
                          fontSize: '1rem',
                          lineHeight: 1.6,
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {t(service.descriptionKey)}
                      </Card.Text> */}
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section
        className="testimonials-section"
        style={{ background: "#fff", padding: "80px 0" }}
      >
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2
                  className="fw-bold mb-4"
                  style={{ fontSize: "2.5rem", color: "#2c3e50" }}
                >
                  {indexData.evaluates.title}
                </h2>
              </motion.div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {indexData.evaluates.list.map((item: any, index: number) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card
                    className="testimonial-card h-100"
                    style={{
                      borderRadius: 20,
                      border: "none",
                      boxShadow: "none",
                      background: "white",
                      padding: "2rem",
                    }}
                  >
                    <div className="text-center mb-3">
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        style={{
                          fontSize: "2rem",
                          color: "#667eea",
                          opacity: 0.3,
                        }}
                      />
                    </div>
                    <Card.Text
                      style={{
                        color: "#6c757d",
                        fontSize: "1rem",
                        lineHeight: 1.6,
                        marginBottom: "1.5rem",
                      }}
                    >
                      {item.description}
                    </Card.Text>
                    <div className="text-center">
                      <strong style={{ color: "#2c3e50" }}>{item.title}</strong>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

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
                  {t("index.cta.title")}
                </h2>
                <p
                  className="lead mb-5"
                  style={{
                    fontSize: "1.3rem",
                    opacity: 0.9,
                  }}
                >
                  {t("index.cta.subtitle")}
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
                  {t("index.cta.button")}
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

export default Index;
