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
} from "lucide-react";

const Service = () => {
  const services = [
    {
      icon: Server,
      name: "计算机与IT服务",
      description: "软件开发、系统集成、云服务解决方案、AI与大数据应用",
    },
    {
      icon: Cpu,
      name: "硬件与网络解决方案",
      description: "服务器部署、网络架构设计及维护",
    },
    {
      icon: Heart,
      name: "医疗健康服务",
      description: "远程医疗、医疗信息化、健康数据管理、医疗设备支持",
    },
    {
      icon: BookOpen,
      name: "教育与培训",
      description: "在线教育平台、跨境培训课程、企业培训计划",
    },
    {
      icon: ShoppingCart,
      name: "零售与电商服务",
      description: "跨境电商、供应链管理、独立站建设、市场分析",
    },
    {
      icon: Building2,
      name: "企业服务",
      description: "公司注册、税务咨询、人事管理、法务与合规支持",
    },
    {
      icon: FileText,
      name: "税务与财务服务",
      description: "税务筹划、财务报表、审计、合规咨询、融资方案",
    },
    {
      icon: CreditCard,
      name: "金融与支付服务",
      description: "支付集成、企业融资、跨境结算、数字货币咨询",
    },
    {
      icon: Shield,
      name: "知识产权与认证",
      description: "商标注册、专利申请、产品认证、国际标准认证",
    },
    {
      icon: CheckCircle2,
      name: "创新与战略咨询",
      description: "行业分析、数字化转型、商业策略及企业创新规划",
    },
    {
      icon: Globe,
      name: "国际市场与物流",
      description: "跨境物流、国际市场研究、清关方案、供应链优化",
    },
    {
      icon: Activity,
      name: "行业培训与支持",
      description: "专业培训、工作坊、企业数字化转型支持",
    },
    {
      icon: Box,
      name: "供应链管理",
      description: "全球供应链搭建、仓储物流优化、库存管理方案",
    },
    {
      icon: BarChart2,
      name: "数据分析与BI",
      description: "企业数据分析、商业智能报表、决策支持系统",
    },
    {
      icon: Award,
      name: "创新与研发",
      description: "新技术研发、产品创新、跨境创新项目咨询",
    },
  ];

  const globalCases = [
    {
      title: "跨境电商优化项目",
      organization: "Harvard University",
      country: "USA",
      description: "与全球高校学生合作优化电商供应链系统，提高物流效率30%",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-vPR7T_rUhWaKMfhZMccvV2f8tv2r9X8XQ&s",
    },
    {
      title: "企业数字化转型咨询",
      organization: "Siemens",
      country: "Germany",
      description: "为大型企业提供定制化数字化解决方案，提升生产自动化水平",
      image:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "跨文化教育交流平台",
      organization: "University of Melbourne",
      country: "Australia",
      description: "与全球高校联合搭建在线教育平台，推动多元文化交流与教育创新",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "国际金融支付整合",
      organization: "HSBC",
      country: "UK",
      description: "为跨境企业提供支付系统整合，优化国际结算流程",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1I1KUkpiTsGW_kuyJttGyVQtKXBPF0Uje9w&s",
    },
    {
      title: "乡村数字支付扶贫项目",
      organization: "World Bank",
      country: "Kenya",
      description: "通过数字支付系统帮助偏远地区农民获得金融服务，改善生活质量",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCpTmfYSSFKqzwWC_luZ9K4_Zr017yESRFw&s",
    },
    {
      title: "偏远地区医疗信息化",
      organization: "Médecins Sans Frontières",
      country: "India",
      description: "在山村地区搭建远程医疗系统，为偏远居民提供健康服务",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtCEg41pvL5JhRzpYFpL7lZ_j81d2VMRO1oA&s",
    },
    {
      title: "跨国环保教育项目",
      organization: "Stanford University",
      country: "USA",
      description: "联合多国高校开展环境保护教育与可持续发展项目",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7L-QIlYQ7wG_HJGWYHxD76eDjjpeLD6Xd-Q&s",
    },
    {
      title: "中小企业跨境融资",
      organization: "HSBC",
      country: "Singapore",
      description:
        "为亚太地区中小企业提供跨境融资与支付解决方案，支持国际化发展",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxiISiPCR0DWuQ1YbhSWvEW4bGLjvLziqI7A&s",
    },
  ];

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
            Neptia 服务
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 mb-6 max-w-3xl mx-auto leading-9"
          >
            Neptia 致力于为全球中小企业提供全方位、跨行业的企业信息与软件服务，
            覆盖计算机、医疗、零售、企业服务、税务、金融、教育及供应链等多个领域，
            帮助企业实现高效、数字化和全球化发展。
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
              我们的服务领域
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Neptia
              提供跨行业、跨境的专业解决方案，支持企业全球化和数字化转型。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {services.map((item, index) => {
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

      {/* Global Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-4 text-slate-900"
          >
            全球企业与高校合作案例
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            我们与全球顶尖企业和高校合作，推动多元文化交流与跨境业务创新。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {globalCases.map((item, index) => (
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
