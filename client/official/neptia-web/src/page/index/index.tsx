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
export default function Index() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const indexData = t("index", { returnObjects: true }) as Record<string, any>;

  const services = [
    {
      icon: Building2,
      name: "公司执照信息",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileText,
      name: "签证政策资讯",
      color: "from-purple-500 to-pink-500",
    },
    { icon: Users, name: "考察选址建议", color: "from-orange-500 to-red-500" },
    {
      icon: Scale,
      name: "税务行政信息",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      name: "日常财税数据",
      color: "from-indigo-500 to-blue-500",
    },
    { icon: Globe, name: "税务筹划与合规", color: "from-teal-500 to-cyan-500" },
    { icon: Users, name: "人事管理方案", color: "from-pink-500 to-rose-500" },
    {
      icon: Shield,
      name: "知识产权信息",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Scale,
      name: "法务信息汇总",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: FileText,
      name: "进出口许可证资讯",
      color: "from-lime-500 to-green-500",
    },
    { icon: Award, name: "产品认证指南", color: "from-cyan-500 to-blue-500" },
    {
      icon: Building2,
      name: "建筑工程合规信息",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: CheckCircle2,
      name: "SIRIM / 国际认证",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Award,
      name: "清真认证指南",
      color: "from-fuchsia-500 to-purple-500",
    },
    {
      icon: Shield,
      name: "ISO / 国际标准",
      color: "from-sky-500 to-indigo-500",
    },

    // 软件服务
    {
      icon: Server,
      name: "企业邮箱配置",
      color: "from-blue-400 to-indigo-500",
    },
    { icon: Layout, name: "独立站建设", color: "from-green-400 to-teal-500" },
    {
      icon: CreditCard,
      name: "Stripe 支付集成",
      color: "from-purple-400 to-pink-500",
    },

    // 供应链与跨境服务
    {
      icon: Package,
      name: "不同国家供应链信息",
      color: "from-orange-400 to-red-500",
    },
    {
      icon: Globe,
      name: "国际物流与清关资讯",
      color: "from-teal-400 to-cyan-500",
    },
  ];
  const features = [
    {
      icon: CheckCircle2,
      title: "专业团队",
      description: "资深顾问提供一对一服务",
    },
    {
      icon: TrendingUp,
      title: "高效办理",
      description: "快速响应，流程透明",
    },
    {
      icon: Shield,
      title: "安全保障",
      description: "信息保密，合规操作",
    },
    {
      icon: Globe,
      title: "全程跟踪",
      description: "实时更新进度，随时沟通",
    },
  ];
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
                className="px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-indigo-200"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
              我们的服务
            </h2>
            <p className="text-xl text-slate-600">全方位企业服务解决方案</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {services.map((item, index) => {
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
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h3 className="text-xl mb-2 text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-bold text-[2.1rem] leading-[4rem] text-gray-800 text-center max-w-2xl"
            >
              {t("index.services.title")}
            </motion.h2>
          </div>
          <div className="grid gap-8 justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {indexData.services.list.map((item: any, index: number) => (
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
      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
              {indexData.evaluates.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {indexData.evaluates.list.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="mb-6">
                  <svg
                    className="w-10 h-10 text-indigo-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="text-slate-900">{item.title}</div>
              </motion.div>
            ))}
          </div>
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
