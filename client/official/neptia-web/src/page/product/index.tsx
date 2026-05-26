import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ArrowRight, Check, Compass, Sparkles } from "lucide-react";

type CheckoutItem = {
  amount: string;
  name: string;
  price: string;
};

const PAYPAL_SANDBOX_CLIENT_ID =
  "AXv7irNWKdSMlCod7_Zl4Qv50tJtjlU8PA4ybAWAwsHcS1ADLjaeZfnP2_lxQAC4kwxSvyCyw0YMrsqI";
const PAYPAL_CURRENCY = "USD";

const ProductPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const productData = t("product", { returnObjects: true }) as Record<
    string,
    any
  >;

  const allLabel = t("product.ui.all");
  const [filter, setFilter] = useState<string>(allLabel);
  const [selectedCheckout, setSelectedCheckout] = useState<CheckoutItem | null>(
    null,
  );
  const [paymentStatus, setPaymentStatus] = useState<string>("");

  const categories = useMemo<string[]>(
    () => [
      allLabel,
      ...Array.from(
        new Set<string>(productData.product.list.map((p: any) => p.category)),
      ),
    ],
    [allLabel, productData.product.list],
  );

  const filteredProducts = useMemo(
    () =>
      filter === allLabel
        ? productData.product.list
        : productData.product.list.filter((p: any) => p.category === filter),
    [allLabel, filter, productData.product.list],
  );

  const productCount = productData.product.list.length;
  const packageCount = productData.package.list.length;
  const categoryCount = categories.length - 1;

  const categoryPalette = [
    "from-cyan-500 to-blue-600",
    "from-blue-500 to-indigo-600",
    "from-emerald-500 to-teal-600",
    "from-orange-500 to-amber-600",
    "from-fuchsia-500 to-pink-600",
    "from-violet-500 to-purple-600",
    "from-sky-500 to-cyan-600",
  ];

  const categoryColors = useMemo<Record<string, string>>(
    () =>
      categories.slice(1).reduce(
        (acc: Record<string, string>, category: string, index: number) => {
          acc[category] = categoryPalette[index % categoryPalette.length];
          return acc;
        },
        {},
      ),
    [categories],
  );

  const topProducts = [
    ...Array.from(
      new Map(
        productData.product.list.map((item: any) => [item.category, item]),
      ).values(),
    ),
  ].slice(0, 4);

  const parseAmountFromPrice = (price: string) => {
    const normalized = price.replace(/,/g, "");
    const matched = normalized.match(/(\d+(\.\d+)?)/);
    const value = matched ? Number(matched[1]) : 1;

    if (!Number.isFinite(value) || value <= 0) {
      return "1.00";
    }

    return value.toFixed(2);
  };

  const openPayPalCheckout = (name: string, price: string) => {
    setPaymentStatus("");
    setSelectedCheckout({
      amount: parseAmountFromPrice(price),
      name,
      price,
    });
  };

  const navigateToSuccessPage = (payload: {
    amount: string;
    item: string;
    currency: string;
    orderId?: string;
  }) => {
    const search = new URLSearchParams({
      item: payload.item,
      amount: payload.amount,
      currency: payload.currency,
      orderId: payload.orderId || "",
    }).toString();

    navigate(`/home/payment-success?${search}`);
  };

  const paypalScriptOptions = useMemo(
    () => ({
      clientId: PAYPAL_SANDBOX_CLIENT_ID,
      components: "buttons",
      currency: PAYPAL_CURRENCY,
    }),
    [],
  );

  return (
    <PayPalScriptProvider options={paypalScriptOptions}>
      <div className="relative overflow-x-hidden bg-[var(--home-bg)] pb-8 [font-family:var(--font-display)]">
        <div className="pointer-events-none absolute inset-x-0 -top-28 h-[26rem] bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.2),transparent_60%)]" />
        <div className="pointer-events-none absolute -left-24 top-48 h-72 w-72 rounded-full bg-cyan-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-80 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />

      <section className="relative z-10 flex min-h-[64vh] items-center px-4 pb-20 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-medium text-cyan-700 backdrop-blur">
              <Sparkles className="mr-2 h-4 w-4" />
              {t("product.ui.catalog")}
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {productData.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              {productData.hero.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/home/contact")}
                className="inline-flex min-w-[210px] items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-[0_15px_28px_rgba(15,23,42,0.24)]"
              >
                {productData.hero.contact}
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .getElementById("product-catalog")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="inline-flex min-w-[210px] items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-medium text-slate-800 transition hover:border-cyan-500 hover:text-cyan-700"
              >
                {t("product.ui.explore")}
                <Compass className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-[0_24px_45px_rgba(15,23,42,0.12)] backdrop-blur lg:p-8"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: t("product.ui.services"), value: `${productCount}+` },
                { label: t("product.ui.packages"), value: `${packageCount}+` },
                {
                  label: t("product.ui.categories"),
                  value: `${categoryCount}+`,
                },
                {
                  label: t("product.ui.filtered"),
                  value: `${filteredProducts.length}+`,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <p className="text-3xl font-semibold text-slate-900">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-cyan-100 bg-gradient-to-r from-cyan-50 via-blue-50 to-slate-50 p-4 text-sm text-slate-600">
              {t("product.ui.hint")}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 border-y border-slate-200/70 bg-white/85 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-semibold text-slate-900 sm:text-4xl">
            {productData.category.title}
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-slate-600">
            {t("product.ui.filterDesc", { count: filteredProducts.length })}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {categories.map((cat: string) => {
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md"
                      : "bg-white text-slate-700 ring-1 ring-slate-200 hover:ring-cyan-400"
                  }`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="product-catalog"
        className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topProducts.map((item: any, index: number) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.06 }}
              className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-cyan-700">
                {item.category}
              </p>
              <p className="mt-2 line-clamp-2 text-base font-semibold text-slate-900">
                {item.name}
              </p>
              <p className="mt-2 text-sm text-slate-500">{item.price}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((p: any, idx: number) => (
            <motion.div
              key={`${p.name}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ delay: idx % 6 ? (idx % 6) * 0.04 : 0 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.08)] transition-shadow hover:shadow-[0_16px_38px_rgba(15,23,42,0.16)]"
            >
              <div
                className={`h-1.5 w-full bg-gradient-to-r ${categoryColors[p.category] || "from-cyan-500 to-blue-600"}`}
              />
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {p.category}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-slate-900">
                      {p.name}
                    </h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
                    {p.icon}
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-slate-600">
                  {p.features.map((f: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-2 mt-[2px] h-4 w-4 text-cyan-600" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-end justify-between border-t border-slate-200 pt-5">
                  <div>
                    <p className="text-xs text-slate-500">{t("product.ui.startAt")}</p>
                    <p className="text-2xl font-semibold text-slate-900">{p.price}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => openPayPalCheckout(p.name, p.price)}
                      className="rounded-full bg-[#0070BA] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#005ea6]"
                    >
                      {t("product.ui.payWithPayPal")}
                    </button>
                    <button
                      onClick={() => navigate("/home/contact")}
                      className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition group-hover:bg-cyan-700"
                    >
                      {productData.product.contact}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="packages" className="relative z-10 bg-slate-900 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              {productData.package.title}
            </h2>
            <p className="mt-3 text-slate-300">{t("product.ui.packageDesc")}</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productData.package.list.map((pkg: any, idx: number) => (
              <motion.div
                key={`${pkg.name}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: idx % 3 ? (idx % 3) * 0.08 : 0 }}
                className="flex h-full flex-col rounded-3xl border border-slate-700 bg-slate-800/65 p-6 shadow-[0_18px_34px_rgba(0,0,0,0.25)] backdrop-blur"
              >
                <h3 className="text-lg font-semibold text-white">{pkg.name}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {pkg.services.map((s: string, i: number) => (
                    <li key={i} className="flex">
                      <Check className="mr-2 mt-[2px] h-4 w-4 text-cyan-400" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-slate-700 pt-5">
                  <p className="text-sm text-slate-400">
                    {productData.package.warn}: {pkg.duration}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">{pkg.price}</p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <button
                    onClick={() => openPayPalCheckout(pkg.name, pkg.price)}
                    className="rounded-full bg-[#0070BA] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#005ea6]"
                  >
                    {t("product.ui.payWithPayPal")}
                  </button>
                  <button
                    onClick={() => navigate("/home/contact")}
                    className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >
                    {productData.package.buy}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-cyan-100 bg-[linear-gradient(120deg,#ecfeff_0%,#dbeafe_45%,#f8fafc_100%)] p-10 text-center shadow-[0_25px_60px_rgba(6,78,99,0.16)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {productData.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              {productData.cta.description}
            </p>
            <button
              onClick={() => navigate("/home/contact")}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.3)] transition hover:translate-y-[-2px]"
            >
              {productData.cta.contact}
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>

        {selectedCheckout && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/65 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl">
              <h3 className="text-lg font-semibold text-slate-900">
                {t("product.ui.payWithPayPal")}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{selectedCheckout.name}</p>
              <p className="mt-1 text-sm text-slate-500">
                {t("product.ui.startAt")}: {selectedCheckout.price}
              </p>
              <p className="mt-4 rounded-lg bg-cyan-50 px-3 py-2 text-xs text-cyan-700">
                Sandbox Test Amount: ${selectedCheckout.amount} {PAYPAL_CURRENCY}
              </p>

              <div className="mt-4">
                <PayPalButtons
                  forceReRender={[selectedCheckout.amount, selectedCheckout.name]}
                  createOrder={(_data, actions) =>
                    actions.order.create({
                      intent: "CAPTURE",
                      purchase_units: [
                        {
                          amount: {
                            currency_code: PAYPAL_CURRENCY,
                            value: selectedCheckout.amount,
                          },
                          description: selectedCheckout.name,
                        },
                      ],
                    })
                  }
                  onApprove={async (_data, actions) => {
                    const captured = await actions.order?.capture();
                    setSelectedCheckout(null);
                    navigateToSuccessPage({
                      amount: selectedCheckout.amount,
                      item: selectedCheckout.name,
                      currency: PAYPAL_CURRENCY,
                      orderId: _data.orderID || captured?.id,
                    });
                  }}
                  onError={() => setPaymentStatus("error")}
                />
              </div>
              {paymentStatus === "error" && (
                <p className="mt-3 rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">
                  PayPal payment failed. Please retry.
                </p>
              )}

              <button
                onClick={() => setSelectedCheckout(null)}
                className="mt-4 w-full rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </PayPalScriptProvider>
  );
};

export default ProductPage;
