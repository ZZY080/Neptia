import { motion } from "framer-motion";
import {
  Users,
  Globe,
  Shield,
  Building2,
  CheckCircle2,
  Award,
} from "lucide-react";
import { useTranslation } from "react-i18next";
// 创建图标映射对象
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

  const aboutData = t("about", { returnObjects: true }) as Record<string, any>;

  // 使用JSON数据，并映射图标组件
  const value = aboutData.value.list.map((item: any) => ({
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
            {aboutData.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 mb-6 max-w-3xl mx-auto"
          >
            {aboutData.hero.p1}
            <span className="font-semibold">{aboutData.hero.p2}</span>、
            <span className="font-semibold">{aboutData.hero.p3}</span>、
            <span className="font-semibold">{aboutData.hero.p4}</span>
            {aboutData.hero.p5}
          </motion.p>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
              {aboutData.value.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {aboutData.value.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {value.map((item: any, index: number) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
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

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-4 text-slate-900"
          >
            {aboutData.team.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            {aboutData.team.description}
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {aboutData.team.list.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg"
            >
              <img
                src={item.photo}
                alt={item.name}
                className="w-full h-48 object-contain rounded-2xl mb-4"
              />
              <div className="text-slate-900 font-semibold mb-1">
                {item.name}
              </div>
              <div className="text-slate-600 text-sm mb-1">{item.position}</div>
              <div className="text-slate-600 text-sm mb-1">{item.country}</div>
              <div className="text-slate-600 text-sm">{item.expertise}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Event Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-4 text-slate-900"
          >
            {aboutData.event.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            {aboutData.event.description}
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {aboutData.event.list.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-slate-900 font-semibold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
