import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// 页面组件
const ProductPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [filter, setFilter] = useState<string>("All");

  const productData = t("product", { returnObjects: true }) as Record<
    string,
    any
  >;
  const categories = [
    "All",
    ...Array.from(
      new Set(productData.product.list.map((p: any) => p.category)),
    ),
  ];

  const filteredProducts =
    filter === "All"
      ? productData.product.list
      : productData.product.list.filter((p: any) => p.category === filter);

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-indigo-50 to-gray-50 text-center">
        <h1 className="text-5xl font-bold mb-4">{productData.hero.title}</h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          {productData.hero.description}
        </p>
        <span
          onClick={() => navigate("/home/contact")}
          className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
        >
          {productData.hero.contact}
        </span>
      </section>

      {/* 分类筛选 */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          {productData.category.title}
        </h2>
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((cat: any) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-xl font-semibold transition-colors ${
                filter === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 hover:bg-indigo-100"
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 产品列表 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((p: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg p-6 flex flex-col hover:shadow-2xl transition-all"
            >
              <div className="text-5xl mb-4">{p.icon}</div>
              <h3 className="text-xl font-bold mb-2">{p.name}</h3>
              <ul className="text-sm text-gray-600 mb-4 list-disc list-inside space-y-1">
                {p.features.map((f: any, i: number) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <div className="mt-auto text-indigo-600 font-bold text-lg">
                {p.price}
              </div>
              <span
                onClick={() => navigate("/home/contact")}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm text-center hover:bg-indigo-700 transition-colors"
              >
                {productData.product.contact}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 套餐区 */}
      <section id="packages" className="py-24 bg-indigo-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          {productData.package.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {productData.package.list.map((pkg: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-md p-6 flex flex-col hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold mb-4">{pkg.name}</h3>
              <ul className="text-sm text-gray-600 mb-4 list-disc list-inside space-y-1">
                {pkg.services.map((s: any, i: number) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
              <p className="text-gray-500 mb-4">
                {productData.package.warn}: {pkg.duration}
              </p>
              <div className="mt-auto text-indigo-700 font-bold text-lg">
                {pkg.price}
              </div>
              <span
                onClick={() => navigate("/home/contact")}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm text-center hover:bg-indigo-700 transition-colors"
              >
                {productData.package.buy}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-indigo-50 to-gray-50 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">{productData.cta.title}</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          {productData.cta.description}
        </p>
        <a
          href="mailto:contact@neptia.net"
          className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
        >
          {productData.cta.contact}
        </a>
      </section>
    </div>
  );
};

export default ProductPage;
