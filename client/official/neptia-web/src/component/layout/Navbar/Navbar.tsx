import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Globe } from "lucide-react";
import { createPortal } from "react-dom";
import LanguageSwitcher from "@component/ui/LanguageSwitcher/LanguageSwitcher";

export default function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [expanded]);

  const navItems = [
    { path: "/home/index", key: "nav.home" },
    { path: "/home/product", key: "nav.product" },
    { path: "/home/service", key: "nav.service" },
    { path: "/home/about", key: "nav.about" },
    { path: "/home/insight", key: "nav.insight" },
    { path: "/home/contact", key: "nav.contact" },
  ];

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <>
      <header className="relative z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            onClick={() => navigate("/home/index")}
            className="text-left"
          >
            <div className="text-3xl font-semibold leading-none text-slate-900">
              {t("nav.brand")}
            </div>
          </motion.button>

          <button
            className="rounded-xl border border-slate-200 bg-white p-2 text-slate-900 shadow-sm transition hover:bg-slate-50 lg:hidden"
            onClick={() => setExpanded((v) => !v)}
            aria-label="menu"
          >
            <motion.div
              animate={{ rotate: expanded ? 90 : 0 }}
              transition={{ duration: 0.22 }}
            >
              <FontAwesomeIcon icon={expanded ? faXmark : faBars} size="lg" />
            </motion.div>
          </button>

          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive(item.path)
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[120] lg:hidden"
              >
                <button
                  aria-label="close menu backdrop"
                  onClick={() => setExpanded(false)}
                  className="absolute inset-0 bg-slate-950/25 backdrop-blur-[2px]"
                />

                <motion.aside
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="absolute right-0 top-0 h-full w-[86vw] max-w-[360px] border-l border-slate-200 bg-white p-5 shadow-[0_20px_45px_rgba(15,23,42,0.22)]"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <div className="text-2xl font-semibold text-slate-900">
                      {t("nav.brand")}
                    </div>
                    <button
                      onClick={() => setExpanded(false)}
                      className="rounded-lg border border-slate-200 p-2 text-slate-700"
                      aria-label="close menu"
                    >
                      <FontAwesomeIcon icon={faXmark} size="lg" />
                    </button>
                  </div>

                  <nav className="space-y-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setExpanded(false)}
                        className={`block rounded-xl px-4 py-3 text-lg font-medium transition ${
                          isActive(item.path)
                            ? "bg-slate-900 text-white"
                            : "text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {t(item.key)}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
                      <Globe className="h-3.5 w-3.5" />
                      Language
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => i18n.changeLanguage("zh")}
                        className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                          i18n.language === "zh"
                            ? "bg-slate-900 text-white"
                            : "bg-white text-slate-700"
                        }`}
                      >
                        中文
                      </button>
                      <button
                        onClick={() => i18n.changeLanguage("en")}
                        className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                          i18n.language === "en"
                            ? "bg-slate-900 text-white"
                            : "bg-white text-slate-700"
                        }`}
                      >
                        English
                      </button>
                    </div>
                  </div>
                </motion.aside>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
