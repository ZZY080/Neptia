import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: "icon-in",
      url: "https://www.linkedin.com/company/wisconsulting",
      name: "LinkedIn",
      fontSize: "30px",
    },
    {
      icon: "icon-xiaohongshu1",
      url: "https://www.xiaohongshu.com/user/profile/601e81b40000000001003636",
      name: "小红书",
      fontSize: "36px",
    },
  ];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* 品牌介绍 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              {t("footer.brand")}
            </h3>
            <p className="text-blue-200 mb-4">{t("footer.description")}</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                  className="text-white"
                >
                  <span
                    className={`iconfont ${social.icon}`}
                    style={{ fontSize: social.fontSize }}
                  ></span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 快捷链接 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 md:col-span-6"
          >
            <h5 className="mb-4 text-white">{t("footer.quickLinks")}</h5>
            <ul className="space-y-2">
              {["home", "service", "about", "insight", "contact"].map((nav) => (
                <li key={nav}>
                  <Link
                    to={nav === "home" ? "/" : nav}
                    className="text-white hover:text-blue-300 transition-colors"
                  >
                    {t(`nav.${nav}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 联系方式 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 md:col-span-6"
          >
            <h5 className="mb-4 text-white">{t("footer.contact")}</h5>
            <ul className="space-y-2 text-blue-200">
              <li>Email: zhiyuanzeng@neptia.net</li>
              <li>Phone: +86 19376811909</li>
            </ul>
          </motion.div>
        </div>

        {/* 底部版权 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 pt-4 border-t border-gray-700 text-center space-y-1 text-blue-200 text-sm"
        >
          <p>
            © {currentYear} {t("footer.copyright")}
          </p>
          <a
            href="https://beian.miit.gov.cn/#/Integrated/index"
            className="hover:text-white transition-colors"
          >
            沪ICP备2025133880号-2
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
