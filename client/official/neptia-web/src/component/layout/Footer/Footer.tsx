import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: "icon-in",
      url: "https://www.linkedin.com/company/wisconsulting",
      name: "icon-in",
      color: "white",
      fontSize: "30px",
    },
    {
      icon: "icon-xiaohongshu1",
      url: "https://www.xiaohongshu.com/user/profile/601e81b40000000001003636",
      name: "小红书",
      color: "white",
      fontSize: "36px",
    },
  ];

  // 统一底部字体色彩
  const textColor = { color: "#f5f7fa" };
  const subTextColor = { color: "#b3d1ff" };

  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row className="gy-4">
          <Col lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="h4 mb-4" style={textColor}>
                {t("footer.brand")}
              </h3>
              <p className="mb-4" style={subTextColor}>
                {t("footer.description")}
              </p>
              <div
                className="social-links"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    style={{ textDecoration: "none" }}
                    className="me-3 text-light"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    <span
                      className={`iconfont ${social.icon}`}
                      style={{
                        color: social.color,
                        fontSize: social.fontSize,
                      }}
                    ></span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Col>

          <Col lg={2} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h5 className="mb-4" style={textColor}>
                {t("footer.quickLinks")}
              </h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    to="/"
                    className="text-light text-decoration-none"
                    style={textColor}
                  >
                    {t("nav.home")}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="service"
                    className="text-light text-decoration-none"
                    style={textColor}
                  >
                    {t("nav.service")}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="about"
                    className="text-light text-decoration-none"
                    style={textColor}
                  >
                    {t("nav.about")}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="insight"
                    className="text-light text-decoration-none"
                    style={textColor}
                  >
                    {t("nav.insight")}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="contact"
                    className="text-light text-decoration-none"
                    style={textColor}
                  >
                    {t("nav.contact")}
                  </Link>
                </li>
              </ul>
            </motion.div>
          </Col>

          <Col lg={3} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h5 className="mb-4" style={textColor}>
                {t("footer.contact")}
              </h5>
              <ul className="list-unstyled">
                <li className="mb-2" style={subTextColor}>
                  Email: zhiyuanzeng@neptia.net
                </li>
                <li className="mb-2" style={subTextColor}>
                  Phone: +86 19376811909
                </li>
                {/* <li style={subTextColor}>
                  Address: 123 Education Street
                  <br />
                  Learning City, ED 12345
                </li>  */}
              </ul>
            </motion.div>
          </Col>
        </Row>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-5 pt-4 border-top border-secondary"
        >
          <p className="mb-0" style={subTextColor}>
            {t("footer.copyright")}
          </p>
          <div className="mb-0" style={subTextColor}>
            {/* <span>京公网安备 11010102000001号 </span> */}
            <a href="https://beian.miit.gov.cn/#/Integrated/index">
              沪ICP备2025133880号-2
            </a>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}

export default Footer;
