import { motion } from "framer-motion";
import {
  Users,
  Globe,
  Shield,
  Building2,
  CheckCircle2,
  Award,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "多元人才",
      description: "汇聚来自全球的专业人才，共同推动创新与发展。",
    },
    {
      icon: Globe,
      title: "开放包容",
      description: "尊重不同文化与观点，打造共融的工作环境。",
    },
    {
      icon: Shield,
      title: "安全可靠",
      description: "保障信息安全与业务合规，建立信任基础。",
    },
    {
      icon: Building2,
      title: "携手全球",
      description: "与合作伙伴共建国际化网络，实现互利共赢。",
    },
    {
      icon: CheckCircle2,
      title: "专业服务",
      description: "提供高效、可靠、定制化的企业信息与软件服务。",
    },
    {
      icon: Award,
      title: "创新未来",
      description: "以创新和远见引领行业发展，共创美好未来。",
    },
  ];

  const teamMembers = [
    {
      name: "Kenny",
      position: "软件工程师",
      country: "美国",
      expertise: "跨境软件与信息服务",
      photo: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Lina",
      position: "技术顾问",
      country: "法国",
      expertise: "云计算与企业系统",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_uBA-pJ_3WpxzKUA6Oo-nxypIOJEpsHdWw&s",
    },
    {
      name: "Akira",
      position: "市场策略",
      country: "英国",
      expertise: "国际市场拓展",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLyWAFxvAJX-ktrZkCmWOnfIbiiw8ASZKXgw&s",
    },
    {
      name: "Maria",
      position: "法律顾问",
      country: "德国",
      expertise: "跨境法务与合规",
      photo: "https://i.pravatar.cc/150?img=4",
    },
    {
      name: "Maria",
      position: "法律顾问",
      country: "德国",
      expertise: "跨境法务与合规",
      photo: "https://i.pravatar.cc/150?img=4",
    },
    {
      name: "Maria",
      position: "法律顾问",
      country: "美国",
      expertise: "跨境法务与合规",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8gIFhoIZrYy298riK9tDEgXJ4cwsZWQKR-A&s",
    },
  ];

  const teamEvents = [
    {
      title: "国际美食分享",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "团建登山活动",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "文化节庆活动",
      image:
        "https://images.unsplash.com/photo-1542736667-069246bdbc53?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "线上跨境工作坊",
      image:
        "https://images.unsplash.com/photo-1581091870620-5d8f03d7c73b?auto=format&fit=crop&w=800&q=80",
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
            关于 Neptia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 mb-6 max-w-3xl mx-auto"
          >
            我们秉承 <span className="font-semibold">开放包容</span>、
            <span className="font-semibold">携手全球</span>、
            <span className="font-semibold">共建未来</span> 的理念，
            汇聚多元文化与全球人才，致力于为中小企业提供跨境信息与软件服务。
          </motion.p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
              我们的价值观
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              在 Neptia，每一位成员和合作伙伴都是全球生态的重要组成部分。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((item, index) => {
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

      {/* Global Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-4 text-slate-900"
          >
            全球团队
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            我们的团队汇聚来自不同国家和文化背景的专家，致力于提供全球化、高效、专业的企业服务。
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-48 object-cover rounded-2xl mb-4"
              />
              <div className="text-slate-900 font-semibold mb-1">
                {member.name}
              </div>
              <div className="text-slate-600 text-sm mb-1">
                {member.position}
              </div>
              <div className="text-slate-600 text-sm mb-1">
                {member.country}
              </div>
              <div className="text-slate-600 text-sm">{member.expertise}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Culture / Events Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-4 text-slate-900"
          >
            团队文化与活动
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            多元文化的团队不仅在工作中紧密协作，也通过丰富的活动增强凝聚力。
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamEvents.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-slate-900 font-semibold">{event.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
