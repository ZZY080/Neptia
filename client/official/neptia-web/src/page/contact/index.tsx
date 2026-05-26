import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  ArrowRight,
  Clock3,
  ShieldCheck,
  Globe2,
  BadgeCheck,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const contactData = t("contact", { returnObjects: true }) as Record<
    string,
    any
  >;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    wechat: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative overflow-x-hidden bg-[var(--home-bg)] [font-family:var(--font-display)]">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.2),transparent_62%)]" />
      <div className="pointer-events-none absolute -left-24 top-48 h-72 w-72 rounded-full bg-cyan-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-72 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />

      <section className="relative z-10 flex min-h-[64vh] items-center px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-medium text-cyan-700 backdrop-blur">
              <Sparkles className="mr-2 h-4 w-4" />
              {t("contact.ui.tag")}
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {contactData.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              {contactData.hero.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="inline-flex min-w-[210px] items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.25)]"
              >
                {t("contact.ui.primary")}
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <a
                href="mailto:contact@neptia.net"
                className="inline-flex min-w-[210px] items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-medium text-slate-800 transition hover:border-cyan-500 hover:text-cyan-700"
              >
                {t("contact.ui.secondary")}
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-[0_24px_45px_rgba(15,23,42,0.12)] backdrop-blur lg:p-8"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Clock3,
                  label: t("contact.ui.metrics.response"),
                  value: "< 24h",
                },
                {
                  icon: BadgeCheck,
                  label: t("contact.ui.metrics.availability"),
                  value: "24/7",
                },
                {
                  icon: Globe2,
                  label: t("contact.ui.metrics.coverage"),
                  value: "Global",
                },
                {
                  icon: ShieldCheck,
                  label: t("contact.ui.metrics.security"),
                  value: "ISO",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <div className="mb-2 flex items-center gap-2 text-cyan-700">
                      <Icon className="h-4 w-4" />
                      <p className="text-xs uppercase tracking-wide">{item.label}</p>
                    </div>
                    <p className="text-3xl font-semibold text-slate-900">{item.value}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 rounded-2xl border border-cyan-100 bg-gradient-to-r from-cyan-50 via-blue-50 to-slate-50 p-4 text-sm text-slate-600">
              {t("contact.ui.hint")}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 border-y border-slate-200/70 bg-white/90 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_14px_30px_rgba(15,23,42,0.08)]"
          >
            <h2 className="text-2xl font-semibold text-slate-900">{contactData.info.title}</h2>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{contactData.info.phone}</p>
                  <p className="text-base font-medium text-slate-900">+86 19376811909</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{contactData.info.email}</p>
                  <p className="text-base font-medium text-slate-900">contact@neptia.net</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{contactData.info.address}</p>
                  <p className="text-base font-medium text-slate-900">{contactData.info.address_detail}</p>
                </div>
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-900">{contactData.info.hours}</p>
              <p className="mt-2 text-sm text-slate-600">
                {contactData.info.p1}: 10:00 - 18:00
                <br />
                {contactData.info.p2}: {contactData.info.p3}
              </p>
            </div>

            <div className="mt-7 border-t border-slate-200 pt-6">
              <p className="mb-3 text-sm font-medium text-slate-900">{t("contact.ui.promiseTitle")}</p>
              <div className="space-y-2 text-sm text-slate-600">
                {(t("contact.ui.promises", { returnObjects: true }) as string[]).map(
                  (item: string) => (
                    <div key={item} className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 h-4 w-4 text-cyan-700" />
                      <span>{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            id="contact-form"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_14px_30px_rgba(15,23,42,0.08)]"
          >
            <h2 className="text-2xl font-semibold text-slate-900">{contactData.form.title}</h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-slate-700">
                    {contactData.form.name} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                    placeholder={contactData.form.name_placeholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-slate-700">
                    {contactData.form.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                    placeholder={t("contact.ui.placeholders.email")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm text-slate-700">
                    {contactData.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                    placeholder={t("contact.ui.placeholders.phone")}
                  />
                </div>

                <div>
                  <label htmlFor="wechat" className="mb-2 block text-sm text-slate-700">
                    {contactData.form.wechat}
                  </label>
                  <input
                    type="text"
                    id="wechat"
                    value={formData.wechat}
                    onChange={(e) =>
                      setFormData({ ...formData, wechat: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                    placeholder={t("contact.ui.placeholders.wechat")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-slate-700">
                  {contactData.form.message} *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  placeholder={contactData.form.message_placeholder}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-4 text-white shadow-[0_12px_28px_rgba(15,23,42,0.25)] transition hover:bg-cyan-700"
              >
                <Send className="h-5 w-5" />
                {contactData.form.send}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-24 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-cyan-100 bg-[linear-gradient(120deg,#ecfeff_0%,#dbeafe_45%,#f8fafc_100%)] p-10 text-center shadow-[0_25px_60px_rgba(6,78,99,0.16)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {t("contact.ui.bottomTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              {t("contact.ui.bottomDesc")}
            </p>
            <a
              href="mailto:contact@neptia.net"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.3)] transition hover:translate-y-[-2px]"
            >
              {t("contact.ui.secondary")}
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
