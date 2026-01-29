import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
} from "lucide-react";
import "swiper/css";

// 创建图标映射对象
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
};
export default function Index() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const indexData = t("index", { returnObjects: true }) as Record<string, any>;
  // 使用JSON数据，并映射图标组件
  const service = indexData.service.list.map((item: any) => ({
    ...item,
    icon: iconMap[item.icon], // 将字符串图标名映射为图标组件
  }));

  const feature = indexData.feature.list.map((item: any) => ({
    ...item,
    icon: iconMap[item.icon], // 将字符串图标名映射为图标组件
  }));
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900 bg-clip-text text-transparent leading-28">
                {indexData.hero.title}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-6">
              {indexData.hero.subtitle}
            </p>

            <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-8">
              {indexData.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/home/contact")}
                className="bg-gray-900 text-white font-semibold px-8 py-3 rounded-[50px] text-[1.1rem] min-w-[200px] hover:shadow-lg transition-shadow duration-300 inline-flex items-center justify-center gap-2"
              >
                {indexData.hero.cta.startNow}
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-slate-900 rounded-xl hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm"
              >
                {indexData.hero.cta.learnMore}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Service Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
              {indexData.service.title}
            </h2>
            <p className="text-xl text-slate-600">
              {indexData.service.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {service.map((item: any, index: number) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-transparent hover:shadow-xl transition-all duration-300">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-slate-700 group-hover:text-slate-900 transition-colors">
                      {item.name}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Feature Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
              {indexData.feature.title}
            </h2>
            <p className="text-xl text-slate-600">
              {indexData.feature.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {feature.map((item: any, index: number) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-indigo-100  ${item.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h3 className="text-xl mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Case Section */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-bold text-[2.1rem] leading-[4rem] text-gray-800 text-center max-w-2xl"
            >
              {t("index.case.title")}
            </motion.h2>
          </div>
          <div className="grid gap-8 justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {indexData.case.list.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="cursor-pointer"
                whileHover={{ y: -10 }}
              >
                <div
                  className="relative h-[400px] flex flex-col justify-end p-4 rounded-[20px] overflow-hidden"
                  style={{
                    backgroundImage: `url("${item.cover}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <h3 className="text-white font-bold text-[1.3rem]">
                    {item.description}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Evaluate Section*/}
      <section className="pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              {indexData.evaluate.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {indexData.evaluate.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indexData.evaluate.list.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 h-full border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 flex flex-col">
                  {/* 国家和评分 */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      {item.flag} {item.country}
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < item.rating ? "text-amber-400" : "text-slate-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* 评价内容 */}
                  <p className="text-slate-600 text-base leading-relaxed mb-6 flex-grow line-clamp-5">
                    {item.description}
                  </p>

                  {/* 服务标签 */}
                  <div className="mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700">
                      {item.service}
                    </span>
                  </div>

                  {/* 用户信息 */}
                  <div className="flex items-center pt-6 border-t border-slate-100">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-100 to-blue-100 flex items-center justify-center text-xl">
                        {item.flag}
                      </div>
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-slate-900">
                            {item.name}
                          </h4>
                          <p className="text-sm text-slate-600">
                            {item.position}
                          </p>
                        </div>
                        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                          {item.duration}
                        </span>
                      </div>
                      <div className="flex items-center mt-1">
                        <p className="text-sm text-slate-500">{item.company}</p>
                        <span className="mx-2 text-slate-300">•</span>
                        <p className="text-sm text-slate-500">{item.country}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 国家统计标签 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-8 border-t border-slate-200"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {Array.from(
                new Set(
                  indexData.evaluate.list.map((item: any) => item.country),
                ),
              ).map((country: any) => (
                <div
                  key={country}
                  className="flex items-center px-4 py-2 bg-white rounded-lg border border-slate-200"
                >
                  <span className="text-xl mr-2">
                    {
                      indexData.evaluate.list.find(
                        (item: any) => item.country === country,
                      )?.flag
                    }
                  </span>
                  <span className="text-slate-700 font-medium">{country}</span>
                  <span className="ml-2 text-sm text-slate-500">
                    (
                    {
                      indexData.evaluate.list.filter(
                        (item: any) => item.country === country,
                      ).length
                    }
                    )
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-bold text-[2.5rem] mb-4">
              {t("index.cta.title")}
            </h2>
            <p className="text-[1.3rem] mb-5 opacity-90">
              {t("index.cta.subtitle")}
            </p>
            <button
              onClick={() => navigate("/home/contact")}
              className="bg-gray-900 text-white font-semibold px-8 py-3 rounded-[50px] text-[1.1rem] min-w-[200px] hover:shadow-lg transition-shadow duration-300 inline-flex items-center justify-center gap-2"
            >
              {t("index.cta.button")}
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
