import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
export default function Index() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const indexData = t("index", { returnObjects: true }) as Record<string, any>;
  const services = [
    {
      description: "公司执照",
      cover:
        "https://server.shanhaimap.com/apis/jeecg-app/sys/common/static/product-category-files/2023-02-11/公司执照_1676127892861.png",
    },
    {
      description: "签证",
      cover:
        "https://server.shanhaimap.com/apis/jeecg-app/sys/common/static/product-category-files/2023-02-11/签证_1676127909436.png",
    },
    {
      description: "考察选址",
      cover:
        "https://server.shanhaimap.com/apis/jeecg-app/sys/common/static/product-category-files/2023-02-11/记账报税_1676127950167.png",
    },
    {
      description: "税务行政",
      cover:
        "https://server.shanhaimap.com/apis/jeecg-app/sys/common/static/product-category-files/2023-02-11/记账报税_1676127950167.png",
    },
    {
      description: "日常财税",
      cover:
        "	https://server.shanhaimap.com/apis/jeecg-app/sys/common/static/product-category-files/2023-02-11/记账报税_1676127950167.png",
    },
    {
      description: "税务筹划",
      cover:
        "	https://server.shanhaimap.com/apis/jeecg-app/sys/common/static/product-category-files/2023-02-11/记账报税_1676127950167.png",
    },
    {
      description: "人事",
      cover:
        "	https://server.shanhaimap.com/apis/jeecg-app/sys/common/static/product-category-files/2023-02-11/记账报税_1676127950167.png",
    },
    {
      description: "知识产权",
      cover:
        "	https://server.shanhaimap.com/apis/jeecg-app/sys/common/static/product-category-files/2023-02-11/记账报税_1676127950167.png",
    },
    {
      description: "法务",
      cover:
        "	https://server.shanhaimap.com/apis/jeecg-app/sys/common/static/product-category-files/2023-02-11/记账报税_1676127950167.png",
    },
    {
      description: "进出口许可证",
      cover:
        "	https://server.shanhaimap.com/apis/jeecg-app/sys/common/static/product-category-files/2023-02-11/记账报税_1676127950167.png",
    },
    {
      description: "产品认证",
      cover:
        "	https://server.shanhaimap.com/apis/jeecg-app/sys/common/static/product-category-files/2023-02-11/记账报税_1676127950167.png",
    },
    {
      description: "建筑工程",
      cover:
        "https://server.shanhaimap.com/apis/jeecg-app/sys/common/static/product-category-files/2023-02-11/记账报税_1676127950167.png",
    },
    {
      description: "SIRIM",
      cover:
        "https://server.shanhaimap.com/apis/jeecg-app/sys/common/static/product-category-files/2023-02-11/记账报税_1676127950167.png",
    },
    {
      description: "清真认证",
      cover:
        "https://server.shanhaimap.com/apis/jeecg-app/sys/common/static/product-category-files/2023-02-11/记账报税_1676127950167.png",
    },
    {
      description: "ISO",
      cover:
        "https://server.shanhaimap.com/apis/jeecg-app/sys/common/static/product-category-files/2023-02-11/记账报税_1676127950167.png",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden  pb-5">
        <div className="absolute inset-0"></div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="flex justify-center items-center">
            <div className="text-center max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-bold text-[3.5rem] tracking-[0.02em] drop-shadow-md">
                  {t("index.hero.title")}
                </h1>
                <h2 className="mb-4 text-[1.6rem] font-light leading-[1.8] opacity-90">
                  {t("index.hero.subtitle")}
                </h2>
                <p className="mb-5 text-[1.3rem] max-w-3xl mx-auto leading-[1.8] opacity-95">
                  {t("index.hero.description")}
                </p>
                <button
                  onClick={() => navigate("/home/contact")}
                  className="bg-white text-gray-900 font-semibold text-[1.1rem] px-8 py-3 rounded-[50px] min-w-[200px] hover:shadow-lg transition-shadow duration-300"
                >
                  {t("index.hero.cta")}
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-8 md:mb-12 text-center">
            我们的服务
          </h2>

          {/* Service Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {services.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-4  items-center justify-center text-center rounded-2xl border border-gray-200 bg-gray-50 px-3 py-6 text-sm md:text-base text-gray-800 shadow-sm hover:shadow-md transition"
              >
                <img
                  className="w-[60px] h-[60px] sm:w-[60px] sm:h-[60px] mb-2 transition-transform group-hover:scale-80 object-cover"
                  src={item.cover}
                  alt=""
                />
                <div>{item.description}</div>
              </div>
            ))}
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

      {/* Testimonials Section */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-bold text-[2.5rem] text-gray-800 text-center max-w-2xl"
            >
              {indexData.evaluates.title}
            </motion.h2>
          </div>
          <div className="grid gap-8 justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {indexData.evaluates.list.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-[20px] shadow-md"
              >
                <p className="text-gray-500 text-[1rem] leading-[1.6] mb-6">
                  {item.description}
                </p>
                <div className="text-center text-gray-800 font-semibold">
                  {item.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-8">
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
