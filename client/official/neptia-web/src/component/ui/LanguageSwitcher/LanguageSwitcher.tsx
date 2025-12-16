import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  onChange?: () => void;
}

const LanguageSwitcher: React.FC<IProps> = ({ onChange }) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpen(false);
    onChange?.();
  };

  const getCurrentLanguage = () =>
    i18n.language === "zh" ? "中文" : "English";

  return (
    <div className="relative inline-block text-left">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-100 focus:outline-none"
      >
        <FontAwesomeIcon icon={faGlobe} />
        {getCurrentLanguage()}
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg z-50"
          >
            <ul className="flex flex-col">
              <li>
                <button
                  onClick={() => changeLanguage("en")}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                    i18n.language === "en" ? "font-semibold" : ""
                  }`}
                >
                  English
                </button>
              </li>
              <li>
                <button
                  onClick={() => changeLanguage("zh")}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                    i18n.language === "zh" ? "font-semibold" : ""
                  }`}
                >
                  中文
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
