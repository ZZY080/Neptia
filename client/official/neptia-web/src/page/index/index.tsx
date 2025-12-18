import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function Index() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const indexData = t("index", { returnObjects: true }) as Record<string, any>;
  const services = [
    "公司执照",
    "签证",
    "考察选址",
    "税务行政",
    "日常财税",
    "税务筹划",
    "人事",
    "知识产权",
    "法务",
    "进出口许可证",
    "产品认证",
    "建筑工程",
    "SIRIM",
    "清真认证",
    "ISO",
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
      <section className="px-4 py-12 bg-white">
        <h2 className="text-2xl md:text-4xl text-center mb-8">我们的服务</h2>

        <Swiper
          centeredSlides
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="pb-8"
        >
          {[
            "公司执照",
            "签证",
            "考察选址",
            "税务行政",
            "日常财税",
            "税务筹划",
          ].map((item) => (
            <SwiperSlide key={item}>
              <div
                className="
              transition-all duration-300
              rounded-2xl border bg-gray-50
              flex items-center justify-center
              h-32 text-base
              shadow-sm
              swiper-slide-active:scale-120
              swiper-slide-active:shadow-lg
              swiper-slide-active:z-10
              scale-95
          

            "
              >
                {item}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="w-full px-4 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-8 md:mb-12 text-center">
            我们的服务
          </h2>

          {/* Service Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {services.map((item) => (
              <div
                key={item}
                className="flex items-center justify-center text-center rounded-2xl border border-gray-200 bg-gray-50 px-3 py-6 text-sm md:text-base text-gray-800 shadow-sm hover:shadow-md transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
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
        <div className="container mx-auto px-4">
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
      <section className="bg-white py-8 text-center">
        <div className="container mx-auto px-4">
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
