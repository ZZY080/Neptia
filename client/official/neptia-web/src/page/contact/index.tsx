import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import axios from "axios";

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    wechat: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<any>("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate.  API call
    try {
      const response = await axios({
        method: "post",
        url: "http://www.wayneinsightspring.top/api/add-user-info",
        data: {
          ...formData,
        },
      });
      const data = response.data;
      if (data.status === 201) {
        setSubmitStatus("submit-success");
        setFormData({ name: "", email: "", wechat: "", message: "" });
      }
      if (data.status === 200) {
        console.log(data.data);
        setSubmitStatus("warn-success");
        setFormData({
          name: "",
          email: "",
          wechat: "",
          message: "",
        });
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  const contactInfo = [
    {
      icon: faEnvelope,
      title: t("contact.info.email"),
      content: "zhiyuanzeng@neptia.net",
      link: "mailto:zhiyuanzeng@neptia.net",
    },
    // {
    //   icon: faPhone,
    //   title: t('contact.info.phone'),
    //   content: '+1 (555) 123-4567',
    //   link: 'tel:+15551234567',
    // },
    // {
    //   icon: faLocationDot,
    //   title: t('contact.info.address'),
    //   content: '123 Education Street, Learning City, ED 12345',
    //   link: '#',
    // },
  ];

  return (
    <Container style={{ paddingTop: "100px" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-5"
      >
        <h1 className="display-4 mb-4">{t("contact.title")}</h1>
        <p className="lead">{t("contact.subtitle")}</p>
      </motion.div>

      <Row className="gy-4">
        {/* Contact Info */}
        <Col lg={4}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-100"
          >
            <div className="p-4 bg-light rounded-3 h-100">
              <h3 className="h4 mb-4">{t("contact.info.title")}</h3>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="mb-4"
                >
                  <a
                    href={info.link}
                    className="d-flex align-items-center text-decoration-none text-dark"
                  >
                    <div className="me-3 text-primary">
                      <FontAwesomeIcon icon={info.icon} />
                    </div>
                    <div>
                      <h4 className="h6 mb-1">{info.title}</h4>
                      <p className="mb-0 text-muted">{info.content}</p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Col>

        {/* Contact Form */}
        <Col lg={8}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-4 bg-white rounded-3 shadow-sm">
              <h3 className="h4 mb-4">{t("contact.form.title")}</h3>

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>{t("contact.form.name")}</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>{t("contact.form.email")}</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>{t("contact.form.wechat")}</Form.Label>
                  <Form.Control
                    type="text"
                    name="wechat"
                    value={formData.wechat}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>{t("contact.form.message")}</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button type="submit" disabled={isSubmitting}>
                    <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                    {isSubmitting
                      ? t("contact.form.sending")
                      : t("contact.form.send")}
                  </Button>
                </motion.div>

                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-3 ${
                      submitStatus === "error" ? "text-danger" : "text-success"
                    }`}
                  >
                    {t(`contact.form.${submitStatus}`)}
                  </motion.div>
                )}
              </Form>
            </div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
