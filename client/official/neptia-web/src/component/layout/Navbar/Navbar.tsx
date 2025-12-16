import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@component/ui/LanguageSwitcher/LanguageSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
// import logo_en from '@assets/images/logo_en.png';
// import logo_zh from '@assets/images/logo_zh.png';
function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        expanded &&
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [expanded]);
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [expanded]);

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
      ref={navRef}
      fixed="top"
      expand="lg"
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

        <Navbar.Toggle className="border-0 bg-transparent shadow-none focus:outline-none focus:shadow-none">
          <motion.div
            animate={{ rotate: expanded ? 90 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <FontAwesomeIcon icon={expanded ? faXmark : faBars} size="lg" />
          </motion.div>
        </Navbar.Toggle>

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
              <LanguageSwitcher onChange={() => setExpanded(false)} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
