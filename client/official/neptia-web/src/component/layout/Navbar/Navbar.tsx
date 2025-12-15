import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@component/ui/LanguageSwitcher/LanguageSwitcher";
// import logo_en from '@assets/images/logo_en.png';
// import logo_zh from '@assets/images/logo_zh.png';
function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/home/index", key: "nav.home" },
    { path: "/home/service", key: "nav.service" },
    { path: "/home/about", key: "nav.about" },
    { path: "/home/insight", key: "nav.insight" },
    { path: "/home/contact", key: "nav.contact" },
  ];

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
      className={`navbar-custom ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <div className="fw-bold text-2xl">Neptia</div>
          </Navbar.Brand>
        </motion.div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNavItemClick}
              >
                <Nav.Link
                  as={Link}
                  to={item.path}
                  className={location.pathname === item.path ? "active" : ""}
                >
                  {t(item.key)}
                </Nav.Link>
              </motion.div>
            ))}
            <div className="ms-lg-3 mt-3 mt-lg-0">
              <LanguageSwitcher />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
