import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  BarChart2,
  PieChart,
  TrendingUp,
  Users,
  Globe,
  Shield,
} from "lucide-react";
import { useTranslation } from "react-i18next";
// 创建图标映射对象
const iconMap: Record<string, any> = {
  BarChart2,
  PieChart,
  TrendingUp,
  Users,
  Globe,
  Shield,
};
export default function Insights() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const insightData = t("insight", { returnObjects: true }) as Record<
    string,
    any
  >;
  // 使用JSON数据，并映射图标组件
  const insight = insightData.insight.list.map((item: any) => ({
    ...item,
    icon: iconMap[item.icon], // 将字符串图标名映射为图标组件
  }));

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl mb-6 font-bold bg-gradient-to-r from-indigo-800 via-purple-800 to-indigo-800 bg-clip-text text-transparent"
          >
            {insightData.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 mb-10"
          >
            {insightData.hero.description}
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/home/contact")}
              className="bg-gray-900 text-white font-semibold px-8 py-3 rounded-[50px] text-[1.1rem] min-w-[200px] hover:shadow-lg transition-shadow duration-300 inline-flex items-center justify-center gap-2"
            >
              {insightData.hero.contact}
              <FontAwesomeIcon icon={faArrowRight} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/home/contact")}
              className="px-8 py-4 bg-white text-slate-900 rounded-xl hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm"
            >
              {insightData.hero.detail}
            </motion.button>
          </div>
        </div>
      </section>
      {/* Insight Section*/}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
              {insightData.insight.title}
            </h2>
            <p className="text-xl text-slate-600">
              {insightData.insight.description}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {insight.map((item: any, index: number) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer"
                  whileHover={{ y: -8 }}
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Cta Section */}
      <section className="bg-white py-24 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-bold text-[2.5rem] mb-4">
              {insightData.cta.title}
            </h2>
            <p className="text-[1.3rem] mb-5 opacity-90">
              {insightData.cta.description}
            </p>
            <button
              onClick={() => navigate("/home/contact")}
              className="bg-gray-900 text-white font-semibold px-8 py-3 rounded-[50px] text-[1.1rem] min-w-[200px] hover:shadow-lg transition-shadow duration-300 inline-flex items-center justify-center gap-2"
            >
              {insightData.cta.contact}
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
