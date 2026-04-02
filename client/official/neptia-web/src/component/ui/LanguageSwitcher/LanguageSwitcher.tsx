import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { createPortal } from "react-dom";

interface IProps {
  onChange?: () => void;
}

const LanguageSwitcher: React.FC<IProps> = ({ onChange }) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpen(false);
    onChange?.();
  };

  const getCurrentLanguage = () =>
    i18n.language === "zh" ? "中文" : "English";

  // 计算下拉菜单在屏幕中的位置
  useEffect(() => {
    if (open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMenuPos({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-100 focus:outline-none"
      >
        <FontAwesomeIcon icon={faGlobe} />
        {getCurrentLanguage()}
      </button>

      {/* Portal 渲染下拉菜单 */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "absolute",
                  top: menuPos.top,
                  left: menuPos.left,
                  width: buttonRef.current?.offsetWidth || 120,
                  zIndex: 9999,
                }}
                className="bg-white border border-gray-200 rounded shadow-lg"
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
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export default LanguageSwitcher;
