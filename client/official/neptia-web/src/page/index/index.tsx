import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Index() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const indexData = t("index", { returnObjects: true }) as Record<string, any>;

  return (
    <div className="home-page pt-[120px] pb-[80px]">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white pb-5">
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
