import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import LanguageSwitcher from "@component/ui/LanguageSwitcher/LanguageSwitcher";

export default function NavigationBar() {
  const [, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const navRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const goToPage = (path: string) => {
    navigate(path);
  };

  // 点击外部关闭菜单
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

  // 路由变化关闭菜单
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  // 滚动改变背景
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 移动端打开菜单禁止滚动
  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "";
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

  return (
    <nav
      ref={navRef}
      className={` relative w-full z-50 transition-colors duration-300 bg-white shadow-md`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-0">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gray-900"
          onClick={() => goToPage("/")}
        >
          Neptia
        </motion.div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-900 focus:outline-none"
          onClick={() => setExpanded(!expanded)}
        >
          <motion.div
            animate={{ rotate: expanded ? 90 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <FontAwesomeIcon icon={expanded ? faXmark : faBars} size="lg" />
          </motion.div>
        </button>

        {/* Menu */}
        <div
          className={`flex-col lg:flex lg:flex-row lg:items-center absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent transition-transform duration-300 overflow-hidden ${
            expanded ? "max-h-screen" : "max-h-0 lg:max-h-full"
          }`}
        >
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:ml-6"
            >
              <Link
                to={item.path}
                className={`block py-3 px-4 text-gray-900 hover:text-blue-600 lg:inline ${
                  location.pathname === item.path ? "font-semibold" : ""
                }`}
                onClick={() => setExpanded(false)}
              >
                {t(item.key)}
              </Link>
            </motion.div>
          ))}

          <div className="py-3 px-4 lg:ml-6">
            <LanguageSwitcher onChange={() => setExpanded(false)} />
          </div>
        </div>
      </div>
    </nav>
  );
}
