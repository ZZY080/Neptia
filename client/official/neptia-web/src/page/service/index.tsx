import { motion } from "framer-motion";
import {
  Globe,
  Shield,
  Building2,
  CheckCircle2,
  Award,
  Server,
  FileText,
  CreditCard,
  ShoppingCart,
  Heart,
  Activity,
  Cpu,
  BookOpen,
  Box,
  BarChart2,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";

// 创建图标映射对象
const iconMap: Record<string, any> = {
  Globe,
  Shield,
  Building2,
  CheckCircle2,
  Award,
  Server,
  FileText,
  CreditCard,
  ShoppingCart,
  Heart,
  Activity,
  Cpu,
  BookOpen,
  Box,
  BarChart2,
  Users,
};

const Service = () => {
  const { t } = useTranslation();

  const serviceData = t("service", { returnObjects: true }) as Record<
    string,
    any
  >;
  // 使用JSON数据，并映射图标组件
  const service = serviceData.service.list.map((item: any) => ({
    ...item,
    icon: iconMap[item.icon], // 将字符串图标名映射为图标组件
  }));

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-slate-900"
          >
            {serviceData.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 mb-6 max-w-3xl mx-auto leading-9"
          >
            {serviceData.hero.description}
          </motion.p>
        </div>
      </section>

      {/* Service Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
              {serviceData.service.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {serviceData.service.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {service.map((item: any, index: number) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h3 className="text-xl mb-2 text-slate-900">{item.name}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collaborate Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-4 text-slate-900"
          >
            {serviceData.collaborate.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            {serviceData.collaborate.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {serviceData.collaborate.list.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl border border-slate-200 hover:shadow-lg overflow-hidden cursor-pointer"
            >
              <div className="w-full h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 mb-1">
                  {item.organization} - {item.country}
                </p>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Service;
