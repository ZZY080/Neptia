import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
interface IProps {
  onChange?: () => void;
}
const LanguageSwitcher: React.FC<IProps> = ({ onChange }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    onChange?.();
  };

  const getCurrentLanguage = () => {
    return i18n.language === "zh" ? "中文" : "English";
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="outline-light"
        size="sm"
        className="language-switcher"
      >
        <FontAwesomeIcon icon={faGlobe} className="me-1" />
        {getCurrentLanguage()}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => changeLanguage("en")}
          active={i18n.language === "en"}
        >
          English
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => changeLanguage("zh")}
          active={i18n.language === "zh"}
        >
          中文
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSwitcher;
