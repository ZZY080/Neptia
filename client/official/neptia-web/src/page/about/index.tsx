import { motion } from "framer-motion";
import {
  Users,
  Globe,
  Shield,
  Building2,
  CheckCircle2,
  Award,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const iconMap: Record<string, any> = {
  Users,
  Globe,
  Shield,
  Building2,
  CheckCircle2,
  Award,
};

const About = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const aboutData = t("about", { returnObjects: true }) as Record<string, any>;

  const values = aboutData.value.list.map((item: any) => ({
    ...item,
    icon: iconMap[item.icon],
  }));

  const teams = aboutData.team.list as any[];
  const events = aboutData.event.list as any[];

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
              {t("about.ui.tag")}
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {aboutData.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              {aboutData.hero.p1}
              <span className="mx-1 font-semibold text-slate-900">{aboutData.hero.p2}</span>
              <span className="text-cyan-700">•</span>
              <span className="mx-1 font-semibold text-slate-900">{aboutData.hero.p3}</span>
              <span className="text-cyan-700">•</span>
              <span className="mx-1 font-semibold text-slate-900">{aboutData.hero.p4}</span>
              <span className="ml-1">{aboutData.hero.p5}</span>
            </p>
            <div className="mt-10">
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/home/contact")}
                className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.25)]"
              >
                {t("about.ui.cta")}
                <ArrowRight className="h-5 w-5" />
              </motion.button>
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
                { label: t("about.ui.metrics.values"), value: `${values.length}` },
                { label: t("about.ui.metrics.team"), value: `${teams.length}+` },
                { label: t("about.ui.metrics.events"), value: `${events.length}+` },
                { label: t("about.ui.metrics.support"), value: "24/7" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <p className="text-3xl font-semibold text-slate-900">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-cyan-100 bg-gradient-to-r from-cyan-50 via-blue-50 to-slate-50 p-4 text-sm text-slate-600">
              {t("about.ui.hint")}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 border-y border-slate-200/70 bg-white/90 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {aboutData.value.title}
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              {aboutData.value.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((item: any, index: number) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.07)] transition-shadow hover:shadow-[0_18px_34px_rgba(15,23,42,0.13)]"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {aboutData.team.title}
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              {aboutData.team.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teams.map((item: any, index: number) => (
              <motion.article
                key={`${item.name}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.08)]"
              >
                <div className="h-56 w-full overflow-hidden bg-slate-100 p-2">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="h-full w-full rounded-2xl object-contain object-center transition duration-500 hover:scale-[1.02]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900">{item.name}</h3>
                  <p className="mt-1 text-sm text-cyan-700">{item.position}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.country}</p>
                  <p className="mt-3 text-sm text-slate-600">{item.expertise}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-slate-900 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              {aboutData.event.title}
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-slate-300">
              {aboutData.event.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {events.map((item: any, index: number) => (
              <motion.article
                key={`${item.title}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-800/65 shadow-[0_16px_30px_rgba(0,0,0,0.25)]"
              >
                <div className="h-52 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>
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
              {t("about.ui.bottomTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              {t("about.ui.bottomDesc")}
            </p>
            <button
              onClick={() => navigate("/home/contact")}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.3)] transition hover:translate-y-[-2px]"
            >
              {t("about.ui.cta")}
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
