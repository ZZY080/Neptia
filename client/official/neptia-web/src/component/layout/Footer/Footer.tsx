import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, Phone, ShieldCheck, Clock3 } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: "icon-in",
      url: "https://www.linkedin.com/in/neptia-global-185ab9397/",
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

  const navItems = [
    { path: "/home/index", key: "nav.home" },
    { path: "/home/product", key: "nav.product" },
    { path: "/home/service", key: "nav.service" },
    { path: "/home/about", key: "nav.about" },
    { path: "/home/insight", key: "nav.insight" },
    { path: "/home/contact", key: "nav.contact" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-0 overflow-hidden border-t border-slate-700 bg-slate-950 text-white">
      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h3 className="text-2xl font-semibold tracking-tight text-white">{t("footer.brand")}</h3>
            <p className="mt-3 max-w-sm text-slate-300">{t("footer.description")}</p>

            <div className="mt-5 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-200">
                <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
                {t("footer.ui.badges.compliance")}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-200">
                <Clock3 className="h-3.5 w-3.5 text-cyan-400" />
                {t("footer.ui.badges.response")}
              </div>
            </div>

            <div className="mt-5 flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                  className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-white transition hover:border-cyan-500"
                >
                  <span
                    className={`iconfont ${social.icon}`}
                    style={{ fontSize: social.fontSize }}
                  ></span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="lg:col-span-3 md:col-span-6"
          >
            <h5 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
              {t("footer.links")}
            </h5>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-slate-300 transition-colors hover:text-cyan-300"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 md:col-span-6"
          >
            <h5 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
              {t("footer.contact")}
            </h5>

            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                <Mail className="h-4 w-4 text-cyan-400" />
                <p className="text-slate-200">contact@neptia.net</p>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                <Phone className="h-4 w-4 text-cyan-400" />
                <p className="text-slate-200">+86 19376811909</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 border-t border-slate-800 pt-5 text-center text-sm text-slate-400"
        >
          <p>
            © {currentYear} {t("footer.copyright")}
          </p>
          <a
            href="https://beian.miit.gov.cn/#/Integrated/index"
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-block transition-colors hover:text-cyan-300"
          >
            沪ICP备2025133880号-2
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
