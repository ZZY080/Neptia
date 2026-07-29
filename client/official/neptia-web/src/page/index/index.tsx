import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  FileText,
  Scale,
  Users,
  Globe,
  Shield,
  TrendingUp,
  Award,
  Package,
  CreditCard,
  Layout,
  Server,
  Waves,
  Anchor,
  Fish,
  Microscope,
  Gavel,
  Database,
  Sparkles,
  Compass,
  Rocket,
  Satellite,
  Orbit,
  RadioTower,
  Telescope,
  Cpu,
  Activity,
  Heart,
  ShoppingCart,
  BarChart2,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Building2,
  FileText,
  Users,
  Scale,
  TrendingUp,
  Globe,
  Shield,
  Award,
  Package,
  CreditCard,
  Layout,
  Server,
  CheckCircle2,
  ArrowRight,
  Waves,
  Anchor,
  Fish,
  Microscope,
  Database,
  Gavel,
  Rocket,
  Satellite,
  Orbit,
  RadioTower,
  Telescope,
  Cpu,
  Activity,
  Heart,
  ShoppingCart,
  BarChart2,
};

type AerospaceItem = {
  icon: string;
  title: string;
  description: string;
  capabilities: string[];
};

export default function Index() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const indexData = t("index", { returnObjects: true }) as Record<string, any>;

  const service = indexData.service.list.map((item: any) => ({
    ...item,
    icon: iconMap[item.icon],
  }));
  const feature = indexData.feature.list.map((item: any) => ({
    ...item,
    icon: iconMap[item.icon],
  }));

  const testimonials = indexData.evaluate.list as any[];
  const countryCount = new Set(testimonials.map((item) => item.country)).size;
  const avgRating = testimonials.length
    ? (
        testimonials.reduce((sum, item) => sum + (item.rating || 0), 0) /
        testimonials.length
      ).toFixed(1)
    : "5.0";

  const heroStats = [
    {
      label: t("index.service.title"),
      value: `${service.length}+`,
    },
    {
      label: t("index.evaluate.title"),
      value: `${testimonials.length}+`,
    },
    {
      label: t("index.metrics.countries"),
      value: `${countryCount}+`,
    },
    {
      label: t("index.metrics.rating"),
      value: avgRating,
    },
  ];

  return (
    <div className="relative overflow-x-hidden bg-[var(--home-bg)] [font-family:var(--font-display)]">
      <div className="pointer-events-none absolute inset-x-0 -top-32 z-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(8,145,178,0.22),transparent_58%)]" />
      <div className="pointer-events-none absolute -left-24 top-48 z-0 h-72 w-72 rounded-full bg-cyan-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-72 z-0 h-72 w-72 rounded-full bg-blue-200/60 blur-3xl" />

      <section className="relative z-10 flex min-h-[64vh] items-center px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-cyan-200 bg-white/85 px-4 py-2 text-sm font-medium text-cyan-700 shadow-sm backdrop-blur">
              <Sparkles className="mr-2 h-4 w-4" />
              {t("index.ui.partner")}
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-7xl">
              <span className="bg-gradient-to-r from-slate-900 via-cyan-700 to-blue-800 bg-clip-text text-transparent">
                {indexData.hero.title}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
              {indexData.hero.subtitle}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
              {indexData.hero.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/home/contact")}
                className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-[1.04rem] font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.24)] transition-shadow hover:shadow-[0_16px_34px_rgba(15,23,42,0.3)]"
              >
                {indexData.hero.cta.startNow}
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/home/service")}
                className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-[1.02rem] font-medium text-slate-800 transition hover:border-cyan-500 hover:text-cyan-700"
              >
                {indexData.hero.cta.learnMore}
                <Compass className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="rounded-3xl border border-white/80 bg-white/80 p-6 shadow-[0_24px_45px_rgba(15,23,42,0.14)] backdrop-blur lg:p-8"
          >
            <div className="grid grid-cols-2 gap-4">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 + index * 0.08 }}
                  className="rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-cyan-100 bg-gradient-to-r from-cyan-50 via-blue-50 to-slate-50 p-5">
              <p className="text-sm text-slate-600">{indexData.cta.subtitle}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 border-y border-slate-200/70 bg-white/90 px-4 py-18 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12 flex items-end justify-between gap-6"
          >
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                {indexData.service.title}
              </h2>
              <p className="mt-3 text-lg text-slate-600">
                {indexData.service.description}
              </p>
            </div>
            <button
              onClick={() => navigate("/home/service")}
              className="hidden rounded-full border border-cyan-600 px-5 py-2 text-sm font-medium text-cyan-700 transition hover:bg-cyan-50 md:block"
            >
              {t("index.ui.explore")}
            </button>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.slice(0, 8).map((item: any, index: number) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div
                    className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.color}`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-base font-medium text-slate-700 transition-colors group-hover:text-slate-900">
                    {item.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-18 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {indexData.feature.title}
            </h2>
            <p className="mt-3 text-lg text-slate-600">{indexData.feature.subtitle}</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {feature.map((item: any, index: number) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur"
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color}`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.16),transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12 max-w-3xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              {indexData.aerospace.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              {indexData.aerospace.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
              {indexData.aerospace.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {indexData.aerospace.highlights.map((highlight: string) => (
                <span
                  key={highlight}
                  className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {(indexData.aerospace.list as AerospaceItem[]).map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur sm:p-9"
                >
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20" />
                  <div className="relative">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20">
                      <Icon className="h-7 w-7 text-cyan-200" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-base leading-8 text-slate-300">
                      {item.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.capabilities.map((capability: string) => (
                        <span
                          key={capability}
                          className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-cyan-100"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-slate-900 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto mb-12 max-w-3xl text-center text-3xl font-semibold leading-relaxed text-white sm:text-4xl"
          >
            {indexData.case.title}
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            {indexData.case.list.map((item: any, index: number) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative h-[360px] overflow-hidden rounded-3xl"
              >
                <img
                  src={item.cover}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/35 to-slate-950/85" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {indexData.evaluate.title}
            </h2>
            <p className="mt-3 text-lg text-slate-600">{indexData.evaluate.subtitle}</p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((item: any, index: number) => (
              <motion.div
                key={`${item.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6"
              >
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm text-slate-500">
                    {item.flag} {item.country}
                  </p>
                  <p className="text-xs font-medium text-slate-600">{item.duration}</p>
                </div>
                <p className="line-clamp-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
                <div className="mt-4 border-t border-slate-200 pt-4">
                  <p className="font-medium text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-600">{item.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-cyan-100 bg-[linear-gradient(120deg,#ecfeff_0%,#dbeafe_45%,#f8fafc_100%)] p-10 text-center shadow-[0_25px_60px_rgba(6,78,99,0.16)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {t("index.cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              {t("index.cta.subtitle")}
            </p>
            <button
              onClick={() => navigate("/home/contact")}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.3)] transition hover:translate-y-[-2px]"
            >
              {t("index.cta.button")}
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
