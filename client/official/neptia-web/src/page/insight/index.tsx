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

export default function Insights() {
  const navigate = useNavigate();

  const insights = [
    {
      icon: BarChart2,
      title: "市场趋势分析",
      description: "通过数据洞察行业发展趋势，发现潜在机会。",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: PieChart,
      title: "用户行为研究",
      description: "分析用户行为数据，优化产品与服务体验。",
      color: "from-green-400 to-teal-500",
    },
    {
      icon: TrendingUp,
      title: "投资与增长",
      description: "评估投资风险与潜力，帮助企业稳健增长。",
      color: "from-orange-400 to-red-500",
    },
    {
      icon: Users,
      title: "团队与组织",
      description: "优化组织结构，提高团队协作效率。",
      color: "from-pink-400 to-rose-500",
    },
    {
      icon: Globe,
      title: "全球市场",
      description: "跟踪国际市场动态，把握跨境商机。",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "风险与合规",
      description: "确保运营合规，规避潜在风险。",
      color: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl mb-6 font-bold bg-gradient-to-r from-indigo-800 via-purple-800 to-indigo-800 bg-clip-text text-transparent"
          >
            企业洞察与分析
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 mb-10"
          >
            用数据驱动决策，帮助企业快速掌握市场脉搏
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-indigo-200"
            >
              立即咨询
              <FontAwesomeIcon icon={faArrowRight} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-slate-900 rounded-xl hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm"
            >
              查看详情
            </motion.button>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
              核心洞察
            </h2>
            <p className="text-xl text-slate-600">
              提供全方位企业分析，帮助您做出明智决策
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((item, index) => {
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

      {/* CTA Section */}
      <section className="bg-white py-24 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-bold text-[2.5rem] mb-4">
              想深入了解企业洞察？
            </h2>
            <p className="text-[1.3rem] mb-5 opacity-90">
              立即联系我们，获取专业分析报告
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-gray-900 text-white font-semibold px-8 py-3 rounded-[50px] text-[1.1rem] min-w-[200px] hover:shadow-lg transition-shadow duration-300 inline-flex items-center justify-center gap-2"
            >
              联系我们
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
